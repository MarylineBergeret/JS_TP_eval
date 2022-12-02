let buttAdd = document.querySelector('button#button');
let buttDeleteAll = document.querySelector("button#deleteAll");
let tab = new Array;

buttAdd.addEventListener('click', function(){
    let ulList = document.querySelector("ul");
    let li = document.createElement('li');

    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let age = document.getElementById('age').value;

    li.textContent = nom + ", " + prenom + ", " + age;
    ulList.append(li);

    let tabs = new Array;
    tabs.push("Nom: " + nom, "Prenom: " + prenom, "Age: " + age);
    tab.push(tabs);
    console.log(tab);
});
buttDeleteAll.addEventListener("click", function(){
    let divs = this.parentElement;
    divs.remove();

});


