import env from "@/app/env"
import {Client, Account, Avatars, Databases, Storage, Users}  from "node-appwrite"
const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey);


const storage = new Storage(client);
const database = new Databases(client)
const avatars = new Avatars(client)
const users = new Users(client) 

export { client, database,users, avatars, storage}