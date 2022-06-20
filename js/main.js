const form = document.querySelector('.wrapper form'),
    fullUrl = document.querySelector('input'),
    shortenBtn = document.querySelector('button');


form.onsubmit = (e) => {
    e.preventDefault();
}

shortenBtn.addEventListener('click', function(e) {
    //ajax request
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/url_controll.php', true);
    xhr.onload = () => {
        //if ajax request status is ok or success
        if (xhr.status === 200 && xhr.readyState === 4) {
            let data = xhr.response;
            console.log(data);
        }

        //send form data to php file
        let formData = new FormData(form);
    }
    
    xhr.send(formData);
});