import { Request, Response } from "express";
import { CarService } from "../services/cars";

const carService = new CarService();


export class CarController
{


    getCars = async (_req: Request, res: Response): Promise<void> => {
       try{
        const cars = await carService.getAllCars();
        res.status(200).json(cars);
       }
       catch (error){
        res.status(500).json({message: 'Error fetching cars', error});
       }
       
        /* res.status(200).json({success : true,
            data:"this is just dummy for now a response to the get all cars request"
        });*/
    };

    getCarsById = async (req:Request, res:Response):Promise<void> =>{

        try {
            const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
            const car = await carService.getCarById(id);
            if (!car) {
                res.status(404).json({ message: 'Car not found' });
                return;
        }
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching car', error });
        }

        /*res.status(200).json({success :true,
            data: `This is just dummy for now a response to the get car by id request with car id ${req.params.id}`
        });*/
    };

    createCar = async (req:Request, res:Response):Promise<void> =>{
    try {
        const newCar = await carService.createCar(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        res.status(500).json({ message: 'Error inserting into MongoDB', error });
    }

    /*res.status(200).json({success :true,
        data: `This is just dummy for now a response to the create car request the data received in the request body is: ${JSON.stringify(req.body)}`
    });*/
    };

    updateCar = async (req:Request, res:Response):Promise<void> =>{
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const updatedCar = await carService.updateCar(id, req.body);
        if (!updatedCar) {
            res.status(404).json({ message: 'Car not found' });
            return;
        }
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: 'Error updating car', error });
    }
  

    /*res.status(200).json({success :true,
        data: `This is just dummy for now a response to the update car by id request with car id ${req.params.id}`
    });*/
    };

    deletCar = async (req:Request, res:Response):Promise<void> =>{
    res.status(200).json({success :true,
        data: `This is just dummy for now a response to the delete car by id request with car id ${req.params.id}`
    });
    };

}