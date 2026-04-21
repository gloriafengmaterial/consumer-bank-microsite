<<<<<<< HEAD
#  Consumer Bank Dashboard

A responsive React dashboard built from Figma designs with **Code Connect** integration for real-time design-to-code synchronization.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-ORG/chase-consumer-bank-dashboard.git
cd chase-consumer-bank-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard component
│   ├── LeftModule.jsx         # Driver insights chart
│   ├── RightModule.jsx        # Brand engagement trends
│   └── BottomModule.jsx       # Brand perceptions table
├── data/
│   └── mockData.js            # Sample data (replace with API calls)
├── styles/
│   └── globals.css            # Global typography & colors
├── App.jsx
└── index.js
```

---

## 🎨 Design System & Code Connect

### Figma Design File
**[View Design](https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system)**

### Code Connect Integration

Code Connect maps Figma components to React code. When you update the design in Figma, the "Code" tab shows component documentation and prop suggestions.

#### Current Code Connect Mappings

**Dashboard Component**
- `Dashboard.jsx` → Figma "Chase microsite" frame
- Maps mock data props to chart components
- Responsive layout controlled via CSS Grid + Flexbox

**Module Components**
- `LeftModule` → Consumer Bank Driver section
- `RightModule` → Brand Engagement section  
- `BottomModule` → Brand Perceptions section

---

## 🔧 Making Edits

### **Option 1: Edit Code Directly (Recommended)**

```bash
# Open in your IDE
code .

# Edit components in src/components/
# Save → hot reload at localhost:3000
```

### **Option 2: Update from Figma Design**

1. **Make changes in Figma**
2. **Click "Code" tab** in the component
3. **Share specs with Claude** (describe changes)
4. **Claude regenerates code** from updated design
5. **Pull changes** from main branch

### **Common Edits**

**Change colors:**
```javascript
// src/styles/globals.css
:root {
  --primary-blue: #147bbf;
  --light-blue: #c9e6f9;
  --text-primary: #3f3f3f;
}
```

**Update chart data:**
```javascript
// src/data/mockData.js
export const driverData = [
  { name: 'Your metric', value: 78, isDark: true },
  // ...
];
```

**Adjust spacing/padding:**
```javascript
// In component styles
padding: '40px'  // Change to desired value
gap: '24px'      // Change spacing between items
```

---

## 📊 Connecting Real Data

Replace mock data with your datamart API:

```javascript
// src/components/Dashboard.jsx
useEffect(() => {
  fetch('/api/metrics')
    .then(res => res.json())
    .then(data => setDriverData(data))
    .catch(err => console.error(err));
}, []);
```

---

## 📱 Responsive Design

- **Desktop:** 1440px+ (full layout)
- **Tablet:** 768px - 1439px (adjusted spacing)
- **Mobile:** < 768px (stacked layout)

Responsive breakpoints are built into the layout:
```javascript
gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr'
```

---

## 🎯 Code Connect Workflow

### When You Update Figma:

1. **Component changed** → Code tab appears in Figma
2. **Review suggested code** in Figma's Code panel
3. **Cherry-pick changes** into `src/components/`
4. **Test locally** with `npm start`
5. **Commit & push** to GitHub

### When You Update Code:

1. **Edit in IDE** → Changes hot reload
2. **Test responsiveness** (stretch browser window)
3. **Commit to git** with clear messages
4. **Create PR** for team review
5. **Deploy** to AWS/Vercel

---

## 🚢 Deployment

### Local Development
```bash
npm start
```

### Production Build
```bash
npm run build
# Creates optimized build in ./build/
```

### Deploy to AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3
aws s3 sync ./build s3://your-bucket-name

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

---

## 🔌 Dependencies

- **react** - UI framework
- **recharts** - Chart library
- **inter** - Typography

No Tailwind CSS needed; all styles use inline React styles + CSS variables.

---

## 📝 Fonts

Uses **Inter** font family with weights:
- 400 (Regular)
- 500 (Medium)  
- 600 (Semibold)

Imported via: `https://rsms.me/inter/inter.css`

---

## 🤝 Contributing

1. **Clone & install** (see Quick Start)
2. **Create feature branch**: `git checkout -b feature/your-change`
3. **Make edits** & test locally
4. **Commit**: `git commit -m "Update: description"`
5. **Push**: `git push origin feature/your-change`
6. **Create PR** on GitHub

---

## 🐛 Troubleshooting

**Charts not rendering?**
- Check recharts import: `import { LineChart, Line, ... } from 'recharts'`
- Verify data structure matches chart expectations

**Responsive layout broken?**
- Check flexbox properties: `flex: '1 1 70%'` for data columns
- Test with browser dev tools (F12) → Toggle device toolbar

**Colors not showing?**
- Verify Inter font is loading: DevTools → Network tab
- Check CSS variable values in inline styles

---

## 📚 Resources

- [Figma Design](https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt)
- [Code Connect Docs](https://www.figma.com/developers/docs/code-connect)
- [Recharts Docs](https://recharts.org)
- [React Docs](https://react.dev)

---

## 📧 Questions?

Contact your design/dev team or reach out to Claude for design-driven updates.

---

**Last Updated:** April 2026  
**Status:** Draft - Ready for local development
=======
# consumer-bank-microsite
>>>>>>> 81eca4c2a2e92f8a8544c3aa49f4b97e4d982c38
