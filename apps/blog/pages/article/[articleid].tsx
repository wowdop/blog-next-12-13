import { Button } from '@super/ui';
import { articleList } from '@super/util';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Blog = () => {
  const {
    query: { articleid },
  } = useRouter();

  const { title, description, body } = articleList[+articleid || 0];

  return (
    <div>
      <h1>Blog</h1>

      <div>
        <Button>Join now</Button>
      </div>

      <div>
        <div>
          <h2>{title}</h2>

          <p>{description}</p>

          {/* body */}

          <div>
            {body.map(({ title, description, list }) => (
              <div key={title}>
                <h3>{title}</h3>

                {description && <p>{description}</p>}

                {list?.length > 0 && (
                  <ul>
                    {list.map((text, k) => (
                      <li key={k}>{text}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div>
            <Link href="/">Back home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
