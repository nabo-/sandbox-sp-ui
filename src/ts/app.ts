/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />


module PullHeadImage {

	export class App {

		public item:any;
		public touchStartY:number;
		public touchMoveY:number;

		constructor(
				public target:string
			){

			this.item = document.getElementById(target);
			this.touchStartY = 0;
			this.touchMoveY = 0;

			this.ready();
		}

		ready():void {

			var _this = this;

			$('body').append('<div id="pullHeadImageBg"></div>');

			_this.item.addEventListener('touchstart', function(event){
				_this.touchStartY = event.touches[0].pageY;
				console.log(_this.touchStartY);
				});

			_this.item.addEventListener('touchmove', function(event){
				_this.touchMoveY = event.touches[0].pageY;
				console.log(_this.touchMoveY);
				});
		}

	}

	// touch start したらイベントが動かないとだめ

	// get touch start y
	export class GetTouchCoord {

		constructor(
			public coordTouchStartY:number,
			public coordTouchMoveY:number
			){}

		getDifferenceCoord():number {
			var difference:number = this.coordTouchMoveY - this.coordTouchStartY;
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
