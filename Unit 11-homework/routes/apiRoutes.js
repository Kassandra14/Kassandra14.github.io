// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const NoteData = require('../db/db.json');


// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', (req, res) => res.json(NoteData));


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/notes', function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    let newNote = req.body;
    let lastId = 0;
    if (NoteData.length !==0) {
      lastId = noteData[NoteData.length -1][id];
    } 
    let newId = lastId + 1;
    newNote[id] = newId;
    NoteData.push(neNote);
    writeFileAsync("db/db.json", JSON.stringify(NoteData)).then(function() {
      console.log("note added");
    })
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (NoteData.length < 5) {
      NoteData.push(req.body);
      res.json(true);
    } else {
      
      //  otherwise
      return res.json(false);
    }
  });

};
