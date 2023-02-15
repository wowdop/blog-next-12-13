'use client';

import { Button } from '@super/ui';
import Link from 'next/link';
import { use } from 'react';

const getMeTheDateForBlog = async () => {
  try {
    const articleList = await (
      await fetch(`https://next123.netlify.app/api/blog`)
    ).json();
    return {
      test: 'yes',
      articleList,
    };
  } catch (error: any) {
    console.log('error getting data', error.message);

    return {
      test: 'yes',
      articleList: [],
    };
  }
};

const NextB = () => {
  const { test, articleList = [] }: any = use(getMeTheDateForBlog());
  console.log('data ****');
  console.log({ test, articleList });
  return (
    <div>
      <h1> Next blog</h1>
      <p>
        this shoult test if next 13 is ready for deploy to netlify using NX
        structure.
      </p>

      <div>
        <h1>Blog</h1>
        <div>Is server side working?</div>

        <h2>Source Code</h2>
        <p>The source code is publicly available on:</p>
        <p>
          <a
            href="https://github.com/wowdop/blog-next-12-13"
            target="_blank"
            rel="noreferrer"
          >
            blog-next-12-13
          </a>
        </p>
        <p>
          <b>{test}</b>
        </p>

        <div>
          <Button>Join now</Button>
        </div>

        <div>
          {articleList.map(({ title, description }, k) => (
            <div key={title}>
              <h2>{title}</h2>

              <p>{description}</p>

              <div>
                <Link href={`/article/${k}`}>Read more ...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextB;
