const Product = require('./../model/productModel')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.query}
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))

        return this;
    }
    sorting(){
        if(this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ') 
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }
    paginating(){
        const page = this.querystring.page * 1 || 1
        const limit = this.filtering.queryString.limit * 1 || 3
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

exports.getProducts = async (req, res) => {
    try {
        const features = new APIfeatures(Product.find(), req.query).filtering().sorting().paginating()
        const products = await Product.find()
        res.json({
            status: "success",
            result: products.length,
            products: products
        })

    } catch(err) {
        return res.status(500).json({msg: err.message})

    }
}

exports.createProduct = async (req, res) => {
    try {
        const {product_id, title, price, description, content, images, category} = req.body
        if(!images) return res.status(400).json({ msg: "No image uploaded"})

        const product = await Product.findOne({product_id})
        if(product) {
            return res.status(400).json({msg:"This products already exists"})
        }

        const newProduct = await Product.create({
            product_id,
            title: title.lowerCase(),
            price,
            description,
            content,
            images,
            category
        })

        await newProduct.save()

        res.json({msg: "Created a product"})

    } catch(err) {

    }
}

exports.updateProduct = async (req, res) => {
    try {
        const {title, price, description, content, images, category} = req.body
        if(!images) return res.status(400).json({ msg: "No image uploaded"})

        await Product.findOneAndUpdate({_id: req.params.id}, {
            title: title.lowerCase(),
            price,
            description,
            content,
            images,
            category
        })
        res.json({msg: 'Updated a Product'})
    } catch(err) {
        
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({msg: 'Deleted a Product'})

    } catch(err) {
        return res.status(500).json({msg: err.message})
    }
}