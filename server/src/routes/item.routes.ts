import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "../db/database"

export const itemRouter = express.Router();
itemRouter.use(express.json());


// GET all items
itemRouter.get("/", async (_req, res) => {
    try{
        const allItems = await collections.items?.find({store:"Jewel Osco"}).toArray();
        res.status(200).send(allItems);
    } catch (err) {
        res.status(500).send(err.message)
    }
});

// GET item by id
itemRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = {_id: new mongodb.ObjectId(id)};
        const item = await collections.items?.findOne(query);

        if (item) {
            res.status(200).send(item);
        } else {
            res.status(404).send(`Failed to find an item: ID: ${id}`)
        }
    } catch (err) {
        res.status(404).send(`Failed to find an item: ID ${req?.params?.id}`)
    }
})