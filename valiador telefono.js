function telephoneCheck(str) {

var result = false;
  var RegexCheck = [
    /^\d\d\d[-]\d\d\d[-]\d\d\d\d$/,               //10
    /^[(]\d\d\d[)]\d\d\d[-]\d\d\d\d$/,            //10
    /^[(]\d\d\d[)][ ]\d\d\d[-]\d\d\d\d$/,         //10
    /^\d\d\d[ ]\d\d\d[ ]\d\d\d\d$/,               //10
    /^\d\d\d\d\d\d\d\d\d\d$/,                     //10
    /^[1][ ]\d\d\d[ ]\d\d\d[ ]\d\d\d\d$/,          //11
    /^[1][(]\d\d\d[)]\d\d\d[-]\d\d\d\d$/,          //11
    /^[1][ ]\d\d\d[-]\d\d\d[-]\d\d\d\d$/,         //11
    /^[1][ ][(]\d\d\d[)][ ]\d\d\d[-]\d\d\d\d$/ 



  ];


  for (var i = 0; i < RegexCheck.length; i++) {


    if (RegexCheck[i].test(str) == true) {
      result = true;
      break;
    }
  }





  return result;




}

telephoneCheck("555-555-5555");