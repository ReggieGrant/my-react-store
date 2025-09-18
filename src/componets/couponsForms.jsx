import { useState } from "react";
import "./couponsForm.css";

function CouponsForms() {
  const [coupon, setCoupons] = useState({
    code: "",
    discount: 0,
  });

  function save() {
    console.log("Saving...", coupon);
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

    let copy = { ...coupon };
    if (name === "code") {
      copy.code = text;
    } else {
      copy.discount = text * 1; // parse it to a number
    }
    setCoupons(copy);
  }

  return (
    <div className="coupons-forms">
      <h3>Coupons</h3>

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
      </div>
    </div>
  );
}

export default CouponsForms;
