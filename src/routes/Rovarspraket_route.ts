import express from 'express';
import { TranslateToRoverSprak, TranslateToNormal, JOKEAPI } from '../services/Rovarspraket_service'

const router = express.Router()

router.post('/translate/normal', TranslateToRoverSprak)
router.post('/translate/rovarsprak', TranslateToNormal)
router.post('/jokeapi', JOKEAPI)
export default router