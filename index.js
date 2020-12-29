'use strict';

const Permission = require("./src/Permission")

/*
  You must add your permission!
*/

Permission.use({
  VIEW_BLOG: 1,
  VIEW_POST: 2,
  VIEW_PROFILE: 4,

  EDIT_POST: 8,
  UPDATE_POST: 16,
  DELETE_POST: 32,
  MANAGE_POSTS: 64,

  MANAGE_BLOG: 128,
  MANAGE_USERS: 256
});

/*
  You can add permissions manually, but we recommend doing it using the following functions:
  1 + 2 + 4 => 7
  Permission.generatePermission([
    "VIEW_BLOG", "VIEW_POST", "VIEW_PROFILE"
  ]);

  This function return Boolean if user have permission true or false
  Permission.check(7, "VIEW_PROFILE") => True
  Permission.check(7, "EDIT_POST") => False

  Permission.check(256, "EDIT_POST") => False
  Permission.check(256, "VIEW_BLOG") => False
  Permission.check(256, "MANAGE_USERS") => True

*/

console.log(Permission.check(9, "VIEW_PROFILE"));

//module.exports = Permission;
