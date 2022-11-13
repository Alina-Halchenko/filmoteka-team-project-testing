import { getMovieById } from './fetch-functions/get-movie-info';
import { activateModalBtns } from './modal/activate-movie-modal';
import { renderModalFilm } from './modal/render-modal';

export async function onMovieCardClick(evt) {
  evt.preventDefault();
  const currentItem = evt.target.closest('li');
  let id = +currentItem.dataset.id;

  try {
    document.querySelector('body').classList.add('modal-open');

    const movieId = await getMovieById(id); 
    console.log('rendered modal - new1')
    const movieInfo = await movieId.data;
    // renderModalFilm({ movieInfo });
    // activateModalBtns();
    console.log('rendered modal - new2')
  } catch (error) {
    console.log(error);
  }
}
