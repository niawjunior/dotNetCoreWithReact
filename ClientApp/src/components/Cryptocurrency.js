import React, { Component } from 'react';
    import './Cryptocurrency.css';

    class Cryptocurrency extends Component {

        render() {
            var {
               name,
               instagramId,
               imgUrl
            } = this.props.data;
            return (
                <li className={"cryptocurrency " + name}>
                    <p className="cryptocurrency-name">{name}</p>
                    <p>Instagram {instagramId}</p>
                    <img className={"bnk"} src={imgUrl}/>
                </li>
            );
        }
    }

    export default Cryptocurrency;