import React, { Component } from 'react';
import axios from 'axios';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
            ]
        };
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
    }

    fetchCryptocurrencyData() {
        var result = [
            {
            name: "Cherprang",
            imgUrl: "https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg",
            instagramId: "cherprang.bnk48official"
            },
            {
            name: "Orn",
            imgUrl: "https://media-spiceee.net/uploads/content/image/1643617/large_3ec1f891-1a5c-4905-b298-4cb27667320c.jpg",
            instagramId: "orn.bnk48official"
            },
            {
            name: "Music",
            imgUrl: "https://i.pinimg.com/736x/3a/3d/56/3a3d569c3186f168e30256b46095e8de.jpg",
            instagramId: "music.bnk48official"
            },
            {
            name: "Pun",
            imgUrl: "https://i.pinimg.com/736x/cf/ed/05/cfed05907f9acbb70300dcb38b3eb1e2.jpg",
            instagramId: "pun.bnk48official"
            },
            {
            name: "Mobile",
            imgUrl: "https://lifestyle.campus-star.com/app/uploads/2018/01/Mobile-BNK48-4.jpg",
            instagramId: "mobile.bnk48official"
            },
            {
            name: "Jennis",
            imgUrl: "https://themomentum.co/wp-content/uploads/2018/01/TheMomentum-Jennis-Cover-1.png",
            instagramId: "jennis.bnk48official"
            },
            {
            name: "Mewnich",
            imgUrl: "https://thailandsuperstar.com/images/pix/7612703972/F_1779520031933369418.jpg",
            instagramId: "mewnich.bnk48official"
            }
            ]
            this.setState({ data: result});
    }

    render() {
        var tickers = this.state.data.map((bnk) =>
            <Cryptocurrency data={bnk} key={bnk.name} />
        );
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
           </div>
        );
    }
}

export default Tickers;