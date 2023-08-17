const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/products/headset-100.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 138,
        name: 'JS Note 7',
        price: 2,
        image: require('../assets/products/mob5.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 321,
        name: 'LP Air',
        price: 350,
        image: require('../assets/products/lp6.jpg'),
        description: 'A mobset combines a mobphone with microphone. mobsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 311,
        name: 'LP Thin',
        price: 2,
        image: require('../assets/products/lp1.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 322,
        name: 'PC Think',
        price: 350,
        image: require('../assets/products/lp2.jpg'),
        description: 'A mobset combines a mobphone with microphone. mobsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 139,
        name: 'DB Galaxy',
        price: 350,
        image: require('../assets/products/mob6.jpg'),
        description: 'A mobset combines a mobphone with microphone. mobsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 140,
        name: 'Mobile Phone Holder',
        price: 600,
        image: require('../assets/products/mob7.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 314,
        name: 'PC Pro',
        price: 600,
        image: require('../assets/products/lp4.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 315,
        name: 'LP Thin',
        price: 2,
        image: require('../assets/products/lp5.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 101,
        name: 'Mobile X',
        price: 600,
        image: require('../assets/products/mobile1.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Native Headset',
        price: 2,
        image: require('../assets/products/head4.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 121,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/products/head2.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 122,
        name: 'Mobile Phone Holder',
        price: 600,
        image: require('../assets/products/head3.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 127,
        name: 'Mobile X',
        price: 600,
        image: require('../assets/products/head4.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 324,
        name: 'PC Think',
        price: 350,
        image: require('../assets/products/lp6.jpg'),
        description: 'A mobset combines a mobphone with microphone. mobsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 325,
        name: 'PC Ultra',
        price: 600,
        image: require('../assets/products/lp7.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 134,
        name: 'React Prime 2',
        price: 350,
        image: require('../assets/products/mob6.jpg'),
        description: 'A mobset combines a mobphone with microphone. mobsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 135,
        name: 'JS Note 7',
        price: 2,
        image: require('../assets/products/mobile1.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 136,
        name: 'DB Galaxy',
        price: 350,
        image: require('../assets/products/mob2.jpg'),
        description: 'A mobset combines a mobphone with microphone. mobsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 137,
        name: 'Mobile X',
        price: 600,
        image: require('../assets/products/mob4.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 126,
        name: 'Native Headset',
        price: 2,
        image: require('../assets/products/head5.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 125,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/products/head6.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 124,
        name: 'Mobile Phone Holder',
        price: 600,
        image: require('../assets/products/head7.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

