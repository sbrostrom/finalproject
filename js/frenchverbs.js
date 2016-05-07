function main(){
  // Variables declarations
  var input = "";
  var examples = "Donne,Choisis,Parle";
  var verbEnd = "";
  var gender = "";
  
  // Get input from the user
  input = prompt("Please enter the verb stem you want conjugated. An example would be the stem for donner I.e donne");
  verbEnd = prompt("Please enter the verb end. The verb ends are er, ir, re");
  
  //Determines verb ending and gender of verb
  if (verbEnd === "er") {
    gender = prompt("What is the gender of the pronoun or the noun? Male or female?");
    if (gender === "Male") {
      document.write("<p>The conjugated verb is: " + input + "</p>");
    } else {
      document.write("<p>The conjugated verb is: " + input + "</p>");
    }
  } else if (verbEnd === "ir") {
    gender = prompt("What is the gender of the prounoun, (if any) Male or Female?");
      if (gender === "Male") {
        document.write("The conjugated verb is: "  + " " + input + "is");
      } else {
        document.write("The conjugated verb is: " + input + "is");
      }
  } else if (verbEnd === "re") {
    gender = prompt("What is the gender of the pronoun? Male or Female");
      if (gender === "Male") {
        document.write("The conjugated verb is: " + input + "s");
      } else {
        document.write("The conjugated verb is: " + input + "s");
      }
  } if (verbEnd === "") {
    document.write("Please enter a verb ending.");
  }
  
  document.write("<p>Some examples of conjugated verbs: " + "</p>");
  
  for(var index = 0; index < examples.length; index++) {
    document.write(examples[index]);
  }
}

main(); 