const product=require('../Models/productSchema')


exports.createProduct=async (req,res)=>{
  try {
    const { name, description, price, categoryId } = req.body;

    const newProduct = new product({
      name,
      description,
      price,
    });

    // Associate the product with a category using the categoryId
    newProduct.category = categoryId;

    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  }
   catch (error) {
    res.status(500).json({ error: 'Product creation failed' });
  }

}
