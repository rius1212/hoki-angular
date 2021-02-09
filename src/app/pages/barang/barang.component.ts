import { Component, OnInit } from '@angular/core';
import { BarangService } from '../../services/barang/barang.service';
import { KategoriService } from '../../services/kategori/kategori.service';


@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {

  barang: any;
  kategori: any;
  barangs = {
    kodeBarang: '',
    namaBarang: '',
    kodeKategori: '',
  }
  title: String = 'Tambah';
  showModalBox: boolean = false;
  updatedId: String = '';

  constructor(private barangService: BarangService,private kategoriService: KategoriService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getKategori():void{
    this.kategoriService.getAll()
      .subscribe(
        data => {
          this.kategori = data;
        },
        error => {
          console.log(error)
        }
      );
  }

  public open(){
    if(0){
      this.showModalBox = false;
    }else{
      this.showModalBox = true;
    }
  }

  getAll(): void {
    this.barangService.getAll()
      .subscribe(
        data => {
          this.getKategori();
          this.barang = data;
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const data = {
      kodeBarang:  this.barangs.kodeBarang,
      namaBarang:  this.barangs.namaBarang,
      kodeKategori:  this.barangs.kodeKategori,
    };

    this.barangService.create(data)
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
      kodeBarang:  this.barangs.kodeBarang,
      namaBarang:  this.barangs.namaBarang,
      kodeKategori:  this.barangs.kodeKategori,
    };

    this.barangService.update(this.updatedId,data)
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
    this.barangService.delete(id)
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
    this.barangs.kodeBarang = data.kodeBarang,
    this.barangs.namaBarang = data.namaBarang,
    this.barangs.kodeKategori = data.kodeKategori,
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
    this.barangs = {
      kodeBarang: '',
      namaBarang: '',
      kodeKategori: '',
    }
  }

}
