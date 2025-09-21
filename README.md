# 🚀 CloudFlow - SaaS Landing Page

A modern, responsive landing page for a SaaS product with an interactive pricing calculator and monthly/yearly toggle functionality.

![CloudFlow Landing Page](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎯 **Hero Section**
- Eye-catching hero with floating animated cards
- Clear value proposition and call-to-action buttons
- Statistics display (10K+ users, 99.9% uptime, 24/7 support)
- Responsive design with mobile-optimized layout

### ⚡ **Interactive Calculator**
- **Price sliders** for users, storage, and API calls
- **Support level selector** (Basic, Priority, Enterprise)
- **Real-time price updates** with smooth animations
- **Savings calculation** compared to enterprise pricing
- Clean, intuitive interface with visual feedback

### 🔄 **Monthly/Yearly Pricing Toggle**
- **Dynamic pricing** with 20% discount for yearly plans
- **Smooth price animations** when toggling
- **Real-time savings display** showing exact amounts saved
- **Professional toggle switch** with visual feedback

### 📱 **Responsive Design**
- **Mobile-first approach** with breakpoints at 768px and 480px
- **Hamburger menu** for mobile navigation
- **Touch-friendly** interface elements
- **Optimized layouts** for all screen sizes

### 🎨 **Modern UI/UX**
- **Clean, professional design** similar to modern SaaS tools
- **Subtle animations** and hover effects
- **Consistent color scheme** with proper contrast
- **Professional typography** and spacing

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Interactive functionality and calculations
- **No frameworks** - Pure web technologies for optimal performance

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-landing-page.git
   cd saas-landing-page
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 📁 Project Structure

```
saas-landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 Key Components

### **Pricing Calculator**
- Interactive sliders for user count, storage, and API calls
- Real-time price calculation with smooth animations
- Support level selection affecting final pricing
- Savings comparison with enterprise pricing

### **Pricing Toggle**
- Monthly/Yearly billing toggle
- 20% discount for yearly plans
- Dynamic price updates with animations
- Real-time savings display

### **Responsive Navigation**
- Fixed header with smooth scroll navigation
- Mobile hamburger menu
- Active link highlighting
- Smooth scroll to sections

## 🎨 Design Features

### **Color Palette**
- **Primary Blue**: #2563eb
- **Secondary Purple**: #7c3aed
- **Success Green**: #10b981
- **Text Colors**: #0f172a, #64748b, #374151
- **Background**: #ffffff, #f8fafc

### **Typography**
- **Font Family**: System fonts (Inter, -apple-system, BlinkMacSystemFont)
- **Font Sizes**: 14px - 48px with proper hierarchy
- **Line Heights**: 1.5 for optimal readability

### **Animations**
- Smooth hover effects
- Price change animations
- Card scale animations
- Floating card animations
- Smooth scroll navigation

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full grid layouts)
- **Tablet**: 768px - 1199px (Stacked layouts, mobile menu)
- **Mobile**: 480px - 767px (Single column, optimized spacing)
- **Small Mobile**: < 480px (Compact design)

## 🔧 Customization

### **Changing Colors**
Update the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #7c3aed;
  --success-color: #10b981;
}
```

### **Modifying Pricing**
Update the pricing in `script.js`:
```javascript
this.originalPrices = {
    starter: 29,
    professional: 79,
    enterprise: 199
};
```

### **Adding Features**
The modular JavaScript structure makes it easy to add new features:
- Calculator logic in `PricingCalculator` class
- Toggle functionality in `PricingToggle` class
- Navigation in separate functions

## 🌐 Browser Support

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Lightweight**: No external dependencies
- **Fast loading**: Optimized CSS and JavaScript
- **Smooth animations**: Hardware-accelerated transitions
- **Mobile optimized**: Touch-friendly interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by modern SaaS landing pages
- Icons from emoji characters for simplicity
- Color palette inspired by Tailwind CSS
- Typography based on system font stacks

## 📞 Support

If you have any questions or need help with this project:

- **Issues**: [GitHub Issues](https://github.com/yourusername/saas-landing-page/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/saas-landing-page/discussions)
- **Email**: your.email@example.com

---

**Made with ❤️ for modern SaaS businesses**

*Ready to convert visitors into customers with a professional landing page!*
