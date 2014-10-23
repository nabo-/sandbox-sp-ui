/// <reference path="definitions/jquery.d.ts" />

module PullHeadImage {
	export class App {
		constructor(){
			this.ready();
		}

		ready():void {
			$('body').append('<div id="pullHeadImageBg"></div>');
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

			$('#pullHeadImage').on('touchstart', function(){
				touchStartY = event.touches[0].pageY;
				});

			return touchStartY;
		}

	}



}
