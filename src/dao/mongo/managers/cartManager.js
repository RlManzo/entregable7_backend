import cartModel from "../models/cart.model.js";

export default class CartManager {
  getCarts = (params) => {
    return cartModel.find(params).lean();
  };
  getCartById = async (params, options = {}) => {
    if (options.populate) {
      return cartModel.findOne(params).populate("products.product");
    }
    return cartModel.findOne(params);
  };

  createCart = () => {
    return cartModel.create({ products: [], populate: true });
  };

  updateCart = (id, cart) => {
    return cartModel.updateOne({ _id: id }, { $set: cart });
  };

  deleteCart = (id) => {
    return cartModel.deleteOne({ _id: id });
  };
}
