const formNames = document.getElementById('name');
const mail = document.getElementById('mail');
const comment = document.getElementById('comment');

function dataChange() {
  const data = {
    name: formNames.value,
    mail: mail.value,
    comment: comment.value,
  };
  localStorage.setItem('formData', JSON.stringify(data));
}

document.addEventListener('putData', () => {
  const formValue = localStorage.getItem('formData');

  if (formValue) {
    const dataObject = JSON.parse(formValue);
    formNames.value = dataObject.name;
    mail.value = dataObject.mail;
    comment.value = dataObject.comment;
  }
});

formNames.onchange = dataChange;
mail.onchange = dataChange;
comment.onchange = dataChange;