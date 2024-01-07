import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Post extends Component {
    render() {
        return (
            <div>
                <div class="h-56">
                    <p class="px-10 my-5"> Hello,Its me aakash kandel and I am practicing here react js for my final project defense of 6th semester. This program is awesome for building a dynamic web application.Basically,Its a javascript library or we can say react use javascript libary and enhance the visuability of the web page means through javascript libary we can make our webpage attractive or dynamic.</p>
                    <p class="px-10 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, reiciendis. Assumenda, exercitationem natus eius tenetur porro similique corrupti impedit at ut quia unde officia modi molestiae! Consequuntur veniam aut repellat.</p>
                    <p class="px-10 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt impedit expedita repellendus, reiciendis voluptas, ipsum aspernatur modi atque similique odio nulla animi repudiandae. Nam harum tempora placeat? Quos, minima?</p>
                </div>
                <div>
                    <div> 
                        <div> <Link to>Page 1</Link></div>
                        <div> <Link to="">Page 2</Link></div>
                        <div> <Link to="">Page 3</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

