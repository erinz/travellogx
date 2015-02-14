$(function(){
    var $newPlanForm = $("#new_plan_form");
    var addPlanEndPoint = "http://0.0.0.0:4000/add/plan";

    /**
     * Turn form elements into JSON array
     * @param form
     * @returns {Array}
     */
    function serializeObject(form){
        var data = [];
        var o = {};
        var a = $(form).serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        data.push(o);
        return data;
    }

    $newPlanForm.submit(function(e){
        e.preventDefault();
        var data = serializeObject(this);
        $.ajax(addPlanEndPoint, {
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
