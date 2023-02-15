import { Button } from '@super/ui';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const articleList = await (
    await fetch(`https://next123.netlify.app/api/blog`)
  ).json();
  return {
    props: {
      test: 'yes',
      articleList,
    },
  };
};

const Blog = ({ test, articleList }) => (
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
);

export default Blog;
