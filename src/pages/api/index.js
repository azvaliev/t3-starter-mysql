const handler = async (req, res) => {
    res.status(200).json({
        name: 'something' 
    });
}

export default handler;