import { figma } from 'figma';

figma.connect(
  'https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system?node-id=38:13279',
  async (node) => {
    return {
      component: 'Dashboard',
      file: 'src/components/Dashboard.jsx',
      props: {
        driverData: 'array of {name, value, isDark}',
        trendData: 'array of {year, stage1-5}',
        perceptionData: 'array of {label, barValue, col1-8, sig2?, sig3?}',
      },
      propsDescriptions: {
        driverData: 'Driver insights with dark/light blue variants',
        trendData: 'Trend data for 5-stage line chart (2021-2025)',
        perceptionData: 'Perception metrics with significance coloring (green/red)',
      },
    };
  }
);

// Left Module
figma.connect(
  'https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system?node-id=38:13289',
  async (node) => {
    return {
      component: 'Dashboard (LeftModule section)',
      file: 'src/components/Dashboard.jsx',
      props: {
        driverData: 'array',
        isDark: 'boolean',
        value: 'number 0-100',
      },
      description: 'Horizontal bar chart showing consumer bank drivers. First 3 bars dark blue (#147bbf), rest light blue (#c9e6f9).',
    };
  }
);

// Right Module
figma.connect(
  'https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system?node-id=38:13404',
  async (node) => {
    return {
      component: 'Dashboard (RightModule section)',
      file: 'src/components/Dashboard.jsx',
      props: {
        trendData: 'array of {year, stage1-5}',
        selectedComp: 'comp1 | comp2 | comp3',
        setSelectedComp: 'function',
      },
      description: 'Line chart with 5 series (stages 1-5). Segmented control for comparison. Dots are solid circles (r=6px). Responsive height.',
      features: ['Segmented Control', '5 Legend Items', '5 Line Series', 'Responsive Height'],
    };
  }
);

// Bottom Module
figma.connect(
  'https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system?node-id=38:13485',
  async (node) => {
    return {
      component: 'Dashboard (BottomModule section)',
      file: 'src/components/Dashboard.jsx',
      props: {
        perceptionData: 'array of {label, barValue, col1-8, sig2?, sig3?}',
      },
      description: 'Horizontal bars (30%) + data table (70%). Bars all dark blue. Data cells color-coded for significance (green #10b981, red #ff4d56). Responsive flex layout.',
      responsive: {
        barsColumn: 'flex: 0 0 30%',
        dataColumns: 'flex: 1 1 70%',
      },
      colors: {
        barFill: '#147bbf',
        barBackground: '#f3f4f6',
        significanceGreen: '#10b981',
        significanceRed: '#ff4d56',
      },
    };
  }
);

// Design Tokens
figma.connect(
  'https://www.figma.com/design/A5pMMtIedXMYmDxv8Gw5vt/Microsite-Layout-system',
  async (page) => {
    return {
      description: 'Chase Consumer Bank Dashboard - Figma to React',
      designTokens: {
        colors: {
          primaryBlue: '#147bbf',
          lightBlue: '#c9e6f9',
          darkGray: '#3f3f3f',
          mediumGray: '#8497b0',
          lightGray: '#f3f4f6',
          green: '#10b981',
          red: '#ff4d56',
        },
        typography: {
          fontFamily: 'Inter',
          weights: [400, 500, 600],
          sizes: {
            h1: '32px',
            h2: '24px',
            body: '16px',
            small: '12px',
          },
        },
        spacing: {
          modulePadding: '40px',
          pageMargins: '120px',
          rowGap: '24px',
          itemGap: '16px',
          tightGap: '4px',
        },
        borderRadius: {
          modules: '20px',
          controls: '8px',
          pills: '4px',
        },
      },
    };
  }
);
