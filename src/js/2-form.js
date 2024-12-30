const formDataPage = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const formFillFields = () => {
  try {
    const formDataLc = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formDataLc === null) {
      return;
    }
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
  if (
    Object.values(formData).includes('') ||
    Object.values(formData).includes(null)
  ) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  formData = { email: '', message: '' };
};
formDataPage.addEventListener('input', formInputSave);
formDataPage.addEventListener('submit', formInputSubmit);
