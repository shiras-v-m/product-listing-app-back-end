const category=require('../Models/categorySchema_copy')
// const product=require('../Models/productSchema')

// Create a new category
exports.createCategories=async (req,res)=>{
  
    try {
        // const { name } = req.body;
        const { categories } = req.body;
        if(categories.length==0){
          return res.status(400).json({ error: 'Please enter a category' });
        }
        
        categories.map(async (item)=>{
            const newCategory = new category({
                  categoryName:item,
                  products:[]
                });

                  await newCategory.save();
            })
   
      return  res.status(200).json({ message: 'Category created successfully',  categories });
    }
    catch(error){
       return res.status(500).json({ error: 'Category creation failed' });
    }
}



exports.createProduct=async (req,res)=>{
    const { id, pName,description, price } = req.body;
    if(!id || !pName || !description || !price){
        return res.status(500).json("Please provide all inputs")
    }
    // console.log("id = "+id);

    const filter = { _id: id };
    const newProduct = {
      pName: pName,
      description:description,
      price: price
    };
    try{

    // update product array if the product details is not already written (ie why addToSet)
    const updateResult = await category.updateOne(filter, {
      $addToSet: {
        products: newProduct
      }
    });

    // if updated or added product
    if(updateResult.modifiedCount>0){
      res.status(200).json({message:"product added successfully"})

   
    }
    else{
      res.status(400).json({message:"product already exist"})
    }

    } 
    catch(error){
      res.status(500).json({error:"product adding failed"})
    }

}

exports.getAllCategories=async (req,res)=>{
  
  // get all categories based on categoryName key exist
  const query = { categoryName: { $exists: true } };
  try{
    const specificItems = await category.find(query);
    res.status(200).json({message:"product added successfully",categories:specificItems})
    console.log('Specific items:');
    console.log(specificItems);
  }
  catch(error){
    res.status(500).json({error:"No data found"})
  }


}