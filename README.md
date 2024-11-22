# SCP Foundation Web Portal

A secure, classified web portal for the SCP Foundation, featuring interactive content and dynamic page navigation.

## Features

- Immersive SCP Foundation aesthetic
- Interactive classified content
- Dynamic page loading
- Secure content handling
- Mobile-responsive design
- Custom 404 page
- Security headers and protection

## File Structure

```
scp-website/
├── public/
│   ├── index.html      # Main portal interface
│   ├── styles.css      # Styling and animations
│   ├── script.js       # Interactive functionality
│   └── 404.html        # Custom error page
└── netlify.toml        # Netlify configuration
```

## Deployment Instructions

### Deploy to Netlify (Free Hosting)

1. Create a Netlify account:
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up for a free account

2. Deploy your site:
   - Click "Add new site"
   - Choose "Import an existing project"
   - Connect to your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository
   - Click "Deploy site"

3. Configure your site:
   - Netlify will automatically detect the configuration from netlify.toml
   - Your site will be available at a random subdomain (e.g., your-site-123.netlify.app)
   - You can change this to a custom subdomain in the site settings

### Local Development

1. Clone the repository
2. Open `public/index.html` in a modern web browser
3. Make changes to HTML, CSS, or JavaScript files as needed

## Security Features

- Content Security Policy (CSP) headers
- X-Frame-Options protection
- XSS protection
- Secure routing
- Rate limiting
- [REDACTED] access controls

## Customization

### Adding New SCP Objects

To add new SCP object pages, follow the established pattern in script.js:

```javascript
function displaySCPContent(scpNumber, classification) {
    // Add content structure
    // Include containment procedures
    // Add object description
    // [REDACTED] as necessary
}
```

### Modifying Styles

The main colors used are:
- Primary Background: #000000
- Secondary Background: #1a1a1a
- Accent Color: #ff0000
- Text Colors: #ffffff, #888888

## Contributing

[REDACTED] - Level 4 clearance required.

## License

[REDACTED] - O5 Council approval required for distribution.
