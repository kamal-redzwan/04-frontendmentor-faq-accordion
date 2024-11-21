const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    // select the next sibling in the same parent
    const asnwer = this.nextElementSibling;

    const plusIcon = this.querySelector('.plus-icon');
    const minusIcon = this.querySelector('.minus-icon');

    if (asnwer.style.maxHeight) {
      asnwer.style.maxHeight = null;
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    } else {
      // adjust the height to the content height
      asnwer.style.maxHeight = asnwer.scrollHeight + 'px';

      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  });
});
