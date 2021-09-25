import React, { Component } from 'react'
import Album from './Album';
import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "three-cards">
                {/* pass array directly from app */}
                {this.props.deleteFunc.map(album => {
                return (<ul>
                    <img alt="example" src="https://pbs.twimg.com/media/ENHL1IpUYAI57ES.jpg" width="300" height="380" />
                    <li>{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.album_cover}</li>


                    </ul>)
            })}

                <Album artist= "Vijay T" album_title= "Master" album_cover= "Music Anirudh R" songs= "Sound Track1"/>
                <Album artist= "Naveen Polishetty" album_title= "Jathirathnalu" album_cover="Music Radhan" songs= "Sound Track2"/>
                <Album artist= "Suriya" album_title= "Aakasam Nee Haddura" album_cover= "Music G. V. Prakash" songs= "Sound Track3"/>
            </div>
        )
    }
}

export default Albums