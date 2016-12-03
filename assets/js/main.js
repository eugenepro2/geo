$(function() {
	
});


//Ajax отправка формы
document.querySelectorAll('form').forEach(function(item) {
item.addEventListener('submit', function(event) {
  sendAjaxForm(this, event);
})});
function sendAjaxForm(form, event) {
  var fields = form.querySelectorAll('input, textarea')

  var formHasError =  Array.prototype.reduce.call(fields, function(invalidCount, currentItem) {
    if (currentItem.matches(':invalid')) invalidCount++;
  }, 0);

  if (formHasError) {
    return true;
  } else {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'send.php');
    xhr.onreadystatechange = function() {
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        data = xhr.responseText;
        form.outerHTML = '<h3 style="color: #fff; text-align: center;">Спасибо, ваша заявка отправлена</h3><p style="color: #fff; text-align: center">Наши менеджеры свяжутся с вами в течение дня</p>';
      }
    }
    xhr.send(formData);

    return false;
  }
}
  
