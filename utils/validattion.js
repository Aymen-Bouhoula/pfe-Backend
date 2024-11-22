const Joi = require("joi");

function validationProduct(product) {
  const shema = Joi.object({
    name: Joi.string().max(20).required(),
    price: Joi.number().max(20).required(),
    brand: Joi.string().max(20).required(),
    imageURL: Joi.string().max(20).required(),
    isAvailable: Joi.boolean().required(),
    quantityInStore: Joi.number().max(20).required(),
  });

  return shema.validate(product);
}

module.exports = validationProduct;
