$('#submitComment').click(function() {
  // i am getting element with id submitComment in document of clients.html
  var username = $('#username').val(); // get element with id username and store its value to var username
  var comment = $('#comment').val(); // get element with id comment and store its value to var comment
  var commentBody =  `<div class="media">
                      <div class="media-left">
                        <a href="#">
                          <img class="media-object" src="img/img25.jpg" alt="Profile Picture">
                        </a>
                      </div>
                        <div class="media-body" id="feedbacks">
                          <h4 class="media-heading">  @${username}</h4>
                          <p class="col-black" id="paragraphFeedback">${comment}</p>
                          <hr>
                      </div>
                    </div>`
  if (username == '' || comment == '') {
    $('#input-controls').prepend(`<div id="comment-alert" class="alert alert-danger" role="alert"><b>Username</b> or <b>comment</b> cannot be empty.</div>`)
  } else if (username !== '' && comment !== '') {
    $('#comment-alert').remove();
    $('#feedbacks').append(commentBody); // if values are not empty, then append the commentBody to #comments div
  }
  $('#comment').val('');
  $('#username').val('');
  });

function validateEmail(email) { //Regular expressions for email validation
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      $('#submit-message').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.length < 3) {
          $('#name-group').prepend(`<div id="name-alert" class="alert alert-danger" role="alert"><b>Name</b> should be longer than 3 symbols.</div>`);
        } else if (!validateEmail(email)) {
          $('#email-group').prepend(`<div id="email-alert" class="alert alert-danger" role="alert"><b>Email</b> is invalid.</div>`);
          $('#name-alert').remove();
        } else if (message.split(' ').length < 5) { //split message value into array by spaces, if array contains less than 5 items, then
          $('#email-alert').remove();
          $('#name-alert').remove();
          $('#message-group').prepend(`<div id="message-alert" class="alert alert-danger" role="alert"><b>Message</b> should contain at least 5 words.</div>`);
        } else {
          $('#email-alert').remove();
          $('#name-alert').remove();
          $('#message-alert').remove();
          $('#name-group').prepend(`<div id="success-alert" class="alert alert-success" role="alert">Your message has been successfully sent.</div>`);
        }
      });