const formEL = document.getElementById('login-post')

formEL.addEventListener('submit', event=>{
    event.preventDefault();
    console.log('1');

    const formData = new FormData(formEL);
    console.log(formData.get('msg'))
    const data = Object.fromEntries(formData);

    console.log(data);

     fetch( 'https://crudcrud.com/api/39833eed03154a5aafaf9b1c44187b9d/user' , {
        method: 'POST', 
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data) 
    })

})
