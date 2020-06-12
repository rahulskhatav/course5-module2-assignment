list = [
    {
        name: "Pistons",
        qty: "5"
    },
    {
        name: "Disc Brakes",
        qty: "7"
    },
    {
        name: "Engine Valves",
        qty: "4"
    },
    {
        name: "Pinion Gears",
        qty: "25"
    },
    {
        name: "Differential Units",
        qty: "10"
    }
];

(function(){
    angular.module("checkApp", [])
    .controller("buyctrl", buyctrl)
    .controller("boughtctrl", boughtctrl)
    .service("buyservice", buyservice);

    buyctrl.$inject = ['buyservice'];
    function buyctrl(buyservice){
        var buy = this;
        buy.list = buyservice.getBuyList();
        buy.empty = function(){
            if(buy.list.length===0){
                return 1;
            }
            else{
                return 0;
            }
        };
        buy.remove = function(ind){
            buyservice.remove(ind);
        };
    }

    boughtctrl.$inject = ['buyservice'];
    function boughtctrl(buyservice)
    {
        var bought = this;
        bought.list = buyservice.getBoughtList();
        bought.empty = function(){
            if(bought.list.length===0){
                return 1;
            }
            else{
                return 0;
            }
        };
    }

    function buyservice(){
        var service = this;
        service.buyList = list;
        service.boughtList = [];
        service.getBuyList = function(){
            return service.buyList;
        };
        service.getBoughtList = function(){
            return service.boughtList;
        };
        service.remove = function(ind){
            service.boughtList.push(service.buyList[ind]);
            //console.log(service.buyList[ind]);
            service.buyList.splice(ind, 1);
        };
    }

})()