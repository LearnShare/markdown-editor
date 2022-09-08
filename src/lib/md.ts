import {
  unified,
} from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

/**
 * Transfer Markdown to HTML
 * @param {string} code - markdown
 * @returns {string} Promise(html)
 */
const parse = (code: string): Promise => new Promise((resolve, reject) => {
  if (!code) {
    resolve('');
  }

  unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(code, (error, file) => {
      if (error) {
        reject(error);
      }

      resolve(String(file));
    });
});

export default {
  parse,
};
