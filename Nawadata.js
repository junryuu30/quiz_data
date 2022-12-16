// no 1. : Sort Character (50 Poin) (NDL010)

console.log("no.1 sort ===================================================================================") 
const startingConsonants=(string)=>{
    let findString = string.toLowerCase().match(/[^aeiou ]/gi);

    findString.splice(1, 0, "s");
    findString.pop();
    console.log(findString.join(""))
    return findString.join("");
}

const stratingVowels=(string)=>{
    let findString = string
    .toLowerCase()
    .match(/[aeiou]/gi)
    .join("");
    return findString;
}

const myString=(string)=>{
    let myConsonant = startingConsonants(string);
    let myVowel = stratingVowels(string);
    return(
        `Vowel Character : ${myVowel}` + "\n" + `Consonant Character : ${myConsonant}`
    );
}

console.log(myString("Sample Case"));

console.log("===================================================================================") 
console.log("===================================================================================") 


// 2. PSBB ( Pembatasan Sosial Berskala Besar ) (60 Poin) (NDL011)
console.log("no.2. PSBB ===================================================================================") 

const hitungMinimumRequiredBus = (inputNumberFamily, inputMemberFamily) => {
    try {
      const inputFamily = inputNumberFamily;
      const inputMember = inputMemberFamily;
      if (inputFamily == inputMember.length) {
        return Math.ceil(inputMember.reduce((a, b) => a + b, 0) / 4);
      }
  
      if (inputFamily !== inputMember.length) {
        throw "Input must be equal with count of family";
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(
    "Minimun Required Bus Pertama " + hitungMinimumRequiredBus(5, [1, 2, 4, 3, 3])
  );
  console.log(
    "Minimun Required Bus Pertama " +
      hitungMinimumRequiredBus(8, [2, 3, 4, 4, 2, 1, 3, 1])
  );
  console.log("Data Input Salah " + hitungMinimumRequiredBus(5, [1, 2]));