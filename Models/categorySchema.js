const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    // categories:{
    //     type: Object,
    //     required:true
    // }
    categories:{
        type:Array
    },
    name: String,
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
    ],
    
})

const category=mongoose.model("category",categorySchema)
module.exports=category