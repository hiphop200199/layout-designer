var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/hiphop200199/layout-designer.git', // Update to point to your repository  
        user: {
            name: 'hiphop200199', // update to use your name
            email: 'hiphop200199@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)