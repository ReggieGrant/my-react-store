import { useState } from "react";
import "./couponsForm.css";

function CouponsForms() {
  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupons] = useState({
    code: "",
    discount: 0,
  });

  const [showError, setShowError] = useState(false);

  function save() {
    console.log("Saving...", coupon);

    // validation
    if (!coupon.code || !coupon.discount) {
      setShowError(true);
      return; // exit the function
    } else {
      setShowError(false);
    }
  }

  function handleInput(e) {
    let text = e.target.value;
    let name = e.target.name;
    console.log(name, text);

    /**
     * 3 steps
     * - create a copy
     * - modify the copy
     * - set the copy back
     */

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  return (
    <div className="coupons-forms">
      <h3>Coupons</h3>
      <div className="error">
        Invalid data, please check again
        {showError ? <div className="error">Invalid Coupon</div> : null}
      </div>

      <div>
        <label className="form-label">Code</label>

        <input
          onBlur={handleInput}
          name="code"
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label className="form-label">Discount</label>
        <input
          onBlur={handleInput}
          name="discount"
          type="text"
          className="form-control"
        />
      </div>
      <div className="controls">
        <button onClick={save} className="btn btn-primary">
          Save
        </button>

        <ul className="list-group">
          {allCoupons.map((cp) => (
            <li>
              {cp.code} - {cp.discount}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CouponsForms;
