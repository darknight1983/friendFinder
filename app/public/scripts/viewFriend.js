


$(function() {



  $('#survey-form').on('submit', (e) => {
    e.preventDefault();
    let user = $('#GET-name').val().trim();
    let photoLink = $('#GET-photoUrl').val().trim();
    let a1 = $('#q1').val().trim();
    let a2 = $('#q2').val().trim();
    let a3 = $('#q3').val().trim();
    let a4 = $('#q4').val().trim();
    let a5 = $('#q5').val().trim();
    let a6 = $('#q6').val().trim();
    let a7 = $('#q7').val().trim();
    let a8 = $('#q8').val().trim();
    let a9 = $('#q9').val().trim();
    let a10 = $('#q10').val().trim();

    let newFriend = {
      "name": user,
      "photo": photoLink,
      "scores": [ a1, a2, a3, a4, a5, a6, a7, a8, a9, a10 ]
    }
    console.log(newFriend)
    // make the post request here!
    $.post('/api/friends', newFriend)
      .done((response) => {
        console.log(response)
      $('.survey-form').html('');
      let match = `
        <div class="pic">
          <img src="${response.img}"/>
          <h3>Name: ${response.match}</h3>
          <p>This is your match!</p>
        </div>
      `
      $('.survey-form').html(match);
    })
  })



   $('#view-friends').on('click', () => {
     console.log('Why are you clicking me');
     $.ajax({
       method: 'GET',
       url: '/api/friends'
     }).then((friends) => {
       console.log(friends)
     })
   })

   // The event listener for this button really seems uncessary since all
   // pages for this website are served by express as static assets.
   $('#survey').on('click', () => {
     console.log("Oh so you want to take the survey eh?");
     $.ajax({
       method: 'GET',
       url: '/survey'
     }).then((survey) => {
       console.log(survey)
     })
   })

})
