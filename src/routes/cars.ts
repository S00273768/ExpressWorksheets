import {Router} from "express";
import {CarController} from '../controllers/cars';
import { authenticateKey } from "../middleware/auth.middleware";

import {validate, validationUpdate} from '../middleware/validate.middleware';
import { createCarZSchema } from "../models/cars";

const router = Router();
const carController = new CarController();

router.get('/', authenticateKey, carController.getCars);
router.get('/:id', authenticateKey ,carController.getCarsById);
router.post('/', validate(createCarZSchema) ,carController.createCar);
router.put('/:id',validationUpdate(createCarZSchema), carController.updateCar);
router.delete('/:id', carController.deletCar);

export default router;
