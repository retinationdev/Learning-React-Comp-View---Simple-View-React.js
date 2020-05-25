import React, { Component } from 'react'
// import React, { createElement } from 'react';
// import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {

  constructor() {
    super();
    this.state = {
      namaResto: "Lapeeer",
      namaPembeli: "",
      keteranganPembeli: "",
      jenisPembayaran: "",
      menuMakanan: [
        { namaMakanan: "Ayam Bakar", harga: 25000, stok: 10 },
        { namaMakanan: "Ayam Goreng", harga: 20000, stok: 0 },
        { namaMakanan: "Ayam Kecap", harga: 22000, stok: 12 },
      ],
      menuMinuman: [
        { id: 1, namaMinuman: "Soda", harga: 10000, stok: 10 },
        { id: 2, namaMinuman: "Susu", harga: 15000, stok: 20 },
        { id: 3, namaMinuman: "Teh", harga: 5000, stok: 7 },
      ]
    }
  }

  handleGantiNama = (nama) => {
    this.setState({ namaResto: nama });
  }

  // handleGantiNamaPembeli = (event) => {
  //   this.setState({ namaPembeli: event.target.value })
  // }

  // handleKeterangan = (event) => {
  //   this.setState({ keteranganPembeli: event.target.value })
  // }

  // handleJenisPembayaran = (event) => {
  //   this.setState({ jenisPembayaran: event.target.value })
  // }

  handleChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div className="App">
        <h1>Cafe & Resto {this.state.namaResto}</h1>
        {/* <button type="button" class="btn btn-primary" data-toggle="button" onClick={this.handleGantiNama} >Ganti nama Resto</button> */}
        <button type="button" class="btn btn-primary" dataToogle="button" name="namaResto" onClick={() => this.handleGantiNama('Genduuut')} >Ganti nama Resto</button>

        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-md-4 offset-md-4">

            <div className="form-group">
              <label for="">Nama</label>
              <input type="text"
                className="form-control" name="namaPembeli" id="namaPembeli" placeholder="Masukkan Nama"
                onChange={this.handleChange} value={this.state.namaPembeli}
              />
              <small class="text-muted">Nama Pembeli: {this.state.namaPembeli} </small>
            </div>

            <div className="form-group">
              <label for="">Keterangan</label>
              <textarea type="text" name="keteranganPembeli" id="keteranganPembeli" className="form-control" placeholder="Tuliskan Keterangan" rows="3"
                onChange={this.handleChange} value={this.state.keteranganPembeli}
              />
              <small className="text-muted">Keterangan : {this.state.keteranganPembeli} </small>
            </div>

            <div className="form-group">
              <label for="">Jenis Pembayatan</label>
              <select className="form-control" name="jenisPembayaran" id="jenisPembayaran"
                value={this.state.value} onChange={this.handleChange} >
                <option value="Tunai">Tunai</option>
                <option value="Kartu Kredit">Kartu Kredit</option>
                <option value="Kupon">Kupon</option>
              </select>
              <small className="text-muted">Jenis Pembayaran: {this.state.jenisPembayaran}</small>
            </div>

          </div>
        </div>

        <br />
        <h2>Menu Makanan</h2>
        <MenuMakanan
          namaMenu={this.state.menuMakanan[0].namaMakanan}
          hargaMenu={this.state.menuMakanan[0].harga}
          stok={this.state.menuMakanan[0].stok} />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[1].namaMakanan}
          hargaMenu={this.state.menuMakanan[1].harga}
          stok={this.state.menuMakanan[1].stok} />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[2].namaMakanan}
          hargaMenu={this.state.menuMakanan[2].harga}
          stok={this.state.menuMakanan[2].stok} />
        {/* <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={22000} /> */}

        <h2>Menu Minuman</h2>
        {
          this.state.menuMinuman.map((menu, index) =>
            <MenuMinuman key={menu.id} namaMenu={menu.namaMinuman} hargaMenu={menu.harga} stok={menu.stok} />
          )
        }

      </div >
    );
  }
}

export default App;



// function App() {


//   return (
//     <div className="App">
//       <h1>Cafe & Resto Codepolitan</h1>
//       <h2>Menu Makanan</h2>
//       <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000} />
//       <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={22000} />

//       <h2>Menu Minuman</h2>
//       <MenuMinuman namaMenu={"Soda"} hargaMenu={"10000"} />
//       <MenuMinuman namaMenu={"Susu"} hargaMenu={"15000"} />

//     </div>
//   );
// }

// export default App;
