// CLAUDE.md - Code Connect & Design System Documentation
// 
// This file documents the Figma → React code mappings and design system rules.
// Use this when updating designs or integrating new components.

## Design System Structure

### Token Definitions
Tokens are defined inline in React components using CSS variables:

```javascript
// Colors (defined in globals.css)
--primary-blue: #147bbf
--light-blue: #c9e6f9
--dark-gray: #3f3f3f
--medium-gray: #8497b0
--light-gray: #f3f4f6
--success-green: #10b981
--error-red: #ff4d56

// Typography (Inter font family)
fontSize: '32px' (h1)
fontSize: '24px' (h2)
fontSize: '14px' (body)
fontSize: '12px' (small)
fontWeight: 600 (semibold)
fontWeight: 500 (medium)
fontWeight: 400 (regular)

// Spacing
padding: '40px' (module padding)
padding: '120px' (page horizontal margins)
gap: '24px' (row spacing)
gap: '16px' (item spacing)
gap: '4px' (tight spacing)
```

### Component Library

**Dashboard.jsx**
- Main container component
- Props:
  - `selectedComp` (state: 'comp1' | 'comp2' | 'comp3')
  - `setSelectedComp` (function)
- Renders: Header, Hero, LeftModule, RightModule, BottomModule

**LeftModule.jsx**
- Horizontal bar chart (driver insights)
- Props:
  - `driverData` (array of {name, value, isDark})
- Data: 8 rows, bars show 0-100 scale
- Colors: Dark blue (#147bbf) for first 3, light blue (#c9e6f9) for rest

**RightModule.jsx**
- Line chart (brand engagement trends)
- Props:
  - `trendData` (array of {year, stage1-5 values})
  - `selectedComp` (controls which comparison shown)
- Features: Segmented control (3 buttons), 5 legend items, 5 line series
- Dots: Solid circles, r=6px, color-matched to lines

**BottomModule.jsx**
- Horizontal bars + data table (brand perceptions)
- Layout: 30% bars column + 70% data columns
- Props:
  - `perceptionData` (array of {label, barValue, col1-8, sig2?, sig3?})
- Data table: 8 columns, color-coded values (green/red for significance)

### Frameworks & Libraries

**React 18.2.0**
- Functional components with hooks (useState)
- No class components

**Recharts 2.10.0**
- LineChart for trend visualization
- Responsive container auto-sizes to parent
- Custom dot rendering (solid fill colors)

**CSS Approach**
- Inline React styles (no Tailwind, no CSS Modules)
- CSS variables for theme (colors, spacing)
- Flexbox + CSS Grid for layout
- Media queries for responsive design (none currently, but can be added)

**Build System**
- Create React App (react-scripts)
- `npm start` for development
- `npm run build` for production

### Asset Management

**Fonts**
- Inter font imported via: `@import url('https://rsms.me/inter/inter.css')`
- No local font files needed

**Images/Icons**
- None currently used (placeholders show "logo" text)
- Can add via `/public` folder

**Chart Assets**
- Recharts generates SVG charts dynamically
- No static image exports needed

### Styling Approach

**All styles are inline React styles:**
```javascript
style={{
  backgroundColor: '#c9e6f9',
  padding: '32px 120px',
  borderRadius: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
  fontFamily: 'Inter, sans-serif'
}}
```

**Responsive patterns:**
- Flexbox: `flex: '1 1 70%'` (flexible, grows/shrinks)
- Fixed: `flex: '0 0 30%'` (stays 30% width)
- Grid: `gridTemplateColumns: '1fr 1fr'` (equal width columns)

**Global styles (if needed):**
```css
html {
  font-family: 'Inter var', sans-serif;
}
body {
  margin: 0;
  background-color: #f8f9fa;
}
```

### Project Structure

```
chase-consumer-bank-dashboard/
├── src/
│   ├── components/
│   │   └── Dashboard.jsx          (Main component with all 3 modules)
│   ├── data/
│   │   └── mockData.js            (Mock data - replace with API)
│   ├── styles/
│   │   └── globals.css            (Global theme variables)
│   ├── App.jsx                    (Wrapper)
│   └── index.js                   (Entry point)
├── public/
│   └── index.html
├── package.json
├── README.md
├── .gitignore
└── CLAUDE.md                      (This file)
```

---

## Code Connect Mappings

### Design File
**Figma:** https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system

### Component Mappings

**Dashboard (node: 38:13279)**
```
Figma Frame: "Chase microsite"
├── Code: src/components/Dashboard.jsx
├── Props:
│   ├── driverData: [{name, value, isDark}]
│   ├── trendData: [{year, stage1-5}]
│   └── perceptionData: [{label, barValue, col1-8, sig2?, sig3?}]
└── Responsive: Yes (flex ratios)
```

**Left Module (node: 38:13289)**
```
Figma: "Consumer Bank Driver"
├── Component: Dashboard.jsx (section 1)
├── Chart Type: Horizontal bar chart (recharts BarChart - custom)
├── Data: driverData array
├── Colors: #147bbf (dark), #c9e6f9 (light)
└── Styling: Flexbox column, gap 24px
```

**Right Module (node: 38:13404)**
```
Figma: "Brand Engagement"
├── Component: Dashboard.jsx (section 2)
├── Chart Type: Line chart (recharts LineChart)
├── Features: Segmented control, 5 legend items, 5 series
├── Data: trendData array
├── Dots: r=6px, solid colors
└── Responsive: Fills available height
```

**Bottom Module (node: 38:13485)**
```
Figma: "Brand Perceptions"
├── Component: Dashboard.jsx (section 3)
├── Layout: 30% bars + 70% data table
├── Chart Type: Horizontal bar chart + table grid
├── Data: perceptionData array
├── Colors: Green (#10b981), Red (#ff4d56) for significance
└── Responsive: Flex ratios (flex: '0 0 30%' and flex: '1 1 70%')
```

---

## Update Workflow

### When Figma Changes:

1. **Edit design** in Figma
2. **Look for "Code" tab** - shows component specs
3. **Describe changes** to Claude or dev team
4. **Update code**:
   - Colors: Change hex codes in inline styles
   - Data fields: Update mock data structure
   - Layout: Adjust flex ratios, grid columns
   - Typography: Update fontSize, fontWeight

### When Code Changes:

1. **Edit in IDE** (VS Code recommended)
2. **npm start** to see hot reload
3. **Test responsiveness** (DevTools → Device toggle)
4. **Commit & push** to GitHub
5. **Create PR** for team review
6. **Merge** to main branch

---

## Design Consistency Rules

### Colors
Always use design system colors:
- Primary: #147bbf (dark blue)
- Secondary: #c9e6f9 (light blue)
- Text: #3f3f3f (dark gray)
- Muted: #8497b0 (medium gray)
- Success: #10b981 (green)
- Error: #ff4d56 (red)

### Typography
- Font: Inter (400, 500, 600 weights only)
- H1: 32px, 600 weight
- H2: 24px, 600 weight
- Body: 16px, 400 weight
- Small: 12px, 400 weight

### Spacing
- Modules: 40px padding
- Sections: 24px gap
- Tight: 4px gap
- Page margins: 120px left/right

### Components
- Border radius: 20px (modules), 8px (controls), 4px (pills)
- Shadows: `0 1px 3px rgba(0,0,0,0.08)`
- Transitions: None (instant)

---

## Common Tasks

### Add a new metric to driver data:
```javascript
const driverData = [
  // ... existing
  { name: 'New Metric', value: 75, isDark: false }
];
```

### Change chart colors:
```javascript
// LeftModule bars
backgroundColor: item.isDark ? '#147bbf' : '#c9e6f9'

// LineChart series
stroke="#147bbf" → stroke="#YOUR_COLOR"
```

### Adjust responsive breakpoints:
```javascript
// Add media query for smaller screens
@media (max-width: 768px) {
  flex: '0 0 40%' /* bars take 40% on mobile */
}
```

### Connect to API:
```javascript
useEffect(() => {
  fetch('/api/drivers')
    .then(res => res.json())
    .then(data => setDriverData(data));
}, []);
```

---

**Last Updated:** April 2026
**Status:** Ready for Code Connect + local development
