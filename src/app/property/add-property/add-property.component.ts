import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('form') addpropertyform:NgForm | undefined;
  constructor(private routeer:Router) { }

  ngOnInit() {
  }
  onback()
  {
    this.routeer.navigate(['/'])
  }

  onSubmit()
  {
    console.log(this.addpropertyform)
  }

}
