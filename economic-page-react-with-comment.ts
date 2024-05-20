<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>

  <!-- Include React and ReactDOM from CDN -->
  <!-- Import React library -->
  <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
  <!-- Import ReactDOM library -->
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>

  <!-- JavaScript code for React app -->
  <script>
    // Define article data
    const articles = [
      {
        title: 'Understanding Economic Crises',
        url: 'https://example.com/economic-crises',
        date: 'May 1, 2024',
        author: 'John Doe',
        content: 'Economic crises are complex phenomena with various causes and consequences.',
        shares: 50,
        comments: 10,
        videoUrl: 'https://www.youtube.com/embed/12345',
        tag: 'Economic Crises',
        tagUrl: '/',
      },
      {
        title: 'The Impact of Inflation on Economic Stability',
        url: 'https://example.com/inflation-impact',
        date: 'April 25, 2024',
        author: 'Jane Smith',
        content: 'This article explores how inflationary pressures can lead to economic instability.',
        shares: 80,
        comments: 15,
        videoUrl: 'https://www.youtube.com/embed/67890',
        tag: 'Economic Crises',
        tagUrl: '/',
      },
      {
        title: 'Financial Meltdown: A Case Study',
        url: 'https://example.com/financial-meltdown',
        date: 'May 5, 2024',
        author: 'Jane Smith',
        content: 'This article examines the 2008 financial crisis and its impact on global economies.',
        shares: 100,
        comments: 20,
        videoUrl: 'https://www.youtube.com/embed/67890',
        tag: 'Financial Crises',
        tagUrl: '/',
      },
      {
        title: 'Strategies for Avoiding Market Crashes',
        url: 'https://example.com/avoiding-market-crashes',
        date: 'April 30, 2024',
        author: 'John Doe',
        content: 'Learn how investors can protect their portfolios during turbulent market conditions.',
        shares: 120,
        comments: 25,
        videoUrl: 'https://www.youtube.com/embed/54321',
        tag: 'Financial Crises',
        tagUrl: '/',
      },
    ];

    // Define React component for individual article
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

    // Define React component for article section
    const ArticleSection = ({ title, articles }) => (
      React.createElement('div', null,
        React.createElement('div', { className: 'article_title header_pink' },
          React.createElement('h2', null,
            React.createElement('a', { href: 'https://example.com/tag/' + title.toLowerCase().replace(/\s/g, '-'), target: '_self' }, title)
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

    // Define main React app component
    const App = () => (
      React.createElement('div', null,
        React.createElement('p', null, 'I attempt to explain the full picture of world phenomena regarding several topics.'),
        React.createElement('p', null, 'We can start with crises, where researchers often divide them into economic and financial crises.'),
        React.createElement('p', null, 'Then, we can delve into the specific types of financial crises. Economic crisis topics might also be intriguing!'),
        // Render article sections for economic and financial crises
        React.createElement(ArticleSection, { title: 'Economic Crises', articles: articles.filter(article => article.tag === 'Economic Crises') }),
        React.createElement(ArticleSection, { title: 'Financial Crises', articles: articles.filter(article => article.tag === 'Financial Crises') })
      )
    );

    // Render the main React app component
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
  </script>
</body>
</html>
