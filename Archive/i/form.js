var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Success, thanks for the message!";
        status.classList.add("success");
        form.reset()
        setTimeout(function() {
            status.innerHTML = "";
            status.classList.remove("success");
        }, 4000 )

      }).catch(error => {
        status.innerHTML = "Error: Form not Submitted";
        status.classList.add("error");
        setTimeout(function() {
            status.innerHTML = "";
            status.classList.remove("error");
        }, 4000 )
      });
    }
    form.addEventListener("submit", handleSubmit)