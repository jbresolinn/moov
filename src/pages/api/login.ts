import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'
import axios from 'axios'


let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

interface UserNotFound {
  message: string;
  documentation_url: string
}

export default async (request: NowRequest, response: NowResponse) => {

  const { username } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('users');

  const userExists = await collection.findOne({ username });

  if (!userExists) {
    try {
      const { data } = await axios.get(`${process.env.GITHUB_URL}/users/${username}`);

      const user = await collection.insertOne({
        name: data.name,
        avatar: data.avatar_url,
        username,
        createdAt: new Date()

      })
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  return response.status(200).json(userExists);
}