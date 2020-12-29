class Permission {
  static _permissions = Object;

  /**
   * @static
   * @method use Add your perrmisions to class.
   * @param {Object} permissions
   * @return {Void}
  **/
  static use(permissions) {
    this._permissions = permissions;
  }

  /**
   * @static
   * @method getPermission Return a value permission.
   * @param {String} name Name of permission
   * @return {Mixed}
  **/
  static getPermission(name) {
    return this._permissions[name];
  }

  /**
   * @static
   * @method permissions Return all permission with value and name.
   * @return {Object}
  **/
  static permissions() {
    return this._permissions;
  }

  /**
   * @static
   * @method generatePermission Generate value with requested perrmisions.
   * @param {Array} perms
   * @return {Number}
  **/
  static generatePermission(perms) {
    let int = 0;
    for (const el in perms) {
      int = int + this._permissions[perms[el]];
    }
    return int
  }

  /**
   * @static
   * @method check Verify if user check perrmisions.
   * @param {Number} hex
   * @param {Number} permission
   * @return {Boolean}
  **/
  static check(user, permission) {
    const targetPermission = `0x${this._permissions[permission].toString(16)}`;
    const pUser = `0x${user.toString(16)}`;

    console.log(pUser, targetPermission);

    if ((pUser & targetPermission) == targetPermission) {
      return true;
    }
    return false;
  }
}

module.exports = Permission;
