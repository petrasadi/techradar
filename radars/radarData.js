//This is the title for your window tab, and your Radar
document.title = "Adrian Petras - Technology Radar (November 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':110,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use; people will make fun of you if you don't
// - Trial: technologies worth pursuing; use it to pilot a low-risk project, to "get dirty" with the technology so that you can really understand it
//          for a technology to be promoted to trial, it must be used in project work to understand both its weaknesses and strengths
// - Assess: technologies worth exploring with the goal of understanding their impact; should be used in development spikes and research projects;  
//           the assess phase usualy shows benefits but not limitations
// - Hold: not appropriate for use; don't start anything new with this technology

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            //adopt - 
            {"name":"Code Reviews", "pc":{"r":80,"t":130},"movement":"c"},

            //trial
            {"name":"Reactive Architectures", "pc":{"r":140,"t":140},"movement":"t"},
            {"name":"Structured logging", "pc":{"r":140,"t":130},"movement":"t"},

            //assess
            {"name":"Generated infrastructure diagrams", "pc":{"r":240,"t":160},"movement":"t"}

            //hold

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
            //adopt
            { "name": 'Liquibase', "pc": { r: 80, t: 65 }, "movement": 'c' },
            { name: "Postnam", pc: {r: 75, t: 35}, movement: "c"},
            {name: "PlantUML", pc: {r: 60, t: 40}, movement: "t"},

            //trial
            { "name": 'Couchbase', "pc": { r: 140, t: 25 }, "movement": 'c' },

            //assess
            { "name":"Docker", "pc":{ "r": 210, "t": 75 },"movement":"c"},
            { "name":"Consul", "pc":{ "r": 215, "t": 65 }, "movement":"t" },

            { "name":"Hystrix", "pc":{ "r": 240, "t": 40 }, "movement":"t" },
            { "name": "archaius",    "pc": { "r": 240, "t": 35 }, "movement": "t", domain: "config management" },

            { name:"Go CD", pc:{ r:280, t: 20}, movement:"t", domain: "continuous delivery"},
            {name: "Gor", pc: {r: 275, t: 70}, movement: "t", domain: "testing"},
            { name: "mountebank", pc: { r:280, t: 80}, movement: "t", domain: "testing"},
            { name: "hamms", pc: {r: 290, t: 60}, movement: "t", domain: "testing"},
            {name: "blackbox", pc: {r: 295, t: 70}, movement: "t", domain: "security"},

            {name: "pdfmake", pc: {r: 290, t: 15}, movement: "t", domain: "pdf"}

            // { "name": 'Hibernate ^',    "pc": { r: 380, t: 56 },    "movement": 'c' },
            
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"OpenId Connect", "pc":{"r":130,"t":260},"movement":"t"},   
            {"name":"Location based services", "pc":{"r":130,"t":230},"movement":"c"},
            {"name":"Openstack", "pc":{"r":190,"t":190},"movement":"c"},
            {"name":"RHEL 7", "pc":{"r":170,"t":215},"movement":"c"},      

            {"name":"App containers", "pc":{"r":250,"t":260},"movement":"c"},
            {"name":"Google Cloud Data Flow", "pc":{"r":275,"t":260},"movement":"t"},
            { name: 'Postgres as NoSQL',              pc: { r: 220, t: 255 },              movement: 'c' },
            {"name":"AWS 2014 Innovations", "pc":{"r":270,"t":195},"movement":"c"},
            {"name":"Azure", "pc":{"r":290,"t":265},"movement":"c"},   
            { name: 'Mesos',              pc: { r: 260, t: 265 },              movement: 't' },
            { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
            { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },
            {"name":"Google App Engine", "pc":{"r":290,"t":255},"movement":"c"},   
            {"name":"Google as corporate platform", "pc":{"r":290,"t":200},"movement":"c"},   


            {"name":"Google Play - (alpha/beta builds)", "pc":{"r":30,"t":225},"movement":"c"},
            {"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
            {"name":"AWS", "pc":{"r":90,"t":250},"movement":"c"},   
            { name: 'BigIP v11',              pc: { r: 50, t: 257 },              movement: 'c' },



            {"name":"Ruby On Rails", "pc":{"r":390,"t":215},"movement":"c"},
            {"name":"Everest", "pc":{"r":390,"t":185},"movement":"c"},   
            {"name":"Magnolia CMS", "pc":{"r":390,"t":235},"movement":"c"},   
            {"name":"Java EE - the Bad Parts", "pc":{"r":390,"t":245},"movement":"c"},   
            {"name":"MS SqlServer", "pc":{"r":390,"t":190},"movement":"c"},
            {"name":"RHEL 5", "pc":{"r":370,"t":195},"movement":"c"}

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'CDI', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'Jersey', pc: { r: 60, t: 310 },  movement: 'c' },

            { name: 'Guice', pc: { r: 60, t: 278 },  movement: 'c' },
            { name: 'RxJava', pc: { r: 150, t: 298 },              movement: 'c',  domain: 'template' },          

            {"name":"Java 8", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Groovy ^", "pc":{"r":190,"t":280},"movement":"c"},

            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala - the good parts ^", "pc":{"r":290,"t":320},"movement":"c"},   
            {"name":"Serverside Javascript", "pc":{"r":220,"t":275},"movement":"c"},   
            {"name":"Coffeescript", "pc":{"r":270,"t":282},"movement":"c"},
            {"name":"Functional Reactive Programming", "pc":{"r":285,"t":330},"movement":"c"},   
            {"name":"Clojure", "pc":{"r":280,"t":310},"movement":"c"},
            { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },

            { name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },              movement: 'c',              domain: 'template' },
            { name: 'Spring ^', pc: { r: 360, t: 330 },  movement: 'c' },
            {"name":"Web Objects", "pc":{"r":390,"t":290},"movement":"c"},
            {"name":"ASP Classic", "pc":{"r":375,"t":330},"movement":"c"},
            {"name":"Java 6 and earlier", "pc":{"r":390,"t":350},"movement":"c"}
        ]
    }
];
