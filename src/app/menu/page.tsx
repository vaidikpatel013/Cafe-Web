'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'coffee',
    name: 'Coffee',
    icon: '☕',
    items: [
      { id: 1, name: 'Espresso', description: 'Rich, full-bodied shot of pure coffee', price: '$2.50', popular: true },
      { id: 2, name: 'Americano', description: 'Espresso with hot water for a smooth taste', price: '$3.00' },
      { id: 3, name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '$4.00', popular: true },
      { id: 4, name: 'Latte', description: 'Espresso with steamed milk and light foam', price: '$4.50' },
      { id: 5, name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.00' },
      { id: 6, name: 'Macchiato', description: 'Espresso with a dollop of foam', price: '$3.50' },
    ]
  },
  {
    id: 'cold-drinks',
    name: 'Cold Drinks',
    icon: '🧊',
    items: [
      { id: 7, name: 'Iced Coffee', description: 'Cold-brewed coffee served over ice', price: '$3.50' },
      { id: 8, name: 'Iced Latte', description: 'Espresso with cold milk over ice', price: '$4.50' },
      { id: 9, name: 'Frappuccino', description: 'Blended coffee drink with ice and cream', price: '$5.50', popular: true },
      { id: 10, name: 'Cold Brew', description: 'Smooth, less acidic coffee steeped cold', price: '$4.00' },
      { id: 11, name: 'Iced Tea', description: 'Refreshing house-brewed iced tea', price: '$2.50' },
    ]
  },
  {
    id: 'pastries',
    name: 'Pastries',
    icon: '🥐',
    items: [
      { id: 12, name: 'Croissant', description: 'Buttery, flaky French pastry', price: '$3.50', popular: true },
      { id: 13, name: 'Muffin', description: 'Fresh-baked muffin of the day', price: '$3.00' },
      { id: 14, name: 'Danish', description: 'Sweet pastry with fruit filling', price: '$4.00' },
      { id: 15, name: 'Bagel', description: 'Fresh bagel with cream cheese', price: '$3.50' },
      { id: 16, name: 'Scone', description: 'Traditional British scone with jam', price: '$3.75' },
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    icon: '🥪',
    items: [
      { id: 17, name: 'Avocado Toast', description: 'Smashed avocado on artisan bread', price: '$8.50', popular: true },
      { id: 18, name: 'Turkey Club', description: 'Turkey, bacon, lettuce, tomato', price: '$9.50' },
      { id: 19, name: 'Grilled Cheese', description: 'Three-cheese blend on sourdough', price: '$7.50' },
      { id: 20, name: 'Veggie Wrap', description: 'Fresh vegetables in a spinach wrap', price: '$8.00' },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    items: [
      { id: 21, name: 'Cheesecake', description: 'New York style cheesecake', price: '$5.50', popular: true },
      { id: 22, name: 'Chocolate Cake', description: 'Rich chocolate layer cake', price: '$5.00' },
      { id: 23, name: 'Tiramisu', description: 'Classic Italian dessert', price: '$6.00' },
      { id: 24, name: 'Cookies', description: 'Fresh-baked chocolate chip cookies', price: '$2.50' },
    ]
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const activeCategoryData = menuData.find(cat => cat.id === activeCategory);

  return (
    <div className={styles.menuPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Menu</h1>
          <p className={styles.subtitle}>
            Discover our carefully crafted selection of premium coffee, delicious pastries, 
            and fresh meals made with love and the finest ingredients.
          </p>
        </div>

        <div className={styles.menuContent}>
          <div className={styles.categoryNav}>
            {menuData.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${
                  activeCategory === category.id ? styles.active : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.menuItems}>
            <h2 className={styles.categoryTitle}>
              {activeCategoryData?.icon} {activeCategoryData?.name}
            </h2>
            <div className={styles.itemsGrid}>
              {activeCategoryData?.items.map((item) => (
                <div key={item.id} className={styles.menuItem}>
                  {item.popular && <span className={styles.popularBadge}>Popular</span>}
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.specialNote}>
          <h3>Special Requests?</h3>
          <p>
            We're happy to accommodate dietary restrictions and customizations. 
            Just ask our friendly baristas when you order!
          </p>
        </div>
      </div>
    </div>
  );
}
