module.exports = (sequelize, DataTypes) => {
    const PickingSlipItem = sequelize.define('picking_slip_items', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        item_id: {
            type: DataTypes.BIGINT
        },
        stock_id: {
            type: DataTypes.BIGINT
        },
        order_fulfillment_product_id: {
            type: DataTypes.BIGINT
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        refunded_quantity: {
            type: DataTypes.INTEGER
        },
        location_id: {
            type: DataTypes.BIGINT
        },
        location_code: {
            type: DataTypes.STRING
        },
        is_pre_order: {
            type: DataTypes.BOOLEAN
        },
        is_sales_only: {
            type: DataTypes.BOOLEAN
        },
        pre_order_shipping_at: {
            type: DataTypes.DATE
        },
        pre_order_deadline_at: {
            type: DataTypes.DATE
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    })

    return PickingSlipItem
}