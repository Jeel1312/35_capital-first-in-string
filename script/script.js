function cap() {

    let a = document.getElementById('a').value;

    let b = a.charAt(0  ).toUpperCase() + a.slice(1);

    document.getElementById("Capitalize").innerHTML ="Capitalized String : " + b;
}

