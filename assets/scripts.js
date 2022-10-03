
$(document).ready(function() {
   var w = window.innerWidth;
   var h = window.innerHeight;
   document.getElementById("A4").style = `transform: scale(${2100/w})`;
     $.getJSON('translations/en.json', function(info) {
         $('title').text(info.page_title);
         $('#namesurname').html(info.name + " " + info.surname);
         $('#introduction_title').html(info.introduction_title);
         $('#introduction').html(info.introduction);
         $('#contact_title').html(info.contact.title);
         $('#contact_address').html(info.contact.address);
         $('#contact_location').html(info.contact.location);
         $('#contact_phone').html(info.contact.phone_title + info.contact.phone);
         $('#contact_email').html(info.contact.email_title + info.contact.email);
         $.each(info.contact.socials, function(i,item) {
            $('#contact_social').append('<div id="contact_social" class="contact_social">' + item.title + " " + '<a href="' + item.url + '" target="_blank">' + item.username + '</a></div>');
         });
         $('#contact_social').html(info.contact.social);
         $('#contact_copyright').html(info.contact.copyright);
        $.each(info.experiences, function(i,item){
         $('#experiences').append('<p>' + item.company + '</p>');
         });
     });
});

