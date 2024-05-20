<p>Written in React!</p>

<!-- Include React and ReactDOM from CDN -->
<p>
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
</p>
<div id="root"></div>
<!-- Your React components will be rendered here -->
<p>
<script>// <![CDATA[
// React component
      const articles = [
        {
          title: 'What is economic crisis',
          url: 'https://dimasmukhlas.com/blog/welcome-to-the-research-preset-project/',
          date: '23 Aug 2023',
          author: 'Dimas Widiantoro',
          content: 'Economic crises are different from financial crises. Let\'s see what they are.',
          shares: 24,
          comments: 4,
          videoUrl: 'https://www.youtube.com/embed/DOcNjVNFKfI?si=G0Jz_RMaEsx3J0ni',
          tag: 'What is it?',
          tagUrl: '/',
        },

        {
          title: 'How to prepare panel data in Stata',
          url: 'https://dimasmukhlas.com/blog/how-to-prepare-panel-data-in-stata/',
          date: '26 Aug 2023',
          author: 'Dimas Widiantoro',
          content: 'Economic crises come in different forms and can be viewed differently.',
          shares: 424,
          comments: 4,
          videoUrl: 'https://www.youtube.com/embed/_nTfRL_Awn0?si=kIMp0ShFfUfjUBwd',
          tag: 'Category of economic crises',
          tagUrl: '/',
        },

        {
          title: 'How to prepare panel data in Stata',
          url: 'https://dimasmukhlas.com/blog/how-to-prepare-panel-data-in-stata/',
          date: '26 Aug 2023',
          author: 'Dimas Widiantoro',
          content: 'Economic crises come in different forms and can be viewed differently.',
          shares: 424,
          comments: 4,
          videoUrl: 'https://www.youtube.com/embed/_nTfRL_Awn0?si=kIMp0ShFfUfjUBwd',
          tag: 'Category of economic crises',
          tagUrl: '/',
        },
     {
          title: 'How to prepare panel data in Stata',
          url: 'https://dimasmukhlas.com/blog/how-to-prepare-panel-data-in-stata/',
          date: '26 Aug 2023',
          author: 'Dimas Widiantoro',
          content: 'Economic crises come in different forms and can be viewed differently.',
          shares: 424,
          comments: 4,
          videoUrl: 'https://www.youtube.com/embed/_nTfRL_Awn0?si=kIMp0ShFfUfjUBwd',
          tag: 'Category of economic crises',
          tagUrl: '/',
        },
        // Add more articles as needed
      ];

      const Article = ({ article }) => (
        React.createElement('div', { className: 'col-md-6' }, 
          React.createElement('div', { className: 'category_article_body' }, 
            React.createElement('div', { className: 'top_article_img' }, 
              React.createElement('div', { id: 'video', className: 'videoWrapper' }, 
                React.createElement('iframe', { width: '300', height: '169', src: article.videoUrl, title: article.title, frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowFullScreen: true })
              )
            ),
            React.createElement('span', { className: 'tag pink' }, 
              React.createElement('a', { href: article.tagUrl, target: '_self' }, article.tag)
            ),
            React.createElement('div', { className: 'category_article_title' }, 
              React.createElement('h2', null, 
                React.createElement('a', { href: article.url, target: '_self' }, article.title)
              )
            ),
            React.createElement('div', { className: 'article_date' }, 
              React.createElement('a', { href: '#' }, article.date), ', by ', 
              React.createElement('a', { href: '#' }, article.author)
            ),
            React.createElement('div', { className: 'category_article_content' }, article.content),
            React.createElement('div', { className: 'media_social' }, 
              React.createElement('span', null, 
                React.createElement('a', { href: '#' }, article.shares), ' Shares'
              ),
              React.createElement('span', null, 
                React.createElement('i', { className: 'fa fa-comments-o' }), 
                React.createElement('a', { href: '#' }, article.comments), ' Comments'
              )
            )
          )
        )
      );

      const ArticleSection = ({ title, articles }) => (
        React.createElement('div', null, 
          React.createElement('div', { className: 'article_title header_pink' }, 
            React.createElement('h2', null, 
              React.createElement('a', { href: 'https://dimasmukhlas.com/blog/tag/resilient/', target: '_self' }, title)
            )
          ),
          React.createElement('div', { className: 'category_article_wrapper' }, 
            React.createElement('div', { className: 'row' }, 
              articles.map((article, index) => (
                React.createElement(Article, { key: index, article: article })
              ))
            )
          )
        )
      );

      const App = () => (
        React.createElement('div', null, 
          React.createElement('p', null, 'I attempt to explain the full picture of world phenomena regarding several topics.'),
          React.createElement('p', null, 'We can start with crises, where researchers often divide them into economic and financial crises.'),
          React.createElement('p', null, 'Then, we can delve into the specific types of financial crises. Economic crisis topics might also be intriguing!'),
          React.createElement(ArticleSection, { title: 'Economic Crises', articles: articles }),
          React.createElement(ArticleSection, { title: 'Financial Crises', articles: articles })
        )
      );

      // Render the component
      ReactDOM.render(React.createElement(App), document.getElementById('root'));
// ]]></script>
</p>
<div id="gtx-trans" style="position: absolute; left: -5px; top: -18px;">
<div class="gtx-trans-icon"></div>
</div>