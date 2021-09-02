// calculator functionality
var buttonList = document.querySelectorAll(".cal-btn");
for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    if (buttonText === "DEL") {
      // FOR del BUTTON
      var text = document.querySelector(".display").value;
      text = text.substring(0, text.length - 1);
      document.querySelector(".display").value = text;
    } else {
      var inputText = document.querySelector(".display").value;
      inputText = inputText + buttonText;
      document.querySelector(".display").value = inputText.toLocaleString();
    }
  });
}
// FOR EQUAL BUTTON
document.querySelector(".equal").addEventListener("click", function() {
  var inputString = document.querySelector(".display").value;
  var inputsList = inputString.split(" ");
  calculate(inputsList[0], inputsList[1], inputsList[2]);
})

function calculate(firstNumber, operation, secondNumber) {
  var value1 = Number(firstNumber);
  var value2 = Number(secondNumber);
  switch (operation) {
    case "+":
      result = value1 + value2;
      if (Number.isInteger(result)) {
        document.querySelector(".display").value = result;
      } else {
        document.querySelector(".display").value = result.toFixed(2);
      }
      break;
    case "-":
      result = value1 - value2;
      if (Number.isInteger(result)) {
        document.querySelector(".display").value = result;
      } else {
        document.querySelector(".display").value = result.toFixed(2);
      }
      break;
    case "/":
      result = value1 / value2;
      if (Number.isInteger(result)) {
        document.querySelector(".display").value = result;
      } else {
        document.querySelector(".display").value = result.toFixed(2);
      }
      break;
    case "x":
      result = value1 * value2;
      if (Number.isInteger(result)) {
        document.querySelector(".display").value = result;
      } else {
        document.querySelector(".display").value = result.toFixed(2);
      }
      break;
  }
}
// FOR RESET BUTTON
document.querySelector(".reset").addEventListener("click", function() {
  document.querySelector(".display").value = "";
})

// CALCULATOR STYLING
function themeSelector(themeNumber) {
  if (themeNumber === 1) {
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.querySelector(".calc").style.color = "#fff";
    document.querySelector(".theme").style.color = "#fff";
    // FOR TOGGLE BAR
    var toggleList = document.querySelectorAll(".group-btn");
    for (var i = 0; i < toggleList.length; i++) {
      toggleList[i].style.backgroundColor = "hsl(223, 31%, 20%)";
      toggleList[i].style.color = "#fff";
    }
    document.querySelector(".group-btn1").style.backgroundColor = "hsl(6, 63%, 50%)";
    // FOR DISPLAY
    document.querySelector(".display").style.backgroundColor = "hsl(224, 36%, 15%)";
    document.querySelector(".display").style.color = "#fff";
    // FOR KEYPAD
    document.querySelector(".main").style.backgroundColor = "hsl(223, 31%, 20%)";
    var calButtonList = document.querySelectorAll(".cal-btn");
    for (var i = 0; i < calButtonList.length; i++) {
      calButtonList[i].style.backgroundColor = "hsl(30, 25%, 89%)";
      calButtonList[i].style.color = "hsl(221, 14%, 31%)";
      calButtonList[i].style.boxShadow = "1px 2px hsl(28, 16%, 65%)";
    }
    var specialButtons = document.querySelectorAll(".special");
    for (var i = 0; i < specialButtons.length; i++) {
      specialButtons[i].style.backgroundColor = "hsl(225, 21%, 49%)";
      specialButtons[i].style.color = "#fff";
      specialButtons[i].style.boxShadow = "1px 2px hsl(224, 28%, 35%)";
    }
    document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.querySelector(".equal").style.boxShadow = "1px 2px hsl(6, 70%, 34%)";
  } else if (themeNumber === 2) {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.querySelector(".calc").style.color = "hsl(60, 10%, 19%)";
    document.querySelector(".theme").style.color = "hsl(60, 10%, 19%)";
    // FOR TOGGLE BAR
    var toggleList = document.querySelectorAll(".group-btn");
    for (var i = 0; i < toggleList.length; i++) {
      toggleList[i].style.backgroundColor = "hsl(0, 5%, 81%)";
      toggleList[i].style.color = "hsl(60, 10%, 19%)";
    }
    document.querySelector(".group-btn2").style.backgroundColor = "hsl(25, 98%, 40%)";
    // FOR DISPLAY
    document.querySelector(".display").style.backgroundColor = "hsl(0, 0%, 93%)";
    document.querySelector(".display").style.color = "hsl(60, 10%, 19%)";
    // FOR KEYPAD
    document.querySelector(".main").style.backgroundColor = "hsl(0, 5%, 81%)";
    var calButtonList = document.querySelectorAll(".cal-btn");
    for (var i = 0; i < calButtonList.length; i++) {
      calButtonList[i].style.backgroundColor = "hsl(45, 7%, 89%)";
      calButtonList[i].style.color = "hsl(60, 10%, 19%)";
      calButtonList[i].style.boxShadow = "1px 2px hsl(35, 11%, 61%)";
    }
    var specialButtons = document.querySelectorAll(".special");
    for (var i = 0; i < specialButtons.length; i++) {
      specialButtons[i].style.backgroundColor = "hsl(185, 42%, 37%)";
      specialButtons[i].style.color = "#fff";
      specialButtons[i].style.boxShadow = "1px 2px hsl(185, 58%, 25%)";
    }
    document.querySelector(".equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.querySelector(".equal").style.boxShadow = "1px 2px hsl(25, 99%, 27%)";
  } else if (themeNumber === 3) {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.querySelector(".calc").style.color = "hsl(52, 100%, 62%)";
    document.querySelector(".theme").style.color = "hsl(52, 100%, 62%)";
    // FOR TOGGLE BAR
    var toggleList = document.querySelectorAll(".group-btn");
    for (var i = 0; i < toggleList.length; i++) {
      toggleList[i].style.backgroundColor = "hsl(268, 71%, 12%)";
      toggleList[i].style.color = "hsl(52, 100%, 62%)";
    }
    document.querySelector(".group-btn3").style.backgroundColor = "hsl(176, 100%, 44%)";
    // FOR DISPLAY
    document.querySelector(".display").style.backgroundColor = "hsl(268, 71%, 12%)";
    document.querySelector(".display").style.color = "hsl(52, 100%, 62%)";
    // FOR KEYPAD
    document.querySelector(".main").style.backgroundColor = "hsl(268, 71%, 12%)";
    var calButtonList = document.querySelectorAll(".cal-btn");
    for (var i = 0; i < calButtonList.length; i++) {
      calButtonList[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      calButtonList[i].style.color = "hsl(52, 100%, 62%)";
      calButtonList[i].style.boxShadow = "1px 2px hsl(290, 70%, 36%)";
    }
    var specialButtons = document.querySelectorAll(".special");
    for (var i = 0; i < specialButtons.length; i++) {
      specialButtons[i].style.backgroundColor = "hsl(281, 89%, 26%)";
      specialButtons[i].style.color = "#fff";
      specialButtons[i].style.boxShadow = "1px 2px hsl(285, 91%, 52%)";
    }
    document.querySelector(".equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.querySelector(".equal").style.boxShadow = "1px 2px hsl(177, 92%, 70%)";
  }
}
document.querySelector(".group-btn1").addEventListener("click", function() {
  themeSelector(1);
});
document.querySelector(".group-btn2").addEventListener("click", function() {
  themeSelector(2);
});
document.querySelector(".group-btn3").addEventListener("click", function() {
  themeSelector(3);
});
