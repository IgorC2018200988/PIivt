import ICategory from './ICategory.model';
import IBrand from './IBrand.model';
import IModel from './IModel.model';
import IUser from './IUser.model';
import IPhoto from './IPhoto.model';
import IEquipment from './IEquipment.model';
import ICarBody from './ICarBody.model';
import IFuelType from './IFuelType.model';
import IDrive from './IDrive.model';
import ITransmission from './ITransmission.model';
import IDoors from './IDoors.model';
import ISeats from './ISeats.model';
import ISteeringWheelSide from './ISteeringWheelSide.model';
import IAirCondition from './IAirConditionmodel';
import IDamage from './IDamage.model';
import IOrigin from './IOrigin.model';
import ISafety from './ISafety.model';
import IVehicleCondition from './IVehicleCondition.model';
import IEmissionClass from './IEmissionClass.model';
import IInteriorMaterial from './IInteriorMaterial.model';
import IReplacement from './IReplacement.model';

export default interface IAd {
    adId: number;
    category: ICategory;
    brands: IBrand;
    models: IModel;
    user: IUser;
    photos: IPhoto[];
    carBodyId: number;
    fuelTypeId: number;
    driveId: number;
    transmissionId: number;
    doorsId: number;
    seatsId: number;
    steeringWheelSideId: number;
    airConditionId:number;
    damageId:number;
    originId: number;
    safeties: ISafety[];
    equipments: IEquipment[];
    vehicleConditions: IVehicleCondition[];
    emissionClassId: number;
    interiorMaterialId: number;
    replacementId: number;
    title: string;
    price: number;
    // fixed: boolean;
    year: string; 
    // mark: string;
    cm3: string;
    kw: string;
    ks: string;
    mileage: string;
    color: string;
    interiorColor: string;
    registrationUntil: string;
    description: string;

}