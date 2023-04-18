import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { main } from '../models/main';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  arrdata: Array<main> = []

  array: string[] = ['uncle', 'dd', 'ff']
  firlang: string[] = ['Hindi', 'English', 'Gujarati']

  studentform = new FormGroup({
    name: new FormGroup({
      firstname: new FormControl('', Validators.required),
      middlename: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required)
    }),
    Dob: new FormControl('', [Validators.required,Validators.pattern('^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$')]),
    placeofbirth: new FormControl('', Validators.required),
    Firstlang: new FormControl('', Validators.required),
    Address: new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')])
    }),
    father_name: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]),
      middlename: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      Educationqual: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    }),
    mother_name: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]),
      middlename: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      Educationqual: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    }),
    emergency_contactlist: new FormArray([new FormGroup({

      Relation: new FormControl('', Validators.required),
      Num: new FormControl('', Validators.required)
    })

    ]),
    reference: new FormArray([new FormGroup({
      referenceDetails: new FormControl(),
      referenceThrough: new FormControl()
    })

    ])
  });

  get ref() {
    return this.studentform.get('reference') as FormArray;
  }

  addfield() {
    this.ref.push(new FormGroup({
      referenceDetails: new FormControl(),
      referenceThrough: new FormControl()
    }))
  }

  get emgList() {
    return this.studentform.get('emergency_contactlist') as FormArray;
  }

  get fname() {
    return this.studentform.get('name.firstname')
  }
  get mname() {
    return this.studentform.get('name.middlename')
  }
  get lname() {
    return this.studentform.get('name.lastname')
  }

  get dobb() {
    return this.studentform.get('Dob')
  }
  get plOB() {
    return this.studentform.get('placeofbirth')
  }
  get cityC() {
    return this.studentform.get('Address.city')
  }
  get stateC() {
    return this.studentform.get('Address.state')
  }
  get countryC() {
    return this.studentform.get('Address.country')
  }
  get ppin() {
    return this.studentform.get('Address.pin')
  }
  // father
  get fathname() {
    return this.studentform.get('father_name.firstname')
  }
  get fathMname() {
    return this.studentform.get('father_name.middlename')
  }
  get fathLname() {
    return this.studentform.get('father_name.lastname')
  }
  get fphone() {
    return this.studentform.get('father_name.phone')
  }
  get femail() {
    return this.studentform.get('father_name.email')
  }
  get fqual() {
    return this.studentform.get('father_name.Educationqual')
  }
  get fprof() {
    return this.studentform.get('father_name.profession')
  }
  get fdesig() {
    return this.studentform.get('father_name.designation')
  }

  // mother
  get mothname() {
    return this.studentform.get('mother_name.firstname')

  }
  get mphone() {
    return this.studentform.get('mother_name.phone')
  }
  get mothMname() {
    return this.studentform.get('mother_name.middlename')
  }
  get mothLname() {
    return this.studentform.get('mother_name.lastname')
  }
  get memail() {
    return this.studentform.get('mother_name.email')
  }
  get mqual() {
    return this.studentform.get('mother_name.Educationqual')
  }
  get mprof() {
    return this.studentform.get('mother_name.profession')
  }
  get mdesig() {
    return this.studentform.get('mother_name.designation')
  }

  // Emergency details

  get eRelation() {
    return this.studentform.get('emergency_contactlist.Relation')
  }
  get enumber() {
    return this.studentform.get('emergency_contactlist.num')
  }

  y = ''
  sele(element: any) {
    console.log(element.target.value);
    this.y = element.target.value
  }

  addData() {
    console.log("aa");

    if (typeof this.studentform.value.name?.firstname == 'string' && typeof this.studentform.value.name?.middlename == 'string' && typeof this.studentform.value.name?.lastname == 'string' && typeof this.studentform.value.Dob == 'string' && typeof this.studentform.value.placeofbirth == 'string' && typeof this.studentform.value.Firstlang == 'string' && typeof this.studentform.value.Address?.city == 'string' && typeof this.studentform.value.Address?.state == 'string' && typeof this.studentform.value.Address?.country == 'string' && typeof this.studentform.value.Address?.pin == 'string' && typeof this.studentform.value.father_name?.firstname == 'string' && typeof this.studentform.value.father_name?.middlename == 'string' && typeof this.studentform.value.father_name?.lastname == 'string' && typeof this.studentform.value.father_name?.email == 'string' && typeof this.studentform.value.father_name?.Educationqual == 'string' && typeof this.studentform.value.father_name?.profession == 'string' && typeof this.studentform.value.father_name?.designation == 'string' && typeof this.studentform.value.father_name?.phone == 'string' && typeof this.studentform.value.mother_name?.firstname == 'string' && typeof this.studentform.value.mother_name?.middlename == 'string' && typeof this.studentform.value.mother_name?.lastname == 'string' && typeof this.studentform.value.mother_name?.email == 'string' && typeof this.studentform.value.mother_name?.Educationqual == 'string' && typeof this.studentform.value.mother_name?.profession == 'string' && typeof this.studentform.value.mother_name?.designation == 'string' && typeof this.studentform.value.mother_name?.phone == 'string') {

      this.arrdata.push({ name: { firstname: this.studentform.value.name?.firstname, middlename: this.studentform.value.name?.middlename, lastname: this.studentform.value.name?.lastname }, Dob: this.studentform.value.Dob, placeofbirth: this.studentform.value.placeofbirth, Firstlang: this.studentform.value.Firstlang, Address: { city: this.studentform.value.Address?.city, state: this.studentform.value.Address?.state, country: this.studentform.value.Address?.country, pin: this.studentform.value.Address?.pin }, father_name: { firstname: this.studentform.value.father_name?.firstname, middlename: this.studentform.value.father_name?.middlename, lastname: this.studentform.value.father_name?.lastname, email: this.studentform.value.father_name?.email, Educationqual: this.studentform.value.father_name?.Educationqual, profession: this.studentform.value.father_name?.profession, designation: this.studentform.value.father_name?.designation, phone: this.studentform.value.father_name?.phone }, mother_name: { firstname: this.studentform.value.mother_name?.firstname, middlename: this.studentform.value.mother_name?.middlename, lastname: this.studentform.value.mother_name?.lastname, email: this.studentform.value.mother_name?.email, Educationqual: this.studentform.value.mother_name?.Educationqual, profession: this.studentform.value.mother_name?.profession, designation: this.studentform.value.mother_name?.designation, phone: this.studentform.value.mother_name?.phone }, emergency_contactlist: [...this.emgList.value], reference: [...this.ref.value] })
    }
    // console.log(this.arrdata);

  }
  // y=''
  //   getsel(element:any){
  //     console.log(element.target.value);
  //     this.y = element.target.value
  //     console.log(this.y);
  //     this.emgList.push({Relation:this.y,num:this.})
  //     console.log(this.emgList);

  //   }
  x=0;
  new1:any=[]
    modelarr:any=[]

  det(i:number){
    console.log(i);
    if(this.x==i){

      this.modelarr.push(this.arrdata)
      console.log(this.x);

    }
      console.log(this.modelarr[i]);
      // this.new1.push(this.modelarr[i])

    this.x++
  }

}
