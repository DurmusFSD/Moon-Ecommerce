import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };
  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51PKHGA05NHVtvKfmVNMfcB2Wi7hKLxVCEdlfCvVWnXLwhb7dekrK3q1lTcoQgJlFPI9nMtaTu3K0FVbGK5F3kjcn00WEwEUwx2"
        amount={total * 100}
        name="Durmuş Özgül"
        email="Durmusozguljob@gmail.com"
        description="Payment test using stripe"
      >
        <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
