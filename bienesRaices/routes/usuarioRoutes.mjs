import express from "express";

const router = express.Router();

router.get('/', (req,res) => {
    res.json({msj: "ahdjkhajkd"})
});

router.post('/', (req, res) => {
    res.json({msj: "mensaje del tipo post"})
});

export default router;