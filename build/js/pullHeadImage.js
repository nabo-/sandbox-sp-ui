/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
var PullHeadImage;
(function (PullHeadImage) {
    var App = (function () {
        function App(target) {
            this.target = target;
            this.item = document.getElementById(target);
            this.touchStartY = 0;
            this.touchMoveY = 0;

            this.ready();
        }
        App.prototype.ready = function () {
            var _this = this;

            $('body').append('<div id="pullHeadImageBg"></div>');

            _this.item.addEventListener('touchstart', function (event) {
                _this.touchStartY = event.touches[0].pageY;
                console.log(_this.touchStartY);
            });

            _this.item.addEventListener('touchmove', function (event) {
                _this.touchMoveY = event.touches[0].pageY;
                console.log(_this.touchMoveY);
            });
        };
        return App;
    })();
    PullHeadImage.App = App;

    // touch start したらイベントが動かないとだめ
    // get touch start y
    var GetTouchCoord = (function () {
        function GetTouchCoord(coordTouchStartY, coordTouchMoveY) {
            this.coordTouchStartY = coordTouchStartY;
            this.coordTouchMoveY = coordTouchMoveY;
        }
        GetTouchCoord.prototype.getDifferenceCoord = function () {
            var difference = this.coordTouchMoveY - this.coordTouchStartY;
            return difference;
        };
        return GetTouchCoord;
    })();
    PullHeadImage.GetTouchCoord = GetTouchCoord;

    // get touch move y
    // get moveY - startY
    // => image move
    // => opacity controller
    // if opacity 1
    // => get json data
    // => open PhotoScreen mode
    // open PhotoScreen mode
    // => flick photo
    // => close PhotoScreen mode
    // opacity controller
    var OpacityController = (function () {
        function OpacityController() {
        }
        OpacityController.prototype.set = function (num) {
            $('pullHeadImageBg').css('opacity', num);
        };
        return OpacityController;
    })();
    PullHeadImage.OpacityController = OpacityController;
})(PullHeadImage || (PullHeadImage = {}));
/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
/// <reference path="app.ts" />

(function () {
    var pullHeadImage = new PullHeadImage.App('pullHeadImage');
})();
