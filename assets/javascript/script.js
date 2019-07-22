// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWWlRRdKytiJIk28q5pMLhTIVVhyWv2XM",
  authDomain: "train-times-54115.firebaseapp.com",
  databaseURL: "https://train-times-54115.firebaseio.com",
  projectId: "train-times-54115",
  storageBucket: "",
  messagingSenderId: "611518358397",
  appId: "1:611518358397:web:872c25ef9796b6a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Initial Values
var name = "";
var destination = "";
var frequency = 0;
var firstTime = "";

// Capture Button Click
$("#submit-btn").on("click", function (event) {

  event.preventDefault();


  name = $("#name-input").val().trim();
  destination = $("#destination-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  firstTime = $("#firstTime-input").val().trim();

  console.log(name);
  console.log(destination);
  console.log(frequency);
  console.log(firstTime);





  // Code for the push
  database.ref().push({
    name: name,
    destination: destination,
    frequency: frequency,
    firstTime: firstTime

  });



// clear inputs
$('input').val("");


});

// function when the child is added
database.ref().on("child_added", function (childSnap) {


  console.log(childSnap.val().name);
  console.log(childSnap.val().destination);
  console.log(childSnap.val().frequency);
  console.log(childSnap.val().firstTime);
  
  // variables for the database snapshots
  firebaseName = childSnap.val().name;
  firebaseDestination= childSnap.val().destination;
  firebaseFrequency = childSnap.val().frequency;
  firebaseFirstTime = childSnap.val().firstTime;
  
  var tr = $("<tr>");
  
  var tdName = $("<td>").text(firebaseName);
  var tdDestination = $("<td>").text(firebaseDestination);
  var tdFrequency = $("<td>").text(firebaseFrequency);
  // var tdFirstTime = $("<td>").text(firebaseFirstTime);
  // dont need a td for the first time
  
  tr.append(tdName).append(tdDestination).append(tdFrequency);
  
  $(".trains-tbody").append(tr);
  
  
  
  });
