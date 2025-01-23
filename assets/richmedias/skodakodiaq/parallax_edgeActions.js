
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","scroll",function(sym,e){sym.stop(time);var animationHeight=3360;var stageHeight=sym.$("Stage").height();var scrollPos=sym.$("Stage").scrollTop();var duration=sym.getDuration();var percent=scrollPos/(animationHeight-stageHeight);var time=duration*percent;sym.stop(time);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var youtube=$("<iframe/>");sym.$("video3").append(youtube);youtube.attr('type','text/html');youtube.attr('width','280');youtube.attr('height','157');youtube.attr('src','https://www.youtube.com/embed/8H7jK0HOCJA');youtube.attr('frameborder','0');youtube.attr('allowfullscreen','0');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'okanim'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.playReverse();});
//Edge binding end
})("okanim");
//Edge symbol end:'okanim'

//=========================================================

//Edge symbol: 'video'
(function(symbolName){})("video");
//Edge symbol end:'video'
})(jQuery,AdobeEdge,"EDGE-441503317");