const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    // categories:{
    //     type: Object,
    //     required:true
    // },
    categoryName: String,
    products:{
      type:Array
    },
    id:{
      type:String
    },
    pName:{
      type:String
    },
    description:{
      type:String
    }, 
    price:{
      type:Number
    }

    
})

const category=mongoose.model("category",categorySchema)
module.exports=category