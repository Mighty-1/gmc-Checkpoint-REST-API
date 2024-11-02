const express = require("express");
const userModel = require("../model/user.model");

const createUser = (data) => {
  const newUser = userModel.create(data);
  try {
    if (!newUser) {
      const errorResponse = `User not created`;
      throw new Error(errorResponse);
    } else {
      return newUser;
    }
  } catch (error) {
    return error;
  }
};

const updateUserById = (id, obj) => {
  const updateUser = userModel.updateOne(id, obj)
  try {
    if (!updateUser) {
      const errorResponse = `User Not Updated`;
      throw new Error(errorResponse);
    } else {
      return updateUser;
    }
  } catch (error) {
    return error;
  }
}

const fetchAllUsers = () => {
  const fetchUsers = userModel.find({});
  try {
    if (!fetchUsers) {
      const errorResponse = `No Users Found`;
      throw new Error(errorResponse);
    } else {
      return fetchUsers;
    }
  } catch (error) {
    return error;
  }
};

const delById = async (id) => {
  const query = { _id: id };
  const delOne = await userModel.deleteOne(query);
  try {
    if (!delOne) {
      const errorResponse = `Not Deleted`;
      throw new Error(errorResponse);
    } else {
      return delOne;
    }
  } catch (error) {
    return error;
  }
};


module.exports = { createUser, fetchAllUsers, delById, updateUserById };
