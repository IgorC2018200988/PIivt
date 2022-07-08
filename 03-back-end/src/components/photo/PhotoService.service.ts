import BaseService from '../../common/BaseService';
import PhotoModel from './PhotoModel.model';
import IAdapterOptions from '../../common/IAdapterOptions.interface';

export interface IPhotoAdapterOptions extends IAdapterOptions{

}

export default class PhotoService extends BaseService<PhotoModel, IPhotoAdapterOptions> {
    tableName(): string {
        return "photo";
    }
    protected adaptToModel(data: any, options: IAdapterOptions): Promise<PhotoModel> {
        return new Promise( resolve => {
            const photo = new PhotoModel();

        photo.photoId = data?.photo_id;
        photo.filePath = data?.file_path;

        resolve (photo);
        })
    }

}