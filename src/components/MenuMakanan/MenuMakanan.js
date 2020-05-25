import React from 'react';

var menuMakanan = (props) => {
    if (props.stok > 0) {
        return (
            <div style={{ border: '1px solid black', width: 300, margin: 'auto' }} >
                <p>Nama Menu: {props.namaMenu}</p>
                <p>Harga : Rp {props.hargaMenu}</p>
                <p>Stok : {props.stok} </p>
            </div>
        );
    } else if (props.stok < 1 || props.stok == 0) {
        return null;
    }
};

export default menuMakanan;