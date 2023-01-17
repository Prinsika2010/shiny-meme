const firebaseConfig = {
      apiKey: "AIzaSyANbuiKn9pOnNOtGc0ifqNci2anTzSz14M",
      authDomain: "let-s-chat-68fa2.firebaseapp.com",
      databaseURL: "https://let-s-chat-68fa2-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-68fa2",
      storageBucket: "let-s-chat-68fa2.appspot.com",
      messagingSenderId: "467393869708",
      appId: "1:467393869708:web:63dcc7e21d08061a4448a9",
      measurementId: "G-6XB7JFT1LE"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
