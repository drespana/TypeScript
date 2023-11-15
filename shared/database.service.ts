import { Injectable } from '@angular/core';
import * as mongoDB from "mongodb";
//import * as dotenv from "dotenv";

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor() { }


}

// supposed to come from dotenv
const DB_CONN_STRING="mongodb+srv://asgrim:ER4GONm6-w105dx!@grim0.mnpenyr.mongodb.net/?retryWrites=true&w=majority"
const DB_NAME="grocerydb"
const GROCERY_COLLECTION="grocerycollection"

export const collections: {groceries?: mongoDB.Collection} = {}
 
export async function connectToDatabase () {
  
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);
  
  await client.connect();

  const db: mongoDB.Db = client.db(DB_NAME);

  const groceryCollection: mongoDB.Collection = db.collection(GROCERY_COLLECTION);

  collections.groceries = groceryCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection ${groceryCollection.collectionName}`)
}
