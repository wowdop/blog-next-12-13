import { articleList } from '@super/util';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const handler: NextApiHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { method, query } = request;
  console.log('query');
  console.log(query.blog);

  await NextCors(request, response, {
    method: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  switch (method) {
    case 'GET':
      // get me data from Firebase and return it on the next line
      response.status(200).json(articleList[+query.blog]);
      break;

    default:
      response.status(500).json({
        message: 'Only GET is allowed',
      });
  }
};

export default handler;
