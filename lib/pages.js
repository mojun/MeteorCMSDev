Pages = new Meteor.Collection('pages');
// 页面

if(Meteor.isClient) {
    Meteor.subscribe("pages");
}

if(Meteor.isServer) {
    Meteor.publish("pages", function() {
        return Pages.find({},{fields:{page: 1, title: 1, content: 1}});
    });

    if(Pages.find({}).count() === 0) {
        console.log("add page Data >>>");
        Pages.insert({
            page: "home",
            title: "Home",
            content: "<legend>Welcome to Meteor CMS</legend><p>This is the home page.</p><blockquote><p>The WYSIWYG editor should be completely compatible with Twitter Bootstrap such as in quotes</p><small><cite>Aric Camarata</cite></small></blockquote>",
            url: "/"
        });

        Pages.insert({
            page: "about",
            title: "About",
            content: "<legend>About us</legend><p>This is a placeholder for the about page.</p>",
            url: "/about"
        });

        Pages.insert({
            page: "contact",
            title: "Contact",
            content: "<legend>Contact us</legend><p>This is a placeholder for the contact page.</p>",
            url: "/contact"
        });
    }
}

TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Pages = new Tabular.Table({
    name:"Pages",
    collection: Pages,
    columns:[
        {data: "page", title:"PageColumn"},
        {data: "title", title:"TitleColumn"}
    ]
});
