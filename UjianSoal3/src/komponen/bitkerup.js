import React, { Component } from 'react';
import axios from 'axios';



class bitkerup extends Component {

    constructor(){
        super();
        this.state ={
            valuta : 0 
        }
    }

    change(){
        this.setState({Btc:'btc' + this.refs.nama.value})
        
        axios.get('https://blockchain.info/tobtc?currency=USD&value=1')

        .then((ambilData)=>{
            console.log(ambilData.data)
            var rupiah = 14000/ambilData.data 
           
            console.log(rupiah)
            this.setState({
                nilai : 'Rp' + rupiah*this.refs.nama.value
            })
        })
    }


    
   

  render() {
    return (
      <div style={{fontFamily:'fantasy',color:'green'}}>
          <div className="today">
            <h1>Konversi Bitcoin ke Rupiah</h1>
            <h3>Kurs 1 USD = 14.000 IDR </h3>
            <input onChange={()=>{this.change();}} ref="nama" ></input><br />
            <h1> 
            {this.state.Btc} =
            {this.state.nilai}
            </h1>
          </div>
               
      </div>
     
    );
  }
}

export default bitkerup;