/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />


module PullHeadImage {

	export class App {
		constructor(){
			this.ready();
		}
		// set object dom
		ready():void {
			$('body').append('<div id="pullHeadImageBg"></div>');

			var test = new GetTouchCoord();
			console.log(test.getDifferenceCoord());
		}
	}

	// touch start したらイベントが動かないとだめ

	// get touch start y
	export class GetTouchCoord {

		public touchStartY:number;
		public touchMoveY:number;
		private item:any;

		constructor(){
			this.item = document.getElementById('pullHeadImage');
		}

		touchStart():void {
			var _this = this;
			this.item.addEventListener('touchstart', function(event){
				_this.touchStartY = event.touches[0].pageY;
				});
		}

		touchMove():void {
			var _this = this;
			this.item.addEventListener('touchmove', function(event){
				_this.touchMoveY = event.touches[0].pageY;
				});
		}

		getDifferenceCoord():number {

			this.touchStart();
			this.touchMove();

			var difference:number = this.touchMoveY - this.touchStartY;
			return difference;
		}

	}




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
	export class OpacityController {
		constructor(){
		}
		set(num: number):void {
			$('pullHeadImageBg').css('opacity',num);
		}
	}

	// close PhotoScreen mode





	// export class PullController {
	// 	private touchStartY:number;

	// 	constructor(){
	// 	}

	// 	getTouchY():any {
	// 		var touchStartY:number;
	// 		var item = document.getElementById('pullHeadImage');

	// 		item.addEventListener('touchstart', function(event){
	// 			touchStartY = event.touches[0].pageY;
	// 		});
	// 		return touchStartY;
	// 	}

	// }

}

(function(){
	var app = new PullHeadImage.App();
	})();
