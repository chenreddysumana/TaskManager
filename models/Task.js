const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
name:
{
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [30, 'name cannot have more than 30 characters'],
},
completed:
{
    type: Boolean,
    default: false,
},
completeby:
{
    type: String,
},
})

module.exports = mongoose.model('Task',TaskSchema)