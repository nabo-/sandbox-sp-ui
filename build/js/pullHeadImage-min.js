var PullHeadImage;!function(a){var b=function(){function a(){this.ready()}return a.prototype.ready=function(){$("body").append('<div id="pullHeadImageBg"></div>');var a=new c;console.log(a.getDifferenceCoord())},a}();a.App=b;var c=function(){function a(){this.item=document.getElementById("pullHeadImage")}return a.prototype.touchStart=function(){var a=this;this.item.addEventListener("touchstart",function(b){a.touchStartY=b.touches[0].pageY})},a.prototype.touchMove=function(){var a=this;this.item.addEventListener("touchmove",function(b){a.touchMoveY=b.touches[0].pageY})},a.prototype.getDifferenceCoord=function(){this.touchStart(),this.touchMove();var a=this.touchMoveY-this.touchStartY;return a},a}();a.GetTouchCoord=c;var d=function(){function a(){}return a.prototype.set=function(a){$("pullHeadImageBg").css("opacity",a)},a}();a.OpacityController=d}(PullHeadImage||(PullHeadImage={})),function(){new PullHeadImage.App}(),function(){new PullHeadImage.App}();