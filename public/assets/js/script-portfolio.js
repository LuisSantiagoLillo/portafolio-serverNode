

//SCRIPT SIDENAV -H2
/*
function sidenavAccionOver(e){
    if(e.target.id ="about"){
        document.getElementById("sideNav_A").style.display = ("none");
    }
}

function sidenavAccionOut(e){
    if(e.target.id ="about"){
        let h2 = document.getElementById("sideNav_A");
        h2.style.display = ("inline-block");
    }
}
*/

const webSites = new Array('W', 'e', 'b', ' ', 'S', 'i', 't', 'e', 's', '.','','', '','','','');
const webApplicatios = new Array('W', 'e', 'b', ' ', 'A', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's', '.','','', '','','','','');
const userInterfaces = new Array('U', 's', 'e', 'r', ' ', 'I', 'n', 't', 'e', 'r', 'f', 'a', 'c', 'e', 's', '.','','', '','','','','')
let num = 0;
let num2 = 1;
let cont = 0;

function comenzar(){
    //alert("kdd");
    setInterval('escribir_webSites()', 250);
    setInterval('lista_activa()', 2000);


}

function escribir_webSites(){
    if(cont === 0){
        document.getElementById("message").innerHTML += webSites[num];
        num++;
        if(num === webSites.length - 1){
            document.getElementById("message").className = 'display-3 text-white bg-dark';
        }
        if(num === webSites.length){
            num=0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';
            cont++; //SUMAR CONTADOR EXCEPTO EL ULTIMO QUE LO PONDRA A 0
        };
    }

    if(cont === 1){
        document.getElementById("message").innerHTML += webApplicatios[num];
        num++;
        if(num === webApplicatios.length - 1){
            document.getElementById("message").className = 'display-3 text-white bg-dark';
        }
        if(num === webApplicatios.length){
            num=0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';

            cont++;
        };
    }

    if(cont === 2){
        document.getElementById("message").innerHTML += userInterfaces[num];
        num++;
        if(num === userInterfaces.length - 1){
            document.getElementById("message").className = 'display-3 text-white bg-dark';
        }
        if(num === userInterfaces.length){
            num=0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';

            cont = 0; //EL ULTIMO SIEMPRE PONE A CERO EL CONTADOR
        };
    }


}



function lista_activa(){   
    num2++; 
    if(num2 === 1){
        document.getElementById("li1").className = 'list-group-item active';
        document.getElementById("li2").className = 'list-group-item';
        document.getElementById("li3").className = 'list-group-item';
    }
    if(num2 === 2){
        document.getElementById("li1").className = 'list-group-item';
        document.getElementById("li2").className = 'list-group-item active';
        document.getElementById("li3").className = 'list-group-item';
    }
    if(num2 === 3){
        document.getElementById("li1").className = 'list-group-item';
        document.getElementById("li2").className = 'list-group-item';
        document.getElementById("li3").className = 'list-group-item active';
    }

    if(num2 === 3){num2=0;}

}

window.onload = comenzar();


