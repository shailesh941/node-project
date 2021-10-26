const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const FoodSchema = new Schema({
    _id: String,
    dishName: {
            name :String,
            other_names :String
        },
     cuisine: String,
     serve_size: Number,
     serve_measuring_unit: String,
     type_of_dish: String,
     meal_course: String,
     ingredients : [{
            quantity: Number,
            quantity_per_serve: Number,
            ingredient: String,
            measuring_unit: String
        },
        {
            quantity: Number.isInteger,
            quantity_per_serve: SchemaTypes.Double,
            ingredient:String,
            measuring_unit: String
        }
    ],
     isKosher: Boolean,
     isHalal: Boolean,
     image: {
        imageName: String,
        imageUrl: String
    },
     isEggeterian: Boolean,
     isPescatarian: Boolean,
     isVegan: Boolean,
     isVegetarian: Boolean
    }); 


module.exports = mongoose.model('foods', FoodSchema);