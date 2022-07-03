let shopItemsData = [
  {
    id: "abcd",
    name: "Nitrile Gloves",
    composition: "Nitrile, Paperboard",
    unit: "pair",
    co2kg: 0.084,
    plastic: 8.8,
    wood: 0,
    paper: 1.3481,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 10.1481,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 58.66,
    lcaUse: 0,
    lcaTrnsp: 28.16,
    lcaEol: 13.18,
    lcaMfgKg: 0.0492744,
    lcaUseKg: 0,
    lcaTrnspKg: 0.0236544,
    lcaEolKg: 0.0110712,
    notes: 0,
    top: -10,
    left: 20,
    deg: 0.5,
    img: "images/img-1.png"
  },
  {
    id: "abce",
    name: "Latex  Gloves",
    composition: "Latex, Paperboard",
    unit: "pair",
    co2kg: 0.03,
    plastic: 8.8,
    wood: 0,
    paper: 1.3481,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 10.1481,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 44.06,
    lcaUse: 0,
    lcaTrnsp: 55.94,
    lcaEol: 0,
    notes: "No EOL Data for Latex",
    top: 8,
    left: -10,
    deg: -1,
    img: "images/img-2.png"
  },
  {
    id: "abdc",
    name: "Facemask",
    composition: "PP, Paperboard, Spandex & PET, Steel",
    unit: "single unit",
    co2kg: 0.056,
    plastic: 3.402,
    wood: 0,
    paper: 0.6924,
    fabrictextile: 0.468,
    glass: 0,
    metal: 0.134,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 4.6964,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 63.28,
    lcaUse: 0,
    lcaTrnsp: 20.95,
    lcaEol: 15.77,
    notes: 0,
    top: -7,
    left: -8,
    deg: 0.5,
    img: "images/img-3.png"
  },
  {
    id: "abde",
    name: "Wash Cup PP",
    composition: "PP, LDPE",
    unit: "single unit",
    co2kg: 0.021,
    plastic: 2.5283,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 2.5283,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 39.32,
    lcaUse: 0,
    lcaTrnsp: 29.96,
    lcaEol: 30.72,
    notes: 0,
    top: 0,
    left: 20,
    deg: 0.1,
    img: "images/img-4.png"
  },
  {
    id: "abec",
    name: "Wash Cup Eco",
    composition: "PLA Corn",
    unit: "single unit",
    co2kg: 0.046,
    plastic: 5.0959,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 5.0959,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 51.94,
    lcaUse: 0,
    lcaTrnsp: 22.2,
    lcaEol: 25.86,
    notes: "-",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-5.png"
  },
  {
    id: "abed",
    name: "Green Soap",
    composition: "Concentrate, HDPE, PP, PVC, PS",
    unit: "15ml of concenrtrate",
    co2kg: 0.048,
    plastic: 1.3503,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 1.3503,
    greywater: 90,
    energyuseKwh: 0,
    lcaMfg: 10.18,
    lcaUse: 0,
    lcaTrnsp: 81.48,
    lcaEol: 8.34,
    notes: "Data Gap - No liquid Data",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-6.png"
  },
  {
    id: "acbe",
    name: "Surface Disinfection",
    composition: "Liquid,HDPE,PP,PVC,Steel,          TPE-S,Adhesive",
    unit: "30ml",
    co2kg: 0.086,
    plastic: 2.3666,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0.665,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 3.0316,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 10.02,
    lcaUse: 0,
    lcaTrnsp: 82.34,
    lcaEol: 7.64,
    notes: "No liquid Data. Adhesive Data Missing- Data Gap!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-7.png"
  },
  {
    id: "acbd",
    name: "Safety Razor",
    composition: "PP,Paperboard,Steel",
    unit: "single unit",
    co2kg: 0.038,
    plastic: 4.3,
    wood: 0,
    paper: 2.2121,
    fabrictextile: 0,
    glass: 0,
    metal: 0.2,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 6.7121,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 66.4,
    lcaUse: 0,
    lcaTrnsp: 32.28,
    lcaEol: 1.32,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-8.png"
  },
  {
    id: "acde",
    name: "Skin Marker",
    composition: "PP,INK,PE,PET",
    unit: "Reusable",
    co2kg: 0.073,
    plastic: 7.498,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 1.5,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 7.498,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 43.8,
    lcaUse: 0,
    lcaTrnsp: 32.37,
    lcaEol: 23.83,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-9.png"
  },
  {
    id: "acdb",
    name: "Tattoo Cover - Polyurethane Wrap",
    composition: "Paper,LDPE,PUR,PET,Adhesive",
    unit: "Sheet (15x18cm)",
    co2kg: 0.041,
    plastic: 3.12,
    wood: 0,
    paper: 3.2157,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 6.3361,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 45.31,
    lcaUse: 0,
    lcaTrnsp: 33.9,
    lcaEol: 20.79,
    notes: "Adhesive Data Missing- Data Gap!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-10.png"
  },
  {
    id: "aced",
    name: "Paper Towel",
    composition: "Paperboard,Paper,LDPE",
    unit: "single sheet",
    co2kg: 0.007,
    plastic: 0.0557,
    wood: 0,
    paper: 2.8937,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 2.9494,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 95.7,
    lcaUse: 0,
    lcaTrnsp: 0.72,
    lcaEol: 3.58,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-11.png"
  },
  {
    id: "aceb",
    name: "Rubbish bag",
    composition: "LDPE, Paper, Adhesive",
    unit: "single bag",
    co2kg: 0.031,
    plastic: 6.95,
    wood: 0,
    paper: 0.0674,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.0037,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 7.0211,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 45.12,
    lcaUse: 0,
    lcaTrnsp: 6.89,
    lcaEol: 48,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-12.png"
  },
  {
    id: "adbc",
    name: "Squeeze Bottle",
    composition: "LDPE",
    unit: "Reusable",
    co2kg: 0.3,
    plastic: 39.937,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 39.937,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 40.65,
    lcaUse: 0,
    lcaTrnsp: 26.46,
    lcaEol: 32.89,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-13.png"
  },
  {
    id: "adbe",
    name: "Hand Sanitizer",
    composition: "Liquid,HDPE,PP,PVC,Adhesive",
    unit: "per pump 2ml",
    co2kg: 0.018,
    plastic: 0.1554,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.0005,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.1559,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 31.67,
    lcaUse: 0,
    lcaTrnsp: 42.82,
    lcaEol: 25.51,
    notes: "Liquid Data not complete - Data Gap!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-14.png"
  },
  {
    id: "adcb",
    name: "Instrument Cleaner",
    composition: "Concentrate,HDPE,PP,PVC,Adhesive",
    unit: "15ml",
    co2kg: 0.024,
    plastic: 1.1145,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.0051,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 1.1196,
    greywater: 15,
    energyuseKwh: 0,
    lcaMfg: 16.58,
    lcaUse: 0,
    lcaTrnsp: 69.83,
    lcaEol: 13.59,
    notes: "Liquid Data not complete - Data Gap!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-15.png"
  },
  {
    id: "adce",
    name: "Stencil Paper",
    composition: "Paperboard, Paper,LDPE,Adhesive",
    unit: "single sheet of paper",
    co2kg: 0.013,
    plastic: 0.0049,
    wood: 0,
    paper: 2.34,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.0002,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 2.3451,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 39.9,
    lcaUse: 0,
    lcaTrnsp: 59.93,
    lcaEol: 0.17,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-16.png"
  },
  {
    id: "adeb",
    name: "Stencil Ink",
    composition: "Liquid,HDPE,PP,Paper",
    unit: "print per page use",
    co2kg: 0.003,
    plastic: 0.008,
    wood: 0,
    paper: 0.0001,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.0081,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 15.32,
    lcaUse: 0,
    lcaTrnsp: 78.08,
    lcaEol: 6.6,
    notes: "No Adhesive Data for Label",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-17.png"
  },
  {
    id: "adec",
    name: "Stencil transfer",
    composition: "Liquid,PP,LDPE,PVC,Steel,PS,   TPE-S",
    unit: "per application use 0,4ml",
    co2kg: 0.003,
    plastic: 0.0103,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0.0011,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.0114,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 28.97,
    lcaUse: 0,
    lcaTrnsp: 65.99,
    lcaEol: 5.04,
    notes: "Liquid Data not complete - Data Gap! No Adhesive Data for Label",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-18.png"
  },
  {
    id: "aebd",
    name: "Isopropyl Alocohol Swap",
    composition: "Isopropyl,Paper,Paperboard,      Viscose,PE,Aluminium",
    unit: "single swap",
    co2kg: 0.278,
    plastic: 0,
    wood: 0,
    paper: 0.2509,
    fabrictextile: 0.1,
    glass: 0,
    metal: 0.0651,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.5136,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 71.16,
    lcaUse: 0,
    lcaTrnsp: 28.28,
    lcaEol: 0.56,
    notes: "EOL Data incomplete for Incineration calculation",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-19.png"
  },
  {
    id: "aebc",
    name: "Microporous Tape",
    composition: "Viscose,Paperboard,Adhesive",
    unit: "1cm",
    co2kg: 0.000028,
    plastic: 0,
    wood: 0,
    paper: 0.0028,
    fabrictextile: 0.0282,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.002,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.033,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 65.58,
    lcaUse: 0,
    lcaTrnsp: 31.04,
    lcaEol: 3.38,
    notes: "Acrylic Adhesive Data Missing!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-20.png"
  },
  {
    id: "aecd",
    name: "Tongue Depressor",
    composition: "Wood(Birch),Paper,Paperboard",
    unit: "single unit",
    co2kg: 0.023,
    plastic: 0,
    wood: 2.1,
    paper: 0.8739,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 2.9739,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 70.3,
    lcaUse: 0,
    lcaTrnsp: 29.53,
    lcaEol: 0.17,
    notes: "No Birch Wood Data- Data Gap!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-21.png"
  },
  {
    id: "aecb",
    name: "Workstation Cover Eco",
    composition: "PLA Corn, Cardboard",
    unit: "single sheet",
    co2kg: 0.073,
    plastic: 27.1,
    wood: 0,
    paper: 1.1667,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 28.2667,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 54.11,
    lcaUse: 0,
    lcaTrnsp: 45.89,
    lcaEol: 0,
    notes: "No EOL Data !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-22.png"
  },
  {
    id: "aedc",
    name: "AAA Batteries",
    composition: "Nickel plated steel container & chemicals. nickel coated steel, manganese dioxide and graphite rods, alkaline electrolyte, zinc gel, brass nail , zinc coated steel lid (positive pin, Anode), sperator(laminated paper) & plastic gasket.",
    unit: "single AAA",
    co2kg: 0.174,
    plastic: 0,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 11.4,
    solid: 11.4,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 95.59,
    lcaUse: 0,
    lcaTrnsp: 4.41,
    lcaEol: 0,
    notes: "No EOL Data !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-23.png"
  },
  {
    id: "aedb",
    name: "Bottle Sleeve ECO",
    composition: "PLA Corn, Cardboard",
    unit: "Single unit",
    co2kg: 0.009,
    plastic: 1.8,
    wood: 0,
    paper: 0.1773,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 1.9773,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 54.05,
    lcaUse: 0,
    lcaTrnsp: 45.95,
    lcaEol: 0,
    notes: "No EOL Data !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-24.png"
  },
  {
    id: "baec",
    name: "Bottle Sleeve LDPE",
    composition: "LDPE, Cardboard",
    unit: "Single unit",
    co2kg: 0.012,
    plastic: 1.4,
    wood: 0,
    paper: 0.1411,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 1.5411,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 33.23,
    lcaUse: 0,
    lcaTrnsp: 32.9,
    lcaEol: 33.87,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-25.png"
  },
  {
    id: "baed",
    name: "Distilled Water          Packaging",
    composition: "HDPE,PP",
    unit: "Reusable",
    co2kg: 0.354,
    plastic: 53.98,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 53.98,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 54.8,
    lcaUse: 0,
    lcaTrnsp: 0,
    lcaEol: 45.2,
    notes: "No Transportation Data !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-26.png"
  },
  {
    id: "bace",
    name: "Distilled Water Refill",
    composition: "Distilled Water",
    unit: "10ml",
    co2kg: 0.000013,
    plastic: 0,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0,
    greywater: 10,
    energyuseKwh: 0,
    lcaMfg: 100,
    lcaUse: 0,
    lcaTrnsp: 0,
    lcaEol: 0,
    notes: "No EOL Data !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-27.png"
  },
  {
    id: "bacd",
    name: "SUP Cartidge Grip",
    composition: "Nylon, TPE-S,Cardboard,PVC,Tyvek",
    unit: "single unit",
    co2kg: 0.64,
    plastic: 38.7,
    wood: 0,
    paper: 7.8,
    fabrictextile: 0.6,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 47.1,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 53.75,
    lcaUse: 0,
    lcaTrnsp: 30,
    lcaEol: 16.25,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-28.png"
  },
  {
    id: "bade",
    name: "Drive Pins",
    composition: "Steel(SAE316), LDPE,              Aluminium (?),Paper",
    unit: "5 units - Reusable",
    co2kg: 0.14,
    plastic: 1.19,
    wood: 0,
    paper: 0.265,
    fabrictextile: 0,
    glass: 0,
    metal: 3.46,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 1.144,
    greywater: 200,
    energyuseKwh: 0,
    lcaMfg: 73.8,
    lcaUse: 11.25,
    lcaTrnsp: 12.44,
    lcaEol: 2.51,
    notes: "EOL Data Gap !",
    img: "images/img-29.png"
  },
  {
    id: "badc",
    name: "HHP III adapter",
    composition: "Brass(MS58), Steel (SAE316)",
    unit: "single unit - Reusable",
    co2kg: 0.25,
    plastic: 0,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 28.847,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0,
    greywater: 200,
    energyuseKwh: 0,
    lcaMfg: 93.47,
    lcaUse: 6.53,
    lcaTrnsp: 0,
    lcaEol: 0,
    notes: "Transportation Data Missing !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-30.png"
  },
  {
    id: "bced",
    name: "Ekata",
    composition: "Brass(MS58), Aluminium (AlZnMgCu), Steel (SAE316)",
    unit: "single use incl.Production",
    co2kg: 1.43,
    plastic: 0,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 102.78,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0,
    greywater: 200,
    energyuseKwh: 0,
    lcaMfg: 98.88,
    lcaUse: 1.12,
    lcaTrnsp: 0,
    lcaEol: 0,
    notes: "Production & single Disinfection !",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-31.png"
  },
  {
    id: "bcea",
    name: "Tool Sterilization",
    composition: "Distilled Water, Ultrasonic Cleaner",
    unit: "single cycle",
    co2kg: 0.016,
    plastic: 0,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0,
    greywater: 300,
    energyuseKwh: 0.0275,
    lcaMfg: 0,
    lcaUse: 100,
    lcaTrnsp: 0,
    lcaEol: 0,
    notes: "LCA EOL Data Gap!",
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-32.png"
  },
  {
    id: "bcad",
    name: "Ink Cap PP",
    composition: "PP,LDPE",
    unit: "single unit",
    co2kg: 0.005,
    plastic: 0.6381,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.6381,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 38.72,
    lcaUse: 0,
    lcaTrnsp: 30.64,
    lcaEol: 30.64,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-33.png"
  },
  {
    id: "bcae",
    name: "Ink Cap ECO",
    composition: "Paper,Steel",
    unit: "single unit",
    co2kg: 0.003,
    plastic: 0,
    wood: 0,
    paper: 0.5637,
    fabrictextile: 0,
    glass: 0,
    metal: 0.0035,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.5707,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 57.07,
    lcaUse: 0,
    lcaTrnsp: 42.37,
    lcaEol: 0.56,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-34.png"
  },
  {
    id: "bcda",
    name: "Tattoo Ink",
    composition: "INK,PET,Glass,PS,PVC",
    unit: "2.3ml / one ink cap",
    co2kg: 0.038,
    plastic: 0.49,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0.138,
    metal: 0,
    ink: 2.3,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.628,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 15.03,
    lcaUse: 0,
    lcaTrnsp: 82.83,
    lcaEol: 2.14,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-35.png"
  },
  {
    id: "bcde",
    name: "Cartridge Tray PP",
    composition: "PP,Cardboard",
    unit: "single unit",
    co2kg: 0.058,
    plastic: 6.3,
    wood: 0,
    paper: 2.28,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 8.58,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 37.68,
    lcaUse: 0,
    lcaTrnsp: 34.95,
    lcaEol: 27.37,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-36.png"
  },
  {
    id: "bdea",
    name: "Cartidge Tray Eco",
    composition: "Paper,Cardboard",
    unit: "single unit",
    co2kg: 0.045,
    plastic: 0,
    wood: 0,
    paper: 13.38,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 13.38,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 38.62,
    lcaUse: 0,
    lcaTrnsp: 60.64,
    lcaEol: 0.74,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-37.png"
  },
  {
    id: "bdec",
    name: "Cartidge Needle 3RL",
    composition: "Paperboard,PP,PVC,Tyvek,      TPE-S,Steel SAe316,Solder, Epoxy",
    unit: "single unit",
    co2kg: 0.067,
    plastic: 4.255,
    wood: 0,
    paper: 1.9434,
    fabrictextile: 0.197,
    glass: 0,
    metal: 0.07,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0.007,
    composite: 0,
    solid: 6.4724,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 61.14,
    lcaUse: 0,
    lcaTrnsp: 22.72,
    lcaEol: 16.14,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-38.png"
  },
  {
    id: "bdae",
    name: "Floor Disinfection",
    composition: "Concentrate,PP,Paper,PS,       Adhesive",
    unit: "per cleaning 15ml",
    co2kg: 0.041,
    plastic: 1.4013,
    wood: 0,
    paper: 0.0428,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.008,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 1.4521,
    greywater: 15,
    energyuseKwh: 0,
    lcaMfg: 12.81,
    lcaUse: 0,
    lcaTrnsp: 78.46,
    lcaEol: 8.73,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-39.png"
  },
  {
    id: "bdac",
    name: "After Care",
    composition: "Cream,PET,Adhesive,PS,PVC",
    unit: "per gram of cream",
    co2kg: 0.006,
    plastic: 6.094,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0.0033,
    cream: 0.6,
    epoxy: 0,
    composite: 0,
    solid: 1.2127,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 30.65,
    lcaUse: 0,
    lcaTrnsp: 68.12,
    lcaEol: 1.23,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-40.png"
  },
  {
    id: "bdce",
    name: "Sharps Container",
    composition: "PP",
    unit: "per cartridge needle disposed",
    co2kg: 0.00074,
    plastic: 0.872,
    wood: 0,
    paper: 0,
    fabrictextile: 0,
    glass: 0,
    metal: 0,
    ink: 0,
    adhesive: 0,
    cream: 0,
    epoxy: 0,
    composite: 0,
    solid: 0.872,
    greywater: 0,
    energyuseKwh: 0,
    lcaMfg: 43.46,
    lcaUse: 0,
    lcaTrnsp: 26.61,
    lcaEol: 29.93,
    notes: 0,
    top: 0,
    left: 0,
    deg: 0,
    img: "images/img-41.png"
  }
]