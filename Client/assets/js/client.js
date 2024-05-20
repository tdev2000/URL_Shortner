const submitBtn = document.getElementById('submit_btn');
const orginalUrl = document.getElementById('orginalUrl');
const resultURL = document.getElementById('resultURL');
resultURL.style.display = "none";

submitBtn.addEventListener('click', function () {
    const Urlvalue = orginalUrl.value;
    
    if (Urlvalue != " ") {
        const URL = 'http://localhost:3001/api/get-short-url?longURL=' + Urlvalue;

        fetch(URL).then(async function (res) {
            const data = await res.json();
            
            resultURL.style.display = "block";

            console.log(data.response);
            resultURL.innerHTML = data.response; 
            resultURL.href = data.response;
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });
    }
    else {
        console.log("value not found !")
    }
});