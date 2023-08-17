const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProX2 Headset',
        price: 350,
        image: require('../assets/products/headset-100.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 102,
        name: 'Native Headset',
        price: 2,
        image: require('../assets/products/head1.jpg'),
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
        id: 127,
        name: 'Mobile X',
        price: 600,
        image: require('../assets/products/head4.jpg'),
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

