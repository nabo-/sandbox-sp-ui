/// <reference path="definitions/jquery.d.ts" />
<<<<<<< HEAD
=======
/// <reference path="definitions/touchevent.d.ts" />
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
var PullHeadImage;
(function (PullHeadImage) {
    var App = (function () {
        function App(targetId) {
            this.targetId = targetId;
            this.item = document.getElementById(targetId);
            this.ready();
        }
<<<<<<< HEAD
<<<<<<< HEAD
        App.prototype.ready = function () {
            $('body').append('<div id="pullHeadImageBg"></div>');
=======
        // set object dom
=======
>>>>>>> da8a1e597d2e5160bfb2917c9593c897518f181c
        App.prototype.ready = function () {
            var setTouchEvent = new SetTouchEvent(this.item);
            $('body').append('<div id="pullHeadImageBg"></div>');
<<<<<<< HEAD

            var test = new GetTouchCoord();
            console.log(test.getDifferenceCoord());
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
=======
>>>>>>> da8a1e597d2e5160bfb2917c9593c897518f181c
        };
        return App;
    })();
    PullHeadImage.App = App;
<<<<<<< HEAD
})(PullHeadImage || (PullHeadImage = {}));
/// <reference path="definitions/jquery.d.ts" />
=======

    var SetTouchEvent = (function () {
        function SetTouchEvent(item) {
            this.item = item;
            this.startY = 0;
            this.moveY = 0;
            this.differ = 0;

            this.set();
        }
        SetTouchEvent.prototype.set = function () {
            this.touchStart();
            this.touchMove();
            this.touchEnd();
        };

        SetTouchEvent.prototype.touchStart = function () {
            var _this = this;

            this.item.addEventListener('touchstart', function (e) {
                _this.startY = e.changedTouches[0].pageY;
                _this.setTimer();
            });
        };

        SetTouchEvent.prototype.touchMove = function () {
            var _this = this;

            this.item.addEventListener('touchmove', function (e) {
                //event.preventDefault();
                _this.moveY = e.changedTouches[0].pageY;
            });
        };

        SetTouchEvent.prototype.touchEnd = function () {
            var _this = this;
            var page = document.getElementById('page');

            page.addEventListener('touchend', function (e) {
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
                _this.differ = _this.getDifferCoord();
                console.log(_this.differ);
                OpacityController.set(_this.differ);
                // 画像を動かすクラスを呼び出す
            }, 100);
        };
        return SetTouchEvent;
    })();
    PullHeadImage.SetTouchEvent = SetTouchEvent;

    var DisplayImage = (function () {
        function DisplayImage(coord) {
            this.coord = coord;
        }
        DisplayImage.prototype.set = function () {
        };
        return DisplayImage;
    })();
    PullHeadImage.DisplayImage = DisplayImage;

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
        OpacityController.set = function (differ) {
            var opacitySize = (differ / 150);
            $('#pullHeadImageBg').show();

            if (opacitySize < 0) {
                return;
            }

            if (opacitySize > 0.85) {
                opacitySize = 1;
            }

            console.log("opacityController");
            $('#pullHeadImageBg').css('opacity', opacitySize);
        };
        return OpacityController;
    })();
    PullHeadImage.OpacityController = OpacityController;
})(PullHeadImage || (PullHeadImage = {}));
/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
>>>>>>> e0005379d9408ffe6ddaea61f98b6055fd8f3de3
/// <reference path="app.ts" />

(function () {
    var pullHeadImage = new PullHeadImage.App('pullHeadImage');
})();
