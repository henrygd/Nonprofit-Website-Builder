$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var subject = $("input#subject").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val().replace(/\n/g,"<br>");
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                type: "POST",
                  url: "https://mandrillapp.com/api/1.0/messages/send.json",
                  data: {
                    'key': '5zFFaXjElKmZ_aDTNJfvNA',
                    'message': {
                      'from_email': email,
                      "from_name": name,
                      'to': [
                          {
                            'email': 'hank@henrygd.me',
                            'type': 'to'
                          }
                        ],
                      'autotext': 'true',
                      'subject': subject,
                      'html': '<h2>New contact form submission from <span style="color:#60A066">'+name+'</span></h2><p>'+message+'</p>',
                    }
                  },
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<p>Your message has been sent. Thank you, " + firstName + "!</p>");
                    $('#success > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<p>Sorry " + firstName + ", it seems that our mail server is not responding. Please email us directly!</p>");
                    $('#success > .alert-danger').append('</div>');
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
