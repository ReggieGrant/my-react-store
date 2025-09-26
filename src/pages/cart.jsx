import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import "./cart.css";

function Cart() {
  const context = useContext(GlobalContext);

  // Calculate total price
  const calculateTotal = () => {
    return context.cart.reduce((total, prod) => {
      return total + (prod.price * prod.quantity);
    }, 0).toFixed(2);
  };

  // Handle remove item from cart
  const handleRemoveItem = (productId) => {
    // You'll need to implement this function in your GlobalContext
    // context.removeFromCart(productId);
    console.log('Remove item:', productId);
  };

  // Handle checkout
  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    // Add your checkout logic here
  };

  if (!context.cart || context.cart.length === 0) {
    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div className="cart-empty">
          <h3>Your cart is empty</h3>
          <p>Add some products to get started!</p>
          <button 
            className="btn btn-pay"
            onClick={() => window.location.href = '/catalog'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      <div className="parent">
        <div className="list">
          {context.cart.map((prod, index) => (
            <div key={prod.id || index} className="cart-item">
              {/* Product Image */}
              <img 
                src={`./images/${prod.image}`} 
                alt={prod.title}
                className="cart-item-image"
                onError={(e) => {
                  e.target.src = './images/placeholder.jpg'; // Fallback image
                }}
              />
              
              {/* Product Details */}
              <div className="cart-item-details">
                <h4 className="cart-item-title">{prod.title}</h4>
                
                <div className="cart-item-info">
                  <div className="cart-item-label">
                    <span>Quantity</span>
                    <span>{prod.quantity}</span>
                  </div>
                  
                  <div className="cart-item-label">
                    <span>Price</span>
                    <span>${prod.price}</span>
                  </div>
                  
                  <div className="cart-item-label">
                    <span>Total</span>
                    <span className="cart-item-total">
                      ${(prod.price * prod.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Remove Button */}
              <button 
                className="btn btn-remove"
                onClick={() => handleRemoveItem(prod.id)}
                aria-label={`Remove ${prod.title} from cart`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="side-menu">
          <h3>Order Summary</h3>
          
          {/* Cart Statistics */}
          <div className="order-stats">
            <div className="stat-item">
              <span>Items: {context.cart.length}</span>
            </div>
            <div className="stat-item">
              <span>
                Qty: {context.cart.reduce((total, prod) => total + prod.quantity, 0)}
              </span>
            </div>
          </div>
          
          {/* Total Price */}
          <h2>${calculateTotal()}</h2>
          
          {/* Additional Order Details */}
          <div className="order-details">
            <div className="detail-row">
              <span>Subtotal:</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="detail-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="detail-row">
              <span>Tax:</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          
          {/* Checkout Button */}
          <button 
            className="btn btn-pay"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
          
          {/* Continue Shopping Link */}
          <button 
            className="btn btn-secondary"
            onClick={() => window.location.href = '/catalog'}
            style={{
              marginTop: 'var(--space-md)',
              background: 'transparent',
              border: '2px solid var(--glass-border)',
              color: 'var(--text-secondary)'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
