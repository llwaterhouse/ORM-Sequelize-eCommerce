const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
		const tagData = await Tag.findAll({
			// This will retrieve every Tag's associated Product
			include: [ { model: Product,through:ProductTag, as: 'used_tags' }, ]
		});
		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
		const tagData = await Tag.findByPk(req.params.id, {
			// JOIN with Product,using the ProductTag through table
			include: [{model: Product, through: ProductTag, as: 'used_tags'} ]
		});

		if (!tagData) {
			res.status(404).json({ message: 'No Tag found with this id!' });
			return;
		}

		res.status(200).json(tagData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
