const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Vip = new Schema({
   name: {
      type: String
   },
   occupation: {
      type: String
   },
   type: {
      type: String
   },
   detail: {
      type: String
   },
   reason: {
       type: String
   },
   yt: {
       type: String
   }
}, {
   collection: 'vips'
})

module.exports = mongoose.model('Vip', Vip)