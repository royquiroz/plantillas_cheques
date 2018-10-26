/*Identificacion del elemento */
let tag;
function elemento(e) {
  if (e.srcElement.className.includes("rotar") && e.target.nodeName === "DIV") {
    tag = e.srcElement.className;
    tag = tag.replace(" rotar", "");
  }

  $("#right").click(function() {
    $(`.${tag}`).css({ left: "+=0.1cm" });
  });

  $("#left").click(function() {
    $(`.${tag}`).css({ left: "-=0.1cm" });
  });

  $("#up").click(function() {
    $(`.${tag}`).css({ top: "-=0.1cm" });
  });

  $("#down").click(function() {
    $(`.${tag}`).css({ top: "+=0.1cm" });
  });
  //else if (e.target) tag = e.target.className;
  //console.log(tag);
}

/* Rotar */
var e = document.getElementsByClassName("rotar");
let rotate = 90;

function toggle_visibility() {
  for (let i = 0; i < e.length; i++) {
    let top = e[i].style.top;
    let left = e[i].style.left;
    if (e[i].style.transform === "rotate(90deg)") {
      e[i].style.transform = "none";
      rotate = 0;
    } else {
      e[i].style.transform = "rotate(90deg)";

      /*if (e[i].className == "fecha rotar") {
        e[i].style.top = left += "1cm";
        e[i].style.left = top;
        console.log(e[i].style.left);
      } else if (e[i].className == "monto_letra rotar") {
        e[i].style.top = left -= "1cm";
        e[i].style.left = top;
      }*/

      e[i].style.top = left;
      e[i].style.left = top;
      rotate = 90;
    }
  }
}

let fecha = document.getElementsByClassName("fecha");
let monto = document.getElementsByClassName("monto");
let beneficiario = document.getElementsByClassName("beneficiario");
let monto_letra = document.getElementsByClassName("monto_letra");

var descargar = document.getElementById("descargar");
var campo = document.getElementById("file");

function mensaje() {
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
    left: ${beneficiario[0].style.left};
    width: 8cm;
    height: 0.5cm;
    text-align: left;
  }
  
  .monto_letra {
    top: ${monto_letra[0].style.top};
    left: ${monto_letra[0].style.left};
    width: 13cm;
    height: 0.5cm;
    text-align: left;
  }`;

  campo.value = css;
}
