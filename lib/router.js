// @import Pages Collection from pages.js

// 配置默认的layout
Router.configure({
	layoutTemplate:'defaultLayout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

// 
Router.route('staticWeb',{
	path: '/:page?',
	waitOn: function(){
		var waiton = [];
		waiton.push(Meteor.subscribe(Pages._name));
		return waiton;
	},
	action: function(){
		// this.layout("hello");
		var page = this.params.page || 'home';
		var pageModel = Pages.findOne({page: page});
		var isFound = !!pageModel;
		var pageTitle = isFound ? pageModel.title : "not found";

		document.title = "Site Name | " + pageTitle;
		//当前选中的页面的模型
		Session.set('staticWebContent', pageModel); 
		//当前选中的页面的page标记
		Session.set('page', page); 

		var tmpl = isFound ? "pages" : "notFound";
		this.render(tmpl);
	}

});