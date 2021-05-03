var x = process.argv.slice(2);

var i;
var output = "";

for (i = 0; i < x.length; i++) {
  var digit = ("" + x[i]).split("");
  var j;
  var number_string = "";
  for (j = 0; j < digit.length; j++) {
    var str;
    switch (digit[j]) {
      case "0":
        str = "Zero";
        break;
      case "1":
        str = "One";
        break;
      case "2":
        str = "Two";
        break;
      case "3":
        str = "Three";
        break;
      case "4":
        str = "Four";
        break;
      case "5":
        str = "Five";
        break;
      case "6":
        str = "Six";
        break;
      case "7":
        str = "Seven";
        break;
      case "8":
        str = "Eight";
        break;
      case "9":
        str = "Nine";
        break;
      
    }
    number_string = number_string + str;
  }
  if (x.length == i + 1) {
    output = output + number_string;
  } else output = output + number_string + ", ";
}

console.log(output);
