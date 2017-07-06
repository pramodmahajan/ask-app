
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqiwlGql9b08ot0phHXp7nlFget57J-W8",
    authDomain: "sample1-64b27.firebaseapp.com",
    databaseURL: "https://sample1-64b27.firebaseio.com",
    projectId: "sample1-64b27",
    storageBucket: "sample1-64b27.appspot.com",
    messagingSenderId: "799017769098"
  };

  firebase.initializeApp(config);


var database = firebase.database();

var questionRef = database.ref("questions");
var usersRef = database.ref("users");

// var storage = firebase.storage();

// var storageRef = firebase.storage.ref();

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // 1. Logged In - Show Logout
    console.log("User is Logged In");
    // console.log(user);
    // console.log("Email:",user.email,user.displayName,user.photoURL);

    // Update information in database
    var updates = {};
    updates['/users/'+user.uid] = {name:user.displayName,photoURL:user.photoURL};
    firebase.database().ref().update(updates);

    $('#signout').show();
    $('#add_question').show();
    
    $('#signin').hide();
    $('#signup').hide();

  } else {
    // 2. Logged Out/ Not Logged In - Show "Login with Google"
    // console.log("User is not logged in");

    $('#signout').hide();
    $('#add_question').hide();
    
    $('#signup').show();
    $('#signin').show();

  }

});
    
 function signInUser() {

      // if (firebase.auth().currentUser) {
      //   // [START signout]

      //   firebase.auth().signOut();
      //   // [END signout]
      // } else {
      var email = $('#email').val();
      var password = $('#password').val();
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log("user : ", user);
          window.location="home.html";  
          
          // alert("Welcome " +  user.displayName);

        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      //}
   }

  function signOut() {
    

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    
  });

}

 function handleSignUp() {
      // var email = document.getElementById('email').value;
      // var password = document.getElementById('password').value;
      // var confirmPassword = document.getElementById('confirm-password').value;

      // var fullname = document.getElementById('fullname').value;
      // var phoneno = document.getElementById('phonenumber').value;

      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirm-password').val();
      var fullname = $('#fullname').val();
      var phoneno = $('#phonenumber').val();

      console.log("phoneno :" , phoneno);
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }

    if (password != confirmPassword) {
        alert('Password mismatch.');
        return;
    }

      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        console.log(user);

        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            if (!emailVerified) {
              sendEmailVerification();
            }
            user.updateProfile({
              displayName: fullname,
              phoneNumber: phoneno
              //photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(function() {
              // Update successful.
              console.log("Update user successful");
            }, function(error) {
              // An error happened.
              console.log("profile update error");
            });
        } else {
          // User is signed out.
           console.log("user is signed out!");
        }

      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }
     /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      console.log("sendEmailVerification " + firebase.auth().currentUser );
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }



     function sendPasswordReset() {
      var email = $('#email').val();
      if (email.length< 4 ) {
         alert("Please enter valid email");
         return;
      }
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        alert('Password Reset Email Sent!');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
      });
    }





//   $.extend({
//   getUrlVars: function(){
//     var vars = [], hash;
//     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for(var i = 0; i < hashes.length; i++)
//     {
//       hash = hashes[i].split('=');
//       vars.push(hash[0]);
//       vars[hash[0]] = hash[1];
//     }
//     return vars;
//   },
//   getUrlVar: function(name){
//     return $.getUrlVars()[name];
//   }
// });






// $('#login').click(function(){

// 	firebase.auth().signInWithRedirect(provider).then(function(result) {
// 	  // This gives you a Google Access Token. You can use it to access the Google API.
// 	  var token = result.credential.accessToken;
// 	  // The signed-in user info.
// 	  var user = result.user;
// 	  // ...
// 	}).catch(function(error) {
// 	  // Handle Errors here.
// 	  var errorCode = error.code;
// 	  var errorMessage = error.message;
// 	  // The email of the user's account used.
// 	  var email = error.email;
// 	  // The firebase.auth.AuthCredential type that was used.
// 	  var credential = error.credential;
// 	  // ...
// 	});

// });

// $('#logout').click(function(){

// 	firebase.auth().signOut().then(function() {
// 	  // Sign-out successful.
// 	}).catch(function(error) {
	  
// 	});

// });

// $.extend({
//   getUrlVars: function(){
//     var vars = [], hash;
//     var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for(var i = 0; i < hashes.length; i++)
//     {
//       hash = hashes[i].split('=');
//       vars.push(hash[0]);
//       vars[hash[0]] = hash[1];
//     }
//     return vars;
//   },
//   getUrlVar: function(name){
//     return $.getUrlVars()[name];
//   }
// });


// // 1. Take the file from user

// // 2. Upload the file to firebase storage