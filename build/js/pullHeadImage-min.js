<<<<<<< HEAD
<<<<<<< HEAD
var PullHeadImage;!function(a){var b=function(){function a(){this.ready()}return a.prototype.ready=function(){$("body").append('<div id="pullHeadImageBg"></div>')},a}();a.App=b}(PullHeadImage||(PullHeadImage={})),function(){new PullHeadImage.App}();
=======
var PullHeadImage;!function(a){var b=function(){function a(){this.ready()}return a.prototype.ready=function(){$("body").append('<div id="pullHeadImageBg"></div>');var a=new c;console.log(a.getDifferenceCoord())},a}();a.App=b;var c=function(){function a(){this.item=document.getElementById("pullHeadImage")}return a.prototype.touchStart=function(){var a=this;this.item.addEventListener("touchstart",function(b){a.touchStartY=b.touches[0].pageY})},a.prototype.touchMove=function(){var a=this;this.item.addEventListener("touchmove",function(b){a.touchMoveY=b.touches[0].pageY})},a.prototype.getDifferenceCoord=function(){this.touchStart(),this.touchMove();var a=this.touchMoveY-this.touchStartY;return a},a}();a.GetTouchCoord=c;var d=function(){function a(){}return a.prototype.set=function(a){$("pullHeadImageBg").css("opacity",a)},a}();a.OpacityController=d}(PullHeadImage||(PullHeadImage={})),function(){new PullHeadImage.App}(),function(){new PullHeadImage.App}();
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
=======
var PullHeadImage;!function(a){var b=function(){function a(a){this.targetId=a,this.item=document.getElementById(a),this.ready()}return a.prototype.ready=function(){new c(this.item);$("body").append('<div id="pullHeadImageBg"></div>')},a}();a.App=b;var c=function(){function a(a){this.item=a,this.startY=0,this.moveY=0,this.differ=0,this.set()}return a.prototype.set=function(){this.touchStart(),this.touchMove(),this.touchEnd()},a.prototype.touchStart=function(){var a=this;this.item.addEventListener("touchstart",function(b){a.startY=b.changedTouches[0].pageY,a.setTimer()})},a.prototype.touchMove=function(){var a=this;this.item.addEventListener("touchmove",function(b){a.moveY=b.changedTouches[0].pageY})},a.prototype.touchEnd=function(){var a=this,b=document.getElementById("page");b.addEventListener("touchend",function(){clearInterval(a.timer)})},a.prototype.getDifferCoord=function(){var a=this.moveY-this.startY;return a},a.prototype.setTimer=function(){var a=this;this.timer=setInterval(function(){a.differ=a.getDifferCoord(),console.log(a.differ),e.set(a.differ)},100)},a}();a.SetTouchEvent=c;var d=function(){function a(a){this.coord=a}return a.prototype.set=function(){},a}();a.DisplayImage=d;var e=function(){function a(){}return a.set=function(a){var b=a/150;$("#pullHeadImageBg").show(),0>b||(b>.85&&(b=1),console.log("opacityController"),$("#pullHeadImageBg").css("opacity",b))},a}();a.OpacityController=e}(PullHeadImage||(PullHeadImage={})),function(){new PullHeadImage.App("pullHeadImage")}();
>>>>>>> da8a1e597d2e5160bfb2917c9593c897518f181c
