// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29091_29103 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29092_29104 = null;
var count__29093_29105 = (0);
var i__29094_29106 = (0);
while(true){
if((i__29094_29106 < count__29093_29105)){
var f_29107 = cljs.core._nth.call(null,chunk__29092_29104,i__29094_29106);
cljs.core.println.call(null,"  ",f_29107);

var G__29108 = seq__29091_29103;
var G__29109 = chunk__29092_29104;
var G__29110 = count__29093_29105;
var G__29111 = (i__29094_29106 + (1));
seq__29091_29103 = G__29108;
chunk__29092_29104 = G__29109;
count__29093_29105 = G__29110;
i__29094_29106 = G__29111;
continue;
} else {
var temp__4425__auto___29112 = cljs.core.seq.call(null,seq__29091_29103);
if(temp__4425__auto___29112){
var seq__29091_29113__$1 = temp__4425__auto___29112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29091_29113__$1)){
var c__21468__auto___29114 = cljs.core.chunk_first.call(null,seq__29091_29113__$1);
var G__29115 = cljs.core.chunk_rest.call(null,seq__29091_29113__$1);
var G__29116 = c__21468__auto___29114;
var G__29117 = cljs.core.count.call(null,c__21468__auto___29114);
var G__29118 = (0);
seq__29091_29103 = G__29115;
chunk__29092_29104 = G__29116;
count__29093_29105 = G__29117;
i__29094_29106 = G__29118;
continue;
} else {
var f_29119 = cljs.core.first.call(null,seq__29091_29113__$1);
cljs.core.println.call(null,"  ",f_29119);

var G__29120 = cljs.core.next.call(null,seq__29091_29113__$1);
var G__29121 = null;
var G__29122 = (0);
var G__29123 = (0);
seq__29091_29103 = G__29120;
chunk__29092_29104 = G__29121;
count__29093_29105 = G__29122;
i__29094_29106 = G__29123;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29124 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20683__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29124);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29124)))?cljs.core.second.call(null,arglists_29124):arglists_29124));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29095 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29096 = null;
var count__29097 = (0);
var i__29098 = (0);
while(true){
if((i__29098 < count__29097)){
var vec__29099 = cljs.core._nth.call(null,chunk__29096,i__29098);
var name = cljs.core.nth.call(null,vec__29099,(0),null);
var map__29100 = cljs.core.nth.call(null,vec__29099,(1),null);
var map__29100__$1 = ((cljs.core.seq_QMARK_.call(null,map__29100))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var doc = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29125 = seq__29095;
var G__29126 = chunk__29096;
var G__29127 = count__29097;
var G__29128 = (i__29098 + (1));
seq__29095 = G__29125;
chunk__29096 = G__29126;
count__29097 = G__29127;
i__29098 = G__29128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29095);
if(temp__4425__auto__){
var seq__29095__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29095__$1)){
var c__21468__auto__ = cljs.core.chunk_first.call(null,seq__29095__$1);
var G__29129 = cljs.core.chunk_rest.call(null,seq__29095__$1);
var G__29130 = c__21468__auto__;
var G__29131 = cljs.core.count.call(null,c__21468__auto__);
var G__29132 = (0);
seq__29095 = G__29129;
chunk__29096 = G__29130;
count__29097 = G__29131;
i__29098 = G__29132;
continue;
} else {
var vec__29101 = cljs.core.first.call(null,seq__29095__$1);
var name = cljs.core.nth.call(null,vec__29101,(0),null);
var map__29102 = cljs.core.nth.call(null,vec__29101,(1),null);
var map__29102__$1 = ((cljs.core.seq_QMARK_.call(null,map__29102))?cljs.core.apply.call(null,cljs.core.hash_map,map__29102):map__29102);
var doc = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29102__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29133 = cljs.core.next.call(null,seq__29095__$1);
var G__29134 = null;
var G__29135 = (0);
var G__29136 = (0);
seq__29095 = G__29133;
chunk__29096 = G__29134;
count__29097 = G__29135;
i__29098 = G__29136;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map