
let einsteinRequest = new XMLHttpRequest();
einsteinRequest.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
 let newObj= JSON.parse(this.responseText);
 document.getElementById("einsteinName").innerHTML = newObj.name;
 document.getElementById("einsteinBirth").innerHTML = newObj.birthday;
    }
};

einsteinRequest.open("GET", "einstein.json", true);
einsteinRequest.send();

function loadBio() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let newObj = JSON.parse(this.responseText);
            document.getElementById("einsteinBio").innerHTML = newObj.bio;
        }
    };
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
}
