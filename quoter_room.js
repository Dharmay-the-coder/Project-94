var firebaseConfig = {
      apiKey: "AIzaSyCz_Ylhb0GbGTZ0FIJ_EwPMVq6E38RYOsc",
      authDomain: "project-94-6815d.firebaseapp.com",
      databaseURL: "https://project-94-6815d-default-rtdb.firebaseio.com",
      projectId: "project-94-6815d",
      storageBucket: "project-94-6815d.appspot.com",
      messagingSenderId: "686953544758",
      appId: "1:686953544758:web:2155d056faff72c59dec97"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
