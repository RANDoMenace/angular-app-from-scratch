(function() {
	'use strict';

	angular
	.module("kittyApp")
	.controller("KittiesController", KittiesController);

	// KittiesController.$inject = [];

	function KittiesController() {
		var vm = this;

		vm.allKitties = [
			{
				catName: 'Karl',
				monthsOld: 5,
				gender: 'boy',
				image: "images/carl.png",
				adopted: true,
			},
			{
				catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: "images/jack.png",
				adopted: false
			},
			{
				catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: "images/oscar.png",
				adopted: false
			},
			{
				catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: "images/princessmew.png",
				adopted: false
			}

		];

	};

})();
