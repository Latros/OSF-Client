// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29157_SHARP_,p2__29158_SHARP_){
var and__20671__auto__ = p1__29157_SHARP_;
if(cljs.core.truth_(and__20671__auto__)){
return p2__29158_SHARP_;
} else {
return and__20671__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20683__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20683__auto__){
return or__20683__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__20683__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__20683__auto__){
return or__20683__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__20683__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__21578__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21579__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21580__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21582__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21582__auto__,method_table__21578__auto__,prefer_table__21579__auto__,method_cache__21580__auto__,cached_hierarchy__21581__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29159){
var map__29160 = p__29159;
var map__29160__$1 = ((cljs.core.seq_QMARK_.call(null,map__29160))?cljs.core.apply.call(null,cljs.core.hash_map,map__29160):map__29160);
var file = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29161){
var map__29162 = p__29161;
var map__29162__$1 = ((cljs.core.seq_QMARK_.call(null,map__29162))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);
var namespace = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__21578__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21579__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21580__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21582__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21582__auto__,method_table__21578__auto__,prefer_table__21579__auto__,method_cache__21580__auto__,cached_hierarchy__21581__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29163){if((e29163 instanceof Error)){
var e = e29163;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29163;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29165 = arguments.length;
switch (G__29165) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29167,callback){
var map__29169 = p__29167;
var map__29169__$1 = ((cljs.core.seq_QMARK_.call(null,map__29169))?cljs.core.apply.call(null,cljs.core.hash_map,map__29169):map__29169);
var file_msg = map__29169__$1;
var request_url = cljs.core.get.call(null,map__29169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29169,map__29169__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29169,map__29169__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29170){
var map__29172 = p__29170;
var map__29172__$1 = ((cljs.core.seq_QMARK_.call(null,map__29172))?cljs.core.apply.call(null,cljs.core.hash_map,map__29172):map__29172);
var file_msg = map__29172__$1;
var namespace = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__20683__auto__ = meta_data;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__20671__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__20671__auto__){
var or__20683__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20683__auto____$1)){
return or__20683__auto____$1;
} else {
var and__20671__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__20671__auto____$1){
var or__20683__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__20683__auto____$2){
return or__20683__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__20671__auto____$1;
}
}
}
} else {
return and__20671__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29173,callback){
var map__29175 = p__29173;
var map__29175__$1 = ((cljs.core.seq_QMARK_.call(null,map__29175))?cljs.core.apply.call(null,cljs.core.hash_map,map__29175):map__29175);
var file_msg = map__29175__$1;
var request_url = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24054__auto___29262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___29262,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___29262,out){
return (function (state_29244){
var state_val_29245 = (state_29244[(1)]);
if((state_val_29245 === (1))){
var inst_29222 = cljs.core.nth.call(null,files,(0),null);
var inst_29223 = cljs.core.nthnext.call(null,files,(1));
var inst_29224 = files;
var state_29244__$1 = (function (){var statearr_29246 = state_29244;
(statearr_29246[(7)] = inst_29223);

(statearr_29246[(8)] = inst_29224);

(statearr_29246[(9)] = inst_29222);

return statearr_29246;
})();
var statearr_29247_29263 = state_29244__$1;
(statearr_29247_29263[(2)] = null);

(statearr_29247_29263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (2))){
var inst_29227 = (state_29244[(10)]);
var inst_29224 = (state_29244[(8)]);
var inst_29227__$1 = cljs.core.nth.call(null,inst_29224,(0),null);
var inst_29228 = cljs.core.nthnext.call(null,inst_29224,(1));
var inst_29229 = (inst_29227__$1 == null);
var inst_29230 = cljs.core.not.call(null,inst_29229);
var state_29244__$1 = (function (){var statearr_29248 = state_29244;
(statearr_29248[(10)] = inst_29227__$1);

(statearr_29248[(11)] = inst_29228);

return statearr_29248;
})();
if(inst_29230){
var statearr_29249_29264 = state_29244__$1;
(statearr_29249_29264[(1)] = (4));

} else {
var statearr_29250_29265 = state_29244__$1;
(statearr_29250_29265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (3))){
var inst_29242 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29244__$1,inst_29242);
} else {
if((state_val_29245 === (4))){
var inst_29227 = (state_29244[(10)]);
var inst_29232 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29227);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(7),inst_29232);
} else {
if((state_val_29245 === (5))){
var inst_29238 = cljs.core.async.close_BANG_.call(null,out);
var state_29244__$1 = state_29244;
var statearr_29251_29266 = state_29244__$1;
(statearr_29251_29266[(2)] = inst_29238);

(statearr_29251_29266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (6))){
var inst_29240 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29252_29267 = state_29244__$1;
(statearr_29252_29267[(2)] = inst_29240);

(statearr_29252_29267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (7))){
var inst_29228 = (state_29244[(11)]);
var inst_29234 = (state_29244[(2)]);
var inst_29235 = cljs.core.async.put_BANG_.call(null,out,inst_29234);
var inst_29224 = inst_29228;
var state_29244__$1 = (function (){var statearr_29253 = state_29244;
(statearr_29253[(8)] = inst_29224);

(statearr_29253[(12)] = inst_29235);

return statearr_29253;
})();
var statearr_29254_29268 = state_29244__$1;
(statearr_29254_29268[(2)] = null);

(statearr_29254_29268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24054__auto___29262,out))
;
return ((function (switch__23992__auto__,c__24054__auto___29262,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto____0 = (function (){
var statearr_29258 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29258[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto__);

(statearr_29258[(1)] = (1));

return statearr_29258;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto____1 = (function (state_29244){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_29244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e29259){if((e29259 instanceof Object)){
var ex__23996__auto__ = e29259;
var statearr_29260_29269 = state_29244;
(statearr_29260_29269[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29270 = state_29244;
state_29244 = G__29270;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto__ = function(state_29244){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto____1.call(this,state_29244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___29262,out))
})();
var state__24056__auto__ = (function (){var statearr_29261 = f__24055__auto__.call(null);
(statearr_29261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___29262);

return statearr_29261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___29262,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29271,p__29272){
var map__29275 = p__29271;
var map__29275__$1 = ((cljs.core.seq_QMARK_.call(null,map__29275))?cljs.core.apply.call(null,cljs.core.hash_map,map__29275):map__29275);
var opts = map__29275__$1;
var url_rewriter = cljs.core.get.call(null,map__29275__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29276 = p__29272;
var map__29276__$1 = ((cljs.core.seq_QMARK_.call(null,map__29276))?cljs.core.apply.call(null,cljs.core.hash_map,map__29276):map__29276);
var file_msg = map__29276__$1;
var file = cljs.core.get.call(null,map__29276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29277){
var map__29280 = p__29277;
var map__29280__$1 = ((cljs.core.seq_QMARK_.call(null,map__29280))?cljs.core.apply.call(null,cljs.core.hash_map,map__29280):map__29280);
var eval_body__$1 = cljs.core.get.call(null,map__29280__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20671__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20671__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20671__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29281){var e = e29281;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29286,p__29287){
var map__29489 = p__29286;
var map__29489__$1 = ((cljs.core.seq_QMARK_.call(null,map__29489))?cljs.core.apply.call(null,cljs.core.hash_map,map__29489):map__29489);
var opts = map__29489__$1;
var before_jsload = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29489__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29490 = p__29287;
var map__29490__$1 = ((cljs.core.seq_QMARK_.call(null,map__29490))?cljs.core.apply.call(null,cljs.core.hash_map,map__29490):map__29490);
var msg = map__29490__$1;
var files = cljs.core.get.call(null,map__29490__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (state_29615){
var state_val_29616 = (state_29615[(1)]);
if((state_val_29616 === (7))){
var inst_29505 = (state_29615[(7)]);
var inst_29503 = (state_29615[(8)]);
var inst_29502 = (state_29615[(9)]);
var inst_29504 = (state_29615[(10)]);
var inst_29510 = cljs.core._nth.call(null,inst_29503,inst_29505);
var inst_29511 = figwheel.client.file_reloading.eval_body.call(null,inst_29510);
var inst_29512 = (inst_29505 + (1));
var tmp29617 = inst_29503;
var tmp29618 = inst_29502;
var tmp29619 = inst_29504;
var inst_29502__$1 = tmp29618;
var inst_29503__$1 = tmp29617;
var inst_29504__$1 = tmp29619;
var inst_29505__$1 = inst_29512;
var state_29615__$1 = (function (){var statearr_29620 = state_29615;
(statearr_29620[(7)] = inst_29505__$1);

(statearr_29620[(8)] = inst_29503__$1);

(statearr_29620[(9)] = inst_29502__$1);

(statearr_29620[(10)] = inst_29504__$1);

(statearr_29620[(11)] = inst_29511);

return statearr_29620;
})();
var statearr_29621_29690 = state_29615__$1;
(statearr_29621_29690[(2)] = null);

(statearr_29621_29690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (20))){
var inst_29547 = (state_29615[(12)]);
var inst_29552 = (state_29615[(13)]);
var inst_29554 = (state_29615[(14)]);
var inst_29548 = (state_29615[(15)]);
var inst_29551 = (state_29615[(16)]);
var inst_29557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29559 = (function (){var all_files = inst_29547;
var files_SINGLEQUOTE_ = inst_29548;
var res_SINGLEQUOTE_ = inst_29551;
var res = inst_29552;
var files_not_loaded = inst_29554;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29547,inst_29552,inst_29554,inst_29548,inst_29551,inst_29557,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (p__29558){
var map__29622 = p__29558;
var map__29622__$1 = ((cljs.core.seq_QMARK_.call(null,map__29622))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);
var namespace = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29547,inst_29552,inst_29554,inst_29548,inst_29551,inst_29557,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29560 = cljs.core.map.call(null,inst_29559,inst_29552);
var inst_29561 = cljs.core.pr_str.call(null,inst_29560);
var inst_29562 = figwheel.client.utils.log.call(null,inst_29561);
var inst_29563 = (function (){var all_files = inst_29547;
var files_SINGLEQUOTE_ = inst_29548;
var res_SINGLEQUOTE_ = inst_29551;
var res = inst_29552;
var files_not_loaded = inst_29554;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29547,inst_29552,inst_29554,inst_29548,inst_29551,inst_29557,inst_29559,inst_29560,inst_29561,inst_29562,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29547,inst_29552,inst_29554,inst_29548,inst_29551,inst_29557,inst_29559,inst_29560,inst_29561,inst_29562,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29564 = setTimeout(inst_29563,(10));
var state_29615__$1 = (function (){var statearr_29623 = state_29615;
(statearr_29623[(17)] = inst_29562);

(statearr_29623[(18)] = inst_29557);

return statearr_29623;
})();
var statearr_29624_29691 = state_29615__$1;
(statearr_29624_29691[(2)] = inst_29564);

(statearr_29624_29691[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (27))){
var inst_29574 = (state_29615[(19)]);
var state_29615__$1 = state_29615;
var statearr_29625_29692 = state_29615__$1;
(statearr_29625_29692[(2)] = inst_29574);

(statearr_29625_29692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (1))){
var inst_29494 = (state_29615[(20)]);
var inst_29491 = before_jsload.call(null,files);
var inst_29492 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29493 = (function (){return ((function (inst_29494,inst_29491,inst_29492,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (p1__29282_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29282_SHARP_);
});
;})(inst_29494,inst_29491,inst_29492,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29494__$1 = cljs.core.filter.call(null,inst_29493,files);
var inst_29495 = cljs.core.not_empty.call(null,inst_29494__$1);
var state_29615__$1 = (function (){var statearr_29626 = state_29615;
(statearr_29626[(21)] = inst_29491);

(statearr_29626[(22)] = inst_29492);

(statearr_29626[(20)] = inst_29494__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29495)){
var statearr_29627_29693 = state_29615__$1;
(statearr_29627_29693[(1)] = (2));

} else {
var statearr_29628_29694 = state_29615__$1;
(statearr_29628_29694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (24))){
var state_29615__$1 = state_29615;
var statearr_29629_29695 = state_29615__$1;
(statearr_29629_29695[(2)] = null);

(statearr_29629_29695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (4))){
var inst_29539 = (state_29615[(2)]);
var inst_29540 = (function (){return ((function (inst_29539,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (p1__29283_SHARP_){
var and__20671__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29283_SHARP_);
if(cljs.core.truth_(and__20671__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29283_SHARP_));
} else {
return and__20671__auto__;
}
});
;})(inst_29539,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29541 = cljs.core.filter.call(null,inst_29540,files);
var state_29615__$1 = (function (){var statearr_29630 = state_29615;
(statearr_29630[(23)] = inst_29539);

(statearr_29630[(24)] = inst_29541);

return statearr_29630;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29631_29696 = state_29615__$1;
(statearr_29631_29696[(1)] = (16));

} else {
var statearr_29632_29697 = state_29615__$1;
(statearr_29632_29697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (15))){
var inst_29529 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29633_29698 = state_29615__$1;
(statearr_29633_29698[(2)] = inst_29529);

(statearr_29633_29698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (21))){
var state_29615__$1 = state_29615;
var statearr_29634_29699 = state_29615__$1;
(statearr_29634_29699[(2)] = null);

(statearr_29634_29699[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (31))){
var inst_29582 = (state_29615[(25)]);
var inst_29592 = (state_29615[(2)]);
var inst_29593 = cljs.core.not_empty.call(null,inst_29582);
var state_29615__$1 = (function (){var statearr_29635 = state_29615;
(statearr_29635[(26)] = inst_29592);

return statearr_29635;
})();
if(cljs.core.truth_(inst_29593)){
var statearr_29636_29700 = state_29615__$1;
(statearr_29636_29700[(1)] = (32));

} else {
var statearr_29637_29701 = state_29615__$1;
(statearr_29637_29701[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (32))){
var inst_29582 = (state_29615[(25)]);
var inst_29595 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29582);
var inst_29596 = cljs.core.pr_str.call(null,inst_29595);
var inst_29597 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29596)].join('');
var inst_29598 = figwheel.client.utils.log.call(null,inst_29597);
var state_29615__$1 = state_29615;
var statearr_29638_29702 = state_29615__$1;
(statearr_29638_29702[(2)] = inst_29598);

(statearr_29638_29702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (33))){
var state_29615__$1 = state_29615;
var statearr_29639_29703 = state_29615__$1;
(statearr_29639_29703[(2)] = null);

(statearr_29639_29703[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (13))){
var inst_29515 = (state_29615[(27)]);
var inst_29519 = cljs.core.chunk_first.call(null,inst_29515);
var inst_29520 = cljs.core.chunk_rest.call(null,inst_29515);
var inst_29521 = cljs.core.count.call(null,inst_29519);
var inst_29502 = inst_29520;
var inst_29503 = inst_29519;
var inst_29504 = inst_29521;
var inst_29505 = (0);
var state_29615__$1 = (function (){var statearr_29640 = state_29615;
(statearr_29640[(7)] = inst_29505);

(statearr_29640[(8)] = inst_29503);

(statearr_29640[(9)] = inst_29502);

(statearr_29640[(10)] = inst_29504);

return statearr_29640;
})();
var statearr_29641_29704 = state_29615__$1;
(statearr_29641_29704[(2)] = null);

(statearr_29641_29704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (22))){
var inst_29554 = (state_29615[(14)]);
var inst_29567 = (state_29615[(2)]);
var inst_29568 = cljs.core.not_empty.call(null,inst_29554);
var state_29615__$1 = (function (){var statearr_29642 = state_29615;
(statearr_29642[(28)] = inst_29567);

return statearr_29642;
})();
if(cljs.core.truth_(inst_29568)){
var statearr_29643_29705 = state_29615__$1;
(statearr_29643_29705[(1)] = (23));

} else {
var statearr_29644_29706 = state_29615__$1;
(statearr_29644_29706[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (36))){
var state_29615__$1 = state_29615;
var statearr_29645_29707 = state_29615__$1;
(statearr_29645_29707[(2)] = null);

(statearr_29645_29707[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (29))){
var inst_29581 = (state_29615[(29)]);
var inst_29586 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29581);
var inst_29587 = cljs.core.pr_str.call(null,inst_29586);
var inst_29588 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29587)].join('');
var inst_29589 = figwheel.client.utils.log.call(null,inst_29588);
var state_29615__$1 = state_29615;
var statearr_29646_29708 = state_29615__$1;
(statearr_29646_29708[(2)] = inst_29589);

(statearr_29646_29708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (6))){
var inst_29536 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29647_29709 = state_29615__$1;
(statearr_29647_29709[(2)] = inst_29536);

(statearr_29647_29709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (28))){
var inst_29581 = (state_29615[(29)]);
var inst_29580 = (state_29615[(2)]);
var inst_29581__$1 = cljs.core.get.call(null,inst_29580,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29582 = cljs.core.get.call(null,inst_29580,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29583 = cljs.core.get.call(null,inst_29580,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29584 = cljs.core.not_empty.call(null,inst_29581__$1);
var state_29615__$1 = (function (){var statearr_29648 = state_29615;
(statearr_29648[(29)] = inst_29581__$1);

(statearr_29648[(25)] = inst_29582);

(statearr_29648[(30)] = inst_29583);

return statearr_29648;
})();
if(cljs.core.truth_(inst_29584)){
var statearr_29649_29710 = state_29615__$1;
(statearr_29649_29710[(1)] = (29));

} else {
var statearr_29650_29711 = state_29615__$1;
(statearr_29650_29711[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (25))){
var inst_29613 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29615__$1,inst_29613);
} else {
if((state_val_29616 === (34))){
var inst_29583 = (state_29615[(30)]);
var inst_29601 = (state_29615[(2)]);
var inst_29602 = cljs.core.not_empty.call(null,inst_29583);
var state_29615__$1 = (function (){var statearr_29651 = state_29615;
(statearr_29651[(31)] = inst_29601);

return statearr_29651;
})();
if(cljs.core.truth_(inst_29602)){
var statearr_29652_29712 = state_29615__$1;
(statearr_29652_29712[(1)] = (35));

} else {
var statearr_29653_29713 = state_29615__$1;
(statearr_29653_29713[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (17))){
var inst_29541 = (state_29615[(24)]);
var state_29615__$1 = state_29615;
var statearr_29654_29714 = state_29615__$1;
(statearr_29654_29714[(2)] = inst_29541);

(statearr_29654_29714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (3))){
var state_29615__$1 = state_29615;
var statearr_29655_29715 = state_29615__$1;
(statearr_29655_29715[(2)] = null);

(statearr_29655_29715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (12))){
var inst_29532 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29656_29716 = state_29615__$1;
(statearr_29656_29716[(2)] = inst_29532);

(statearr_29656_29716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (2))){
var inst_29494 = (state_29615[(20)]);
var inst_29501 = cljs.core.seq.call(null,inst_29494);
var inst_29502 = inst_29501;
var inst_29503 = null;
var inst_29504 = (0);
var inst_29505 = (0);
var state_29615__$1 = (function (){var statearr_29657 = state_29615;
(statearr_29657[(7)] = inst_29505);

(statearr_29657[(8)] = inst_29503);

(statearr_29657[(9)] = inst_29502);

(statearr_29657[(10)] = inst_29504);

return statearr_29657;
})();
var statearr_29658_29717 = state_29615__$1;
(statearr_29658_29717[(2)] = null);

(statearr_29658_29717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (23))){
var inst_29547 = (state_29615[(12)]);
var inst_29552 = (state_29615[(13)]);
var inst_29554 = (state_29615[(14)]);
var inst_29548 = (state_29615[(15)]);
var inst_29551 = (state_29615[(16)]);
var inst_29574 = (state_29615[(19)]);
var inst_29570 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29573 = (function (){var all_files = inst_29547;
var files_SINGLEQUOTE_ = inst_29548;
var res_SINGLEQUOTE_ = inst_29551;
var res = inst_29552;
var files_not_loaded = inst_29554;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29547,inst_29552,inst_29554,inst_29548,inst_29551,inst_29574,inst_29570,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (p__29572){
var map__29659 = p__29572;
var map__29659__$1 = ((cljs.core.seq_QMARK_.call(null,map__29659))?cljs.core.apply.call(null,cljs.core.hash_map,map__29659):map__29659);
var meta_data = cljs.core.get.call(null,map__29659__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29547,inst_29552,inst_29554,inst_29548,inst_29551,inst_29574,inst_29570,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29574__$1 = cljs.core.group_by.call(null,inst_29573,inst_29554);
var inst_29575 = cljs.core.seq_QMARK_.call(null,inst_29574__$1);
var state_29615__$1 = (function (){var statearr_29660 = state_29615;
(statearr_29660[(32)] = inst_29570);

(statearr_29660[(19)] = inst_29574__$1);

return statearr_29660;
})();
if(inst_29575){
var statearr_29661_29718 = state_29615__$1;
(statearr_29661_29718[(1)] = (26));

} else {
var statearr_29662_29719 = state_29615__$1;
(statearr_29662_29719[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (35))){
var inst_29583 = (state_29615[(30)]);
var inst_29604 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29583);
var inst_29605 = cljs.core.pr_str.call(null,inst_29604);
var inst_29606 = [cljs.core.str("not required: "),cljs.core.str(inst_29605)].join('');
var inst_29607 = figwheel.client.utils.log.call(null,inst_29606);
var state_29615__$1 = state_29615;
var statearr_29663_29720 = state_29615__$1;
(statearr_29663_29720[(2)] = inst_29607);

(statearr_29663_29720[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (19))){
var inst_29547 = (state_29615[(12)]);
var inst_29552 = (state_29615[(13)]);
var inst_29548 = (state_29615[(15)]);
var inst_29551 = (state_29615[(16)]);
var inst_29551__$1 = (state_29615[(2)]);
var inst_29552__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29551__$1);
var inst_29553 = (function (){var all_files = inst_29547;
var files_SINGLEQUOTE_ = inst_29548;
var res_SINGLEQUOTE_ = inst_29551__$1;
var res = inst_29552__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29547,inst_29552,inst_29548,inst_29551,inst_29551__$1,inst_29552__$1,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (p1__29285_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29285_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29547,inst_29552,inst_29548,inst_29551,inst_29551__$1,inst_29552__$1,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29554 = cljs.core.filter.call(null,inst_29553,inst_29551__$1);
var inst_29555 = cljs.core.not_empty.call(null,inst_29552__$1);
var state_29615__$1 = (function (){var statearr_29664 = state_29615;
(statearr_29664[(13)] = inst_29552__$1);

(statearr_29664[(14)] = inst_29554);

(statearr_29664[(16)] = inst_29551__$1);

return statearr_29664;
})();
if(cljs.core.truth_(inst_29555)){
var statearr_29665_29721 = state_29615__$1;
(statearr_29665_29721[(1)] = (20));

} else {
var statearr_29666_29722 = state_29615__$1;
(statearr_29666_29722[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (11))){
var state_29615__$1 = state_29615;
var statearr_29667_29723 = state_29615__$1;
(statearr_29667_29723[(2)] = null);

(statearr_29667_29723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (9))){
var inst_29534 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29668_29724 = state_29615__$1;
(statearr_29668_29724[(2)] = inst_29534);

(statearr_29668_29724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (5))){
var inst_29505 = (state_29615[(7)]);
var inst_29504 = (state_29615[(10)]);
var inst_29507 = (inst_29505 < inst_29504);
var inst_29508 = inst_29507;
var state_29615__$1 = state_29615;
if(cljs.core.truth_(inst_29508)){
var statearr_29669_29725 = state_29615__$1;
(statearr_29669_29725[(1)] = (7));

} else {
var statearr_29670_29726 = state_29615__$1;
(statearr_29670_29726[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (14))){
var inst_29515 = (state_29615[(27)]);
var inst_29524 = cljs.core.first.call(null,inst_29515);
var inst_29525 = figwheel.client.file_reloading.eval_body.call(null,inst_29524);
var inst_29526 = cljs.core.next.call(null,inst_29515);
var inst_29502 = inst_29526;
var inst_29503 = null;
var inst_29504 = (0);
var inst_29505 = (0);
var state_29615__$1 = (function (){var statearr_29671 = state_29615;
(statearr_29671[(7)] = inst_29505);

(statearr_29671[(8)] = inst_29503);

(statearr_29671[(9)] = inst_29502);

(statearr_29671[(10)] = inst_29504);

(statearr_29671[(33)] = inst_29525);

return statearr_29671;
})();
var statearr_29672_29727 = state_29615__$1;
(statearr_29672_29727[(2)] = null);

(statearr_29672_29727[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (26))){
var inst_29574 = (state_29615[(19)]);
var inst_29577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29574);
var state_29615__$1 = state_29615;
var statearr_29673_29728 = state_29615__$1;
(statearr_29673_29728[(2)] = inst_29577);

(statearr_29673_29728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (16))){
var inst_29541 = (state_29615[(24)]);
var inst_29543 = (function (){var all_files = inst_29541;
return ((function (all_files,inst_29541,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function (p1__29284_SHARP_){
return cljs.core.update_in.call(null,p1__29284_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29541,state_val_29616,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var inst_29544 = cljs.core.map.call(null,inst_29543,inst_29541);
var state_29615__$1 = state_29615;
var statearr_29674_29729 = state_29615__$1;
(statearr_29674_29729[(2)] = inst_29544);

(statearr_29674_29729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (30))){
var state_29615__$1 = state_29615;
var statearr_29675_29730 = state_29615__$1;
(statearr_29675_29730[(2)] = null);

(statearr_29675_29730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (10))){
var inst_29515 = (state_29615[(27)]);
var inst_29517 = cljs.core.chunked_seq_QMARK_.call(null,inst_29515);
var state_29615__$1 = state_29615;
if(inst_29517){
var statearr_29676_29731 = state_29615__$1;
(statearr_29676_29731[(1)] = (13));

} else {
var statearr_29677_29732 = state_29615__$1;
(statearr_29677_29732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (18))){
var inst_29547 = (state_29615[(12)]);
var inst_29548 = (state_29615[(15)]);
var inst_29547__$1 = (state_29615[(2)]);
var inst_29548__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29547__$1);
var inst_29549 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29548__$1);
var state_29615__$1 = (function (){var statearr_29678 = state_29615;
(statearr_29678[(12)] = inst_29547__$1);

(statearr_29678[(15)] = inst_29548__$1);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29615__$1,(19),inst_29549);
} else {
if((state_val_29616 === (37))){
var inst_29610 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29679_29733 = state_29615__$1;
(statearr_29679_29733[(2)] = inst_29610);

(statearr_29679_29733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (8))){
var inst_29502 = (state_29615[(9)]);
var inst_29515 = (state_29615[(27)]);
var inst_29515__$1 = cljs.core.seq.call(null,inst_29502);
var state_29615__$1 = (function (){var statearr_29680 = state_29615;
(statearr_29680[(27)] = inst_29515__$1);

return statearr_29680;
})();
if(inst_29515__$1){
var statearr_29681_29734 = state_29615__$1;
(statearr_29681_29734[(1)] = (10));

} else {
var statearr_29682_29735 = state_29615__$1;
(statearr_29682_29735[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
;
return ((function (switch__23992__auto__,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto____0 = (function (){
var statearr_29686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29686[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto__);

(statearr_29686[(1)] = (1));

return statearr_29686;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto____1 = (function (state_29615){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_29615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object)){
var ex__23996__auto__ = e29687;
var statearr_29688_29736 = state_29615;
(statearr_29688_29736[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29737 = state_29615;
state_29615 = G__29737;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto__ = function(state_29615){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto____1.call(this,state_29615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
})();
var state__24056__auto__ = (function (){var statearr_29689 = f__24055__auto__.call(null);
(statearr_29689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_29689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__,map__29489,map__29489__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29490,map__29490__$1,msg,files))
);

return c__24054__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29740,link){
var map__29742 = p__29740;
var map__29742__$1 = ((cljs.core.seq_QMARK_.call(null,map__29742))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);
var file = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29742,map__29742__$1,file){
return (function (p1__29738_SHARP_,p2__29739_SHARP_){
if(cljs.core._EQ_.call(null,p1__29738_SHARP_,p2__29739_SHARP_)){
return p1__29738_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29742,map__29742__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29746){
var map__29747 = p__29746;
var map__29747__$1 = ((cljs.core.seq_QMARK_.call(null,map__29747))?cljs.core.apply.call(null,cljs.core.hash_map,map__29747):map__29747);
var match_length = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29743_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29743_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29749 = arguments.length;
switch (G__29749) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29751){
var map__29753 = p__29751;
var map__29753__$1 = ((cljs.core.seq_QMARK_.call(null,map__29753))?cljs.core.apply.call(null,cljs.core.hash_map,map__29753):map__29753);
var f_data = map__29753__$1;
var file = cljs.core.get.call(null,map__29753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29753__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__20683__auto__ = request_url;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29754,files_msg){
var map__29776 = p__29754;
var map__29776__$1 = ((cljs.core.seq_QMARK_.call(null,map__29776))?cljs.core.apply.call(null,cljs.core.hash_map,map__29776):map__29776);
var opts = map__29776__$1;
var on_cssload = cljs.core.get.call(null,map__29776__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29777_29797 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29778_29798 = null;
var count__29779_29799 = (0);
var i__29780_29800 = (0);
while(true){
if((i__29780_29800 < count__29779_29799)){
var f_29801 = cljs.core._nth.call(null,chunk__29778_29798,i__29780_29800);
figwheel.client.file_reloading.reload_css_file.call(null,f_29801);

var G__29802 = seq__29777_29797;
var G__29803 = chunk__29778_29798;
var G__29804 = count__29779_29799;
var G__29805 = (i__29780_29800 + (1));
seq__29777_29797 = G__29802;
chunk__29778_29798 = G__29803;
count__29779_29799 = G__29804;
i__29780_29800 = G__29805;
continue;
} else {
var temp__4425__auto___29806 = cljs.core.seq.call(null,seq__29777_29797);
if(temp__4425__auto___29806){
var seq__29777_29807__$1 = temp__4425__auto___29806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29777_29807__$1)){
var c__21468__auto___29808 = cljs.core.chunk_first.call(null,seq__29777_29807__$1);
var G__29809 = cljs.core.chunk_rest.call(null,seq__29777_29807__$1);
var G__29810 = c__21468__auto___29808;
var G__29811 = cljs.core.count.call(null,c__21468__auto___29808);
var G__29812 = (0);
seq__29777_29797 = G__29809;
chunk__29778_29798 = G__29810;
count__29779_29799 = G__29811;
i__29780_29800 = G__29812;
continue;
} else {
var f_29813 = cljs.core.first.call(null,seq__29777_29807__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29813);

var G__29814 = cljs.core.next.call(null,seq__29777_29807__$1);
var G__29815 = null;
var G__29816 = (0);
var G__29817 = (0);
seq__29777_29797 = G__29814;
chunk__29778_29798 = G__29815;
count__29779_29799 = G__29816;
i__29780_29800 = G__29817;
continue;
}
} else {
}
}
break;
}

var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__,map__29776,map__29776__$1,opts,on_cssload){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__,map__29776,map__29776__$1,opts,on_cssload){
return (function (state_29787){
var state_val_29788 = (state_29787[(1)]);
if((state_val_29788 === (1))){
var inst_29781 = cljs.core.async.timeout.call(null,(100));
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29787__$1,(2),inst_29781);
} else {
if((state_val_29788 === (2))){
var inst_29783 = (state_29787[(2)]);
var inst_29784 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29785 = on_cssload.call(null,inst_29784);
var state_29787__$1 = (function (){var statearr_29789 = state_29787;
(statearr_29789[(7)] = inst_29783);

return statearr_29789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29787__$1,inst_29785);
} else {
return null;
}
}
});})(c__24054__auto__,map__29776,map__29776__$1,opts,on_cssload))
;
return ((function (switch__23992__auto__,c__24054__auto__,map__29776,map__29776__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto____0 = (function (){
var statearr_29793 = [null,null,null,null,null,null,null,null];
(statearr_29793[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto__);

(statearr_29793[(1)] = (1));

return statearr_29793;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto____1 = (function (state_29787){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_29787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e29794){if((e29794 instanceof Object)){
var ex__23996__auto__ = e29794;
var statearr_29795_29818 = state_29787;
(statearr_29795_29818[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29819 = state_29787;
state_29787 = G__29819;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto__ = function(state_29787){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto____1.call(this,state_29787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__,map__29776,map__29776__$1,opts,on_cssload))
})();
var state__24056__auto__ = (function (){var statearr_29796 = f__24055__auto__.call(null);
(statearr_29796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_29796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__,map__29776,map__29776__$1,opts,on_cssload))
);

return c__24054__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map