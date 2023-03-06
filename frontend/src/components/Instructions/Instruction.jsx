import React from 'react'
import './instructions.scss'
import flight1 from './images-instruction/flight1.png'
import flight2 from './images-instruction/flight2.png'
import flight3 from './images-instruction/flight3.png'
import flight4 from './images-instruction/flight4.png'
import tour1 from './images-instruction/tour1.png'
import tour2 from './images-instruction/tour2.png'
import tour3 from './images-instruction/tour3.png'
import tour4 from './images-instruction/tour4.png'

export const Instruction = () => {
  return (
    <div>
        <div class="instruction-sc">
            
        <div clsss="flight-instruction">
            <p class="Flight-p text-of-instruct-head ">Flight BooK Instruction</p>
            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={flight1} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct ">Step 1 </p>
                    <ol class="c text-of-instruct color-change">
                        <li  class="text-of-instruct" >Click on Flights</li>
                    </ol>
                </div>
            </div>

            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={flight2} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct">Step 2 </p>
                    <ol class="c text-of-instruct ">
                        <li class="text-of-instruct" >Select From</li>
                        <li  class="text-of-instruct">Select To</li>
                    </ol>
                </div>
            </div>

            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={flight3} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct">Step 3 </p>
                    <ol class="c text-of-instruct color-change">
                        <li  class="text-of-instruct">Click on Buy Now</li>
                    </ol>
                </div>
            </div>

            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={flight4} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct ">Step 4 </p>
                    <ol class="c text-of-instruct color-change">
                        <li class="text-of-instruct">Fill the card details</li>
                        <li class="text-of-instruct">Click on Pay Button</li>
                    </ol>
                </div>
            </div>
        </div>
         
         <div clsss="flight-instruction">
            <p class="Tour-p text-of-instruct-head ">Tour BooK Instruction</p>
            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={tour1} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct ">Step 1 </p>
                    <ol class="c text-of-instruct color-change">
                        <li class="text-of-instruct">Click on Tours</li>
                        
                    </ol>
                </div>
            </div>

            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={tour2} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct ">Step 2 </p>
                    <ol class="c text-of-instruct color-change">
                        <li class="text-of-instruct">Hover on tour card</li>
                        <li class="text-of-instruct">Click on read more</li>
                    </ol>
                </div>
            </div>

            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={tour3} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct ">Step 3 </p>
                    <ol class="c text-of-instruct color-change">
                        <li class="text-of-instruct">Read the Pacage Details</li>
                        <li class="text-of-instruct" >If question click on Have Question</li>
                        <li class="text-of-instruct">Or to book the Tour click on Book Tour</li>
                    </ol>
                </div>
            </div>

            <div class="image-steps">
                <div class="discr-of-flight">
                    <img class="image-of-flight" src={tour4} alt="" />
                </div>
                <div class="discr-of">
                    <p class="step-to-book text-of-instruct ">Step 4 </p>
                    <ol class="c text-of-instruct color-change">
                       <li class="text-of-instruct">Hover on tour card</li>
                        <li class="text-of-instruct">Click on read more</li>
                    </ol>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}
