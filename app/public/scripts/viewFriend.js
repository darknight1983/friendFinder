

$(function() {



  $('.survey-form').on('submit', (e) => {
    e.preventDefault();
    let a1 = $('#q1 option:selected').text()
    let a2 = $('#q2 option:selected').text()
    let a3 = $('#q3 option:selected').text()
    let a4 = $('#q4 option:selected').text()
    let a5 = $('#q5 option:selected').text()
    let a6 = $('#q6 option:selected').text()
    let a7 = $('#q7 option:selected').text()
    let a8 = $('#q8 option:selected').text()
    let a9 = $('#q9 option:selected').text()
    let a10 = $('#q10 option:selected').text()

    // make the post request here!
    $.ajax({
      method: 'POST',
      url: 'api/friends',
      dataType:'json',
      data: {
        name: "John",
        answers: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10]
      }
    }).then((response) => {
      console.log(response)
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
