/**
	@import Config.js

**/

// 静态页面内容
Template.registerHelper('content', function(){
	pageModel = Session.get('staticWebContent');
	return pageModel.content;
});

// 网站名称
Template.registerHelper('siteName', function(){
	configModel = Config.findOne({});
	return configModel ? configModel.settings.siteName : "";
});

// 导航条 仅对静态页面
Template.registerHelper('navmenu', function(){
	menu = NavMenu.find({}, {sort: {order: 1}}).fetch();
	return navMenuTag(menu);
});


function navMenuTag(menu) {
	var output = "";
	for (var i = 0; i < menu.length; i++) {
		item = menu[i];
		li_class = item.page == Session.get("page") ? "active" : "";
		href = item.url ? " href='" + item.url + "'" : "";
		link = "<a" + href + ">" + item.label + "</a>";

		output = output + "<li =class='" + li_class + "'>" + link + "</li>";
	}
	return output;
}
