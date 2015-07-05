// Compiled by ClojureScript 0.0-3308 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(){
var argseq__21723__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21723__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28061){
var vec__28062 = p__28061;
var default$ = cljs.core.nth.call(null,vec__28062,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq28059){
var G__28060 = cljs.core.first.call(null,seq28059);
var seq28059__$1 = cljs.core.next.call(null,seq28059);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__28060,seq28059__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(){
var argseq__21723__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21723__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__28065){
var vec__28066 = p__28065;
var default$ = cljs.core.nth.call(null,vec__28066,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq28063){
var G__28064 = cljs.core.first.call(null,seq28063);
var seq28063__$1 = cljs.core.next.call(null,seq28063);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__28064,seq28063__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(){
var argseq__21723__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21723__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq28067){
var G__28068 = cljs.core.first.call(null,seq28067);
var seq28067__$1 = cljs.core.next.call(null,seq28067);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28068,seq28067__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__28069_SHARP_){
return cljs.core.assoc_in.call(null,p1__28069_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(){
var argseq__21723__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21723__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28072){
var vec__28073 = p__28072;
var default$ = cljs.core.nth.call(null,vec__28073,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq28070){
var G__28071 = cljs.core.first.call(null,seq28070);
var seq28070__$1 = cljs.core.next.call(null,seq28070);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28071,seq28070__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(){
var argseq__21723__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21723__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__28076){
var vec__28077 = p__28076;
var default$ = cljs.core.nth.call(null,vec__28077,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq28074){
var G__28075 = cljs.core.first.call(null,seq28074);
var seq28074__$1 = cljs.core.next.call(null,seq28074);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28075,seq28074__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(){
var argseq__21723__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21723__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__28078_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__28078_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq28079){
var G__28080 = cljs.core.first.call(null,seq28079);
var seq28079__$1 = cljs.core.next.call(null,seq28079);
var G__28081 = cljs.core.first.call(null,seq28079__$1);
var seq28079__$2 = cljs.core.next.call(null,seq28079__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28080,G__28081,seq28079__$2);
});

//# sourceMappingURL=session.js.map