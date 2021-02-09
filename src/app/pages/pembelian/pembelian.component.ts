import { Component, OnInit } from '@angular/core';
import { PembelianService } from '../../services/pembelian/pembelian.service';
import { SupplierService } from '../../services/supplier/supplier.service';


@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  supplier: any;
  headerPembelian: any;
  detailPembelian: any;
  headerPembelians = {
    kodePembelian : '',
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


  constructor(private pembelianService: PembelianService,private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getAllHeader();
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

  

}
