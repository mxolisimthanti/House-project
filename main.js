document.getElementById("payButton").addEventListener("click", function () {
  alert("Online payment integration coming soon.\nStripe / PayPal supported.");
});

/*
 STRIPE REAL SETUP (later)
 const stripe = Stripe("YOUR_PUBLIC_STRIPE_KEY");
 stripe.redirectToCheckout({
   sessionId: "SESSION_ID_FROM_BACKEND"
 });
*/
