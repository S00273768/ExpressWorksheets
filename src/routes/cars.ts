import {Router} from "express";
import {CarController} from '../controllers/cars';
import { authenticateKey } from "../middleware/auth.middleware";

import {validate, /*validationUpdate*/} from '../middleware/validate.middleware';
import { carParamsSchema, createCarZSchema, updateCarZSchema } from "../models/cars";

const router = Router();
const carController = new CarController();

router.get('/', carController.getCars);
router.get('/:id', validate(carParamsSchema) , carController.getCarsById);
router.post('/', validate(createCarZSchema), carController.createCar);
router.put('/:id',validate(carParamsSchema), validate(updateCarZSchema), carController.updateCar);
router.delete('/:id', validate(carParamsSchema), carController.deleteCar);



//router.get('/', /*authenticateKey,*/ carController.getCars);
//router.get('/:id', /*authenticateKey ,*/carController.getCarsById);
//router.post('/', validate(createCarZSchema) ,carController.createCar);
//router.put('/:id',validate(createCarZSchema), carController.updateCar);
////router.put('/:id', validationUpdate(createCarZSchema) ,carController.updateCar);
//router.delete('/:id', carController.deleteCar);

export default router;
