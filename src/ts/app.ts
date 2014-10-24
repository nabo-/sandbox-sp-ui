/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />


module PullHeadImage {

	export class App {
		constructor(){
			this.ready();
		}

		ready():void {
			$('body').append('<div id="pullHeadImageBg"></div>');

			var test = new PullController();
			test.getTouchY();
		}
	}

	export class OpacityController {
		constructor(){
		}
		set(num: number):void {
			$('pullHeadImageBg').css('opacity',num);
		}
	}

	export class PullController {
		constructor(){
		}

		getTouchY():any {
			var touchStartY:number;
			var test = document.getElementById('pullHeadImage');

			test.addEventListener('touchstart', function(event){
				var a = event.touches[0];
			});

			test.ontouchstart = function(event){
				var b = event.touches[0];
			}
			// $('#pullHeadImage').on('touchstart', function(){
			// 	var test = console.log(event.pageX);
			// 	});
			return touchStartY;
		}

	}

}
