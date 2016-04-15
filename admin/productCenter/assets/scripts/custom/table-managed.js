var TableManaged = function () {

    return {

        //main function to initiate the module
        init: function () {
            
            if (!jQuery().dataTable) {
                return;
            }
            // begin first table
            $('#sample_1').dataTable({
                //"bProcessing": true,
                "sAjaxSource": "http://192.168.0.57/sysman/nest/", // ajax source
                "sAjaxDataProp": "",
                "aoColumns": [
                  /*{ "bSortable": false },
                  { "bSortable": false },
                  { "bSortable": false, "sType": "text" },
                  { "bSortable": false },
                  { "bSortable": false },
                  { "bSortable": false },
                  { "bSortable": false }*/
                    /*{ 'mData': function(lineData){
                        var id = lineData.nest_id;
                        return '<input type="checkbox" name="ck_nest" class="checkboxes" value="'+id+'"/>';
                    }},*/
                    { 'mData': 'nest_id' },
                    { 'mData': 'nest_name'},
                    { 'mData': function(lineData){
                        var desc = lineData.nest_desc;
                        var desnew = desc;
                        if(desc.length > 30){
                            desnew = "<span title=\""+desc+"\">"+desc.toString().substring(0,30) + "...</span>" ;
                        }
                        return desnew ;
                    } },
                    { 'mData': 'edit_ver'},
                    { 'mData': 'rel_ver'},
                    { 'mData': 'changed'},
                    { 'mData': 'status'},
                    { 'mData': function(lineData){
                        var id = lineData.nest_id;
                        var num = 78 ;
                        var progress_bar = '<div class="progress" style="margin-bottom: 0px;"><span class="progress-bar progress-bar-success" style="width:'+num+'%;color: black;text-align: left;">'+num+'%</span></div>';
                        return progress_bar ;
                    } },
                    { 'mData': function(lineData){
                        var id = lineData.nest_id;
                        var desc = lineData.nest_desc ;
                        //var del = '<a href="#" class="btn btn-sm red"><i class="fa fa-edit"></i></a>';
                        //var edit = '<button id="sample_editable_1_new" class="btn green" onclick="edit(\''+id+'\')">编辑<i class="icon-minus"></i></button>';
                        //var initGroup = '<button id="sample_editable_1_new" class="btn green" onclick="initGroup(\''+id+'\')">升级<i class="icon-minus"></i></button>';

                        var del = '<a class="btn btn-xs red" title="删除"  onclick="del(\''+id+'\')"><i class="fa fa-trash-o"></i></a>';
                        var edit = '<a class="btn btn-xs yellow " title="修改" onclick="edit(\''+id+'\')"><i class="fa fa-pencil-square-o"></i></a>';
                        var release = '<a class="btn btn-xs green " title="升级" onclick="release(\''+id+'\')"><i class="fa fa-cloud-upload"></i></a>';
                        //var test = '<button class="btn tooltips" data-toggle="tooltip" data-placement="top" data-original-title="Tooltip in top">Top</button>';
                        return release+"&nbsp;&nbsp;&nbsp;" +edit+"&nbsp;&nbsp;&nbsp;" +del ;
                    } }
                ],
                "aLengthMenu": [
                    [5, 15, 20, -1],
                    [5, 15, 20, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": 5,
                "sPaginationType": "bootstrap",  //  two_button
                "oLanguage": {
                    "sLengthMenu": "每页显示 _MENU_ 条记录",
                    "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                    "sInfoFiltered":"(从 _MAX_ 条数据中检索)",
                    "oPaginate": {
                        "sPrevious": "上一页",
                        "sNext": "下一页"
                    }
                },
                "aoColumnDefs": [
                    { 'bSortable': false, 'aTargets': [8] },
                    { "bSearchable": false, "aTargets": [8] }
                ],
                "bStateSave": true,

            });

            /*jQuery('#sample_1 .group-checkable').change(function () {
                var set = jQuery(this).attr("data-set");
                var checked = jQuery(this).is(":checked");
                jQuery(set).each(function () {
                    if (checked) {
                        $(this).attr("checked", true);
                        $(this).parents('tr').addClass("active");
                    } else {
                        $(this).attr("checked", false);
                        $(this).parents('tr').removeClass("active");
                    }                    
                });
                jQuery.uniform.update(set);
            });*/

            jQuery('#sample_1').on('change', 'tbody tr .checkboxes', function(){
                 $(this).parents('tr').toggleClass("active");

            });

            jQuery('#sample_1_wrapper .dataTables_filter input').addClass("form-control input-medium input-inline"); // modify table search input
            jQuery('#sample_1_wrapper .dataTables_length select').addClass("form-control input-xsmall"); // modify table per page dropdown
            //jQuery('#sample_1_wrapper .dataTables_length select').select2(); // initialize select2 dropdown

            // begin second table
            $('#sample_2').dataTable({
                "aoColumns": [
                    { "bSortable": false },
                    { "bSortable": false },
                    { "bSortable": false, "sType": "text" },
                    { "bSortable": false },
                    { "bSortable": false },
                    { "bSortable": false },
                    { "bSortable": false }
                ],
                "aLengthMenu": [
                    [5, 15, 20, -1],
                    [5, 15, 20, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": 5,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                }
            });


            jQuery('#sample_2_wrapper .dataTables_filter input').addClass("form-control input-small input-inline"); // modify table search input
            jQuery('#sample_2_wrapper .dataTables_length select').addClass("form-control input-xsmall"); // modify table per page dropdown
            //jQuery('#sample_2_wrapper .dataTables_length select').select2(); // initialize select2 dropdown

            // begin: third table
            $('#sample_3').dataTable({
                "aLengthMenu": [
                    [5, 15, 20, -1],
                    [5, 15, 20, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": 5,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                },
                "aoColumnDefs": [

                ]
            });

            jQuery('#sample_3 .group-checkable').change(function () {
                var set = jQuery(this).attr("data-set");
                var checked = jQuery(this).is(":checked");
                jQuery(set).each(function () {
                    if (checked) {
                        $(this).attr("checked", true);
                    } else {
                        $(this).attr("checked", false);
                    }
                });
                jQuery.uniform.update(set);
            });

            jQuery('#sample_3_wrapper .dataTables_filter input').addClass("form-control input-small input-inline"); // modify table search input
            jQuery('#sample_3_wrapper .dataTables_length select').addClass("form-control input-xsmall"); // modify table per page dropdown
            jQuery('#sample_3_wrapper .dataTables_length select').select2(); // initialize select2 dropdown

        }

    };

}();