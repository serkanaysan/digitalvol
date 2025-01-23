
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","scroll",function(sym,e){sym.stop(time);var animationHeight=1136;var stageHeight=sym.$("Stage").height();var scrollPos=sym.$("Stage").scrollTop();var duration=sym.getDuration();var percent=scrollPos/(animationHeight-stageHeight);var time=duration*percent;sym.stop(time);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-752082142");