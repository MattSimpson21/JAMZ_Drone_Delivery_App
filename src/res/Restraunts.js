import fiveGuysIcon from '../assets/fiveGuys/fiveGuysIcon.jpg';
import fiveGuysImage from '../assets/fiveGuys/fiveGuysImage.jpg';
import fiveGuysHamburger from '../assets/fiveGuys/fiveGuysHamburger.jpg';
import fiveGuysMilkshake from '../assets/fiveGuys/fiveGuysMilkshake.png';
import thaiExpressIcon from '../assets/thaiExpress/thaiExpressIcon.jpg';
import thaiExpressImage from '../assets/thaiExpress/thaiExpressImage.jpg';
import AandWimage from '../assets/AandW/AandWimage.jpg';

const restraunts = {
    fiveGuys: {
        name: 'Five Guys',
        address: '525 Industrial Blvd,\nOttawa, ON',
        category: 'Fast Food',
        expense: '$$',
        eta: '30mins',
        rating: '3.7',
        icon: fiveGuysIcon,
        pic: fiveGuysImage,
        items: {
            hamburger: {
                name: 'Hamburger',
                price: 7.99,
                weight: null, // To be used for calculating how many drones required
                pic: fiveGuysHamburger,
                toppings: ["Mayo", "Lettuce", "Pickles", "Tomatoes"] //Just add more in later if needed
            },
            milkshake: {
                name: 'Milkshake',
                price: 5.99,
                weight: null,
                pic: fiveGuysMilkshake,
                flavors: ["Bananas", "Strawberries", "Chocolate", "Vanilla"] //Just add more in later if needed
            },
        },
    },

    thaiExpress: {
        name: 'Thai Express',
        icon: thaiExpressIcon,
        pic: thaiExpressImage,
        category: 'Fast Food',
        rating: '4.3',
        items: {

        }
    },

    AandW: {
        name: 'A&W',
        icon: thaiExpressIcon,
        pic: AandWimage,
        category: 'Fast Food',
        rating: '3.8',
        items: {

        }
    },
};

export default restraunts