import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: { type: String },
    customerId: { type: String },
    amount: { type: Number },
    status: { type: String },
    items: [
        {   
            product: {
                _id: { type: String, require: true},
                name: { type: String },
                desc: { type: String },
                banner: { type: String },
                type: { type: String },
                unit: { type: Number },
                price: { type: Number },
                suplier: { type: String },
            } ,
            unit: { type: Number, require: true} 
        }
    ]
},
{
    toJSON: {
        transform(doc:any, ret:any){
            delete ret.__v;
        }
    },
    timestamps: true
});

const Order =  mongoose.model('Order', OrderSchema);
export default Order;