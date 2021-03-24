window.onload = function () {
  var popup = document.querySelector('.popup');
  var buttonShowPopup = document.getElementById('button-show-popup');
  var closeIcone = document.querySelector('.close-icone');
  var inputField = document.querySelector('.input-field');
  var txtPopin = document.querySelector('.txt-popin');
  buttonShowPopup.addEventListener('click', function(){
    var inputValue = inputField.value;
    if(inputValue.length >0){
      txtPopin.innerHTML=inputValue;
      popup.classList.remove('d-none');
    }
  })
  closeIcone.addEventListener('click', function(){
    popup.classList.add('d-none');
    })
}
