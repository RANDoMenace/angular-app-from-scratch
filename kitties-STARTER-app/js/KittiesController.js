(function() {
	'use strict';

	angular
	.module("kittyApp")
	.controller("KittiesController", KittiesController);

	KittiesController.$inject = [];

	function KittiesController() {
		var vm = this;

		vm.ids = 4;
		vm.allKitties = [
			{
				id: 0,
				catName: 'Karl',
				monthsOld: 5,
				gender: 'boy',
				image: "images/carl.png",
				adopted: true,
			},
			{
				id: 1,
				catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: "images/jack.png",
				adopted: false
			},
			{
				id:2,
				catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: "images/oscar.png",
				adopted: false
			},
			{
				id: 3,
				catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: "images/princessmew.png",
				adopted: false
			}

		]
		vm.newKitty = function() {
			this.allKitties.push({
					id: this.ids,
					catName: this.newKitty.catName,
					monthsOld: this.newKitty.monthsOld,
					gender: this.newKitty.gender,
					image: this.newKitty.image,
					adopted: this.newKitty.adopted
				});
				this.ids++;
				this.newKitty.catName = '';
				this.newKitty.monthsOld;
				this.newKitty.gender = '';
				this.newKitty.image = '';
				this.newKitty.adopted = false;
		}

	};

})();
