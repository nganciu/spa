window.onload = function () {
  const codeInputbox = document.querySelector('#access');
  codeInputbox.addEventListener('input', testCode);
};

function testCode() {
  //TODO need rate limit 1/sec
  //TODO limit attempts to 7
  const currentInputCode = codeInputbox.value;
  //TODO get date in format MMDDYYYY and DDMMYYYY
  const currentValidCode = '11111111';
  const status =
    currentInputCode === currentValidCode ? codeSuccess() : codeFail();
  return status;
}

function codeSuccess() {
  console.log('success');
}
function codeFail() {
  console.log('failed');
}
