window.onload = pageload;

function pageload() {
  //#region
  var BRegister = document.getElementById("myForm");
  BRegister.onsubmit = CheckPass;
  //#endregion
}

function validateForm() {
  //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function CheckPass() {
  var pass = document.forms["myForm"]["password"];
  var RetryPass = document.forms["myForm"]["Repassword"];

  if (pass.value != RetryPass.value) {
    alert("Password or RetryPassword not same");
    return false;
  } else {
    return true;
  }
}
