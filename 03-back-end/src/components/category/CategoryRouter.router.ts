import CategoryController from "./CategoryController.controller";
import * as express from 'express';
import IApplicationResources from '../../common/IApplicationResources.inteface';
import IRouter from "../../common/IRouter.interface";

class CategoryRouter implements IRouter{
    public setupRoutes (application: express.Application, resources: IApplicationResources) {
        const categoryController: CategoryController = new CategoryController(resources.services);

        application.get("/api/category",                categoryController.getAll.bind(categoryController));
        application.get("/api/category/:id",            categoryController.getById.bind(categoryController));
        application.post("/api/category",               categoryController.add.bind(categoryController));
        application.put("/api/category/:cid",           categoryController.edit.bind(categoryController));
        application.post("/api/category/:cid/brand",    categoryController.addBrand.bind(categoryController));
        application.put("/api/category/:cid/brand/:bid", categoryController.editBrand.bind(categoryController));
    }
}

export default CategoryRouter;
