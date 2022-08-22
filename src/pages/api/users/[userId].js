import { prisma } from '../../../server/db/client';

const handler = async (req, res) => {
    const { userId } = req.query;

    try {
        const user = await prisma.user.findUniqueOrThrow({ 
            where: { 
                id: userId
            } 
        });

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
    
}

export default handler;