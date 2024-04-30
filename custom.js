console.log("hello World");

function myfun() {
  
var total = 0;
var perPage;
  let totalPrice;

  let deadline = Number(document.getElementById("paper-topic4").value);
  let academicLevel = Number(document.getElementById("paper-topic2").value);
  console.log(academicLevel);

  if (academicLevel === 1) {
    perPage = 750;
    totalPrice = document.getElementById("totalprice");
    totalPrice.innerHTML = Number(perPage);
    console.log("Perpagevalue is " + perPage);
  } else if (academicLevel == 2) {
    perPage = 850;
    console.log("Perpagevalue is " + perPage);
  } else if (academicLevel == 3) {
    perPage = 950;
    console.log("Perpagevalue is " + perPage);
  } else {
    console.log("Undefined perpage value");
  }


  // console.log("Deadline value is " + deadline);



  if (deadline == 1) {
    total += perPage;
    console.log("Cost page price is  " + total);
  } else if (deadline == 2) {
    total = perPage + 100;
    console.log(perPage);
    console.log("Cost page price is  " + total);
  } else if (deadline == 3) {
    total = perPage + 250;
    console.log(perPage);
    console.log("Cost page price is  " + total);
  } else if (deadline == 4) {
    total = perPage + 450;
    console.log(perPage);
    console.log("Cost page price is  " + total);
  } else if (deadline == 5) {
    total = perPage + 650;
    console.log("Cost page price is  " + total);
  } else if (deadline == 6) {
    total = perPage + 850;
    console.log("Cost page price is  " + total);
  } else if (deadline == 7) {
    total = perPage + 1050;
    console.log("Cost page price is  " + total);
  } else if (deadline == 8) {
    total = perPage + 1250;
    console.log("Cost page price is  " + total);
  } else if (deadline == 9) {
    total = perPage + 1450;
    console.log("Cost page price is  " + total);
  } else if (deadline == 10) {
    total = perPage + 1650;
    console.log("Cost page price is  " + total);
  } else if (deadline == 11) {
    total = perPage + 1850;
    console.log("Cost page price is  " + total);
  } else if (deadline == 12) {
    total = perPage + 2050;
    console.log("Cost page price is  " + total);
  } else {
    console.log("Undefined Deadline value");
  }

  let selecVal = Number(document.getElementById("paper-topic3").value);
  // console.log("Index Value " + selecVal);

  let TotalPrice = total * selecVal;
  console.log("Total Price of value is  " + TotalPrice); //850

  totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = TotalPrice;

}

function getVal(e) {
  e.preventDefault();
  let deadline = Number(document.getElementById("paper-topic4").value);
  let academicLevel = Number(document.getElementById("paper-topic2").value);
  if(academicLevel = ""){
    document.getElementById("error_msg").innerHTML = "Please file require filled*"
  }
  console.log(academicLevel);
  console.log(total)
  console.log(perPage)


}
