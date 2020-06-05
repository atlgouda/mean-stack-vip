// var Vip = require('./app/models/vip.js')

let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const vipRoute = require('../backend/routes/vip.route')
const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/mean-vip-list')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-vip-list')));
app.use('/api', vipRoute)
app.use(express.static('src'));
app.get('*', function (req, res) {
   res.sendFile('index.html');
 });

// if (process.env.NODE_ENV === "production") {
//    app.use(express.static("build"));
//    app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//     });
//   }

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
  
})
//get User
// app.get('/test', function (req, res) {
//    Vip.findOne({ id: '5ed6982ff9f3d862688954c3' }, function (err, vip) {
//       if (err) {
//          res.send(err);
//       } else {
//          if (!vip) {
//             res.send ('vip does not exist');
//          } else {
//             res.send(vip)
//          }
//       }
//    })
// })

// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
//    next(createError(404));
// });


// error handler
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
  });


