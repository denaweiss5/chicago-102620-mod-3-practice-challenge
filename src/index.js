// DISPLAY FETCHED DATA ON SINGLE DANCER
const showDancerImage = url => {
  const dancerImg = document.querySelector('#dancer-img');

  dancerImg.src = url;
};

const showDancerName = name => {
  const dancerName = document.querySelector('#dancer-name');

  dancerName.textContent = name;
};

const showDancerLikes = likes => {
  const dancerLikes = document.querySelector('#like-count');

  dancerLikes.textContent = likes;
};

const showDancerDescription = description => {
  const dancerDescription = document.querySelector('#dancer-description');

  dancerDescription.textContent = description;
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

getSingleDancer(1)
  .then(json => {
    showDancerImage(json.image);
    showDancerName(json.name);
    showDancerLikes(json.likes);
    showDancerDescription(json.description);
    showDancerFeedback(json.feedback);
  });
  
// LIKE DANCER
const likeButton = document.querySelector('#like');

likeButton.addEventListener('click', () => {
  let likes = null;

  getSingleDancer(1)
    .then(json => {
      likes = ++json.likes;
      patchDancer(1, { likes: likes });
      showDancerLikes(likes);
    });
});

// ADD NON-PERSISTENT FEEDBACK
const feedbackForm = document.querySelector('.feedback form');

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('input[type="text"]');
  const feedback = input.value;

  input.value = '';
  makeSingleFeedback(feedback);

  // ADVANCED: PERSIST FEEDBACK (this is the easiest but not safest way to do it)
  patchFeedback();
});

// ADVANCED: HELPER METHOD FOR UPDATING FEEDBACK
const patchFeedback = () => {
  const feedbackLIs = document.querySelectorAll('.feedback ul li');
  const feedbackArray = Array.from(feedbackLIs).map(el => el.textContent);

  patchDancer(1, { feedback: feedbackArray });
};

// ADVANCED: DELETE FEEDBACK (the ugly and lazy way)
const feedbackUL = document.querySelector('.feedback ul');

feedbackUL.addEventListener('click', e => {
  e.target.remove();
  patchFeedback();
});
