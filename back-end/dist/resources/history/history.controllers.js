"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crud = require("../../utils/crud");

var _chat = require("../chat/chat.model");

exports.default = (0, _crud.crudControllers)(_chat.Chat);