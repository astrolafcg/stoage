let original = {
    name: "Jeffrey",
    lastname: "Lebowski",
    game: "bowling",
    nickname: "dude",
};
console.log(original);
let cadena = JSON.stringify(original);
console.log(cadena);
localStorage.setItem("TheDude", cadena);
let copiaCodificada = localStorage.getItem("TheDude");
console.log(copiaCodificada);
let objetoDecodificado = JSON.parse(copiaCodificada);
console.log(objetoDecodificado);
console.log(objetoDecodificado.name + " " + objetoDecodificado.lastname);
localStorage.removeItem("TheDude");


//--------------------------------------------------------------------------------
document.cookie = "name=Walter";
document.cookie = "name=Walter; expires=" + new Date(2030, 0, 1).toUTCString();
document.cookie = "lastName=Sobchak; expires=" + new Date(9999, 0, 1).toUTCString();
console.log(document.cookie)