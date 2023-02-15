import { Button } from '.';
import Link from 'next/link';

const getArticle = async (articelid: string) => {
  try {
    const article = await (
      await fetch(`http://localhost:4201/api/blog/${articelid}`)
    ).json();
    return article;
  } catch (error: any) {
    console.log('error reading article');
    return {
      message: 'reading article error',
      article: {
        title: 'not found',
        description: 'try again',
      },
    };
  }
};

const Article = async ({ params }) => {
  const article = await getArticle(params.articleid);
  const { title, description, body } = article;

  return (
    <div>
      <h1>Article</h1>

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

export default Article;
