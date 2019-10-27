const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProjectSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tasks:{
    type: String,
    required: false,
  },
  createAt:{
    type: Date,
    default: Date.now,
  },
});
ProjectSchema.plugin(mongoosePaginate);
mongoose.model('Project', ProjectSchema);