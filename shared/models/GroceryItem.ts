import { ObjectId } from "mongodb";

export default class GroceryItem {
    constructor(
        public _id:ObjectId,
        public id:string,
        public item:string,
        public store:string){}
}