"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const createPosts = require('./utils/createPosts');
var path = require('path');

var GET_POSTS = "{\n\t\t\twpgraphql {\n\t\t\t\t\tposts {\n\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tpostId\n\t\t\t\t\t\t\t\texcerpt\n\t\t\t\t\t\t\t\tcontent\n\t\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\t\t\t\tsrcSet\n\t\t\t\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t}\n\t}";

exports.createPages = function (_ref) {
  var graphql = _ref.graphql,
      actions = _ref.actions;
  var createPage = actions.createPage;
  return graphql(GET_POSTS).then(function (result) {
    result.data.wpgraphql.posts.nodes.forEach(function (node) {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/post.js'),
        context: _objectSpread({}, node)
      });
    });
  });
};