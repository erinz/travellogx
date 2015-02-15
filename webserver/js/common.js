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