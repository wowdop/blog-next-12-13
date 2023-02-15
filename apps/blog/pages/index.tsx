import { Button } from '@super/ui';
import { articleList } from '@super/util';
import Link from 'next/link';

const Blog = () => (
  <div>
    <h1>Blog</h1>

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
