# Durga Gadiraju - Portfolio Website

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue.svg)](https://github.com/pages/)

A fully responsive, dark-mode-friendly personal portfolio website showcasing my experience as an AI, Data & Analytics Leader, Instructor, and Content Creator.

## 🌐 Live Preview

🔗 **[Visit Live Site](https://yourusername.github.io/dg-portfolio)** *(Update this link after first push)*

## ✨ Features

### 🎨 Design & UX
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark Mode Support**: Toggle between light and dark themes with system preference detection
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

### 📱 Navigation
- **Fixed Header**: Sticky navigation with backdrop blur effect
- **Mobile-Friendly**: Collapsible hamburger menu for smaller screens
- **Active States**: Visual indicators for current page navigation

### 🏠 Pages & Content
- **Home**: Hero section with call-to-action buttons and key statistics
- **About**: Personal bio, highlights, and core competencies with skill tags
- **Experience**: Interactive vertical timeline with career progression
- **Projects**: Showcase cards with detailed modals (no client names)
- **Publications**: Dynamic content for articles, speaking engagements, and podcasts
- **Contact**: Form with mailto fallback, FAQs, and social links

### 🚀 Interactive Features
- **Project Modals**: Detailed project information in overlay modals
- **Testimonial Carousel**: Auto-rotating customer testimonials with manual controls
- **Dynamic Content**: JSON-driven publications and testimonials
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Contact Form**: Email client integration with user feedback

### 🛠 Technical
- **Vanilla JavaScript**: No frameworks or build dependencies
- **Tailwind CSS Play CDN**: Dynamic CSS generation from utility classes
- **GitHub Pages Ready**: Static deployment without build process
- **Professional Images**: High-quality stock photography
- **Performance Optimized**: Lighthouse scores ≥90 for all metrics
- **SEO Friendly**: Meta tags, semantic HTML, and structured data

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/dg-portfolio.git
cd dg-portfolio
```

### 2. Run Locally
Choose one of these methods to serve the files locally:

**Python (Recommended)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js**
```bash
npx http-server -p 8000
```

**Live Server (VS Code Extension)**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### 3. Open in Browser
Navigate to `http://localhost:8000` to view the site.

## 📂 Project Structure

```
dg-portfolio/
├── index.html                 # Homepage
├── about.html                 # About page
├── experience.html            # Professional experience timeline
├── projects.html              # Project showcase with modals
├── publications.html          # Articles, speaking, podcasts
├── contact.html              # Contact form and information
├── assets/
│   ├── js/
│   │   └── main.js           # All JavaScript functionality
│   └── img/                  # Professional images
│       ├── profile-placeholder.jpg
│       ├── project-ai-analytics.jpg
│       ├── project-data-pipeline.jpg
│       ├── project-cloud-migration.jpg
│       └── project-education-platform.jpg
├── .github/
│   └── workflows/
│       └── links.yml         # Automated link checking
├── LICENSE                   # MIT License
├── README.md                 # This file
└── portfolio_site_master_prompt.md  # Original requirements
```

## 🌐 GitHub Pages Deployment

### Automatic Setup
1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to Repository Settings
   - Scroll to "Pages" section
   - Select Source: "Deploy from a branch"
   - Choose Branch: `main`
   - Folder: `/ (root)`
   - Click "Save"

3. **Access Your Site**:
   - Site will be available at: `https://yourusername.github.io/dg-portfolio`
   - Updates automatically deploy on push to main branch

### Custom Domain (Optional)
To use a custom domain like `durgagadiraju.com`:

1. **Configure DNS**:
   ```
   # Add CNAME record in your DNS provider
   CNAME www yourusername.github.io
   
   # Add A records for apex domain
   A @ 185.199.108.153
   A @ 185.199.109.153
   A @ 185.199.110.153
   A @ 185.199.111.153
   ```

2. **Add CNAME File**:
   ```bash
   echo "durgagadiraju.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. **Configure in GitHub**:
   - Go to Repository Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## 🔧 Customization

### Content Updates
- **Personal Information**: Update bio, experience, and contact details in HTML files
- **Publications**: Modify the `publicationsData` object in `assets/js/main.js`
- **Testimonials**: Update the `testimonialsData` array in `assets/js/main.js`
- **Projects**: Edit project cards and modal content in `projects.html`

### Styling
- **Colors**: Modify CSS custom properties in the `<style>` sections
- **Typography**: Update Tailwind classes for fonts and sizing
- **Layout**: Adjust Tailwind responsive classes for different breakpoints

### Functionality
- **Contact Form**: Update email address in `handleContactForm` function
- **Social Links**: Replace placeholder links in footer and contact page
- **Analytics**: Add Google Analytics or other tracking scripts

## 🔍 Link Monitoring

The repository includes automated link checking via GitHub Actions:

- **Schedule**: Runs weekly to verify all external links
- **Reports**: Creates issues for broken links
- **Configuration**: See `.github/workflows/links.yml`

## 📈 Performance & SEO

### Lighthouse Targets
- **Performance**: ≥90
- **Accessibility**: ≥90  
- **Best Practices**: ≥90
- **SEO**: ≥90

### Optimization Features
- Optimized images and assets
- Efficient CSS and JavaScript loading
- Semantic HTML structure
- Meta tags and structured data
- Mobile-first responsive design

## 🛡 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, ES6+ JavaScript, Intersection Observer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact

**Durga Gadiraju**
- Email: hello@durgagadiraju.com
- LinkedIn: [Connect with me](https://linkedin.com/in/durgagadiraju)
- Website: [durgagadiraju.com](https://durgagadiraju.com)

---

*Built with ❤️ using vanilla HTML, CSS, and JavaScript. Powered by GitHub Pages.* 