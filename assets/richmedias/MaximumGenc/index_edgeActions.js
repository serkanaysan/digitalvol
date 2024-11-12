
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","scroll",function(sym,e){sym.stop(time);var animationHeight=3240;var stageHeight=sym.$("Stage").height();var scrollPos=sym.$("Stage").scrollTop();var duration=sym.getDuration();var percent=scrollPos/(animationHeight-stageHeight);var time=duration*percent;sym.stop(time);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",655,function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'okanim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.playReverse();});
//Edge binding end
})("okanim");
//Edge symbol end:'okanim'
})(jQuery,AdobeEdge,"EDGE-874240046");