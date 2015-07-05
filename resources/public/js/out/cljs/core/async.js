// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t29870 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29870 = (function (fn_handler,f,meta29871){
this.fn_handler = fn_handler;
this.f = f;
this.meta29871 = meta29871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29872,meta29871__$1){
var self__ = this;
var _29872__$1 = this;
return (new cljs.core.async.t29870(self__.fn_handler,self__.f,meta29871__$1));
});

cljs.core.async.t29870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29872){
var self__ = this;
var _29872__$1 = this;
return self__.meta29871;
});

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29871","meta29871",71914188,null)], null);
});

cljs.core.async.t29870.cljs$lang$type = true;

cljs.core.async.t29870.cljs$lang$ctorStr = "cljs.core.async/t29870";

cljs.core.async.t29870.cljs$lang$ctorPrWriter = (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t29870");
});

cljs.core.async.__GT_t29870 = (function cljs$core$async$fn_handler_$___GT_t29870(fn_handler__$1,f__$1,meta29871){
return (new cljs.core.async.t29870(fn_handler__$1,f__$1,meta29871));
});

}

return (new cljs.core.async.t29870(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__29874 = buff;
if(G__29874){
var bit__21357__auto__ = null;
if(cljs.core.truth_((function (){var or__20683__auto__ = bit__21357__auto__;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return G__29874.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29874.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29874);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29874);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__29876 = arguments.length;
switch (G__29876) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__29879 = arguments.length;
switch (G__29879) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29881 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29881);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29881,ret){
return (function (){
return fn1.call(null,val_29881);
});})(val_29881,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__29883 = arguments.length;
switch (G__29883) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21568__auto___29885 = n;
var x_29886 = (0);
while(true){
if((x_29886 < n__21568__auto___29885)){
(a[x_29886] = (0));

var G__29887 = (x_29886 + (1));
x_29886 = G__29887;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29888 = (i + (1));
i = G__29888;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29892 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29892 = (function (alt_flag,flag,meta29893){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29893 = meta29893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29894,meta29893__$1){
var self__ = this;
var _29894__$1 = this;
return (new cljs.core.async.t29892(self__.alt_flag,self__.flag,meta29893__$1));
});})(flag))
;

cljs.core.async.t29892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29894){
var self__ = this;
var _29894__$1 = this;
return self__.meta29893;
});})(flag))
;

cljs.core.async.t29892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29892.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29893","meta29893",-1516329011,null)], null);
});})(flag))
;

cljs.core.async.t29892.cljs$lang$type = true;

cljs.core.async.t29892.cljs$lang$ctorStr = "cljs.core.async/t29892";

cljs.core.async.t29892.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t29892");
});})(flag))
;

cljs.core.async.__GT_t29892 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29892(alt_flag__$1,flag__$1,meta29893){
return (new cljs.core.async.t29892(alt_flag__$1,flag__$1,meta29893));
});})(flag))
;

}

return (new cljs.core.async.t29892(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29898 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29898 = (function (alt_handler,flag,cb,meta29899){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29899 = meta29899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29900,meta29899__$1){
var self__ = this;
var _29900__$1 = this;
return (new cljs.core.async.t29898(self__.alt_handler,self__.flag,self__.cb,meta29899__$1));
});

cljs.core.async.t29898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29900){
var self__ = this;
var _29900__$1 = this;
return self__.meta29899;
});

cljs.core.async.t29898.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29899","meta29899",178012200,null)], null);
});

cljs.core.async.t29898.cljs$lang$type = true;

cljs.core.async.t29898.cljs$lang$ctorStr = "cljs.core.async/t29898";

cljs.core.async.t29898.cljs$lang$ctorPrWriter = (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t29898");
});

cljs.core.async.__GT_t29898 = (function cljs$core$async$alt_handler_$___GT_t29898(alt_handler__$1,flag__$1,cb__$1,meta29899){
return (new cljs.core.async.t29898(alt_handler__$1,flag__$1,cb__$1,meta29899));
});

}

return (new cljs.core.async.t29898(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29901_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29901_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29902_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29902_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20683__auto__ = wport;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29903 = (i + (1));
i = G__29903;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20683__auto__ = ret;
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__20671__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20671__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20671__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__21723__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21723__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29906){
var map__29907 = p__29906;
var map__29907__$1 = ((cljs.core.seq_QMARK_.call(null,map__29907))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907):map__29907);
var opts = map__29907__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29904){
var G__29905 = cljs.core.first.call(null,seq29904);
var seq29904__$1 = cljs.core.next.call(null,seq29904);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29905,seq29904__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__29909 = arguments.length;
switch (G__29909) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24054__auto___29958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___29958){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___29958){
return (function (state_29933){
var state_val_29934 = (state_29933[(1)]);
if((state_val_29934 === (7))){
var inst_29929 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29935_29959 = state_29933__$1;
(statearr_29935_29959[(2)] = inst_29929);

(statearr_29935_29959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (1))){
var state_29933__$1 = state_29933;
var statearr_29936_29960 = state_29933__$1;
(statearr_29936_29960[(2)] = null);

(statearr_29936_29960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (4))){
var inst_29912 = (state_29933[(7)]);
var inst_29912__$1 = (state_29933[(2)]);
var inst_29913 = (inst_29912__$1 == null);
var state_29933__$1 = (function (){var statearr_29937 = state_29933;
(statearr_29937[(7)] = inst_29912__$1);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29913)){
var statearr_29938_29961 = state_29933__$1;
(statearr_29938_29961[(1)] = (5));

} else {
var statearr_29939_29962 = state_29933__$1;
(statearr_29939_29962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (13))){
var state_29933__$1 = state_29933;
var statearr_29940_29963 = state_29933__$1;
(statearr_29940_29963[(2)] = null);

(statearr_29940_29963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (6))){
var inst_29912 = (state_29933[(7)]);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29933__$1,(11),to,inst_29912);
} else {
if((state_val_29934 === (3))){
var inst_29931 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29933__$1,inst_29931);
} else {
if((state_val_29934 === (12))){
var state_29933__$1 = state_29933;
var statearr_29941_29964 = state_29933__$1;
(statearr_29941_29964[(2)] = null);

(statearr_29941_29964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (2))){
var state_29933__$1 = state_29933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29933__$1,(4),from);
} else {
if((state_val_29934 === (11))){
var inst_29922 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
if(cljs.core.truth_(inst_29922)){
var statearr_29942_29965 = state_29933__$1;
(statearr_29942_29965[(1)] = (12));

} else {
var statearr_29943_29966 = state_29933__$1;
(statearr_29943_29966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (9))){
var state_29933__$1 = state_29933;
var statearr_29944_29967 = state_29933__$1;
(statearr_29944_29967[(2)] = null);

(statearr_29944_29967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (5))){
var state_29933__$1 = state_29933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29945_29968 = state_29933__$1;
(statearr_29945_29968[(1)] = (8));

} else {
var statearr_29946_29969 = state_29933__$1;
(statearr_29946_29969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (14))){
var inst_29927 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29947_29970 = state_29933__$1;
(statearr_29947_29970[(2)] = inst_29927);

(statearr_29947_29970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (10))){
var inst_29919 = (state_29933[(2)]);
var state_29933__$1 = state_29933;
var statearr_29948_29971 = state_29933__$1;
(statearr_29948_29971[(2)] = inst_29919);

(statearr_29948_29971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29934 === (8))){
var inst_29916 = cljs.core.async.close_BANG_.call(null,to);
var state_29933__$1 = state_29933;
var statearr_29949_29972 = state_29933__$1;
(statearr_29949_29972[(2)] = inst_29916);

(statearr_29949_29972[(1)] = (10));


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
});})(c__24054__auto___29958))
;
return ((function (switch__23992__auto__,c__24054__auto___29958){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_29953 = [null,null,null,null,null,null,null,null];
(statearr_29953[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_29953[(1)] = (1));

return statearr_29953;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_29933){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_29933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e29954){if((e29954 instanceof Object)){
var ex__23996__auto__ = e29954;
var statearr_29955_29973 = state_29933;
(statearr_29955_29973[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29974 = state_29933;
state_29933 = G__29974;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_29933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___29958))
})();
var state__24056__auto__ = (function (){var statearr_29956 = f__24055__auto__.call(null);
(statearr_29956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___29958);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___29958))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30158){
var vec__30159 = p__30158;
var v = cljs.core.nth.call(null,vec__30159,(0),null);
var p = cljs.core.nth.call(null,vec__30159,(1),null);
var job = vec__30159;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24054__auto___30341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___30341,res,vec__30159,v,p,job,jobs,results){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___30341,res,vec__30159,v,p,job,jobs,results){
return (function (state_30164){
var state_val_30165 = (state_30164[(1)]);
if((state_val_30165 === (1))){
var state_30164__$1 = state_30164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30164__$1,(2),res,v);
} else {
if((state_val_30165 === (2))){
var inst_30161 = (state_30164[(2)]);
var inst_30162 = cljs.core.async.close_BANG_.call(null,res);
var state_30164__$1 = (function (){var statearr_30166 = state_30164;
(statearr_30166[(7)] = inst_30161);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30164__$1,inst_30162);
} else {
return null;
}
}
});})(c__24054__auto___30341,res,vec__30159,v,p,job,jobs,results))
;
return ((function (switch__23992__auto__,c__24054__auto___30341,res,vec__30159,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_30170 = [null,null,null,null,null,null,null,null];
(statearr_30170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_30170[(1)] = (1));

return statearr_30170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_30164){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30171){if((e30171 instanceof Object)){
var ex__23996__auto__ = e30171;
var statearr_30172_30342 = state_30164;
(statearr_30172_30342[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30343 = state_30164;
state_30164 = G__30343;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_30164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_30164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___30341,res,vec__30159,v,p,job,jobs,results))
})();
var state__24056__auto__ = (function (){var statearr_30173 = f__24055__auto__.call(null);
(statearr_30173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___30341);

return statearr_30173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___30341,res,vec__30159,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30174){
var vec__30175 = p__30174;
var v = cljs.core.nth.call(null,vec__30175,(0),null);
var p = cljs.core.nth.call(null,vec__30175,(1),null);
var job = vec__30175;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21568__auto___30344 = n;
var __30345 = (0);
while(true){
if((__30345 < n__21568__auto___30344)){
var G__30176_30346 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30176_30346) {
case "compute":
var c__24054__auto___30348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30345,c__24054__auto___30348,G__30176_30346,n__21568__auto___30344,jobs,results,process,async){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (__30345,c__24054__auto___30348,G__30176_30346,n__21568__auto___30344,jobs,results,process,async){
return (function (state_30189){
var state_val_30190 = (state_30189[(1)]);
if((state_val_30190 === (1))){
var state_30189__$1 = state_30189;
var statearr_30191_30349 = state_30189__$1;
(statearr_30191_30349[(2)] = null);

(statearr_30191_30349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (2))){
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30189__$1,(4),jobs);
} else {
if((state_val_30190 === (3))){
var inst_30187 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30189__$1,inst_30187);
} else {
if((state_val_30190 === (4))){
var inst_30179 = (state_30189[(2)]);
var inst_30180 = process.call(null,inst_30179);
var state_30189__$1 = state_30189;
if(cljs.core.truth_(inst_30180)){
var statearr_30192_30350 = state_30189__$1;
(statearr_30192_30350[(1)] = (5));

} else {
var statearr_30193_30351 = state_30189__$1;
(statearr_30193_30351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (5))){
var state_30189__$1 = state_30189;
var statearr_30194_30352 = state_30189__$1;
(statearr_30194_30352[(2)] = null);

(statearr_30194_30352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (6))){
var state_30189__$1 = state_30189;
var statearr_30195_30353 = state_30189__$1;
(statearr_30195_30353[(2)] = null);

(statearr_30195_30353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (7))){
var inst_30185 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30196_30354 = state_30189__$1;
(statearr_30196_30354[(2)] = inst_30185);

(statearr_30196_30354[(1)] = (3));


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
});})(__30345,c__24054__auto___30348,G__30176_30346,n__21568__auto___30344,jobs,results,process,async))
;
return ((function (__30345,switch__23992__auto__,c__24054__auto___30348,G__30176_30346,n__21568__auto___30344,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_30200 = [null,null,null,null,null,null,null];
(statearr_30200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_30200[(1)] = (1));

return statearr_30200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_30189){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30201){if((e30201 instanceof Object)){
var ex__23996__auto__ = e30201;
var statearr_30202_30355 = state_30189;
(statearr_30202_30355[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30356 = state_30189;
state_30189 = G__30356;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_30189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_30189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(__30345,switch__23992__auto__,c__24054__auto___30348,G__30176_30346,n__21568__auto___30344,jobs,results,process,async))
})();
var state__24056__auto__ = (function (){var statearr_30203 = f__24055__auto__.call(null);
(statearr_30203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___30348);

return statearr_30203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(__30345,c__24054__auto___30348,G__30176_30346,n__21568__auto___30344,jobs,results,process,async))
);


break;
case "async":
var c__24054__auto___30357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30345,c__24054__auto___30357,G__30176_30346,n__21568__auto___30344,jobs,results,process,async){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (__30345,c__24054__auto___30357,G__30176_30346,n__21568__auto___30344,jobs,results,process,async){
return (function (state_30216){
var state_val_30217 = (state_30216[(1)]);
if((state_val_30217 === (1))){
var state_30216__$1 = state_30216;
var statearr_30218_30358 = state_30216__$1;
(statearr_30218_30358[(2)] = null);

(statearr_30218_30358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (2))){
var state_30216__$1 = state_30216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30216__$1,(4),jobs);
} else {
if((state_val_30217 === (3))){
var inst_30214 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30216__$1,inst_30214);
} else {
if((state_val_30217 === (4))){
var inst_30206 = (state_30216[(2)]);
var inst_30207 = async.call(null,inst_30206);
var state_30216__$1 = state_30216;
if(cljs.core.truth_(inst_30207)){
var statearr_30219_30359 = state_30216__$1;
(statearr_30219_30359[(1)] = (5));

} else {
var statearr_30220_30360 = state_30216__$1;
(statearr_30220_30360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (5))){
var state_30216__$1 = state_30216;
var statearr_30221_30361 = state_30216__$1;
(statearr_30221_30361[(2)] = null);

(statearr_30221_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (6))){
var state_30216__$1 = state_30216;
var statearr_30222_30362 = state_30216__$1;
(statearr_30222_30362[(2)] = null);

(statearr_30222_30362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30217 === (7))){
var inst_30212 = (state_30216[(2)]);
var state_30216__$1 = state_30216;
var statearr_30223_30363 = state_30216__$1;
(statearr_30223_30363[(2)] = inst_30212);

(statearr_30223_30363[(1)] = (3));


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
});})(__30345,c__24054__auto___30357,G__30176_30346,n__21568__auto___30344,jobs,results,process,async))
;
return ((function (__30345,switch__23992__auto__,c__24054__auto___30357,G__30176_30346,n__21568__auto___30344,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_30227 = [null,null,null,null,null,null,null];
(statearr_30227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_30227[(1)] = (1));

return statearr_30227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_30216){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30228){if((e30228 instanceof Object)){
var ex__23996__auto__ = e30228;
var statearr_30229_30364 = state_30216;
(statearr_30229_30364[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30365 = state_30216;
state_30216 = G__30365;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_30216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_30216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(__30345,switch__23992__auto__,c__24054__auto___30357,G__30176_30346,n__21568__auto___30344,jobs,results,process,async))
})();
var state__24056__auto__ = (function (){var statearr_30230 = f__24055__auto__.call(null);
(statearr_30230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___30357);

return statearr_30230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(__30345,c__24054__auto___30357,G__30176_30346,n__21568__auto___30344,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30366 = (__30345 + (1));
__30345 = G__30366;
continue;
} else {
}
break;
}

var c__24054__auto___30367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___30367,jobs,results,process,async){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___30367,jobs,results,process,async){
return (function (state_30252){
var state_val_30253 = (state_30252[(1)]);
if((state_val_30253 === (1))){
var state_30252__$1 = state_30252;
var statearr_30254_30368 = state_30252__$1;
(statearr_30254_30368[(2)] = null);

(statearr_30254_30368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (2))){
var state_30252__$1 = state_30252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30252__$1,(4),from);
} else {
if((state_val_30253 === (3))){
var inst_30250 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30252__$1,inst_30250);
} else {
if((state_val_30253 === (4))){
var inst_30233 = (state_30252[(7)]);
var inst_30233__$1 = (state_30252[(2)]);
var inst_30234 = (inst_30233__$1 == null);
var state_30252__$1 = (function (){var statearr_30255 = state_30252;
(statearr_30255[(7)] = inst_30233__$1);

return statearr_30255;
})();
if(cljs.core.truth_(inst_30234)){
var statearr_30256_30369 = state_30252__$1;
(statearr_30256_30369[(1)] = (5));

} else {
var statearr_30257_30370 = state_30252__$1;
(statearr_30257_30370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (5))){
var inst_30236 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30252__$1 = state_30252;
var statearr_30258_30371 = state_30252__$1;
(statearr_30258_30371[(2)] = inst_30236);

(statearr_30258_30371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (6))){
var inst_30238 = (state_30252[(8)]);
var inst_30233 = (state_30252[(7)]);
var inst_30238__$1 = cljs.core.async.chan.call(null,(1));
var inst_30239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30240 = [inst_30233,inst_30238__$1];
var inst_30241 = (new cljs.core.PersistentVector(null,2,(5),inst_30239,inst_30240,null));
var state_30252__$1 = (function (){var statearr_30259 = state_30252;
(statearr_30259[(8)] = inst_30238__$1);

return statearr_30259;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30252__$1,(8),jobs,inst_30241);
} else {
if((state_val_30253 === (7))){
var inst_30248 = (state_30252[(2)]);
var state_30252__$1 = state_30252;
var statearr_30260_30372 = state_30252__$1;
(statearr_30260_30372[(2)] = inst_30248);

(statearr_30260_30372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30253 === (8))){
var inst_30238 = (state_30252[(8)]);
var inst_30243 = (state_30252[(2)]);
var state_30252__$1 = (function (){var statearr_30261 = state_30252;
(statearr_30261[(9)] = inst_30243);

return statearr_30261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30252__$1,(9),results,inst_30238);
} else {
if((state_val_30253 === (9))){
var inst_30245 = (state_30252[(2)]);
var state_30252__$1 = (function (){var statearr_30262 = state_30252;
(statearr_30262[(10)] = inst_30245);

return statearr_30262;
})();
var statearr_30263_30373 = state_30252__$1;
(statearr_30263_30373[(2)] = null);

(statearr_30263_30373[(1)] = (2));


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
});})(c__24054__auto___30367,jobs,results,process,async))
;
return ((function (switch__23992__auto__,c__24054__auto___30367,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_30267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_30267[(1)] = (1));

return statearr_30267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_30252){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30268){if((e30268 instanceof Object)){
var ex__23996__auto__ = e30268;
var statearr_30269_30374 = state_30252;
(statearr_30269_30374[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30375 = state_30252;
state_30252 = G__30375;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_30252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_30252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___30367,jobs,results,process,async))
})();
var state__24056__auto__ = (function (){var statearr_30270 = f__24055__auto__.call(null);
(statearr_30270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___30367);

return statearr_30270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___30367,jobs,results,process,async))
);


var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__,jobs,results,process,async){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__,jobs,results,process,async){
return (function (state_30308){
var state_val_30309 = (state_30308[(1)]);
if((state_val_30309 === (7))){
var inst_30304 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
var statearr_30310_30376 = state_30308__$1;
(statearr_30310_30376[(2)] = inst_30304);

(statearr_30310_30376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (20))){
var state_30308__$1 = state_30308;
var statearr_30311_30377 = state_30308__$1;
(statearr_30311_30377[(2)] = null);

(statearr_30311_30377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (1))){
var state_30308__$1 = state_30308;
var statearr_30312_30378 = state_30308__$1;
(statearr_30312_30378[(2)] = null);

(statearr_30312_30378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (4))){
var inst_30273 = (state_30308[(7)]);
var inst_30273__$1 = (state_30308[(2)]);
var inst_30274 = (inst_30273__$1 == null);
var state_30308__$1 = (function (){var statearr_30313 = state_30308;
(statearr_30313[(7)] = inst_30273__$1);

return statearr_30313;
})();
if(cljs.core.truth_(inst_30274)){
var statearr_30314_30379 = state_30308__$1;
(statearr_30314_30379[(1)] = (5));

} else {
var statearr_30315_30380 = state_30308__$1;
(statearr_30315_30380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (15))){
var inst_30286 = (state_30308[(8)]);
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30308__$1,(18),to,inst_30286);
} else {
if((state_val_30309 === (21))){
var inst_30299 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
var statearr_30316_30381 = state_30308__$1;
(statearr_30316_30381[(2)] = inst_30299);

(statearr_30316_30381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (13))){
var inst_30301 = (state_30308[(2)]);
var state_30308__$1 = (function (){var statearr_30317 = state_30308;
(statearr_30317[(9)] = inst_30301);

return statearr_30317;
})();
var statearr_30318_30382 = state_30308__$1;
(statearr_30318_30382[(2)] = null);

(statearr_30318_30382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (6))){
var inst_30273 = (state_30308[(7)]);
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30308__$1,(11),inst_30273);
} else {
if((state_val_30309 === (17))){
var inst_30294 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
if(cljs.core.truth_(inst_30294)){
var statearr_30319_30383 = state_30308__$1;
(statearr_30319_30383[(1)] = (19));

} else {
var statearr_30320_30384 = state_30308__$1;
(statearr_30320_30384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (3))){
var inst_30306 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30308__$1,inst_30306);
} else {
if((state_val_30309 === (12))){
var inst_30283 = (state_30308[(10)]);
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30308__$1,(14),inst_30283);
} else {
if((state_val_30309 === (2))){
var state_30308__$1 = state_30308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30308__$1,(4),results);
} else {
if((state_val_30309 === (19))){
var state_30308__$1 = state_30308;
var statearr_30321_30385 = state_30308__$1;
(statearr_30321_30385[(2)] = null);

(statearr_30321_30385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (11))){
var inst_30283 = (state_30308[(2)]);
var state_30308__$1 = (function (){var statearr_30322 = state_30308;
(statearr_30322[(10)] = inst_30283);

return statearr_30322;
})();
var statearr_30323_30386 = state_30308__$1;
(statearr_30323_30386[(2)] = null);

(statearr_30323_30386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (9))){
var state_30308__$1 = state_30308;
var statearr_30324_30387 = state_30308__$1;
(statearr_30324_30387[(2)] = null);

(statearr_30324_30387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (5))){
var state_30308__$1 = state_30308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30325_30388 = state_30308__$1;
(statearr_30325_30388[(1)] = (8));

} else {
var statearr_30326_30389 = state_30308__$1;
(statearr_30326_30389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (14))){
var inst_30288 = (state_30308[(11)]);
var inst_30286 = (state_30308[(8)]);
var inst_30286__$1 = (state_30308[(2)]);
var inst_30287 = (inst_30286__$1 == null);
var inst_30288__$1 = cljs.core.not.call(null,inst_30287);
var state_30308__$1 = (function (){var statearr_30327 = state_30308;
(statearr_30327[(11)] = inst_30288__$1);

(statearr_30327[(8)] = inst_30286__$1);

return statearr_30327;
})();
if(inst_30288__$1){
var statearr_30328_30390 = state_30308__$1;
(statearr_30328_30390[(1)] = (15));

} else {
var statearr_30329_30391 = state_30308__$1;
(statearr_30329_30391[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (16))){
var inst_30288 = (state_30308[(11)]);
var state_30308__$1 = state_30308;
var statearr_30330_30392 = state_30308__$1;
(statearr_30330_30392[(2)] = inst_30288);

(statearr_30330_30392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (10))){
var inst_30280 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
var statearr_30331_30393 = state_30308__$1;
(statearr_30331_30393[(2)] = inst_30280);

(statearr_30331_30393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (18))){
var inst_30291 = (state_30308[(2)]);
var state_30308__$1 = state_30308;
var statearr_30332_30394 = state_30308__$1;
(statearr_30332_30394[(2)] = inst_30291);

(statearr_30332_30394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30309 === (8))){
var inst_30277 = cljs.core.async.close_BANG_.call(null,to);
var state_30308__$1 = state_30308;
var statearr_30333_30395 = state_30308__$1;
(statearr_30333_30395[(2)] = inst_30277);

(statearr_30333_30395[(1)] = (10));


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
});})(c__24054__auto__,jobs,results,process,async))
;
return ((function (switch__23992__auto__,c__24054__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_30337 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__);

(statearr_30337[(1)] = (1));

return statearr_30337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1 = (function (state_30308){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30338){if((e30338 instanceof Object)){
var ex__23996__auto__ = e30338;
var statearr_30339_30396 = state_30308;
(statearr_30339_30396[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30397 = state_30308;
state_30308 = G__30397;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__ = function(state_30308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1.call(this,state_30308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__,jobs,results,process,async))
})();
var state__24056__auto__ = (function (){var statearr_30340 = f__24055__auto__.call(null);
(statearr_30340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__,jobs,results,process,async))
);

return c__24054__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__30399 = arguments.length;
switch (G__30399) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__30402 = arguments.length;
switch (G__30402) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__30405 = arguments.length;
switch (G__30405) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24054__auto___30457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___30457,tc,fc){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___30457,tc,fc){
return (function (state_30431){
var state_val_30432 = (state_30431[(1)]);
if((state_val_30432 === (7))){
var inst_30427 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30433_30458 = state_30431__$1;
(statearr_30433_30458[(2)] = inst_30427);

(statearr_30433_30458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (1))){
var state_30431__$1 = state_30431;
var statearr_30434_30459 = state_30431__$1;
(statearr_30434_30459[(2)] = null);

(statearr_30434_30459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (4))){
var inst_30408 = (state_30431[(7)]);
var inst_30408__$1 = (state_30431[(2)]);
var inst_30409 = (inst_30408__$1 == null);
var state_30431__$1 = (function (){var statearr_30435 = state_30431;
(statearr_30435[(7)] = inst_30408__$1);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30409)){
var statearr_30436_30460 = state_30431__$1;
(statearr_30436_30460[(1)] = (5));

} else {
var statearr_30437_30461 = state_30431__$1;
(statearr_30437_30461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (13))){
var state_30431__$1 = state_30431;
var statearr_30438_30462 = state_30431__$1;
(statearr_30438_30462[(2)] = null);

(statearr_30438_30462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (6))){
var inst_30408 = (state_30431[(7)]);
var inst_30414 = p.call(null,inst_30408);
var state_30431__$1 = state_30431;
if(cljs.core.truth_(inst_30414)){
var statearr_30439_30463 = state_30431__$1;
(statearr_30439_30463[(1)] = (9));

} else {
var statearr_30440_30464 = state_30431__$1;
(statearr_30440_30464[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (3))){
var inst_30429 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30431__$1,inst_30429);
} else {
if((state_val_30432 === (12))){
var state_30431__$1 = state_30431;
var statearr_30441_30465 = state_30431__$1;
(statearr_30441_30465[(2)] = null);

(statearr_30441_30465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (2))){
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(4),ch);
} else {
if((state_val_30432 === (11))){
var inst_30408 = (state_30431[(7)]);
var inst_30418 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30431__$1,(8),inst_30418,inst_30408);
} else {
if((state_val_30432 === (9))){
var state_30431__$1 = state_30431;
var statearr_30442_30466 = state_30431__$1;
(statearr_30442_30466[(2)] = tc);

(statearr_30442_30466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (5))){
var inst_30411 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30412 = cljs.core.async.close_BANG_.call(null,fc);
var state_30431__$1 = (function (){var statearr_30443 = state_30431;
(statearr_30443[(8)] = inst_30411);

return statearr_30443;
})();
var statearr_30444_30467 = state_30431__$1;
(statearr_30444_30467[(2)] = inst_30412);

(statearr_30444_30467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (14))){
var inst_30425 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30445_30468 = state_30431__$1;
(statearr_30445_30468[(2)] = inst_30425);

(statearr_30445_30468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (10))){
var state_30431__$1 = state_30431;
var statearr_30446_30469 = state_30431__$1;
(statearr_30446_30469[(2)] = fc);

(statearr_30446_30469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (8))){
var inst_30420 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
if(cljs.core.truth_(inst_30420)){
var statearr_30447_30470 = state_30431__$1;
(statearr_30447_30470[(1)] = (12));

} else {
var statearr_30448_30471 = state_30431__$1;
(statearr_30448_30471[(1)] = (13));

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
});})(c__24054__auto___30457,tc,fc))
;
return ((function (switch__23992__auto__,c__24054__auto___30457,tc,fc){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_30452 = [null,null,null,null,null,null,null,null,null];
(statearr_30452[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_30452[(1)] = (1));

return statearr_30452;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_30431){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30453){if((e30453 instanceof Object)){
var ex__23996__auto__ = e30453;
var statearr_30454_30472 = state_30431;
(statearr_30454_30472[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30473 = state_30431;
state_30431 = G__30473;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_30431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_30431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___30457,tc,fc))
})();
var state__24056__auto__ = (function (){var statearr_30455 = f__24055__auto__.call(null);
(statearr_30455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___30457);

return statearr_30455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___30457,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_30520){
var state_val_30521 = (state_30520[(1)]);
if((state_val_30521 === (1))){
var inst_30506 = init;
var state_30520__$1 = (function (){var statearr_30522 = state_30520;
(statearr_30522[(7)] = inst_30506);

return statearr_30522;
})();
var statearr_30523_30538 = state_30520__$1;
(statearr_30523_30538[(2)] = null);

(statearr_30523_30538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30521 === (2))){
var state_30520__$1 = state_30520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30520__$1,(4),ch);
} else {
if((state_val_30521 === (3))){
var inst_30518 = (state_30520[(2)]);
var state_30520__$1 = state_30520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30520__$1,inst_30518);
} else {
if((state_val_30521 === (4))){
var inst_30509 = (state_30520[(8)]);
var inst_30509__$1 = (state_30520[(2)]);
var inst_30510 = (inst_30509__$1 == null);
var state_30520__$1 = (function (){var statearr_30524 = state_30520;
(statearr_30524[(8)] = inst_30509__$1);

return statearr_30524;
})();
if(cljs.core.truth_(inst_30510)){
var statearr_30525_30539 = state_30520__$1;
(statearr_30525_30539[(1)] = (5));

} else {
var statearr_30526_30540 = state_30520__$1;
(statearr_30526_30540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30521 === (5))){
var inst_30506 = (state_30520[(7)]);
var state_30520__$1 = state_30520;
var statearr_30527_30541 = state_30520__$1;
(statearr_30527_30541[(2)] = inst_30506);

(statearr_30527_30541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30521 === (6))){
var inst_30509 = (state_30520[(8)]);
var inst_30506 = (state_30520[(7)]);
var inst_30513 = f.call(null,inst_30506,inst_30509);
var inst_30506__$1 = inst_30513;
var state_30520__$1 = (function (){var statearr_30528 = state_30520;
(statearr_30528[(7)] = inst_30506__$1);

return statearr_30528;
})();
var statearr_30529_30542 = state_30520__$1;
(statearr_30529_30542[(2)] = null);

(statearr_30529_30542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30521 === (7))){
var inst_30516 = (state_30520[(2)]);
var state_30520__$1 = state_30520;
var statearr_30530_30543 = state_30520__$1;
(statearr_30530_30543[(2)] = inst_30516);

(statearr_30530_30543[(1)] = (3));


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
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23993__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23993__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null,null,null];
(statearr_30534[(0)] = cljs$core$async$reduce_$_state_machine__23993__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var cljs$core$async$reduce_$_state_machine__23993__auto____1 = (function (state_30520){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30535){if((e30535 instanceof Object)){
var ex__23996__auto__ = e30535;
var statearr_30536_30544 = state_30520;
(statearr_30536_30544[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30545 = state_30520;
state_30520 = G__30545;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23993__auto__ = function(state_30520){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23993__auto____1.call(this,state_30520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23993__auto____0;
cljs$core$async$reduce_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23993__auto____1;
return cljs$core$async$reduce_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_30537 = f__24055__auto__.call(null);
(statearr_30537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__30547 = arguments.length;
switch (G__30547) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_30572){
var state_val_30573 = (state_30572[(1)]);
if((state_val_30573 === (7))){
var inst_30554 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30574_30598 = state_30572__$1;
(statearr_30574_30598[(2)] = inst_30554);

(statearr_30574_30598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (1))){
var inst_30548 = cljs.core.seq.call(null,coll);
var inst_30549 = inst_30548;
var state_30572__$1 = (function (){var statearr_30575 = state_30572;
(statearr_30575[(7)] = inst_30549);

return statearr_30575;
})();
var statearr_30576_30599 = state_30572__$1;
(statearr_30576_30599[(2)] = null);

(statearr_30576_30599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (4))){
var inst_30549 = (state_30572[(7)]);
var inst_30552 = cljs.core.first.call(null,inst_30549);
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30572__$1,(7),ch,inst_30552);
} else {
if((state_val_30573 === (13))){
var inst_30566 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30577_30600 = state_30572__$1;
(statearr_30577_30600[(2)] = inst_30566);

(statearr_30577_30600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (6))){
var inst_30557 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
if(cljs.core.truth_(inst_30557)){
var statearr_30578_30601 = state_30572__$1;
(statearr_30578_30601[(1)] = (8));

} else {
var statearr_30579_30602 = state_30572__$1;
(statearr_30579_30602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (3))){
var inst_30570 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30572__$1,inst_30570);
} else {
if((state_val_30573 === (12))){
var state_30572__$1 = state_30572;
var statearr_30580_30603 = state_30572__$1;
(statearr_30580_30603[(2)] = null);

(statearr_30580_30603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (2))){
var inst_30549 = (state_30572[(7)]);
var state_30572__$1 = state_30572;
if(cljs.core.truth_(inst_30549)){
var statearr_30581_30604 = state_30572__$1;
(statearr_30581_30604[(1)] = (4));

} else {
var statearr_30582_30605 = state_30572__$1;
(statearr_30582_30605[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (11))){
var inst_30563 = cljs.core.async.close_BANG_.call(null,ch);
var state_30572__$1 = state_30572;
var statearr_30583_30606 = state_30572__$1;
(statearr_30583_30606[(2)] = inst_30563);

(statearr_30583_30606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (9))){
var state_30572__$1 = state_30572;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30584_30607 = state_30572__$1;
(statearr_30584_30607[(1)] = (11));

} else {
var statearr_30585_30608 = state_30572__$1;
(statearr_30585_30608[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (5))){
var inst_30549 = (state_30572[(7)]);
var state_30572__$1 = state_30572;
var statearr_30586_30609 = state_30572__$1;
(statearr_30586_30609[(2)] = inst_30549);

(statearr_30586_30609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (10))){
var inst_30568 = (state_30572[(2)]);
var state_30572__$1 = state_30572;
var statearr_30587_30610 = state_30572__$1;
(statearr_30587_30610[(2)] = inst_30568);

(statearr_30587_30610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30573 === (8))){
var inst_30549 = (state_30572[(7)]);
var inst_30559 = cljs.core.next.call(null,inst_30549);
var inst_30549__$1 = inst_30559;
var state_30572__$1 = (function (){var statearr_30588 = state_30572;
(statearr_30588[(7)] = inst_30549__$1);

return statearr_30588;
})();
var statearr_30589_30611 = state_30572__$1;
(statearr_30589_30611[(2)] = null);

(statearr_30589_30611[(1)] = (2));


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
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null,null];
(statearr_30593[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_30572){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__23996__auto__ = e30594;
var statearr_30595_30612 = state_30572;
(statearr_30595_30612[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30613 = state_30572;
state_30572 = G__30613;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_30572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_30572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_30596 = f__24055__auto__.call(null);
(statearr_30596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30615 = {};
return obj30615;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__20671__auto__ = _;
if(and__20671__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21319__auto__ = (((_ == null))?null:_);
return (function (){var or__20683__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30617 = {};
return obj30617;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30839 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30839 = (function (mult,ch,cs,meta30840){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30840 = meta30840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30841,meta30840__$1){
var self__ = this;
var _30841__$1 = this;
return (new cljs.core.async.t30839(self__.mult,self__.ch,self__.cs,meta30840__$1));
});})(cs))
;

cljs.core.async.t30839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30841){
var self__ = this;
var _30841__$1 = this;
return self__.meta30840;
});})(cs))
;

cljs.core.async.t30839.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30839.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30839.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30839.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30839.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30839.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30840","meta30840",1198383936,null)], null);
});})(cs))
;

cljs.core.async.t30839.cljs$lang$type = true;

cljs.core.async.t30839.cljs$lang$ctorStr = "cljs.core.async/t30839";

cljs.core.async.t30839.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t30839");
});})(cs))
;

cljs.core.async.__GT_t30839 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30839(mult__$1,ch__$1,cs__$1,meta30840){
return (new cljs.core.async.t30839(mult__$1,ch__$1,cs__$1,meta30840));
});})(cs))
;

}

return (new cljs.core.async.t30839(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24054__auto___31060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31060,cs,m,dchan,dctr,done){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31060,cs,m,dchan,dctr,done){
return (function (state_30972){
var state_val_30973 = (state_30972[(1)]);
if((state_val_30973 === (7))){
var inst_30968 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_30974_31061 = state_30972__$1;
(statearr_30974_31061[(2)] = inst_30968);

(statearr_30974_31061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (20))){
var inst_30873 = (state_30972[(7)]);
var inst_30883 = cljs.core.first.call(null,inst_30873);
var inst_30884 = cljs.core.nth.call(null,inst_30883,(0),null);
var inst_30885 = cljs.core.nth.call(null,inst_30883,(1),null);
var state_30972__$1 = (function (){var statearr_30975 = state_30972;
(statearr_30975[(8)] = inst_30884);

return statearr_30975;
})();
if(cljs.core.truth_(inst_30885)){
var statearr_30976_31062 = state_30972__$1;
(statearr_30976_31062[(1)] = (22));

} else {
var statearr_30977_31063 = state_30972__$1;
(statearr_30977_31063[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (27))){
var inst_30915 = (state_30972[(9)]);
var inst_30920 = (state_30972[(10)]);
var inst_30844 = (state_30972[(11)]);
var inst_30913 = (state_30972[(12)]);
var inst_30920__$1 = cljs.core._nth.call(null,inst_30913,inst_30915);
var inst_30921 = cljs.core.async.put_BANG_.call(null,inst_30920__$1,inst_30844,done);
var state_30972__$1 = (function (){var statearr_30978 = state_30972;
(statearr_30978[(10)] = inst_30920__$1);

return statearr_30978;
})();
if(cljs.core.truth_(inst_30921)){
var statearr_30979_31064 = state_30972__$1;
(statearr_30979_31064[(1)] = (30));

} else {
var statearr_30980_31065 = state_30972__$1;
(statearr_30980_31065[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (1))){
var state_30972__$1 = state_30972;
var statearr_30981_31066 = state_30972__$1;
(statearr_30981_31066[(2)] = null);

(statearr_30981_31066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (24))){
var inst_30873 = (state_30972[(7)]);
var inst_30890 = (state_30972[(2)]);
var inst_30891 = cljs.core.next.call(null,inst_30873);
var inst_30853 = inst_30891;
var inst_30854 = null;
var inst_30855 = (0);
var inst_30856 = (0);
var state_30972__$1 = (function (){var statearr_30982 = state_30972;
(statearr_30982[(13)] = inst_30855);

(statearr_30982[(14)] = inst_30890);

(statearr_30982[(15)] = inst_30853);

(statearr_30982[(16)] = inst_30856);

(statearr_30982[(17)] = inst_30854);

return statearr_30982;
})();
var statearr_30983_31067 = state_30972__$1;
(statearr_30983_31067[(2)] = null);

(statearr_30983_31067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (39))){
var state_30972__$1 = state_30972;
var statearr_30987_31068 = state_30972__$1;
(statearr_30987_31068[(2)] = null);

(statearr_30987_31068[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (4))){
var inst_30844 = (state_30972[(11)]);
var inst_30844__$1 = (state_30972[(2)]);
var inst_30845 = (inst_30844__$1 == null);
var state_30972__$1 = (function (){var statearr_30988 = state_30972;
(statearr_30988[(11)] = inst_30844__$1);

return statearr_30988;
})();
if(cljs.core.truth_(inst_30845)){
var statearr_30989_31069 = state_30972__$1;
(statearr_30989_31069[(1)] = (5));

} else {
var statearr_30990_31070 = state_30972__$1;
(statearr_30990_31070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (15))){
var inst_30855 = (state_30972[(13)]);
var inst_30853 = (state_30972[(15)]);
var inst_30856 = (state_30972[(16)]);
var inst_30854 = (state_30972[(17)]);
var inst_30869 = (state_30972[(2)]);
var inst_30870 = (inst_30856 + (1));
var tmp30984 = inst_30855;
var tmp30985 = inst_30853;
var tmp30986 = inst_30854;
var inst_30853__$1 = tmp30985;
var inst_30854__$1 = tmp30986;
var inst_30855__$1 = tmp30984;
var inst_30856__$1 = inst_30870;
var state_30972__$1 = (function (){var statearr_30991 = state_30972;
(statearr_30991[(13)] = inst_30855__$1);

(statearr_30991[(15)] = inst_30853__$1);

(statearr_30991[(18)] = inst_30869);

(statearr_30991[(16)] = inst_30856__$1);

(statearr_30991[(17)] = inst_30854__$1);

return statearr_30991;
})();
var statearr_30992_31071 = state_30972__$1;
(statearr_30992_31071[(2)] = null);

(statearr_30992_31071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (21))){
var inst_30894 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_30996_31072 = state_30972__$1;
(statearr_30996_31072[(2)] = inst_30894);

(statearr_30996_31072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (31))){
var inst_30920 = (state_30972[(10)]);
var inst_30924 = done.call(null,null);
var inst_30925 = cljs.core.async.untap_STAR_.call(null,m,inst_30920);
var state_30972__$1 = (function (){var statearr_30997 = state_30972;
(statearr_30997[(19)] = inst_30924);

return statearr_30997;
})();
var statearr_30998_31073 = state_30972__$1;
(statearr_30998_31073[(2)] = inst_30925);

(statearr_30998_31073[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (32))){
var inst_30915 = (state_30972[(9)]);
var inst_30914 = (state_30972[(20)]);
var inst_30912 = (state_30972[(21)]);
var inst_30913 = (state_30972[(12)]);
var inst_30927 = (state_30972[(2)]);
var inst_30928 = (inst_30915 + (1));
var tmp30993 = inst_30914;
var tmp30994 = inst_30912;
var tmp30995 = inst_30913;
var inst_30912__$1 = tmp30994;
var inst_30913__$1 = tmp30995;
var inst_30914__$1 = tmp30993;
var inst_30915__$1 = inst_30928;
var state_30972__$1 = (function (){var statearr_30999 = state_30972;
(statearr_30999[(9)] = inst_30915__$1);

(statearr_30999[(20)] = inst_30914__$1);

(statearr_30999[(22)] = inst_30927);

(statearr_30999[(21)] = inst_30912__$1);

(statearr_30999[(12)] = inst_30913__$1);

return statearr_30999;
})();
var statearr_31000_31074 = state_30972__$1;
(statearr_31000_31074[(2)] = null);

(statearr_31000_31074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (40))){
var inst_30940 = (state_30972[(23)]);
var inst_30944 = done.call(null,null);
var inst_30945 = cljs.core.async.untap_STAR_.call(null,m,inst_30940);
var state_30972__$1 = (function (){var statearr_31001 = state_30972;
(statearr_31001[(24)] = inst_30944);

return statearr_31001;
})();
var statearr_31002_31075 = state_30972__$1;
(statearr_31002_31075[(2)] = inst_30945);

(statearr_31002_31075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (33))){
var inst_30931 = (state_30972[(25)]);
var inst_30933 = cljs.core.chunked_seq_QMARK_.call(null,inst_30931);
var state_30972__$1 = state_30972;
if(inst_30933){
var statearr_31003_31076 = state_30972__$1;
(statearr_31003_31076[(1)] = (36));

} else {
var statearr_31004_31077 = state_30972__$1;
(statearr_31004_31077[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (13))){
var inst_30863 = (state_30972[(26)]);
var inst_30866 = cljs.core.async.close_BANG_.call(null,inst_30863);
var state_30972__$1 = state_30972;
var statearr_31005_31078 = state_30972__$1;
(statearr_31005_31078[(2)] = inst_30866);

(statearr_31005_31078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (22))){
var inst_30884 = (state_30972[(8)]);
var inst_30887 = cljs.core.async.close_BANG_.call(null,inst_30884);
var state_30972__$1 = state_30972;
var statearr_31006_31079 = state_30972__$1;
(statearr_31006_31079[(2)] = inst_30887);

(statearr_31006_31079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (36))){
var inst_30931 = (state_30972[(25)]);
var inst_30935 = cljs.core.chunk_first.call(null,inst_30931);
var inst_30936 = cljs.core.chunk_rest.call(null,inst_30931);
var inst_30937 = cljs.core.count.call(null,inst_30935);
var inst_30912 = inst_30936;
var inst_30913 = inst_30935;
var inst_30914 = inst_30937;
var inst_30915 = (0);
var state_30972__$1 = (function (){var statearr_31007 = state_30972;
(statearr_31007[(9)] = inst_30915);

(statearr_31007[(20)] = inst_30914);

(statearr_31007[(21)] = inst_30912);

(statearr_31007[(12)] = inst_30913);

return statearr_31007;
})();
var statearr_31008_31080 = state_30972__$1;
(statearr_31008_31080[(2)] = null);

(statearr_31008_31080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (41))){
var inst_30931 = (state_30972[(25)]);
var inst_30947 = (state_30972[(2)]);
var inst_30948 = cljs.core.next.call(null,inst_30931);
var inst_30912 = inst_30948;
var inst_30913 = null;
var inst_30914 = (0);
var inst_30915 = (0);
var state_30972__$1 = (function (){var statearr_31009 = state_30972;
(statearr_31009[(9)] = inst_30915);

(statearr_31009[(20)] = inst_30914);

(statearr_31009[(21)] = inst_30912);

(statearr_31009[(27)] = inst_30947);

(statearr_31009[(12)] = inst_30913);

return statearr_31009;
})();
var statearr_31010_31081 = state_30972__$1;
(statearr_31010_31081[(2)] = null);

(statearr_31010_31081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (43))){
var state_30972__$1 = state_30972;
var statearr_31011_31082 = state_30972__$1;
(statearr_31011_31082[(2)] = null);

(statearr_31011_31082[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (29))){
var inst_30956 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31012_31083 = state_30972__$1;
(statearr_31012_31083[(2)] = inst_30956);

(statearr_31012_31083[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (44))){
var inst_30965 = (state_30972[(2)]);
var state_30972__$1 = (function (){var statearr_31013 = state_30972;
(statearr_31013[(28)] = inst_30965);

return statearr_31013;
})();
var statearr_31014_31084 = state_30972__$1;
(statearr_31014_31084[(2)] = null);

(statearr_31014_31084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (6))){
var inst_30904 = (state_30972[(29)]);
var inst_30903 = cljs.core.deref.call(null,cs);
var inst_30904__$1 = cljs.core.keys.call(null,inst_30903);
var inst_30905 = cljs.core.count.call(null,inst_30904__$1);
var inst_30906 = cljs.core.reset_BANG_.call(null,dctr,inst_30905);
var inst_30911 = cljs.core.seq.call(null,inst_30904__$1);
var inst_30912 = inst_30911;
var inst_30913 = null;
var inst_30914 = (0);
var inst_30915 = (0);
var state_30972__$1 = (function (){var statearr_31015 = state_30972;
(statearr_31015[(9)] = inst_30915);

(statearr_31015[(20)] = inst_30914);

(statearr_31015[(21)] = inst_30912);

(statearr_31015[(29)] = inst_30904__$1);

(statearr_31015[(12)] = inst_30913);

(statearr_31015[(30)] = inst_30906);

return statearr_31015;
})();
var statearr_31016_31085 = state_30972__$1;
(statearr_31016_31085[(2)] = null);

(statearr_31016_31085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (28))){
var inst_30931 = (state_30972[(25)]);
var inst_30912 = (state_30972[(21)]);
var inst_30931__$1 = cljs.core.seq.call(null,inst_30912);
var state_30972__$1 = (function (){var statearr_31017 = state_30972;
(statearr_31017[(25)] = inst_30931__$1);

return statearr_31017;
})();
if(inst_30931__$1){
var statearr_31018_31086 = state_30972__$1;
(statearr_31018_31086[(1)] = (33));

} else {
var statearr_31019_31087 = state_30972__$1;
(statearr_31019_31087[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (25))){
var inst_30915 = (state_30972[(9)]);
var inst_30914 = (state_30972[(20)]);
var inst_30917 = (inst_30915 < inst_30914);
var inst_30918 = inst_30917;
var state_30972__$1 = state_30972;
if(cljs.core.truth_(inst_30918)){
var statearr_31020_31088 = state_30972__$1;
(statearr_31020_31088[(1)] = (27));

} else {
var statearr_31021_31089 = state_30972__$1;
(statearr_31021_31089[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (34))){
var state_30972__$1 = state_30972;
var statearr_31022_31090 = state_30972__$1;
(statearr_31022_31090[(2)] = null);

(statearr_31022_31090[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (17))){
var state_30972__$1 = state_30972;
var statearr_31023_31091 = state_30972__$1;
(statearr_31023_31091[(2)] = null);

(statearr_31023_31091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (3))){
var inst_30970 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30972__$1,inst_30970);
} else {
if((state_val_30973 === (12))){
var inst_30899 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31024_31092 = state_30972__$1;
(statearr_31024_31092[(2)] = inst_30899);

(statearr_31024_31092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (2))){
var state_30972__$1 = state_30972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30972__$1,(4),ch);
} else {
if((state_val_30973 === (23))){
var state_30972__$1 = state_30972;
var statearr_31025_31093 = state_30972__$1;
(statearr_31025_31093[(2)] = null);

(statearr_31025_31093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (35))){
var inst_30954 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31026_31094 = state_30972__$1;
(statearr_31026_31094[(2)] = inst_30954);

(statearr_31026_31094[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (19))){
var inst_30873 = (state_30972[(7)]);
var inst_30877 = cljs.core.chunk_first.call(null,inst_30873);
var inst_30878 = cljs.core.chunk_rest.call(null,inst_30873);
var inst_30879 = cljs.core.count.call(null,inst_30877);
var inst_30853 = inst_30878;
var inst_30854 = inst_30877;
var inst_30855 = inst_30879;
var inst_30856 = (0);
var state_30972__$1 = (function (){var statearr_31027 = state_30972;
(statearr_31027[(13)] = inst_30855);

(statearr_31027[(15)] = inst_30853);

(statearr_31027[(16)] = inst_30856);

(statearr_31027[(17)] = inst_30854);

return statearr_31027;
})();
var statearr_31028_31095 = state_30972__$1;
(statearr_31028_31095[(2)] = null);

(statearr_31028_31095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (11))){
var inst_30873 = (state_30972[(7)]);
var inst_30853 = (state_30972[(15)]);
var inst_30873__$1 = cljs.core.seq.call(null,inst_30853);
var state_30972__$1 = (function (){var statearr_31029 = state_30972;
(statearr_31029[(7)] = inst_30873__$1);

return statearr_31029;
})();
if(inst_30873__$1){
var statearr_31030_31096 = state_30972__$1;
(statearr_31030_31096[(1)] = (16));

} else {
var statearr_31031_31097 = state_30972__$1;
(statearr_31031_31097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (9))){
var inst_30901 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31032_31098 = state_30972__$1;
(statearr_31032_31098[(2)] = inst_30901);

(statearr_31032_31098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (5))){
var inst_30851 = cljs.core.deref.call(null,cs);
var inst_30852 = cljs.core.seq.call(null,inst_30851);
var inst_30853 = inst_30852;
var inst_30854 = null;
var inst_30855 = (0);
var inst_30856 = (0);
var state_30972__$1 = (function (){var statearr_31033 = state_30972;
(statearr_31033[(13)] = inst_30855);

(statearr_31033[(15)] = inst_30853);

(statearr_31033[(16)] = inst_30856);

(statearr_31033[(17)] = inst_30854);

return statearr_31033;
})();
var statearr_31034_31099 = state_30972__$1;
(statearr_31034_31099[(2)] = null);

(statearr_31034_31099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (14))){
var state_30972__$1 = state_30972;
var statearr_31035_31100 = state_30972__$1;
(statearr_31035_31100[(2)] = null);

(statearr_31035_31100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (45))){
var inst_30962 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31036_31101 = state_30972__$1;
(statearr_31036_31101[(2)] = inst_30962);

(statearr_31036_31101[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (26))){
var inst_30904 = (state_30972[(29)]);
var inst_30958 = (state_30972[(2)]);
var inst_30959 = cljs.core.seq.call(null,inst_30904);
var state_30972__$1 = (function (){var statearr_31037 = state_30972;
(statearr_31037[(31)] = inst_30958);

return statearr_31037;
})();
if(inst_30959){
var statearr_31038_31102 = state_30972__$1;
(statearr_31038_31102[(1)] = (42));

} else {
var statearr_31039_31103 = state_30972__$1;
(statearr_31039_31103[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (16))){
var inst_30873 = (state_30972[(7)]);
var inst_30875 = cljs.core.chunked_seq_QMARK_.call(null,inst_30873);
var state_30972__$1 = state_30972;
if(inst_30875){
var statearr_31040_31104 = state_30972__$1;
(statearr_31040_31104[(1)] = (19));

} else {
var statearr_31041_31105 = state_30972__$1;
(statearr_31041_31105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (38))){
var inst_30951 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31042_31106 = state_30972__$1;
(statearr_31042_31106[(2)] = inst_30951);

(statearr_31042_31106[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (30))){
var state_30972__$1 = state_30972;
var statearr_31043_31107 = state_30972__$1;
(statearr_31043_31107[(2)] = null);

(statearr_31043_31107[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (10))){
var inst_30856 = (state_30972[(16)]);
var inst_30854 = (state_30972[(17)]);
var inst_30862 = cljs.core._nth.call(null,inst_30854,inst_30856);
var inst_30863 = cljs.core.nth.call(null,inst_30862,(0),null);
var inst_30864 = cljs.core.nth.call(null,inst_30862,(1),null);
var state_30972__$1 = (function (){var statearr_31044 = state_30972;
(statearr_31044[(26)] = inst_30863);

return statearr_31044;
})();
if(cljs.core.truth_(inst_30864)){
var statearr_31045_31108 = state_30972__$1;
(statearr_31045_31108[(1)] = (13));

} else {
var statearr_31046_31109 = state_30972__$1;
(statearr_31046_31109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (18))){
var inst_30897 = (state_30972[(2)]);
var state_30972__$1 = state_30972;
var statearr_31047_31110 = state_30972__$1;
(statearr_31047_31110[(2)] = inst_30897);

(statearr_31047_31110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (42))){
var state_30972__$1 = state_30972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30972__$1,(45),dchan);
} else {
if((state_val_30973 === (37))){
var inst_30931 = (state_30972[(25)]);
var inst_30844 = (state_30972[(11)]);
var inst_30940 = (state_30972[(23)]);
var inst_30940__$1 = cljs.core.first.call(null,inst_30931);
var inst_30941 = cljs.core.async.put_BANG_.call(null,inst_30940__$1,inst_30844,done);
var state_30972__$1 = (function (){var statearr_31048 = state_30972;
(statearr_31048[(23)] = inst_30940__$1);

return statearr_31048;
})();
if(cljs.core.truth_(inst_30941)){
var statearr_31049_31111 = state_30972__$1;
(statearr_31049_31111[(1)] = (39));

} else {
var statearr_31050_31112 = state_30972__$1;
(statearr_31050_31112[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30973 === (8))){
var inst_30855 = (state_30972[(13)]);
var inst_30856 = (state_30972[(16)]);
var inst_30858 = (inst_30856 < inst_30855);
var inst_30859 = inst_30858;
var state_30972__$1 = state_30972;
if(cljs.core.truth_(inst_30859)){
var statearr_31051_31113 = state_30972__$1;
(statearr_31051_31113[(1)] = (10));

} else {
var statearr_31052_31114 = state_30972__$1;
(statearr_31052_31114[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__24054__auto___31060,cs,m,dchan,dctr,done))
;
return ((function (switch__23992__auto__,c__24054__auto___31060,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23993__auto__ = null;
var cljs$core$async$mult_$_state_machine__23993__auto____0 = (function (){
var statearr_31056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31056[(0)] = cljs$core$async$mult_$_state_machine__23993__auto__);

(statearr_31056[(1)] = (1));

return statearr_31056;
});
var cljs$core$async$mult_$_state_machine__23993__auto____1 = (function (state_30972){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_30972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31057){if((e31057 instanceof Object)){
var ex__23996__auto__ = e31057;
var statearr_31058_31115 = state_30972;
(statearr_31058_31115[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31116 = state_30972;
state_30972 = G__31116;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23993__auto__ = function(state_30972){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23993__auto____1.call(this,state_30972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23993__auto____0;
cljs$core$async$mult_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23993__auto____1;
return cljs$core$async$mult_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31060,cs,m,dchan,dctr,done))
})();
var state__24056__auto__ = (function (){var statearr_31059 = f__24055__auto__.call(null);
(statearr_31059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31060);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31060,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__31118 = arguments.length;
switch (G__31118) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31121 = {};
return obj31121;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__20671__auto__ = m;
if(and__20671__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21319__auto__ = (((m == null))?null:m);
return (function (){var or__20683__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__21723__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21723__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31126){
var map__31127 = p__31126;
var map__31127__$1 = ((cljs.core.seq_QMARK_.call(null,map__31127))?cljs.core.apply.call(null,cljs.core.hash_map,map__31127):map__31127);
var opts = map__31127__$1;
var statearr_31128_31131 = state;
(statearr_31128_31131[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31127,map__31127__$1,opts){
return (function (val){
var statearr_31129_31132 = state;
(statearr_31129_31132[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31127,map__31127__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31130_31133 = state;
(statearr_31130_31133[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31122){
var G__31123 = cljs.core.first.call(null,seq31122);
var seq31122__$1 = cljs.core.next.call(null,seq31122);
var G__31124 = cljs.core.first.call(null,seq31122__$1);
var seq31122__$2 = cljs.core.next.call(null,seq31122__$1);
var G__31125 = cljs.core.first.call(null,seq31122__$2);
var seq31122__$3 = cljs.core.next.call(null,seq31122__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31123,G__31124,G__31125,seq31122__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31253 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31253 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31254){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31254 = meta31254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31255,meta31254__$1){
var self__ = this;
var _31255__$1 = this;
return (new cljs.core.async.t31253(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31255){
var self__ = this;
var _31255__$1 = this;
return self__.meta31254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31254","meta31254",-1234641129,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31253.cljs$lang$type = true;

cljs.core.async.t31253.cljs$lang$ctorStr = "cljs.core.async/t31253";

cljs.core.async.t31253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t31253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31253(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31254){
return (new cljs.core.async.t31253(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31253(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24054__auto___31372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31325){
var state_val_31326 = (state_31325[(1)]);
if((state_val_31326 === (7))){
var inst_31269 = (state_31325[(7)]);
var inst_31274 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31269);
var state_31325__$1 = state_31325;
var statearr_31327_31373 = state_31325__$1;
(statearr_31327_31373[(2)] = inst_31274);

(statearr_31327_31373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (20))){
var inst_31284 = (state_31325[(8)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31325__$1,(23),out,inst_31284);
} else {
if((state_val_31326 === (1))){
var inst_31259 = (state_31325[(9)]);
var inst_31259__$1 = calc_state.call(null);
var inst_31260 = cljs.core.seq_QMARK_.call(null,inst_31259__$1);
var state_31325__$1 = (function (){var statearr_31328 = state_31325;
(statearr_31328[(9)] = inst_31259__$1);

return statearr_31328;
})();
if(inst_31260){
var statearr_31329_31374 = state_31325__$1;
(statearr_31329_31374[(1)] = (2));

} else {
var statearr_31330_31375 = state_31325__$1;
(statearr_31330_31375[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (24))){
var inst_31277 = (state_31325[(10)]);
var inst_31269 = inst_31277;
var state_31325__$1 = (function (){var statearr_31331 = state_31325;
(statearr_31331[(7)] = inst_31269);

return statearr_31331;
})();
var statearr_31332_31376 = state_31325__$1;
(statearr_31332_31376[(2)] = null);

(statearr_31332_31376[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (4))){
var inst_31259 = (state_31325[(9)]);
var inst_31265 = (state_31325[(2)]);
var inst_31266 = cljs.core.get.call(null,inst_31265,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31267 = cljs.core.get.call(null,inst_31265,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31268 = cljs.core.get.call(null,inst_31265,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31269 = inst_31259;
var state_31325__$1 = (function (){var statearr_31333 = state_31325;
(statearr_31333[(11)] = inst_31267);

(statearr_31333[(7)] = inst_31269);

(statearr_31333[(12)] = inst_31266);

(statearr_31333[(13)] = inst_31268);

return statearr_31333;
})();
var statearr_31334_31377 = state_31325__$1;
(statearr_31334_31377[(2)] = null);

(statearr_31334_31377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (15))){
var state_31325__$1 = state_31325;
var statearr_31335_31378 = state_31325__$1;
(statearr_31335_31378[(2)] = null);

(statearr_31335_31378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (21))){
var inst_31277 = (state_31325[(10)]);
var inst_31269 = inst_31277;
var state_31325__$1 = (function (){var statearr_31336 = state_31325;
(statearr_31336[(7)] = inst_31269);

return statearr_31336;
})();
var statearr_31337_31379 = state_31325__$1;
(statearr_31337_31379[(2)] = null);

(statearr_31337_31379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (13))){
var inst_31321 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31338_31380 = state_31325__$1;
(statearr_31338_31380[(2)] = inst_31321);

(statearr_31338_31380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (22))){
var inst_31319 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31339_31381 = state_31325__$1;
(statearr_31339_31381[(2)] = inst_31319);

(statearr_31339_31381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (6))){
var inst_31323 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31325__$1,inst_31323);
} else {
if((state_val_31326 === (25))){
var state_31325__$1 = state_31325;
var statearr_31340_31382 = state_31325__$1;
(statearr_31340_31382[(2)] = null);

(statearr_31340_31382[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (17))){
var inst_31299 = (state_31325[(14)]);
var state_31325__$1 = state_31325;
var statearr_31341_31383 = state_31325__$1;
(statearr_31341_31383[(2)] = inst_31299);

(statearr_31341_31383[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (3))){
var inst_31259 = (state_31325[(9)]);
var state_31325__$1 = state_31325;
var statearr_31342_31384 = state_31325__$1;
(statearr_31342_31384[(2)] = inst_31259);

(statearr_31342_31384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (12))){
var inst_31285 = (state_31325[(15)]);
var inst_31278 = (state_31325[(16)]);
var inst_31299 = (state_31325[(14)]);
var inst_31299__$1 = inst_31278.call(null,inst_31285);
var state_31325__$1 = (function (){var statearr_31343 = state_31325;
(statearr_31343[(14)] = inst_31299__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31299__$1)){
var statearr_31344_31385 = state_31325__$1;
(statearr_31344_31385[(1)] = (17));

} else {
var statearr_31345_31386 = state_31325__$1;
(statearr_31345_31386[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (2))){
var inst_31259 = (state_31325[(9)]);
var inst_31262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31259);
var state_31325__$1 = state_31325;
var statearr_31346_31387 = state_31325__$1;
(statearr_31346_31387[(2)] = inst_31262);

(statearr_31346_31387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (23))){
var inst_31310 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31310)){
var statearr_31347_31388 = state_31325__$1;
(statearr_31347_31388[(1)] = (24));

} else {
var statearr_31348_31389 = state_31325__$1;
(statearr_31348_31389[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (19))){
var inst_31307 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31307)){
var statearr_31349_31390 = state_31325__$1;
(statearr_31349_31390[(1)] = (20));

} else {
var statearr_31350_31391 = state_31325__$1;
(statearr_31350_31391[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (11))){
var inst_31284 = (state_31325[(8)]);
var inst_31290 = (inst_31284 == null);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31290)){
var statearr_31351_31392 = state_31325__$1;
(statearr_31351_31392[(1)] = (14));

} else {
var statearr_31352_31393 = state_31325__$1;
(statearr_31352_31393[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (9))){
var inst_31277 = (state_31325[(10)]);
var inst_31277__$1 = (state_31325[(2)]);
var inst_31278 = cljs.core.get.call(null,inst_31277__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31279 = cljs.core.get.call(null,inst_31277__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31280 = cljs.core.get.call(null,inst_31277__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31325__$1 = (function (){var statearr_31353 = state_31325;
(statearr_31353[(10)] = inst_31277__$1);

(statearr_31353[(17)] = inst_31279);

(statearr_31353[(16)] = inst_31278);

return statearr_31353;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31325__$1,(10),inst_31280);
} else {
if((state_val_31326 === (5))){
var inst_31269 = (state_31325[(7)]);
var inst_31272 = cljs.core.seq_QMARK_.call(null,inst_31269);
var state_31325__$1 = state_31325;
if(inst_31272){
var statearr_31354_31394 = state_31325__$1;
(statearr_31354_31394[(1)] = (7));

} else {
var statearr_31355_31395 = state_31325__$1;
(statearr_31355_31395[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (14))){
var inst_31285 = (state_31325[(15)]);
var inst_31292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31285);
var state_31325__$1 = state_31325;
var statearr_31356_31396 = state_31325__$1;
(statearr_31356_31396[(2)] = inst_31292);

(statearr_31356_31396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (26))){
var inst_31315 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31357_31397 = state_31325__$1;
(statearr_31357_31397[(2)] = inst_31315);

(statearr_31357_31397[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (16))){
var inst_31295 = (state_31325[(2)]);
var inst_31296 = calc_state.call(null);
var inst_31269 = inst_31296;
var state_31325__$1 = (function (){var statearr_31358 = state_31325;
(statearr_31358[(7)] = inst_31269);

(statearr_31358[(18)] = inst_31295);

return statearr_31358;
})();
var statearr_31359_31398 = state_31325__$1;
(statearr_31359_31398[(2)] = null);

(statearr_31359_31398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (10))){
var inst_31285 = (state_31325[(15)]);
var inst_31284 = (state_31325[(8)]);
var inst_31283 = (state_31325[(2)]);
var inst_31284__$1 = cljs.core.nth.call(null,inst_31283,(0),null);
var inst_31285__$1 = cljs.core.nth.call(null,inst_31283,(1),null);
var inst_31286 = (inst_31284__$1 == null);
var inst_31287 = cljs.core._EQ_.call(null,inst_31285__$1,change);
var inst_31288 = (inst_31286) || (inst_31287);
var state_31325__$1 = (function (){var statearr_31360 = state_31325;
(statearr_31360[(15)] = inst_31285__$1);

(statearr_31360[(8)] = inst_31284__$1);

return statearr_31360;
})();
if(cljs.core.truth_(inst_31288)){
var statearr_31361_31399 = state_31325__$1;
(statearr_31361_31399[(1)] = (11));

} else {
var statearr_31362_31400 = state_31325__$1;
(statearr_31362_31400[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (18))){
var inst_31285 = (state_31325[(15)]);
var inst_31279 = (state_31325[(17)]);
var inst_31278 = (state_31325[(16)]);
var inst_31302 = cljs.core.empty_QMARK_.call(null,inst_31278);
var inst_31303 = inst_31279.call(null,inst_31285);
var inst_31304 = cljs.core.not.call(null,inst_31303);
var inst_31305 = (inst_31302) && (inst_31304);
var state_31325__$1 = state_31325;
var statearr_31363_31401 = state_31325__$1;
(statearr_31363_31401[(2)] = inst_31305);

(statearr_31363_31401[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (8))){
var inst_31269 = (state_31325[(7)]);
var state_31325__$1 = state_31325;
var statearr_31364_31402 = state_31325__$1;
(statearr_31364_31402[(2)] = inst_31269);

(statearr_31364_31402[(1)] = (9));


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
});})(c__24054__auto___31372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23992__auto__,c__24054__auto___31372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23993__auto__ = null;
var cljs$core$async$mix_$_state_machine__23993__auto____0 = (function (){
var statearr_31368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31368[(0)] = cljs$core$async$mix_$_state_machine__23993__auto__);

(statearr_31368[(1)] = (1));

return statearr_31368;
});
var cljs$core$async$mix_$_state_machine__23993__auto____1 = (function (state_31325){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_31325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31369){if((e31369 instanceof Object)){
var ex__23996__auto__ = e31369;
var statearr_31370_31403 = state_31325;
(statearr_31370_31403[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31404 = state_31325;
state_31325 = G__31404;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23993__auto__ = function(state_31325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23993__auto____1.call(this,state_31325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23993__auto____0;
cljs$core$async$mix_$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23993__auto____1;
return cljs$core$async$mix_$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24056__auto__ = (function (){var statearr_31371 = f__24055__auto__.call(null);
(statearr_31371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31372);

return statearr_31371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31406 = {};
return obj31406;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__20671__auto__ = p;
if(and__20671__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__20671__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21319__auto__ = (((p == null))?null:p);
return (function (){var or__20683__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__20671__auto__ = p;
if(and__20671__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__20671__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21319__auto__ = (((p == null))?null:p);
return (function (){var or__20683__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__31408 = arguments.length;
switch (G__31408) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__20671__auto__ = p;
if(and__20671__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21319__auto__ = (((p == null))?null:p);
return (function (){var or__20683__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__20671__auto__ = p;
if(and__20671__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21319__auto__ = (((p == null))?null:p);
return (function (){var or__20683__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__31412 = arguments.length;
switch (G__31412) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20683__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20683__auto__)){
return or__20683__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20683__auto__,mults){
return (function (p1__31410_SHARP_){
if(cljs.core.truth_(p1__31410_SHARP_.call(null,topic))){
return p1__31410_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31410_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20683__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31413 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31413 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31414){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31414 = meta31414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31415,meta31414__$1){
var self__ = this;
var _31415__$1 = this;
return (new cljs.core.async.t31413(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31414__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31415){
var self__ = this;
var _31415__$1 = this;
return self__.meta31414;
});})(mults,ensure_mult))
;

cljs.core.async.t31413.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31413.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31413.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31413.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31413.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31413.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31413.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31414","meta31414",858955076,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t31413.cljs$lang$type = true;

cljs.core.async.t31413.cljs$lang$ctorStr = "cljs.core.async/t31413";

cljs.core.async.t31413.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t31413");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31413 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31413(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31414){
return (new cljs.core.async.t31413(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31414));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31413(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24054__auto___31536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31536,mults,ensure_mult,p){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31536,mults,ensure_mult,p){
return (function (state_31487){
var state_val_31488 = (state_31487[(1)]);
if((state_val_31488 === (7))){
var inst_31483 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31489_31537 = state_31487__$1;
(statearr_31489_31537[(2)] = inst_31483);

(statearr_31489_31537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (20))){
var state_31487__$1 = state_31487;
var statearr_31490_31538 = state_31487__$1;
(statearr_31490_31538[(2)] = null);

(statearr_31490_31538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (1))){
var state_31487__$1 = state_31487;
var statearr_31491_31539 = state_31487__$1;
(statearr_31491_31539[(2)] = null);

(statearr_31491_31539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (24))){
var inst_31466 = (state_31487[(7)]);
var inst_31475 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31466);
var state_31487__$1 = state_31487;
var statearr_31492_31540 = state_31487__$1;
(statearr_31492_31540[(2)] = inst_31475);

(statearr_31492_31540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (4))){
var inst_31418 = (state_31487[(8)]);
var inst_31418__$1 = (state_31487[(2)]);
var inst_31419 = (inst_31418__$1 == null);
var state_31487__$1 = (function (){var statearr_31493 = state_31487;
(statearr_31493[(8)] = inst_31418__$1);

return statearr_31493;
})();
if(cljs.core.truth_(inst_31419)){
var statearr_31494_31541 = state_31487__$1;
(statearr_31494_31541[(1)] = (5));

} else {
var statearr_31495_31542 = state_31487__$1;
(statearr_31495_31542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (15))){
var inst_31460 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31496_31543 = state_31487__$1;
(statearr_31496_31543[(2)] = inst_31460);

(statearr_31496_31543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (21))){
var inst_31480 = (state_31487[(2)]);
var state_31487__$1 = (function (){var statearr_31497 = state_31487;
(statearr_31497[(9)] = inst_31480);

return statearr_31497;
})();
var statearr_31498_31544 = state_31487__$1;
(statearr_31498_31544[(2)] = null);

(statearr_31498_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (13))){
var inst_31442 = (state_31487[(10)]);
var inst_31444 = cljs.core.chunked_seq_QMARK_.call(null,inst_31442);
var state_31487__$1 = state_31487;
if(inst_31444){
var statearr_31499_31545 = state_31487__$1;
(statearr_31499_31545[(1)] = (16));

} else {
var statearr_31500_31546 = state_31487__$1;
(statearr_31500_31546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (22))){
var inst_31472 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
if(cljs.core.truth_(inst_31472)){
var statearr_31501_31547 = state_31487__$1;
(statearr_31501_31547[(1)] = (23));

} else {
var statearr_31502_31548 = state_31487__$1;
(statearr_31502_31548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (6))){
var inst_31418 = (state_31487[(8)]);
var inst_31466 = (state_31487[(7)]);
var inst_31468 = (state_31487[(11)]);
var inst_31466__$1 = topic_fn.call(null,inst_31418);
var inst_31467 = cljs.core.deref.call(null,mults);
var inst_31468__$1 = cljs.core.get.call(null,inst_31467,inst_31466__$1);
var state_31487__$1 = (function (){var statearr_31503 = state_31487;
(statearr_31503[(7)] = inst_31466__$1);

(statearr_31503[(11)] = inst_31468__$1);

return statearr_31503;
})();
if(cljs.core.truth_(inst_31468__$1)){
var statearr_31504_31549 = state_31487__$1;
(statearr_31504_31549[(1)] = (19));

} else {
var statearr_31505_31550 = state_31487__$1;
(statearr_31505_31550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (25))){
var inst_31477 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31506_31551 = state_31487__$1;
(statearr_31506_31551[(2)] = inst_31477);

(statearr_31506_31551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (17))){
var inst_31442 = (state_31487[(10)]);
var inst_31451 = cljs.core.first.call(null,inst_31442);
var inst_31452 = cljs.core.async.muxch_STAR_.call(null,inst_31451);
var inst_31453 = cljs.core.async.close_BANG_.call(null,inst_31452);
var inst_31454 = cljs.core.next.call(null,inst_31442);
var inst_31428 = inst_31454;
var inst_31429 = null;
var inst_31430 = (0);
var inst_31431 = (0);
var state_31487__$1 = (function (){var statearr_31507 = state_31487;
(statearr_31507[(12)] = inst_31453);

(statearr_31507[(13)] = inst_31429);

(statearr_31507[(14)] = inst_31431);

(statearr_31507[(15)] = inst_31430);

(statearr_31507[(16)] = inst_31428);

return statearr_31507;
})();
var statearr_31508_31552 = state_31487__$1;
(statearr_31508_31552[(2)] = null);

(statearr_31508_31552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (3))){
var inst_31485 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31487__$1,inst_31485);
} else {
if((state_val_31488 === (12))){
var inst_31462 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31509_31553 = state_31487__$1;
(statearr_31509_31553[(2)] = inst_31462);

(statearr_31509_31553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (2))){
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(4),ch);
} else {
if((state_val_31488 === (23))){
var state_31487__$1 = state_31487;
var statearr_31510_31554 = state_31487__$1;
(statearr_31510_31554[(2)] = null);

(statearr_31510_31554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (19))){
var inst_31418 = (state_31487[(8)]);
var inst_31468 = (state_31487[(11)]);
var inst_31470 = cljs.core.async.muxch_STAR_.call(null,inst_31468);
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31487__$1,(22),inst_31470,inst_31418);
} else {
if((state_val_31488 === (11))){
var inst_31442 = (state_31487[(10)]);
var inst_31428 = (state_31487[(16)]);
var inst_31442__$1 = cljs.core.seq.call(null,inst_31428);
var state_31487__$1 = (function (){var statearr_31511 = state_31487;
(statearr_31511[(10)] = inst_31442__$1);

return statearr_31511;
})();
if(inst_31442__$1){
var statearr_31512_31555 = state_31487__$1;
(statearr_31512_31555[(1)] = (13));

} else {
var statearr_31513_31556 = state_31487__$1;
(statearr_31513_31556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (9))){
var inst_31464 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31514_31557 = state_31487__$1;
(statearr_31514_31557[(2)] = inst_31464);

(statearr_31514_31557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (5))){
var inst_31425 = cljs.core.deref.call(null,mults);
var inst_31426 = cljs.core.vals.call(null,inst_31425);
var inst_31427 = cljs.core.seq.call(null,inst_31426);
var inst_31428 = inst_31427;
var inst_31429 = null;
var inst_31430 = (0);
var inst_31431 = (0);
var state_31487__$1 = (function (){var statearr_31515 = state_31487;
(statearr_31515[(13)] = inst_31429);

(statearr_31515[(14)] = inst_31431);

(statearr_31515[(15)] = inst_31430);

(statearr_31515[(16)] = inst_31428);

return statearr_31515;
})();
var statearr_31516_31558 = state_31487__$1;
(statearr_31516_31558[(2)] = null);

(statearr_31516_31558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (14))){
var state_31487__$1 = state_31487;
var statearr_31520_31559 = state_31487__$1;
(statearr_31520_31559[(2)] = null);

(statearr_31520_31559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (16))){
var inst_31442 = (state_31487[(10)]);
var inst_31446 = cljs.core.chunk_first.call(null,inst_31442);
var inst_31447 = cljs.core.chunk_rest.call(null,inst_31442);
var inst_31448 = cljs.core.count.call(null,inst_31446);
var inst_31428 = inst_31447;
var inst_31429 = inst_31446;
var inst_31430 = inst_31448;
var inst_31431 = (0);
var state_31487__$1 = (function (){var statearr_31521 = state_31487;
(statearr_31521[(13)] = inst_31429);

(statearr_31521[(14)] = inst_31431);

(statearr_31521[(15)] = inst_31430);

(statearr_31521[(16)] = inst_31428);

return statearr_31521;
})();
var statearr_31522_31560 = state_31487__$1;
(statearr_31522_31560[(2)] = null);

(statearr_31522_31560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (10))){
var inst_31429 = (state_31487[(13)]);
var inst_31431 = (state_31487[(14)]);
var inst_31430 = (state_31487[(15)]);
var inst_31428 = (state_31487[(16)]);
var inst_31436 = cljs.core._nth.call(null,inst_31429,inst_31431);
var inst_31437 = cljs.core.async.muxch_STAR_.call(null,inst_31436);
var inst_31438 = cljs.core.async.close_BANG_.call(null,inst_31437);
var inst_31439 = (inst_31431 + (1));
var tmp31517 = inst_31429;
var tmp31518 = inst_31430;
var tmp31519 = inst_31428;
var inst_31428__$1 = tmp31519;
var inst_31429__$1 = tmp31517;
var inst_31430__$1 = tmp31518;
var inst_31431__$1 = inst_31439;
var state_31487__$1 = (function (){var statearr_31523 = state_31487;
(statearr_31523[(13)] = inst_31429__$1);

(statearr_31523[(14)] = inst_31431__$1);

(statearr_31523[(15)] = inst_31430__$1);

(statearr_31523[(16)] = inst_31428__$1);

(statearr_31523[(17)] = inst_31438);

return statearr_31523;
})();
var statearr_31524_31561 = state_31487__$1;
(statearr_31524_31561[(2)] = null);

(statearr_31524_31561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (18))){
var inst_31457 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31525_31562 = state_31487__$1;
(statearr_31525_31562[(2)] = inst_31457);

(statearr_31525_31562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (8))){
var inst_31431 = (state_31487[(14)]);
var inst_31430 = (state_31487[(15)]);
var inst_31433 = (inst_31431 < inst_31430);
var inst_31434 = inst_31433;
var state_31487__$1 = state_31487;
if(cljs.core.truth_(inst_31434)){
var statearr_31526_31563 = state_31487__$1;
(statearr_31526_31563[(1)] = (10));

} else {
var statearr_31527_31564 = state_31487__$1;
(statearr_31527_31564[(1)] = (11));

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
});})(c__24054__auto___31536,mults,ensure_mult,p))
;
return ((function (switch__23992__auto__,c__24054__auto___31536,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_31531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31531[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_31531[(1)] = (1));

return statearr_31531;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_31487){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_31487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31532){if((e31532 instanceof Object)){
var ex__23996__auto__ = e31532;
var statearr_31533_31565 = state_31487;
(statearr_31533_31565[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31566 = state_31487;
state_31487 = G__31566;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_31487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_31487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31536,mults,ensure_mult,p))
})();
var state__24056__auto__ = (function (){var statearr_31534 = f__24055__auto__.call(null);
(statearr_31534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31536);

return statearr_31534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31536,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__31568 = arguments.length;
switch (G__31568) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__31571 = arguments.length;
switch (G__31571) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__31574 = arguments.length;
switch (G__31574) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24054__auto___31644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31644,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31644,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31613){
var state_val_31614 = (state_31613[(1)]);
if((state_val_31614 === (7))){
var state_31613__$1 = state_31613;
var statearr_31615_31645 = state_31613__$1;
(statearr_31615_31645[(2)] = null);

(statearr_31615_31645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (1))){
var state_31613__$1 = state_31613;
var statearr_31616_31646 = state_31613__$1;
(statearr_31616_31646[(2)] = null);

(statearr_31616_31646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (4))){
var inst_31577 = (state_31613[(7)]);
var inst_31579 = (inst_31577 < cnt);
var state_31613__$1 = state_31613;
if(cljs.core.truth_(inst_31579)){
var statearr_31617_31647 = state_31613__$1;
(statearr_31617_31647[(1)] = (6));

} else {
var statearr_31618_31648 = state_31613__$1;
(statearr_31618_31648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (15))){
var inst_31609 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31619_31649 = state_31613__$1;
(statearr_31619_31649[(2)] = inst_31609);

(statearr_31619_31649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (13))){
var inst_31602 = cljs.core.async.close_BANG_.call(null,out);
var state_31613__$1 = state_31613;
var statearr_31620_31650 = state_31613__$1;
(statearr_31620_31650[(2)] = inst_31602);

(statearr_31620_31650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (6))){
var state_31613__$1 = state_31613;
var statearr_31621_31651 = state_31613__$1;
(statearr_31621_31651[(2)] = null);

(statearr_31621_31651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (3))){
var inst_31611 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31613__$1,inst_31611);
} else {
if((state_val_31614 === (12))){
var inst_31599 = (state_31613[(8)]);
var inst_31599__$1 = (state_31613[(2)]);
var inst_31600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31599__$1);
var state_31613__$1 = (function (){var statearr_31622 = state_31613;
(statearr_31622[(8)] = inst_31599__$1);

return statearr_31622;
})();
if(cljs.core.truth_(inst_31600)){
var statearr_31623_31652 = state_31613__$1;
(statearr_31623_31652[(1)] = (13));

} else {
var statearr_31624_31653 = state_31613__$1;
(statearr_31624_31653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (2))){
var inst_31576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31577 = (0);
var state_31613__$1 = (function (){var statearr_31625 = state_31613;
(statearr_31625[(9)] = inst_31576);

(statearr_31625[(7)] = inst_31577);

return statearr_31625;
})();
var statearr_31626_31654 = state_31613__$1;
(statearr_31626_31654[(2)] = null);

(statearr_31626_31654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (11))){
var inst_31577 = (state_31613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31613,(10),Object,null,(9));
var inst_31586 = chs__$1.call(null,inst_31577);
var inst_31587 = done.call(null,inst_31577);
var inst_31588 = cljs.core.async.take_BANG_.call(null,inst_31586,inst_31587);
var state_31613__$1 = state_31613;
var statearr_31627_31655 = state_31613__$1;
(statearr_31627_31655[(2)] = inst_31588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (9))){
var inst_31577 = (state_31613[(7)]);
var inst_31590 = (state_31613[(2)]);
var inst_31591 = (inst_31577 + (1));
var inst_31577__$1 = inst_31591;
var state_31613__$1 = (function (){var statearr_31628 = state_31613;
(statearr_31628[(7)] = inst_31577__$1);

(statearr_31628[(10)] = inst_31590);

return statearr_31628;
})();
var statearr_31629_31656 = state_31613__$1;
(statearr_31629_31656[(2)] = null);

(statearr_31629_31656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (5))){
var inst_31597 = (state_31613[(2)]);
var state_31613__$1 = (function (){var statearr_31630 = state_31613;
(statearr_31630[(11)] = inst_31597);

return statearr_31630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31613__$1,(12),dchan);
} else {
if((state_val_31614 === (14))){
var inst_31599 = (state_31613[(8)]);
var inst_31604 = cljs.core.apply.call(null,f,inst_31599);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31613__$1,(16),out,inst_31604);
} else {
if((state_val_31614 === (16))){
var inst_31606 = (state_31613[(2)]);
var state_31613__$1 = (function (){var statearr_31631 = state_31613;
(statearr_31631[(12)] = inst_31606);

return statearr_31631;
})();
var statearr_31632_31657 = state_31613__$1;
(statearr_31632_31657[(2)] = null);

(statearr_31632_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (10))){
var inst_31581 = (state_31613[(2)]);
var inst_31582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31613__$1 = (function (){var statearr_31633 = state_31613;
(statearr_31633[(13)] = inst_31581);

return statearr_31633;
})();
var statearr_31634_31658 = state_31613__$1;
(statearr_31634_31658[(2)] = inst_31582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (8))){
var inst_31595 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31635_31659 = state_31613__$1;
(statearr_31635_31659[(2)] = inst_31595);

(statearr_31635_31659[(1)] = (5));


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
});})(c__24054__auto___31644,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23992__auto__,c__24054__auto___31644,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_31639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31639[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_31639[(1)] = (1));

return statearr_31639;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_31613){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_31613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31640){if((e31640 instanceof Object)){
var ex__23996__auto__ = e31640;
var statearr_31641_31660 = state_31613;
(statearr_31641_31660[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31661 = state_31613;
state_31613 = G__31661;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_31613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_31613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31644,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24056__auto__ = (function (){var statearr_31642 = f__24055__auto__.call(null);
(statearr_31642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31644);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31644,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__31664 = arguments.length;
switch (G__31664) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24054__auto___31719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31719,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31719,out){
return (function (state_31694){
var state_val_31695 = (state_31694[(1)]);
if((state_val_31695 === (7))){
var inst_31674 = (state_31694[(7)]);
var inst_31673 = (state_31694[(8)]);
var inst_31673__$1 = (state_31694[(2)]);
var inst_31674__$1 = cljs.core.nth.call(null,inst_31673__$1,(0),null);
var inst_31675 = cljs.core.nth.call(null,inst_31673__$1,(1),null);
var inst_31676 = (inst_31674__$1 == null);
var state_31694__$1 = (function (){var statearr_31696 = state_31694;
(statearr_31696[(7)] = inst_31674__$1);

(statearr_31696[(9)] = inst_31675);

(statearr_31696[(8)] = inst_31673__$1);

return statearr_31696;
})();
if(cljs.core.truth_(inst_31676)){
var statearr_31697_31720 = state_31694__$1;
(statearr_31697_31720[(1)] = (8));

} else {
var statearr_31698_31721 = state_31694__$1;
(statearr_31698_31721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (1))){
var inst_31665 = cljs.core.vec.call(null,chs);
var inst_31666 = inst_31665;
var state_31694__$1 = (function (){var statearr_31699 = state_31694;
(statearr_31699[(10)] = inst_31666);

return statearr_31699;
})();
var statearr_31700_31722 = state_31694__$1;
(statearr_31700_31722[(2)] = null);

(statearr_31700_31722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (4))){
var inst_31666 = (state_31694[(10)]);
var state_31694__$1 = state_31694;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31694__$1,(7),inst_31666);
} else {
if((state_val_31695 === (6))){
var inst_31690 = (state_31694[(2)]);
var state_31694__$1 = state_31694;
var statearr_31701_31723 = state_31694__$1;
(statearr_31701_31723[(2)] = inst_31690);

(statearr_31701_31723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (3))){
var inst_31692 = (state_31694[(2)]);
var state_31694__$1 = state_31694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31694__$1,inst_31692);
} else {
if((state_val_31695 === (2))){
var inst_31666 = (state_31694[(10)]);
var inst_31668 = cljs.core.count.call(null,inst_31666);
var inst_31669 = (inst_31668 > (0));
var state_31694__$1 = state_31694;
if(cljs.core.truth_(inst_31669)){
var statearr_31703_31724 = state_31694__$1;
(statearr_31703_31724[(1)] = (4));

} else {
var statearr_31704_31725 = state_31694__$1;
(statearr_31704_31725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (11))){
var inst_31666 = (state_31694[(10)]);
var inst_31683 = (state_31694[(2)]);
var tmp31702 = inst_31666;
var inst_31666__$1 = tmp31702;
var state_31694__$1 = (function (){var statearr_31705 = state_31694;
(statearr_31705[(10)] = inst_31666__$1);

(statearr_31705[(11)] = inst_31683);

return statearr_31705;
})();
var statearr_31706_31726 = state_31694__$1;
(statearr_31706_31726[(2)] = null);

(statearr_31706_31726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (9))){
var inst_31674 = (state_31694[(7)]);
var state_31694__$1 = state_31694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31694__$1,(11),out,inst_31674);
} else {
if((state_val_31695 === (5))){
var inst_31688 = cljs.core.async.close_BANG_.call(null,out);
var state_31694__$1 = state_31694;
var statearr_31707_31727 = state_31694__$1;
(statearr_31707_31727[(2)] = inst_31688);

(statearr_31707_31727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (10))){
var inst_31686 = (state_31694[(2)]);
var state_31694__$1 = state_31694;
var statearr_31708_31728 = state_31694__$1;
(statearr_31708_31728[(2)] = inst_31686);

(statearr_31708_31728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31695 === (8))){
var inst_31674 = (state_31694[(7)]);
var inst_31666 = (state_31694[(10)]);
var inst_31675 = (state_31694[(9)]);
var inst_31673 = (state_31694[(8)]);
var inst_31678 = (function (){var cs = inst_31666;
var vec__31671 = inst_31673;
var v = inst_31674;
var c = inst_31675;
return ((function (cs,vec__31671,v,c,inst_31674,inst_31666,inst_31675,inst_31673,state_val_31695,c__24054__auto___31719,out){
return (function (p1__31662_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31662_SHARP_);
});
;})(cs,vec__31671,v,c,inst_31674,inst_31666,inst_31675,inst_31673,state_val_31695,c__24054__auto___31719,out))
})();
var inst_31679 = cljs.core.filterv.call(null,inst_31678,inst_31666);
var inst_31666__$1 = inst_31679;
var state_31694__$1 = (function (){var statearr_31709 = state_31694;
(statearr_31709[(10)] = inst_31666__$1);

return statearr_31709;
})();
var statearr_31710_31729 = state_31694__$1;
(statearr_31710_31729[(2)] = null);

(statearr_31710_31729[(1)] = (2));


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
});})(c__24054__auto___31719,out))
;
return ((function (switch__23992__auto__,c__24054__auto___31719,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_31714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31714[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_31714[(1)] = (1));

return statearr_31714;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_31694){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_31694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31715){if((e31715 instanceof Object)){
var ex__23996__auto__ = e31715;
var statearr_31716_31730 = state_31694;
(statearr_31716_31730[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31731 = state_31694;
state_31694 = G__31731;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_31694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_31694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31719,out))
})();
var state__24056__auto__ = (function (){var statearr_31717 = f__24055__auto__.call(null);
(statearr_31717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31719);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31719,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__31733 = arguments.length;
switch (G__31733) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24054__auto___31781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31781,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31781,out){
return (function (state_31757){
var state_val_31758 = (state_31757[(1)]);
if((state_val_31758 === (7))){
var inst_31739 = (state_31757[(7)]);
var inst_31739__$1 = (state_31757[(2)]);
var inst_31740 = (inst_31739__$1 == null);
var inst_31741 = cljs.core.not.call(null,inst_31740);
var state_31757__$1 = (function (){var statearr_31759 = state_31757;
(statearr_31759[(7)] = inst_31739__$1);

return statearr_31759;
})();
if(inst_31741){
var statearr_31760_31782 = state_31757__$1;
(statearr_31760_31782[(1)] = (8));

} else {
var statearr_31761_31783 = state_31757__$1;
(statearr_31761_31783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (1))){
var inst_31734 = (0);
var state_31757__$1 = (function (){var statearr_31762 = state_31757;
(statearr_31762[(8)] = inst_31734);

return statearr_31762;
})();
var statearr_31763_31784 = state_31757__$1;
(statearr_31763_31784[(2)] = null);

(statearr_31763_31784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (4))){
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,(7),ch);
} else {
if((state_val_31758 === (6))){
var inst_31752 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31764_31785 = state_31757__$1;
(statearr_31764_31785[(2)] = inst_31752);

(statearr_31764_31785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (3))){
var inst_31754 = (state_31757[(2)]);
var inst_31755 = cljs.core.async.close_BANG_.call(null,out);
var state_31757__$1 = (function (){var statearr_31765 = state_31757;
(statearr_31765[(9)] = inst_31754);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31757__$1,inst_31755);
} else {
if((state_val_31758 === (2))){
var inst_31734 = (state_31757[(8)]);
var inst_31736 = (inst_31734 < n);
var state_31757__$1 = state_31757;
if(cljs.core.truth_(inst_31736)){
var statearr_31766_31786 = state_31757__$1;
(statearr_31766_31786[(1)] = (4));

} else {
var statearr_31767_31787 = state_31757__$1;
(statearr_31767_31787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (11))){
var inst_31734 = (state_31757[(8)]);
var inst_31744 = (state_31757[(2)]);
var inst_31745 = (inst_31734 + (1));
var inst_31734__$1 = inst_31745;
var state_31757__$1 = (function (){var statearr_31768 = state_31757;
(statearr_31768[(8)] = inst_31734__$1);

(statearr_31768[(10)] = inst_31744);

return statearr_31768;
})();
var statearr_31769_31788 = state_31757__$1;
(statearr_31769_31788[(2)] = null);

(statearr_31769_31788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (9))){
var state_31757__$1 = state_31757;
var statearr_31770_31789 = state_31757__$1;
(statearr_31770_31789[(2)] = null);

(statearr_31770_31789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (5))){
var state_31757__$1 = state_31757;
var statearr_31771_31790 = state_31757__$1;
(statearr_31771_31790[(2)] = null);

(statearr_31771_31790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (10))){
var inst_31749 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31772_31791 = state_31757__$1;
(statearr_31772_31791[(2)] = inst_31749);

(statearr_31772_31791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (8))){
var inst_31739 = (state_31757[(7)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31757__$1,(11),out,inst_31739);
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
});})(c__24054__auto___31781,out))
;
return ((function (switch__23992__auto__,c__24054__auto___31781,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_31776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31776[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_31776[(1)] = (1));

return statearr_31776;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_31757){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_31757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31777){if((e31777 instanceof Object)){
var ex__23996__auto__ = e31777;
var statearr_31778_31792 = state_31757;
(statearr_31778_31792[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31793 = state_31757;
state_31757 = G__31793;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_31757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_31757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31781,out))
})();
var state__24056__auto__ = (function (){var statearr_31779 = f__24055__auto__.call(null);
(statearr_31779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31781);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31781,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31801 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31801 = (function (map_LT_,f,ch,meta31802){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31802 = meta31802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31803,meta31802__$1){
var self__ = this;
var _31803__$1 = this;
return (new cljs.core.async.t31801(self__.map_LT_,self__.f,self__.ch,meta31802__$1));
});

cljs.core.async.t31801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31803){
var self__ = this;
var _31803__$1 = this;
return self__.meta31802;
});

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31804 = (function (map_LT_,f,ch,meta31802,_,fn1,meta31805){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31802 = meta31802;
this._ = _;
this.fn1 = fn1;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31806,meta31805__$1){
var self__ = this;
var _31806__$1 = this;
return (new cljs.core.async.t31804(self__.map_LT_,self__.f,self__.ch,self__.meta31802,self__._,self__.fn1,meta31805__$1));
});})(___$1))
;

cljs.core.async.t31804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31806){
var self__ = this;
var _31806__$1 = this;
return self__.meta31805;
});})(___$1))
;

cljs.core.async.t31804.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31794_SHARP_){
return f1.call(null,(((p1__31794_SHARP_ == null))?null:self__.f.call(null,p1__31794_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31804.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31802","meta31802",720633452,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31805","meta31805",1431765966,null)], null);
});})(___$1))
;

cljs.core.async.t31804.cljs$lang$type = true;

cljs.core.async.t31804.cljs$lang$ctorStr = "cljs.core.async/t31804";

cljs.core.async.t31804.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t31804");
});})(___$1))
;

cljs.core.async.__GT_t31804 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31804(map_LT___$1,f__$1,ch__$1,meta31802__$1,___$2,fn1__$1,meta31805){
return (new cljs.core.async.t31804(map_LT___$1,f__$1,ch__$1,meta31802__$1,___$2,fn1__$1,meta31805));
});})(___$1))
;

}

return (new cljs.core.async.t31804(self__.map_LT_,self__.f,self__.ch,self__.meta31802,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20671__auto__ = ret;
if(cljs.core.truth_(and__20671__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20671__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31802","meta31802",720633452,null)], null);
});

cljs.core.async.t31801.cljs$lang$type = true;

cljs.core.async.t31801.cljs$lang$ctorStr = "cljs.core.async/t31801";

cljs.core.async.t31801.cljs$lang$ctorPrWriter = (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t31801");
});

cljs.core.async.__GT_t31801 = (function cljs$core$async$map_LT__$___GT_t31801(map_LT___$1,f__$1,ch__$1,meta31802){
return (new cljs.core.async.t31801(map_LT___$1,f__$1,ch__$1,meta31802));
});

}

return (new cljs.core.async.t31801(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31810 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31810 = (function (map_GT_,f,ch,meta31811){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31811 = meta31811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31812,meta31811__$1){
var self__ = this;
var _31812__$1 = this;
return (new cljs.core.async.t31810(self__.map_GT_,self__.f,self__.ch,meta31811__$1));
});

cljs.core.async.t31810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31812){
var self__ = this;
var _31812__$1 = this;
return self__.meta31811;
});

cljs.core.async.t31810.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31810.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31810.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31811","meta31811",1375890474,null)], null);
});

cljs.core.async.t31810.cljs$lang$type = true;

cljs.core.async.t31810.cljs$lang$ctorStr = "cljs.core.async/t31810";

cljs.core.async.t31810.cljs$lang$ctorPrWriter = (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t31810");
});

cljs.core.async.__GT_t31810 = (function cljs$core$async$map_GT__$___GT_t31810(map_GT___$1,f__$1,ch__$1,meta31811){
return (new cljs.core.async.t31810(map_GT___$1,f__$1,ch__$1,meta31811));
});

}

return (new cljs.core.async.t31810(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31816 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31816 = (function (filter_GT_,p,ch,meta31817){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31817 = meta31817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31818,meta31817__$1){
var self__ = this;
var _31818__$1 = this;
return (new cljs.core.async.t31816(self__.filter_GT_,self__.p,self__.ch,meta31817__$1));
});

cljs.core.async.t31816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31818){
var self__ = this;
var _31818__$1 = this;
return self__.meta31817;
});

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31817","meta31817",1977480806,null)], null);
});

cljs.core.async.t31816.cljs$lang$type = true;

cljs.core.async.t31816.cljs$lang$ctorStr = "cljs.core.async/t31816";

cljs.core.async.t31816.cljs$lang$ctorPrWriter = (function (this__21262__auto__,writer__21263__auto__,opt__21264__auto__){
return cljs.core._write.call(null,writer__21263__auto__,"cljs.core.async/t31816");
});

cljs.core.async.__GT_t31816 = (function cljs$core$async$filter_GT__$___GT_t31816(filter_GT___$1,p__$1,ch__$1,meta31817){
return (new cljs.core.async.t31816(filter_GT___$1,p__$1,ch__$1,meta31817));
});

}

return (new cljs.core.async.t31816(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__31820 = arguments.length;
switch (G__31820) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24054__auto___31863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___31863,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___31863,out){
return (function (state_31841){
var state_val_31842 = (state_31841[(1)]);
if((state_val_31842 === (7))){
var inst_31837 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
var statearr_31843_31864 = state_31841__$1;
(statearr_31843_31864[(2)] = inst_31837);

(statearr_31843_31864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (1))){
var state_31841__$1 = state_31841;
var statearr_31844_31865 = state_31841__$1;
(statearr_31844_31865[(2)] = null);

(statearr_31844_31865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (4))){
var inst_31823 = (state_31841[(7)]);
var inst_31823__$1 = (state_31841[(2)]);
var inst_31824 = (inst_31823__$1 == null);
var state_31841__$1 = (function (){var statearr_31845 = state_31841;
(statearr_31845[(7)] = inst_31823__$1);

return statearr_31845;
})();
if(cljs.core.truth_(inst_31824)){
var statearr_31846_31866 = state_31841__$1;
(statearr_31846_31866[(1)] = (5));

} else {
var statearr_31847_31867 = state_31841__$1;
(statearr_31847_31867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (6))){
var inst_31823 = (state_31841[(7)]);
var inst_31828 = p.call(null,inst_31823);
var state_31841__$1 = state_31841;
if(cljs.core.truth_(inst_31828)){
var statearr_31848_31868 = state_31841__$1;
(statearr_31848_31868[(1)] = (8));

} else {
var statearr_31849_31869 = state_31841__$1;
(statearr_31849_31869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (3))){
var inst_31839 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31841__$1,inst_31839);
} else {
if((state_val_31842 === (2))){
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31841__$1,(4),ch);
} else {
if((state_val_31842 === (11))){
var inst_31831 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
var statearr_31850_31870 = state_31841__$1;
(statearr_31850_31870[(2)] = inst_31831);

(statearr_31850_31870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (9))){
var state_31841__$1 = state_31841;
var statearr_31851_31871 = state_31841__$1;
(statearr_31851_31871[(2)] = null);

(statearr_31851_31871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (5))){
var inst_31826 = cljs.core.async.close_BANG_.call(null,out);
var state_31841__$1 = state_31841;
var statearr_31852_31872 = state_31841__$1;
(statearr_31852_31872[(2)] = inst_31826);

(statearr_31852_31872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (10))){
var inst_31834 = (state_31841[(2)]);
var state_31841__$1 = (function (){var statearr_31853 = state_31841;
(statearr_31853[(8)] = inst_31834);

return statearr_31853;
})();
var statearr_31854_31873 = state_31841__$1;
(statearr_31854_31873[(2)] = null);

(statearr_31854_31873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (8))){
var inst_31823 = (state_31841[(7)]);
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31841__$1,(11),out,inst_31823);
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
});})(c__24054__auto___31863,out))
;
return ((function (switch__23992__auto__,c__24054__auto___31863,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_31858 = [null,null,null,null,null,null,null,null,null];
(statearr_31858[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_31858[(1)] = (1));

return statearr_31858;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_31841){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_31841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e31859){if((e31859 instanceof Object)){
var ex__23996__auto__ = e31859;
var statearr_31860_31874 = state_31841;
(statearr_31860_31874[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31875 = state_31841;
state_31841 = G__31875;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_31841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_31841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___31863,out))
})();
var state__24056__auto__ = (function (){var statearr_31861 = f__24055__auto__.call(null);
(statearr_31861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___31863);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___31863,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__31877 = arguments.length;
switch (G__31877) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto__){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto__){
return (function (state_32044){
var state_val_32045 = (state_32044[(1)]);
if((state_val_32045 === (7))){
var inst_32040 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32046_32087 = state_32044__$1;
(statearr_32046_32087[(2)] = inst_32040);

(statearr_32046_32087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (20))){
var inst_32010 = (state_32044[(7)]);
var inst_32021 = (state_32044[(2)]);
var inst_32022 = cljs.core.next.call(null,inst_32010);
var inst_31996 = inst_32022;
var inst_31997 = null;
var inst_31998 = (0);
var inst_31999 = (0);
var state_32044__$1 = (function (){var statearr_32047 = state_32044;
(statearr_32047[(8)] = inst_31997);

(statearr_32047[(9)] = inst_31999);

(statearr_32047[(10)] = inst_31996);

(statearr_32047[(11)] = inst_32021);

(statearr_32047[(12)] = inst_31998);

return statearr_32047;
})();
var statearr_32048_32088 = state_32044__$1;
(statearr_32048_32088[(2)] = null);

(statearr_32048_32088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (1))){
var state_32044__$1 = state_32044;
var statearr_32049_32089 = state_32044__$1;
(statearr_32049_32089[(2)] = null);

(statearr_32049_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (4))){
var inst_31985 = (state_32044[(13)]);
var inst_31985__$1 = (state_32044[(2)]);
var inst_31986 = (inst_31985__$1 == null);
var state_32044__$1 = (function (){var statearr_32050 = state_32044;
(statearr_32050[(13)] = inst_31985__$1);

return statearr_32050;
})();
if(cljs.core.truth_(inst_31986)){
var statearr_32051_32090 = state_32044__$1;
(statearr_32051_32090[(1)] = (5));

} else {
var statearr_32052_32091 = state_32044__$1;
(statearr_32052_32091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (15))){
var state_32044__$1 = state_32044;
var statearr_32056_32092 = state_32044__$1;
(statearr_32056_32092[(2)] = null);

(statearr_32056_32092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (21))){
var state_32044__$1 = state_32044;
var statearr_32057_32093 = state_32044__$1;
(statearr_32057_32093[(2)] = null);

(statearr_32057_32093[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (13))){
var inst_31997 = (state_32044[(8)]);
var inst_31999 = (state_32044[(9)]);
var inst_31996 = (state_32044[(10)]);
var inst_31998 = (state_32044[(12)]);
var inst_32006 = (state_32044[(2)]);
var inst_32007 = (inst_31999 + (1));
var tmp32053 = inst_31997;
var tmp32054 = inst_31996;
var tmp32055 = inst_31998;
var inst_31996__$1 = tmp32054;
var inst_31997__$1 = tmp32053;
var inst_31998__$1 = tmp32055;
var inst_31999__$1 = inst_32007;
var state_32044__$1 = (function (){var statearr_32058 = state_32044;
(statearr_32058[(8)] = inst_31997__$1);

(statearr_32058[(9)] = inst_31999__$1);

(statearr_32058[(10)] = inst_31996__$1);

(statearr_32058[(14)] = inst_32006);

(statearr_32058[(12)] = inst_31998__$1);

return statearr_32058;
})();
var statearr_32059_32094 = state_32044__$1;
(statearr_32059_32094[(2)] = null);

(statearr_32059_32094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (22))){
var state_32044__$1 = state_32044;
var statearr_32060_32095 = state_32044__$1;
(statearr_32060_32095[(2)] = null);

(statearr_32060_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (6))){
var inst_31985 = (state_32044[(13)]);
var inst_31994 = f.call(null,inst_31985);
var inst_31995 = cljs.core.seq.call(null,inst_31994);
var inst_31996 = inst_31995;
var inst_31997 = null;
var inst_31998 = (0);
var inst_31999 = (0);
var state_32044__$1 = (function (){var statearr_32061 = state_32044;
(statearr_32061[(8)] = inst_31997);

(statearr_32061[(9)] = inst_31999);

(statearr_32061[(10)] = inst_31996);

(statearr_32061[(12)] = inst_31998);

return statearr_32061;
})();
var statearr_32062_32096 = state_32044__$1;
(statearr_32062_32096[(2)] = null);

(statearr_32062_32096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (17))){
var inst_32010 = (state_32044[(7)]);
var inst_32014 = cljs.core.chunk_first.call(null,inst_32010);
var inst_32015 = cljs.core.chunk_rest.call(null,inst_32010);
var inst_32016 = cljs.core.count.call(null,inst_32014);
var inst_31996 = inst_32015;
var inst_31997 = inst_32014;
var inst_31998 = inst_32016;
var inst_31999 = (0);
var state_32044__$1 = (function (){var statearr_32063 = state_32044;
(statearr_32063[(8)] = inst_31997);

(statearr_32063[(9)] = inst_31999);

(statearr_32063[(10)] = inst_31996);

(statearr_32063[(12)] = inst_31998);

return statearr_32063;
})();
var statearr_32064_32097 = state_32044__$1;
(statearr_32064_32097[(2)] = null);

(statearr_32064_32097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (3))){
var inst_32042 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32044__$1,inst_32042);
} else {
if((state_val_32045 === (12))){
var inst_32030 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32065_32098 = state_32044__$1;
(statearr_32065_32098[(2)] = inst_32030);

(statearr_32065_32098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (2))){
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32044__$1,(4),in$);
} else {
if((state_val_32045 === (23))){
var inst_32038 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32066_32099 = state_32044__$1;
(statearr_32066_32099[(2)] = inst_32038);

(statearr_32066_32099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (19))){
var inst_32025 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32067_32100 = state_32044__$1;
(statearr_32067_32100[(2)] = inst_32025);

(statearr_32067_32100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (11))){
var inst_31996 = (state_32044[(10)]);
var inst_32010 = (state_32044[(7)]);
var inst_32010__$1 = cljs.core.seq.call(null,inst_31996);
var state_32044__$1 = (function (){var statearr_32068 = state_32044;
(statearr_32068[(7)] = inst_32010__$1);

return statearr_32068;
})();
if(inst_32010__$1){
var statearr_32069_32101 = state_32044__$1;
(statearr_32069_32101[(1)] = (14));

} else {
var statearr_32070_32102 = state_32044__$1;
(statearr_32070_32102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (9))){
var inst_32032 = (state_32044[(2)]);
var inst_32033 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32044__$1 = (function (){var statearr_32071 = state_32044;
(statearr_32071[(15)] = inst_32032);

return statearr_32071;
})();
if(cljs.core.truth_(inst_32033)){
var statearr_32072_32103 = state_32044__$1;
(statearr_32072_32103[(1)] = (21));

} else {
var statearr_32073_32104 = state_32044__$1;
(statearr_32073_32104[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (5))){
var inst_31988 = cljs.core.async.close_BANG_.call(null,out);
var state_32044__$1 = state_32044;
var statearr_32074_32105 = state_32044__$1;
(statearr_32074_32105[(2)] = inst_31988);

(statearr_32074_32105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (14))){
var inst_32010 = (state_32044[(7)]);
var inst_32012 = cljs.core.chunked_seq_QMARK_.call(null,inst_32010);
var state_32044__$1 = state_32044;
if(inst_32012){
var statearr_32075_32106 = state_32044__$1;
(statearr_32075_32106[(1)] = (17));

} else {
var statearr_32076_32107 = state_32044__$1;
(statearr_32076_32107[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (16))){
var inst_32028 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32077_32108 = state_32044__$1;
(statearr_32077_32108[(2)] = inst_32028);

(statearr_32077_32108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (10))){
var inst_31997 = (state_32044[(8)]);
var inst_31999 = (state_32044[(9)]);
var inst_32004 = cljs.core._nth.call(null,inst_31997,inst_31999);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32044__$1,(13),out,inst_32004);
} else {
if((state_val_32045 === (18))){
var inst_32010 = (state_32044[(7)]);
var inst_32019 = cljs.core.first.call(null,inst_32010);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32044__$1,(20),out,inst_32019);
} else {
if((state_val_32045 === (8))){
var inst_31999 = (state_32044[(9)]);
var inst_31998 = (state_32044[(12)]);
var inst_32001 = (inst_31999 < inst_31998);
var inst_32002 = inst_32001;
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_32002)){
var statearr_32078_32109 = state_32044__$1;
(statearr_32078_32109[(1)] = (10));

} else {
var statearr_32079_32110 = state_32044__$1;
(statearr_32079_32110[(1)] = (11));

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
});})(c__24054__auto__))
;
return ((function (switch__23992__auto__,c__24054__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____0 = (function (){
var statearr_32083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32083[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__);

(statearr_32083[(1)] = (1));

return statearr_32083;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____1 = (function (state_32044){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_32044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e32084){if((e32084 instanceof Object)){
var ex__23996__auto__ = e32084;
var statearr_32085_32111 = state_32044;
(statearr_32085_32111[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_32044;
state_32044 = G__32112;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23993__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto__))
})();
var state__24056__auto__ = (function (){var statearr_32086 = f__24055__auto__.call(null);
(statearr_32086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto__);

return statearr_32086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto__))
);

return c__24054__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__32114 = arguments.length;
switch (G__32114) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__32117 = arguments.length;
switch (G__32117) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__32120 = arguments.length;
switch (G__32120) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24054__auto___32170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___32170,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___32170,out){
return (function (state_32144){
var state_val_32145 = (state_32144[(1)]);
if((state_val_32145 === (7))){
var inst_32139 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32146_32171 = state_32144__$1;
(statearr_32146_32171[(2)] = inst_32139);

(statearr_32146_32171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (1))){
var inst_32121 = null;
var state_32144__$1 = (function (){var statearr_32147 = state_32144;
(statearr_32147[(7)] = inst_32121);

return statearr_32147;
})();
var statearr_32148_32172 = state_32144__$1;
(statearr_32148_32172[(2)] = null);

(statearr_32148_32172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (4))){
var inst_32124 = (state_32144[(8)]);
var inst_32124__$1 = (state_32144[(2)]);
var inst_32125 = (inst_32124__$1 == null);
var inst_32126 = cljs.core.not.call(null,inst_32125);
var state_32144__$1 = (function (){var statearr_32149 = state_32144;
(statearr_32149[(8)] = inst_32124__$1);

return statearr_32149;
})();
if(inst_32126){
var statearr_32150_32173 = state_32144__$1;
(statearr_32150_32173[(1)] = (5));

} else {
var statearr_32151_32174 = state_32144__$1;
(statearr_32151_32174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (6))){
var state_32144__$1 = state_32144;
var statearr_32152_32175 = state_32144__$1;
(statearr_32152_32175[(2)] = null);

(statearr_32152_32175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (3))){
var inst_32141 = (state_32144[(2)]);
var inst_32142 = cljs.core.async.close_BANG_.call(null,out);
var state_32144__$1 = (function (){var statearr_32153 = state_32144;
(statearr_32153[(9)] = inst_32141);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32144__$1,inst_32142);
} else {
if((state_val_32145 === (2))){
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32144__$1,(4),ch);
} else {
if((state_val_32145 === (11))){
var inst_32124 = (state_32144[(8)]);
var inst_32133 = (state_32144[(2)]);
var inst_32121 = inst_32124;
var state_32144__$1 = (function (){var statearr_32154 = state_32144;
(statearr_32154[(7)] = inst_32121);

(statearr_32154[(10)] = inst_32133);

return statearr_32154;
})();
var statearr_32155_32176 = state_32144__$1;
(statearr_32155_32176[(2)] = null);

(statearr_32155_32176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (9))){
var inst_32124 = (state_32144[(8)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32144__$1,(11),out,inst_32124);
} else {
if((state_val_32145 === (5))){
var inst_32124 = (state_32144[(8)]);
var inst_32121 = (state_32144[(7)]);
var inst_32128 = cljs.core._EQ_.call(null,inst_32124,inst_32121);
var state_32144__$1 = state_32144;
if(inst_32128){
var statearr_32157_32177 = state_32144__$1;
(statearr_32157_32177[(1)] = (8));

} else {
var statearr_32158_32178 = state_32144__$1;
(statearr_32158_32178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (10))){
var inst_32136 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32159_32179 = state_32144__$1;
(statearr_32159_32179[(2)] = inst_32136);

(statearr_32159_32179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (8))){
var inst_32121 = (state_32144[(7)]);
var tmp32156 = inst_32121;
var inst_32121__$1 = tmp32156;
var state_32144__$1 = (function (){var statearr_32160 = state_32144;
(statearr_32160[(7)] = inst_32121__$1);

return statearr_32160;
})();
var statearr_32161_32180 = state_32144__$1;
(statearr_32161_32180[(2)] = null);

(statearr_32161_32180[(1)] = (2));


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
});})(c__24054__auto___32170,out))
;
return ((function (switch__23992__auto__,c__24054__auto___32170,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_32165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32165[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_32165[(1)] = (1));

return statearr_32165;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_32144){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_32144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e32166){if((e32166 instanceof Object)){
var ex__23996__auto__ = e32166;
var statearr_32167_32181 = state_32144;
(statearr_32167_32181[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32182 = state_32144;
state_32144 = G__32182;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___32170,out))
})();
var state__24056__auto__ = (function (){var statearr_32168 = f__24055__auto__.call(null);
(statearr_32168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___32170);

return statearr_32168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___32170,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__32184 = arguments.length;
switch (G__32184) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24054__auto___32253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___32253,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___32253,out){
return (function (state_32222){
var state_val_32223 = (state_32222[(1)]);
if((state_val_32223 === (7))){
var inst_32218 = (state_32222[(2)]);
var state_32222__$1 = state_32222;
var statearr_32224_32254 = state_32222__$1;
(statearr_32224_32254[(2)] = inst_32218);

(statearr_32224_32254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (1))){
var inst_32185 = (new Array(n));
var inst_32186 = inst_32185;
var inst_32187 = (0);
var state_32222__$1 = (function (){var statearr_32225 = state_32222;
(statearr_32225[(7)] = inst_32187);

(statearr_32225[(8)] = inst_32186);

return statearr_32225;
})();
var statearr_32226_32255 = state_32222__$1;
(statearr_32226_32255[(2)] = null);

(statearr_32226_32255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (4))){
var inst_32190 = (state_32222[(9)]);
var inst_32190__$1 = (state_32222[(2)]);
var inst_32191 = (inst_32190__$1 == null);
var inst_32192 = cljs.core.not.call(null,inst_32191);
var state_32222__$1 = (function (){var statearr_32227 = state_32222;
(statearr_32227[(9)] = inst_32190__$1);

return statearr_32227;
})();
if(inst_32192){
var statearr_32228_32256 = state_32222__$1;
(statearr_32228_32256[(1)] = (5));

} else {
var statearr_32229_32257 = state_32222__$1;
(statearr_32229_32257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (15))){
var inst_32212 = (state_32222[(2)]);
var state_32222__$1 = state_32222;
var statearr_32230_32258 = state_32222__$1;
(statearr_32230_32258[(2)] = inst_32212);

(statearr_32230_32258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (13))){
var state_32222__$1 = state_32222;
var statearr_32231_32259 = state_32222__$1;
(statearr_32231_32259[(2)] = null);

(statearr_32231_32259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (6))){
var inst_32187 = (state_32222[(7)]);
var inst_32208 = (inst_32187 > (0));
var state_32222__$1 = state_32222;
if(cljs.core.truth_(inst_32208)){
var statearr_32232_32260 = state_32222__$1;
(statearr_32232_32260[(1)] = (12));

} else {
var statearr_32233_32261 = state_32222__$1;
(statearr_32233_32261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (3))){
var inst_32220 = (state_32222[(2)]);
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32222__$1,inst_32220);
} else {
if((state_val_32223 === (12))){
var inst_32186 = (state_32222[(8)]);
var inst_32210 = cljs.core.vec.call(null,inst_32186);
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32222__$1,(15),out,inst_32210);
} else {
if((state_val_32223 === (2))){
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32222__$1,(4),ch);
} else {
if((state_val_32223 === (11))){
var inst_32202 = (state_32222[(2)]);
var inst_32203 = (new Array(n));
var inst_32186 = inst_32203;
var inst_32187 = (0);
var state_32222__$1 = (function (){var statearr_32234 = state_32222;
(statearr_32234[(7)] = inst_32187);

(statearr_32234[(8)] = inst_32186);

(statearr_32234[(10)] = inst_32202);

return statearr_32234;
})();
var statearr_32235_32262 = state_32222__$1;
(statearr_32235_32262[(2)] = null);

(statearr_32235_32262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (9))){
var inst_32186 = (state_32222[(8)]);
var inst_32200 = cljs.core.vec.call(null,inst_32186);
var state_32222__$1 = state_32222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32222__$1,(11),out,inst_32200);
} else {
if((state_val_32223 === (5))){
var inst_32195 = (state_32222[(11)]);
var inst_32187 = (state_32222[(7)]);
var inst_32186 = (state_32222[(8)]);
var inst_32190 = (state_32222[(9)]);
var inst_32194 = (inst_32186[inst_32187] = inst_32190);
var inst_32195__$1 = (inst_32187 + (1));
var inst_32196 = (inst_32195__$1 < n);
var state_32222__$1 = (function (){var statearr_32236 = state_32222;
(statearr_32236[(11)] = inst_32195__$1);

(statearr_32236[(12)] = inst_32194);

return statearr_32236;
})();
if(cljs.core.truth_(inst_32196)){
var statearr_32237_32263 = state_32222__$1;
(statearr_32237_32263[(1)] = (8));

} else {
var statearr_32238_32264 = state_32222__$1;
(statearr_32238_32264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (14))){
var inst_32215 = (state_32222[(2)]);
var inst_32216 = cljs.core.async.close_BANG_.call(null,out);
var state_32222__$1 = (function (){var statearr_32240 = state_32222;
(statearr_32240[(13)] = inst_32215);

return statearr_32240;
})();
var statearr_32241_32265 = state_32222__$1;
(statearr_32241_32265[(2)] = inst_32216);

(statearr_32241_32265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (10))){
var inst_32206 = (state_32222[(2)]);
var state_32222__$1 = state_32222;
var statearr_32242_32266 = state_32222__$1;
(statearr_32242_32266[(2)] = inst_32206);

(statearr_32242_32266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32223 === (8))){
var inst_32195 = (state_32222[(11)]);
var inst_32186 = (state_32222[(8)]);
var tmp32239 = inst_32186;
var inst_32186__$1 = tmp32239;
var inst_32187 = inst_32195;
var state_32222__$1 = (function (){var statearr_32243 = state_32222;
(statearr_32243[(7)] = inst_32187);

(statearr_32243[(8)] = inst_32186__$1);

return statearr_32243;
})();
var statearr_32244_32267 = state_32222__$1;
(statearr_32244_32267[(2)] = null);

(statearr_32244_32267[(1)] = (2));


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
});})(c__24054__auto___32253,out))
;
return ((function (switch__23992__auto__,c__24054__auto___32253,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_32248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32248[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_32248[(1)] = (1));

return statearr_32248;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_32222){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_32222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e32249){if((e32249 instanceof Object)){
var ex__23996__auto__ = e32249;
var statearr_32250_32268 = state_32222;
(statearr_32250_32268[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32269 = state_32222;
state_32222 = G__32269;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_32222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_32222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___32253,out))
})();
var state__24056__auto__ = (function (){var statearr_32251 = f__24055__auto__.call(null);
(statearr_32251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___32253);

return statearr_32251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___32253,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__32271 = arguments.length;
switch (G__32271) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24054__auto___32344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24054__auto___32344,out){
return (function (){
var f__24055__auto__ = (function (){var switch__23992__auto__ = ((function (c__24054__auto___32344,out){
return (function (state_32313){
var state_val_32314 = (state_32313[(1)]);
if((state_val_32314 === (7))){
var inst_32309 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32315_32345 = state_32313__$1;
(statearr_32315_32345[(2)] = inst_32309);

(statearr_32315_32345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (1))){
var inst_32272 = [];
var inst_32273 = inst_32272;
var inst_32274 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32313__$1 = (function (){var statearr_32316 = state_32313;
(statearr_32316[(7)] = inst_32274);

(statearr_32316[(8)] = inst_32273);

return statearr_32316;
})();
var statearr_32317_32346 = state_32313__$1;
(statearr_32317_32346[(2)] = null);

(statearr_32317_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (4))){
var inst_32277 = (state_32313[(9)]);
var inst_32277__$1 = (state_32313[(2)]);
var inst_32278 = (inst_32277__$1 == null);
var inst_32279 = cljs.core.not.call(null,inst_32278);
var state_32313__$1 = (function (){var statearr_32318 = state_32313;
(statearr_32318[(9)] = inst_32277__$1);

return statearr_32318;
})();
if(inst_32279){
var statearr_32319_32347 = state_32313__$1;
(statearr_32319_32347[(1)] = (5));

} else {
var statearr_32320_32348 = state_32313__$1;
(statearr_32320_32348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (15))){
var inst_32303 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32321_32349 = state_32313__$1;
(statearr_32321_32349[(2)] = inst_32303);

(statearr_32321_32349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (13))){
var state_32313__$1 = state_32313;
var statearr_32322_32350 = state_32313__$1;
(statearr_32322_32350[(2)] = null);

(statearr_32322_32350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (6))){
var inst_32273 = (state_32313[(8)]);
var inst_32298 = inst_32273.length;
var inst_32299 = (inst_32298 > (0));
var state_32313__$1 = state_32313;
if(cljs.core.truth_(inst_32299)){
var statearr_32323_32351 = state_32313__$1;
(statearr_32323_32351[(1)] = (12));

} else {
var statearr_32324_32352 = state_32313__$1;
(statearr_32324_32352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (3))){
var inst_32311 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32313__$1,inst_32311);
} else {
if((state_val_32314 === (12))){
var inst_32273 = (state_32313[(8)]);
var inst_32301 = cljs.core.vec.call(null,inst_32273);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32313__$1,(15),out,inst_32301);
} else {
if((state_val_32314 === (2))){
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32313__$1,(4),ch);
} else {
if((state_val_32314 === (11))){
var inst_32277 = (state_32313[(9)]);
var inst_32281 = (state_32313[(10)]);
var inst_32291 = (state_32313[(2)]);
var inst_32292 = [];
var inst_32293 = inst_32292.push(inst_32277);
var inst_32273 = inst_32292;
var inst_32274 = inst_32281;
var state_32313__$1 = (function (){var statearr_32325 = state_32313;
(statearr_32325[(11)] = inst_32291);

(statearr_32325[(7)] = inst_32274);

(statearr_32325[(8)] = inst_32273);

(statearr_32325[(12)] = inst_32293);

return statearr_32325;
})();
var statearr_32326_32353 = state_32313__$1;
(statearr_32326_32353[(2)] = null);

(statearr_32326_32353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (9))){
var inst_32273 = (state_32313[(8)]);
var inst_32289 = cljs.core.vec.call(null,inst_32273);
var state_32313__$1 = state_32313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32313__$1,(11),out,inst_32289);
} else {
if((state_val_32314 === (5))){
var inst_32277 = (state_32313[(9)]);
var inst_32281 = (state_32313[(10)]);
var inst_32274 = (state_32313[(7)]);
var inst_32281__$1 = f.call(null,inst_32277);
var inst_32282 = cljs.core._EQ_.call(null,inst_32281__$1,inst_32274);
var inst_32283 = cljs.core.keyword_identical_QMARK_.call(null,inst_32274,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32284 = (inst_32282) || (inst_32283);
var state_32313__$1 = (function (){var statearr_32327 = state_32313;
(statearr_32327[(10)] = inst_32281__$1);

return statearr_32327;
})();
if(cljs.core.truth_(inst_32284)){
var statearr_32328_32354 = state_32313__$1;
(statearr_32328_32354[(1)] = (8));

} else {
var statearr_32329_32355 = state_32313__$1;
(statearr_32329_32355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (14))){
var inst_32306 = (state_32313[(2)]);
var inst_32307 = cljs.core.async.close_BANG_.call(null,out);
var state_32313__$1 = (function (){var statearr_32331 = state_32313;
(statearr_32331[(13)] = inst_32306);

return statearr_32331;
})();
var statearr_32332_32356 = state_32313__$1;
(statearr_32332_32356[(2)] = inst_32307);

(statearr_32332_32356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (10))){
var inst_32296 = (state_32313[(2)]);
var state_32313__$1 = state_32313;
var statearr_32333_32357 = state_32313__$1;
(statearr_32333_32357[(2)] = inst_32296);

(statearr_32333_32357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32314 === (8))){
var inst_32277 = (state_32313[(9)]);
var inst_32281 = (state_32313[(10)]);
var inst_32273 = (state_32313[(8)]);
var inst_32286 = inst_32273.push(inst_32277);
var tmp32330 = inst_32273;
var inst_32273__$1 = tmp32330;
var inst_32274 = inst_32281;
var state_32313__$1 = (function (){var statearr_32334 = state_32313;
(statearr_32334[(7)] = inst_32274);

(statearr_32334[(14)] = inst_32286);

(statearr_32334[(8)] = inst_32273__$1);

return statearr_32334;
})();
var statearr_32335_32358 = state_32313__$1;
(statearr_32335_32358[(2)] = null);

(statearr_32335_32358[(1)] = (2));


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
});})(c__24054__auto___32344,out))
;
return ((function (switch__23992__auto__,c__24054__auto___32344,out){
return (function() {
var cljs$core$async$state_machine__23993__auto__ = null;
var cljs$core$async$state_machine__23993__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$state_machine__23993__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$state_machine__23993__auto____1 = (function (state_32313){
while(true){
var ret_value__23994__auto__ = (function (){try{while(true){
var result__23995__auto__ = switch__23992__auto__.call(null,state_32313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23995__auto__;
}
break;
}
}catch (e32340){if((e32340 instanceof Object)){
var ex__23996__auto__ = e32340;
var statearr_32341_32359 = state_32313;
(statearr_32341_32359[(5)] = ex__23996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32360 = state_32313;
state_32313 = G__32360;
continue;
} else {
return ret_value__23994__auto__;
}
break;
}
});
cljs$core$async$state_machine__23993__auto__ = function(state_32313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23993__auto____1.call(this,state_32313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23993__auto____0;
cljs$core$async$state_machine__23993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23993__auto____1;
return cljs$core$async$state_machine__23993__auto__;
})()
;})(switch__23992__auto__,c__24054__auto___32344,out))
})();
var state__24056__auto__ = (function (){var statearr_32342 = f__24055__auto__.call(null);
(statearr_32342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24054__auto___32344);

return statearr_32342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24056__auto__);
});})(c__24054__auto___32344,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map