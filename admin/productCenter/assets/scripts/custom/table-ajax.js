var TableAjax = function () {


    var handleRecords = function() {

        var grid = new Datatable();
        grid.init({
            src: $("#sample_1"),
            onSuccess: function(grid) {
                // execute some code after table records loaded
                alert(1) ;
            },
            onError: function(grid) {
                // execute some code on network or other general error
                alert(2) ;
            },
            dataTable: {  // here you can define a typical datatable settings from http://datatables.net/usage/options
                "sAjaxSource": "http://192.168.0.57/sysman/nest/" // ajax source
            }
        });

    }

    return {

        //main function to initiate the module
        init: function () {
            handleRecords();
        }

    };

}();