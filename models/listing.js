const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        // Fallback if the field is missing entirely
        default: "https://images.unsplash.com/photo-1789470956383-7e077d785a0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // Safer setter that catches empty strings, undefined, or null values
        set: (v) => !v || v.trim() === "" 
            ? "https://images.unsplash.com/photo-1789470956383-7e077d785a0f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            : v,
    }
},

    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;