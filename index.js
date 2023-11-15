const express = require('express');
const Mongoclient = require('mongodb').MongoClient;

const app = express();
app.use(express.json());

const CONNECTION_STRING = "mongodb+srv://asgrim:ER4GONm6-w105dx!@grim0.mnpenyr.mongodb.net/?retryWrites=true&w=majority";

const client = new Mongoclient(CONNECTION_STRING);
const database = client.db('grocerydb')

const connectToDatabase = async ()=>{
    try{
        await client.connect();
        console.log(`Connected to ${database.s.namespace}`)
        const myCollection = database.collection('grocerycollection')
        const query = {"id":{"$gte":"1"}};
        const projection = {"_id":0}
        const found = await myCollection.find(query, projection)
            .toArray()
        console.log(found)
    } catch (err) {
        console.error(`Error connecting to the db: ` + err);
    }
};

const main = async () => {
    try {
        await connectToDatabase();
    } catch (err) {
        console.error(`Error connecting to the db: ` + err);
    } finally {
        await client.close();
    }
}

main();