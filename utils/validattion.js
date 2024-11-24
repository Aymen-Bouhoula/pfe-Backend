const Joi = require("joi");

function validationProduct(product) {
  const shema = Joi.object({
    name: Joi.string().max(200).required(),
    price: Joi.number().max(200).required(),
    brand: Joi.string().max(200).required(),
    imageURL: Joi.string().max(200).required(),
    isAvailable: Joi.boolean().required(),
    quantityInStore: Joi.number().max(200).required(),
  });

  return shema.validate(product);
}

module.exports = validationProduct;
