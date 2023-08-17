const PRODUCTS = [
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
        id: 138,
        name: 'JS Note 7',
        price: 2,
        image: require('../assets/products/mob5.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
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
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

