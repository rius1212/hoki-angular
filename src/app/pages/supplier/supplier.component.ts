import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplier: any;
  suppliers = {
    kodeSupplier : '',
    namaSupplier : '',
    linkSupplier: ''
  }
  title: String = 'Tambah';
  showModalBox: boolean = false;
  updatedId: String = '';


  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public open() {
    if(0){
      this.showModalBox = false;
    } else {
       this.showModalBox = true;
    }
  }

  getAll(): void {
    this.supplierService.getAll()
      .subscribe(
        data => {
          this.supplier = data;
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const data = {
      kodeSupplier:  this.suppliers.kodeSupplier,
      namaSupplier:  this.suppliers.namaSupplier,
      linkSupplier:  this.suppliers.linkSupplier
    };

    this.supplierService.create(data)
      .subscribe(
        response => {
          this.resetForm();
          this.getAll();

        },
        error => {
          alert('Save Gagal')
        });
  }

  update(): void {
    const data = {
      kodeSupplier:  this.suppliers.kodeSupplier,
      namaSupplier:  this.suppliers.namaSupplier,
      linkSupplier:  this.suppliers.linkSupplier
    };

    this.supplierService.update(this.updatedId,data)
      .subscribe(
        response => {
          this.resetForm();
          this.getAll();
        },
        error => {
          this.resetForm();
          this.getAll();
        });
  }

  delete(id){
    this.supplierService.delete(id)
    .subscribe(
      response =>{
        alert("delete berhasil");
        this.getAll();
      }
    )
  }

  setForm(data){
    console.log(data)
    this.updatedId = data.id;
    this.suppliers.kodeSupplier = data.kodeSupplier;
    this.suppliers.namaSupplier = data.namaSupplier;
    this.suppliers.linkSupplier = data.linkSupplier;
    this.title = 'Edit';
    this.open()
  }

  prepare(){
    if(this.title === 'Tambah'){
      this.save();
    }else{
      this.update();
    }
  }

  resetForm(){
    this.title = 'Tambah';
    this.suppliers = {
      kodeSupplier: '',
      namaSupplier : '',
      linkSupplier: ''
    }
  }

}
