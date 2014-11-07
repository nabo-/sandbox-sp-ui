/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
var PullHeadImage;
(function (PullHeadImage) {
    var App = (function () {
        function App(targetId) {
            this.targetId = targetId;
            this.item = document.getElementById(targetId);
            this.ready();
        }
        App.prototype.ready = function () {
            var setTouchEvent = new SetTouchEvent(this.item);
            $('body').append('<div id="pullHeadImageBg"></div>');
        };
        return App;
    })();
    PullHeadImage.App = App;

    var SetTouchEvent = (function () {
        function SetTouchEvent(item) {
            this.item = item;
            this.item = item;
            this.startY = 0;
            this.moveY = 0;

            this.set();
        }
        SetTouchEvent.prototype.set = function () {
            this.touchStart();
            this.touchMove();
            this.touchEnd();
        };

        SetTouchEvent.prototype.touchStart = function () {
            var _this = this;
            this.item.addEventListener('touchstart', function (event) {
                _this.startY = event.touches[0].pageY;
                _this.setTimer();
            });
        };
        SetTouchEvent.prototype.touchMove = function () {
            var _this = this;
            this.item.addEventListener('touchmove', function (event) {
                _this.moveY = event.touches[0].pageY;
            });
        };
        SetTouchEvent.prototype.touchEnd = function () {
            var _this = this;
            this.item.addEventListener('touchend', function () {
                clearInterval(_this.timer);
            });
        };

        SetTouchEvent.prototype.getDifferCoord = function () {
            var coord = this.moveY - this.startY;
            return coord;
        };

        SetTouchEvent.prototype.setTimer = function () {
            var _this = this;
            this.timer = setInterval(function () {
                var coord = _this.getDifferCoord();
                console.log(coord);
                // 画像を動かすクラスを呼び出す
            }, 100);
        };
        return SetTouchEvent;
    })();
    PullHeadImage.SetTouchEvent = SetTouchEvent;

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
