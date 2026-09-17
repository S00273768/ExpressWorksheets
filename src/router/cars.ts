import {Router} from "express";
import {CarController} from '../controllers/cars';

const router = Router();
const carController = new CarController();

router.get('/', carController.getCars);
router.get('/:id', carController.getCarsById);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deletCar);
