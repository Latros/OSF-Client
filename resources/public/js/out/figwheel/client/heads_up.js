// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__21723__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21723__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28848_28856 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28849_28857 = null;
var count__28850_28858 = (0);
var i__28851_28859 = (0);
while(true){
if((i__28851_28859 < count__28850_28858)){
var k_28860 = cljs.core._nth.call(null,chunk__28849_28857,i__28851_28859);
e.setAttribute(cljs.core.name.call(null,k_28860),cljs.core.get.call(null,attrs,k_28860));

var G__28861 = seq__28848_28856;
var G__28862 = chunk__28849_28857;
var G__28863 = count__28850_28858;
var G__28864 = (i__28851_28859 + (1));
seq__28848_28856 = G__28861;
chunk__28849_28857 = G__28862;
count__28850_28858 = G__28863;
i__28851_28859 = G__28864;
continue;
} else {
var temp__4425__auto___28865 = cljs.core.seq.call(null,seq__28848_28856);
if(temp__4425__auto___28865){
var seq__28848_28866__$1 = temp__4425__auto___28865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28848_28866__$1)){
var c__21468__auto___28867 = cljs.core.chunk_first.call(null,seq__28848_28866__$1);
var G__28868 = cljs.core.chunk_rest.call(null,seq__28848_28866__$1);
var G__28869 = c__21468__auto___28867;
var G__28870 = cljs.core.count.call(null,c__21468__auto___28867);
var G__28871 = (0);
seq__28848_28856 = G__28868;
chunk__28849_28857 = G__28869;
count__28850_28858 = G__28870;
i__28851_28859 = G__28871;
continue;
} else {
var k_28872 = cljs.core.first.call(null,seq__28848_28866__$1);
e.setAttribute(cljs.core.name.call(null,k_28872),cljs.core.get.call(null,attrs,k_28872));

var G__28873 = cljs.core.next.call(null,seq__28848_28866__$1);
var G__28874 = null;
var G__28875 = (0);
var G__28876 = (0);
seq__28848_28856 = G__28873;
chunk__28849_28857 = G__28874;
count__28850_28858 = G__28875;
i__28851_28859 = G__28876;
continue;
}
} else {
}
}
break;
}

var seq__28852_28877 = cljs.core.seq.call(null,children);
var chunk__28853_28878 = null;
var count__28854_28879 = (0);
var i__28855_28880 = (0);
while(true){
if((i__28855_28880 < count__28854_28879)){
var ch_28881 = cljs.core._nth.call(null,chunk__28853_28878,i__28855_28880);
e.appendChild(ch_28881);

var G__28882 = seq__28852_28877;
var G__28883 = chunk__28853_28878;
var G__28884 = count__28854_28879;
var G__28885 = (i__28855_28880 + (1));
seq__28852_28877 = G__28882;
chunk__28853_28878 = G__28883;
count__28854_28879 = G__28884;
i__28855_28880 = G__28885;
continue;
} else {
var temp__4425__auto___28886 = cljs.core.seq.call(null,seq__28852_28877);
if(temp__4425__auto___28886){
var seq__28852_28887__$1 = temp__4425__auto___28886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28852_28887__$1)){
var c__21468__auto___28888 = cljs.core.chunk_first.call(null,seq__28852_28887__$1);
var G__28889 = cljs.core.chunk_rest.call(null,seq__28852_28887__$1);
var G__28890 = c__21468__auto___28888;
var G__28891 = cljs.core.count.call(null,c__21468__auto___28888);
var G__28892 = (0);
seq__28852_28877 = G__28889;
chunk__28853_28878 = G__28890;
count__28854_28879 = G__28891;
i__28855_28880 = G__28892;
continue;
} else {
var ch_28893 = cljs.core.first.call(null,seq__28852_28887__$1);
e.appendChild(ch_28893);

var G__28894 = cljs.core.next.call(null,seq__28852_28887__$1);
var G__28895 = null;
var G__28896 = (0);
var G__28897 = (0);
seq__28852_28877 = G__28894;
chunk__28853_28878 = G__28895;
count__28854_28879 = G__28896;
i__28855_28880 = G__28897;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28845){
var G__28846 = cljs.core.first.call(null,seq28845);
var seq28845__$1 = cljs.core.next.call(null,seq28845);
var G__28847 = cljs.core.first.call(null,seq28845__$1);
var seq28845__$2 = cljs.core.next.call(null,seq28845__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28846,G__28847,seq28845__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21578__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21579__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21580__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21582__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21578__auto__,prefer_table__21579__auto__,method_cache__21580__auto__,cached_hierarchy__21581__auto__,hierarchy__21582__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21578__auto__,prefer_table__21579__auto__,method_cache__21580__auto__,cached_hierarchy__21581__auto__,hierarchy__21582__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21582__auto__,method_table__21578__auto__,prefer_table__21579__auto__,method_cache__21580__auto__,cached_hierarchy__21581__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28898 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28898.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28898.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28898.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28898);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28899,st_map){
var map__28903 = p__28899;
var map__28903__$1 = ((cljs.core.seq_QMARK_.call(null,map__28903))?cljs.core.apply.call(null,cljs.core.hash_map,map__28903):map__28903);
var container_el = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28903,map__28903__$1,container_el){
return (function (p__28904){
var vec__28905 = p__28904;
var k = cljs.core.nth.call(null,vec__28905,(0),null);
var v = cljs.core.nth.call(null,vec__28905,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28903,map__28903__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28906,dom_str){
var map__28908 = p__28906;
var map__28908__$1 = ((cljs.core.seq_QMARK_.call(null,map__28908))?cljs.core.apply.call(null,cljs.core.hash_map,map__28908):map__28908);
var c = map__28908__$1;
var content_area_el = cljs.core.get.call(null,map__28908__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28909){
var map__28911 = p__28909;
var map__28911__$1 = ((cljs.core.seq_QMARK_.call(null,map__28911))?cljs.core.apply.call(null,cljs.core.hash_map,map__28911):map__28911);
var content_area_el = cljs.core.get.call(null,map__28911__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_28953){
var state_val_28954 = (state_28953[(1)]);
if((state_val_28954 === (1))){
var inst_28938 = (state_28953[(7)]);
var inst_28938__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28939 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28940 = ["10px","10px","100%","68px","1.0"];
var inst_28941 = cljs.core.PersistentHashMap.fromArrays(inst_28939,inst_28940);
var inst_28942 = cljs.core.merge.call(null,inst_28941,style);
var inst_28943 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28938__$1,inst_28942);
var inst_28944 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28938__$1,msg);
var inst_28945 = cljs.core.async.timeout.call(null,(300));
var state_28953__$1 = (function (){var statearr_28955 = state_28953;
(statearr_28955[(7)] = inst_28938__$1);

(statearr_28955[(8)] = inst_28943);

(statearr_28955[(9)] = inst_28944);

return statearr_28955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28953__$1,(2),inst_28945);
} else {
if((state_val_28954 === (2))){
var inst_28938 = (state_28953[(7)]);
var inst_28947 = (state_28953[(2)]);
var inst_28948 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28949 = ["auto"];
var inst_28950 = cljs.core.PersistentHashMap.fromArrays(inst_28948,inst_28949);
var inst_28951 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28938,inst_28950);
var state_28953__$1 = (function (){var statearr_28956 = state_28953;
(statearr_28956[(10)] = inst_28947);

return statearr_28956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28953__$1,inst_28951);
} else {
return null;
}
}
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto____0 = (function (){
var statearr_28960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28960[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto__);

(statearr_28960[(1)] = (1));

return statearr_28960;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto____1 = (function (state_28953){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_28953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e28961){if((e28961 instanceof Object)){
var ex__23996__auto__ = e28961;
var statearr_28962_28964 = state_28953;
(statearr_28962_28964[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28965 = state_28953;
state_28953 = G__28965;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto__ = function(state_28953){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto____1.call(this,state_28953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_28963 = f__24055__auto__.call(null);
(statearr_28963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_28963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28967 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28967,(0),null);
var ln = cljs.core.nth.call(null,vec__28967,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28970 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28970,(0),null);
var file_line = cljs.core.nth.call(null,vec__28970,(1),null);
var file_column = cljs.core.nth.call(null,vec__28970,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28970,file_name,file_line,file_column){
return (function (p1__28968_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28968_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28970,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__20683__auto__ = file_line;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
var and__20671__auto__ = cause;
if(cljs.core.truth_(and__20671__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__20671__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28972 = figwheel.client.heads_up.ensure_container.call(null);
var map__28972__$1 = ((cljs.core.seq_QMARK_.call(null,map__28972))?cljs.core.apply.call(null,cljs.core.hash_map,map__28972):map__28972);
var content_area_el = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_29019){
var state_val_29020 = (state_29019[(1)]);
if((state_val_29020 === (1))){
var inst_29002 = (state_29019[(7)]);
var inst_29002__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29003 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29004 = ["0.0"];
var inst_29005 = cljs.core.PersistentHashMap.fromArrays(inst_29003,inst_29004);
var inst_29006 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29002__$1,inst_29005);
var inst_29007 = cljs.core.async.timeout.call(null,(300));
var state_29019__$1 = (function (){var statearr_29021 = state_29019;
(statearr_29021[(7)] = inst_29002__$1);

(statearr_29021[(8)] = inst_29006);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29019__$1,(2),inst_29007);
} else {
if((state_val_29020 === (2))){
var inst_29002 = (state_29019[(7)]);
var inst_29009 = (state_29019[(2)]);
var inst_29010 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29011 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29012 = cljs.core.PersistentHashMap.fromArrays(inst_29010,inst_29011);
var inst_29013 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29002,inst_29012);
var inst_29014 = cljs.core.async.timeout.call(null,(200));
var state_29019__$1 = (function (){var statearr_29022 = state_29019;
(statearr_29022[(9)] = inst_29009);

(statearr_29022[(10)] = inst_29013);

return statearr_29022;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29019__$1,(3),inst_29014);
} else {
if((state_val_29020 === (3))){
var inst_29002 = (state_29019[(7)]);
var inst_29016 = (state_29019[(2)]);
var inst_29017 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29002,"");
var state_29019__$1 = (function (){var statearr_29023 = state_29019;
(statearr_29023[(11)] = inst_29016);

return statearr_29023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29019__$1,inst_29017);
} else {
return null;
}
}
}
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23993__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23993__auto____0 = (function (){
var statearr_29027 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29027[(0)] = figwheel$client$heads_up$clear_$_state_machine__23993__auto__);

(statearr_29027[(1)] = (1));

return statearr_29027;
});
var figwheel$client$heads_up$clear_$_state_machine__23993__auto____1 = (function (state_29019){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_29019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e29028){if((e29028 instanceof Object)){
var ex__23996__auto__ = e29028;
var statearr_29029_29031 = state_29019;
(statearr_29029_29031[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29032 = state_29019;
state_29019 = G__29032;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23993__auto__ = function(state_29019){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23993__auto____1.call(this,state_29019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23993__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23993__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_29030 = f__24055__auto__.call(null);
(statearr_29030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_29030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_29064){
var state_val_29065 = (state_29064[(1)]);
if((state_val_29065 === (1))){
var inst_29054 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29064__$1 = state_29064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29064__$1,(2),inst_29054);
} else {
if((state_val_29065 === (2))){
var inst_29056 = (state_29064[(2)]);
var inst_29057 = cljs.core.async.timeout.call(null,(400));
var state_29064__$1 = (function (){var statearr_29066 = state_29064;
(statearr_29066[(7)] = inst_29056);

return statearr_29066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29064__$1,(3),inst_29057);
} else {
if((state_val_29065 === (3))){
var inst_29059 = (state_29064[(2)]);
var inst_29060 = figwheel.client.heads_up.clear.call(null);
var state_29064__$1 = (function (){var statearr_29067 = state_29064;
(statearr_29067[(8)] = inst_29059);

return statearr_29067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29064__$1,(4),inst_29060);
} else {
if((state_val_29065 === (4))){
var inst_29062 = (state_29064[(2)]);
var state_29064__$1 = state_29064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29064__$1,inst_29062);
} else {
return null;
}
}
}
}
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto____0 = (function (){
var statearr_29071 = [null,null,null,null,null,null,null,null,null];
(statearr_29071[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto__);

(statearr_29071[(1)] = (1));

return statearr_29071;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto____1 = (function (state_29064){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_29064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e29072){if((e29072 instanceof Object)){
var ex__23996__auto__ = e29072;
var statearr_29073_29075 = state_29064;
(statearr_29073_29075[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29064;
state_29064 = G__29076;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto__ = function(state_29064){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto____1.call(this,state_29064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_29074 = f__24055__auto__.call(null);
(statearr_29074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_29074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map