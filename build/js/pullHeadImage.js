/// <reference path="definitions/jquery.d.ts" />
<<<<<<< HEAD
=======
/// <reference path="definitions/touchevent.d.ts" />
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
var PullHeadImage;
(function (PullHeadImage) {
    var App = (function () {
        function App() {
            this.ready();
        }
<<<<<<< HEAD
        App.prototype.ready = function () {
            $('body').append('<div id="pullHeadImageBg"></div>');
=======
        // set object dom
        App.prototype.ready = function () {
            $('body').append('<div id="pullHeadImageBg"></div>');

            var test = new GetTouchCoord();
            console.log(test.getDifferenceCoord());
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
        };
        return App;
    })();
    PullHeadImage.App = App;
<<<<<<< HEAD
})(PullHeadImage || (PullHeadImage = {}));
/// <reference path="definitions/jquery.d.ts" />
=======

    // touch start したらイベントが動かないとだめ
    // get touch start y
    var GetTouchCoord = (function () {
        function GetTouchCoord() {
            this.item = document.getElementById('pullHeadImage');
        }
        GetTouchCoord.prototype.touchStart = function () {
            var _this = this;
            this.item.addEventListener('touchstart', function (event) {
                _this.touchStartY = event.touches[0].pageY;
            });
        };

        GetTouchCoord.prototype.touchMove = function () {
            var _this = this;
            this.item.addEventListener('touchmove', function (event) {
                _this.touchMoveY = event.touches[0].pageY;
            });
        };

        GetTouchCoord.prototype.getDifferenceCoord = function () {
            this.touchStart();
            this.touchMove();

            var difference = this.touchMoveY - this.touchStartY;
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

(function () {
    var app = new PullHeadImage.App();
})();
/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
/// <reference path="app.ts" />

(function () {
    var pullHeadImage = new PullHeadImage.App();
})();
