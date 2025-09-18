import "./admin.css";
import CouponsForms from "../componets/couponsForms";
import ProductForm from "../componets/productForm";

function Admin() {
  return (
    <div className="admin">
      <h1>Store Managment</h1>

          <div className="parent">  

            <ProductForm/>
            

            <CouponsForms/>

          </div>
        </div>
      );
    }
    
    export default Admin;