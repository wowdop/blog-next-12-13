import { articleList } from '@super/util';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method } = request;

  switch (method) {
    case 'GET':
      response.status(200).json(articleList);
      break;

    default:
      response.status(500).json({
        message: 'Only GET is allowed',
      });
  }
};

export default handler;
