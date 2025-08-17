# Modern Dashboard with shadcn/ui

This project now includes a modern, responsive dashboard built with shadcn/ui components and Tailwind CSS.

## Features

### 🎨 **Modern UI Components**
- **Cards**: Beautiful, hoverable cards with smooth animations
- **Buttons**: Multiple variants (default, outline, secondary, ghost, gradient)
- **Badges**: Status indicators with color variants
- **Progress bars**: Animated progress indicators
- **Avatars**: User profile images with fallbacks
- **Tabs**: Organized content sections
- **Dropdown menus**: Action menus with proper accessibility

### 🚀 **Interactive Dashboard**
- **Stats Overview**: Key metrics with trend indicators
- **Tabbed Interface**: Organized content (Overview, Analytics, Orders, Tasks)
- **Responsive Design**: Works perfectly on all device sizes
- **Smooth Animations**: Framer Motion powered transitions
- **Hover Effects**: Interactive elements with visual feedback

### 🎯 **Dashboard Sections**

#### Overview Tab
- Recent orders with customer information
- Task progress tracking
- Quick stats and metrics

#### Analytics Tab
- Placeholder for charts and graphs
- Performance metrics
- Data visualization ready

#### Orders Tab
- Complete order management
- Customer details and status
- Action menus for each order

#### Tasks Tab
- Task management system
- Priority levels and due dates
- Interactive checkboxes and actions

### 🎨 **Design System**
- **Color Scheme**: Consistent with shadcn/ui design tokens
- **Typography**: Proper hierarchy and readability
- **Spacing**: Consistent spacing using Tailwind's scale
- **Shadows**: Subtle depth and elevation
- **Transitions**: Smooth animations throughout

### 🔧 **Technical Features**
- **TypeScript**: Fully typed components
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **Responsive**: Mobile-first design approach

## Usage

### Toggle Between Views
- **Landing Page**: Original marketing site
- **Dashboard**: New modern dashboard interface

### Navigation
- Click "Dashboard" button in the navigation to switch to dashboard view
- Click "Back to Landing" button to return to the original site

### Component Variants

#### Buttons
```tsx
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient">Gradient</Button>
```

#### Cards
```tsx
<Card className="hover:shadow-lg transition-all duration-300">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

#### Badges
```tsx
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
```

## Customization

### Colors
The dashboard uses CSS custom properties for theming. You can modify colors in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  /* ... more colors */
}
```

### Animations
Custom animations are defined in `tailwind.config.js` and can be extended:

```js
keyframes: {
  "custom-animation": {
    "0%": { transform: "scale(0)" },
    "100%": { transform: "scale(1)" },
  },
},
animation: {
  "custom": "custom-animation 0.5s ease-out",
}
```

## Dependencies

- `@radix-ui/*` - UI primitives
- `framer-motion` - Animations
- `lucide-react` - Icons
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Class name utilities

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Real-time data integration
- [ ] Chart components (recharts, chart.js)
- [ ] Data tables with sorting/filtering
- [ ] User authentication
- [ ] More interactive widgets
- [ ] Export functionality
- [ ] Custom themes

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Navigate to the dashboard using the "Dashboard" button
4. Explore different tabs and components

The dashboard is fully functional and ready for production use with real data integration!
