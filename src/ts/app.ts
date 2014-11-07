/// <reference path="definitions/jquery.d.ts" />
/// <reference path="definitions/touchevent.d.ts" />


module PullHeadImage {


	export class App {
		public item:any
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
		public differ : number;
		private timer:any;

		constructor(public item:any){
			this.startY = 0;
			this.moveY = 0;
			this.differ = 0;

			this.set();
		}

		set():void {
			this.touchStart();
			this.touchMove();
			this.touchEnd();
		}

		touchStart():void {
			var _this = this;

			this.item.addEventListener('touchstart', function(e){
				_this.startY = e.changedTouches[0].pageY;
				_this.setTimer();
			});
		}

		touchMove():void {
			var _this = this;

			this.item.addEventListener('touchmove', function(e){
				//event.preventDefault();
				_this.moveY = e.changedTouches[0].pageY;
			});
		}

		touchEnd():void {
			var _this = this;
			var page = document.getElementById('page');

			page.addEventListener('touchend', function(e){
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

						_this.differ = _this.getDifferCoord();
						console.log(_this.differ);
						OpacityController.set(_this.differ);

						// 画像を動かすクラスを呼び出す
						}, 100);
		}
	}


	export class DisplayImage {

		constructor(public coord:number){

		}

		set():void {

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

		static set(differ: number):void {

			var opacitySize = (differ / 150);
			$('#pullHeadImageBg').show();

			if(opacitySize < 0){
				return;
			}

			if(opacitySize > 0.85) {
				opacitySize = 1;
			}

			console.log("opacityController");
			$('#pullHeadImageBg').css('opacity', opacitySize);
		}
	}


	// close PhotoScreen mode


}
