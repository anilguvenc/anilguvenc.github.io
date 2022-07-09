
$(document).ready(function() {
     $.getJSON('translations/en.json', function(info) {
        $('title').text(info.name + " " + info.surname);
        $('#namesurname').html(info.name + " " + info.surname);
     });
});