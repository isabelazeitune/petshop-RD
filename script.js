let listaDiv = document.querySelectorAll("div");
let div = document.getElementById("caixa1");
let body = document.querySelector("body")

div.style.color = "green";

listaDiv.forEach((div, index) => div.style.backgroundColor = "red");

div.removeAttribute("id");

let section = document.createElement("section"); // criou mas não colocou em lugar nenhum
section.textContent = "Olá meu povo"; // coloca como conteúdo de section o texto
section.setAttribute("class", "content minhaclasse olha meu deus") // fazer classes na section
body.removeChild(div);
body.appendChild(section)
console.log(section) // imprime section no console