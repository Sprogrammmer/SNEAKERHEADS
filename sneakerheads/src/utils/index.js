/**
 * This function calculates total price of a new order
 * @param { Array } products cartProduct: Array of Objects
 * @return { number } totalPrice
 */

export const subtotalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => sum += product.price)
    return sum;
}

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => sum += product.price)
    return sum + 4.99;
}
