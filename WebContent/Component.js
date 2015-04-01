jQuery.sap.declare("sap.ui.demo.Component");
jQuery.sap.require("sap.ui.demo.MyRouter");

sap.ui.core.UIComponent.extend("sap.ui.demo.Component",{
	
	metadata : {
        stereotype : "component",
        "abstract": false,  
        version : "1.0",  
        includes : [],  // css, javascript files that should be used in the component
        dependencies : { // external dependencies
            libs : [], // the libraries that you component will be using
            components : [], // the components that your component will use
            ui5version : "" // the version of SAP UI5 that your component requires
                },
                properties: {
                    config : "any"
            },
    routing: { 
        config : {
            routerClass : sap.ui.demo.MyRouter,
            viewType : "XML",
            viewPath : "weather",
            targetControl:"app",
			targetAggregation:"content",
		    clearTarget : true
         },    	
        routes: [ // contains routing configuration objects
                  {
  		        	pattern: "",
  					view: "WeatherView",
  		        	name: "weather",
  		            viewType: sap.ui.core.mvc.ViewType.XML
  		            }, 
  			     {
  		            pattern: "detail/{id}",
  		            name: "detail",
  		            viewType: sap.ui.core.mvc.ViewType.XML,
  		            view: "Detail"
                 }
            ]
        }},
 init:function() {
  sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
  this.getRouter( ).initialize();
 },

 createContent: function(){
		this.view = sap.ui.view({id:"app",viewName:"weather.App",type:sap.ui.core.mvc.ViewType.JS});
		return this.view;
  }
        
}

);