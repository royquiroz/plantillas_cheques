let fecha = document.getElementsByClassName("fecha");
let monto = document.getElementsByClassName("monto");
let beneficiario = document.getElementsByClassName("beneficiario");
let monto_letra = document.getElementsByClassName("monto_letra");

var descargar = document.getElementById("descargar");
var campo = document.getElementById("file");

/* Rotar */
var e = document.getElementsByClassName("rotar");
let rotate = 90;

/*Funcion de rotar*/
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
      rotate = 90;
    }
  }
}

/*Identificacion del elemento*/
let tag;
function elemento(e) {
  if (
    e.srcElement.className.includes("rotar") &&
    e.target.nodeName === "SPAN"
  ) {
    tag = e.srcElement.className;
    tag = tag.replace(" rotar", "");
  }
  let element = $(`.${tag}`);

  $("#right")
    .unbind("click")
    .click(function() {
      let right = (parseFloat(element[0].style.left) + 0.1).toFixed(1) + "cm";
      $(`.${tag}`).css({ left: right });
    });

  $("#left")
    .unbind("click")
    .click(function() {
      let left = (parseFloat(element[0].style.left) - 0.1).toFixed(1) + "cm";
      $(`.${tag}`).css({ left: left });
    });

  $("#up")
    .unbind("click")
    .click(function() {
      let up = (parseFloat(element[0].style.top) - 0.1).toFixed(1) + "cm";
      $(`.${tag}`).css({ top: up });
    });

  $("#down")
    .unbind("click")
    .click(function() {
      let down = (parseFloat(element[0].style.top) + 0.1).toFixed(1) + "cm";
      $(`.${tag}`).css({ top: down });
    });
}

function selectCheque() {
  let banco = document.getElementById("banco").value;
  console.log(banco);

  if (banco === "banamex") {
    fecha[0].style.top = "11cm";
    fecha[0].style.left = "12cm";

    monto[0].style.top = "12.5cm";
    monto[0].style.left = "11cm";

    beneficiario[0].style.top = "4cm";
    beneficiario[0].style.left = "11cm";

    monto_letra[0].style.top = "3cm";
    monto_letra[0].style.left = "10cm";
  } else if (banco === "bancomer") {
    fecha[0].style.top = "10cm";
    fecha[0].style.left = "11cm";

    monto[0].style.top = "11.5cm";
    monto[0].style.left = "10cm";

    beneficiario[0].style.top = "3.5cm";
    beneficiario[0].style.left = "10cm";

    monto_letra[0].style.top = "3cm";
    monto_letra[0].style.left = "10cm";
  }
}

/*Funcion para mostrar en pantalla el CSS*/
function mensaje() {
  let montoLetra_left = monto_letra[0].style.left;
  let beneficiario_left = beneficiario[0].style.left;

  let fecha_top = fecha[0].style.top;
  let monto_top = monto[0].style.top;
  let beneficiario_top = beneficiario[0].style.top;
  let montoLetra_top = monto_letra[0].style.top;

  if (e[0].style.transform === "rotate(90deg)") {
    /*Top de elementos en 90grados */
    fecha_top = parseFloat(fecha[0].style.top.replace(/cm/, "")) - 2 + "cm";
    monto_top = parseFloat(monto[0].style.top.replace(/cm/, "")) - 2 + "cm";
    beneficiario_top =
      parseFloat(beneficiario[0].style.top.replace(/cm/, "")) - 2 + "cm";
    montoLetra_top =
      parseFloat(monto_letra[0].style.top.replace(/cm/, "")) - 2 + "cm";

    /*Left de elementos en 90grados */
    beneficiario_left =
      parseFloat(beneficiario[0].style.left.replace(/cm/, "")) + 2 + "cm";
    montoLetra_left =
      parseFloat(monto_letra[0].style.left.replace(/cm/, "")) + 4 + "cm";
  } else {
    /*Top de elementos en 0grados */
    fecha_top = parseFloat(fecha[0].style.top.replace(/cm/, "")) + 2 + "cm";
    monto_top = parseFloat(monto[0].style.top.replace(/cm/, "")) + 2 + "cm";
    beneficiario_top =
      parseFloat(beneficiario[0].style.top.replace(/cm/, "")) + 2 + "cm";
    montoLetra_top =
      parseFloat(monto_letra[0].style.top.replace(/cm/, "")) + 2 + "cm";

    /*Left de elementos en 0grados */
    beneficiario_left =
      parseFloat(beneficiario[0].style.left.replace(/cm/, "")) - 2 + "cm";
    montoLetra_left =
      parseFloat(monto_letra[0].style.left.replace(/cm/, "")) - 4 + "cm";
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
    top: ${fecha_top};
    left: ${fecha[0].style.left};
    width: 5cm;
    height: 0.5cm;
    text-align: center;
  }
  
  .monto {
    top: ${monto_top};
    left: ${monto[0].style.left};
    width: 4cm;
    height: 0.5cm;
    text-align: center;
  }

  .beneficiario {
    top: ${beneficiario_top};
    left: ${beneficiario_left};
    width: 8cm;
    height: 0.5cm;
    text-align: left;
  }
  
  .monto_letra {
    top: ${montoLetra_top};
    left: ${montoLetra_left};
    width: 13cm;
    height: 0.5cm;
    text-align: left;
  }`;

  campo.value = css;
}

/*Checkbox*/
$(".ui.checkbox").checkbox();
