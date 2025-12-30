export interface ProductVariant {
  model: string;
  code: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  category: "Power Tools" | "Hand Tools" | "Sanitaryware";
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Angle Grinder",
    image: "/products/angle_grinder.png",
    category: "Power Tools",
    variants: [
      {
        model: 'CDG100"',
        code: "S0200301",
 description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Angle Grinder 4"</li>
  <li><strong>Switch Type :</strong> Back Switch</li>
  <li><strong>Input Power :</strong> 820W</li>
  <li><strong>Disc Diameter :</strong> 100mm</li>
  <li><strong>No-load Speed :</strong> 10,000 RPM</li>
</ul>
`,


  },
      {
  model: 'CDN100',
  code: 'S0200310',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product:</strong> Angle Grinder 4½"</li>
  <li><strong>Switch Type :</strong> Back Switch</li>
  <li><strong>Input Power :</strong> 860W</li>
  <li><strong>Disc Diameter :</strong> 100mm</li>
  <li><strong>No-load Speed :</strong> 11,500 RPM</li>
</ul>
`,
},

   {
  model: 'CDG100-A',
  code: 'S0200302',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Angle Grinder 4"</li>
  <li><strong>Input Power :</strong> 850W</li>
  <li><strong>Disc Diameter :</strong> 100mm</li>
  <li><strong>No-load Speed :</strong> 10,000 RPM</li>
</ul>
`,
},
    {
  model: 'CDG115-A',
  code: 'S0200304',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Angle Grinder 4½"</li>
  <li><strong>Input Power :</strong> 850W</li>
  <li><strong>Disc Diameter :</strong> 115mm</li>
  <li><strong>No-load Speed :</strong> 11,500 RPM</li>
</ul>
`,
},{
  model: 'CDAG-100',
  code: 'S0200308',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Angle Grinder 4"</li>
  <li><strong>Switch Type :</strong> Back Switch</li>
  <li><strong>Input Power :</strong> 810W</li>
  <li><strong>Disc Diameter :</strong> 100mm</li>
  <li><strong>No-load Speed :</strong> 11,500 RPM</li>
</ul>
`,
},
{
  model: 'CDAG-115',
  code: 'S0200309',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Angle Grinder 4½"</li>
  <li><strong>Switch Type :</strong> Back Switch</li>
  <li><strong>Input Power :</strong> 830W</li>
  <li><strong>Disc Diameter :</strong> 115mm</li>
  <li><strong>No-load Speed :</strong> 11,500 RPM</li>
</ul>
`,
},
{
  model: 'CDG180',
  code: 'S0200303',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Angle Grinder 7"</li>
  <li><strong>Input Power :</strong> 1800W</li>
  <li><strong>Disc Diameter :</strong> 180mm</li>
</ul>
`,
}
,

    ],
  },
  

  {
    id: 2,
    name: "Electric Drill",
    image: "/products/electric_drill.png",
    category: "Power Tools",
    variants: [
      {
        model: 'CDG100"',
        code: " S0200105",
   description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Electric Drill</li>
  <li><strong>Chuck size :</strong> 10mm</li>
  <li><strong>Input Power :</strong> 460W</li>
  
</ul>
`,
  },
    
    ],
  },


  {
    id: 3,
    name: "Impact Drill",
    image: "/products/impact_drill.png",
    category: "Power Tools",
    variants: [
     {
    model: 'EID13',
    code: 'S0200103',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Impact Drill</li>
  <li><strong>Chuck Size :</strong> 13mm</li>
  <li><strong>Input Power :</strong> 580W</li>
</ul>
`,
  },
  {
    model: 'HID13',
    code: 'S0200104',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Impact Drill</li>
  <li><strong>Chuck Size :</strong> 13mm</li>
  <li><strong>Input Power :</strong> 750W</li>
  <li><strong>Body :</strong> Aluminium Housing</li>
</ul>
`,
  },
    
    ],
  },


  {
    id: 4,
    name: "Rotary Hammer",
    image: "/products/rotary_hammer.png",
    category: "Power Tools",
    variants: [
      {
    model: 'CDRHD800',
    code: 'S0200701',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Rotary Hammer</li>
  <li><strong>Drilling Diameter :</strong> 26mm</li>
  <li><strong>Input Power :</strong> 800W</li>
</ul>
`,
  },
  {
    model: 'CDRHD800',
    code: 'S0200702',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Rotary Hammer</li>
  <li><strong>Drilling Diameter :</strong> 26mm</li>
  <li><strong>Input Power :</strong> 800W</li>
</ul>
`,
  },
  {
    model: 'CDRH1200',
    code: 'S0200503',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Rotary Hammer</li>
  <li><strong>Drilling Diameter :</strong> 26mm</li>
  <li><strong>Input Power :</strong> 1200W</li>
</ul>
`,
  },
  {
    model: 'CDDH1200',
    code: 'S0200501',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Rotary Hammer</li>
  <li><strong>Drilling Diameter :</strong> 26mm</li>
  <li><strong>Input Power :</strong> 1200W</li>
</ul>
`,
  },
  
    
    ],
  },


  {
    id: 5,
    name: "Demolition Hammer",
    image: "/products/Demolition_hammer.png",
    category: "Power Tools",
    variants: [
 {
    model: 'CDDH1200',
    code: 'S0200504',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Demolition</li>
  <li><strong>Impact Joules :</strong> 12J</li>
  <li><strong>Input Power :</strong> 1200W</li>
</ul>
`,
  },
  {
    model: 'CDDH1500',
    code: 'S0200502',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Demolition</li>
  <li><strong>Impact Joules :</strong> 55J</li>
  <li><strong>Input Power :</strong> 1700W</li>
</ul>
`,
  },
  
    
    ],
  },

   {
    id: 6,
    name: "Palm Sander",
    image: "/products/palm_sander.png",
    category: "Power Tools",
    variants: [
 {
    model: '300W',
    code: 'S0200802',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Palm Sander</li>
  <li><strong>Rated Voltage :</strong>  220-240V </li>
  <li><strong>Rated input power : 300W</li>
  <li><strong>Rated Frequency :</strong> 50-60Hz</li>
   <li><strong>speed :</strong> 16500r/min</li>
    <li><strong>Sandpaper :</strong> 110x100mm</li>
</ul>
`,
  },
 
    
    ],
  },

     {
    id: 7,
    name: "Cordless Impact Drill",
    image: "/products/cordless_impact_drill.png",
    category: "Power Tools",
    variants: [
 
  {
  model: '3A17-12V',
  code: 'S0202203',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Impact Drill</li>
  <li><strong>Rated Voltage :</strong> 12V</li>
  <li><strong>Battery Capacity :</strong> 1.5Ah × 4</li>
  <li><strong>Gear :</strong> 25+1</li>
  <li><strong>Chuck Size :</strong> 0.8–10mm</li>
  <li><strong>Speed :</strong> 0–550 / 0–1350 r/min</li>
</ul>
`,
},
    {
    model: 'CID10-20V',
    code: 'S0202204',
    description: `
<ul style="list-style-type : disc; padding-left: 18px;">
  <li><strong>Product :</strong> Impact Drill</li>
  <li><strong>Rated Voltage :</strong> 20V</li>
  <li><strong>Chuck Size :</strong> 10mm</li>
  <li><strong>Torque :</strong> 0–80 N·m</li>
</ul>
`,
  },
  {
    model: '20V',
    code: 'S0202205',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Impact Drill</li>
  <li><strong>Rated Voltage :</strong> 20V</li>
  <li><strong>Chuck Size :</strong> 10mm</li>
  <li><strong>Torque :</strong> 0–80 N·m</li>
</ul>
`,
  },
  {
  model: 'CID10-20V',
  code: 'S0202202',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Impact Drill</li>
  <li><strong>Rated Voltage :</strong> 20V</li>
  <li><strong>Chuck Size :</strong> 10mm</li>
  <li><strong>Torque :</strong> 0–80 N·m</li>
</ul>
`,
}

 
    
    ],
  },

   {
    id: 8,
    name: "Cordless Drill",
    image: "/products/cordless_drill.png",
    category: "Power Tools",
    variants: [
 {
  model: 'CD10-20V',
  code: 'S0202201',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Cordless Drill</li>
  <li><strong>Rated Voltage :</strong> 20V</li>
  <li><strong>Chuck Size :</strong> 10mm</li>
  <li><strong>Torque :</strong> 0–40 N·m</li>
</ul>
`,
}

     ],
  },

   {
    id: 9,
    name: "Air Compressor",
    image: "/products/air_compressor.png",
    category: "Power Tools",
    variants: [
  {
    model: '24Ltr - 2HP',
    code: 'S0202109',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 24Ltr (Direct Couple)</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '24Ltr - 2HP',
    code: 'S0202101',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 24Ltr (Direct Couple)</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '24Ltr - 2HP',
    code: 'S0202117',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 24Ltr</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '40Ltr - 1HP',
    code: 'S0202102',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 40Ltr</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '40L - 1HP (NEW)',
    code: 'S0202118',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 40Ltr</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
   {
    model: '60Ltr - 2HP',
    code: 'S0202103',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 60Ltr</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '60L - 2HP (NEW)',
    code: 'S0202119',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 60Ltr</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '100L - 3HP (NEW)',
    code: 'S0202120',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 100Ltr</li>
  <li><strong>Motor Power :</strong> 3HP / 2.2KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '100Ltr - 3HP',
    code: 'S0202114',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 100Ltr</li>
  <li><strong>Motor Power :</strong> 3HP / 2.2KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '100Ltr - 3HP',
    code: 'S0202104',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 100Ltr</li>
  <li><strong>Motor Power :</strong> 3HP / 2.2KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '200Ltr - 4HP',
    code: 'S0202105',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 200Ltr (Tribal Piston)</li>
  <li><strong>Motor Power :</strong> 4HP / 3KW</li>
  <li><strong>Voltage :</strong> 240V / 50–60Hz</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '300Ltr - 7.5HP',
    code: 'S0202106',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 300Ltr (Tribal Piston)</li>
  <li><strong>Motor Power :</strong> 7.5HP / 5.5KW</li>
  <li><strong>Voltage :</strong> 380V / 50–60Hz (Three Phase)</li>
  <li><strong>Max Pressure :</strong> 8 BAR</li>
</ul>
`,
  },
  {
    model: '500Ltr - 10HP',
    code: 'S0202107',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 500Ltr</li>
  <li><strong>Electric Motor :</strong> 10HP / 7.5KW</li>
  <li><strong>Speed :</strong> 850 RPM</li>
  <li><strong>Piston Diameter :</strong> 90mm + 205mm</li>
  <li><strong>Pressure :</strong> 12.5 BAR / 232 PSI</li>
</ul>
`,
  },
  {
    model: '500Ltr - 10HP',
    code: 'S0202108',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Air Compressor 500Ltr</li>
  <li><strong>Electric Motor :</strong> 10HP / 7.5KW</li>
  <li><strong>Speed :</strong> 850 RPM</li>
  <li><strong>Piston Diameter :</strong> 90mm + 205mm</li>
  <li><strong>Pressure :</strong> 12.5 BAR / 232 PSI</li>
</ul>
`,
  },
     ],
  },

   {
    id: 10,
    name: "Disc Mill",
    image: "/products/disc_mill.png",
    category: "Power Tools",
    variants: [
  {
    model: 'FFC-15',
    code: 'S0202401',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Disc Mill</li>
  <li><strong>Model :</strong> FFC-15</li>
  <li><strong>Motor Power :</strong> 2HP / 1500W</li>
  <li><strong>Output :</strong> Corn – 55kg/h</li>
</ul>
`,
  },
  {
    model: 'FFC-23',
    code: 'S0202402',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Disc Mill</li>
  <li><strong>Model :</strong> FFC-23</li>
  <li><strong>Motor Power :</strong> 5HP / 3000W</li>
  <li><strong>Output :</strong> Corn – 180kg/h</li>
</ul>
`,
  },

     ],
  },

   {
    id: 11,
    name: "Disc Mill (One Shot)",
    image: "/products/disc_mill_one_shot.png",
    category: "Power Tools",
    variants: [
   {
    model: '9FC-21',
    code: 'S0202404',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Disc Mill (One Shot)</li>
  <li><strong>Model :</strong> 9FC-21</li>
  <li><strong>Motor Power </strong> 3HP / 2200W</li>
  <li><strong>Output :</strong> 250kg/h</li>
</ul>
`,
  },
  {
    model: '9FC-21',
    code: 'S0202403',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Disc Mill (One Shot)</li>
  <li><strong>Model :</strong> 9FC-21</li>
  <li><strong>Motor Power :</strong> 3HP / 2200W</li>
  <li><strong>Output :</strong> 250kg/h</li>
</ul>
`,
  },
  {
    model: '9FC-21',
    code: 'S0202504A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Disc Mill (One Shot)</li>
  <li><strong>Model :</strong> 9FC-21</li>
  <li><strong>Motor Power :</strong> 3HP / 2200W</li>
  <li><strong>Output :</strong> 250kg/h</li>
</ul>
`,
  },

     ],
  },

 {
    id: 12,
    name: "Battery Charger",
    image: "/products/Battery_Charger.png",
    category: "Power Tools",
    variants: [
   {
    model: 'CB-20',
    code: 'S0203701',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Battery Charger</li>
  <li><strong>Model :</strong> CB-20</li>
  <li><strong>Power :</strong> 300W</li>
  <li><strong>Voltage :</strong> 12V – 24V</li>
</ul>
`,
  },
  {
    model: 'CB-30',
    code: 'S0203702',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Battery Charger</li>
  <li><strong>Model :</strong> CB-30</li>
  <li><strong>Power :</strong> 800W</li>
  <li><strong>Voltage :</strong> 12V – 24V</li>
</ul>
`,
  },
  {
    model: 'CB-50',
    code: 'S0203703',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Battery Charger</li>
  <li><strong>Model :</strong> CB-50</li>
  <li><strong>Power :</strong> 1000W</li>
  <li><strong>Voltage :</strong> 12V – 24V</li>
</ul>
`,
  },

     ],
  },

  {
    id: 13,
    name: "Vacuum Cleaner",
    image: "/products/Vacuum_Cleaner.png",
    category: "Power Tools",
    variants: [
     {
    model: 'VC24L',
    code: 'S0203801',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Vacuum Cleaner (Wet & Dry with Blower)</li>
  <li><strong>Tank Capacity :</strong> 24L</li>
  <li><strong>Input Power :</strong> 1500W</li>
</ul>
`,
  },
  {
    model: 'VC30L',
    code: 'S0203802',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Vacuum Cleaner (Wet & Dry with Blower)</li>
  <li><strong>Tank Capacity :</strong> 30L</li>
  <li><strong>Input Power :</strong> 1500W</li>
</ul>
`,
  },
  {
    model: 'VC100L',
    code: 'S0203803',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Vacuum Cleaner (Wet & Dry)</li>
  <li><strong>Tank Capacity :</strong> 100L</li>
  <li><strong>Input Power :</strong> 4500W</li>
</ul>
`,
  },
     ],
  },

  {
    id: 14,
    name: "Water Pump",
    image: "/products/Water_Pump.png",
    category: "Power Tools",
    variants: [
   {
    model: 'QB 60',
    code: 'S0202301',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 40m</li>
  <li><strong>L/min :</strong> 40</li>
  <li><strong>Impeller :</strong> Brass</li>
</ul>
`,
  },
  {
    model: 'CPM-130',
    code: 'S0202302',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 23m</li>
  <li><strong>L/min :</strong> 90</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
   {
    model: 'CPM-130',
    code: 'S0202302-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 23m</li>
  <li><strong>L/min :</strong> 90</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'CPM-146',
    code: 'S0202303',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 0.8HP / 0.55kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 28m</li>
  <li><strong>L/min :</strong> 90</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'CPM-65',
    code: 'S0202303-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 0.8HP / 0.65kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 28m</li>
  <li><strong>L/min :</strong> 90</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'CPM-158',
    code: 'S0202304',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 36m</li>
  <li><strong>L/min :</strong> 100</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'CPM-158',
    code: 'S0202304-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 36m</li>
  <li><strong>L/min :</strong> 100</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'MHF/5AM',
    code: 'S0202305',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 2HP / 1500W</li>
  <li><strong>Inlet & Outlet :</strong> 2" × 2"</li>
  <li><strong>Max Head :</strong> 22.5m</li>
  <li><strong>L/min :</strong> 600</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'SCP-158',
    code: 'S0202324',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> S/S Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Inlet & Outlet :</strong> 1¼" × 1"</li>
  <li><strong>Max Head :</strong> 36m</li>
  <li><strong>L/min :</strong> 100</li>
</ul>
`,
  },
  {
    model: 'SCP-158',
    code: 'S0202324-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> S/S Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Inlet & Outlet :</strong> 1¼" × 1"</li>
  <li><strong>Max Head :</strong> 36m</li>
  <li><strong>L/min :</strong> 100</li>
</ul>
`,
  },
   {
    model: 'MHF/5AM',
    code: 'S0202330',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 2HP / 1500W</li>
  <li><strong>Inlet & Outlet :</strong> 2" × 2"</li>
  <li><strong>Max Head :</strong> 22.5m</li>
  <li><strong>L/min :</strong> 600</li>
</ul>
`,
  },
  {
    model: 'MH/6A',
    code: 'S0202325',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump</li>
  <li><strong>Motor Power :</strong> 3HP / 2300W</li>
  <li><strong>Inlet & Outlet :</strong> 3" × 3"</li>
  <li><strong>Max Head :</strong> 18.5m</li>
  <li><strong>L/min :</strong> 1300</li>
  <li><strong>Impeller :</strong> Stainless Steel</li>
</ul>
`,
  },
  {
    model: 'PS170',
    code: 'S0202323',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pressure Pump (Booster Pump)</li>
  <li><strong>Motor Power :</strong> 1/2HP / 0.37kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 40m</li>
</ul>
`,
  },
  {
    model: 'JET100L',
    code: 'S0202326',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Jet Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Inlet & Outlet :</strong> 1" × 1"</li>
  <li><strong>Max Head :</strong> 50m</li>
</ul>
`,
  },
     ],
  },

  {
    id: 15,
    name: "Tubewell Pump",
    image: "/products/Tubewell_Pump.png",
    category: "Power Tools",
    variants: [
   {
  model: '3SDM 2/6 - 0.25',
  code: 'S0202312',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.33HP / 0.25kW</li>
  <li><strong>Efficiency :</strong> 100% Copper Winding</li>
  <li><strong>Max Immersion Depth :</strong> 36m</li>
  <li><strong>Impeller Stage :</strong> 6</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
},
  {
    model: '3SDM 2/6 - 0.25',
    code: 'S0202312-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.33HP / 0.25kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 36m</li>
  <li><strong>Impeller Stage :</strong> 6</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 3/8 - 0.37',
    code: 'S0202313',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 48m</li>
  <li><strong>Impeller Stage :</strong> 8</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 3/8 - 0.37',
    code: 'S0202313-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 48m</li>
  <li><strong>Impeller Stage :</strong> 8</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 3/10 - 0.55',
    code: 'S0202315',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.75HP / 0.55kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 58m</li>
  <li><strong>Impeller Stage :</strong> 10</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 3/10 - 0.55',
    code: 'S0202315-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.75HP / 0.55kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 58m</li>
  <li><strong>Impeller Stage :</strong> 10</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 4/11 - 0.75',
    code: 'S0202314',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Voltage :</strong> 220V</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 66m</li>
  <li><strong>Impeller Stage :</strong> 11</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 4/11 - 0.75',
    code: 'S0202314-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Voltage :</strong> 220V</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 66m</li>
  <li><strong>Impeller Stage :</strong> 11</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 4/11 - 0.75',
    code: 'S0202331',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Voltage :</strong> 220V</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 66m</li>
  <li><strong>Impeller Stage :</strong> 11</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },{
    model: '3SDM 4/20 - 1.1',
    code: 'S0202316',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1.5HP / 1.1kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 105m</li>
  <li><strong>Impeller Stage :</strong> 20</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '3SDM 4/20 - 1.1',
    code: 'S0202316-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1.5HP / 1.1kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 105m</li>
  <li><strong>Impeller Stage :</strong> 20</li>
  <li><strong>Well Diameter :</strong> 3"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/8 - 0.37',
    code: 'S0202317',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 39m</li>
  <li><strong>Impeller Stage :</strong> 8</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/8 - 0.37',
    code: 'S0202317-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.5HP / 0.37kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 39m</li>
  <li><strong>Impeller Stage :</strong> 8</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/11 - 0.55',
    code: 'S0202318',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.75HP / 0.55kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 54m</li>
  <li><strong>Impeller Stage :</strong> 11</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/11 - 0.55',
    code: 'S0202318-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 0.75HP / 0.55kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 54m</li>
  <li><strong>Impeller Stage :</strong> 11</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/14 - 0.75',
    code: 'S0202319',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Voltage :</strong> 220V</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 70m</li>
  <li><strong>Impeller Stage :</strong> 14</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/14 - 0.75',
    code: 'S0202319-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Voltage :</strong> 220V</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 70m</li>
  <li><strong>Impeller Stage :</strong> 14</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/17 - 1.1',
    code: 'S0202320',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1.5HP / 1.1kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 101m</li>
  <li><strong>Impeller Stage :</strong> 17</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/17 - 1.1',
    code: 'S0202320-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 1.5HP / 1.1kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 101m</li>
  <li><strong>Impeller Stage :</strong> 17</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/23 - 1.5',
    code: 'S0202321',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 131m</li>
  <li><strong>Impeller Stage :</strong> 23</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
  {
    model: '4SDM 5/23 - 1.5',
    code: 'S0202321-A',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tubewell Pump</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5kW</li>
  <li><strong>Winding :</strong> 100% Copper</li>
  <li><strong>Max Immersion Depth :</strong> 131m</li>
  <li><strong>Impeller Stage :</strong> 23</li>
  <li><strong>Well Diameter :</strong> 4"</li>
  <li><strong>Outlet :</strong> 1¼"</li>
</ul>
`,
  },
     ],
  },
    {
    id: 16,
    name: "Garden Submersible Pump",
    image: "/products/garden_submersible_pump.png",
    category: "Power Tools",
    variants: [
       {
    model: 'BDP 4004',
    code: 'S0202307',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Garden Submersible Pump</li>
  <li><strong>Motor Power :</strong> 370W / 0.5HP</li>
  <li><strong>Outlet :</strong> 1"</li>
  <li><strong>Max Head :</strong> 7m</li>
  <li><strong>Motor :</strong> 100% Copper</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 17,
    name: "Submersible Pump",
    image: "/products/submersible_pump.png",
    category: "Power Tools",
    variants: [
       {
    model: 'QDX1.5-32-0.75',
    code: 'S0202308',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Submersible Pump</li>
  <li><strong>Motor Power :</strong> 750W / 1HP</li>
  <li><strong>Outlet :</strong> 1"</li>
  <li><strong>Max Head :</strong> 32m</li>
  <li><strong>Motor :</strong> 100% Copper</li>
</ul>
`,
  },
  {
    model: 'SPA6-39/3-1.5AF',
    code: 'S0202329',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Submersible Pump</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5kW</li>
  <li><strong>Diameter :</strong> 2"</li>
  <li><strong>Max Head :</strong> 39m</li>
  <li><strong>Motor :</strong> 100% Copper</li>
</ul>
`,
  },
  {
    model: 'WQD6-18-0.75',
    code: 'S0202310',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Sewage Pump</li>
  <li><strong>Motor Power :</strong> 1HP / 0.75kW</li>
  <li><strong>Outlet :</strong> 2"</li>
  <li><strong>Max Head :</strong> 19m</li>
  <li><strong>Motor :</strong> 100% Copper</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 18,
    name: "Cutter Pump",
    image: "/products/cutter_pump.png",
    category: "Power Tools",
    variants: [
      {
    model: 'W1500F',
    code: 'S0202328',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Cutter Pump</li>
  <li><strong>Motor Power :</strong> 2HP / 1.5kW</li>
  <li><strong>Diameter :</strong> 2"</li>
  <li><strong>Max Head :</strong> 14m</li>
  <li><strong>Motor :</strong> 100% Copper</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 19,
    name: " Water Pump Controller",
    image: "/products/Water_Pump_Controller.png",
    category: "Power Tools",
    variants: [
      {
    model: 'Water Pump Controller',
    code: 'S0203201',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Water Pump Controller</li>
  <li><strong>Power :</strong> 370W – 1100W</li>
  <li><strong>Rated Voltage :</strong> 220V</li>
  <li><strong>Frequency :</strong> 50/60Hz</li>
  <li><strong>Max Current :</strong> 10A</li>
  <li><strong>Starting Pressure :</strong> 15 Bar</li>
  <li><strong>Working Pressure :</strong> 10 Bar</li>
  <li><strong>Thread :</strong> 1" × 1"</li>
  <li><strong>Protection Rating :</strong> IP65</li>
  <li><strong>Cable :</strong> Rubber, 0.75mm² × 3core power cable with plug + 0.75mm² × 30cm pump cable</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 20,
    name: "Diesel Engine Pump",
    image: "/products/diesel_engine_pump.png",
    category: "Power Tools",
    variants: [
     {
    model: 'WP20D-170F',
    code: 'S0203301',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Diesel Engine Pump</li>
  <li><strong>Engine Model :</strong> WX-170F</li>
  <li><strong>Pump Type :</strong> SP</li>
  <li><strong>Suction :</strong> 8m</li>
  <li><strong>Delivery :</strong> 26m</li>
  <li><strong>Input / Output :</strong> 2" × 2"</li>
</ul>
`,
  },
  {
    model: 'WP30D-178F',
    code: 'S0203302',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Diesel Engine Pump</li>
  <li><strong>Engine Model :</strong> WX-178F</li>
  <li><strong>Pump Type :</strong> SP</li>
  <li><strong>Suction :</strong> 8m</li>
  <li><strong>Delivery :</strong> 26m</li>
  <li><strong>Input / Output :</strong> 3" × 3"</li>
</ul>
`,
  },
  {
    model: 'WP40D-186F',
    code: 'S0203303',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Diesel Engine Pump</li>
  <li><strong>Engine Model :</strong> WX-186F</li>
  <li><strong>Pump Type :</strong> SP</li>
  <li><strong>Suction :</strong> 8m</li>
  <li><strong>Delivery :</strong> 26m</li>
  <li><strong>Input / Output :</strong> 4" × 4"</li>
</ul>
`,
  },
    
    ],
  },

  {
    id: 21,
    name: "Tractor Coupled Pump",
    image: "/products/tractor_coupled_pump.png",
    category: "Power Tools",
    variants: [
     {
    model: 'WX-SU50 - 2"',
    code: 'S0203401',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tractor Coupled Pump</li>
  <li><strong>Outlet/Inlet Size :</strong> 2" × 2"</li>
  <li><strong>Speed :</strong> 3600 RPM</li>
  <li><strong>Suction :</strong> 8m</li>
  <li><strong>Delivery :</strong> 36m</li>
</ul>
`,
  },
  {
    model: 'WX-SU80 - 3"',
    code: 'S0203402',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tractor Coupled Pump</li>
  <li><strong>Outlet/Inlet Size :</strong> 3" × 3"</li>
  <li><strong>Speed :</strong> 3600 RPM</li>
  <li><strong>Suction :</strong> 8m</li>
  <li><strong>Delivery :</strong> 36m</li>
</ul>
`,
  },
  {
    model: 'WX-SU100 - 4"',
    code: 'S0203403',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tractor Coupled Pump</li>
  <li><strong>Outlet/Inlet Size :</strong> 4" × 4"</li>
  <li><strong>Speed :</strong> 3600 RPM</li>
  <li><strong>Suction :</strong> 7m</li>
  <li><strong>Delivery :</strong> 36m</li>
</ul>
`,
  },
  {
    model: 'WX-150150 - 6"',
    code: 'S0203404',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Tractor Coupled Pump</li>
  <li><strong>Outlet/Inlet Size :</strong> 4" × 4"</li>
  <li><strong>Speed :</strong> 3600 RPM</li>
  <li><strong>Suction :</strong> 6m</li>
  <li><strong>Delivery :</strong> 25m</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 22,
    name: "Electric Blower",
    image: "/products/electric_blower.png",
    category: "Power Tools",
    variants: [
       {
    model: 'EB600',
    code: 'S0203001',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Electric Blower</li>
  <li><strong>Speed Control :</strong> Yes</li>
  <li><strong>Input Power :</strong> 600W</li>
  <li><strong>No-load Speed :</strong> 0–13,000 r/min</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 23,
    name: "Wood Trimmer",
    image: "/products/wood_trimmer.png",
    category: "Power Tools",
    variants: [
     {
    model: 'CDWT470',
    code: 'S0200901',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Wood Trimmer</li>
  <li><strong>Collet Size :</strong> 1/4"</li>
  <li><strong>Input Power :</strong> 580W</li>
</ul>
`,
  },
  {
    model: '600W',
    code: 'S0200902',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Wood Trimmer</li>
  <li><strong>Rated Voltage :</strong> 220V</li>
  <li><strong>Rated Input Power :</strong> 600W</li>
  <li><strong>Rated Frequency :</strong> 50–60Hz</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 24,
    name: "Router",
    image: "/products/Router.png",
    category: "Power Tools",
    variants: [
        {
    model: 'CDR2100',
    code: 'S0201102',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Router</li>
  <li><strong>Collet Size :</strong> 1/2"</li>
  <li><strong>Input Power :</strong> 2200W</li>
</ul>
`,
  },
  {
    model: 'CDR2100',
    code: 'S0201101',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Router</li>
  <li><strong>Collet Size :</strong> 1/2"</li>
  <li><strong>Input Power :</strong> 2200W</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 25,
    name: "Jig Saw",
    image: "/products/jig_saw.png",
    category: "Power Tools",
    variants: [
       {
    model: 'CDJS650',
    code: 'S0201301',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Jig Saw</li>
  <li><strong>Input Power  :</strong> 650W</li>
  <li><strong>Max Cutting Diameter :</strong> 65mm</li>
</ul>
`,
  },
  {
    model: 'CD630 (NEW)',
    code: 'S0201302',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Jig Saw</li>
  <li><strong>Input Power :</strong> 630W</li>
  <li><strong>Max Cutting Diameter :</strong> 65mm</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 26,
    name: " Planer",
    image: "/products/planer.png",
    category: "Power Tools",
    variants: [
     {
    model: '620W',
    code: 'S0201002',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Planer</li>
  <li><strong>Rated Voltage :</strong> 220V</li>
  <li><strong>Rated Input Power :</strong> 620W</li>
  <li><strong>Cutter Head Diameter :</strong> 82mm</li>
  <li><strong>Rated Frequency :</strong> 50–60Hz</li>
  <li><strong>No-load Speed :</strong> 16,000 r/min</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 27,
    name: "Circular Saw",
    image: "/products/circular_saw.png",
    category: "Power Tools",
    variants: [
     {
    model: 'CDC1500 (NEW)',
    code: 'S0200202',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Circular Saw – 7¼"</li>
  <li><strong>Input Power :</strong> 1500W</li>
  <li><strong>Blade Size :</strong> 185mm</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 28,
    name: "Marble Cutter",
    image: "/products/marble_cutter.png",
    category: "Power Tools",
    variants: [
     {
    model: 'CDMC1300',
    code: 'S0201401',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Marble Cutter</li>
  <li><strong>Blade Size :</strong> 110mm</li>
  <li><strong>Input Power :</strong> 1300W</li>
  <li><strong>No-load Speed :</strong> 13,000 r/min</li>
</ul>
`,
  },
    
    ],
  },
   {
    id: 29,
    name: "Polisher",
    image: "/products/polisher.png",
    category: "Power Tools",
    variants: [
     {
    model: 'CDCP180',
    code: 'S0200601',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product:</strong> Policer</li>
  <li><strong>Input Power:</strong> 1400W</li>
  <li><strong>Disc Size:</strong> 185mm</li>
</ul>
`,
  },
  {
    model: 'CDCP180',
    code: 'S0200602',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product:</strong> Policer</li>
  <li><strong>Input Power:</strong> 1400W</li>
  <li><strong>Disc Size:</strong> 185mm</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 30,
    name: "Paint Mixer",
    image: "/products/paint_mixer.png",
    category: "Power Tools",
    variants: [
      {
    model: '1100W',
    code: 'S0203901',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Paint Mixer</li>
  <li><strong>Rated Voltage :</strong> 220V</li>
  <li><strong>Rated Input Power :</strong> 1100W</li>
  <li><strong>Mixing Paddle Length :</strong> 120mm</li>
  <li><strong>Rated Frequency :</strong> 50Hz</li>
  <li><strong>No-load Speed :</strong> 0–900 r/min</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 31,
    name: "Miter Saw",
    image: "/products/miter_saw.png",
    category: "Power Tools",
    variants: [
        {
    model: 'CDMS1600',
    code: 'S0201601',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Miter Saw – 10"</li>
  <li><strong>Input Power :</strong> 1800W</li>
  <li><strong>Blade Size :</strong> 255mm</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 32,
    name: "Cut-off Machine",
    image: "/products/cut_off_machine.png",
    category: "Power Tools",
    variants: [
     {
    model: 'CDCS2300',
    code: 'S0201701',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Cutoff Machine – 14"</li>
  <li><strong>Input Power :</strong> 2300W</li>
  <li><strong>Disc Size :</strong> 355mm</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 33,
    name: "Heat Gun",
    image: "/products/heat_gun.png",
    category: "Power Tools",
    variants: [
     {
    model: 'HG2000',
    code: 'S02031001',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Heat Gun</li>
  <li><strong>Input Power :</strong> 2000W</li>
  <li><strong>Low Temperature :</strong> 350°C (50–350°C)</li>
  <li><strong>High Temperature :</strong> 650°C (50–650°C)</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 34,
    name: "Welding Plant",
    image: "/products/welding_plant.png",
    category: "Power Tools",
    variants: [
     {
    model: 'MMA-200',
    code: 'S0202001',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Welding Plant</li>
  <li><strong>Model :</strong> MMA-200</li>
  <li><strong>Power :</strong> 200 AMP</li>
  <li><strong>Input Voltage :</strong> 220V</li>
</ul>
`,
  },
  {
    model: 'MMA-250',
    code: 'S0202002',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Welding Plant</li>
  <li><strong>Model :</strong> MMA-250</li>
  <li><strong>Power :</strong> 250 AMP</li>
  <li><strong>Input Voltage :</strong> 220V</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 35,
    name: "Industrial Welding Plant",
    image: "/products/industrial_welding_plant.png",
    category: "Power Tools",
    variants: [
    {
    model: 'MMA-315',
    code: 'S0202003',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Industrial Welding Plant</li>
  <li><strong>Model :</strong> MMA-315</li>
  <li><strong>Power :</strong> 315 AMP</li>
  <li><strong>Input Voltage :</strong> 220V</li>
</ul>
`,
  },
  {
    model: 'MMA-400',
    code: 'S0202004',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Industrial Welding Plant</li>
  <li><strong>Model :</strong> MMA-400</li>
  <li><strong>Power :</strong> 400 AMP</li>
  <li><strong>Input Voltage :</strong> 220–380V</li>
</ul>
`,
  },
  {
    model: 'TIG-MMA 250',
    code: 'S0202005',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Industrial Welding Plant</li>
  <li><strong>Model :</strong> MMA-400</li>
  <li><strong>Power :</strong> 400 AMP</li>
  <li><strong>Input Voltage :</strong> 220–380V</li>
</ul>
`,
  },
    
    ],
  },
   {
    id: 36,
    name: "Brush Cutter",
    image: "/products/brush_cutter.png",
    category: "Power Tools",
    variants: [
    {
    model: 'BG328A',
    code: 'S0201501',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Brush Cutter</li>
  <li><strong>Engine :</strong> Single Cylinder, Air Cooled, 2 Stroke</li>
  <li><strong>Engine Power :</strong> 30.5cc</li>
  <li><strong>Tank Capacity :</strong> 1.2L</li>
</ul>
`,
  },
  {
    model: 'BG328A',
    code: 'S0201502',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Brush Cutter</li>
  <li><strong>Engine :</strong> Single Cylinder, Air Cooled, 2 Stroke</li>
  <li><strong>Engine Power :</strong> 30.5cc</li>
  <li><strong>Tank Capacity :</strong> 1.2L</li>
</ul>
`,
  },
    
    ],
  },
  {
    id: 37,
    name: "Mini Tiller",
    image: "/products/mini_tiller.png",
    category: "Power Tools",
    variants: [
      {
    model: 'Mini Tiller',
    code: 'S0900101',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Mini Tiller</li>
  <li><strong>Engine Type :</strong> 1E44F-5 (2 Stroke)</li>
  <li><strong>Engine Power :</strong> 1.7kW</li>
  <li><strong>Displacement :</strong> 52cc</li>
  <li><strong>Tilling Width :</strong> 25cm</li>
  <li><strong>Tilling Depth :</strong> 10–15cm</li>
</ul>
`,
  },
    
    ],
  },
   {
    id: 38,
    name: "Earth Auger",
    image: "/products/earth_auger.png",
    category: "Power Tools",
    variants: [
      {
    model: 'Earth Auger',
    code: 'S0900201',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Earth Auger</li>
  <li><strong>Engine Type :</strong> Single Cylinder, 2 Stroke</li>
  <li><strong>Engine Power :</strong> 1.6kW</li>
  <li><strong>Displacement :</strong> 48cc</li>
  <li><strong>Bit :</strong> 1 Bit</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 39,
    name: "Electric Grass Trimmer",
    image: "/products/electric_grass_trimmer.png",
    category: "Power Tools",
    variants: [
     {
  model: 'E/G Trimmer',
  code: 'S0203601',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Electric Grass Trimmer</li>
</ul>
`,
},
    
    ],
  },

    {
    id: 40,
    name: "High Pressure Washer",
    image: "/products/high_pressure_washer.png",
    category: "Power Tools",
    variants: [
      {
    model: '70BAR',
    code: 'S0202804',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> High Pressure Washer</li>
  <li><strong>Input Power :</strong> 1200W</li>
  <li><strong>Motor Type :</strong> Carbon Brush Motor</li>
  <li><strong>Maximum Pressure :</strong> 7 MPa</li>
  <li><strong>Max Flow :</strong> 6.5 L/min</li>
</ul>
`,
  },
  {
    model: 'QL-280',
    code: 'S0202801',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> High Pressure Washer</li>
  <li><strong>Input Power :</strong> 1300W</li>
  <li><strong>Motor :</strong> 100% Copper Winding</li>
  <li><strong>Maximum Pressure :</strong> 8 MPa</li>
  <li><strong>Theory Flow :</strong> 10 L/min</li>
</ul>
`,
  },
  {
    model: 'QL-280',
    code: 'S0202802',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> High Pressure Washer</li>
  <li><strong>Input Power :</strong> 1300W</li>
  <li><strong>Motor :</strong> 100% Copper Winding</li>
  <li><strong>Maximum Pressure :</strong> 8 MPa</li>
  <li><strong>Theory Flow :</strong> 10 L/min</li>
</ul>
`,
  },
  {
    model: 'SK-580',
    code: 'S0202805',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> High Pressure Washer</li>
  <li><strong>Input Power :</strong> 2200W</li>
  <li><strong>Motor :</strong> 100% Copper Winding</li>
  <li><strong>Maximum Pressure :</strong> 80 Bar</li>
  <li><strong>Theory Flow :</strong> 40 L/min</li>
</ul>
`,
  },
  {
    model: 'SK-580',
    code: 'S0202806',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> High Pressure Washer</li>
  <li><strong>Input Power :</strong> 2200W</li>
  <li><strong>Motor :</strong> 100% Copper Winding</li>
  <li><strong>Maximum Pressure :</strong> 80 Bar</li>
  <li><strong>Theory Flow :</strong> 40 L/min</li>
</ul>
`,
  },
    
    ],
  },
{
  id: 41,
  name: "Sander",
  image: "/products/Sander.png",
  category: "Power Tools",
  variants: [
    {
      model: "ES400",
      code: "S0203501",
      description: `
<ul style="list-style-type: disc; padding-left: 18px; line-height: 1.6;">
  <li><strong>Product:</strong> Sander</li>
  <li><strong>Input Power:</strong> 400W</li>
  <li><strong>No-load Speed:</strong> 14000 r/min</li>
  <li><strong>Pad Size:</strong> 90 × 180 mm</li>
</ul>
      `,
    },
  ],
},



  {
    id: 42,
    name: "Hoist",
    image: "/products/hoist.png",
    category: "Hand Tools",
    variants: [
     {
    model: 'PA-250/500',
    code: 'S0202601',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Hoist</li>
  <li><strong>Motor Power :</strong> 930W</li>
  <li><strong>Lifting Capacity :</strong> 250kg / 500kg</li>
  <li><strong>Lifting Height :</strong> 20m / 10m</li>
  <li><strong>Lifting Speed :</strong> 10 / 5 m/min</li>
</ul>
`,
  },
  {
    model: 'PA-500/1000',
    code: 'S0202602',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product:</strong> Hoist</li>
  <li><strong>Motor Power :</strong> 2000W</li>
  <li><strong>Lifting Capacity :</strong> 500kg / 1000kg</li>
  <li><strong>Lifting Height :</strong> 20m / 10m</li>
  <li><strong>Lifting Speed :</strong> 20 / 10 m/min</li>
</ul>
`,
  },
  {
    model: 'PA-500/1000',
    code: 'S0202603',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Hoist</li>
  <li><strong>Motor Power :</strong> 2000W</li>
  <li><strong>Lifting Capacity :</strong> 500kg / 1000kg</li>
  <li><strong>Lifting Height :</strong> 30m / 15m</li>
  <li><strong>Lifting Speed :</strong> 20 / 10 m/min</li>
</ul>
`,
  },
  {
    model: 'PA-600/1200',
    code: 'S0202604',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Hoist</li>
  <li><strong>Motor Power :</strong> 2000W</li>
  <li><strong>Lifting Capacity :</strong> 600kg / 1200kg</li>
  <li><strong>Lifting Height :</strong> 20m / 10m</li>
  <li><strong>Lifting Speed :</strong> 20 / 10 m/min</li>
</ul>
`,
  },
     {
    model: 'PA-600/1200',
    code: 'S0202605',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Hoist</li>
  <li><strong>Motor Power :</strong> 2000W</li>
  <li><strong>Lifting Capacity :</strong> 600kg / 1200kg</li>
  <li><strong>Lifting Height :</strong> 30m / 15m</li>
  <li><strong>Lifting Speed :</strong> 20 / 10 m/min</li>
</ul>
`,
  },
    ],
  },
    {
    id: 43,
    name: "Moving Hoist",
    image: "/products/moving_hoist.png",
    category: "Hand Tools",
    variants: [
    {
    model: 'PA-600/1200 (Moving Hoist)',
    code: 'S0202903',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Moving Hoist</li>
  <li><strong>Motor Power :</strong> 2000W</li>
  <li><strong>Lifting Capacity :</strong> 600kg / 1200kg</li>
  <li><strong>Lifting Height :</strong> 20m / 10m</li>
  <li><strong>Lifting Speed :</strong> 20 / 10 m/min</li>
</ul>
`,
  },
  {
    model: 'PA-500/1000 (Small Electric Hoist)',
    code: 'S0202901',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Small Electric Hoist</li>
  <li><strong>Motor Power :</strong> 1800W</li>
  <li><strong>Lifting Capacity :</strong> 500kg / 1000kg</li>
  <li><strong>Lifting Height :</strong> 20m / 10m</li>
  <li><strong>Lifting Speed :</strong> 20 / 10 m/min</li>
</ul>
`,
  },
    
    ],
  },
   {
    id: 44,
    name: "Engine Hoist",
    image: "/products/engine_hoist.png",
    category: "Hand Tools",
    variants: [
      {
    model: '2TON',
    code: 'S04002001',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Engine Hoist</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Type :</strong> Heavy Duty</li>
</ul>
`,
  },
  {
    model: '3TON',
    code: 'S04002002',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Engine Hoist</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Type :</strong> Heavy Duty</li>
</ul>
`,
  },
    ],
  },

    {
    id: 45,
    name: "Trolley",
    image: "/products/trolley.png",
    category: "Hand Tools",
    variants: [
     {
  model: 'PA-600/1200',
  code: 'S0202902',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Trolley</li>
  <li><strong>Type :</strong> Hoist Trolley</li>
  <li><strong>Compatible Model :</strong> PA-600 / 1200</li>
</ul>
`,
},
    
    ],
  },

    {
    id: 46,
    name: "Chain Block",
    image: "/products/chain_block.png",
    category: "Hand Tools",
    variants: [
       {
    model: '1TON / 3M',
    code: 'S0500101',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 1 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '1TON / 5M',
    code: 'S0500105',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 1 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '2TON / 3M',
    code: 'S0500102',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '2TON / 5M',
    code: 'S0500106',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '2TON / 10M',
    code: 'S0500107',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Lifting Length :</strong> 10 M</li>
</ul>
`,
  },
  {
    model: '3TON / 3M',
    code: 'S0500103',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '3TON / 5M',
    code: 'S0500108',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '3TON / 10M',
    code: 'S0500109',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Lifting Length :</strong> 10 M</li>
</ul>
`,
  },
  {
    model: '5TON / 3M',
    code: 'S0500104',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 5 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '5TON / 5M',
    code: 'S0500110',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 5 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '5TON / 10M',
    code: 'S0500111',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> VITAL</li>
  <li><strong>Capacity :</strong> 5 Ton</li>
  <li><strong>Lifting Length :</strong> 10 M</li>
</ul>
`,
  },


  {
    model: '1TON / 3M',
    code: 'S0500201',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 1 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '1TON / 5M',
    code: 'S0500205',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 1 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '2TON / 3M',
    code: 'S0500202',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '2TON / 5M',
    code: 'S0500206',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '2TON / 10M',
    code: 'S0500207',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 2 Ton</li>
  <li><strong>Lifting Length :</strong> 10 M</li>
</ul>
`,
  },
  {
    model: '3TON / 3M',
    code: 'S0500203',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '3TON / 5M',
    code: 'S0500208',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '3TON / 10M',
    code: 'S0500209',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 3 Ton</li>
  <li><strong>Lifting Length :</strong> 10 M</li>
</ul>
`,
  },
  {
    model: '5TON / 3M',
    code: 'S0500204',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 5 Ton</li>
  <li><strong>Lifting Length :</strong> 3 M</li>
</ul>
`,
  },
  {
    model: '5TON / 5M',
    code: 'S0500210',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 5 Ton</li>
  <li><strong>Lifting Length :</strong> 5 M</li>
</ul>
`,
  },
  {
    model: '5TON / 10M',
    code: 'S0500211',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Chain Block</li>
  <li><strong>Brand :</strong> DUBHE</li>
  <li><strong>Capacity :</strong> 5 Ton</li>
  <li><strong>Lifting Length :</strong> 10 M</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 47,
    name: "Pallet Truck",
    image: "/products/pallet_truck.png",
    category: "Hand Tools",
    variants: [
       {
    model: '2 TON',
    code: 'S0500301',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Pallet Truck</li>
  <li><strong>Lifting Weight:</strong> 2 Ton</li>
</ul>
`,
  },
  {
    model: '2.5 TON',
    code: 'S0500303',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Pallet Truck</li>
  <li><strong>Lifting Weight:</strong> 2.5 Ton</li>
</ul>
`,
  },
  {
    model: '3 TON',
    code: 'S0500302',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Pallet Truck</li>
  <li><strong>Lifting Weight :</strong> 3 Ton</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 48,
    name: "Manual Stacker",
    image: "/products/manual_stacker.png",
    category: "Hand Tools",
    variants: [
      {
    model: '1TON / 1000kg',
    code: 'S0400102',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Manual Stacker</li>
  <li><strong>Capacity :</strong> 1 Ton / 1000kg</li>
  <li><strong>Max Lifting Height :</strong> 1600mm</li>
  <li><strong>Mast Height :</strong> 2040mm</li>
</ul>
`,
  },
  {
    model: '2TON / 2000kg',
    code: 'S0400103',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Manual Stacker</li>
  <li><strong>Capacity :</strong> 2 Ton / 2000kg</li>
  <li><strong>Max Lifting Height :</strong> 1600mm</li>
  <li><strong>Mast Height :</strong> 2040mm</li>
</ul>
`,
  },
    
    ],
  },

    {
    id: 49,
    name: " Ratchet Belt",
    image: "/products/ratchet_belt.png",
    category: "Hand Tools",
    variants: [
       {
    model: '2 TON',
    code: 'S0500403',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Ratchet Belt</li>
  <li><strong>Capacity :</strong> 2 Ton (Heavy Duty)</li>
  <li><strong>Belt Size :</strong> 1" / 25mm</li>
</ul>
`,
  },
  {
    model: '3 TON',
    code: 'S0500404',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Ratchet Belt</li>
  <li><strong>Capacity :</strong> 3 Ton (Heavy Duty)</li>
  <li><strong>Belt Size :</strong> 1.5" / 35mm</li>
</ul>
`,
  },
  {
    model: '5 TON',
    code: 'S0500401',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Ratchet Belt</li>
  <li><strong>Capacity :</strong> 5 Ton (Heavy Duty)</li>
  <li><strong>Belt Size:</strong> 2" / 50mm</li>
</ul>
`,
  },
  {
    model: '10 TON',
    code: 'S0500402',
    description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Ratchet Belt</li>
  <li><strong>Capacity :</strong> 10 Ton (Heavy Duty)</li>
  <li><strong>Belt Size :</strong> 3" / 75mm</li>
</ul>
`,
  },
    
    ],
  },
    {
    id: 50,
    name: "Auger Bit",
    image: "/products/auger_bit.png",
    category: "Hand Tools",
    variants: [
     {
  model: 'Auger Bit',
  code: 'S0900202',
  description: `
<ul style="list-style-type: disc; padding-left: 18px;">
  <li><strong>Product :</strong> Auger Bit</li>
  <li><strong>Bit Size :</strong> 200mm</li>
</ul>
`,
},
    
    ],
  },
   {
  id: 51,
  name: "Coming Soon",
  image: "/products/soon.png",
  category: "Hand Tools",
  variants: [
    {
      model: "-",
      code: "-",
      description: `
<ul style="list-style-type: disc; padding-left: 18px; color: var(--theme-color, #fb923c);">
  <li><strong>Product :</strong> Coming Soon</li>
  <li><strong>Specifications :</strong>-</li>
  <li><strong>Status :</strong> Launching soon</li>
</ul>
`,
    },

    
    ],
  },
  
   {
  id: 52,
  name: "Coming Soon",
   image: "/products/soon.png",
  category: "Sanitaryware",
  variants: [
    {
      model: "-",
      code: "-",
      description: `
<ul style="list-style-type: disc; padding-left: 18px; color: var(--theme-color, #fb923c);">
  <li><strong>Product :</strong> Coming Soon</li>
  <li><strong>Specifications :</strong>-</li>
  <li><strong>Status :</strong> Launching soon</li>
</ul>
`,
    },

    
    ],
  },
   {
  id: 53,
  name: "Coming Soon",
 image: "/products/soon.png",
  category: "Sanitaryware",
  variants: [
    {
      model: "-",
      code: "-",
      description: `
<ul style="list-style-type: disc; padding-left: 18px; color: var(--theme-color, #fb923c);">
  <li><strong>Product :</strong> Coming Soon</li>
  <li><strong>Specifications :</strong>-</li>
  <li><strong>Status :</strong> Launching soon</li>
</ul>
`,
    },

    
    ],
  },
];
