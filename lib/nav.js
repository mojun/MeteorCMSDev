/*
	Nav Model
	
	

*/

NavMenu = new Meteor.Collection('navmenu');

if(Meteor.isClient){
	Meteor.subscribe('navmenu');
}

if(Meteor.isServer){
	Meteor.publish('navmenu', function () {
		return NavMenu.find({},{field:{id: 1, order: 1, label: 1, page: 1, url: 1}});
	});

	if(NavMenu.find({}).count() === 0){
		NavMenu.insert({
			order: 1,
			label: "Home",
			page: "home",
			url: "/"
		});

		NavMenu.insert({
			order: 2,
			label: "About",
			page: "about",
			url: "/about"
		});

		NavMenu.insert({
			order: 3,
			label: "Contact",
			page: "contact",
			url: "/contact"
		});

	}
}