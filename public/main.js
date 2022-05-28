const droplet = document.getElementsByClassName("fa-droplet");
const trash = document.getElementsByClassName("fa-trash");

Array.from(droplet).forEach(function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault()
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const day = this.parentNode.parentNode.childNodes[3].innerText
    const water = e.target.classList.contains('blue') ? true : false
    fetch('wateredPlant', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'day': day,
          'watered': water
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const day = this.parentNode.parentNode.childNodes[3].innerText
    fetch('items', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'day': day,
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});
