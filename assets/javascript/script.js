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
});
