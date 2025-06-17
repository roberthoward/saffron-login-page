# Saffron Login Page

A modern React application with a beautiful login page featuring dark and light mode support.

## Features

- 🌓 **Dark/Light Mode**: Automatic theme detection with manual toggle
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✨ **Modern UI**: Clean, minimalist design with smooth animations
- 🔒 **Form Validation**: Email and password validation with error messages
- ⚡ **Fast Development**: Built with Vite for lightning-fast development
- 🎨 **Customizable**: CSS variables for easy theme customization

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/roberthoward/saffron-login-page.git
cd saffron-login-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── LoginPage.jsx   # Main login page component
│   ├── LoginPage.css   # Login page styles
│   ├── ThemeToggle.jsx # Theme toggle button
│   └── ThemeToggle.css # Theme toggle styles
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme context for dark/light mode
├── styles/             # Global styles
│   ├── index.css       # Global CSS variables and reset
│   └── App.css         # App component styles
├── App.jsx             # Main App component
└── main.jsx            # Application entry point
```

## Theme Customization

The application uses CSS variables for theming. You can customize colors by modifying the variables in `src/styles/index.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

## Demo Features

- **Email Validation**: Validates email format
- **Password Validation**: Requires minimum 6 characters
- **Loading States**: Shows loading spinner during form submission
- **Theme Persistence**: Remembers your theme preference
- **System Theme Detection**: Automatically detects your system's theme preference

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).