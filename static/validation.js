$('#exampleModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
});




$(document).ready(function() {



    $("#removeCategory").click(function() {
        var chkBoxArray = [];
        $('#id:checked').each(function() {

            chkBoxArray.push($(this).val());
        });
        $.post('/deleteCategory', {
                categoryid: chkBoxArray
            },
            function(data, status) {
                console.log("Data: " + data + "\nStatus: " + status);
            });


    });





    $("#removePermission").click(function() {
        var chkBoxArray = [];
        $('#id:checked').each(function() {

            chkBoxArray.push($(this).val());
        });
        $.post('/deletePermission', {
                permissionid: chkBoxArray
            },
            function(data, status) {
                console.log("Data: " + data + "\nStatus: " + status);
            });


    });







    $(function() {
        var form = $(".login-form");

        form.css({
            opacity: 1,
            "-webkit-transform": "scale(1)",
            "transform": "scale(1)",
            "-webkit-transition": ".5s",
            "transition": ".5s"
        });
    });


    $("#allcategories").click(function() {
        $("input:checkbox[name=id]").prop("checked", $('#allcategories').is(':checked'));
    });

    $("button:button[name=updateCategory]").click(function() {
        $("input:text[name=category]").empty();
        $("input:text[name=category]").val($(this).closest('tr').children('td:eq(2)').text());
        $("#categoryid").val($(this).closest('tr').children('td:eq(0)').text());


    });

    $("button:button[name=updatePermission]").click(function() {
        $("input:text[name=permission]").empty();
        $("input:text[name=permission]").val($(this).closest('tr').children('td:eq(2)').text());
        $("#permissionid").val($(this).closest('tr').children('td:eq(0)').text());


    });





    $("#update").click(function() {

        $(function() {
            $('#exampleModal').modal('toggle');
        });

        $.post("/updateCategory", {
                category: $("input:text[name=category]").val(),
                _id: $("#categoryid").val()
            },
            function(data, status) {
                console.log("Data: " + data + "\nStatus: " + status);
            });
    });






    $("#updatePermission").click(function() {

        $(function() {
            $('#exampleModal').modal('toggle');
        });

        $.post("/updatePermission", {
                permission: $("input:text[name=permission]").val(),
                _id: $("#permissionid").val()
            },
            function(data, status) {
                console.log("Data: " + data + "\nStatus: " + status);
            });
    });









});
