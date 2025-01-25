router.get('/', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB
        const db = await connectToDatabase();

        // Task 2: Retrieve the gift collection
        const collection = db.collection('gifts');

        // Task 3: Fetch all gifts
        const gifts = await collection.find({}).toArray();

        // Task 4: Return the gifts
        res.json(gifts);
    } catch (e) {
        console.error('Error fetching gifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

router.get('/:id', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB
        const db = await connectToDatabase();

        // Task 2: Retrieve the gift collection
        const collection = db.collection('gifts');

        // Task 3: Find a specific gift by ID
        const id = req.params.id;
        const gift = await collection.findOne({ id: id });

        if (!gift) {
            return res.status(404).send('Gift not found');
        }

        res.json(gift);
    } catch (e) {
        console.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift');
    }
});
