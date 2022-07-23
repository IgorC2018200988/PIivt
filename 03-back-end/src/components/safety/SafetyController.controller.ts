import { Request, Response } from 'express';
import BaseController from '../../common/BaseController';

export default class SafetyController extends BaseController{

    async getAll(req: Request, res: Response) {
        this.services.safety.getAll({})
        .then(result =>{
            res.send(result);
        })
        .catch(error =>{
            res.status(500).send(error?.message);
        });
    }

    async getById(req: Request, res: Response) {
        const id: number = +req.params?.id;

        this.services.safety.getById(id, {})
            .then(result => {
                if (result === null) {
                    return res.sendStatus(404);
                }

                res.send(result);
            })
            .catch(error => {
                res.status(500).send(error?.message);
            });

    }
}