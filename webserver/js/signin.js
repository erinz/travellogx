$(function(){
    var $newUserForm = $("#create_account_form");
    var addUserEndPoint = "http://0.0.0.0:4000/user/signup";

    $newUserForm.submit(function(e){
        e.preventDefault();
        var data = serializeObject(this);
        $.ajax(addUserEndPoint, {
            type: 'POST',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            error: function(request, errorType, errorMessage){
                console.log("error");
                console.log("request:" + request);
                console.log("errorType:" + errorType);
                console.log("errorMessage:" + errorMessage);
            },
            success: function(response){
                console.log("success:" + response);
            }
        });
    });
});
