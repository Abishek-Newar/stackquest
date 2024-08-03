import  { Permission } from "node-appwrite"

import {answerCollection, db, questionCollection} from "../name"
import {database} from "./config"


export default async function createAnswerCollection(){
    await database.createCollection(db, answerCollection,
        answerCollection,[
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("users"),
            Permission.update("users"),
            Permission.delete("users")
        ])
    console.log("Answer collection is created")

    await Promise.all([
        database.createStringAttribute(db,questionCollection, "content",10000, true),
        database.createStringAttribute(db,questionCollection, "authorId",50, true),
        database.createStringAttribute(db,questionCollection, "questionId",100, true),
    ])
    console.log("Answer Attribute created")

    // await Promise.all([
    //     database.createIndex(
    //         db,
    //         questionCollection,
    //         "title",
    //         IndexType.Fulltext,
    //         ["title"],
    //         ["asc"]
    //     ),
    //     database.createIndex(
    //         db,
    //         questionCollection,
    //         "content",
    //         IndexType.Fulltext,
    //         ["content"],
    //         ["asc"]
    //     ),
    // ])
}