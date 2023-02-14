import {Router} from 'express';
import { DisplayMoviesAddPage, DisplayMoviesEditPage, DisplayMoviesList, ProcessMoviesAddPage, ProcessMoviesDelete, ProcessMoviesEditPage } from '../controllers/movies.js';
//import { AuthGuard } from '../utils/index.js';
const router = Router();

// R ead
//router.get('/movie-list', AuthGuard, DisplayMoviesList);
router.get('/movie-list', DisplayMoviesList);

// C reate
router.get('/movie-add', DisplayMoviesAddPage);
//router.post('/movie-add', AuthGuard, ProcessMoviesAddPage);
router.post('/movie-add', ProcessMoviesAddPage);

// U pdate
router.get('/movie-edit/:id', DisplayMoviesEditPage);
//router.post('/movie-edit/:id', AuthGuard, ProcessMoviesEditPage);
router.post('/movie-edit/:id', ProcessMoviesEditPage);

// D elete
//router.get('/movie-delete/:id', AuthGuard, ProcessMoviesDelete);
router.get('/movie-delete/:id', ProcessMoviesDelete);
export default router;