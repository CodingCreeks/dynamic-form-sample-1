import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: [`.error { color: red; }    `]
})
export class DynamicFormComponent implements OnInit {
  @Input() config;
  @Input() data;
  form: FormGroup;
  objectProps;

  constructor() {
  }

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps =
      Object.keys(this.config)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.config[prop]);
        });

    // setup the form
    const formGroup = {};
    for (let prop of Object.keys(this.config)) {
      formGroup[prop] = new FormControl(this.config[prop].value || '', this.mapValidators(this.config[prop].validation));
    }

    this.form = new FormGroup(formGroup);
    this.form.patchValue(this.data);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    console.log(form);
  }
}
