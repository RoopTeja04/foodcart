import React from 'react';

const OrderConfirmation = ({ orderDetails, onClose }) => {
    if (!orderDetails) {
        return null;
    }

    return (
        <div className="confirmation-model">
            <h2 className='confirmation-model-name'>Order Confirmation</h2>
            <div className='condirmation-de'>
                <div>
                    <img className='confirmation-details-img' src={orderDetails.img} alt=''/>
                </div>
                <div className="confirmation-details">
                    <p className='confirmation-details-name'><strong>Item:</strong> {orderDetails.name}</p>
                    <p className='confirmation-details-name'><strong>Description:</strong> {orderDetails.description}</p>
                    <p className='confirmation-details-name'><strong>Price:</strong> ₹{orderDetails.price} /-</p>
                    <p className='confirmation-details-name'><strong>Quantity:</strong> {orderDetails.quantity}</p>
                    <p className='confirmation-details-name'><strong>Total Price:</strong> ₹{orderDetails.totalPrice} /-</p>
                    <p className='confirmation-details-name'><strong>Delivery Charge:</strong> ₹{orderDetails.Delivery_Charge} /-</p>
                    <p className='confirmation-details-name'><strong>Grand Total:</strong> ₹{orderDetails.grandTotal} /-</p>
                </div>
            </div>
            <button className='confirmation-button' onClick={onClose}>Close</button>
        </div>
    );
};

export default OrderConfirmation;
