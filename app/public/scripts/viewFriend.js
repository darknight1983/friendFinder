

$(function() {


  console.log('jQuery is in the page baby');

   $('#view-friends').on('click', () => {
     console.log('Why are you clicking me');
     $.ajax({
       method: 'GET',
       url: '/api/friends'
     }).then((friends) => {
       console.log(friends)
     })
   })

   $('#survey').on('click', () => {
     console.log("Oh so you want to take the survey eh?")
   })

})
