console.log("Hello world!");
let myData = {
  Painting: "Mona Lisa",
  Artist: "Leonardo da Vinci",
  "Painted Between": "1503 and 1506",
  "Art Period": "High Renaissance",
  "Current Location": "Louvre Museum, Paris",
  Subject: "Lisa Gherardini",
  "Subject's Identity": "Wife of a Florentine merchant",
  "Fame Increased By": "Theft in 1911",
  "Impact of Theft": "Gained international attention",
};

// document.getElementById("root").innerHTML= "Siphakathi!"
console.log(myData["Painting"]);
console.log(myData["High Renaissance"]);
myData.recordID = "726457875878";
console.log(myData);
// document.getElementById("root").innerHTML = JSON.stringify (myData);
console.log("hello");

document.getElementById("painting").innerHTML = myData["Painting"];
document.getElementById("artist").innerHTML = myData["Artist"];
document.getElementById("painted Between").innerHTML =
  myData["Painted Between"];
document.getElementById("art-Period").innerHTML = myData["Art Period"];
document.getElementById("current-Location").innerHTML =
  myData["Current Location"];
document.getElementById("subject").innerHTML = myData["Subject"];
document.getElementById("subjects-Identity").innerHTML =
  myData["Subject's Identity"];
document.getElementById("fame-Increased-By").innerHTML =
  myData["Fame Increased By"];
document.getElementById("impact-of-Thef").innerHTML = myData["Impact of Theft"];
