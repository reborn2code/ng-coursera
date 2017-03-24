(function(){

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ToBuyController(ShoppingListCheckOffService) {
ToBuyController.$inject = ['ShoppingListCheckOffService'];
  var toBuy = this;

  toBuy.ListToBuy = ShoppingListCheckOffService.getToBuyList();

  toBuy.bought = function (index) {
      ShoppingListCheckOffService.buyItem(index);
  };
};

function AlreadyBoughtController(ShoppingListCheckOffService) {
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  var alreadyBought = this;

  alreadyBought.ListBought = ShoppingListCheckOffService.getAlreadyBoughtList();
};

function ShoppingListCheckOffService() {
  var service = this;

  //Initialize the toBuyList with 3 default values
  var toBuyList = [
    {
      name: "Cookies",
      quantity: "10 Bags"
    },
    {
      name: "Milk",
      quantity: "2 Litre"
    },
    {
      name: "Bournvita",
      quantity: "1 Kg"
    },
    {
      name: "Sugar",
      quantity: "1 Kg"
    },
    {
      name: "Salt",
      quantity: "3 Kg"
    }
  ];

  var alreadyBoughtList = [];

  service.getToBuyList = function () {
      return toBuyList;
  };

  service.getAlreadyBoughtList = function () {
      return alreadyBoughtList;
  };

  service.buyItem = function (index) {
    var bItem = new Object(toBuyList.splice(index, 1));
    alreadyBoughtList.push(bItem[0]);

  };
};
  // end of IIFE
})();
