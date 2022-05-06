import { MongoClient } from "mongodb";
import { Injectable } from "@nestjs/common";


const uri= "mongodb://localhost:27017/testAPI"

@Injectable()

export class DbConnection{
    db;
    constructor(){
        const databaseClient = new MongoClient(uri);
        databaseClient.connect()
        .then(connect =>
            { 
            this.db = connect.db();
            console.log(`Database connected`)
        })
        .catch(err => {
            console.error('this error show from Database', err )
        });
        
    }
}