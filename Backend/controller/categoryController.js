const Category = require('../model/categoryModel')


exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch(err) {
        return res.status(500).json({msg: err.message})
    }

}

exports.createCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const category = await Category.findOne({ name })
        if(category) return res.status(400).json({msg: 'This category already exists.'})
        const newCategory = new Category({ name })
        await newCategory.save()
        res.status(201).json({msg: "Created a category"})
    } catch(err) {
        return res.status(500).json({ msg: err.message})
    }
    
}

exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.json({msg: 'Category Deleted'})

    } catch(err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.updateCategory = async (req, res) => {
    try {
        await Category.findByIdAndUpdate({_id: req.params.id}, { name })
        res.json({msg: 'Category Deleted'})

    } catch(err) {
        return res.status(500).json({msg: err.message})
    }
}