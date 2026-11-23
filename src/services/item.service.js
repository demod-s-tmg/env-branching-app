const Item = require('../models/item.model');

const createItem = async (data) => {
  return await Item.create(data);
};

const getAllItems = async () => {
  return await Item.find();
};

const getItemById = async (id) => {
  return await Item.findById(id);
};

const updateItem = async (id, data) => {
  return await Item.findByIdAndUpdate(id, data, { new: true });
};

const deleteItem = async (id) => {
  return await Item.findByIdAndDelete(id);
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};