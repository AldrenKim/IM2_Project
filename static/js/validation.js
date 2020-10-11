function validateForm() {
    var zip = document.forms["myForm"]["zipp"].value.length;
    if (zip > 4 || zip < 4) {
        console.log("Zip error");
      alert("Zip code must have 4 integers");
      return false;
    }

    
    var phone = document.forms["myForm"]["phone"].value.length;
    if (phone > 11 || phone < 11) {
        console.log("Phone error");
      alert("Phone number must have 11 integers");
      return false;
    }




    var lname = document.forms["myForm"]["lastname"].value.length;
    if (lname < 2) {
      alert("Lastname too short");
      return false;
    }
    if (lname >= 50) {
      alert("Lastname too long!");
      return false;
    }

    var fname = document.forms["myForm"]["firstname"].value.length;
    if (fname < 2) {
      alert("Firstname too short");
      return false;
    }
    if (fname >= 50) {
      alert("Firstname too long!");
      return false;
    }

    var spouse = document.forms["myForm"]["spouse"].value.length;
    if (spouse < 2) {
      alert("Spouse's name too short");
      return false;
    }
    if (spouse >= 50) {
      alert("Spouse's name too long!");
      return false;
    }

    var street = document.forms["myForm"]["street"].value.length;
    if (street < 2) {
      alert("Street input too short");
      return false;
    }
    if (street >= 25) {
      alert("Street input too long!");
      return false;
    }

    var brgy = document.forms["myForm"]["brgy"].value.length;
    if (brgy < 2) {
      alert("Brgy input too short");
      return false;
    }
    if (brgy >= 25) {
      alert("Brgy input too long!");
      return false;
    }

    var province = document.forms["myForm"]["province"].value.length;
    if (province < 2) {
      alert("Province input too short");
      return false;
    }
    if (province >= 25) {
      alert("Province input too long!");
      return false;
    }
}

// function validateUpdateForm() {
//   var zip = document.forms["updateForm"]["zip"].value.length;
//   if (zip > 4 || zip < 4) {
//       console.log("Zip error");
//     alert("Zip code must have 4 integers");
//     return false;
//   }

  
//   var phone = document.forms["updateForm"]["phone"].value.length;
//   if (phone > 11 || phone < 11) {
//       console.log("Phone error");
//     alert("Phone number must have 11 integers");
//     return false;
//   }




//   var lname = document.forms["updateForm"]["lastname"].value.length;
//   if (lname < 2) {
//     alert("Lastname too short");
//     return false;
//   }
//   if (lname >= 50) {
//     alert("Lastname too long!");
//     return false;
//   }

//   var fname = document.forms["updateForm"]["firstname"].value.length;
//   if (fname < 2) {
//     alert("Firstname too short");
//     return false;
//   }
//   if (fname >= 50) {
//     alert("Firstname too long!");
//     return false;
//   }

//   var spouse = document.forms["updateForm"]["spouse"].value.length;
//   if (spouse < 2) {
//     alert("Spouse's name too short");
//     return false;
//   }
//   if (spouse >= 50) {
//     alert("Spouse's name too long!");
//     return false;
//   }

//   var street = document.forms["updateForm"]["street"].value.length;
//   if (street < 2) {
//     alert("Street input too short");
//     return false;
//   }
//   if (street >= 25) {
//     alert("Street input too long!");
//     return false;
//   }

//   var brgy = document.forms["updateForm"]["brgy"].value.length;
//   if (brgy < 2) {
//     alert("Brgy input too short");
//     return false;
//   }
//   if (brgy >= 25) {
//     alert("Brgy input too long!");
//     return false;
//   }

//   var province = document.forms["updateForm"]["province"].value.length;
//   if (province < 2) {
//     alert("Province input too short");
//     return false;
//   }
//   if (province >= 25) {
//     alert("Province input too long!");
//     return false;
//   }
// }

function validateProdForm(){
  const colors = ['black', 'red', 'blue', 'yellow', 'green', 'gray', 'purple','pink'];
  var name = document.forms["myform"]["productName"].value.length;
  if(name>=21 || name <2){
    alert("Product name must be 2-20 characters!");
    return false;
  }

  var brand = document.forms["myform"]["brand"].value.length;
  if(brand>11){
    alert("Product brand name too long!");
    return false;
  }

  var colorss = document.forms["myform"]["color"].value;
  if(checkColor(colors,colorss.toLowerCase())==false){
    alert("Color not valid");
    return false;
  }

  var size = document.forms["myform"]["size"].value;
  if(checkNum(size)==true){
    if(size.length==0)
    {
      alert("Input product size");
      return false;
    }
    if(size.length>5){
      alert("Size too large, must be at most 5 characters.");
      return false;
    }
    
  }
  else{
    alert("Size must consist of numbers.");
    return false;
  }
  var price = document.forms["myform"]["price"].value;
  if(checkNum(price)==false){
    alert("Price must consist of numbers.");
    return false;
  }
  else{
    if(price.length==0){
      alert("Input product's price.");
      return false;
    }
  }

  var stocks = document.forms["myform"]["stocks"].value;
  if(checkNum(stocks)==false){
    alert("Stocks must consist of numbers.");
    return false;
  }
  else{
    if(stocks.length==0){
      alert("Size too large, must be at most 5 characters.");
      return false;
    }
  }


  var cat = document.getElementById('category').value;
  if(cat==""){
    alert("Oh, you might have missed setting the category!");
    return false;
  }
}

function checkColor(colors, item){
  for(i=0;i<colors.length;i++){
    if(colors[i]==item)
      return true;
  }
  return false;
}

function checkNum(x){
  for(i=0;i<price.length;i++){
    if(price.charCodeAt(i)>=48 && price.charCodeAt(i)<=58){
      return true;
    }
  }
  return false;
}