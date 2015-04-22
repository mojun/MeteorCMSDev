// 网站配置

Config = new Meteor.Collection('config');

if(Meteor.isClient){
	Meteor.subscribe('config');
}

if(Meteor.isServer){
	Meteor.publish('config', function () {
		return Config.find({}, {fields: {settings: 1, modules: 1, themes: 1}});
	});

	if(Config.find({}).count() === 0){
		Config.insert({
			settings:{
				"siteName": "KimoWorks",
				"siteTitle": "KimoWorks",
				"theme": "Cerulean"
			},
			modules: {
				"foo": {
					"option": 0
				}
			}
		});
	}
}