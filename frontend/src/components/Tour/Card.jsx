import React from 'react'
import './tours.scss'
export const Card = () => {
  return (
    <div>

    <a href="" class="card">
      <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Unwind in Thailand</h3>            
            <span class="card__status">5N/6D</span> 
          </div>
        </div>
        <div class="disc">
            <div class="card__description">
                <div>
                    <i class="bx bxs-plane icon"></i>
                </div>
            </div>
            <div class="card__description">
                <div>
                    <i class="bx bx-building icon"></i>
                </div>
            </div>
            <div class="card__description">
                <div>
                    <i class="bx bx-walk icon"></i>
                </div>
            </div>
            <div class="card__description">
                <div >
                    <button class="custom-btn btn-10">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="card__description bottomdis">
            <ul>
                <li>Pattaya Floating Market</li>
                <li>Alcazar Show</li>
            </ul>
               <span class="pricet">Price: ₹45,345</span>
            </div>
      </div>
    </a>      
  
    </div>
  )
}