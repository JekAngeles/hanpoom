const db = require('../database/index');
const paginate = require('../helper/pagination')
const Op = require('sequelize').Op;

const PickingSlip = db.PickingSlip;
const PickingSlipDate = db.PickingSlipDate;

const pickingSlipsController = {
    browse: async (req, res) => {
        // await PickingSlip.findAll()
        // .then((result) => {
        //     res.status(200).send(result)
        // })
        if(req.query) {
            var {
                sortField,
                sortOrder,
                ...filters
            } = req.query

            if (sortField && ['ASC', 'DESC'].some((e) => e === sortOrder)) {
                var sortLiteral = sortField + " " + sortOrder
            }
        }

        await PickingSlip.findAll(
            paginate({
                where: { ...filters },
                order: db.sequelize.literal(sortLiteral ? sortLiteral : `id ASC` ),
                include: {
                    model: PickingSlipDate
                }
            }, {
                page: req.query.page,
                pageSize: req.query.pageSize
            })
        )
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            res.json({
                error
            })
        })
    },
    getNotPrinted: async (req, res) => {

        await PickingSlip.findAll({
            include: {
                model: PickingSlipDate,
                where: {
                    printed_at: null,
                    inspected_at: null,
                    shipped_at: null,
                    held_at: null
                }
            }
        })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            res.json({ error })
        })
    },
    getPrinted: async (req, res) => {

        await PickingSlip.findAll({
            include: {
                model: PickingSlipDate,
                where: {
                    printed_at: {[Op.not]: null},
                    inspected_at: null,
                    shipped_at: null,
                    held_at: null
                }
            }
        })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            res.json({ error })
        })
    },
    getHeld: async (req, res) => {

        await PickingSlip.findAll({
            include: {
                model: PickingSlipDate,
                where: {
                    held_at: {[Op.not]: null}
                }
            }
        })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            res.json({ error })
        })
    },
}

module.exports = pickingSlipsController;