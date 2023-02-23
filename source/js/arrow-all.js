if (document.querySelector('.card-pet')) {
  const block = document.querySelector('.card-pet');
  const arrow = document.querySelector('.card-pet__all-files');


  const getAllFiles = (button, block) => {
    button.addEventListener('click', () => {
      block.classList.toggle('card-pet__show-all');
      button.classList.toggle('card-pet__all-files--rotate');
    })
  };

  getAllFiles(arrow, block);
}

