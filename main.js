axios
  .get("https://s3-us-west-1.amazonaws.com/racooi/template_cheque.css")
  .then(res => {
    console.log(res);
    document.getElementById("file").innerText = res.data;
  })
  .catch(err => {
    throw new Error(err);
  });
