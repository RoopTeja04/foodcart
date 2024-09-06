import React, { useState } from 'react';

const Popup = ({ item, onClose, onConfirm }) => {
    const [count, setCount] = useState(1);
    const delivery_Charge = 30; 

    if (!item) {
        return null;
    }

    const handleInc = () => setCount(count + 1);

    const handleDec = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const totalPrice = item.price * count;
    const grandTotal = totalPrice + delivery_Charge;

    const handleConfirm = () => {
        const orderDetails = {
            name: item.name,
            img: item.img,
            description: item.des,
            price: item.price,
            quantity: count,
            totalPrice,
            Delivery_Charge: delivery_Charge,
            grandTotal
        }
        onConfirm(orderDetails);
    }

    return (
        <div className="order-section">
            <h2 className='order-section-name'>Confirm Order</h2>
            <div className='order-section-block'>
                <div className='order-section-img'>
                    <img className='order-section-img-item' src={item.img} alt='' />
                </div>
                <div className='order-section-details'>
                    <span className='order-section-details-name'>{item.name}</span>
                    <span className='order-section-details-des'>{item.des}</span>
                    <span className='order-section-details-price-1'>Price: <span className='order-section-details-price-2'>₹{item.price}</span> /-</span>
                    <div className='order-section-quantity'>
                        <button className='order-section-quantity-inc' onClick={handleInc}>+</button>
                        <div className='order-section-quantity-n'>
                            <span className='order-section-quantity-num'>{count}</span>
                        </div>
                        <button className='order-section-quantity-dec' onClick={handleDec}>-</button>
                    </div>
                    <span className='total-price'>Total Price: <span className='total-price-num'>₹{totalPrice}</span> /-</span>
                    <span className='delivery-charge'>Delivery Charge: <span className='delivery-charge-amount'>₹{delivery_Charge}</span> /-</span>
                    <span className='grand-total'>Grand Total: <span className='grand-total-amount'>₹{grandTotal}</span> /-</span>
                </div>
                <div className='order-section-buttons'>
                    <button className='order-section-btn-1' onClick={handleConfirm}>Confirm Order</button>
                    <button className='order-section-btn-2' onClick={onClose}>Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;

