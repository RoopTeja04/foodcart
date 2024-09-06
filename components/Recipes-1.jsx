import React, { useState } from 'react';
import Recipes1Data from '../Data/veg';
import PopUp from "../popUp/popup";
import OrderConfirmation from '../popUp/orderPop';

const Recipes1 = () => {

    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    
    function handleOrder(item){
        setCurrentItem(item);
        setShow(true);
    }

    function hadleCancel(){
        setShow(false)
        setCurrentItem(null);
    }

    function handleConfirm(details){
        setOrderDetails(details);
        setShow(false);
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
        setOrderDetails(null);
    };

    return (
        <>
            <h1 className='recipes-header'>Break Fast</h1>
            <div className='recipe'>
                {
                    Recipes1Data.map((item) => (
                        <>
                            <div className='recipes-data' key={item.id}>
                                <div className='item-image-banner'>
                                    <img className='item-image' src={item.img} alt={item.name} />
                                </div>
                                <div className='item-details'>
                                    <span className='item-details-name'>{item.name}</span>
                                    <span className='item-details-des'>{item.des}</span>
                                    <span className='item-details-price'>price: <span className="item-details-price-num">₹{item.price}</span>/-</span>
                                </div>
                                <div className='item-buttons'>
                                    <button className='item-save'>save cart</button>
                                    <button className='item-order' onClick={() => {handleOrder(item)}}>order now</button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            {
                setShow && (
                    < PopUp
                        item={currentItem}
                        onConfirm={handleConfirm}
                        onClose={hadleCancel} 
                    />
                )
            }
            {
                showConfirmation && (
                    <OrderConfirmation
                        orderDetails={orderDetails}
                        onClose={handleCloseConfirmation}
                    />
                )
            }
        </>
    )
}

export default Recipes1;