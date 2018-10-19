/*axios
  .get("https://s3-us-west-1.amazonaws.com/racooi/template_cheque.css")
  .then(res => {
    console.log(res);
    document.getElementById("file").innerText = res.data;
  })
  .catch(err => {
    throw new Error(err);
  });
*/

/* Codigo Jquery */
/* Fecha */
$("#fecha-right").click(function() {
  $(".fecha").css({ left: "+=0.1cm" });
});

$("#fecha-left").click(function() {
  $(".fecha").css({ left: "-=0.1cm" });
});

$("#fecha-up").click(function() {
  $(".fecha").css({ top: "-=0.1cm" });
});

$("#fecha-down").click(function() {
  $(".fecha").css({ top: "+=0.1cm" });
});

/* Monto */
$("#monto-right").click(function() {
  $(".monto").css({ left: "+=0.1cm" });
});

$("#monto-left").click(function() {
  $(".monto").css({ left: "-=0.1cm" });
});

$("#monto-up").click(function() {
  $(".monto").css({ top: "-=0.1cm" });
});

$("#monto-down").click(function() {
  $(".monto").css({ top: "+=0.1cm" });
});

/* Beneficiario */
$("#beneficiario-right").click(function() {
  $(".beneficiario").css({ left: "+=0.1cm" });
});

$("#beneficiario-left").click(function() {
  $(".beneficiario").css({ left: "-=0.1cm" });
});

$("#beneficiario-up").click(function() {
  $(".beneficiario").css({ top: "-=0.1cm" });
});

$("#beneficiario-down").click(function() {
  $(".beneficiario").css({ top: "+=0.1cm" });
});

/* Monto Letra */
$("#monto-letra-right").click(function() {
  $(".monto_letra").css({ left: "+=0.1cm" });
});

$("#monto-letra-left").click(function() {
  $(".monto_letra").css({ left: "-=0.1cm" });
});

$("#monto-letra-up").click(function() {
  $(".monto_letra").css({ top: "-=0.1cm" });
});

$("#monto-letra-down").click(function() {
  $(".monto_letra").css({ top: "+=0.1cm" });
});

/* Rotar */
function toggle_visibility() {
  var e = document.getElementsByClassName("rotar");
  for (let i = 0; i < e.length; i++) {
    if (e[i].style.transform === "rotate(90deg)") e[i].style.transform = "none";
    else e[i].style.transform = "rotate(90deg)";
  }
}

let fecha = document.getElementsByClassName("fecha");
console.log(fecha[0].style.left);

let css = `.rotar {
    border: 1px solid #dfdfdf;
    position: absolute;
    margin: 0;
    rotate: 90;
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
    top: 12cm;
    left: 10.2cm;
    width: 4cm;
    height: 0.5cm;
    text-align: center;
  }

  .beneficiario {
    top: 3.5cm;
    left: 10.1cm;
    width: 8cm;
    height: 0.5cm;
    text-align: left;
  }
  
  .monto_letra {
    top: 2.5cm;
    left: 9.3cm;
    width: 13cm;
    height: 0.5cm;
    text-align: left;
  }`;

var elem = document.getElementById("descargar");

elem.download = "template_cheque.css";
elem.href = "data:application/octet-stream," + encodeURIComponent(css);
