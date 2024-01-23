
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Database"))
    .catch((err: Error) => console.log(err));

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
}, {
    timestamps: true
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;