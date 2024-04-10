const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_DBNAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log('sequelize authenticated successfully')
})
.catch(err => {
    console.log(`Error: ${err}`)
})

const db = {}
db.sequelize = sequelize

db.PickingSlip = require('../models/pickingslips.models')(sequelize, DataTypes)
db.PickingSlipDate = require('../models/pickingslipdates.models')(sequelize, DataTypes)
db.PickingSlipItem = require('../models/pickingslipitems.models')(sequelize, DataTypes)

db.sequelize.sync({ })
.then((result) => console.log('sequelize sync successful'))
.catch((error) => console.log(error))

// PickingSlips 1:N PickingSlipItems
db.PickingSlip.hasMany(db.PickingSlipItem, {
    foreignKey: "picking_slip_id",
    constraints: false
})

// PickingSlips 1:1 PickingSlipDates
db.PickingSlip.hasOne(db.PickingSlipDate, {
    foreignKey: "picking_slip_id",
    constraints: false
})

module.exports = db