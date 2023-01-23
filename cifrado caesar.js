function rot13(str) {
 let decod=[];

    let flag;


    let abec = ["A", "B", "C", "D", "E",
     "F",  "G", "H", "I", "J", 
     "K",  "L", "M", "N", "O", 
     "P", "Q", "R", "S","T",
     "U", "V", "W", "X", "Y", 
      "Z"]; //26 (0-25)
let J;
let I;
    for ( I = 0; I <= ((str.length) - 1); I++) {
        flag = 0;
        for ( J = 0; J <= 25; J++) {

            if (abec[J] == str[I]) {
                flag = 1;
                if (J >= 13) {
                    decod += abec[J - 13];
                    
                    break;
                }
                else {
                    
                    decod += abec[J + 13];
                    
                    break;
                }
            }

        }
        if (flag == 0) { decod += str[I]; }

    }

    return decod;
}

rot13("SERR PBQR PNZC");