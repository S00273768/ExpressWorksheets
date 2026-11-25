import {z} from 'zod';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../apperrors/apperrors';

export const validate = (schema: z.ZodObject<any>) => (
    req: Request, 
    _res: Response,
    next: NextFunction
) : void => {

    const validation = schema.safeParse ({
        body: req.body,
        params: req.params,
        query: req.query
    });

    if (!validation.success) {
       next(new ValidationError ('Validation failed',
         validation.error.issues));
        /* res.status(400).json ({
            message: 'Validation failed',
            errors : validation.error.issues
        });*/
        return;
    }
    req.body = validation.data.body;

    next();
};

/*export const validationUpdate = (schema: z.ZodObject<any>) => (
    req: Request, 
    res: Response,
    next: NextFunction
) : void => {

    const validation = schema.safeParse (req.body);

    if (!validation.success) {
        res.status(400).json ({
            message: 'Validation failed',
            errors : validation.error.issues
        });
        return;
    }
    req.body = validation.data

    next();
};*/