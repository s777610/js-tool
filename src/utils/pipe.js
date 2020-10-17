const addItemToCart = (user, item) => {
  history.push(user);
  const updatedCart = user.cart.concat(item);
  return { ...user, cart: updatedCart };
};
const applyTaxToItems = (user) => {
  history.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return { ...user, cart: updatedCart };
};
const buyItem = (user) => {
  history.push(user);
  const itemsInCart = user.cart;
  return { ...user, purchases: itemsInCart };
};
const emptyUserCart = (user) => {
  history.push(user);
  return { ...user, cart: [] };
};

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};
const history = [];

// Each function can accept N arguments.
const pipe = (...fns) => {
  return fns.reduce((f, g) => {
    return (...args) => g(f(...args));
  });
};

// Each function may only accept a single argument.
// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const res = pipe(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart
)(user, { name: 'laptop', price: 60 });

console.log(JSON.stringify({ res }, null, 2));
