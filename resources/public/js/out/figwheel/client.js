// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28084__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28085__i = 0, G__28085__a = new Array(arguments.length -  0);
while (G__28085__i < G__28085__a.length) {G__28085__a[G__28085__i] = arguments[G__28085__i + 0]; ++G__28085__i;}
  args = new cljs.core.IndexedSeq(G__28085__a,0);
} 
return G__28084__delegate.call(this,args);};
G__28084.cljs$lang$maxFixedArity = 0;
G__28084.cljs$lang$applyTo = (function (arglist__28086){
var args = cljs.core.seq(arglist__28086);
return G__28084__delegate(args);
});
G__28084.cljs$core$IFn$_invoke$arity$variadic = G__28084__delegate;
return G__28084;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28087){
var map__28089 = p__28087;
var map__28089__$1 = ((cljs.core.seq_QMARK_.call(null,map__28089))?cljs.core.apply.call(null,cljs.core.hash_map,map__28089):map__28089);
var message = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20683__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20671__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20671__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20671__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24054__auto___28218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___28218,ch){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___28218,ch){
return (function (state_28192){
var state_val_28193 = (state_28192[(1)]);
if((state_val_28193 === (7))){
var inst_28188 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28194_28219 = state_28192__$1;
(statearr_28194_28219[(2)] = inst_28188);

(statearr_28194_28219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (1))){
var state_28192__$1 = state_28192;
var statearr_28195_28220 = state_28192__$1;
(statearr_28195_28220[(2)] = null);

(statearr_28195_28220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (4))){
var inst_28156 = (state_28192[(7)]);
var inst_28156__$1 = (state_28192[(2)]);
var state_28192__$1 = (function (){var statearr_28196 = state_28192;
(statearr_28196[(7)] = inst_28156__$1);

return statearr_28196;
})();
if(cljs.core.truth_(inst_28156__$1)){
var statearr_28197_28221 = state_28192__$1;
(statearr_28197_28221[(1)] = (5));

} else {
var statearr_28198_28222 = state_28192__$1;
(statearr_28198_28222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (13))){
var state_28192__$1 = state_28192;
var statearr_28199_28223 = state_28192__$1;
(statearr_28199_28223[(2)] = null);

(statearr_28199_28223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (6))){
var state_28192__$1 = state_28192;
var statearr_28200_28224 = state_28192__$1;
(statearr_28200_28224[(2)] = null);

(statearr_28200_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (3))){
var inst_28190 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28192__$1,inst_28190);
} else {
if((state_val_28193 === (12))){
var inst_28163 = (state_28192[(8)]);
var inst_28176 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28163);
var inst_28177 = cljs.core.first.call(null,inst_28176);
var inst_28178 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28177);
var inst_28179 = console.warn("Figwheel: Not loading code with warnings - ",inst_28178);
var state_28192__$1 = state_28192;
var statearr_28201_28225 = state_28192__$1;
(statearr_28201_28225[(2)] = inst_28179);

(statearr_28201_28225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (2))){
var state_28192__$1 = state_28192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28192__$1,(4),ch);
} else {
if((state_val_28193 === (11))){
var inst_28172 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28202_28226 = state_28192__$1;
(statearr_28202_28226[(2)] = inst_28172);

(statearr_28202_28226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (9))){
var inst_28162 = (state_28192[(9)]);
var inst_28174 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28162,opts);
var state_28192__$1 = state_28192;
if(cljs.core.truth_(inst_28174)){
var statearr_28203_28227 = state_28192__$1;
(statearr_28203_28227[(1)] = (12));

} else {
var statearr_28204_28228 = state_28192__$1;
(statearr_28204_28228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (5))){
var inst_28156 = (state_28192[(7)]);
var inst_28162 = (state_28192[(9)]);
var inst_28158 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28159 = (new cljs.core.PersistentArrayMap(null,2,inst_28158,null));
var inst_28160 = (new cljs.core.PersistentHashSet(null,inst_28159,null));
var inst_28161 = figwheel.client.focus_msgs.call(null,inst_28160,inst_28156);
var inst_28162__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28161);
var inst_28163 = cljs.core.first.call(null,inst_28161);
var inst_28164 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28162__$1,opts);
var state_28192__$1 = (function (){var statearr_28205 = state_28192;
(statearr_28205[(8)] = inst_28163);

(statearr_28205[(9)] = inst_28162__$1);

return statearr_28205;
})();
if(cljs.core.truth_(inst_28164)){
var statearr_28206_28229 = state_28192__$1;
(statearr_28206_28229[(1)] = (8));

} else {
var statearr_28207_28230 = state_28192__$1;
(statearr_28207_28230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (14))){
var inst_28182 = (state_28192[(2)]);
var state_28192__$1 = state_28192;
var statearr_28208_28231 = state_28192__$1;
(statearr_28208_28231[(2)] = inst_28182);

(statearr_28208_28231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (10))){
var inst_28184 = (state_28192[(2)]);
var state_28192__$1 = (function (){var statearr_28209 = state_28192;
(statearr_28209[(10)] = inst_28184);

return statearr_28209;
})();
var statearr_28210_28232 = state_28192__$1;
(statearr_28210_28232[(2)] = null);

(statearr_28210_28232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28193 === (8))){
var inst_28163 = (state_28192[(8)]);
var inst_28166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28167 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28163);
var inst_28168 = cljs.core.async.timeout.call(null,(1000));
var inst_28169 = [inst_28167,inst_28168];
var inst_28170 = (new cljs.core.PersistentVector(null,2,(5),inst_28166,inst_28169,null));
var state_28192__$1 = state_28192;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28192__$1,(11),inst_28170);
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
});})(c__24054__auto___28218,ch))
;
return ((function (switch__23992__auto__,c__24054__auto___28218,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23993__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23993__auto____0 = (function (){
var statearr_28214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28214[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23993__auto__);

(statearr_28214[(1)] = (1));

return statearr_28214;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23993__auto____1 = (function (state_28192){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_28192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e28215){if((e28215 instanceof Object)){
var ex__23996__auto__ = e28215;
var statearr_28216_28233 = state_28192;
(statearr_28216_28233[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28234 = state_28192;
state_28192 = G__28234;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23993__auto__ = function(state_28192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23993__auto____1.call(this,state_28192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23993__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23993__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___28218,ch))
})();
var state__24056__auto__ = (function (){var statearr_28217 = f__24055__auto__.call(null);
(statearr_28217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___28218);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___28218,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28235_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28235_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28242 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28242){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28240 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28241 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28240,_STAR_print_newline_STAR_28241,base_path_28242){
return (function() { 
var G__28243__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28244__i = 0, G__28244__a = new Array(arguments.length -  0);
while (G__28244__i < G__28244__a.length) {G__28244__a[G__28244__i] = arguments[G__28244__i + 0]; ++G__28244__i;}
  args = new cljs.core.IndexedSeq(G__28244__a,0);
} 
return G__28243__delegate.call(this,args);};
G__28243.cljs$lang$maxFixedArity = 0;
G__28243.cljs$lang$applyTo = (function (arglist__28245){
var args = cljs.core.seq(arglist__28245);
return G__28243__delegate(args);
});
G__28243.cljs$core$IFn$_invoke$arity$variadic = G__28243__delegate;
return G__28243;
})()
;})(_STAR_print_fn_STAR_28240,_STAR_print_newline_STAR_28241,base_path_28242))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28241;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28240;
}}catch (e28239){if((e28239 instanceof Error)){
var e = e28239;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28242], null));
} else {
var e = e28239;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28242))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28246){
var map__28251 = p__28246;
var map__28251__$1 = ((cljs.core.seq_QMARK_.call(null,map__28251))?cljs.core.apply.call(null,cljs.core.hash_map,map__28251):map__28251);
var opts = map__28251__$1;
var build_id = cljs.core.get.call(null,map__28251__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28251,map__28251__$1,opts,build_id){
return (function (p__28252){
var vec__28253 = p__28252;
var map__28254 = cljs.core.nth.call(null,vec__28253,(0),null);
var map__28254__$1 = ((cljs.core.seq_QMARK_.call(null,map__28254))?cljs.core.apply.call(null,cljs.core.hash_map,map__28254):map__28254);
var msg = map__28254__$1;
var msg_name = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28253,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28253,map__28254,map__28254__$1,msg,msg_name,_,map__28251,map__28251__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28253,map__28254,map__28254__$1,msg,msg_name,_,map__28251,map__28251__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28251,map__28251__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28258){
var vec__28259 = p__28258;
var map__28260 = cljs.core.nth.call(null,vec__28259,(0),null);
var map__28260__$1 = ((cljs.core.seq_QMARK_.call(null,map__28260))?cljs.core.apply.call(null,cljs.core.hash_map,map__28260):map__28260);
var msg = map__28260__$1;
var msg_name = cljs.core.get.call(null,map__28260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28259,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28261){
var map__28269 = p__28261;
var map__28269__$1 = ((cljs.core.seq_QMARK_.call(null,map__28269))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var on_compile_warning = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28269__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28269,map__28269__$1,on_compile_warning,on_compile_fail){
return (function (p__28270){
var vec__28271 = p__28270;
var map__28272 = cljs.core.nth.call(null,vec__28271,(0),null);
var map__28272__$1 = ((cljs.core.seq_QMARK_.call(null,map__28272))?cljs.core.apply.call(null,cljs.core.hash_map,map__28272):map__28272);
var msg = map__28272__$1;
var msg_name = cljs.core.get.call(null,map__28272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28271,(1));
var pred__28273 = cljs.core._EQ_;
var expr__28274 = msg_name;
if(cljs.core.truth_(pred__28273.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28274))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28273.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28274))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28269,map__28269__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__,msg_hist,msg_names,msg){
return (function (state_28475){
var state_val_28476 = (state_28475[(1)]);
if((state_val_28476 === (7))){
var inst_28409 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28477_28518 = state_28475__$1;
(statearr_28477_28518[(2)] = inst_28409);

(statearr_28477_28518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (20))){
var inst_28437 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28437)){
var statearr_28478_28519 = state_28475__$1;
(statearr_28478_28519[(1)] = (22));

} else {
var statearr_28479_28520 = state_28475__$1;
(statearr_28479_28520[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (27))){
var inst_28449 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28450 = figwheel.client.heads_up.display_warning.call(null,inst_28449);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(30),inst_28450);
} else {
if((state_val_28476 === (1))){
var inst_28397 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28397)){
var statearr_28480_28521 = state_28475__$1;
(statearr_28480_28521[(1)] = (2));

} else {
var statearr_28481_28522 = state_28475__$1;
(statearr_28481_28522[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (24))){
var inst_28465 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28482_28523 = state_28475__$1;
(statearr_28482_28523[(2)] = inst_28465);

(statearr_28482_28523[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (4))){
var inst_28473 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28475__$1,inst_28473);
} else {
if((state_val_28476 === (15))){
var inst_28425 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28426 = figwheel.client.format_messages.call(null,inst_28425);
var inst_28427 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28428 = figwheel.client.heads_up.display_error.call(null,inst_28426,inst_28427);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(18),inst_28428);
} else {
if((state_val_28476 === (21))){
var inst_28467 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28483_28524 = state_28475__$1;
(statearr_28483_28524[(2)] = inst_28467);

(statearr_28483_28524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (31))){
var inst_28456 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(34),inst_28456);
} else {
if((state_val_28476 === (32))){
var state_28475__$1 = state_28475;
var statearr_28484_28525 = state_28475__$1;
(statearr_28484_28525[(2)] = null);

(statearr_28484_28525[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (33))){
var inst_28461 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28485_28526 = state_28475__$1;
(statearr_28485_28526[(2)] = inst_28461);

(statearr_28485_28526[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (13))){
var inst_28415 = (state_28475[(2)]);
var inst_28416 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28417 = figwheel.client.format_messages.call(null,inst_28416);
var inst_28418 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28419 = figwheel.client.heads_up.display_error.call(null,inst_28417,inst_28418);
var state_28475__$1 = (function (){var statearr_28486 = state_28475;
(statearr_28486[(7)] = inst_28415);

return statearr_28486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(14),inst_28419);
} else {
if((state_val_28476 === (22))){
var inst_28439 = figwheel.client.heads_up.clear.call(null);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(25),inst_28439);
} else {
if((state_val_28476 === (29))){
var inst_28463 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28487_28527 = state_28475__$1;
(statearr_28487_28527[(2)] = inst_28463);

(statearr_28487_28527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (6))){
var inst_28405 = figwheel.client.heads_up.clear.call(null);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(9),inst_28405);
} else {
if((state_val_28476 === (28))){
var inst_28454 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28454)){
var statearr_28488_28528 = state_28475__$1;
(statearr_28488_28528[(1)] = (31));

} else {
var statearr_28489_28529 = state_28475__$1;
(statearr_28489_28529[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (25))){
var inst_28441 = (state_28475[(2)]);
var inst_28442 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28443 = figwheel.client.heads_up.display_warning.call(null,inst_28442);
var state_28475__$1 = (function (){var statearr_28490 = state_28475;
(statearr_28490[(8)] = inst_28441);

return statearr_28490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(26),inst_28443);
} else {
if((state_val_28476 === (34))){
var inst_28458 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28491_28530 = state_28475__$1;
(statearr_28491_28530[(2)] = inst_28458);

(statearr_28491_28530[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (17))){
var inst_28469 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28492_28531 = state_28475__$1;
(statearr_28492_28531[(2)] = inst_28469);

(statearr_28492_28531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (3))){
var inst_28411 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28411)){
var statearr_28493_28532 = state_28475__$1;
(statearr_28493_28532[(1)] = (10));

} else {
var statearr_28494_28533 = state_28475__$1;
(statearr_28494_28533[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (12))){
var inst_28471 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28495_28534 = state_28475__$1;
(statearr_28495_28534[(2)] = inst_28471);

(statearr_28495_28534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (2))){
var inst_28399 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28399)){
var statearr_28496_28535 = state_28475__$1;
(statearr_28496_28535[(1)] = (5));

} else {
var statearr_28497_28536 = state_28475__$1;
(statearr_28497_28536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (23))){
var inst_28447 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28447)){
var statearr_28498_28537 = state_28475__$1;
(statearr_28498_28537[(1)] = (27));

} else {
var statearr_28499_28538 = state_28475__$1;
(statearr_28499_28538[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (19))){
var inst_28434 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28435 = figwheel.client.heads_up.append_message.call(null,inst_28434);
var state_28475__$1 = state_28475;
var statearr_28500_28539 = state_28475__$1;
(statearr_28500_28539[(2)] = inst_28435);

(statearr_28500_28539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (11))){
var inst_28423 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28423)){
var statearr_28501_28540 = state_28475__$1;
(statearr_28501_28540[(1)] = (15));

} else {
var statearr_28502_28541 = state_28475__$1;
(statearr_28502_28541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (9))){
var inst_28407 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28503_28542 = state_28475__$1;
(statearr_28503_28542[(2)] = inst_28407);

(statearr_28503_28542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (5))){
var inst_28401 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(8),inst_28401);
} else {
if((state_val_28476 === (14))){
var inst_28421 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28504_28543 = state_28475__$1;
(statearr_28504_28543[(2)] = inst_28421);

(statearr_28504_28543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (26))){
var inst_28445 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28505_28544 = state_28475__$1;
(statearr_28505_28544[(2)] = inst_28445);

(statearr_28505_28544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (16))){
var inst_28432 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28475__$1 = state_28475;
if(cljs.core.truth_(inst_28432)){
var statearr_28506_28545 = state_28475__$1;
(statearr_28506_28545[(1)] = (19));

} else {
var statearr_28507_28546 = state_28475__$1;
(statearr_28507_28546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (30))){
var inst_28452 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28508_28547 = state_28475__$1;
(statearr_28508_28547[(2)] = inst_28452);

(statearr_28508_28547[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (10))){
var inst_28413 = figwheel.client.heads_up.clear.call(null);
var state_28475__$1 = state_28475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28475__$1,(13),inst_28413);
} else {
if((state_val_28476 === (18))){
var inst_28430 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28509_28548 = state_28475__$1;
(statearr_28509_28548[(2)] = inst_28430);

(statearr_28509_28548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28476 === (8))){
var inst_28403 = (state_28475[(2)]);
var state_28475__$1 = state_28475;
var statearr_28510_28549 = state_28475__$1;
(statearr_28510_28549[(2)] = inst_28403);

(statearr_28510_28549[(1)] = (7));


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
});})(c__24054__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23992__auto__,c__24054__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto____0 = (function (){
var statearr_28514 = [null,null,null,null,null,null,null,null,null];
(statearr_28514[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto__);

(statearr_28514[(1)] = (1));

return statearr_28514;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto____1 = (function (state_28475){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_28475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e28515){if((e28515 instanceof Object)){
var ex__23996__auto__ = e28515;
var statearr_28516_28550 = state_28475;
(statearr_28516_28550[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28551 = state_28475;
state_28475 = G__28551;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto__ = function(state_28475){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto____1.call(this,state_28475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__,msg_hist,msg_names,msg))
})();
var state__24056__auto__ = (function (){var statearr_28517 = f__24055__auto__.call(null);
(statearr_28517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_28517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__,msg_hist,msg_names,msg))
);

return c__24054__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24054__auto___28614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___28614,ch){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___28614,ch){
return (function (state_28597){
var state_val_28598 = (state_28597[(1)]);
if((state_val_28598 === (1))){
var state_28597__$1 = state_28597;
var statearr_28599_28615 = state_28597__$1;
(statearr_28599_28615[(2)] = null);

(statearr_28599_28615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (2))){
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28597__$1,(4),ch);
} else {
if((state_val_28598 === (3))){
var inst_28595 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28597__$1,inst_28595);
} else {
if((state_val_28598 === (4))){
var inst_28585 = (state_28597[(7)]);
var inst_28585__$1 = (state_28597[(2)]);
var state_28597__$1 = (function (){var statearr_28600 = state_28597;
(statearr_28600[(7)] = inst_28585__$1);

return statearr_28600;
})();
if(cljs.core.truth_(inst_28585__$1)){
var statearr_28601_28616 = state_28597__$1;
(statearr_28601_28616[(1)] = (5));

} else {
var statearr_28602_28617 = state_28597__$1;
(statearr_28602_28617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (5))){
var inst_28585 = (state_28597[(7)]);
var inst_28587 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28585);
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28597__$1,(8),inst_28587);
} else {
if((state_val_28598 === (6))){
var state_28597__$1 = state_28597;
var statearr_28603_28618 = state_28597__$1;
(statearr_28603_28618[(2)] = null);

(statearr_28603_28618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (7))){
var inst_28593 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
var statearr_28604_28619 = state_28597__$1;
(statearr_28604_28619[(2)] = inst_28593);

(statearr_28604_28619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (8))){
var inst_28589 = (state_28597[(2)]);
var state_28597__$1 = (function (){var statearr_28605 = state_28597;
(statearr_28605[(8)] = inst_28589);

return statearr_28605;
})();
var statearr_28606_28620 = state_28597__$1;
(statearr_28606_28620[(2)] = null);

(statearr_28606_28620[(1)] = (2));


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
});})(c__24054__auto___28614,ch))
;
return ((function (switch__23992__auto__,c__24054__auto___28614,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23993__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23993__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null,null,null];
(statearr_28610[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23993__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var figwheel$client$heads_up_plugin_$_state_machine__23993__auto____1 = (function (state_28597){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_28597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e28611){if((e28611 instanceof Object)){
var ex__23996__auto__ = e28611;
var statearr_28612_28621 = state_28597;
(statearr_28612_28621[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28622 = state_28597;
state_28597 = G__28622;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23993__auto__ = function(state_28597){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23993__auto____1.call(this,state_28597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23993__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23993__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___28614,ch))
})();
var state__24056__auto__ = (function (){var statearr_28613 = f__24055__auto__.call(null);
(statearr_28613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___28614);

return statearr_28613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___28614,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_28643){
var state_val_28644 = (state_28643[(1)]);
if((state_val_28644 === (1))){
var inst_28638 = cljs.core.async.timeout.call(null,(3000));
var state_28643__$1 = state_28643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28643__$1,(2),inst_28638);
} else {
if((state_val_28644 === (2))){
var inst_28640 = (state_28643[(2)]);
var inst_28641 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28643__$1 = (function (){var statearr_28645 = state_28643;
(statearr_28645[(7)] = inst_28640);

return statearr_28645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28643__$1,inst_28641);
} else {
return null;
}
}
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23993__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23993__auto____0 = (function (){
var statearr_28649 = [null,null,null,null,null,null,null,null];
(statearr_28649[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23993__auto__);

(statearr_28649[(1)] = (1));

return statearr_28649;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23993__auto____1 = (function (state_28643){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_28643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e28650){if((e28650 instanceof Object)){
var ex__23996__auto__ = e28650;
var statearr_28651_28653 = state_28643;
(statearr_28651_28653[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28654 = state_28643;
state_28643 = G__28654;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23993__auto__ = function(state_28643){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23993__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23993__auto____1.call(this,state_28643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23993__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23993__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_28652 = f__24055__auto__.call(null);
(statearr_28652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_28652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28655){
var map__28661 = p__28655;
var map__28661__$1 = ((cljs.core.seq_QMARK_.call(null,map__28661))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);
var ed = map__28661__$1;
var formatted_exception = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28662_28666 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28663_28667 = null;
var count__28664_28668 = (0);
var i__28665_28669 = (0);
while(true){
if((i__28665_28669 < count__28664_28668)){
var msg_28670 = cljs.core._nth.call(null,chunk__28663_28667,i__28665_28669);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28670);

var G__28671 = seq__28662_28666;
var G__28672 = chunk__28663_28667;
var G__28673 = count__28664_28668;
var G__28674 = (i__28665_28669 + (1));
seq__28662_28666 = G__28671;
chunk__28663_28667 = G__28672;
count__28664_28668 = G__28673;
i__28665_28669 = G__28674;
continue;
} else {
var temp__4425__auto___28675 = cljs.core.seq.call(null,seq__28662_28666);
if(temp__4425__auto___28675){
var seq__28662_28676__$1 = temp__4425__auto___28675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28662_28676__$1)){
var c__21468__auto___28677 = cljs.core.chunk_first.call(null,seq__28662_28676__$1);
var G__28678 = cljs.core.chunk_rest.call(null,seq__28662_28676__$1);
var G__28679 = c__21468__auto___28677;
var G__28680 = cljs.core.count.call(null,c__21468__auto___28677);
var G__28681 = (0);
seq__28662_28666 = G__28678;
chunk__28663_28667 = G__28679;
count__28664_28668 = G__28680;
i__28665_28669 = G__28681;
continue;
} else {
var msg_28682 = cljs.core.first.call(null,seq__28662_28676__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28682);

var G__28683 = cljs.core.next.call(null,seq__28662_28676__$1);
var G__28684 = null;
var G__28685 = (0);
var G__28686 = (0);
seq__28662_28666 = G__28683;
chunk__28663_28667 = G__28684;
count__28664_28668 = G__28685;
i__28665_28669 = G__28686;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28687){
var map__28689 = p__28687;
var map__28689__$1 = ((cljs.core.seq_QMARK_.call(null,map__28689))?cljs.core.apply.call(null,cljs.core.hash_map,map__28689):map__28689);
var w = map__28689__$1;
var message = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20671__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20671__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20671__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28696 = cljs.core.seq.call(null,plugins);
var chunk__28697 = null;
var count__28698 = (0);
var i__28699 = (0);
while(true){
if((i__28699 < count__28698)){
var vec__28700 = cljs.core._nth.call(null,chunk__28697,i__28699);
var k = cljs.core.nth.call(null,vec__28700,(0),null);
var plugin = cljs.core.nth.call(null,vec__28700,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28702 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28696,chunk__28697,count__28698,i__28699,pl_28702,vec__28700,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28702.call(null,msg_hist);
});})(seq__28696,chunk__28697,count__28698,i__28699,pl_28702,vec__28700,k,plugin))
);
} else {
}

var G__28703 = seq__28696;
var G__28704 = chunk__28697;
var G__28705 = count__28698;
var G__28706 = (i__28699 + (1));
seq__28696 = G__28703;
chunk__28697 = G__28704;
count__28698 = G__28705;
i__28699 = G__28706;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28696);
if(temp__4425__auto__){
var seq__28696__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28696__$1)){
var c__21468__auto__ = cljs.core.chunk_first.call(null,seq__28696__$1);
var G__28707 = cljs.core.chunk_rest.call(null,seq__28696__$1);
var G__28708 = c__21468__auto__;
var G__28709 = cljs.core.count.call(null,c__21468__auto__);
var G__28710 = (0);
seq__28696 = G__28707;
chunk__28697 = G__28708;
count__28698 = G__28709;
i__28699 = G__28710;
continue;
} else {
var vec__28701 = cljs.core.first.call(null,seq__28696__$1);
var k = cljs.core.nth.call(null,vec__28701,(0),null);
var plugin = cljs.core.nth.call(null,vec__28701,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28711 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28696,chunk__28697,count__28698,i__28699,pl_28711,vec__28701,k,plugin,seq__28696__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28711.call(null,msg_hist);
});})(seq__28696,chunk__28697,count__28698,i__28699,pl_28711,vec__28701,k,plugin,seq__28696__$1,temp__4425__auto__))
);
} else {
}

var G__28712 = cljs.core.next.call(null,seq__28696__$1);
var G__28713 = null;
var G__28714 = (0);
var G__28715 = (0);
seq__28696 = G__28712;
chunk__28697 = G__28713;
count__28698 = G__28714;
i__28699 = G__28715;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28717 = arguments.length;
switch (G__28717) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__21723__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21723__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28720){
var map__28721 = p__28720;
var map__28721__$1 = ((cljs.core.seq_QMARK_.call(null,map__28721))?cljs.core.apply.call(null,cljs.core.hash_map,map__28721):map__28721);
var opts = map__28721__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28719){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28719));
});

//# sourceMappingURL=client.js.map