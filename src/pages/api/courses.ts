import { NextApiRequest, NextApiResponse } from 'next';
import { list as zhList } from '@/data/zh/list';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { locale } = req.query;

  let list;
  if (locale === 'zh') {
    list = zhList;

  res.status(200).json({ list });
};}

export default handler;
