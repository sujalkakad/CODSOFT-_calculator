function append(value) {
  const display = document.getElementById('screen');
  if (display.textContent === '0' && value !== '.')
  {
    display.textContent = '';
  }
  display.textContent += value;
}


function clearDisplay() {
  document.getElementById('screen').textContent = '0';
}


function calculate() {
  const display = document.getElementById('screen');
  try 
  {
    display.textContent = eval(display.textContent);
  } 
  catch (error) 
  {
    display.textContent = 'Error';
  }
}
