const PRODUCTS = [
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
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

