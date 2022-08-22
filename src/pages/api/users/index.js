import { prisma } from '../../../server/db/client';

const handler = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).end();
  }
};

export default handler;