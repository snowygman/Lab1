//alert("Have no fear, JS is here.");

    function add(num1, num2) {
        return (num1 + num2);
    }

    function howdy() {
        return "Hello World, Punk!";
    }

//this is an object
    function getVehicle(theYear, theMake, theModel) {

        var vehicle = new Object();
        vehicle.model = theModel;//assign property to vehicle object with a parameter that's passed in 
        vehicle.make = theMake;
        vehicle.year = theYear;
        vehicle.getInfo = function () {
            return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
        };

        return vehicle;
    }

    var obj = new getVehicle("2000", "Honda", "CRV");

    alert(obj.getInfo());

//this is a class with encapsulation
    function Vehicle(theYear, theMake, theModel) {
        var year = theYear; //use var to prevent data from being added to the global namespace
        var make = theMake;
        var model = theModel;
        this.getInfo = function () {  //public so no var; use 'this' +
            return 'Vehicle: ' + year + ' ' + make + ' ' + model;
        };
    }




    //function howdy2() {
    //    var btn = document.getElementById('btn1');
    //    btn.addEventListener('click', howdy(), false);
    //}
    //var btn = document.getElementById('btn1');
    //btn.addEventListener('click', howdy(), false);