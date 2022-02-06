


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(
    function(response) {
      response.json().then (
        function(data){
          console.log(data);
        }
      )
    }
  )