const { verifyToken, estaEnListaNegra } = require("../utils/token");

// Verifica si el token es valido
const authenticate = (token) => {
  if (token == undefined) return false;
  if (estaEnListaNegra(token)) return false;
  if (verifyToken(token)) return true;
  else return false;
};

module.exports = { authenticate };
