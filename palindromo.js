function palindrome(str) {
 str=(str.toLowerCase());

   str=str.replace(/[\W+_]/g,"");



    let I = 0;  // inicio
    let J = (str.length) - 1;  //fin

    while (I < J) {
        if (str[I] != str[J]) {
            return false;
        }
        I++;
        J--;

    }

    return true;


}

palindrome("eye");