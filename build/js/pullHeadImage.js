/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
var PullHeadImage;
(function (PullHeadImage) {
    var App = (function () {
        function App() {
            this.ready();
        }
        App.prototype.ready = function () {
            $('body').append('<div id="pullHeadImageBg"></div>');

            var test = new PullController();
            test.getTouchY();
        };
        return App;
    })();
    PullHeadImage.App = App;

    var OpacityController = (function () {
        function OpacityController() {
        }
        OpacityController.prototype.set = function (num) {
            $('pullHeadImageBg').css('opacity', num);
        };
        return OpacityController;
    })();
    PullHeadImage.OpacityController = OpacityController;

    var PullController = (function () {
        function PullController() {
        }
        PullController.prototype.getTouchY = function () {
            var touchStartY;
            var test = document.getElementById('pullHeadImage');

            test.addEventListener('touchstart', function (event) {
                var a = event.touches[0];
            });

            test.ontouchstart = function (event) {
                var b = event.touches[0];
            };

            // $('#pullHeadImage').on('touchstart', function(){
            // 	var test = console.log(event.pageX);
            // 	});
            return touchStartY;
        };
        return PullController;
    })();
    PullHeadImage.PullController = PullController;
})(PullHeadImage || (PullHeadImage = {}));
/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />
/// <reference path="app.ts" />

(function () {
    var pullHeadImage = new PullHeadImage.App();
})();
