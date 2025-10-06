# Brew & Bean - Modern Cafe Web App

A beautiful, modern cafe website built with Next.js 15 and CSS Modules. This project showcases a complete cafe experience with a responsive design, interactive menu, and engaging user interface.

## 🚀 Features

- **Modern Design**: Clean, coffee-themed design with warm colors and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Menu**: Dynamic menu with categories and filtering
- **Contact Form**: Functional contact form with validation
- **CSS Modules**: Scoped styling using Next.js CSS Modules
- **TypeScript**: Full TypeScript support for type safety
- **Accessibility**: WCAG compliant with proper focus management and semantic HTML

## 📱 Pages

- **Home**: Hero section with featured content and statistics
- **Menu**: Interactive menu with categories (Coffee, Cold Drinks, Pastries, Sandwiches, Desserts)
- **About**: Company story, values, team information, and location details
- **Contact**: Contact form, location info, hours, and FAQ section

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Unicode emojis for a modern touch

## 🎨 Design Features

- **Color Scheme**: Warm coffee-inspired colors (#8B4513, #A0522D, #D2691E)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Layout**: Grid and flexbox layouts for modern design
- **Mobile-First**: Responsive design starting from mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cafe-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── contact/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── menu/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── layout.module.css
│   ├── page.tsx
│   └── page.module.css
└── components/
    ├── Header.tsx
    └── Footer.tsx
```

## 🎯 Key Components

### Header
- Responsive navigation with mobile menu
- Active page highlighting
- Coffee-themed branding

### Footer
- Contact information
- Social media links
- Quick navigation

### Menu Page
- Category-based navigation
- Interactive item cards
- Popular item badges
- Responsive grid layout

### Contact Form
- Form validation
- Success/error states
- Accessible form controls

## 🎨 CSS Modules

Each page uses CSS Modules for scoped styling:

- `layout.module.css` - Global layout styles
- `page.module.css` - Homepage styles
- `menu/page.module.css` - Menu page styles
- `about/page.module.css` - About page styles
- `contact/page.module.css` - Contact page styles

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Colors
Update the color scheme by modifying CSS custom properties in the global styles and individual module files.

### Content
- Menu items can be updated in `src/app/menu/page.tsx`
- Team information in `src/app/about/page.tsx`
- Contact details in `src/app/contact/page.tsx`

### Styling
Each page has its own CSS module file for easy customization without affecting other pages.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email hello@brewandbean.com or create an issue in the repository.

---

Made with ☕ and ❤️ by the Brew & Bean team
