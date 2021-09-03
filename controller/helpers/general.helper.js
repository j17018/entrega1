//Packages
let cryptoJS = require("crypto-js");
const config = require("config");
//Encrypt password
exports.EncryptPassword = function(password){
	let secretkey = config.get("secret-keys").cryptoJs;
	let encryptedPassword = cryptoJS.AES.encrypt(password,secretkey).toString();
	return encryptedPassword;
};
