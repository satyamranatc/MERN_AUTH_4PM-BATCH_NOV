import { Router } from "express";


const router = Router();


router.get("/list", (req, res) => {
    res.json([
        { _id: 1, title: "Product 1" },
        { _id: 2, title: "Product 2" },
        { _id: 3, title: "Product 3" },
    ]);
})

export default router;