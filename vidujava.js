// var x1 = document.getElementsByTagName('h1');
// console.log(x1);

// var p = document.getElementsByTagName('p');
// p[1].innerHTML="HELLO 123456789"

function myFunction() {
    var x, text;
  
    // lấy giá trị đầu vào với id numb
    x = document.getElementById("numb").value;
  
    // nếu x không phải số hoặc x <1 hoặc x > 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }
