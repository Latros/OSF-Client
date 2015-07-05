// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent_client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('secretary.core');
reagent_client.core.submit_project = (function reagent_client$core$submit_project(){
return null;
});
reagent_client.core.retrieve_projects = (function reagent_client$core$retrieve_projects(){
return null;
});
reagent_client.core.navigation_component = (function reagent_client$core$navigation_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.page-title","h1.page-title",1640684783),"OpenSourceFinder"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-wrapper","div.nav-wrapper",2090748862),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/projects"], null),"Projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/submit"], null),"Submit"], null)], null)], null);
});
reagent_client.core.submission_form_component = (function reagent_client$core$submission_form_component(){
var form_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project-name","project-name",1486861539),"Test",new cljs.core.Keyword(null,"github-repo-url","github-repo-url",1210245138),"Test",new cljs.core.Keyword(null,"looking-for","looking-for",-2074662776),"Developers"], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new-project-form","div.new-project-form",1502370934),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Project Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"project-name","project-name",1486861539).cljs$core$IFn$_invoke$arity$1(form_data)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Github Repo URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"github-repo-url","github-repo-url",1210245138).cljs$core$IFn$_invoke$arity$1(form_data)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Our project is looking for..."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"looking-for","looking-for",-2074662776).cljs$core$IFn$_invoke$arity$1(form_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Developers"], null),"Developers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Documentors"], null),"Documentors"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Testers"], null),"Testers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Any help we can get"], null),"Any help we can get"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),reagent_client.core.submit_project], null),"Submit for approval"], null)], null)], null);
});
reagent_client.core.return_to_home_component = (function reagent_client$core$return_to_home_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.return-to-home","div.return-to-home",-478718287),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Return to home"], null)], null);
});
reagent_client.core.home_page_component = (function reagent_client$core$home_page_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null);
});
reagent_client.core.projects_page_component = (function reagent_client$core$projects_page_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Projects page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Return to home"], null)], null)], null);
});
reagent_client.core.project_page_component = (function reagent_client$core$project_page_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent_client.core.return_to_home_component.call(null)], null);
});
reagent_client.core.submission_page_component = (function reagent_client$core$submission_page_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent_client.core.submission_form_component.call(null),reagent_client.core.return_to_home_component.call(null)], null);
});
reagent_client.core.current_page = (function reagent_client$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
reagent_client.core.layout_component = (function reagent_client$core$layout_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent_client.core.navigation_component.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),reagent_client.core.current_page.call(null)], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__22972__auto___35217 = (function (params__22973__auto__){
if(cljs.core.map_QMARK_.call(null,params__22973__auto__)){
var map__35215 = params__22973__auto__;
var map__35215__$1 = ((cljs.core.seq_QMARK_.call(null,map__35215))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_client.core.home_page_component;},new cljs.core.Symbol("reagent-client.core","home-page-component","reagent-client.core/home-page-component",-615119017,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent-client.core","reagent-client.core",980636648,null),new cljs.core.Symbol(null,"home-page-component","home-page-component",813414284,null),"src/cljs/reagent_client/core.cljs",26,1,52,52,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent_client.core.home_page_component)?reagent_client.core.home_page_component.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22973__auto__)){
var vec__35216 = params__22973__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_client.core.home_page_component;},new cljs.core.Symbol("reagent-client.core","home-page-component","reagent-client.core/home-page-component",-615119017,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent-client.core","reagent-client.core",980636648,null),new cljs.core.Symbol(null,"home-page-component","home-page-component",813414284,null),"src/cljs/reagent_client/core.cljs",26,1,52,52,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent_client.core.home_page_component)?reagent_client.core.home_page_component.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__22972__auto___35217);

var action__22972__auto___35220 = (function (params__22973__auto__){
if(cljs.core.map_QMARK_.call(null,params__22973__auto__)){
var map__35218 = params__22973__auto__;
var map__35218__$1 = ((cljs.core.seq_QMARK_.call(null,map__35218))?cljs.core.apply.call(null,cljs.core.hash_map,map__35218):map__35218);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_client.core.project_page_component;},new cljs.core.Symbol("reagent-client.core","project-page-component","reagent-client.core/project-page-component",59557130,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent-client.core","reagent-client.core",980636648,null),new cljs.core.Symbol(null,"project-page-component","project-page-component",-1452313165,null),"src/cljs/reagent_client/core.cljs",29,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent_client.core.project_page_component)?reagent_client.core.project_page_component.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22973__auto__)){
var vec__35219 = params__22973__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_client.core.project_page_component;},new cljs.core.Symbol("reagent-client.core","project-page-component","reagent-client.core/project-page-component",59557130,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent-client.core","reagent-client.core",980636648,null),new cljs.core.Symbol(null,"project-page-component","project-page-component",-1452313165,null),"src/cljs/reagent_client/core.cljs",29,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent_client.core.project_page_component)?reagent_client.core.project_page_component.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/projects",action__22972__auto___35220);

var action__22972__auto___35223 = (function (params__22973__auto__){
if(cljs.core.map_QMARK_.call(null,params__22973__auto__)){
var map__35221 = params__22973__auto__;
var map__35221__$1 = ((cljs.core.seq_QMARK_.call(null,map__35221))?cljs.core.apply.call(null,cljs.core.hash_map,map__35221):map__35221);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_client.core.submission_page_component;},new cljs.core.Symbol("reagent-client.core","submission-page-component","reagent-client.core/submission-page-component",-515677515,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent-client.core","reagent-client.core",980636648,null),new cljs.core.Symbol(null,"submission-page-component","submission-page-component",1214296444,null),"src/cljs/reagent_client/core.cljs",32,1,64,64,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent_client.core.submission_page_component)?reagent_client.core.submission_page_component.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22973__auto__)){
var vec__35222 = params__22973__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_client.core.submission_page_component;},new cljs.core.Symbol("reagent-client.core","submission-page-component","reagent-client.core/submission-page-component",-515677515,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"reagent-client.core","reagent-client.core",980636648,null),new cljs.core.Symbol(null,"submission-page-component","submission-page-component",1214296444,null),"src/cljs/reagent_client/core.cljs",32,1,64,64,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(reagent_client.core.submission_page_component)?reagent_client.core.submission_page_component.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/submit",action__22972__auto___35223);

reagent_client.core.hook_browser_navigation_BANG_ = (function reagent_client$core$hook_browser_navigation_BANG_(){
var G__35225 = (new goog.History());
goog.events.listen(G__35225,goog.history.EventType.NAVIGATE,((function (G__35225){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__35225))
);

G__35225.setEnabled(true);

return G__35225;
});
reagent_client.core.mount_root = (function reagent_client$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_client.core.layout_component], null),document.getElementById("app"));
});
reagent_client.core.init_BANG_ = (function reagent_client$core$init_BANG_(){
reagent_client.core.hook_browser_navigation_BANG_.call(null);

return reagent_client.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map