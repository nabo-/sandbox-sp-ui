/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />


module PullHeadImage {


	export class App {

		public item:any;

		constructor(public targetId:string){
			this.item = document.getElementById(targetId);
			this.ready();
		}

		ready():void {
			var setTouchEvent = new SetTouchEvent(this.item);
			$('body').append('<div id="pullHeadImageBg"></div>');

		}
	}

	export class SetTouchEvent {

		public startY: number;
		public moveY: number;
		private timer:any;

		constructor(public item:any){
			this.item = item;
			this.startY = 0;
			this.moveY = 0;

			this.set();
		}

		set():void {
			this.touchStart();
			this.touchMove();
			this.touchEnd();
		}

		touchStart():void {
			var _this = this;
			this.item.addEventListener('touchstart', function(event){
				_this.startY = event.touches[0].pageY;
				_this.setTimer();
			});
		}
		touchMove():void {
			var _this = this;
			this.item.addEventListener('touchmove', function(event){
				_this.moveY = event.touches[0].pageY;
			});
		}
		touchEnd():void {
			var _this = this;
			this.item.addEventListener('touchend', function(){
				clearInterval(_this.timer);
			});
		}

		getDifferCoord():number {
			var coord = this.moveY - this.startY;
			return coord;
		}

		setTimer():void {
			var _this = this;
			this.timer = setInterval(function(){

						var coord = _this.getDifferCoord();
						console.log(coord);

						// 画像を動かすクラスを呼び出す
						}, 100);
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


}
