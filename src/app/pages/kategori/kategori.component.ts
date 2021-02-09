import { Component, OnInit } from '@angular/core';
import { KategoriService } from '../../services/kategori/kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  kategori: any;
  kategoris = {
    namaKategori : '',
    kodeKategori: ''
  }
  title: String = 'Tambah';
  showModalBox: boolean = false;
  updatedId: String = '';

  constructor(private kategoriService: KategoriService) { }

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
    this.kategoriService.getAll()
      .subscribe(
        data => {
          this.kategori = data;
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const data = {
      namaKategori:  this.kategoris.namaKategori,
      kodeKategori:  this.kategoris.kodeKategori
    };

    this.kategoriService.create(data)
      .subscribe(
        response => {
          this.kategoris = {
            namaKategori : '',
            kodeKategori: ''
          }
          this.getAll();

        },
        error => {
          alert('Save Gagal')
        });
  }

  update(): void {
    const data = {
      namaKategori:  this.kategoris.namaKategori,
      kodeKategori:  this.kategoris.kodeKategori
    };

    this.kategoriService.update(this.updatedId,data)
      .subscribe(
        response => {
        },
        error => {
          this.kategoris = {
            namaKategori : '',
            kodeKategori: ''
          }
          this.getAll();
          this.title = 'Tambah';
        });
  }

  delete(id){
    this.kategoriService.delete(id)
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
    this.kategoris.namaKategori = data.namaKategori;
    this.kategoris.kodeKategori = data.kodeKategori;
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


}
