// SHOW FIRST DANCER ON PAGE LOAD
updateDancerDetails(1);

// LIKE OR UNLIKE DANCER
const likeDiv = document.querySelector('.likes');

likeDiv.addEventListener('click', e => {
  const id = getDancerId(document.querySelector('.details'));
  const targetId = e.target.parentElement.id;
  let likes = 0;

  if (!targetId) return;

  if (targetId === 'like') {
    likes++;
  } else if (targetId === 'unlike') {
    likes--;
  }

  getSingleDancer(id)
    .then(json => {
      likes += json.likes;

      if (likes > -1) {
        updateLikes(id, likes);
      }
    });
});

// ADD NON-PERSISTENT FEEDBACK
const feedbackForm = document.querySelector('.feedback form');

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  const input = document.querySelector('input[type="text"]');
  const feedback = input.value;

  input.value = '';
  makeSingleFeedback(feedback); // OPTIMISTIC

  // ADVANCED: PERSIST FEEDBACK (this is not the safest way to do it)
  patchFeedback();
});

// ADVANCED: DELETE FEEDBACK (the ugly and lazy way)
const feedbackUL = document.querySelector('.feedback ul');

feedbackUL.addEventListener('click', e => {
  e.target.remove();
  patchFeedback();
});

// ADVANCED: MENU OF DANCERS
getAllDancers()
  .then(createMenu);

const dancerMenu = document.querySelector('nav ul');

dancerMenu.addEventListener('click', e => {
  const id = getDancerId(e.target);

  if (id) {
    updateDancerDetails(id);
  }
});