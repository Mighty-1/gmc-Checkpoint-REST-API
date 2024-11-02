const express = require("express");
const userService = require("../service/user.service");
const bcrypt = require("bcrypt");
const mailSender = require("../util/new");

const createUser = async (req, res) => {
  const data = req.body;
  data.password = bcrypt.hashSync(data.password, 10);
  const email = data.email;
  if (data.email === "") {
    res.status(404).json({ msg: `Email Required` });
  } else {
    let emailValidation = email.includes("@");
    if (emailValidation) {
      const newUser = await userService.createUser(data);
      try {
        if (newUser) {
          res.status(201).json({ msg: `CREATED`, data: newUser, status: true });
          mailSender.mailSender(newUser.email);
        } else {
          res.json({ msg: `Not Created`, data: data, status: false });
        }
      } catch (error) {
        return error;
      }
    } else {
      return res
        .status(201)
        .json({ msg: `Your supplied email: ${email} format not supported` });
    }
  }
};

const updateUserById = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const query = { _id: id };
  const updateUser = await userService.updateUserById(query, data);
  if (!updateUser) {
    res.json({ msg: `Not Updated` });
  } else {
    res.status(201).json({ msg: `User Updated`, data: updateUser });
  }
};

const fetchAllUsers =  async (req, res) => {
  const fetchUsers = await userService.fetchAllUsers();
  if (fetchUsers) {
    return res.status(201).json({ msg: `User Found`, data: fetchUsers });
  } else {
   return res.status(404).json({ msg: `No User Found`})
  }
};

const delById = async (req, res) => {
  const id = req.params.id;
  const delOne = await userService.delById(id);
  if (!delOne) {
    res.json({ msg: `Not Deleted` });
  } else {
    res.status(201).json({ msg: `User Deletd`, data: delOne });
  }
};

module.exports = { createUser, fetchAllUsers, delById, updateUserById };
