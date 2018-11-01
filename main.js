let fecha = document.getElementsByClassName("fecha");
let monto = document.getElementsByClassName("monto");
let beneficiario = document.getElementsByClassName("beneficiario");
let monto_letra = document.getElementsByClassName("monto_letra");

var descargar = document.getElementById("descargar");
var campo = document.getElementById("file");

/* Rotar */
var e = document.getElementsByClassName("rotar");
let rotate = 90;

function toggle_visibility() {
  for (let i = 0; i < e.length; i++) {
    let top = e[i].style.top;
    let left = e[i].style.left;
    if (e[i].style.transform === "rotate(90deg)") {
      e[i].style.transform = "none";
      e[i].style.top = left;
      e[i].style.left = top;
      rotate = 0;
    } else {
      e[i].style.transform = "rotate(90deg)";
      e[i].style.top = left;
      e[i].style.left = top;

      /*if (e[i].className == "fecha rotar") {
        e[i].style.top =
          parseFloat(e[i].style.top.replace(/cm/, "")) + 1 + "cm";
        //e[i].style.top += "10cm";
      }*/
      rotate = 90;
    }
  }
}

/*Identificacion del elemento */
let tag;
function elemento(e) {
  if (e.srcElement.className.includes("rotar") && e.target.nodeName === "DIV") {
    tag = e.srcElement.className;
    tag = tag.replace(" rotar", "");
  }

  let element = $(`.${tag}`);

  $("#right").on("click", function() {
    let right = (parseFloat(element[0].style.left) + 0.1).toFixed(1) + "cm";
    console.log(right);
    $(`.${tag}`).css({ left: right });
  });

  $("#left").on("click", function() {
    let left = (parseFloat(element[0].style.left) - 0.1).toFixed(1) + "cm";
    console.log(left);
    $(`.${tag}`).css({ left: left });
  });

  $("#up").on("click", function() {
    let up = (parseFloat(element[0].style.top) - 0.1).toFixed(1) + "cm";
    console.log(up);
    $(`.${tag}`).css({ top: up });
  });

  $("#down").on("click", function() {
    let down = (parseFloat(element[0].style.top) + 0.1).toFixed(1) + "cm";
    console.log(down);
    $(`.${tag}`).css({ top: down });
  });

  console.log("Top", element[0].style.top);
  console.log("Left", element[0].style.left);
}

function mensaje() {
  let montoLetra_left = monto_letra[0].style.left;
  let beneficiario_left = beneficiario[0].style.left;

  if (e[0].style.transform === "rotate(90deg)") {
    beneficiario_left =
      parseFloat(beneficiario[0].style.left.replace(/cm/, "")) + 2 + "cm";
    montoLetra_left =
      parseFloat(monto_letra[0].style.left.replace(/cm/, "")) + 5 + "cm";
  } else {
    beneficiario_left =
      parseFloat(beneficiario[0].style.left.replace(/cm/, "")) - 2 + "cm";
    montoLetra_left =
      parseFloat(monto_letra[0].style.left.replace(/cm/, "")) - 5 + "cm";
  }

  let css = `.rotar {
    border: 0px solid #dfdfdf;
    position: absolute;
    margin: 0;
    rotate: ${rotate};
  }
  
  img {
    width: 16.5cm;
    height: 7cm;
    display: none;
  }
  
  .cheque {
    left: 6.25cm;
    top: 0mm;
    width: 16.5cm;
    height: 7cm;
  }
  
  .fecha {
    top: ${fecha[0].style.top};
    left: ${fecha[0].style.left};
    width: 5cm;
    height: 0.5cm;
    text-align: center;
  }
  
  .monto {
    top: ${monto[0].style.top};
    left: ${monto[0].style.left};
    width: 4cm;
    height: 0.5cm;
    text-align: center;
  }

  .beneficiario {
    top: ${beneficiario[0].style.top};
    left: ${beneficiario_left};
    width: 8cm;
    height: 0.5cm;
    text-align: left;
  }
  
  .monto_letra {
    top: ${monto_letra[0].style.top};
    left: ${montoLetra_left};
    width: 13cm;
    height: 0.5cm;
    text-align: left;
  }`;

  campo.value = css;
}

/*$('#button1, #button2, #button3, #button4').click(function(event){ 
  if($(event.target).attr('id')=='button1'){
      
  } else if($(event.target).attr('id')=='button2'){
      
  } else if($(event.target).attr('id')=='button3'){
      
  } else if($(event.target).attr('id')=='button4'){
      
  } 
});*/
