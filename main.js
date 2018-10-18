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
