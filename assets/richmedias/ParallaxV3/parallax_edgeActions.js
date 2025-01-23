
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","scroll",function(sym,e){sym.stop(time);var animationHeight=2880;var stageHeight=sym.$("Stage").height();var scrollPos=sym.$("Stage").scrollTop();var duration=sym.getDuration();var percent=scrollPos/(animationHeight-stageHeight);var time=duration*percent;sym.stop(time);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.playReverse();});
//Edge binding end
})("Symbol_1");
//Edge symbol end:'Symbol_1'
})(jQuery,AdobeEdge,"EDGE-57073878");