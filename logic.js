// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGqR1CokOWFdb9yLPS_HcNhuVqvmyyQAs",
    authDomain: "test-5ab0f.firebaseapp.com",
    databaseURL: "https://test-5ab0f.firebaseio.com",
    projectId: "test-5ab0f",
    storageBucket: "test-5ab0f.appspot.com",
    messagingSenderId: "67936495214"
};

firebase.initializeApp(config);


var database = firebase.database();
var count = 100;

//Listener
database.ref().on("value", function(snapshot) {
    // Print the initial data to the console.
    console.log(snapshot.val());
    //Count
    count = snapshot.val().clicks;
    // Print the initial data to the page.
    $("#clickValue").html(count);

});

$("#clickButton").on("click", function () {
    count--;
    database.ref().set({
        clicks:count
    });
});

$("#restartButton").on("click", function() {
    database.ref().set({
        clicks: 100
    });
});
