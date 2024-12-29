const formDataPage = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const formFillFields = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }
    const formDataLc = JSON.parse(localStorage.getItem('feedback-form-state'));
    formData = formDataLc;
    for (const key in formDataLc) {
      formDataPage.elements[key].value = formDataLc[key];
    }
  } catch (err) {
    console.log(err);
  }
};

formFillFields();
const formInputSave = event => {
  const fieldValue = event.target.value;
  const fieldName = event.target.name;
  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const formInputSubmit = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};
formDataPage.addEventListener('input', formInputSave);
formDataPage.addEventListener('submit', formInputSubmit);
