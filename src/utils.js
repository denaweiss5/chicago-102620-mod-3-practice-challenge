const updateElement = (selector, property, value) => {
  const el = document.querySelector(selector);
  el[property] = value;
};

const updateTextContent = (selector, value) => {
  updateElement(selector, 'textContent', value);
};

const addDancerId = (element, value) => {
  element.dataset.dancerId = value;
};

const getDancerId = (element) => {
  return element.dataset.dancerId;
};

const showDancerImage = url => {
  updateElement('#dancer-img', 'src', url);
};

const showDancerName = name => {
  updateTextContent('#dancer-name', name);
};

const showDancerLikes = likes => {
  updateTextContent('#like-count', likes);
};

const showDancerDescription = description => {
  updateTextContent('#dancer-description', description);
};

const makeSingleFeedback = feedback => {
  const feedbackUL = document.querySelector('.feedback ul');
  const li = document.createElement('li');

  li.textContent = feedback;
  feedbackUL.appendChild(li);
};

const showDancerFeedback = feedback => {
  const feedbackUL = document.querySelector('.feedback ul');

  feedbackUL.textContent = '';
  feedback.forEach(makeSingleFeedback);
};

const updateDancerDetails = id => {
  getSingleDancer(id)
  .then(json => {
    addDancerId(document.querySelector('.details'), json.id);
    showDancerImage(json.image);
    showDancerName(json.name);
    showDancerLikes(json.likes);
    showDancerDescription(json.description);
    showDancerFeedback(json.feedback);
  });
};

// HELPER METHOD FOR UPDATING LIKES
const updateLikes = (id, likes) => {
  patchDancer(id, { likes });
  showDancerLikes(likes);
};

// ADVANCED: HELPER METHOD FOR UPDATING FEEDBACK
const patchFeedback = () => {
  const feedbackLIs = document.querySelectorAll('.feedback ul li');
  const feedback = Array.from(feedbackLIs).map(el => el.textContent);
  const id = getDancerId(document.querySelector('.details'));

  patchDancer(id, { feedback });
};

// ADVANCED: SHOW MENU OF DANCERS
const createMenu = array => {
  const menu = document.querySelector('nav ul');
  
  menu.textContent = '';
  array.forEach(dancer => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.textContent = dancer.name;
    addDancerId(btn, dancer.id);
    li.appendChild(btn);
    menu.appendChild(li);
  });
};
