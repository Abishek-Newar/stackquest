import {db} from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { database } from "./config";

export default async  function getOrCreateDatabase(){
    try {
        await database.get(db)
        console.log("Database Connection")
    } catch (error) {
        try {
            await database.create(db, db)
            console.log("databse created")
            await Promise.all([
                createAnswerCollection(),
                createCommentCollection(),
                createQuestionCollection(),
                createVoteCollection(),
            ])
            console.log("Collection created")
            console.log("databse connected")
        } catch (error) {
            console.log("error creating database",error)
        }
        
    }
    return database
}