document.querySelector('button').addEventListener('click', register);
let input = document.querySelector('input');

window.addEventListener('load', () => {
    nameInput = "";
    inputSurname = "";
    birthDay = "";
    birthPlace = "";
    passportDate = "";
})

 input.addEventListener('focus', () => {
    let cookies = document.cookie.split(';');
    console.log(cookies);

    for (let cookie of cookies) {
        if(cookie.startsWith('info=')){
            const data = cookie.substring(5) 
            console.log(data);
            let object = JSON.parse(data);
            console.log(object);
            document.querySelector('#input_name').value = object.name;
            document.querySelector('#input_surname').value = object.surname;
            document.querySelector('#birth-day').value = object.birhday;
            document.querySelector('#birth_place').value = object.birthplace;
            document.querySelector('#passport_data').value = object.passportdate;
      
        }
    } 
})

function register(event) {
    event.preventDefault();

    let nameInput = document.querySelector('#input_name').value;
    let inputSurname = document.querySelector('#input_surname').value;
    let birthDay = document.querySelector('#birth-day').value;
    let birthPlace = document.querySelector('#birth_place').value;
    let passportDate = document.querySelector('#passport_data').value;
      

          const sourceObject = {
            name: nameInput,
            surname: inputSurname,
            birhday: birthDay,
            birthplace: birthPlace,
            passportdate: passportDate
        }


        document.cookie = `info=${JSON.stringify(sourceObject)}`;
}
