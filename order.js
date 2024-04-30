console.log("hello World");

function myfun() {
  var total = 0;
  var perPage;
  var totalPrice = 0;

  let deadline = Number(document.getElementById("paper-topic4").value);
  let academicLevel = Number(document.getElementById("paper-topic2").value);
  // console.log(academicLevel);

  if (academicLevel === 1) {
    perPage = 750;
    totalPrice = document.getElementById("totalprice");
    totalPrice.innerHTML = Number(perPage);
    // console.log("Perpagevalue is " + perPage);
  } else if (academicLevel == 2) {
    perPage = 850;
    // console.log("Perpagevalue is " + perPage);
  } else if (academicLevel == 3) {
    perPage = 950;
    // console.log("Perpagevalue is " + perPage);
  } else {
    console.log("Undefined perpage value");
  }

  // console.log("Deadline value is " + deadline);

  if (deadline == 1) {
    total += perPage;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 2) {
    total = perPage + 100;
    // console.log(perPage);
    // console.log("Cost page price is  " + total);
  } else if (deadline == 3) {
    total = perPage + 250;
    // console.log(perPage);
    // console.log("Cost page price is  " + total);
  } else if (deadline == 4) {
    total = perPage + 450;
    // console.log(perPage);
    // console.log("Cost page price is  " + total);
  } else if (deadline == 5) {
    total = perPage + 650;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 6) {
    total = perPage + 850;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 7) {
    total = perPage + 1050;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 8) {
    total = perPage + 1250;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 9) {
    total = perPage + 1450;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 10) {
    total = perPage + 1650;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 11) {
    total = perPage + 1850;
    // console.log("Cost page price is  " + total);
  } else if (deadline == 12) {
    total = perPage + 2050;
    // console.log("Cost page price is  " + total);
  } else {
    console.log("Undefined Deadline value");
  }

  let selecVal = Number(document.getElementById("paper-topic3").value);
  // console.log("Index Value " + selecVal);

  let TotalPrice = total * selecVal;
  // console.log("Total Price of value is  " + TotalPrice); //850

  totalPrice = document.getElementById("totalprice");
  totalPrice.innerText = TotalPrice;
}

let order = document.getElementById("order_place");

order.addEventListener("click", function (e) {
  e.preventDefault();
  let totalPrice = Number(document.getElementById("totalprice").innerText);

  let pTopic = document.getElementById("paper-topic").value;
  let pType = document.getElementById("paper-type").value;
  let deadline = document.getElementById("paper-topic4").value;
  let noOfPages = document.getElementById("paper-topic3").value;
  let academicLevel = document.getElementById("paper-topic2").value;
  let subject = document.getElementById("subject").value;
  let ref = document.getElementById("reference").value;
  let refStyle = document.getElementById("referenceStyle").value;
  let pFile = document.getElementById("file");
  let pmessage = document.getElementById("message").value;
  let rvalue = document.querySelector('input[name="space"]:checked');

  if (rvalue) {
    // Radio button is selected, you can access its value
    var selectedvalue = rvalue.value;
  } else {
    // No radio button selected, display an error message or take appropriate action
    let error = document.getElementById("error_msg");
    error.style.display = "block";
  }

  if (
    pType.trim() === "" ||
    pTopic.trim() === "" ||
    deadline.trim() === "" ||
    noOfPages.trim() === "" ||
    academicLevel.trim() === "" ||
    subject.trim() === "" ||
    ref.trim() === "" ||
    refStyle.trim() === ""
  ) {
    console.log("Error");
    let error = document.getElementById("error_msg");
    error.style.display = "block";
  } 
  else {


    let xhr = new XMLHttpRequest();
    let formData = new FormData();

    let btn = document.getElementById("order_place");
    btn.value = "submitting...";



    xhr.open("POST", "insert.php", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
          btn.value = "submit";
        document.getElementById("formValue").reset();      
        document.getElementById("formDisplay").style.display = "none";
        document.getElementById("thank_msg").innerHTML = xhr.responseText;
        
      } 
      else {
        console.log("Problem Occured");
      }
      let error = document.getElementById("error_msg")
      error.style.display = "none";
    };

    let mydata = {
      papertopic: pTopic,
      papertype: pType,
      pDeadline: deadline,
      pages: noOfPages,
      academic: academicLevel,
      sub: subject,
      refrence: ref,
      refrenceStyle: refStyle,
      papermsg: pmessage,
      rval: selectedvalue,
      tPrice: totalPrice,
    };
    console.log(mydata);

    formData.append("file", pFile.files[0]);
    formData.append("papertopic", pTopic);
    formData.append("papertype", pType);
    formData.append("pDeadline", deadline);
    formData.append("pages", noOfPages);
    formData.append("academic", academicLevel);
    formData.append("sub", subject);
    formData.append("refrence", ref);
    formData.append("refrenceStyle", refStyle);
    formData.append("papermsg", pmessage);
    formData.append("rval", selectedvalue);
    formData.append("tPrice", totalPrice);

    xhr.send(formData);
  }
  console.log("click hwa");
});
