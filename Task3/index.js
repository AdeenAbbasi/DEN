const display = document.calcForm.display;
    const liveResult = document.getElementById("liveResult");

    function updateDisplay(value) {
      display.value += value;
      updateLiveResult();
    }

    function clearDisplay() {
      display.value = "";
      liveResult.textContent = "0";
    }

    function deleteLast() {
      display.value = display.value.slice(0, -1);
      updateLiveResult();
    }

    function calculate() {
      try {
        display.value = eval(display.value);
        liveResult.textContent = display.value;
      } catch {
        display.value = "";
        liveResult.textContent = "Error";
      }
    }

    function updateLiveResult() {
      try {
        const result = eval(display.value);
        liveResult.textContent = result !== undefined ? result : "0";
      } catch {
        liveResult.textContent = "";
      }
    }