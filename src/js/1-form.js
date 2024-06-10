
function saveToLocalStorage(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }
  
  
  function loadFromLocalStorage(key) {
    const json = localStorage.getItem(key);
  
    try {
      const data = JSON.parse(json);
      return data;
    } catch {
      return json;
    }
  }
  
  const formData = {
    email: '',
    message: '',
  };
  
  const feedbackFormEl = document.querySelector('.feedback-form');
  const feedbackFormState = 'feedback-form-state';
  
  feedbackFormEl.addEventListener('submit', event => {
    event.preventDefault();
  
    let usermail = feedbackFormEl.elements.email.value;
    let usermessage = feedbackFormEl.elements.message.value;
  
    usermail = usermail.trim();
    usermessage = usermessage.trim();
  
    if (usermail === '' || usermessage === '') {
      
      alert('Fill please all fields');
  
    } else {
      
      console.log(formData);
  
      
      localStorage.removeItem(feedbackFormState);
  
      formData.email = '';
      formData.message = '';
  
      feedbackFormEl.reset();
    }
  });
  
  feedbackFormEl.addEventListener('input', event => {
    // отримати значення з полів
    let usermail = feedbackFormEl.elements.email.value;
    let usermessage = feedbackFormEl.elements.message.value;
  
    usermail = usermail.trim();
    usermessage = usermessage.trim();
  
   
    formData.email = usermail;
    formData.message = usermessage;
  
    // додати об'кт у localStorage
    saveToLocalStorage(feedbackFormState, formData);
  });
  
  
  const dataFromLS = localStorage.getItem(feedbackFormState);
  
  if (dataFromLS !== null) {
    
    const parseData = JSON.parse(dataFromLS);
  
    feedbackFormEl.elements.email.value = parseData.email;
    feedbackFormEl.elements.message.value = parseData.message;
  
    formData.email = parseData.email;
    formData.message = parseData.message;
  }