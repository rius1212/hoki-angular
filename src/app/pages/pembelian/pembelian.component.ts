import { Component, OnInit } from '@angular/core';
import { PembelianService } from '../../services/pembelian/pembelian.service';
import { SupplierService } from '../../services/supplier/supplier.service';
import { BarangService } from '../../services/barang/barang.service';


@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  supplier: any;
  headerPembelian: any;
  detailPembelian: any;
  dropdownMetode: any;
  barang:any;
  headerPembelians = {
    kodePembelian : '',
    kodePembelianGenerated: '',
    tanggalPembelian: '',
    kodeSupplier: '',
    metodePembayaran: '',
    totalPembelian: '',
    ongkir: '',
    potongan: '',
  }
  detailPembelians = {
    kodePembelian : '',
    kodeBarang: '',
    namaBarang: '',
    hargaBeli: '',
    quantity: '',
    totalHarga: '',
  }
  title: String = 'Tambah';
  showModalBox: boolean = false;
  updatedId: String = '';


  constructor(private pembelianService: PembelianService,private supplierService: SupplierService,private barangService: BarangService) { }

  ngOnInit(): void {
    this.getAllHeader();
    this.dropdownMetode = [
      "Transfer Bank","ShoppePay","ShoppePayLater","OVO","DANA","GOPAY"
    ]
  }

  public open() {
    if(0){
      this.showModalBox = false;
    } else {
       this.showModalBox = true;
    }
  }

  getAllHeader(): void {
    this.pembelianService.getAllHeader()
      .subscribe(
        data => {
          this.headerPembelian = data;
          this.getAllSupplier();
          this.getAllBarang();
        },
        error => {
          console.log(error);
        });
  }

  getAllSupplier(): void {
    this.supplierService.getAll()
      .subscribe(
        data => {
          this.supplier = data;
        },
        error => {
          console.log(error);
        });
  }

  getAllBarang(): void {
    this.barangService.getAll()
      .subscribe(
        data => {
          this.barang = data;
        },
        error => {
          console.log(error);
        });
  }

  resetForm(){
    this.title = 'Tambah';
    this.headerPembelians = {
      kodePembelian : '',
      kodePembelianGenerated: '',
      tanggalPembelian: '',
      kodeSupplier: '',
      metodePembayaran: '',
      totalPembelian: '',
      ongkir: '',
      potongan: '',
    }
    this.detailPembelians = {
      kodePembelian : '',
      kodeBarang: '',
      namaBarang: '',
      hargaBeli: '',
      quantity: '',
      totalHarga: '',
    }
  }

  

}
