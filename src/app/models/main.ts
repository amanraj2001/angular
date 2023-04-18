import { add } from "./address";
import { namedel } from "./namedetails";
import { stname } from "./stname";

export interface main{
      name:stname;
      Dob:string;
      placeofbirth:string;
      Firstlang:string;
      Address:add;
      father_name:namedel;
      // email:string;
      mother_name:namedel;
      emergency_contactlist:emergency_contactlist[];
      reference:reference[];

}

export interface emergency_contactlist{
  Relation:string;
  Num:number;
}

export interface reference{
  referenceDetails:string;
  referenceThrough:string;
}

