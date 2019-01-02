/*
_________        .__
\_   ___ \_______|__| _____   __________   ____
/    \  \/\_  __ \  |/     \ /  ___/  _ \ /    \
\     \____|  | \/  |  Y Y  \\___ (  <_> )   |  \
 \______  /|__|  |__|__|_|  /____  >____/|___|  /
        \/                \/     \/  Clyde    \/

Author: CrimsonClyde
Stardate: 35c3
Location: Somewhere deep in the assemblys

Node Helper File
*/

// Modules & Global Variables
var NodeHelper = require('node_helper');    // Starting node helper
const fs = require('fs');                   // Filesystem module (for reading the udr-cal.txt file)
const path = require("path");               // Path Module (for getting current path)
var debug = 0;                              // Debug on = 1, 0 is off
var sDate = '';                             // Declaring global variable for current date
var file;                                   // Declaring global variable for file
var calFile = 'udr-cal.txt';                // Event calendar file name

// Initiate Module
module.exports = NodeHelper.create({
    start: function() {
        console.log('Starting node_helper');
    },

    // Function: Get current date
    getDate: function() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) { dd = '0'+dd }
      if(mm<10) { mm = '0'+mm }

      today = yyyy + '-' + mm + '-' + dd;
      this.sendSocketNotification('DATE', today);
      sDate = today;
      if (debug == 1) { console.log('------> Date Constructor'); }
      if (debug == 1) { console.log('Current date: ' + sDate); }
      //return today;
    },


    //Send Notification Update
    socketNotificationReceived: function(notification, payload) {
        if(notification === 'START'){
            this.config = payload;
            this.getData();
            this.getDate();
            setInterval(() => {
                this.getData();
                this.getDate();
            }, this.config.updateInterval);
        }
    },

    // Path and calendar file constructor
    constructFile: function() {
      file = path.resolve(__dirname, calFile);
      if (debug == 1) { console.log('-------------> ' + file); }
    },

    // Read local text file
    getData: function(){
        // Get path and file
        this.constructFile();
        //to read a file to do the following
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            if (debug == 1) { console.log('------> File Reader'); }
            if (debug == 1) { console.log('Data from file: ' + data); }
            // Now we have date and data missing doing something with it
            this.parseData(data);
        });
    },

    // Since we have the file data we need to filter it
    // In the end we only need the event.
    parseData: function(sData) {
      if (debug == 1) { console.log('------> Parse Data let see if we have everything'); }
      if (debug == 1) { console.log('sDate: ' + sDate); }
      if (debug == 1) { console.log('sData: ' + sData); }

      // Use split to convert string to array
      var split_sData = sData.split(",");
      if (debug == 1) { console.log('sData as Array: ' + split_sData); }

      // Clean array linebreaks and stuff
      var clean_sData = split_sData.filter(el => el.trim());
      if (debug == 1) { console.log('sData as cleaned Array: ' + clean_sData); }

      // Find date in Array
      var matches = clean_sData.filter(s => s.includes(sDate))
      if (debug == 1) { console.log('Matches: ' + matches ); }

      // Remove line break and date
      if (matches != '') {
        var finalEvent = matches.toString().replace('\n' + sDate,'');
      } else {
        var finalEvent = '';
      }
      if (debug == 1) { console.log('Final result to display: ' + finalEvent); }

      // Send final result to module
      this.sendSocketNotification('EVENT', finalEvent);
    }

});
