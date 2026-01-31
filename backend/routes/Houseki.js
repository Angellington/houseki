const router = require('express').Router();

/**
 * @swagger
 * /api/v1/houseki:
 *   get:
 *     summary: Get HOUSEKIS
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   html:
 *                     type: string
 *                   image:
 *                     type: string
 *                   priority:
 *                     type: string
 */
router.get("/", (req, res, next) => {
    console.log("batendo")
    res.json([
        {
            id: 1,
            html: "<p>Atenas</p>",
            image: "",
            priority: "Alta"
        }
    ])
})



module.exports = router;