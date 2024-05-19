// script.js
document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#display');
  const keys = document.querySelector('.keys');
  
  keys.addEventListener('click', event => {
      const { target } = event;
      const { action, value } = target.dataset;

      if (!target.matches('button')) return;

      switch (action) {
          case 'append':
              appendValue(value);
              break;
          case 'clear':
              clearDisplay();
              break;
          case 'delete':
              deleteLast();
              break;
          case 'calculate':
              calculateResult();
              break;
      }

      updateDisplay();
  });

  function appendValue(value) {
      if (display.value === '0') {
          display.value = value;
      } else {
          display.value += value;
      }
  }

  function clearDisplay() {
      display.value = '0';
  }

  function deleteLast() {
      display.value = display.value.slice(0, -1);
      if (display.value === '') {
          display.value = '0';
      }
  }

  function calculateResult() {
      try {
          display.value = eval(display.value.replace(/x/g, '*'));
      } catch {
          display.value = 'Error';
      }
  }

  function updateDisplay() {
      if (display.value.length > 12) {
          display.style.fontSize = '1.5em';
      } else {
          display.style.fontSize = '2.5em';
      }
  }

  clearDisplay();
});

