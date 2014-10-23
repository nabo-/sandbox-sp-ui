/// <reference path="definitions/jquery.d.ts" />
var PullHeadImage;
(function (PullHeadImage) {
    var App = (function () {
        function App() {
            this.ready();
        }
        App.prototype.ready = function () {
            $('body').append('<div id="pullHeadImageBg"></div>');
        };
        return App;
    })();
    PullHeadImage.App = App;
})(PullHeadImage || (PullHeadImage = {}));
/// <reference path="definitions/jquery.d.ts" />
/// <reference path="app.ts" />

(function () {
    var pullHeadImage = new PullHeadImage.App();
})();
