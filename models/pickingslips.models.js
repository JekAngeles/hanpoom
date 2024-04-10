module.exports = (sequelize, DataTypes) => {
    const PickingSlip = sequelize.define('picking_slips', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.BIGINT
        },
        order_fulfillment_order_id: {
            type: DataTypes.BIGINT
        },
        is_contained_single_product: {
            type: DataTypes.BOOLEAN
        },
        status: {
            type: DataTypes.VIRTUAL,
            get() {
                if (this.picking_slip_date?.get().held_at !== null) return "held"
                if (this.picking_slip_date?.get().printed_at == null && this.picking_slip_date?.get().inspected_at == null && this.picking_slip_date?.get().shipped_at == null && this.picking_slip_date?.get().held_at == null) return "not printed"
                if (this.picking_slip_date?.get().printed_at !== null && this.picking_slip_date?.get().inspected_at == null && this.picking_slip_date?.get().shipped_at == null && this.picking_slip_date?.get().held_at == null) return "printed"
                return null
            },
            set(value) {
                throw new Error('Do not try to set status field')
            }
        }
    }, {
        timestamps: false
    })

    return PickingSlip
}