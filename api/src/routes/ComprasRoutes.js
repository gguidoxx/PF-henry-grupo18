const { Router } = require("express");
const {
  getAllCompras,
  postCompras,
  getComprasById,
  getCompras,
} = require("../controllers/ComprasControllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("/", getCompras);
router.get("/:userEmail", getAllCompras);
router.get("/ById/:id", getComprasById);
router.post("/comprar", postCompras);

module.exports = router;
