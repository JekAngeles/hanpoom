module.exports = (sequelize, DataTypes) => {
    const PickingSlipDate = sequelize.define('picking_slip_dates', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        printed_username: {
            type: DataTypes.STRING
        },
        inspected_username: {
            type: DataTypes.STRING
        },
        packed_username: {
            type: DataTypes.STRING
        },
        shipped_username: {
            type: DataTypes.STRING
        },
        held_username: {
            type: DataTypes.STRING
        },
        cancelled_username: {
            type: DataTypes.STRING
        },
        refunded_username: {
            type: DataTypes.STRING
        },
        confirmed_username: {
            type: DataTypes.STRING
        },
        printed_at: {
            type: DataTypes.DATE
        },
        inspected_at: {
            type: DataTypes.DATE
        },
        packed_at: {
            type: DataTypes.DATE
        },
        shipped_at: {
            type: DataTypes.DATE
        },
        delivered_at: {
            type: DataTypes.DATE
        },
        returned_at: {
            type: DataTypes.DATE
        },
        cancelled_at: {
            type: DataTypes.DATE
        },
        refunded_at: {
            type: DataTypes.DATE
        },
        held_at: {
            type: DataTypes.DATE
        },
        confirmed_at: {
            type: DataTypes.DATE
        },
        held_reason: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })

    return PickingSlipDate
}