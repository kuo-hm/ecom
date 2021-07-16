const Order = require("../Model/order");
const Cart = require("../Model/Cart");
const User = require("../Model/User");

module.exports.get_orders = async (req, res) => {
  const userId = req.params.id;
  Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};

module.exports.checkout = async (req, res) => {
  const userId = req.params.id;
  const order = new Order({
    userId,
    status: "checkout",
    date: new Date(),
  });
  await order.save();
  Cart.findOne({ userId })
    .then((cart) => {
      if (cart) {
        return cart.remove();
      }
    })
    .then(() => res.json({ status: "ok" }));
};
