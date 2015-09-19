

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);



  Template.body.events({
	'submit #zombieSignup': function(event){
		event.preventDefault();
		var email = event.target.signUpEmail.value;
		var passOne = event.target.passOne.value;
		var passTwo = event.target.passTwo.value;
		
		if(passOne != passTwo){
			$('#signup-msg').text("Passwords do not match");
			return false;
		}
		
		Accounts.createUser({
			email: email,
			password: passOne
		}, function(err){		
			if(err != null)
				$('#signup-msg').text(err.reason);
			else
				$('#signup').modal('hide');
		});
	}, 
	
	'submit #zombieSignin': function(event){
		event.preventDefault();
		var email = event.target.signinEmail.value;
		var passOne = event.target.signinPass.value;
		
		var user = {"email":email};
		Meteor.loginWithPassword(user, passOne, function(err){
			if(err != null)
				$('#signin-msg').text(err.reason);
			else
				$('#signin').modal('hide');
		});
	}
	
  });
  

  
Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
	
	'click #gmail-login': function(event){
		Meteor.loginWithGoogle({}, function(err){
			if(err){
				throw new Meteor.Error("Google login failed");
			}
		});
	},

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        });
    }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
