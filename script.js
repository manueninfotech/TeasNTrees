
        // Sample data
        const menuItems = [
            // Hot Coffee Items
            {
                id: 1.1,
                name: 'Classic Filter Coffee',
                category: 'hot-coffee',
                price: '$3.50',
                description: 'Traditional drip coffee with rich, smooth flavor',
                emoji: '☕',
                //imgurl:'./Assets/Drinks_1.jpg',
                details: {
                    fullDescription: 'Our signature filter coffee is brewed using premium Arabica beans sourced from sustainable farms. The slow drip method extracts the perfect balance of flavors, creating a smooth, rich cup with notes of chocolate and caramel. Perfect for coffee purists who appreciate the classic taste.',
                    ingredients: ['Premium Arabica coffee beans', 'Filtered water', 'Optional: milk, sugar, cream'],
                    nutrition: {
                        calories: '5 (black)',
                        caffeine: '95mg',
                        size: '12 oz'
                    },
                    brewTime: '4-6 minutes',
                    temperature: '195-205°F',
                    origin: 'Colombian & Brazilian blend',
                    allergens: ['None']
                }
            },
            {
                id: 1.2,
                name: 'Espresso',
                category: 'hot-coffee',
                price: '$2.75',
                description: 'Rich, concentrated coffee shot with bold flavor',
                emoji: '☕',
                details: {
                    fullDescription: 'A perfect shot of espresso made from our signature blend of Italian-roasted beans. Extracted under precise pressure and temperature to create a golden crema and intense, aromatic flavor. The foundation of all our specialty coffee drinks.',
                    ingredients: ['Italian espresso blend', 'Filtered water'],
                    nutrition: {
                        calories: '3',
                        caffeine: '63mg',
                        size: '1 oz shot'
                    },
                    brewTime: '25-30 seconds',
                    temperature: '190-196°F',
                    origin: 'Italian roasted blend',
                    allergens: ['None']
                }
            },
            {
                id: 1.3,
                name: 'Cafe Americano',
                category: 'hot-coffee',
                price: '$3.25',
                description: 'Espresso diluted with hot water for a lighter taste',
                emoji: '☕',
                details: {
                    fullDescription: 'A classic Americano made by adding hot water to our freshly pulled espresso shots. This creates a coffee similar in strength to drip coffee but with the distinctive flavor profile of espresso. Clean, bright, and perfect for those who enjoy a lighter coffee experience.',
                    ingredients: ['Double espresso shot', 'Hot filtered water'],
                    nutrition: {
                        calories: '6',
                        caffeine: '126mg',
                        size: '12 oz'
                    },
                    brewTime: '30 seconds + dilution',
                    temperature: '160-170°F',
                    origin: 'Italian roasted blend',
                    allergens: ['None']
                }
            },
            {
                id: 1.4,
                name: 'Affogato',
                category: 'hot-coffee',
                price: '$4.75',
                description: 'Vanilla ice cream "drowned" in hot espresso',
                emoji: '🍨',
                details: {
                    fullDescription: 'An Italian dessert-coffee combination featuring a scoop of premium vanilla gelato "drowned" in a shot of hot espresso. The contrast between the cold, creamy gelato and the hot, bitter espresso creates a perfect balance of temperatures and flavors.',
                    ingredients: ['Single espresso shot', 'Premium vanilla gelato', 'Optional: amaretti cookie'],
                    nutrition: {
                        calories: '180',
                        caffeine: '63mg',
                        size: '6 oz serving'
                    },
                    brewTime: '30 seconds',
                    temperature: 'Hot espresso over cold gelato',
                    origin: 'Italian tradition',
                    allergens: ['Dairy', 'May contain eggs']
                }
            },
            {
                id: 1.5,
                name: 'Caffe Latte',
                category: 'hot-coffee',
                price: '$4.25',
                description: 'Smooth espresso with steamed milk and light foam',
                emoji: '🥛',
                details: {
                    fullDescription: 'A creamy, smooth latte made with our signature espresso and perfectly steamed milk. The milk is heated to the ideal temperature and texture, creating a velvety microfoam that blends seamlessly with the espresso. Topped with a thin layer of foam and optional latte art.',
                    ingredients: ['Double espresso shot', 'Steamed whole milk', 'Milk foam'],
                    nutrition: {
                        calories: '190',
                        caffeine: '126mg',
                        size: '12 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: '150-160°F',
                    origin: 'Italian espresso tradition',
                    allergens: ['Dairy']
                }
            },
            {
                id: 1.6,
                name: 'Cappuccino',
                category: 'hot-coffee',
                price: '$3.95',
                description: 'Equal parts espresso, steamed milk, and foam',
                emoji: '☕',
                details: {
                    fullDescription: 'A traditional Italian cappuccino with the perfect 1:1:1 ratio of espresso, steamed milk, and milk foam. The rich espresso provides a strong coffee base, while the steamed milk adds creaminess and the thick foam creates a luxurious texture. Often dusted with cocoa powder.',
                    ingredients: ['Double espresso shot', 'Steamed milk', 'Milk foam', 'Optional: cocoa powder'],
                    nutrition: {
                        calories: '120',
                        caffeine: '126mg',
                        size: '8 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: '150-160°F',
                    origin: 'Traditional Italian',
                    allergens: ['Dairy']
                }
            },
            {
                id: 1.7,
                name: 'Hot Chocolate',
                category: 'hot-coffee',
                price: '$3.75',
                description: 'Rich, creamy chocolate drink topped with whipped cream',
                emoji: '🍫',
                details: {
                    fullDescription: 'A decadent hot chocolate made with premium Belgian cocoa and steamed milk. Rich, creamy, and indulgent, topped with fresh whipped cream and a dusting of cocoa powder. Perfect for chocolate lovers and those seeking a caffeine-free warm beverage.',
                    ingredients: ['Belgian cocoa powder', 'Steamed milk', 'Sugar', 'Whipped cream', 'Cocoa powder dusting'],
                    nutrition: {
                        calories: '280',
                        caffeine: '5mg',
                        size: '12 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: '150-160°F',
                    origin: 'Belgian cocoa',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 1.8,
                name: 'Hot Nutella',
                category: 'hot-coffee',
                price: '$4.25',
                description: 'Creamy hazelnut chocolate drink with steamed milk',
                emoji: '🌰',
                details: {
                    fullDescription: 'A luxurious hot drink made with genuine Nutella hazelnut spread and perfectly steamed milk. The rich, nutty flavor of hazelnuts combined with smooth chocolate creates an indulgent treat. Topped with whipped cream and chopped hazelnuts for extra texture.',
                    ingredients: ['Nutella hazelnut spread', 'Steamed milk', 'Whipped cream', 'Chopped hazelnuts'],
                    nutrition: {
                        calories: '320',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: '150-160°F',
                    origin: 'Italian Nutella',
                    allergens: ['Dairy', 'Tree nuts (hazelnuts)', 'May contain soy']
                }
            },
            {
                id: 1.9,
                name: 'Cafe Mocha',
                category: 'hot-coffee',
                price: '$4.50',
                description: 'Perfect blend of espresso, chocolate, and steamed milk',
                emoji: '🍫',
                details: {
                    fullDescription: 'The perfect marriage of coffee and chocolate. Our cafe mocha combines rich espresso with premium chocolate syrup and steamed milk, creating a balanced drink that satisfies both coffee and chocolate cravings. Topped with whipped cream and chocolate shavings.',
                    ingredients: ['Double espresso shot', 'Chocolate syrup', 'Steamed milk', 'Whipped cream', 'Chocolate shavings'],
                    nutrition: {
                        calories: '290',
                        caffeine: '126mg',
                        size: '12 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: '150-160°F',
                    origin: 'American coffee house tradition',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 1.10,
                name: 'Nutella Cafe Mocha',
                category: 'hot-coffee',
                price: '$5.25',
                description: 'Espresso with Nutella and chocolate, topped with cream',
                emoji: '🌰',
                details: {
                    fullDescription: 'An indulgent twist on the classic mocha, featuring our signature espresso combined with both Nutella hazelnut spread and rich chocolate syrup. Steamed milk brings it all together, while whipped cream and a sprinkle of chopped hazelnuts provide the perfect finishing touch.',
                    ingredients: ['Double espresso shot', 'Nutella hazelnut spread', 'Chocolate syrup', 'Steamed milk', 'Whipped cream', 'Chopped hazelnuts'],
                    nutrition: {
                        calories: '380',
                        caffeine: '126mg',
                        size: '12 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: '150-160°F',
                    origin: 'House specialty',
                    allergens: ['Dairy', 'Tree nuts (hazelnuts)', 'May contain soy']
                }
            },
            // Cold Coffee Items
            {
                id: 2.1,
                name: 'TnT Frappe',
                category: 'cold-coffee',
                price: '$5.25',
                description: 'Our signature cold coffee blend with ice and whipped cream',
                emoji: '🧊',
                details: {
                    fullDescription: 'The signature Teas & Trees frappe featuring our premium espresso blend, perfectly chilled and blended with ice, milk, and a touch of vanilla. Topped with fresh whipped cream and a drizzle of caramel. This refreshing drink captures the essence of our café in every sip.',
                    ingredients: ['Double espresso shot', 'Whole milk', 'Ice', 'Vanilla syrup', 'Whipped cream', 'Caramel drizzle'],
                    nutrition: {
                        calories: '280',
                        caffeine: '126mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'House signature blend',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 2.2,
                name: 'Caramel Frappe',
                category: 'cold-coffee',
                price: '$5.75',
                description: 'Rich coffee frappe with sweet caramel flavor and whipped cream',
                emoji: '🍯',
                details: {
                    fullDescription: 'A decadent cold coffee treat featuring our signature espresso blended with rich caramel syrup, milk, and ice. The perfect balance of coffee bitterness and caramel sweetness, topped with whipped cream and an extra caramel drizzle for the ultimate indulgence.',
                    ingredients: ['Double espresso shot', 'Caramel syrup', 'Whole milk', 'Ice', 'Whipped cream', 'Extra caramel drizzle'],
                    nutrition: {
                        calories: '320',
                        caffeine: '126mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Premium caramel blend',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 2.3,
                name: 'Choco Frappe',
                category: 'cold-coffee',
                price: '$5.50',
                description: 'Chocolate lovers dream with coffee, cocoa, and whipped cream',
                emoji: '🍫',
                details: {
                    fullDescription: 'A chocolate lover\'s paradise combining rich espresso with premium Belgian cocoa and chocolate syrup. Blended with milk and ice to create a smooth, creamy texture. Topped with whipped cream and chocolate shavings for an extra touch of indulgence.',
                    ingredients: ['Double espresso shot', 'Belgian cocoa powder', 'Chocolate syrup', 'Whole milk', 'Ice', 'Whipped cream', 'Chocolate shavings'],
                    nutrition: {
                        calories: '340',
                        caffeine: '131mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Belgian cocoa blend',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 2.4,
                name: 'Cookie Frappe',
                category: 'cold-coffee',
                price: '$6.25',
                description: 'Coffee frappe with crushed cookies and cream for extra crunch',
                emoji: '🍪',
                details: {
                    fullDescription: 'A playful twist on our classic frappe featuring crushed chocolate chip cookies blended into our signature coffee base. The cookies add delightful texture and sweetness, while the coffee provides the perfect caffeinated kick. Topped with whipped cream and more cookie crumbles.',
                    ingredients: ['Double espresso shot', 'Crushed chocolate chip cookies', 'Vanilla syrup', 'Whole milk', 'Ice', 'Whipped cream', 'Cookie crumbles'],
                    nutrition: {
                        calories: '380',
                        caffeine: '126mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'House-made cookie blend',
                    allergens: ['Dairy', 'Gluten', 'Eggs', 'May contain nuts']
                }
            },
            {
                id: 2.5,
                name: 'Brownie Frappe',
                category: 'cold-coffee',
                price: '$6.75',
                description: 'Decadent frappe with real brownie pieces and chocolate sauce',
                emoji: '🧁',
                details: {
                    fullDescription: 'The ultimate indulgent frappe featuring chunks of our house-made fudge brownies blended with rich espresso, chocolate syrup, and milk. This dessert-like drink combines the best of both worlds - premium coffee and decadent chocolate brownie. Topped with whipped cream and brownie crumbles.',
                    ingredients: ['Double espresso shot', 'House-made brownie pieces', 'Chocolate syrup', 'Fudge sauce', 'Whole milk', 'Ice', 'Whipped cream', 'Brownie crumbles'],
                    nutrition: {
                        calories: '420',
                        caffeine: '126mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'House-made brownie special',
                    allergens: ['Dairy', 'Gluten', 'Eggs', 'May contain nuts']
                }
            },


            // Clear Tea Items
            {
                id: 3.1,
                name: 'Hibiscus Tea',
                category: 'clear-teas',
                price: '$3.25',
                description: 'Vibrant red herbal tea with tart, cranberry-like flavor',
                emoji: '🌺',
                details: {
                    fullDescription: 'A beautiful ruby-red herbal infusion made from dried hibiscus flowers. This caffeine-free tea offers a tart, cranberry-like flavor with floral notes. Rich in vitamin C and antioxidants, hibiscus tea is both refreshing and beneficial for health. Naturally caffeine-free and perfect hot or iced.',
                    ingredients: ['Dried hibiscus flowers', 'Hot water', 'Optional: honey, lemon'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '5-7 minutes',
                    temperature: '212°F',
                    origin: 'Egyptian hibiscus',
                    allergens: ['None']
                }
            },
            {
                id: 3.2,
                name: 'Honey Lemon Tea',
                category: 'clear-teas',
                price: '$3.50',
                description: 'Soothing blend of pure honey and fresh lemon',
                emoji: '🍯',
                details: {
                    fullDescription: 'A comforting and healing tea blend featuring pure wildflower honey and fresh lemon juice in a light herbal base. This soothing combination is perfect for cold days or when you need a gentle boost. The honey provides natural sweetness while lemon adds vitamin C and brightness.',
                    ingredients: ['Chamomile base', 'Wildflower honey', 'Fresh lemon juice', 'Lemon peel', 'Hot water'],
                    nutrition: {
                        calories: '45',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: '212°F',
                    origin: 'House blend',
                    allergens: ['None']
                }
            },
            {
                id: 3.3,
                name: 'Detox Tea',
                category: 'clear-teas',
                price: '$4.25',
                description: 'Cleansing blend of herbs to support natural detoxification',
                emoji: '🌿',
                details: {
                    fullDescription: 'A carefully crafted herbal blend designed to support your body\'s natural detoxification processes. This caffeine-free tea combines dandelion root, nettle leaf, ginger, and lemon grass to create a cleansing and refreshing cup. Perfect for wellness routines and daily cleansing.',
                    ingredients: ['Dandelion root', 'Nettle leaf', 'Ginger root', 'Lemon grass', 'Milk thistle', 'Peppermint', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '6-8 minutes',
                    temperature: '212°F',
                    origin: 'Organic herbal blend',
                    allergens: ['None']
                }
            },
            {
                id: 3.4,
                name: 'Tulasi Sleep Tea',
                category: 'clear-teas',
                price: '$3.75',
                description: 'Calming holy basil blend for peaceful rest',
                emoji: '🌙',
                details: {
                    fullDescription: 'A tranquil evening tea featuring holy basil (Tulasi) combined with chamomile and lavender. This sacred herb from Ayurvedic tradition is known for its calming properties and ability to promote restful sleep. Naturally caffeine-free and perfect for your bedtime routine.',
                    ingredients: ['Holy basil (Tulasi)', 'Chamomile flowers', 'Lavender buds', 'Lemon balm', 'Passionflower', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '5-7 minutes',
                    temperature: '212°F',
                    origin: 'Ayurvedic tradition',
                    allergens: ['None']
                }
            },
            {
                id: 3.5,
                name: 'Mint Chamomile Tea',
                category: 'clear-teas',
                price: '$3.25',
                description: 'Refreshing mint paired with soothing chamomile',
                emoji: '🌸',
                details: {
                    fullDescription: 'A perfect harmony of cooling peppermint and gentle chamomile flowers. This caffeine-free blend offers the refreshing qualities of mint while maintaining the calming effects of chamomile. Ideal for any time of day, especially after meals or before bedtime.',
                    ingredients: ['Chamomile flowers', 'Peppermint leaves', 'Spearmint leaves', 'Lemon balm', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '4-6 minutes',
                    temperature: '212°F',
                    origin: 'European herbal tradition',
                    allergens: ['None']
                }
            },
            {
                id: 3.6,
                name: 'Cinnamon Orange Tea',
                category: 'clear-teas',
                price: '$3.50',
                description: 'Warming cinnamon with bright orange citrus notes',
                emoji: '🍊',
                details: {
                    fullDescription: 'A warming and aromatic blend featuring Ceylon cinnamon bark and dried orange peel. This spiced tea offers comforting warmth with bright citrus notes, creating a perfect balance of sweet spice and refreshing fruit. Rich in antioxidants and naturally caffeine-free.',
                    ingredients: ['Ceylon cinnamon bark', 'Orange peel', 'Orange pieces', 'Cloves', 'Cardamom', 'Natural orange flavor', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '5-7 minutes',
                    temperature: '212°F',
                    origin: 'Spice blend tradition',
                    allergens: ['None']
                }
            },
            {
                id: 3.7,
                name: 'Cinnamon Ashwagandha Roots Tea',
                category: 'clear-teas',
                price: '$4.75',
                description: 'Adaptogenic blend with cinnamon and ashwagandha root',
                emoji: '🌱',
                details: {
                    fullDescription: 'An ancient Ayurvedic blend featuring ashwagandha root, known as the "king of herbs," combined with warming cinnamon. This adaptogenic tea helps support stress management and overall wellness. The earthy ashwagandha is balanced by sweet cinnamon for a grounding, therapeutic cup.',
                    ingredients: ['Ashwagandha root', 'Ceylon cinnamon', 'Ginger root', 'Cardamom', 'Black pepper', 'Licorice root', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '8-10 minutes',
                    temperature: '212°F',
                    origin: 'Ayurvedic tradition',
                    allergens: ['None']
                }
            },
            {
                id: 3.8,
                name: 'Slimming Tea',
                category: 'clear-teas',
                price: '$4.25',
                description: 'Metabolism-supporting herbal blend for wellness goals',
                emoji: '🍃',
                details: {
                    fullDescription: 'A carefully formulated herbal blend designed to support healthy metabolism and wellness goals. This caffeine-free tea combines green tea extract, oolong tea, garcinia cambogia, and metabolism-supporting herbs. Best enjoyed as part of a healthy lifestyle and balanced diet.',
                    ingredients: ['Oolong tea', 'Green tea extract', 'Garcinia cambogia', 'Ginger root', 'Lemon grass', 'Fennel seeds', 'Dandelion leaf', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '15mg',
                        size: '12 oz'
                    },
                    brewTime: '6-8 minutes',
                    temperature: '185°F',
                    origin: 'Wellness herbal blend',
                    allergens: ['None']
                }
            },
            {
                id: 3.9,
                name: 'Krishna Tulasi Tea',
                category: 'clear-teas',
                price: '$4.25',
                description: 'Sacred purple holy basil with spiritual and wellness benefits',
                emoji: '🟣',
                details: {
                    fullDescription: 'A sacred tea made from Krishna Tulasi (purple holy basil), revered in Ayurvedic tradition for its spiritual and therapeutic properties. This rare variety of holy basil offers a more complex flavor profile than regular tulasi, with earthy, clove-like notes. Known for supporting immunity, stress relief, and spiritual well-being.',
                    ingredients: ['Krishna Tulasi (purple holy basil)', 'Regular tulasi', 'Rose petals', 'Cardamom', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '6-8 minutes',
                    temperature: '212°F',
                    origin: 'Sacred Ayurvedic tradition',
                    allergens: ['None']
                }
            },
            {
                id: 3.10,
                name: 'Flora Tea',
                category: 'clear-teas',
                price: '$3.95',
                description: 'Delicate floral blend with rose, jasmine, and elderflower',
                emoji: '🌷',
                details: {
                    fullDescription: 'An elegant and aromatic floral tea blend featuring rose petals, jasmine flowers, and elderflower. This caffeine-free infusion offers a delicate, perfumed flavor with subtle sweetness. Perfect for afternoon tea or special occasions, this blend celebrates the beauty and fragrance of flowers.',
                    ingredients: ['Rose petals', 'Jasmine flowers', 'Elderflower', 'Hibiscus petals', 'Cornflower petals', 'Natural floral essences', 'Hot water'],
                    nutrition: {
                        calories: '0',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '4-6 minutes',
                    temperature: '212°F',
                    origin: 'European floral tradition',
                    allergens: ['None']
                }
            },

            // Cold Clear Tea Items
            {
                id: 4.1,
                name: 'Hibiscus Iced Tea',
                category: 'cold-clear-teas',
                price: '$3.75',
                description: 'Refreshing ruby-red iced tea with tart, cranberry-like flavor',
                emoji: '🌺',
                details: {
                    fullDescription: 'A vibrant and refreshing iced tea made from premium dried hibiscus flowers, served over ice with a hint of natural sweetness. This beautiful ruby-red beverage offers a tart, cranberry-like flavor with floral undertones. Rich in vitamin C and antioxidants, it\'s the perfect thirst-quencher for warm days.',
                    ingredients: ['Dried hibiscus flowers', 'Cold filtered water', 'Ice', 'Natural sweetener', 'Fresh lemon slice'],
                    nutrition: {
                        calories: '15',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold brewed for 4-6 hours',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Egyptian hibiscus',
                    allergens: ['None']
                }
            },
            {
                id: 4.2,
                name: 'Lemon Iced Tea',
                category: 'cold-clear-teas',
                price: '$3.50',
                description: 'Classic iced tea with fresh lemon juice and natural sweetness',
                emoji: '🍋',
                details: {
                    fullDescription: 'A timeless classic featuring our signature black tea blend, perfectly chilled and enhanced with fresh lemon juice and a touch of natural sweetness. This refreshing beverage strikes the perfect balance between tea\'s robust flavor and lemon\'s bright citrusy notes. Garnished with fresh lemon slices and mint.',
                    ingredients: ['Black tea blend', 'Fresh lemon juice', 'Natural cane sugar', 'Cold filtered water', 'Ice', 'Fresh lemon slices', 'Mint leaves'],
                    nutrition: {
                        calories: '45',
                        caffeine: '25mg',
                        size: '16 oz'
                    },
                    brewTime: 'Brewed hot, then chilled',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Classic American iced tea',
                    allergens: ['None']
                }
            },
            {
                id: 4.3,
                name: 'Peach Iced Tea',
                category: 'cold-clear-teas',
                price: '$4.25',
                description: 'Sweet and fruity iced tea with natural peach flavor',
                emoji: '🍑',
                details: {
                    fullDescription: 'A delightfully sweet and fruity iced tea featuring our premium black tea base infused with natural peach flavor and real peach pieces. This summer favorite combines the refreshing qualities of iced tea with the sweet, juicy taste of ripe peaches. Perfectly balanced and incredibly refreshing.',
                    ingredients: ['Black tea blend', 'Natural peach flavor', 'Real peach pieces', 'Natural cane sugar', 'Cold filtered water', 'Ice', 'Fresh peach slices'],
                    nutrition: {
                        calories: '65',
                        caffeine: '25mg',
                        size: '16 oz'
                    },
                    brewTime: 'Brewed hot, then chilled with fruit infusion',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Southern-style fruit tea',
                    allergens: ['None']
                }
            },
            {
                id: 4.4,
                name: 'Lemon Grass Iced Tea',
                category: 'cold-clear-teas',
                price: '$3.95',
                description: 'Aromatic herbal iced tea with fresh lemongrass and citrus notes',
                emoji: '🌿',
                details: {
                    fullDescription: 'An aromatic and refreshing herbal iced tea made with fresh lemongrass, offering a unique citrusy flavor with subtle herbal undertones. This caffeine-free beverage is known for its digestive properties and refreshing qualities. Lightly sweetened and garnished with fresh lemongrass stalks and lime wedges.',
                    ingredients: ['Fresh lemongrass', 'Dried lemongrass', 'Natural honey', 'Cold filtered water', 'Ice', 'Fresh lime wedges', 'Lemongrass stalks for garnish'],
                    nutrition: {
                        calories: '25',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Steeped hot, then chilled',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Southeast Asian herbal tradition',
                    allergens: ['None']
                }
            },


            // Shakes
            {
                id: 5.1,
                name: 'Butterscotch Shake',
                category: 'shakes',
                price: '$5.75',
                description: 'Rich and creamy butterscotch flavored milkshake',
                emoji: '🍯',
                details: {
                    fullDescription: 'A decadent milkshake featuring rich butterscotch syrup blended with premium vanilla ice cream and whole milk. This classic flavor combination delivers smooth, buttery sweetness with caramel undertones. Topped with whipped cream and a drizzle of butterscotch sauce.',
                    ingredients: ['Vanilla ice cream', 'Butterscotch syrup', 'Whole milk', 'Whipped cream', 'Butterscotch sauce drizzle'],
                    nutrition: {
                        calories: '420',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Classic American milkshake',
                    allergens: ['Dairy', 'May contain eggs']
                }
            },
            {
                id: 5.2,
                name: 'KitKat Shake',
                category: 'shakes',
                price: '$6.25',
                description: 'Crunchy KitKat pieces blended into a creamy chocolate shake',
                emoji: '🍫',
                details: {
                    fullDescription: 'A delightful shake featuring crushed KitKat chocolate wafer bars blended with chocolate ice cream and milk. The combination creates a perfect balance of smooth chocolate flavor and crunchy wafer texture. Topped with whipped cream and KitKat pieces.',
                    ingredients: ['Chocolate ice cream', 'KitKat chocolate bars', 'Whole milk', 'Chocolate syrup', 'Whipped cream', 'KitKat pieces for topping'],
                    nutrition: {
                        calories: '480',
                        caffeine: '5mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Chocolate wafer specialty',
                    allergens: ['Dairy', 'Gluten', 'May contain nuts']
                }
            },
            {
                id: 5.3,
                name: 'Oreo Shake',
                category: 'shakes',
                price: '$6.25',
                description: 'Classic cookies and cream shake with real Oreo cookies',
                emoji: '🍪',
                details: {
                    fullDescription: 'The ultimate cookies and cream experience featuring real Oreo cookies blended with vanilla ice cream and milk. This beloved flavor combination delivers the perfect balance of sweet cream and chocolate cookie crunch. Topped with whipped cream and crushed Oreos.',
                    ingredients: ['Vanilla ice cream', 'Oreo cookies', 'Whole milk', 'Whipped cream', 'Crushed Oreos for topping'],
                    nutrition: {
                        calories: '460',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'American cookies and cream classic',
                    allergens: ['Dairy', 'Gluten', 'May contain soy']
                }
            },
            {
                id: 5.4,
                name: 'Chocolate Shake',
                category: 'shakes',
                price: '$5.25',
                description: 'Rich and creamy classic chocolate milkshake',
                emoji: '🍫',
                details: {
                    fullDescription: 'A timeless classic featuring premium chocolate ice cream blended with whole milk and rich chocolate syrup. This indulgent shake delivers pure chocolate bliss with a smooth, creamy texture. Topped with whipped cream and chocolate shavings for the perfect finish.',
                    ingredients: ['Chocolate ice cream', 'Chocolate syrup', 'Whole milk', 'Whipped cream', 'Chocolate shavings'],
                    nutrition: {
                        calories: '380',
                        caffeine: '8mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Classic American milkshake',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 5.5,
                name: 'Tropical Trio Shake',
                category: 'shakes',
                price: '$6.75',
                description: 'Exotic blend of mango, pineapple, and coconut flavors',
                emoji: '🥭',
                details: {
                    fullDescription: 'An exotic escape in a glass featuring the tropical trio of mango, pineapple, and coconut. This refreshing shake combines real fruit flavors with creamy coconut ice cream and a hint of lime. Topped with whipped cream and toasted coconut flakes.',
                    ingredients: ['Coconut ice cream', 'Mango puree', 'Pineapple juice', 'Coconut milk', 'Lime juice', 'Whipped cream', 'Toasted coconut flakes'],
                    nutrition: {
                        calories: '390',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Tropical fruit blend',
                    allergens: ['Dairy', 'Tree nuts (coconut)']
                }
            },
            {
                id: 5.6,
                name: 'American Bourbon',
                category: 'shakes',
                price: '$7.25',
                description: 'Sophisticated vanilla shake with bourbon flavor and caramel',
                emoji: '🥃',
                details: {
                    fullDescription: 'A sophisticated adult-inspired shake featuring bourbon vanilla flavor with rich caramel undertones. This premium shake combines vanilla bean ice cream with bourbon extract and caramel sauce for a complex, refined taste. Note: Contains flavor extract only, no alcohol.',
                    ingredients: ['Vanilla bean ice cream', 'Bourbon extract', 'Caramel sauce', 'Whole milk', 'Brown sugar', 'Whipped cream', 'Caramel drizzle'],
                    nutrition: {
                        calories: '450',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'American bourbon flavor profile',
                    allergens: ['Dairy', 'May contain eggs']
                }
            },
            {
                id: 5.7,
                name: 'Salted Caramel',
                category: 'shakes',
                price: '$6.25',
                description: 'Sweet and salty perfection with caramel and sea salt',
                emoji: '🧂',
                details: {
                    fullDescription: 'The perfect balance of sweet and salty featuring rich caramel ice cream blended with salted caramel sauce and a pinch of sea salt. This gourmet shake delivers complex flavors that dance on your palate. Topped with whipped cream and a salted caramel drizzle.',
                    ingredients: ['Caramel ice cream', 'Salted caramel sauce', 'Sea salt', 'Whole milk', 'Whipped cream', 'Salted caramel drizzle'],
                    nutrition: {
                        calories: '420',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Gourmet salted caramel',
                    allergens: ['Dairy', 'May contain soy']
                }
            },
            {
                id: 5.8,
                name: 'Saffron Pistachio',
                category: 'shakes',
                price: '$7.75',
                description: 'Luxurious Middle Eastern inspired shake with saffron and pistachios',
                emoji: '🌸',
                details: {
                    fullDescription: 'An exotic and luxurious shake inspired by Middle Eastern flavors, featuring premium saffron threads and roasted pistachios. This unique combination creates a delicate floral sweetness balanced with nutty richness. Topped with whipped cream and crushed pistachios.',
                    ingredients: ['Pistachio ice cream', 'Saffron threads', 'Roasted pistachios', 'Whole milk', 'Rose water', 'Whipped cream', 'Crushed pistachios'],
                    nutrition: {
                        calories: '440',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Middle Eastern inspired',
                    allergens: ['Dairy', 'Tree nuts (pistachios)']
                }
            },
            {
                id: 5.9,
                name: 'Belgium Chocolate',
                category: 'shakes',
                price: '$6.75',
                description: 'Premium Belgian chocolate shake with rich cocoa flavor',
                emoji: '🍫',
                details: {
                    fullDescription: 'An indulgent shake made with authentic Belgian chocolate and premium cocoa. This rich and decadent treat features the finest European chocolate blended with vanilla ice cream for the ultimate chocolate experience. Topped with whipped cream and Belgian chocolate shavings.',
                    ingredients: ['Belgian chocolate', 'Vanilla ice cream', 'Premium cocoa powder', 'Whole milk', 'Dark chocolate syrup', 'Whipped cream', 'Belgian chocolate shavings'],
                    nutrition: {
                        calories: '480',
                        caffeine: '12mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Belgian chocolate tradition',
                    allergens: ['Dairy', 'May contain soy', 'May contain nuts']
                }
            },
            {
                id: 5.10,
                name: 'Ferrero Rocher',
                category: 'shakes',
                price: '$7.25',
                description: 'Luxurious shake with hazelnut, chocolate, and wafer pieces',
                emoji: '🌰',
                details: {
                    fullDescription: 'A luxurious shake inspired by the famous Ferrero Rocher chocolates, featuring hazelnut ice cream, chocolate syrup, and crushed wafer pieces. This indulgent treat captures the essence of the beloved confection with layers of hazelnut, chocolate, and crispy texture.',
                    ingredients: ['Hazelnut ice cream', 'Nutella spread', 'Chocolate syrup', 'Crushed wafer pieces', 'Whole milk', 'Whipped cream', 'Chopped hazelnuts', 'Gold chocolate drizzle'],
                    nutrition: {
                        calories: '520',
                        caffeine: '5mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Italian confection inspired',
                    allergens: ['Dairy', 'Tree nuts (hazelnuts)', 'Gluten', 'May contain soy']
                }
            },
            {
                id: 5.11,
                name: 'Very Berry',
                category: 'shakes',
                price: '$6.25',
                description: 'Mixed berry shake with strawberries, blueberries, and raspberries',
                emoji: '🫐',
                details: {
                    fullDescription: 'A refreshing and antioxidant-rich shake featuring a medley of fresh berries including strawberries, blueberries, and raspberries. Blended with vanilla ice cream and a touch of honey for natural sweetness. Topped with whipped cream and fresh berry garnish.',
                    ingredients: ['Vanilla ice cream', 'Fresh strawberries', 'Fresh blueberries', 'Fresh raspberries', 'Honey', 'Whole milk', 'Whipped cream', 'Mixed berry garnish'],
                    nutrition: {
                        calories: '360',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Fresh berry blend',
                    allergens: ['Dairy', 'May contain seeds']
                }
            },
            {
                id: 5.12,
                name: 'Nutella Brownie',
                category: 'shakes',
                price: '$7.50',
                description: 'Decadent shake with Nutella and real brownie pieces',
                emoji: '🧁',
                details: {
                    fullDescription: 'The ultimate indulgence combining rich Nutella hazelnut spread with chunks of our house-made fudge brownies. This dessert-like shake features chocolate ice cream as the base, creating layers of chocolate and hazelnut flavors with delightful brownie texture throughout.',
                    ingredients: ['Chocolate ice cream', 'Nutella spread', 'House-made brownie pieces', 'Whole milk', 'Chocolate syrup', 'Whipped cream', 'Brownie crumbles', 'Nutella drizzle'],
                    nutrition: {
                        calories: '580',
                        caffeine: '8mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'House specialty dessert',
                    allergens: ['Dairy', 'Tree nuts (hazelnuts)', 'Gluten', 'Eggs', 'May contain soy']
                }
            },
            {
                id: 5.13,
                name: 'Avocado Treat',
                category: 'shakes',
                price: '$6.75',
                description: 'Creamy and healthy avocado shake with honey and lime',
                emoji: '🥑',
                details: {
                    fullDescription: 'A unique and healthy shake featuring ripe avocados blended with vanilla ice cream, creating an incredibly creamy texture. Enhanced with honey for natural sweetness and a hint of lime for brightness. This nutritious treat is rich in healthy fats and surprisingly delicious.',
                    ingredients: ['Ripe avocados', 'Vanilla ice cream', 'Honey', 'Fresh lime juice', 'Coconut milk', 'Whipped cream', 'Lime zest', 'Mint leaves'],
                    nutrition: {
                        calories: '380',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Healthy fruit shake',
                    allergens: ['Dairy', 'Tree nuts (coconut)']
                }
            },

            // Mojitos
            {
                id: 6.1,
                name: 'Lemonade',
                category: 'mojitos',
                price: '$4.25',
                description: 'Classic fresh lemonade with a perfect balance of sweet and tart',
                emoji: '🍋',
                details: {
                    fullDescription: 'A refreshing classic made with freshly squeezed lemons, pure cane sugar, and sparkling water. This timeless beverage offers the perfect balance of sweet and tart flavors, making it an ideal thirst-quencher for any time of day. Served over ice with fresh lemon slices and a sprig of mint.',
                    ingredients: ['Fresh lemon juice', 'Pure cane sugar', 'Sparkling water', 'Ice', 'Fresh lemon slices', 'Mint sprig'],
                    nutrition: {
                        calories: '120',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Classic American refresher',
                    allergens: ['None']
                }
            },
            {
                id: 6.2,
                name: 'Guntur Spicy Mojito',
                category: 'mojitos',
                price: '$6.25',
                description: 'Fiery mojito with Guntur chili, mint, and lime for heat lovers',
                emoji: '🌶️',
                details: {
                    fullDescription: 'A bold and fiery twist on the classic mojito featuring Guntur chili peppers from India, known for their intense heat and complex flavor. Fresh mint leaves are muddled with lime juice and a touch of the spicy chili, creating a drink that balances refreshing coolness with exciting heat. Perfect for spice enthusiasts.',
                    ingredients: ['Fresh mint leaves', 'Guntur chili peppers', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Lime wedges', 'Chili salt rim'],
                    nutrition: {
                        calories: '95',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Indian spice fusion',
                    allergens: ['None']
                }
            },
            {
                id: 6.3,
                name: 'Mint Mojito',
                category: 'mojitos',
                price: '$5.25',
                description: 'Traditional Cuban mojito with fresh mint, lime, and soda water',
                emoji: '🌿',
                details: {
                    fullDescription: 'The classic Cuban mojito featuring fresh spearmint leaves muddled with lime juice and simple syrup, topped with soda water. This traditional recipe delivers the perfect balance of mint freshness, citrus brightness, and effervescent bubbles. Garnished with fresh mint sprigs and lime wedges.',
                    ingredients: ['Fresh spearmint leaves', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Lime wedges', 'Mint sprigs'],
                    nutrition: {
                        calories: '85',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Traditional Cuban',
                    allergens: ['None']
                }
            },
            {
                id: 6.4,
                name: 'Blue Lagoon Mojito',
                category: 'mojitos',
                price: '$6.75',
                description: 'Tropical blue-colored mojito with coconut and pineapple flavors',
                emoji: '🏝️',
                details: {
                    fullDescription: 'A stunning tropical mojito with a beautiful blue hue reminiscent of crystal-clear lagoon waters. This exotic variation combines traditional mint and lime with coconut and pineapple flavors, creating a vacation-in-a-glass experience. The natural blue coloring comes from butterfly pea flower extract.',
                    ingredients: ['Fresh mint leaves', 'Coconut syrup', 'Pineapple juice', 'Fresh lime juice', 'Butterfly pea flower extract', 'Soda water', 'Ice', 'Pineapple wedge', 'Coconut flakes'],
                    nutrition: {
                        calories: '140',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Tropical fusion',
                    allergens: ['Tree nuts (coconut)']
                }
            },
            {
                id: 6.5,
                name: 'Green Apple Mojito',
                category: 'mojitos',
                price: '$5.75',
                description: 'Crisp and refreshing mojito with tart green apple flavor',
                emoji: '🍏',
                details: {
                    fullDescription: 'A crisp and invigorating mojito featuring tart green apple flavor that perfectly complements the traditional mint and lime base. Fresh Granny Smith apple juice adds natural tartness and sweetness, while muddled apple pieces provide texture. This refreshing drink captures the essence of a crisp autumn day.',
                    ingredients: ['Fresh mint leaves', 'Green apple juice', 'Fresh apple pieces', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Apple slices', 'Mint garnish'],
                    nutrition: {
                        calories: '110',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Orchard-inspired fusion',
                    allergens: ['None']
                }
            },
            {
                id: 6.6,
                name: 'Kiwi Mojito',
                category: 'mojitos',
                price: '$6.25',
                description: 'Exotic mojito with sweet and tangy kiwi fruit',
                emoji: '🥝',
                details: {
                    fullDescription: 'An exotic and vibrant mojito featuring fresh kiwi fruit that adds a unique sweet-tart flavor profile. The kiwi is muddled with mint and lime to release its tropical essence, creating a beautifully green-speckled drink that\'s both visually stunning and deliciously refreshing. Rich in vitamin C and natural enzymes.',
                    ingredients: ['Fresh mint leaves', 'Fresh kiwi fruit', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Kiwi slices', 'Mint sprigs'],
                    nutrition: {
                        calories: '105',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'New Zealand inspired',
                    allergens: ['None']
                }
            },
            {
                id: 6.7,
                name: 'Cranberry Mojito',
                category: 'mojitos',
                price: '$5.95',
                description: 'Festive mojito with tart cranberries and a beautiful ruby color',
                emoji: '🔴',
                details: {
                    fullDescription: 'A festive and visually striking mojito featuring tart cranberry juice that creates a beautiful ruby-red color. The cranberries add a delightful tartness that balances perfectly with the mint\'s coolness and lime\'s brightness. This antioxidant-rich drink is perfect for celebrations and holiday gatherings.',
                    ingredients: ['Fresh mint leaves', 'Cranberry juice', 'Fresh cranberries', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Cranberry garnish', 'Lime wheel'],
                    nutrition: {
                        calories: '115',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Holiday-inspired',
                    allergens: ['None']
                }
            },
            {
                id: 6.8,
                name: 'Raspberry Mojito',
                category: 'mojitos',
                price: '$6.25',
                description: 'Sweet and tangy mojito with fresh raspberries',
                emoji: '🫐',
                details: {
                    fullDescription: 'A delightfully sweet and tangy mojito featuring fresh raspberries that are gently muddled to release their natural juices and vibrant color. The berries add a lovely pink hue and a perfect balance of sweetness and tartness to the classic mint-lime combination. Packed with antioxidants and natural fruit flavors.',
                    ingredients: ['Fresh mint leaves', 'Fresh raspberries', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Raspberry garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '100',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Berry garden inspired',
                    allergens: ['None']
                }
            },
            {
                id: 6.9,
                name: 'Berry Apricot Mojito',
                category: 'mojitos',
                price: '$6.75',
                description: 'Luxurious mojito combining mixed berries with sweet apricot',
                emoji: '🍑',
                details: {
                    fullDescription: 'A luxurious and complex mojito that combines the best of summer fruits - mixed berries and sweet apricots. Fresh strawberries, blueberries, and ripe apricots are muddled together with mint and lime, creating a sophisticated flavor profile that\'s both refreshing and indulgent. This antioxidant powerhouse is perfect for fruit lovers.',
                    ingredients: ['Fresh mint leaves', 'Mixed berries (strawberries, blueberries)', 'Fresh apricot pieces', 'Fresh lime juice', 'Honey syrup', 'Soda water', 'Ice', 'Berry and apricot garnish'],
                    nutrition: {
                        calories: '125',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Summer orchard blend',
                    allergens: ['None']
                }
            },
            {
                id: 6.10,
                name: 'Lemon Grass Mojito',
                category: 'mojitos',
                price: '$5.95',
                description: 'Aromatic mojito with fresh lemongrass and citrus notes',
                emoji: '🌾',
                details: {
                    fullDescription: 'An aromatic and sophisticated mojito featuring fresh lemongrass that adds a unique citrusy fragrance and subtle herbal notes. The lemongrass is gently muddled with mint and lime to release its essential oils, creating a refreshing drink with complex layers of flavor. Known for its digestive and calming properties.',
                    ingredients: ['Fresh mint leaves', 'Fresh lemongrass stalks', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Lemongrass garnish', 'Lime wedges'],
                    nutrition: {
                        calories: '90',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Southeast Asian inspired',
                    allergens: ['None']
                }
            },
            {
                id: 6.11,
                name: 'Apple Mint Mojito',
                category: 'mojitos',
                price: '$5.75',
                description: 'Refreshing mojito with apple mint leaves and crisp apple flavor',
                emoji: '🍃',
                details: {
                    fullDescription: 'A unique twist on the classic mojito featuring apple mint leaves, which have a distinctive apple-like aroma and flavor. Combined with fresh apple juice and traditional lime, this refreshing drink offers a more complex mint profile with subtle fruity undertones. The apple mint adds a sophisticated herbal note that sets this mojito apart.',
                    ingredients: ['Fresh apple mint leaves', 'Fresh apple juice', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Apple slices', 'Apple mint sprigs'],
                    nutrition: {
                        calories: '105',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Herb garden specialty',
                    allergens: ['None']
                }
            },
            {
                id: 6.12,
                name: 'Yuzu Basil Lemonade',
                category: 'mojitos',
                price: '$7.25',
                description: 'Sophisticated citrus drink with Japanese yuzu and fresh basil',
                emoji: '🍊',
                details: {
                    fullDescription: 'An elegant and sophisticated citrus beverage featuring Japanese yuzu, a unique citrus fruit with a complex flavor profile combining lemon, lime, and grapefruit notes. Fresh Thai basil adds an aromatic herbal complexity that perfectly complements the yuzu\'s distinctive taste. This premium drink offers a truly unique and refreshing experience.',
                    ingredients: ['Fresh yuzu juice', 'Fresh Thai basil leaves', 'Fresh lemon juice', 'Agave syrup', 'Sparkling water', 'Ice', 'Yuzu wheel', 'Basil sprigs'],
                    nutrition: {
                        calories: '95',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Japanese-Thai fusion',
                    allergens: ['None']
                }
            },

            // Lassi
            {
                id: 7.1,
                name: 'Sweet and Salt Lassi',
                category: 'lassi',
                price: '$4.75',
                description: 'Traditional yogurt drink available in sweet or salted versions',
                emoji: '🥛',
                details: {
                    fullDescription: 'A classic Indian yogurt-based drink that comes in two traditional varieties. The sweet version is blended with sugar and cardamom for a refreshing treat, while the salted version includes cumin and black salt for a savory, cooling beverage. Both are made with fresh, thick yogurt and served chilled.',
                    ingredients: ['Fresh thick yogurt', 'Sugar (sweet version)', 'Salt and cumin (salted version)', 'Cardamom powder', 'Ice', 'Mint garnish'],
                    nutrition: {
                        calories: '180',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '2-3 minutes',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Traditional Indian',
                    allergens: ['Dairy']
                }
            },
            {
                id: 7.2,
                name: 'Dry Fruit Lassi',
                category: 'lassi',
                price: '$6.25',
                description: 'Rich lassi blended with almonds, pistachios, and dates',
                emoji: '🌰',
                details: {
                    fullDescription: 'A luxurious and nutritious lassi featuring a blend of premium dry fruits including almonds, pistachios, cashews, and dates. This protein-rich drink is naturally sweetened by the dates and enhanced with cardamom and saffron. Topped with chopped nuts for extra texture and visual appeal.',
                    ingredients: ['Fresh thick yogurt', 'Almonds', 'Pistachios', 'Cashews', 'Dates', 'Cardamom powder', 'Saffron strands', 'Ice', 'Chopped nuts garnish'],
                    nutrition: {
                        calories: '280',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Royal Indian tradition',
                    allergens: ['Dairy', 'Tree nuts (almonds, pistachios, cashews)']
                }
            },
            {
                id: 7.3,
                name: 'Kiwi Lassi',
                category: 'lassi',
                price: '$5.75',
                description: 'Tropical fusion lassi with fresh kiwi fruit and yogurt',
                emoji: '🥝',
                details: {
                    fullDescription: 'A modern fusion lassi that combines the traditional Indian yogurt drink with exotic kiwi fruit. The kiwi adds a unique sweet-tart flavor and beautiful green color with black seed specks. Rich in vitamin C and probiotics, this refreshing drink offers both traditional comfort and tropical excitement.',
                    ingredients: ['Fresh thick yogurt', 'Fresh kiwi fruit', 'Honey', 'Cardamom powder', 'Ice', 'Kiwi slices garnish', 'Mint leaves'],
                    nutrition: {
                        calories: '220',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Indo-tropical fusion',
                    allergens: ['Dairy']
                }
            },
            {
                id: 7.4,
                name: 'Caramel Lassi',
                category: 'lassi',
                price: '$5.95',
                description: 'Indulgent lassi with rich caramel flavor and creamy texture',
                emoji: '🍯',
                details: {
                    fullDescription: 'An indulgent twist on traditional lassi featuring rich caramel sauce blended with thick yogurt. This dessert-like drink combines the tangy freshness of yogurt with the sweet, buttery notes of caramel. Topped with whipped cream and a caramel drizzle for the ultimate treat.',
                    ingredients: ['Fresh thick yogurt', 'Caramel sauce', 'Brown sugar', 'Vanilla extract', 'Ice', 'Whipped cream', 'Caramel drizzle', 'Sea salt flakes'],
                    nutrition: {
                        calories: '320',
                        caffeine: '0mg',
                        size: '12 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Modern dessert fusion',
                    allergens: ['Dairy', 'May contain soy']
                }
            },

            // Real Fruit Mojitos
            {
                id: 8.1,
                name: 'Pomegranate Mojito',
                category: 'real-fruit-mojitos',
                price: '$6.75',
                description: 'Antioxidant-rich mojito with fresh pomegranate seeds and juice',
                emoji: '🍎',
                details: {
                    fullDescription: 'A vibrant and healthy mojito featuring fresh pomegranate seeds and pure pomegranate juice, creating a beautiful ruby-red drink packed with antioxidants. The pomegranate\'s sweet-tart flavor pairs perfectly with fresh mint and lime, while the seeds add delightful texture and bursts of flavor. This superfruit mojito is as nutritious as it is delicious.',
                    ingredients: ['Fresh mint leaves', 'Fresh pomegranate seeds', 'Pure pomegranate juice', 'Fresh lime juice', 'Agave syrup', 'Soda water', 'Ice', 'Pomegranate seeds garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '135',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Middle Eastern superfruit',
                    allergens: ['None']
                }
            },
            {
                id: 8.2,
                name: 'Green Grapes Mojito',
                category: 'real-fruit-mojitos',
                price: '$6.25',
                description: 'Refreshing mojito with fresh green grapes and natural sweetness',
                emoji: '🍇',
                details: {
                    fullDescription: 'A refreshing and naturally sweet mojito featuring fresh green grapes that are gently muddled to release their juice and natural sugars. The grapes provide a delicate sweetness and subtle wine-like notes that complement the mint and lime beautifully. This elegant drink captures the essence of a vineyard in a glass.',
                    ingredients: ['Fresh mint leaves', 'Fresh green grapes', 'Fresh lime juice', 'Light simple syrup', 'Soda water', 'Ice', 'Grape cluster garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '120',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Mediterranean vineyard inspired',
                    allergens: ['None']
                }
            },
            {
                id: 8.3,
                name: 'Musk Melon Mojito',
                category: 'real-fruit-mojitos',
                price: '$6.50',
                description: 'Sweet and aromatic mojito with fresh musk melon pieces',
                emoji: '🍈',
                details: {
                    fullDescription: 'A sweet and aromatic mojito featuring fresh musk melon (cantaloupe) that adds natural sweetness and a delicate floral aroma. The melon\'s creamy texture and subtle flavor create a smooth, refreshing drink that\'s perfect for hot summer days. Rich in vitamins A and C, this mojito is both delicious and nutritious.',
                    ingredients: ['Fresh mint leaves', 'Fresh musk melon pieces', 'Fresh lime juice', 'Honey syrup', 'Soda water', 'Ice', 'Melon balls garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '110',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Summer orchard special',
                    allergens: ['None']
                }
            },
            {
                id: 8.4,
                name: 'Kiwi Mojito',
                category: 'real-fruit-mojitos',
                price: '$6.25',
                description: 'Exotic mojito with fresh kiwi fruit and tropical flavors',
                emoji: '🥝',
                details: {
                    fullDescription: 'An exotic and vibrant mojito featuring fresh kiwi fruit that adds a unique sweet-tart flavor profile and beautiful green color with black seed specks. The kiwi is muddled with mint and lime to release its tropical essence, creating a visually stunning drink that\'s rich in vitamin C and natural enzymes. Perfect for those seeking an adventurous flavor experience.',
                    ingredients: ['Fresh mint leaves', 'Fresh kiwi fruit', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Kiwi wheel garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '105',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'New Zealand tropical',
                    allergens: ['None']
                }
            },
            {
                id: 8.5,
                name: 'Watermelon Mojito',
                category: 'real-fruit-mojitos',
                price: '$6.50',
                description: 'Hydrating summer mojito with fresh watermelon juice',
                emoji: '🍉',
                details: {
                    fullDescription: 'The ultimate summer refresher featuring fresh watermelon juice that\'s naturally sweet and incredibly hydrating. This mojito captures the essence of summer with its light, refreshing taste and beautiful pink color. The watermelon\'s high water content and natural electrolytes make this the perfect drink for hot days and post-workout refreshment.',
                    ingredients: ['Fresh mint leaves', 'Fresh watermelon juice', 'Watermelon chunks', 'Fresh lime juice', 'Light agave syrup', 'Soda water', 'Ice', 'Watermelon wedge', 'Mint sprigs'],
                    nutrition: {
                        calories: '95',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '3-4 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Summer hydration special',
                    allergens: ['None']
                }
            },

            // Almond Gum Special
            {
                id: 9.1,
                name: 'Almond Gum Lemonade',
                category: 'almond-gum-special',
                price: '$5.75',
                description: 'Unique lemonade infused with natural almond gum for extra texture',
                emoji: '🥤',
                details: {
                    fullDescription: 'A unique and refreshing twist on classic lemonade featuring natural almond gum that adds a delightful chewy texture and subtle nutty sweetness. The almond gum creates an interesting mouthfeel while complementing the tart lemon flavor. This innovative drink combines traditional Middle Eastern ingredients with modern beverage crafting.',
                    ingredients: ['Fresh lemon juice', 'Natural almond gum', 'Pure cane sugar', 'Sparkling water', 'Ice', 'Fresh lemon slices', 'Mint garnish'],
                    nutrition: {
                        calories: '140',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Middle Eastern fusion',
                    allergens: ['Tree nuts (almonds)']
                }
            },
            {
                id: 9.2,
                name: 'Almond Gum Raspberry Mojito',
                category: 'almond-gum-special',
                price: '$7.25',
                description: 'Raspberry mojito enhanced with chewy almond gum pieces',
                emoji: '🫐',
                details: {
                    fullDescription: 'An innovative mojito that combines the classic raspberry and mint flavors with the unique texture of natural almond gum. Fresh raspberries are muddled with mint and lime, while almond gum pieces add an unexpected chewy element and subtle nutty undertones. This creative drink offers a multi-sensory experience.',
                    ingredients: ['Fresh mint leaves', 'Fresh raspberries', 'Natural almond gum', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Raspberry garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '155',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Fusion innovation',
                    allergens: ['Tree nuts (almonds)']
                }
            },
            {
                id: 9.3,
                name: 'Almond Gum Cranberry Mojito',
                category: 'almond-gum-special',
                price: '$7.25',
                description: 'Tart cranberry mojito with chewy almond gum for unique texture',
                emoji: '🔴',
                details: {
                    fullDescription: 'A festive and innovative mojito featuring tart cranberry juice and fresh cranberries, enhanced with natural almond gum that adds a delightful chewy texture. The combination creates a beautiful ruby-red drink with complex flavors and an interesting mouthfeel. Perfect for those seeking a unique beverage experience.',
                    ingredients: ['Fresh mint leaves', 'Cranberry juice', 'Fresh cranberries', 'Natural almond gum', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Cranberry garnish', 'Lime wheel'],
                    nutrition: {
                        calories: '160',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Holiday fusion special',
                    allergens: ['Tree nuts (almonds)']
                }
            },
            {
                id: 9.4,
                name: 'Almond Gum Green Apple Mojito',
                category: 'almond-gum-special',
                price: '$7.25',
                description: 'Crisp green apple mojito with natural almond gum texture',
                emoji: '🍏',
                details: {
                    fullDescription: 'A crisp and refreshing mojito featuring tart green apple flavor enhanced with natural almond gum pieces. The green apple provides a bright, tart base while the almond gum adds chewy texture and subtle nutty sweetness. This innovative drink combines orchard freshness with Middle Eastern tradition.',
                    ingredients: ['Fresh mint leaves', 'Green apple juice', 'Fresh apple pieces', 'Natural almond gum', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Apple slices', 'Mint garnish'],
                    nutrition: {
                        calories: '150',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Orchard fusion innovation',
                    allergens: ['Tree nuts (almonds)']
                }
            },
            {
                id: 9.5,
                name: 'Almond Gum Strawberry Mojito',
                category: 'almond-gum-special',
                price: '$7.25',
                description: 'Sweet strawberry mojito with chewy almond gum pieces',
                emoji: '🍓',
                details: {
                    fullDescription: 'A delightfully sweet and innovative mojito featuring fresh strawberries muddled with mint and lime, enhanced with natural almond gum that adds unique chewy texture and subtle nutty notes. The strawberries provide natural sweetness and beautiful color, while the almond gum creates an unforgettable textural experience.',
                    ingredients: ['Fresh mint leaves', 'Fresh strawberries', 'Natural almond gum', 'Fresh lime juice', 'Simple syrup', 'Soda water', 'Ice', 'Strawberry garnish', 'Mint sprigs'],
                    nutrition: {
                        calories: '145',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: '4-5 minutes',
                    temperature: 'Served ice cold (35-40°F)',
                    origin: 'Berry fusion special',
                    allergens: ['Tree nuts (almonds)']
                }
            },
            
            // Cold Pressed Juices
            {
                id: 10.1,
                name: 'Watermelon Juice',
                category: 'cold-pressed-juices',
                price: '$4.25',
                description: 'Pure cold-pressed watermelon juice, naturally hydrating',
                emoji: '🍉',
                details: {
                    fullDescription: 'Pure, cold-pressed watermelon juice made from the freshest, ripest watermelons. This naturally hydrating beverage is packed with vitamins A and C, lycopene, and natural electrolytes. The cold-pressing process preserves all the nutrients while delivering the pure, sweet taste of summer. Perfect for post-workout hydration or as a refreshing treat.',
                    ingredients: ['Fresh watermelon', 'No added sugar', 'No preservatives'],
                    nutrition: {
                        calories: '85',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold-pressed fresh',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Farm-fresh watermelons',
                    allergens: ['None']
                }
            },
            {
                id: 10.2,
                name: 'Watermelon + Lemon + Mint',
                category: 'cold-pressed-juices',
                price: '$5.25',
                description: 'Refreshing watermelon juice enhanced with zesty lemon and fresh mint',
                emoji: '🍉',
                details: {
                    fullDescription: 'A refreshing and invigorating blend of cold-pressed watermelon juice enhanced with fresh lemon juice and aromatic mint leaves. This combination creates the perfect balance of sweet, tart, and cooling flavors. The lemon adds vitamin C and brightness, while mint provides a cooling sensation and aids digestion. Ideal for hot summer days.',
                    ingredients: ['Fresh watermelon', 'Fresh lemon juice', 'Fresh mint leaves', 'No added sugar'],
                    nutrition: {
                        calories: '95',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold-pressed and blended fresh',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Farm-fresh ingredients',
                    allergens: ['None']
                }
            },
            {
                id: 10.3,
                name: 'Grape Juice',
                category: 'cold-pressed-juices',
                price: '$4.75',
                description: 'Pure cold-pressed grape juice with natural antioxidants',
                emoji: '🍇',
                details: {
                    fullDescription: 'Pure, cold-pressed grape juice made from premium purple grapes, rich in natural antioxidants and resveratrol. This deep purple juice offers the full-bodied sweetness of ripe grapes with no added sugars or preservatives. The cold-pressing method ensures maximum nutrient retention while delivering the authentic taste of fresh grapes.',
                    ingredients: ['Fresh purple grapes', 'No added sugar', 'No preservatives'],
                    nutrition: {
                        calories: '140',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold-pressed fresh',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Premium vineyard grapes',
                    allergens: ['None']
                }
            },
            {
                id: 10.4,
                name: 'Muskmelon Juice',
                category: 'cold-pressed-juices',
                price: '$4.50',
                description: 'Sweet and aromatic muskmelon juice with natural vitamins',
                emoji: '🍈',
                details: {
                    fullDescription: 'Sweet and aromatic cold-pressed muskmelon (cantaloupe) juice made from perfectly ripe melons. This naturally sweet juice is rich in vitamins A and C, potassium, and beta-carotene. The delicate, floral sweetness and smooth texture make it a perfect choice for those seeking a naturally sweet, healthy beverage without any added sugars.',
                    ingredients: ['Fresh muskmelon (cantaloupe)', 'No added sugar', 'No preservatives'],
                    nutrition: {
                        calories: '105',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold-pressed fresh',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Farm-fresh melons',
                    allergens: ['None']
                }
            },
            {
                id: 10.5,
                name: 'Beetroot + Carrot',
                category: 'cold-pressed-juices',
                price: '$5.75',
                description: 'Nutrient-rich blend of beetroot and carrot for natural energy',
                emoji: '🥕',
                details: {
                    fullDescription: 'A powerful and nutritious blend of cold-pressed beetroot and carrot juice, creating a vibrant orange-red elixir packed with vitamins, minerals, and natural nitrates. Beetroot provides natural nitrates for improved circulation and energy, while carrots contribute beta-carotene and vitamin A. This earthy-sweet combination is perfect for health-conscious customers seeking natural energy.',
                    ingredients: ['Fresh beetroot', 'Fresh carrots', 'No added sugar', 'No preservatives'],
                    nutrition: {
                        calories: '120',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold-pressed fresh',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Organic root vegetables',
                    allergens: ['None']
                }
            },
            {
                id: 10.6,
                name: 'Apple + Beetroot + Carrot',
                category: 'cold-pressed-juices',
                price: '$6.25',
                description: 'The ultimate wellness blend with apple, beetroot, and carrot',
                emoji: '🍎',
                details: {
                    fullDescription: 'The ultimate wellness juice combining cold-pressed apple, beetroot, and carrot - often called the "ABC juice" for its incredible health benefits. This vibrant blend offers natural sweetness from apples, earthy richness from beetroot, and beta-carotene from carrots. Rich in antioxidants, vitamins A and C, and natural nitrates, this juice supports overall health, energy, and vitality.',
                    ingredients: ['Fresh apples', 'Fresh beetroot', 'Fresh carrots', 'No added sugar', 'No preservatives'],
                    nutrition: {
                        calories: '135',
                        caffeine: '0mg',
                        size: '16 oz'
                    },
                    brewTime: 'Cold-pressed fresh',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Organic fruits and vegetables',
                    allergens: ['None']
                }
            },



            // Fruit Bowls
            {
                id: 11.1,
                name: 'Watermelon Salad',
                category: 'fruit-bowls',
                price: '$6.75',
                description: 'Fresh watermelon chunks with mint, feta cheese, and lime dressing',
                emoji: '🍉',
                details: {
                    fullDescription: 'A refreshing and hydrating fruit salad featuring juicy watermelon chunks combined with fresh mint leaves, creamy feta cheese, and a zesty lime dressing. This Mediterranean-inspired bowl offers the perfect balance of sweet, salty, and tangy flavors. Garnished with toasted pine nuts and a drizzle of honey for added texture and sweetness.',
                    ingredients: ['Fresh watermelon chunks', 'Feta cheese crumbles', 'Fresh mint leaves', 'Lime juice', 'Extra virgin olive oil', 'Honey drizzle', 'Toasted pine nuts', 'Black pepper'],
                    nutrition: {
                        calories: '180',
                        caffeine: '0mg',
                        size: '12 oz bowl'
                    },
                    brewTime: 'Prepared fresh to order',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Mediterranean-inspired',
                    allergens: ['Dairy (feta cheese)', 'Tree nuts (pine nuts)']
                }
            },
            {
                id: 11.2,
                name: 'Mix Fruit Salad',
                category: 'fruit-bowls',
                price: '$7.25',
                description: 'Seasonal fresh fruits with honey-lime dressing and mint',
                emoji: '🍓',
                details: {
                    fullDescription: 'A vibrant and nutritious mix of seasonal fresh fruits including strawberries, blueberries, kiwi, pineapple, grapes, and orange segments. Tossed in a light honey-lime dressing and garnished with fresh mint leaves. This antioxidant-rich bowl changes with the seasons to feature the best available fruits, ensuring peak freshness and flavor.',
                    ingredients: ['Seasonal fresh fruits (strawberries, blueberries, kiwi, pineapple, grapes, oranges)', 'Honey-lime dressing', 'Fresh mint leaves', 'Chia seeds', 'Coconut flakes'],
                    nutrition: {
                        calories: '220',
                        caffeine: '0mg',
                        size: '14 oz bowl'
                    },
                    brewTime: 'Prepared fresh to order',
                    temperature: 'Served chilled (35-40°F)',
                    origin: 'Seasonal farm-fresh selection',
                    allergens: ['Tree nuts (coconut)']
                }
            },
            {
                id: 11.3,
                name: 'Choco Banana Smoothie Bowl',
                category: 'fruit-bowls',
                price: '$8.25',
                description: 'Thick chocolate-banana smoothie topped with granola, berries, and nuts',
                emoji: '🍌',
                details: {
                    fullDescription: 'A decadent yet healthy smoothie bowl featuring a thick, creamy base made from frozen bananas, cocoa powder, and almond milk. This rich chocolate-banana blend is topped with crunchy granola, fresh berries, sliced almonds, coconut flakes, and a drizzle of almond butter. Perfect for breakfast or as a satisfying dessert alternative.',
                    ingredients: ['Frozen bananas', 'Cocoa powder', 'Almond milk', 'Vanilla protein powder', 'House-made granola', 'Fresh berries', 'Sliced almonds', 'Coconut flakes', 'Almond butter drizzle', 'Dark chocolate chips'],
                    nutrition: {
                        calories: '380',
                        caffeine: '8mg',
                        size: '16 oz bowl'
                    },
                    brewTime: 'Blended fresh to order',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Health-conscious indulgence',
                    allergens: ['Tree nuts (almonds, coconut)', 'May contain gluten (granola)', 'May contain soy (protein powder)']
                }
            },
            {
                id: 11.4,
                name: 'Berry Smoothie Bowl',
                category: 'fruit-bowls',
                price: '299',
                description: 'Antioxidant-rich berry smoothie with superfood toppings',
                emoji: '🫐',
                details: {
                    fullDescription: 'A vibrant purple smoothie bowl packed with antioxidants, featuring a blend of frozen mixed berries, banana, and coconut milk. This superfood bowl is topped with fresh berries, chia seeds, hemp hearts, granola, and a drizzle of honey. Rich in vitamins, minerals, and healthy fats, this bowl is both delicious and incredibly nutritious.',
                    ingredients: ['Frozen mixed berries (blueberries, strawberries, raspberries)', 'Frozen banana', 'Coconut milk', 'Acai powder', 'Fresh berry toppings', 'Chia seeds', 'Hemp hearts', 'House-made granola', 'Honey drizzle', 'Coconut flakes'],
                    nutrition: {
                        calories: '340',
                        caffeine: '0mg',
                        size: '16 oz bowl'
                    },
                    brewTime: 'Blended fresh to order',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Superfood nutrition bowl',
                    allergens: ['Tree nuts (coconut)', 'May contain gluten (granola)', 'May contain seeds']
                }
            },

            // Desserts

             {
                id: 12.1,
                name: 'Walnut Brownie',
                category: 'desserts',
                price: '₹119',
                description: 'Rich, fudgy brownie loaded with crunchy walnuts and premium chocolate',
                emoji: '🍫',
                details: {
                    fullDescription: 'A vibrant purple smoothie bowl packed with antioxidants, featuring a blend of frozen mixed berries, banana, and coconut milk. This superfood bowl is topped with fresh berries, chia seeds, hemp hearts, granola, and a drizzle of honey. Rich in vitamins, minerals, and healthy fats, this bowl is both delicious and incredibly nutritious.',
                    ingredients: ['Frozen mixed berries (blueberries, strawberries, raspberries)', 'Frozen banana', 'Coconut milk', 'Acai powder', 'Fresh berry toppings', 'Chia seeds', 'Hemp hearts', 'House-made granola', 'Honey drizzle', 'Coconut flakes'],
                    nutrition: {
                        calories: '340',
                        caffeine: '0mg',
                        size: '16 oz bowl'
                    },
                    prepTime: 'Baked fresh to order',
                    temperature: 'Served cold (35-40°F)',
                    origin: 'Superfood nutrition bowl',
                    allergens: ['Tree nuts (coconut)', 'May contain gluten (granola)', 'May contain seeds']
                }
            },
            {
                id: 12.2,
                name: 'Brownie + Vanilla Scoop',
                category: 'desserts',
                price: '₹159',
                description: 'Warm brownie paired with premium vanilla ice cream for the perfect contrast',
                emoji: '🍫🍦',
                details: {
                    fullDescription: 'Our signature walnut brownie served warm alongside a generous scoop of creamy vanilla bean ice cream. The temperature contrast creates a delightful experience as the cold ice cream slowly melts over the warm brownie.',
                    ingredients: ['Walnut brownie (see above)', 'Premium vanilla bean ice cream', 'Madagascar vanilla beans', 'Fresh cream', 'Organic milk', 'Cane sugar'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 brownie + 1 scoop',
                        allergens: 'Contains nuts, eggs, gluten, dairy'
                    },
                    prepTime: 'Assembled to order',
                    temperature: 'Warm brownie with cold ice cream',
                    origin: 'Classic dessert pairing',
                    allergens: ['Tree nuts (walnuts)', 'Eggs', 'Gluten', 'Dairy']
                }
            },
            {
                id: 12.3,
                name: 'Brownie + Chocolate Scoop',
                category: 'desserts',
                price: '₹159',
                description: 'Double chocolate indulgence with brownie and rich chocolate ice cream',
                emoji: '🍫🍫',
                details: {
                    fullDescription: 'For the ultimate chocolate lover - our fudgy walnut brownie served with a scoop of rich, dark chocolate ice cream. This combination delivers an intense chocolate experience with varying textures and temperatures.',
                    ingredients: ['Walnut brownie (see above)', 'Dark chocolate ice cream', 'Belgian dark chocolate', 'Cocoa powder', 'Fresh cream', 'Organic milk'],
                    nutrition: {
                        calories: '510',
                        servingSize: '1 brownie + 1 scoop',
                        allergens: 'Contains nuts, eggs, gluten, dairy'
                    },
                    prepTime: 'Assembled to order',
                    temperature: 'Warm brownie with cold ice cream',
                    origin: 'Chocolate lover\'s dream',
                    allergens: ['Tree nuts (walnuts)', 'Eggs', 'Gluten', 'Dairy']
                }
            },
            {
                id: 12.4,
                name: 'Sizzling Brownie With Vanilla',
                category: 'desserts',
                price: '₹189',
                description: 'Theatrical dessert with brownie on a hot plate, vanilla ice cream, and chocolate sauce',
                emoji: '🔥🍫',
                details: {
                    fullDescription: 'Our most dramatic dessert presentation! A warm brownie served on a sizzling hot plate with vanilla ice cream that melts and sizzles on contact. Drizzled with hot chocolate sauce for an unforgettable sensory experience.',
                    ingredients: ['Walnut brownie', 'Vanilla ice cream', 'Hot chocolate sauce', 'Butter for sizzling', 'Chocolate shavings', 'Whipped cream'],
                    nutrition: {
                        calories: '520',
                        servingSize: '1 sizzling plate',
                        allergens: 'Contains nuts, eggs, gluten, dairy'
                    },
                    prepTime: 'Prepared fresh on hot plate',
                    temperature: 'Sizzling hot presentation',
                    origin: 'Restaurant-style theatrical dessert',
                    allergens: ['Tree nuts (walnuts)', 'Eggs', 'Gluten', 'Dairy']
                }
            },
            {
                id: 12.5,
                name: 'Sizzling Brownie With Chocolate',
                category: 'desserts',
                price: '₹189',
                description: 'Sizzling brownie spectacle with chocolate ice cream and hot fudge sauce',
                emoji: '🔥🍫',
                details: {
                    fullDescription: 'The chocolate version of our sizzling brownie - served on a hot plate with chocolate ice cream and hot fudge sauce. Watch as the ice cream melts and sizzles, creating a dramatic and delicious dessert experience.',
                    ingredients: ['Walnut brownie', 'Chocolate ice cream', 'Hot fudge sauce', 'Butter for sizzling', 'Chocolate chips', 'Whipped cream'],
                    nutrition: {
                        calories: '545',
                        servingSize: '1 sizzling plate',
                        allergens: 'Contains nuts, eggs, gluten, dairy'
                    },
                    prepTime: 'Prepared fresh on hot plate',
                    temperature: 'Sizzling hot presentation',
                    origin: 'Restaurant-style theatrical dessert',
                    allergens: ['Tree nuts (walnuts)', 'Eggs', 'Gluten', 'Dairy']
                }
            },
            //Ice Cream Scoops
             {
                id: 13.1,
                name: 'Vanilla Scoop',
                category: 'ice-cream-scoops',
                price: '₹69',
                description: 'Classic premium vanilla ice cream made with real Madagascar vanilla beans',
                emoji: '🍦',
                details: {
                    fullDescription: 'Our signature vanilla ice cream crafted with the finest Madagascar vanilla beans and fresh cream. This classic flavor features a rich, creamy texture with aromatic vanilla notes that make it the perfect complement to any dessert or delightful on its own.',
                    ingredients: ['Fresh cream', 'Whole milk', 'Madagascar vanilla beans', 'Cane sugar', 'Egg yolks', 'Natural vanilla extract'],
                    nutrition: {
                        calories: '180',
                        servingSize: '1 scoop (100g)',
                        allergens: 'Contains dairy, eggs'
                    },
                    prepTime: 'Churned fresh daily',
                    temperature: 'Served frozen (-12°C)',
                    origin: 'Classic French-style ice cream',
                    allergens: ['Dairy', 'Eggs']
                }
            },
            {
                id: 13.2,
                name: 'Butterscotch Scoop',
                category: 'ice-cream-scoops',
                price: '₹79',
                description: 'Rich butterscotch ice cream with crunchy caramelized sugar pieces',
                emoji: '🍯🍦',
                details: {
                    fullDescription: 'Indulgent butterscotch ice cream featuring a smooth, creamy base infused with rich butterscotch flavor and studded with crunchy caramelized sugar pieces. The perfect balance of sweet, buttery notes with delightful textural contrast.',
                    ingredients: ['Fresh cream', 'Whole milk', 'Butterscotch sauce', 'Brown sugar', 'Butter', 'Caramelized sugar pieces', 'Vanilla extract', 'Sea salt'],
                    nutrition: {
                        calories: '210',
                        servingSize: '1 scoop (100g)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Churned fresh daily',
                    temperature: 'Served frozen (-12°C)',
                    origin: 'Traditional British-inspired flavor',
                    allergens: ['Dairy']
                }
            },
            {
                id: 13.3,
                name: 'Chocolate Scoop',
                category: 'ice-cream-scoops',
                price: '₹79',
                description: 'Decadent chocolate ice cream made with premium cocoa and dark chocolate',
                emoji: '🍫🍦',
                details: {
                    fullDescription: 'Rich and luxurious chocolate ice cream crafted with premium Dutch cocoa powder and melted dark chocolate. This intensely chocolatey treat delivers deep cocoa flavors with a velvety smooth texture that melts beautifully on your tongue.',
                    ingredients: ['Fresh cream', 'Whole milk', 'Dark chocolate (70% cocoa)', 'Dutch cocoa powder', 'Cane sugar', 'Egg yolks', 'Vanilla extract'],
                    nutrition: {
                        calories: '195',
                        servingSize: '1 scoop (100g)',
                        allergens: 'Contains dairy, eggs'
                    },
                    prepTime: 'Churned fresh daily',
                    temperature: 'Served frozen (-12°C)',
                    origin: 'European-style chocolate ice cream',
                    allergens: ['Dairy', 'Eggs']
                }
            },
            {
                id: 13.4,
                name: 'Strawberry Scoop',
                category: 'ice-cream-scoops',
                price: '₹79',
                description: 'Fresh strawberry ice cream with real fruit pieces and natural flavor',
                emoji: '🍓🍦',
                details: {
                    fullDescription: 'Delightfully fresh strawberry ice cream made with real strawberry puree and chunks of fresh strawberries. This naturally pink ice cream captures the essence of ripe, juicy strawberries with a creamy base that highlights the fruit\'s natural sweetness.',
                    ingredients: ['Fresh cream', 'Whole milk', 'Fresh strawberries', 'Strawberry puree', 'Cane sugar', 'Lemon juice', 'Natural strawberry flavor'],
                    nutrition: {
                        calories: '175',
                        servingSize: '1 scoop (100g)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Made with seasonal strawberries',
                    temperature: 'Served frozen (-12°C)',
                    origin: 'Fresh fruit ice cream',
                    allergens: ['Dairy']
                }
            },
            {
                id: 13.5,
                name: 'Dark Chocolate Scoop',
                category: 'ice-cream-scoops',
                price: '₹89',
                description: 'Intense dark chocolate ice cream for serious chocolate connoisseurs',
                emoji: '🖤🍦',
                details: {
                    fullDescription: 'An intensely rich dark chocolate ice cream made with premium 85% dark chocolate and extra cocoa powder. This sophisticated flavor offers deep, complex chocolate notes with a hint of bitterness that appeals to true chocolate connoisseurs.',
                    ingredients: ['Fresh cream', 'Whole milk', 'Dark chocolate (85% cocoa)', 'Premium cocoa powder', 'Cane sugar', 'Egg yolks', 'Espresso extract', 'Sea salt'],
                    nutrition: {
                        calories: '205',
                        servingSize: '1 scoop (100g)',
                        allergens: 'Contains dairy, eggs'
                    },
                    prepTime: 'Churned fresh daily',
                    temperature: 'Served frozen (-12°C)',
                    origin: 'Artisanal dark chocolate creation',
                    allergens: ['Dairy', 'Eggs']
                }
            },
            // SOUPS
            {
                id: 14.1,
                name: 'Lemon Coriander Soup',
                category: 'soups',
                price: '₹149',
                description: 'Refreshing clear soup with fresh lemon juice and aromatic coriander',
                emoji: '🍋🥄',
                details: {
                    fullDescription: 'A light and refreshing clear soup infused with fresh lemon juice and aromatic coriander leaves. This tangy soup is perfect as an appetizer and helps cleanse the palate with its zesty flavors.',
                    ingredients: ['Vegetable broth', 'Fresh lemon juice', 'Coriander leaves', 'Ginger', 'Garlic', 'Green chilies', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '85',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Prepared fresh to order',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'Indo-Chinese fusion',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 14.2,
                name: 'Hot and Sour Soup',
                category: 'soups',
                price: '₹149',
                description: 'Classic Chinese soup with perfect balance of spicy heat and tangy sourness',
                emoji: '🌶️🥄',
                details: {
                    fullDescription: 'A classic Chinese soup featuring the perfect balance of spicy and sour flavors. Made with mixed vegetables, tofu, and a rich broth seasoned with white pepper and vinegar for that authentic taste.',
                    ingredients: ['Vegetable broth', 'Mixed vegetables', 'Tofu', 'Mushrooms', 'White pepper', 'Vinegar', 'Soy sauce', 'Cornstarch', 'Spring onions'],
                    nutrition: {
                        calories: '95',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Contains soy'
                    },
                    prepTime: 'Prepared fresh to order',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'Traditional Chinese',
                    allergens: ['Soy']
                }
            },
            {
                id: 14.3,
                name: 'Creamy Roasted Tomato Basil Soup',
                category: 'soups',
                price: '₹159',
                description: 'Rich and creamy soup made with roasted tomatoes and fresh basil',
                emoji: '🍅🌿',
                details: {
                    fullDescription: 'A luxurious soup made with fire-roasted tomatoes and fresh basil leaves, blended with cream for a velvety texture. The roasting process intensifies the tomato flavors while basil adds aromatic freshness.',
                    ingredients: ['Roasted tomatoes', 'Fresh basil', 'Heavy cream', 'Onions', 'Garlic', 'Vegetable stock', 'Olive oil', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '145',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Slow-roasted tomatoes, made fresh',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'Mediterranean inspired',
                    allergens: ['Dairy']
                }
            },
            {
                id: 14.4,
                name: 'Carrot Pumpkin Soup',
                category: 'soups',
                price: '₹159',
                description: 'Naturally sweet and nutritious soup with roasted carrots and pumpkin',
                emoji: '🥕🎃',
                details: {
                    fullDescription: 'A naturally sweet and nutritious soup made with roasted carrots and pumpkin, blended to creamy perfection. Enhanced with warming spices like ginger and a touch of cream for richness.',
                    ingredients: ['Fresh carrots', 'Pumpkin', 'Ginger', 'Onions', 'Vegetable stock', 'Cream', 'Honey', 'Cinnamon', 'Nutmeg'],
                    nutrition: {
                        calories: '125',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Roasted vegetables, blended fresh',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'Seasonal comfort soup',
                    allergens: ['Dairy']
                }
            },
            {
                id: 14.5,
                name: 'Creamy Mushroom Soup',
                category: 'soups',
                price: '₹169',
                description: 'Rich and earthy soup with mixed mushrooms in a creamy base',
                emoji: '🍄🥄',
                details: {
                    fullDescription: 'A rich and earthy soup featuring a medley of fresh mushrooms sautéed to perfection and simmered in a creamy base. The deep umami flavors of mushrooms create a satisfying and comforting bowl.',
                    ingredients: ['Mixed mushrooms', 'Button mushrooms', 'Shiitake mushrooms', 'Heavy cream', 'Butter', 'Onions', 'Garlic', 'Thyme', 'White wine'],
                    nutrition: {
                        calories: '165',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Mushrooms sautéed fresh daily',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'European style',
                    allergens: ['Dairy']
                }
            },
            {
                id: 14.6,
                name: 'Broccoli Almond Soup',
                category: 'soups',
                price: '₹169',
                description: 'Nutritious green soup with fresh broccoli and creamy almond base',
                emoji: '🥦🌰',
                details: {
                    fullDescription: 'A nutritious and vibrant green soup made with fresh broccoli florets and a creamy almond base. This healthy soup is rich in vitamins and has a naturally nutty flavor from ground almonds.',
                    ingredients: ['Fresh broccoli', 'Ground almonds', 'Almond milk', 'Vegetable stock', 'Onions', 'Garlic', 'Olive oil', 'Nutritional yeast', 'Herbs'],
                    nutrition: {
                        calories: '155',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Contains tree nuts'
                    },
                    prepTime: 'Made fresh with seasonal broccoli',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'Healthy fusion',
                    allergens: ['Tree nuts (almonds)']
                }
            },
            {
                id: 14.7,
                name: 'Manchow Soup',
                category: 'soups',
                price: '₹169',
                description: 'Indo-Chinese thick soup with vegetables and crispy noodles on top',
                emoji: '🍜🥄',
                details: {
                    fullDescription: 'A popular Indo-Chinese thick soup loaded with mixed vegetables and topped with crispy fried noodles. This hearty soup has a rich, savory flavor with a perfect blend of soy sauce and spices.',
                    ingredients: ['Mixed vegetables', 'Cabbage', 'Carrots', 'Mushrooms', 'Soy sauce', 'Chili sauce', 'Cornstarch', 'Crispy noodles', 'Spring onions'],
                    nutrition: {
                        calories: '185',
                        servingSize: '1 bowl (250ml)',
                        allergens: 'Contains gluten, soy'
                    },
                    prepTime: 'Prepared fresh with crispy noodles',
                    temperature: 'Served hot (70-75°C)',
                    origin: 'Indo-Chinese fusion',
                    allergens: ['Gluten', 'Soy']
                }
            },


             // SALADS
            {
                id: 15.1,
                name: 'Italian Salad',
                category: 'salads',
                price: '₹199',
                description: 'Fresh Italian salad with crisp vegetables and creamy mayo dressing',
                emoji: '🥗🇮🇹',
                details: {
                    fullDescription: 'A vibrant Italian-inspired salad featuring fresh lettuce, cherry tomatoes, bell peppers, olives, and mozzarella cheese, all tossed in a creamy mayonnaise dressing with Italian herbs.',
                    ingredients: ['Mixed lettuce', 'Cherry tomatoes', 'Bell peppers', 'Black olives', 'Mozzarella cheese', 'Red onions', 'Mayonnaise', 'Italian herbs', 'Olive oil'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 bowl (200g)',
                        allergens: 'Contains dairy, eggs'
                    },
                    prepTime: 'Prepared fresh to order',
                    temperature: 'Served chilled',
                    origin: 'Italian inspired',
                    allergens: ['Dairy', 'Eggs (in mayo)']
                }
            },
            {
                id: 15.2,
                name: 'Caesar Salad',
                category: 'salads',
                price: '₹249',
                description: 'Classic Caesar salad with crisp romaine and authentic Caesar dressing',
                emoji: '🥬👑',
                details: {
                    fullDescription: 'The classic Caesar salad with crisp romaine lettuce, crunchy croutons, and parmesan cheese, tossed in our signature Caesar dressing made with anchovies, garlic, and lemon.',
                    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Croutons', 'Caesar dressing', 'Anchovies', 'Garlic', 'Lemon juice', 'Olive oil', 'Black pepper'],
                    nutrition: {
                        calories: '320',
                        servingSize: '1 bowl (220g)',
                        allergens: 'Contains dairy, gluten, fish'
                    },
                    prepTime: 'Prepared fresh to order',
                    temperature: 'Served chilled',
                    origin: 'Classic Roman salad',
                    allergens: ['Dairy', 'Gluten', 'Fish (anchovies)']
                }
            },
            {
                id: 15.3,
                name: 'Russian Salad',
                category: 'salads',
                price: '₹249',
                description: 'Traditional Russian salad with mixed vegetables and mayo dressing',
                emoji: '🥔🇷🇺',
                details: {
                    fullDescription: 'Traditional Russian salad (Olivier salad) with boiled potatoes, carrots, peas, and pickles, all mixed together with a creamy mayonnaise dressing for that authentic taste.',
                    ingredients: ['Boiled potatoes', 'Carrots', 'Green peas', 'Pickles', 'Mayonnaise', 'Hard-boiled eggs', 'Salt', 'White pepper', 'Fresh herbs'],
                    nutrition: {
                        calories: '295',
                        servingSize: '1 bowl (200g)',
                        allergens: 'Contains eggs'
                    },
                    prepTime: 'Prepared fresh daily',
                    temperature: 'Served chilled',
                    origin: 'Traditional Russian',
                    allergens: ['Eggs']
                }
            },
            {
                id: 15.4,
                name: 'Greek Salad',
                category: 'salads',
                price: '₹249',
                description: 'Mediterranean Greek salad with feta cheese and simple dressing',
                emoji: '🫒🇬🇷',
                details: {
                    fullDescription: 'Authentic Greek salad with fresh tomatoes, cucumbers, red onions, olives, and feta cheese, dressed simply with olive oil, lemon juice, and oregano.',
                    ingredients: ['Fresh tomatoes', 'Cucumbers', 'Red onions', 'Kalamata olives', 'Feta cheese', 'Olive oil', 'Lemon juice', 'Oregano', 'Sea salt'],
                    nutrition: {
                        calories: '265',
                        servingSize: '1 bowl (200g)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Prepared fresh to order',
                    temperature: 'Served at room temperature',
                    origin: 'Traditional Greek',
                    allergens: ['Dairy']
                }
            },
            {
                id: 15.5,
                name: 'Quinoa Salad',
                category: 'salads',
                price: '₹249',
                description: 'Healthy quinoa salad with fresh vegetables and simple dressing',
                emoji: '🌾🥗',
                details: {
                    fullDescription: 'Nutritious quinoa salad packed with protein-rich quinoa, fresh vegetables, herbs, and a light simple dressing made with olive oil and lemon juice.',
                    ingredients: ['Cooked quinoa', 'Cherry tomatoes', 'Cucumbers', 'Bell peppers', 'Red onions', 'Fresh herbs', 'Olive oil', 'Lemon juice', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '245',
                        servingSize: '1 bowl (200g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Quinoa cooked fresh daily',
                    temperature: 'Served at room temperature',
                    origin: 'Modern healthy cuisine',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 15.6,
                name: 'Buddha Bowl',
                category: 'salads',
                price: '₹349',
                description: 'Nutritious Buddha bowl with choice of vegetables or egg protein',
                emoji: '🍲🧘',
                details: {
                    fullDescription: 'A complete nutritious bowl featuring quinoa, roasted vegetables, fresh greens, avocado, and your choice of additional vegetables or boiled egg for protein. Served with tahini or simple dressing.',
                    ingredients: ['Quinoa', 'Roasted sweet potato', 'Broccoli', 'Chickpeas', 'Avocado', 'Mixed greens', 'Cherry tomatoes', 'Choice of egg or extra vegetables', 'Tahini dressing'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 large bowl (300g)',
                        allergens: 'May contain eggs'
                    },
                    prepTime: 'Assembled fresh to order',
                    temperature: 'Served at room temperature',
                    origin: 'Modern wellness cuisine',
                    allergens: ['May contain eggs (if egg option chosen)']
                }
            },

            // GARLIC BREADS AND TOASTS
            {
                id: 16.1,
                name: 'Plain Garlic Bread',
                category: 'garlic-breadandtoasts',
                price: '₹99',
                description: 'Classic garlic bread with herb butter and fresh garlic',
                emoji: '🧄🍞',
                details: {
                    fullDescription: 'Classic garlic bread made with fresh baguette slices, generously spread with herb butter infused with fresh garlic and parsley. Baked until golden and crispy on the outside while remaining soft inside.',
                    ingredients: ['Fresh baguette', 'Butter', 'Fresh garlic', 'Parsley', 'Oregano', 'Salt', 'Olive oil'],
                    nutrition: {
                        calories: '245',
                        servingSize: '4 slices',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Baked fresh to order',
                    temperature: 'Served hot and crispy',
                    origin: 'Italian inspired',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 16.2,
                name: 'Cheese Garlic Bread',
                category: 'garlic-breadandtoasts',
                price: '₹119',
                description: 'Garlic bread topped with melted mozzarella cheese',
                emoji: '🧀🧄',
                details: {
                    fullDescription: 'Our classic garlic bread elevated with a generous layer of melted mozzarella cheese. The combination of garlic butter and gooey cheese creates the perfect comfort food experience.',
                    ingredients: ['Fresh baguette', 'Butter', 'Fresh garlic', 'Mozzarella cheese', 'Parsley', 'Oregano', 'Parmesan cheese'],
                    nutrition: {
                        calories: '325',
                        servingSize: '4 slices',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Baked fresh with melted cheese',
                    temperature: 'Served hot and bubbly',
                    origin: 'Italian inspired',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 16.3,
                name: 'Masala Garlic Bread',
                category: 'garlic-breadandtoasts',
                price: '₹129',
                description: 'Spiced garlic bread with Indian masala and herbs',
                emoji: '🌶️🧄',
                details: {
                    fullDescription: 'A fusion twist on classic garlic bread, featuring Indian spices and masala blend. Topped with onions, tomatoes, and a special spice mix that gives it a unique Indo-Italian flavor.',
                    ingredients: ['Fresh baguette', 'Butter', 'Garlic', 'Onions', 'Tomatoes', 'Chaat masala', 'Red chili flakes', 'Coriander', 'Cumin'],
                    nutrition: {
                        calories: '285',
                        servingSize: '4 slices',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Prepared with fresh masala mix',
                    temperature: 'Served hot and spicy',
                    origin: 'Indo-Italian fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 16.4,
                name: 'Avocado Toast',
                category: 'garlic-breadandtoasts',
                price: '₹199',
                description: 'Healthy toast topped with fresh avocado, herbs, and seasonings',
                emoji: '🥑🍞',
                details: {
                    fullDescription: 'Healthy and trendy avocado toast made with fresh sourdough bread, topped with perfectly ripe avocado, cherry tomatoes, and a sprinkle of herbs and seasonings. A nutritious and Instagram-worthy dish.',
                    ingredients: ['Sourdough bread', 'Fresh avocado', 'Cherry tomatoes', 'Lime juice', 'Olive oil', 'Sea salt', 'Black pepper', 'Microgreens'],
                    nutrition: {
                        calories: '285',
                        servingSize: '2 slices',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Made fresh with ripe avocados',
                    temperature: 'Served at room temperature',
                    origin: 'Modern healthy cuisine',
                    allergens: ['Gluten']
                }
            },
            {
                id: 16.5,
                name: 'Scrambled Egg Toast',
                category: 'garlic-breadandtoasts',
                price: '₹199',
                description: 'Fluffy scrambled eggs on toasted bread with herbs',
                emoji: '🍳🍞',
                details: {
                    fullDescription: 'Perfectly fluffy scrambled eggs served on toasted artisan bread. The eggs are cooked slowly with butter and cream, seasoned with herbs, and served on warm, crispy toast for a satisfying meal.',
                    ingredients: ['Artisan bread', 'Fresh eggs', 'Butter', 'Heavy cream', 'Chives', 'Salt', 'White pepper', 'Fresh herbs'],
                    nutrition: {
                        calories: '345',
                        servingSize: '2 slices with eggs',
                        allergens: 'Contains gluten, eggs, dairy'
                    },
                    prepTime: 'Eggs scrambled fresh to order',
                    temperature: 'Served hot',
                    origin: 'Classic breakfast dish',
                    allergens: ['Gluten', 'Eggs', 'Dairy']
                }
            },
            // DEEP FRIES
            {
                id: 17.1,
                name: 'Crispy Corn',
                category: 'deep-fries',
                price: '₹169',
                description: 'Golden fried corn kernels with spices and herbs',
                emoji: '🌽✨',
                details: {
                    fullDescription: 'Sweet corn kernels coated in a light, crispy batter and deep-fried until golden. Tossed with aromatic spices, herbs, and a hint of chaat masala for that perfect Indo-Chinese flavor.',
                    ingredients: ['Sweet corn kernels', 'Cornflour', 'All-purpose flour', 'Ginger-garlic paste', 'Green chilies', 'Chaat masala', 'Red chili powder', 'Coriander leaves'],
                    nutrition: {
                        calories: '245',
                        servingSize: '1 portion (150g)',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and crispy',
                    origin: 'Indo-Chinese appetizer',
                    allergens: ['Gluten']
                }
            },
            {
                id: 17.2,
                name: 'Onion Rings',
                category: 'deep-fries',
                price: '₹169',
                description: 'Classic crispy onion rings with golden batter coating',
                emoji: '🧅⭕',
                details: {
                    fullDescription: 'Classic onion rings made with thick-cut onion slices, coated in a seasoned batter and fried until golden and crispy. Served with a tangy dipping sauce for the perfect combination.',
                    ingredients: ['Large onions', 'All-purpose flour', 'Cornstarch', 'Baking powder', 'Paprika', 'Garlic powder', 'Salt', 'Cold water'],
                    nutrition: {
                        calories: '285',
                        servingSize: '8-10 rings',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Battered and fried fresh',
                    temperature: 'Served hot and crispy',
                    origin: 'American classic',
                    allergens: ['Gluten']
                }
            },
            {
                id: 17.3,
                name: 'Baby Corn Sticks',
                category: 'deep-fries',
                price: '₹169',
                description: 'Tender baby corn coated in crispy batter and fried golden',
                emoji: '🌽🥢',
                details: {
                    fullDescription: 'Tender baby corn pieces coated in a light, seasoned batter and deep-fried until crispy. These bite-sized treats are perfect as an appetizer or snack, with a satisfying crunch and sweet corn flavor.',
                    ingredients: ['Baby corn', 'All-purpose flour', 'Cornflour', 'Ginger-garlic paste', 'Soy sauce', 'White pepper', 'Salt', 'Spring onions'],
                    nutrition: {
                        calories: '225',
                        servingSize: '1 portion (12-15 pieces)',
                        allergens: 'Contains gluten, soy'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and crispy',
                    origin: 'Indo-Chinese appetizer',
                    allergens: ['Gluten', 'Soy']
                }
            },
            {
                id: 17.4,
                name: 'Cheese Corn Balls',
                category: 'deep-fries',
                price: '₹199',
                description: 'Creamy cheese and corn mixture formed into balls and fried crispy',
                emoji: '🧀🌽',
                details: {
                    fullDescription: 'Delicious balls made with a creamy mixture of cheese and sweet corn, coated in breadcrumbs and deep-fried until golden. The exterior is crispy while the inside remains creamy and flavorful.',
                    ingredients: ['Sweet corn', 'Mozzarella cheese', 'Cream cheese', 'Breadcrumbs', 'All-purpose flour', 'Herbs', 'Black pepper', 'Salt'],
                    nutrition: {
                        calories: '315',
                        servingSize: '6-8 balls',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Prepared fresh and fried to order',
                    temperature: 'Served hot with melted cheese center',
                    origin: 'Fusion appetizer',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 17.5,
                name: 'Mushroom Croquettes',
                category: 'deep-fries',
                price: '₹199',
                description: 'Creamy mushroom mixture shaped into croquettes and fried golden',
                emoji: '🍄🥖',
                details: {
                    fullDescription: 'Elegant croquettes filled with a creamy mushroom mixture, coated in breadcrumbs and fried until golden brown. These sophisticated appetizers feature a crispy exterior and a rich, creamy mushroom center.',
                    ingredients: ['Mixed mushrooms', 'Butter', 'Flour', 'Milk', 'Breadcrumbs', 'Herbs', 'Garlic', 'White wine', 'Parmesan cheese'],
                    nutrition: {
                        calories: '275',
                        servingSize: '4-5 croquettes',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Mushroom mixture prepared fresh',
                    temperature: 'Served hot and crispy',
                    origin: 'European style',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 17.6,
                name: 'Paneer Croquettes',
                category: 'deep-fries',
                price: '₹199',
                description: 'Spiced paneer mixture formed into croquettes and fried crispy',
                emoji: '🧀🥖',
                details: {
                    fullDescription: 'Indian-style croquettes made with spiced paneer mixture, herbs, and aromatics. Coated in breadcrumbs and fried until golden, these offer a perfect blend of Indian flavors in a crispy package.',
                    ingredients: ['Fresh paneer', 'Potatoes', 'Green chilies', 'Ginger', 'Coriander', 'Garam masala', 'Breadcrumbs', 'Cornflour'],
                    nutrition: {
                        calories: '295',
                        servingSize: '4-5 croquettes',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Paneer mixture prepared fresh',
                    temperature: 'Served hot and crispy',
                    origin: 'Indian fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 17.7,
                name: 'Paneer Pops',
                category: 'deep-fries',
                price: '₹249',
                description: 'Premium paneer cubes marinated in spices and fried to perfection',
                emoji: '🧀💫',
                details: {
                    fullDescription: 'Premium paneer cubes marinated in aromatic spices and herbs, coated in a special batter and fried until golden. These bite-sized delights are crispy outside with soft, flavorful paneer inside.',
                    ingredients: ['Premium paneer', 'Yogurt', 'Ginger-garlic paste', 'Red chili powder', 'Turmeric', 'Garam masala', 'Besan', 'Rice flour', 'Mint chutney'],
                    nutrition: {
                        calories: '385',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains dairy, gluten'
                    },
                    prepTime: 'Marinated and fried fresh',
                    temperature: 'Served hot with mint chutney',
                    origin: 'Indian appetizer',
                    allergens: ['Dairy', 'Gluten']
                }
            },

             // POTATO SNACKS
            {
                id: 18.1,
                name: 'French Fries',
                category: 'potato-snacks',
                price: '₹149',
                description: 'Classic golden French fries, crispy outside and fluffy inside',
                emoji: '🍟',
                details: {
                    fullDescription: 'Classic French fries made from fresh potatoes, cut into perfect strips and fried until golden brown. Crispy on the outside, fluffy on the inside, and seasoned with just the right amount of salt.',
                    ingredients: ['Fresh potatoes', 'Vegetable oil', 'Salt'],
                    nutrition: {
                        calories: '365',
                        servingSize: '1 portion (150g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and crispy',
                    origin: 'Classic American',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.2,
                name: 'Thin Fries',
                category: 'potato-snacks',
                price: '₹149',
                description: 'Extra crispy thin-cut French fries for maximum crunch',
                emoji: '🍟✨',
                details: {
                    fullDescription: 'Ultra-thin cut French fries that deliver maximum crispiness in every bite. These delicate fries are fried to perfection and offer an incredibly satisfying crunch.',
                    ingredients: ['Fresh potatoes', 'Vegetable oil', 'Salt'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 portion (150g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and extra crispy',
                    origin: 'Gourmet style',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.3,
                name: 'French Fries Chat',
                category: 'potato-snacks',
                price: '₹159',
                description: 'Indian-style French fries chat with spices and chutneys',
                emoji: '🍟🌶️',
                details: {
                    fullDescription: 'A fusion twist on French fries, Indian chat style! Crispy fries topped with tangy chutneys, onions, tomatoes, and a blend of Indian spices for a flavorful street food experience.',
                    ingredients: ['French fries', 'Tamarind chutney', 'Mint chutney', 'Onions', 'Tomatoes', 'Chaat masala', 'Red chili powder', 'Coriander leaves'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 portion (180g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Assembled fresh to order',
                    temperature: 'Served hot with cold chutneys',
                    origin: 'Indo-fusion street food',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.4,
                name: 'Peri Peri French Fries',
                category: 'potato-snacks',
                price: '₹179',
                description: 'Spicy French fries seasoned with fiery peri peri spice blend',
                emoji: '🍟🔥',
                details: {
                    fullDescription: 'Crispy French fries tossed in our signature peri peri spice blend, featuring a perfect balance of heat, tanginess, and aromatic herbs. A fiery treat for spice lovers!',
                    ingredients: ['French fries', 'Peri peri spice blend', 'Paprika', 'Chili flakes', 'Garlic powder', 'Lemon juice', 'Herbs', 'Salt'],
                    nutrition: {
                        calories: '375',
                        servingSize: '1 portion (150g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Seasoned fresh to order',
                    temperature: 'Served hot and spicy',
                    origin: 'Portuguese-African inspired',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.5,
                name: 'V Crispers',
                category: 'potato-snacks',
                price: '₹199',
                description: 'Special crispy potato crispers with unique seasoning',
                emoji: '🥔⚡',
                details: {
                    fullDescription: 'Our signature V Crispers - specially cut and seasoned potato crispers that offer an extra crunch and unique flavor profile. These are not your ordinary fries!',
                    ingredients: ['Special cut potatoes', 'Vegetable oil', 'Secret seasoning blend', 'Herbs', 'Spices', 'Salt'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 portion (160g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Prepared with special technique',
                    temperature: 'Served hot and extra crispy',
                    origin: 'House specialty',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.6,
                name: 'KungFu Fries',
                category: 'potato-snacks',
                price: '₹199',
                description: 'Asian-inspired fries with special KungFu sauce and seasonings',
                emoji: '🍟🥋',
                details: {
                    fullDescription: 'Asian-inspired French fries with a kick! Tossed in our special KungFu sauce with Asian seasonings, garlic, and a hint of sweetness that packs a flavorful punch.',
                    ingredients: ['French fries', 'KungFu sauce', 'Soy sauce', 'Garlic', 'Ginger', 'Chili sauce', 'Sesame oil', 'Spring onions', 'Sesame seeds'],
                    nutrition: {
                        calories: '415',
                        servingSize: '1 portion (170g)',
                        allergens: 'Contains soy'
                    },
                    prepTime: 'Tossed fresh in KungFu sauce',
                    temperature: 'Served hot',
                    origin: 'Asian fusion',
                    allergens: ['Soy']
                }
            },
            {
                id: 18.7,
                name: 'Special Potato Wedges',
                category: 'potato-snacks',
                price: '₹199',
                description: 'Thick-cut potato wedges with herbs and special seasoning',
                emoji: '🥔🌿',
                details: {
                    fullDescription: 'Thick-cut potato wedges with skin on, seasoned with herbs and our special spice blend. These hearty wedges are crispy outside and fluffy inside with maximum potato flavor.',
                    ingredients: ['Fresh potatoes with skin', 'Olive oil', 'Rosemary', 'Thyme', 'Garlic powder', 'Paprika', 'Black pepper', 'Sea salt'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 portion (180g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Baked fresh with herbs',
                    temperature: 'Served hot',
                    origin: 'Gourmet style',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.8,
                name: 'Cajun Spiced Potato',
                category: 'potato-snacks',
                price: '₹199',
                description: 'Bold Cajun-spiced potatoes with Louisiana-style seasoning',
                emoji: '🥔🎺',
                details: {
                    fullDescription: 'Potato wedges seasoned with authentic Cajun spice blend featuring paprika, cayenne, oregano, and thyme. These bold-flavored potatoes bring the taste of Louisiana to your plate.',
                    ingredients: ['Potato wedges', 'Cajun spice blend', 'Paprika', 'Cayenne pepper', 'Oregano', 'Thyme', 'Garlic powder', 'Onion powder'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 portion (180g)',
                        allergens: 'Vegan friendly'
                    },
                    prepTime: 'Seasoned with authentic Cajun spices',
                    temperature: 'Served hot and spicy',
                    origin: 'Louisiana Cajun',
                    allergens: ['None - Vegan friendly']
                }
            },
            {
                id: 18.9,
                name: 'Cheese Topped French Fries',
                category: 'potato-snacks',
                price: '₹249',
                description: 'Golden fries topped with melted cheese for ultimate indulgence',
                emoji: '🍟🧀',
                details: {
                    fullDescription: 'Our classic French fries taken to the next level with a generous topping of melted cheese. The perfect combination of crispy fries and gooey, melted cheese creates the ultimate comfort food experience.',
                    ingredients: ['French fries', 'Mozzarella cheese', 'Cheddar cheese', 'Butter', 'Herbs', 'Black pepper'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 portion (200g)',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Topped with melted cheese',
                    temperature: 'Served hot with bubbly cheese',
                    origin: 'American comfort food',
                    allergens: ['Dairy']
                }
            },

            // CRISPY BITES
            {
                id: 19.1,
                name: 'Aloo Bites',
                category: 'crispy-bites',
                price: '₹209',
                description: 'Crispy potato bites available in dry or wet style with flavorful seasonings',
                emoji: '🥔✨',
                details: {
                    fullDescription: 'Golden crispy potato bites made from fresh potatoes, seasoned with aromatic spices. Choose between dry style (tossed with spices) or wet style (with tangy sauce). Served with your choice of dips.',
                    ingredients: ['Fresh potatoes', 'Spice blend', 'Ginger-garlic paste', 'Cornflour', 'Red chili powder', 'Turmeric', 'Garam masala', 'Coriander leaves'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 portion (150g)',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and crispy',
                    origin: 'Indo-Chinese fusion',
                    allergens: ['Gluten'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },
            {
                id: 19.2,
                name: 'Gobi Bites (O-A)',
                category: 'crispy-bites',
                price: '₹239',
                description: 'Crispy cauliflower bites with onion-ajwain flavor, dry or wet style',
                emoji: '🥬🔥',
                details: {
                    fullDescription: 'Fresh cauliflower florets coated in spiced batter with onion and ajwain (carom seeds) for extra flavor. Available in dry or wet preparation with aromatic spices and herbs.',
                    ingredients: ['Fresh cauliflower', 'Onions', 'Ajwain (carom seeds)', 'Besan', 'Rice flour', 'Ginger-garlic paste', 'Green chilies', 'Spice blend'],
                    nutrition: {
                        calories: '245',
                        servingSize: '1 portion (150g)',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Battered and fried fresh',
                    temperature: 'Served hot and crispy',
                    origin: 'Indian street food style',
                    allergens: ['Gluten'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },
            {
                id: 19.3,
                name: 'Baby Corn Bites',
                category: 'crispy-bites',
                price: '₹259',
                description: 'Tender baby corn pieces in crispy coating, available dry or wet',
                emoji: '🌽💫',
                details: {
                    fullDescription: 'Tender baby corn pieces coated in seasoned batter and fried until golden. Choose between dry preparation with spice toss or wet style with flavorful sauce coating.',
                    ingredients: ['Baby corn', 'Cornflour', 'All-purpose flour', 'Ginger-garlic paste', 'Soy sauce', 'Chili sauce', 'Spring onions', 'Sesame oil'],
                    nutrition: {
                        calories: '235',
                        servingSize: '1 portion (140g)',
                        allergens: 'Contains gluten, soy'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and crispy',
                    origin: 'Indo-Chinese appetizer',
                    allergens: ['Gluten', 'Soy'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },
            {
                id: 19.4,
                name: 'Paneer Bites',
                category: 'crispy-bites',
                price: '₹289',
                description: 'Premium paneer cubes in crispy coating, dry or wet preparation',
                emoji: '🧀⚡',
                details: {
                    fullDescription: 'Fresh paneer cubes marinated in spices, coated in seasoned batter and fried until golden. Available in dry style with spice coating or wet style with rich sauce.',
                    ingredients: ['Fresh paneer', 'Yogurt marinade', 'Besan', 'Rice flour', 'Garam masala', 'Red chili powder', 'Turmeric', 'Mint chutney'],
                    nutrition: {
                        calories: '325',
                        servingSize: '1 portion (150g)',
                        allergens: 'Contains dairy, gluten'
                    },
                    prepTime: 'Marinated and fried fresh',
                    temperature: 'Served hot with soft center',
                    origin: 'Indian fusion appetizer',
                    allergens: ['Dairy', 'Gluten'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },
            {
                id: 19.5,
                name: 'Broccoli Bites',
                category: 'crispy-bites',
                price: '₹289',
                description: 'Nutritious broccoli florets in crispy batter, dry or wet style',
                emoji: '🥦✨',
                details: {
                    fullDescription: 'Fresh broccoli florets coated in light, crispy batter and fried until golden. A healthy and delicious option available in both dry and wet preparations with aromatic seasonings.',
                    ingredients: ['Fresh broccoli', 'Cornflour', 'All-purpose flour', 'Garlic', 'Herbs', 'Black pepper', 'Lemon juice', 'Olive oil'],
                    nutrition: {
                        calories: '215',
                        servingSize: '1 portion (140g)',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Blanched and fried fresh',
                    temperature: 'Served hot and crispy',
                    origin: 'Healthy fusion appetizer',
                    allergens: ['Gluten'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },
            {
                id: 19.6,
                name: 'Mushroom Bites',
                category: 'crispy-bites',
                price: '₹289',
                description: 'Juicy mushroom pieces in crispy coating, available dry or wet',
                emoji: '🍄🔥',
                details: {
                    fullDescription: 'Fresh button mushrooms coated in seasoned batter and fried until crispy outside while maintaining their juicy texture inside. Choose your preferred dry or wet style preparation.',
                    ingredients: ['Button mushrooms', 'Cornflour', 'All-purpose flour', 'Herbs', 'Garlic powder', 'White pepper', 'Thyme', 'Butter'],
                    nutrition: {
                        calories: '255',
                        servingSize: '1 portion (140g)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Fried fresh to order',
                    temperature: 'Served hot and juicy',
                    origin: 'Continental style appetizer',
                    allergens: ['Gluten', 'Dairy'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },
            {
                id: 19.7,
                name: 'Egg Bites',
                category: 'crispy-bites',
                price: '₹259',
                description: 'Hard-boiled egg pieces in spiced crispy coating, dry or wet',
                emoji: '🥚⚡',
                details: {
                    fullDescription: 'Hard-boiled eggs cut into pieces, coated in spiced batter and fried until golden and crispy. A protein-rich appetizer available in both dry and wet style preparations.',
                    ingredients: ['Hard-boiled eggs', 'Besan', 'Rice flour', 'Red chili powder', 'Turmeric', 'Garam masala', 'Ginger-garlic paste', 'Curry leaves'],
                    nutrition: {
                        calories: '295',
                        servingSize: '1 portion (150g)',
                        allergens: 'Contains eggs, gluten'
                    },
                    prepTime: 'Eggs boiled fresh, then fried',
                    temperature: 'Served hot and crispy',
                    origin: 'Indian street food style',
                    allergens: ['Eggs', 'Gluten'],
                    styleOptions: ['Dry Style', 'Wet Style'],
                    dipOptions: 'Mayonnaise, Mixed Mayonnaise, Salsa (+₹40)'
                }
            },

            // TACOS & NACHOS
            {
                id: 20.1,
                name: 'Veggie Tacos',
                category: 'tachos&nachos',
                price: '₹209',
                description: 'Fresh vegetable tacos with crisp lettuce, tomatoes, onions, and special sauces in soft tortillas',
                emoji: '🌮🥬',
                details: {
                    fullDescription: 'Delicious vegetarian tacos filled with a colorful mix of fresh vegetables including lettuce, tomatoes, onions, bell peppers, and corn. Served in soft flour tortillas with tangy salsa, creamy guacamole, and sour cream.',
                    ingredients: ['Soft flour tortillas', 'Fresh lettuce', 'Tomatoes', 'Red onions', 'Bell peppers', 'Sweet corn', 'Guacamole', 'Salsa', 'Sour cream', 'Cheddar cheese'],
                    nutrition: {
                        calories: '285',
                        servingSize: '3 tacos',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Assembled fresh to order',
                    temperature: 'Served at room temperature',
                    origin: 'Mexican street food',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 20.2,
                name: 'Veggie Nachos',
                category: 'tachos&nachos',
                price: '₹209',
                description: 'Crispy tortilla chips topped with melted cheese, fresh vegetables, and Mexican sauces',
                emoji: '🧀🌶️',
                details: {
                    fullDescription: 'Crispy tortilla chips loaded with melted cheese, fresh diced tomatoes, onions, jalapeños, and bell peppers. Served with sides of guacamole, salsa, and sour cream for the ultimate nacho experience.',
                    ingredients: ['Tortilla chips', 'Melted cheese sauce', 'Diced tomatoes', 'Red onions', 'Jalapeños', 'Bell peppers', 'Guacamole', 'Salsa', 'Sour cream', 'Fresh cilantro'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 large portion',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Prepared fresh with melted cheese',
                    temperature: 'Served hot',
                    origin: 'Tex-Mex cuisine',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 20.3,
                name: 'Special Masala Nachos',
                category: 'tachos&nachos',
                price: '₹249',
                description: 'Fusion nachos with Indian masala spices, vegetables, and special chutneys',
                emoji: '🌶️🧀',
                details: {
                    fullDescription: 'A unique Indo-Mexican fusion featuring crispy tortilla chips topped with spiced vegetables, melted cheese, and Indian-style chutneys. Enhanced with chaat masala, mint chutney, and tamarind sauce for an exciting flavor combination.',
                    ingredients: ['Tortilla chips', 'Spiced vegetables', 'Melted cheese', 'Mint chutney', 'Tamarind chutney', 'Chaat masala', 'Red onions', 'Tomatoes', 'Coriander leaves', 'Green chilies'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 large portion',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Prepared with special masala blend',
                    temperature: 'Served hot',
                    origin: 'Indo-Mexican fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 20.4,
                name: 'Special Masala Tacos',
                category: 'tachos&nachos',
                price: '₹249',
                description: 'Indian-spiced vegetable tacos with masala seasoning and traditional chutneys',
                emoji: '🌮🌶️',
                details: {
                    fullDescription: 'Innovative fusion tacos featuring Indian-spiced vegetables seasoned with garam masala and cumin. Served in soft tortillas with mint chutney, tamarind sauce, and fresh Indian herbs for a unique East-meets-West experience.',
                    ingredients: ['Soft tortillas', 'Masala-spiced vegetables', 'Mint chutney', 'Tamarind chutney', 'Garam masala', 'Cumin powder', 'Fresh coriander', 'Red onions', 'Green chilies', 'Paneer or potato filling'],
                    nutrition: {
                        calories: '315',
                        servingSize: '3 tacos',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Vegetables spiced fresh to order',
                    temperature: 'Served warm',
                    origin: 'Indo-Mexican fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            // TANDOORI
            {
                id: 21.1,
                name: 'Achari Soya Chaap',
                category: 'tandoori',
                price: '₹299',
                description: 'Tender soya chaap marinated in tangy pickle spices and grilled in tandoor',
                emoji: '🔥🥒',
                details: {
                    fullDescription: 'Succulent soya chaap marinated in a tangy achari (pickle) spice blend featuring mustard oil, fennel seeds, and traditional pickle spices. Grilled to perfection in the tandoor for a smoky, flavorful experience.',
                    ingredients: ['Soya chaap', 'Yogurt', 'Mustard oil', 'Fennel seeds', 'Nigella seeds', 'Fenugreek seeds', 'Red chili powder', 'Turmeric', 'Garam masala', 'Ginger-garlic paste'],
                    nutrition: {
                        calories: '285',
                        servingSize: '6-8 pieces',
                        allergens: 'Contains soy, dairy'
                    },
                    prepTime: 'Marinated 4+ hours, grilled fresh',
                    temperature: 'Served hot from tandoor',
                    origin: 'North Indian tandoori',
                    allergens: ['Soy', 'Dairy'],
                    proteinOptions: ['Soya Chaap', 'Paneer']
                }
            },
            {
                id: 21.2,
                name: 'Achari Paneer',
                category: 'tandoori',
                price: '₹299',
                description: 'Fresh paneer cubes marinated in pickle spices and tandoor grilled',
                emoji: '🧀🔥',
                details: {
                    fullDescription: 'Fresh paneer cubes marinated in aromatic achari spices and grilled in the tandoor. The pickle spice marinade gives the paneer a tangy, spicy flavor with a beautiful charred exterior and soft interior.',
                    ingredients: ['Fresh paneer', 'Yogurt', 'Mustard oil', 'Fennel seeds', 'Nigella seeds', 'Fenugreek seeds', 'Red chili powder', 'Turmeric', 'Garam masala', 'Ginger-garlic paste'],
                    nutrition: {
                        calories: '325',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Marinated 4+ hours, grilled fresh',
                    temperature: 'Served hot from tandoor',
                    origin: 'North Indian tandoori',
                    allergens: ['Dairy'],
                    proteinOptions: ['Soya Chaap', 'Paneer']
                }
            },
            {
                id: 21.3,
                name: 'Afghani Soya Chaap',
                category: 'tandoori',
                price: '₹299',
                description: 'Creamy white marinated soya chaap with mild spices and cashew paste',
                emoji: '🤍🔥',
                details: {
                    fullDescription: 'Tender soya chaap marinated in a rich, creamy Afghani-style marinade made with yogurt, cashew paste, and mild spices. This white-colored tandoori preparation is known for its subtle flavors and creamy texture.',
                    ingredients: ['Soya chaap', 'Thick yogurt', 'Cashew paste', 'Fresh cream', 'White pepper', 'Cardamom powder', 'Ginger-garlic paste', 'Salt', 'Lemon juice', 'Fresh herbs'],
                    nutrition: {
                        calories: '295',
                        servingSize: '6-8 pieces',
                        allergens: 'Contains soy, dairy, nuts'
                    },
                    prepTime: 'Marinated overnight, grilled fresh',
                    temperature: 'Served hot from tandoor',
                    origin: 'Afghani-style tandoori',
                    allergens: ['Soy', 'Dairy', 'Tree nuts (cashews)'],
                    proteinOptions: ['Soya Chaap', 'Paneer']
                }
            },
            {
                id: 21.4,
                name: 'Afghani Paneer',
                category: 'tandoori',
                price: '₹299',
                description: 'Soft paneer in creamy Afghani marinade with cashews and mild spices',
                emoji: '🧀🤍',
                details: {
                    fullDescription: 'Soft paneer cubes marinated in a luxurious Afghani-style preparation featuring cashew paste, fresh cream, and aromatic spices. The result is incredibly tender paneer with a rich, creamy coating.',
                    ingredients: ['Fresh paneer', 'Thick yogurt', 'Cashew paste', 'Fresh cream', 'White pepper', 'Cardamom powder', 'Ginger-garlic paste', 'Salt', 'Lemon juice', 'Fresh herbs'],
                    nutrition: {
                        calories: '345',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains dairy, nuts'
                    },
                    prepTime: 'Marinated overnight, grilled fresh',
                    temperature: 'Served hot from tandoor',
                    origin: 'Afghani-style tandoori',
                    allergens: ['Dairy', 'Tree nuts (cashews)'],
                    proteinOptions: ['Soya Chaap', 'Paneer']
                }
            },
            {
                id: 21.5,
                name: 'Tandoori Soya Chaap',
                category: 'tandoori',
                price: '₹299',
                description: 'Classic red tandoori soya chaap with traditional spices and yogurt marinade',
                emoji: '🔴🔥',
                details: {
                    fullDescription: 'Traditional tandoori soya chaap marinated in yogurt and classic tandoori spices including red chili powder, tandoori masala, and garam masala. Grilled in the tandoor for that authentic smoky flavor and vibrant red color.',
                    ingredients: ['Soya chaap', 'Yogurt', 'Tandoori masala', 'Red chili powder', 'Garam masala', 'Turmeric', 'Ginger-garlic paste', 'Lemon juice', 'Mustard oil', 'Kasuri methi'],
                    nutrition: {
                        calories: '275',
                        servingSize: '6-8 pieces',
                        allergens: 'Contains soy, dairy'
                    },
                    prepTime: 'Marinated 4+ hours, grilled fresh',
                    temperature: 'Served hot from tandoor',
                    origin: 'Classic North Indian tandoori',
                    allergens: ['Soy', 'Dairy'],
                    proteinOptions: ['Soya Chaap', 'Paneer']
                }
            },
            {
                id: 21.6,
                name: 'Tandoori Paneer',
                category: 'tandoori',
                price: '₹299',
                description: 'Traditional red tandoori paneer with authentic spice blend and smoky flavor',
                emoji: '🧀🔴',
                details: {
                    fullDescription: 'Classic tandoori paneer featuring fresh paneer cubes marinated in traditional tandoori spices and yogurt. Grilled in the tandoor until perfectly charred on the outside while remaining soft and flavorful inside.',
                    ingredients: ['Fresh paneer', 'Yogurt', 'Tandoori masala', 'Red chili powder', 'Garam masala', 'Turmeric', 'Ginger-garlic paste', 'Lemon juice', 'Mustard oil', 'Kasuri methi'],
                    nutrition: {
                        calories: '315',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Marinated 4+ hours, grilled fresh',
                    temperature: 'Served hot from tandoor',
                    origin: 'Classic North Indian tandoori',
                    allergens: ['Dairy'],
                    proteinOptions: ['Soya Chaap', 'Paneer']
                }
            },

        

            // MOMOS
            {
                id: 22.1,
                name: 'Veg Momo',
                category: 'momos',
                price: '₹219',
                description: 'Traditional steamed dumplings filled with fresh mixed vegetables and aromatic spices',
                emoji: '🥟🥬',
                details: {
                    fullDescription: 'Authentic Tibetan-style steamed momos filled with a flavorful mixture of fresh cabbage, carrots, onions, and aromatic spices. These delicate dumplings are wrapped in thin dough and steamed to perfection, served with spicy tomato chutney.',
                    ingredients: ['All-purpose flour', 'Fresh cabbage', 'Carrots', 'Onions', 'Ginger', 'Garlic', 'Green chilies', 'Soy sauce', 'Sesame oil', 'Black pepper'],
                    nutrition: {
                        calories: '245',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains gluten, soy'
                    },
                    prepTime: 'Steamed fresh to order (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Tibetan',
                    allergens: ['Gluten', 'Soy']
                }
            },
            {
                id: 22.2,
                name: 'Paneer Momo',
                category: 'momos',
                price: '₹219',
                description: 'Creamy paneer-filled momos with herbs and spices, steamed to perfection',
                emoji: '🥟🧀',
                details: {
                    fullDescription: 'Delicious momos stuffed with fresh paneer, mixed vegetables, and aromatic herbs. The creamy paneer filling is seasoned with traditional spices and wrapped in soft dough, then steamed until tender and juicy.',
                    ingredients: ['All-purpose flour', 'Fresh paneer', 'Cabbage', 'Onions', 'Ginger-garlic paste', 'Green chilies', 'Coriander leaves', 'Garam masala', 'Salt', 'Oil'],
                    nutrition: {
                        calories: '285',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Steamed fresh to order (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-Tibetan fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 22.3,
                name: 'Egg Momo',
                category: 'momos',
                price: '₹259',
                description: 'Protein-rich momos filled with scrambled eggs, vegetables, and savory spices',
                emoji: '🥟🥚',
                details: {
                    fullDescription: 'Hearty momos filled with scrambled eggs mixed with fresh vegetables and aromatic spices. These protein-packed dumplings offer a rich, satisfying flavor and are perfect for egg lovers seeking a unique momo experience.',
                    ingredients: ['All-purpose flour', 'Fresh eggs', 'Cabbage', 'Onions', 'Carrots', 'Ginger', 'Garlic', 'Green chilies', 'Soy sauce', 'Black pepper', 'Spring onions'],
                    nutrition: {
                        calories: '315',
                        servingSize: '8-10 pieces',
                        allergens: 'Contains gluten, eggs, soy'
                    },
                    prepTime: 'Steamed fresh to order (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Modern fusion',
                    allergens: ['Gluten', 'Eggs', 'Soy']
                }
            },

            // WRAPS
            {
                id: 23.1,
                name: 'Veggie Wrap',
                category: 'wraps',
                price: '₹199',
                description: 'Fresh vegetables wrapped in soft tortilla with crisp lettuce and tangy sauces',
                emoji: '🌯🥬',
                details: {
                    fullDescription: 'A healthy and delicious wrap filled with fresh lettuce, tomatoes, cucumbers, bell peppers, and onions. Wrapped in a soft flour tortilla with mayo and mustard sauce for a light, refreshing meal.',
                    ingredients: ['Flour tortilla', 'Fresh lettuce', 'Tomatoes', 'Cucumbers', 'Bell peppers', 'Red onions', 'Mayonnaise', 'Mustard sauce', 'Black pepper', 'Salt'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 large wrap',
                        allergens: 'Contains gluten, eggs (in mayo)'
                    },
                    prepTime: 'Assembled fresh to order',
                    temperature: 'Served at room temperature',
                    origin: 'International healthy cuisine',
                    allergens: ['Gluten', 'Eggs (in mayo)']
                }
            },
            {
                id: 23.2,
                name: 'Veggie Cheese Wrap',
                category: 'wraps',
                price: '₹199',
                description: 'Vegetable wrap enhanced with melted cheese for extra richness and flavor',
                emoji: '🌯🧀',
                details: {
                    fullDescription: 'Our popular veggie wrap elevated with melted cheese. Fresh vegetables including lettuce, tomatoes, and bell peppers are combined with creamy cheese and wrapped in a soft tortilla for a satisfying meal.',
                    ingredients: ['Flour tortilla', 'Fresh vegetables', 'Mozzarella cheese', 'Cheddar cheese', 'Lettuce', 'Tomatoes', 'Bell peppers', 'Mayonnaise', 'Herbs', 'Seasonings'],
                    nutrition: {
                        calories: '345',
                        servingSize: '1 large wrap',
                        allergens: 'Contains gluten, dairy, eggs (in mayo)'
                    },
                    prepTime: 'Assembled and lightly grilled',
                    temperature: 'Served warm',
                    origin: 'International fusion',
                    allergens: ['Gluten', 'Dairy', 'Eggs (in mayo)']
                }
            },
            {
                id: 23.3,
                name: 'Paneer Wrap',
                category: 'wraps',
                price: '₹249',
                description: 'Spiced paneer cubes with fresh vegetables wrapped in soft tortilla',
                emoji: '🌯🧀',
                details: {
                    fullDescription: 'Delicious wrap featuring marinated and grilled paneer cubes combined with fresh vegetables and aromatic spices. The paneer is seasoned with Indian spices and wrapped with crisp vegetables for a fusion experience.',
                    ingredients: ['Flour tortilla', 'Grilled paneer', 'Lettuce', 'Tomatoes', 'Onions', 'Bell peppers', 'Mint chutney', 'Yogurt sauce', 'Garam masala', 'Coriander leaves'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 large wrap',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Paneer grilled fresh, assembled to order',
                    temperature: 'Served warm',
                    origin: 'Indo-international fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 23.4,
                name: 'Makhani Soya Chaap Wrap',
                category: 'wraps',
                price: '₹249',
                description: 'Creamy makhani-style soya chaap with vegetables in a soft tortilla wrap',
                emoji: '🌯🔥',
                details: {
                    fullDescription: 'Rich and flavorful wrap featuring tender soya chaap cooked in creamy makhani sauce, combined with fresh vegetables and wrapped in a soft tortilla. This fusion dish brings together Indian flavors with international presentation.',
                    ingredients: ['Flour tortilla', 'Soya chaap', 'Makhani sauce', 'Tomato puree', 'Fresh cream', 'Lettuce', 'Onions', 'Bell peppers', 'Garam masala', 'Kasuri methi'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 large wrap',
                        allergens: 'Contains gluten, soy, dairy'
                    },
                    prepTime: 'Chaap cooked in makhani sauce, assembled fresh',
                    temperature: 'Served warm',
                    origin: 'Indo-international fusion',
                    allergens: ['Gluten', 'Soy', 'Dairy']
                }
            },
            {
                id: 23.5,
                name: 'Egg Masala Wrap',
                category: 'wraps',
                price: '₹249',
                description: 'Spiced scrambled eggs with masala seasoning and fresh vegetables in tortilla',
                emoji: '🌯🥚',
                details: {
                    fullDescription: 'Hearty wrap filled with spiced scrambled eggs cooked with onions, tomatoes, and aromatic Indian masala spices. Combined with fresh vegetables and wrapped in a soft tortilla for a protein-rich, flavorful meal.',
                    ingredients: ['Flour tortilla', 'Fresh eggs', 'Onions', 'Tomatoes', 'Green chilies', 'Garam masala', 'Turmeric', 'Red chili powder', 'Lettuce', 'Coriander leaves'],
                    nutrition: {
                        calories: '365',
                        servingSize: '1 large wrap',
                        allergens: 'Contains gluten, eggs'
                    },
                    prepTime: 'Eggs cooked fresh with masala spices',
                    temperature: 'Served warm',
                    origin: 'Indo-international fusion',
                    allergens: ['Gluten', 'Eggs']
                }
            },

            // SANDWICHES
            {
                id: 24.1,
                name: 'Bombay Grilled',
                category: 'sandwiches',
                price: '₹249',
                description: 'Classic Bombay-style grilled sandwich with spiced potato filling and chutneys',
                emoji: '🥪🌶️',
                details: {
                    fullDescription: 'Authentic Bombay street-style grilled sandwich featuring spiced potato filling, fresh vegetables, and tangy chutneys. Grilled with butter until golden and crispy, this classic sandwich brings the flavors of Mumbai streets to your plate.',
                    ingredients: ['White bread', 'Spiced potatoes', 'Onions', 'Tomatoes', 'Cucumber', 'Green chutney', 'Tamarind chutney', 'Butter', 'Chaat masala', 'Coriander leaves'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Grilled fresh to order (8-10 mins)',
                    temperature: 'Served hot and crispy',
                    origin: 'Mumbai street food',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.2,
                name: 'Cheese Grilled',
                category: 'sandwiches',
                price: '₹249',
                description: 'Classic grilled cheese sandwich with melted cheese and golden crispy exterior',
                emoji: '🥪🧀',
                details: {
                    fullDescription: 'The ultimate comfort food - a classic grilled cheese sandwich with generous amounts of melted cheese between buttered bread slices, grilled until golden brown and crispy on the outside with gooey melted cheese inside.',
                    ingredients: ['White bread', 'Mozzarella cheese', 'Cheddar cheese', 'Butter', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Grilled fresh to order (6-8 mins)',
                    temperature: 'Served hot with melted cheese',
                    origin: 'Classic American',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.3,
                name: 'Chocolate Grilled',
                category: 'sandwiches',
                price: '₹259',
                description: 'Sweet grilled sandwich with melted chocolate, perfect for dessert lovers',
                emoji: '🥪🍫',
                details: {
                    fullDescription: 'A unique sweet treat featuring melted chocolate between buttered bread slices, grilled until crispy. This dessert sandwich combines the comfort of grilled bread with the indulgence of melted chocolate.',
                    ingredients: ['White bread', 'Dark chocolate', 'Milk chocolate', 'Butter', 'Powdered sugar', 'Vanilla extract'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Grilled carefully to melt chocolate (8-10 mins)',
                    temperature: 'Served warm with melted chocolate',
                    origin: 'Modern dessert sandwich',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.4,
                name: 'Paneer Chilli Grilled',
                category: 'sandwiches',
                price: '₹279',
                description: 'Spicy grilled sandwich with paneer, chilies, and aromatic spices',
                emoji: '🥪🌶️',
                details: {
                    fullDescription: 'A fiery grilled sandwich featuring marinated paneer cubes with green chilies, onions, and spicy seasonings. This Indo-fusion sandwich packs heat and flavor in every bite.',
                    ingredients: ['White bread', 'Paneer cubes', 'Green chilies', 'Red onions', 'Bell peppers', 'Chili sauce', 'Garam masala', 'Coriander leaves', 'Butter', 'Cheese'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Paneer marinated and grilled fresh (10-12 mins)',
                    temperature: 'Served hot and spicy',
                    origin: 'Indo-fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.5,
                name: 'Corn Spinach Grilled',
                category: 'sandwiches',
                price: '₹279',
                description: 'Healthy grilled sandwich with sweet corn, fresh spinach, and cheese',
                emoji: '🥪🌽',
                details: {
                    fullDescription: 'A nutritious grilled sandwich combining sweet corn kernels with fresh spinach leaves and melted cheese. This healthy option is packed with vitamins and flavor, grilled to golden perfection.',
                    ingredients: ['Multigrain bread', 'Sweet corn', 'Fresh spinach', 'Mozzarella cheese', 'Onions', 'Garlic', 'Herbs', 'Olive oil', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Spinach sautéed fresh, grilled to order (10-12 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.6,
                name: 'Exotic Pizza Grilled',
                category: 'sandwiches',
                price: '₹289',
                description: 'Pizza-flavored grilled sandwich with tomato sauce, cheese, and Italian herbs',
                emoji: '🥪🍕',
                details: {
                    fullDescription: 'A creative fusion sandwich that brings pizza flavors to grilled bread. Features pizza sauce, mozzarella cheese, bell peppers, olives, and Italian herbs, grilled until the cheese melts and the bread is crispy.',
                    ingredients: ['White bread', 'Pizza sauce', 'Mozzarella cheese', 'Bell peppers', 'Black olives', 'Onions', 'Oregano', 'Basil', 'Butter', 'Parmesan cheese'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Assembled with pizza toppings and grilled (10-12 mins)',
                    temperature: 'Served hot with bubbly cheese',
                    origin: 'Italian-inspired fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.7,
                name: 'Mushroom Grilled',
                category: 'sandwiches',
                price: '₹299',
                description: 'Savory grilled sandwich with sautéed mushrooms, herbs, and melted cheese',
                emoji: '🥪🍄',
                details: {
                    fullDescription: 'A gourmet grilled sandwich featuring sautéed mushrooms with herbs and garlic, combined with melted cheese. The earthy flavors of mushrooms make this a sophisticated and satisfying choice.',
                    ingredients: ['Artisan bread', 'Button mushrooms', 'Shiitake mushrooms', 'Garlic', 'Thyme', 'Mozzarella cheese', 'Butter', 'White wine', 'Cream', 'Black pepper'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Mushrooms sautéed fresh, grilled to order (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Gourmet European style',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 24.8,
                name: 'Fried Cheese Potato',
                category: 'sandwiches',
                price: '₹309',
                description: 'Indulgent sandwich with fried cheese, crispy potatoes, and special sauces',
                emoji: '🥪🧀',
                details: {
                    fullDescription: 'An indulgent sandwich featuring fried cheese and crispy potato slices with special sauces. This hearty sandwich combines multiple textures and rich flavors for the ultimate comfort food experience.',
                    ingredients: ['White bread', 'Fried cheese slices', 'Crispy potato slices', 'Mayonnaise', 'Ketchup', 'Mustard sauce', 'Lettuce', 'Tomatoes', 'Onions', 'Butter'],
                    nutrition: {
                        calories: '525',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, dairy, eggs (in mayo)'
                    },
                    prepTime: 'Cheese and potatoes fried fresh (15-18 mins)',
                    temperature: 'Served hot and crispy',
                    origin: 'Indulgent comfort food',
                    allergens: ['Gluten', 'Dairy', 'Eggs (in mayo)']
                }
            },
            {
                id: 24.9,
                name: 'Boiled Egg Grilled',
                category: 'sandwiches',
                price: '₹279',
                description: 'Protein-rich grilled sandwich with sliced boiled eggs and fresh vegetables',
                emoji: '🥪🥚',
                details: {
                    fullDescription: 'A protein-packed grilled sandwich featuring sliced boiled eggs with fresh vegetables and creamy mayo. This classic combination provides excellent nutrition and satisfying flavors.',
                    ingredients: ['White bread', 'Boiled eggs', 'Mayonnaise', 'Lettuce', 'Tomatoes', 'Onions', 'Cucumber', 'Salt', 'Black pepper', 'Butter'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, eggs, dairy'
                    },
                    prepTime: 'Eggs boiled fresh, grilled to order (8-10 mins)',
                    temperature: 'Served hot',
                    origin: 'Classic protein sandwich',
                    allergens: ['Gluten', 'Eggs', 'Dairy']
                }
            },
            {
                id: 24.10,
                name: 'Scrambled Egg Grilled',
                category: 'sandwiches',
                price: '₹299',
                description: 'Fluffy scrambled eggs with herbs in a perfectly grilled sandwich',
                emoji: '🥪🍳',
                details: {
                    fullDescription: 'A delicious grilled sandwich filled with fluffy scrambled eggs cooked with herbs and seasonings. The creamy texture of scrambled eggs makes this a perfect breakfast or anytime meal.',
                    ingredients: ['White bread', 'Fresh eggs', 'Butter', 'Cream', 'Chives', 'Salt', 'White pepper', 'Cheese', 'Herbs'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 sandwich (4 slices)',
                        allergens: 'Contains gluten, eggs, dairy'
                    },
                    prepTime: 'Eggs scrambled fresh, grilled to order (10-12 mins)',
                    temperature: 'Served hot',
                    origin: 'Classic breakfast sandwich',
                    allergens: ['Gluten', 'Eggs', 'Dairy']
                }
            },


             //// MAGGI
            {
                id: 25.1,
                name: 'Plain Maggi',
                category: 'maggi',
                price: '₹99',
                description: 'Classic plain Maggi noodles with the original masala flavor',
                emoji: '🍜🔥',
                details: {
                    fullDescription: 'The classic comfort food - plain Maggi noodles cooked to perfection with the iconic masala seasoning. Simple, satisfying, and nostalgic, this is the original taste that everyone loves.',
                    ingredients: ['Maggi noodles', 'Maggi masala', 'Water', 'Salt', 'Oil'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Cooked fresh to order (5-7 mins)',
                    temperature: 'Served hot',
                    origin: 'Classic instant noodles',
                    allergens: ['Gluten']
                }
            },
            {
                id: 25.2,
                name: 'Vegetable Maggi',
                category: 'maggi',
                price: '₹129',
                description: 'Maggi noodles loaded with fresh mixed vegetables for extra nutrition',
                emoji: '🍜🥕',
                details: {
                    fullDescription: 'Nutritious Maggi noodles enhanced with fresh mixed vegetables including carrots, peas, bell peppers, and onions. A healthier version that adds color, crunch, and vitamins to your favorite noodles.',
                    ingredients: ['Maggi noodles', 'Mixed vegetables', 'Carrots', 'Peas', 'Bell peppers', 'Onions', 'Maggi masala', 'Oil', 'Salt'],
                    nutrition: {
                        calories: '325',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Vegetables sautéed fresh (8-10 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy instant noodles',
                    allergens: ['Gluten']
                }
            },
            {
                id: 25.3,
                name: 'Lemon Coriander Maggi',
                category: 'maggi',
                price: '₹149',
                description: 'Refreshing Maggi with tangy lemon and fresh coriander leaves',
                emoji: '🍜🍋',
                details: {
                    fullDescription: 'A refreshing twist on classic Maggi with tangy lemon juice and fresh coriander leaves. This zesty combination adds a burst of freshness and aromatic flavors to your noodles.',
                    ingredients: ['Maggi noodles', 'Fresh lemon juice', 'Coriander leaves', 'Green chilies', 'Ginger', 'Maggi masala', 'Black pepper', 'Oil'],
                    nutrition: {
                        calories: '295',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten'
                    },
                    prepTime: 'Prepared with fresh herbs (6-8 mins)',
                    temperature: 'Served hot',
                    origin: 'Fusion instant noodles',
                    allergens: ['Gluten']
                }
            },
            {
                id: 25.4,
                name: 'Biryani Maggi',
                category: 'maggi',
                price: '₹189',
                description: 'Aromatic Maggi with biryani spices and fragrant basmati rice flavors',
                emoji: '🍜🍚',
                details: {
                    fullDescription: 'A unique fusion combining Maggi noodles with aromatic biryani spices and flavors. This innovative dish brings together the convenience of instant noodles with the rich, fragrant taste of traditional biryani.',
                    ingredients: ['Maggi noodles', 'Biryani masala', 'Fried onions', 'Mint leaves', 'Saffron', 'Basmati rice (small portion)', 'Ghee', 'Whole spices', 'Yogurt'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Cooked with aromatic spices (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-fusion noodles',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 25.5,
                name: 'Garlic Cheese Masala Maggi',
                category: 'maggi',
                price: '₹169',
                description: 'Rich and creamy Maggi with garlic, cheese, and special masala blend',
                emoji: '🍜🧄',
                details: {
                    fullDescription: 'Indulgent Maggi noodles loaded with aromatic garlic, melted cheese, and a special masala blend. This rich and creamy version offers a perfect balance of flavors with a luxurious cheese finish.',
                    ingredients: ['Maggi noodles', 'Fresh garlic', 'Mozzarella cheese', 'Processed cheese', 'Special masala', 'Butter', 'Cream', 'Black pepper', 'Herbs'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Garlic sautéed, cheese melted fresh (10-12 mins)',
                    temperature: 'Served hot and creamy',
                    origin: 'Gourmet instant noodles',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 25.6,
                name: 'Korean Style Maggi',
                category: 'maggi',
                price: '₹169',
                description: 'Spicy Korean-inspired Maggi with kimchi flavors and sesame oil',
                emoji: '🍜🌶️',
                details: {
                    fullDescription: 'A Korean-inspired fusion featuring Maggi noodles with spicy kimchi flavors, sesame oil, and Korean seasonings. This international twist brings K-food vibes to your favorite instant noodles.',
                    ingredients: ['Maggi noodles', 'Kimchi sauce', 'Sesame oil', 'Korean chili flakes', 'Garlic', 'Spring onions', 'Soy sauce', 'Rice vinegar', 'Sesame seeds'],
                    nutrition: {
                        calories: '365',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten, soy, sesame'
                    },
                    prepTime: 'Prepared with Korean seasonings (8-10 mins)',
                    temperature: 'Served hot and spicy',
                    origin: 'Korean-fusion noodles',
                    allergens: ['Gluten', 'Soy', 'Sesame']
                }
            },
            {
                id: 25.7,
                name: 'Maggi Ramen Bowl - Paneer/Egg',
                category: 'maggi',
                price: '₹199',
                description: 'Ramen-style Maggi bowl with choice of paneer or egg and rich broth',
                emoji: '🍜🥚',
                details: {
                    fullDescription: 'A hearty ramen-style bowl featuring Maggi noodles in rich broth with your choice of paneer cubes or boiled egg. This fusion dish combines the comfort of Maggi with the satisfaction of a complete ramen meal.',
                    ingredients: ['Maggi noodles', 'Rich broth', 'Paneer/Boiled egg', 'Spring onions', 'Corn kernels', 'Mushrooms', 'Soy sauce', 'Chili oil', 'Sesame seeds', 'Nori sheets'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 large bowl',
                        allergens: 'Contains gluten, dairy/eggs, soy'
                    },
                    prepTime: 'Broth prepared fresh, assembled to order (15-18 mins)',
                    temperature: 'Served hot in bowl',
                    origin: 'Japanese-fusion noodles',
                    allergens: ['Gluten', 'Dairy/Eggs', 'Soy']
                }
            },
            {
                id: 25.8,
                name: 'Cheese Maggi',
                category: 'maggi',
                price: '₹149',
                description: 'Creamy Maggi noodles loaded with melted cheese for extra richness',
                emoji: '🍜🧀',
                details: {
                    fullDescription: 'Classic Maggi noodles elevated with generous amounts of melted cheese. This creamy, indulgent version transforms simple noodles into a rich and satisfying comfort food experience.',
                    ingredients: ['Maggi noodles', 'Mozzarella cheese', 'Processed cheese', 'Butter', 'Milk', 'Black pepper', 'Herbs', 'Maggi masala'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Cheese melted fresh (8-10 mins)',
                    temperature: 'Served hot and cheesy',
                    origin: 'Comfort food noodles',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 25.9,
                name: 'TNT Spl Egg Maggi',
                category: 'maggi',
                price: '₹199',
                description: 'Special house recipe Maggi with scrambled eggs and secret spice blend',
                emoji: '🍜💥',
                details: {
                    fullDescription: 'Our signature TNT Special featuring Maggi noodles with perfectly scrambled eggs and our secret spice blend. This explosive combination of flavors makes it our most popular specialty dish.',
                    ingredients: ['Maggi noodles', 'Fresh eggs', 'Secret spice blend', 'Onions', 'Tomatoes', 'Green chilies', 'Coriander leaves', 'Special TNT sauce', 'Butter'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 bowl',
                        allergens: 'Contains gluten, eggs, dairy'
                    },
                    prepTime: 'Eggs scrambled fresh with special spices (10-12 mins)',
                    temperature: 'Served hot',
                    origin: 'TNT House Special',
                    allergens: ['Gluten', 'Eggs', 'Dairy']
                }
            },
           
            // BURGERS
            {
                id: 26.1,
                name: 'Paneer Pita Burger',
                category: 'burgers',
                price: '₹249',
                description: 'Grilled paneer patty in soft pita bread with fresh vegetables and sauces',
                emoji: '🍔🧀',
                details: {
                    fullDescription: 'A fusion burger featuring a spiced paneer patty served in soft pita bread with fresh lettuce, tomatoes, onions, and creamy sauces. This Indo-Mediterranean combination offers unique flavors and textures.',
                    ingredients: ['Pita bread', 'Paneer patty', 'Lettuce', 'Tomatoes', 'Red onions', 'Cucumber', 'Mint chutney', 'Yogurt sauce', 'Spices', 'Herbs'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 burger',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Paneer patty grilled fresh (10-12 mins)',
                    temperature: 'Served warm',
                    origin: 'Indo-Mediterranean fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 26.2,
                name: 'Soya Chaap Pita Burger',
                category: 'burgers',
                price: '₹269',
                description: 'Marinated soya chaap in pita bread with vegetables and tangy sauces',
                emoji: '🍔🌱',
                details: {
                    fullDescription: 'A protein-rich burger featuring marinated and grilled soya chaap served in soft pita bread with fresh vegetables and tangy sauces. This healthy option provides excellent plant-based protein.',
                    ingredients: ['Pita bread', 'Marinated soya chaap', 'Lettuce', 'Tomatoes', 'Onions', 'Bell peppers', 'Tahini sauce', 'Mint chutney', 'Spices', 'Herbs'],
                    nutrition: {
                        calories: '365',
                        servingSize: '1 burger',
                        allergens: 'Contains gluten, soy'
                    },
                    prepTime: 'Soya chaap marinated and grilled fresh (12-15 mins)',
                    temperature: 'Served warm',
                    origin: 'Healthy fusion',
                    allergens: ['Gluten', 'Soy']
                }
            },
            {
                id: 26.3,
                name: 'Veg Grilled Burger',
                category: 'burgers',
                price: '₹249',
                description: 'Classic vegetable patty burger with fresh toppings and special sauces',
                emoji: '🍔🥬',
                details: {
                    fullDescription: 'A classic vegetarian burger featuring a grilled vegetable patty made with mixed vegetables and spices, served in a soft bun with lettuce, tomatoes, onions, and special burger sauces.',
                    ingredients: ['Burger bun', 'Mixed vegetable patty', 'Lettuce', 'Tomatoes', 'Onions', 'Pickles', 'Mayonnaise', 'Ketchup', 'Mustard sauce', 'Cheese slice'],
                    nutrition: {
                        calories: '395',
                        servingSize: '1 burger',
                        allergens: 'Contains gluten, dairy, eggs (in mayo)'
                    },
                    prepTime: 'Patty grilled fresh (8-10 mins)',
                    temperature: 'Served hot',
                    origin: 'Classic American style',
                    allergens: ['Gluten', 'Dairy', 'Eggs (in mayo)']
                }
            },
            {
                id: 26.4,
                name: 'Paneer Grilled Burger',
                category: 'burgers',
                price: '₹269',
                description: 'Grilled paneer patty burger with cheese and fresh vegetables',
                emoji: '🍔🧀',
                details: {
                    fullDescription: 'A delicious burger featuring a spiced and grilled paneer patty with melted cheese, fresh vegetables, and creamy sauces. This Indo-Western fusion burger offers rich flavors and satisfying textures.',
                    ingredients: ['Burger bun', 'Grilled paneer patty', 'Cheese slice', 'Lettuce', 'Tomatoes', 'Onions', 'Mayonnaise', 'Mint chutney', 'Spices', 'Herbs'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 burger',
                        allergens: 'Contains gluten, dairy, eggs (in mayo)'
                    },
                    prepTime: 'Paneer patty grilled fresh (10-12 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-Western fusion',
                    allergens: ['Gluten', 'Dairy', 'Eggs (in mayo)']
                }
            },
            {
                id: 26.5,
                name: 'Egg Pita Burger',
                category: 'burgers',
                price: '₹269',
                description: 'Protein-rich egg patty in soft pita bread with fresh vegetables',
                emoji: '🍔🥚',
                details: {
                    fullDescription: 'A protein-packed burger featuring a seasoned egg patty served in soft pita bread with fresh vegetables and creamy sauces. This Mediterranean-style burger is both nutritious and flavorful.',
                    ingredients: ['Pita bread', 'Egg patty', 'Lettuce', 'Tomatoes', 'Onions', 'Cucumber', 'Yogurt sauce', 'Mayonnaise', 'Herbs', 'Spices'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 burger',
                        allergens: 'Contains gluten, eggs, dairy'
                    },
                    prepTime: 'Egg patty prepared fresh (8-10 mins)',
                    temperature: 'Served warm',
                    origin: 'Mediterranean style',
                    allergens: ['Gluten', 'Eggs', 'Dairy']
                }
            },
            {
                id: 26.6,
                name: 'Egg Grilled Burger',
                category: 'burgers',
                price: '₹269',
                description: 'Classic grilled egg burger with cheese and fresh toppings',
                emoji: '🍔🍳',
                details: {
                    fullDescription: 'A classic burger featuring a grilled egg patty with melted cheese, fresh lettuce, tomatoes, and onions. This protein-rich burger is perfect for egg lovers seeking a hearty meal.',
                    ingredients: ['Burger bun', 'Grilled egg patty', 'Cheese slice', 'Lettuce', 'Tomatoes', 'Onions', 'Mayonnaise', 'Ketchup', 'Mustard sauce', 'Pickles'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 burger',
                        allergens: 'Contains gluten, eggs, dairy'
                    },
                    prepTime: 'Egg patty grilled fresh (8-10 mins)',
                    temperature: 'Served hot',
                    origin: 'Classic American style',
                    allergens: ['Gluten', 'Eggs', 'Dairy']
                }
            },

            // PASTA
            {
                id: 27.1,
                name: 'Aglio Olio Pasta',
                category: 'pasta',
                price: '₹219',
                description: 'Classic Italian pasta with garlic, olive oil, and red pepper flakes',
                emoji: '🍝🧄',
                details: {
                    fullDescription: 'Authentic Italian Aglio e Olio featuring al dente pasta tossed with golden garlic, premium olive oil, and a hint of red pepper flakes. Simple ingredients creating extraordinary flavors in this timeless classic.',
                    ingredients: ['Spaghetti pasta', 'Extra virgin olive oil', 'Fresh garlic', 'Red pepper flakes', 'Fresh parsley', 'Parmesan cheese', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Pasta cooked al dente, tossed fresh (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.2,
                name: 'Alfredo Classic Pasta - White',
                category: 'pasta',
                price: '₹269',
                description: 'Creamy white sauce pasta with rich Alfredo sauce and parmesan',
                emoji: '🍝🤍',
                details: {
                    fullDescription: 'Rich and creamy Alfredo pasta featuring a velvety white sauce made with butter, cream, and freshly grated Parmesan cheese. This indulgent classic delivers restaurant-quality comfort food.',
                    ingredients: ['Fettuccine pasta', 'Heavy cream', 'Butter', 'Parmesan cheese', 'Garlic', 'White pepper', 'Nutmeg', 'Fresh herbs', 'Salt'],
                    nutrition: {
                        calories: '525',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Sauce prepared fresh, pasta tossed to order (15-18 mins)',
                    temperature: 'Served hot and creamy',
                    origin: 'Classic Italian-American',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.3,
                name: 'Florence Tomato Pasta - Red',
                category: 'pasta',
                price: '₹269',
                description: 'Traditional red sauce pasta with rich tomato base and Italian herbs',
                emoji: '🍝🍅',
                details: {
                    fullDescription: 'Classic Florentine-style pasta in rich tomato sauce with fresh basil, oregano, and Italian herbs. This traditional red sauce pasta brings the authentic flavors of Tuscany to your plate.',
                    ingredients: ['Penne pasta', 'San Marzano tomatoes', 'Fresh basil', 'Oregano', 'Garlic', 'Onions', 'Olive oil', 'Parmesan cheese', 'Red wine', 'Italian herbs'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Tomato sauce simmered fresh (18-20 mins)',
                    temperature: 'Served hot',
                    origin: 'Florentine Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.4,
                name: 'Mixto Sauce Pasta - Pink',
                category: 'pasta',
                price: '₹319',
                description: 'Perfect blend of white and red sauces creating a delicious pink sauce',
                emoji: '🍝💗',
                details: {
                    fullDescription: 'A harmonious blend of creamy Alfredo and rich tomato sauce creating the perfect pink sauce pasta. This fusion combines the best of both worlds - creamy richness with tangy tomato flavors.',
                    ingredients: ['Fusilli pasta', 'Tomato sauce', 'Cream sauce', 'Heavy cream', 'Tomato puree', 'Garlic', 'Onions', 'Parmesan cheese', 'Italian herbs', 'Butter'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Both sauces prepared and blended fresh (20-22 mins)',
                    temperature: 'Served hot',
                    origin: 'Italian-American fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.5,
                name: 'Mushroom Cream Pasta - White',
                category: 'pasta',
                price: '₹319',
                description: 'Creamy white sauce pasta loaded with sautéed mushrooms',
                emoji: '🍝🍄',
                details: {
                    fullDescription: 'Luxurious pasta featuring sautéed mushrooms in a rich cream sauce. Multiple varieties of mushrooms are cooked to perfection and combined with a velvety white sauce for an earthy, sophisticated flavor.',
                    ingredients: ['Penne pasta', 'Button mushrooms', 'Shiitake mushrooms', 'Heavy cream', 'White wine', 'Garlic', 'Thyme', 'Parmesan cheese', 'Butter', 'Black pepper'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Mushrooms sautéed fresh, cream sauce prepared (18-20 mins)',
                    temperature: 'Served hot',
                    origin: 'Gourmet Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.6,
                name: 'Spinach Cream Pasta - White',
                category: 'pasta',
                price: '₹319',
                description: 'Nutritious pasta with fresh spinach in creamy white sauce',
                emoji: '🍝🥬',
                details: {
                    fullDescription: 'Healthy and delicious pasta featuring fresh spinach leaves in a creamy white sauce. This nutritious option combines the goodness of leafy greens with the indulgence of cream sauce.',
                    ingredients: ['Fusilli pasta', 'Fresh spinach', 'Heavy cream', 'Ricotta cheese', 'Garlic', 'Nutmeg', 'Parmesan cheese', 'Butter', 'White pepper', 'Lemon zest'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Spinach wilted fresh, cream sauce prepared (15-18 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.7,
                name: 'Bianca Loaded Pasta - White',
                category: 'pasta',
                price: '₹329',
                description: 'Loaded white sauce pasta with multiple vegetables and cheese',
                emoji: '🍝🤍',
                details: {
                    fullDescription: 'A loaded white sauce pasta featuring multiple vegetables, herbs, and extra cheese. This hearty dish is packed with bell peppers, mushrooms, olives, and other fresh ingredients in a rich cream base.',
                    ingredients: ['Penne pasta', 'Mixed vegetables', 'Bell peppers', 'Mushrooms', 'Olives', 'Heavy cream', 'Mozzarella cheese', 'Parmesan cheese', 'Herbs', 'Garlic'],
                    nutrition: {
                        calories: '525',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Vegetables sautéed, loaded with toppings (20-22 mins)',
                    temperature: 'Served hot',
                    origin: 'Loaded Italian-American',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.8,
                name: 'Rosso Loaded Pasta - Red',
                category: 'pasta',
                price: '₹329',
                description: 'Loaded red sauce pasta with vegetables and Italian herbs',
                emoji: '🍝❤️',
                details: {
                    fullDescription: 'A hearty red sauce pasta loaded with fresh vegetables, herbs, and aromatic spices. This robust dish features a rich tomato base with bell peppers, mushrooms, and Italian seasonings.',
                    ingredients: ['Fusilli pasta', 'Rich tomato sauce', 'Bell peppers', 'Mushrooms', 'Onions', 'Olives', 'Fresh basil', 'Oregano', 'Parmesan cheese', 'Garlic'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Vegetables sautéed, tomato sauce simmered (20-22 mins)',
                    temperature: 'Served hot',
                    origin: 'Loaded Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.9,
                name: 'Creamy Rustic Broccoli - Pink',
                category: 'pasta',
                price: '₹349',
                description: 'Rustic pasta with fresh broccoli in creamy pink sauce',
                emoji: '🍝🥦',
                details: {
                    fullDescription: 'A rustic Italian pasta featuring fresh broccoli florets in a creamy pink sauce. This healthy yet indulgent dish combines the nutritional benefits of broccoli with the rich flavors of mixed cream and tomato sauce.',
                    ingredients: ['Penne pasta', 'Fresh broccoli', 'Pink sauce', 'Heavy cream', 'Tomato puree', 'Garlic', 'Parmesan cheese', 'Red pepper flakes', 'Olive oil', 'Italian herbs'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Broccoli blanched fresh, pink sauce prepared (18-20 mins)',
                    temperature: 'Served hot',
                    origin: 'Rustic Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.10,
                name: 'Mixto Veggie Pasta - Pink',
                category: 'pasta',
                price: '₹349',
                description: 'Mixed vegetables pasta in delicious pink sauce blend',
                emoji: '🍝🥕',
                details: {
                    fullDescription: 'A colorful pasta dish featuring a medley of fresh vegetables in our signature pink sauce. This nutritious option combines the creaminess of white sauce with the tanginess of tomato sauce, loaded with seasonal vegetables.',
                    ingredients: ['Fusilli pasta', 'Mixed vegetables', 'Carrots', 'Bell peppers', 'Zucchini', 'Pink sauce', 'Heavy cream', 'Tomato sauce', 'Parmesan cheese', 'Italian herbs'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Vegetables sautéed fresh, pink sauce prepared (20-22 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy Italian fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 27.11,
                name: 'Makhani Pasta',
                category: 'pasta',
                price: '₹349',
                description: 'Indo-Italian fusion pasta in rich and creamy makhani sauce',
                emoji: '🍝🔥',
                details: {
                    fullDescription: 'A unique Indo-Italian fusion featuring pasta in rich, creamy makhani sauce. This innovative dish combines the comfort of Italian pasta with the bold, aromatic flavors of Indian makhani gravy.',
                    ingredients: ['Penne pasta', 'Makhani sauce', 'Tomato puree', 'Heavy cream', 'Butter', 'Garam masala', 'Kasuri methi', 'Ginger-garlic paste', 'Cashews', 'Indian spices'],
                    nutrition: {
                        calories: '525',
                        servingSize: '1 plate',
                        allergens: 'Contains gluten, dairy, nuts'
                    },
                    prepTime: 'Makhani sauce prepared fresh, pasta tossed (22-25 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-Italian fusion',
                    allergens: ['Gluten', 'Dairy', 'Nuts']
                }
            },

                   // PIZZA
            {
                id: 28.1,
                name: 'Margherita',
                category: 'pizza',
                price: '₹229 (6") / ₹159 (9")',
                description: 'Classic Italian pizza with fresh tomato sauce, mozzarella, and basil',
                emoji: '🍕🌿',
                details: {
                    fullDescription: 'The timeless classic Margherita pizza featuring San Marzano tomato sauce, fresh mozzarella cheese, and aromatic basil leaves. This authentic Italian pizza represents the colors of the Italian flag and delivers pure, simple flavors.',
                    ingredients: ['Pizza dough', 'San Marzano tomato sauce', 'Fresh mozzarella', 'Fresh basil', 'Extra virgin olive oil', 'Sea salt', 'Oregano'],
                    nutrition: {
                        calories: '285 (6") / 425 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Wood-fired oven baked fresh (8-12 mins)',
                    temperature: 'Served hot from oven',
                    origin: 'Traditional Italian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.2,
                name: 'Corn Burst',
                category: 'pizza',
                price: '₹279 (6") / ₹219 (9")',
                description: 'Delicious pizza loaded with sweet corn kernels and cheese',
                emoji: '🍕🌽',
                details: {
                    fullDescription: 'A popular vegetarian pizza featuring sweet corn kernels generously spread over tomato sauce and mozzarella cheese. The natural sweetness of corn creates a delightful contrast with the savory cheese and tangy sauce.',
                    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Sweet corn kernels', 'Bell peppers', 'Onions', 'Oregano', 'Olive oil'],
                    nutrition: {
                        calories: '325 (6") / 485 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Fresh corn added, wood-fired baked (10-12 mins)',
                    temperature: 'Served hot',
                    origin: 'Popular vegetarian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.3,
                name: 'Maharaja',
                category: 'pizza',
                price: '₹289 (6") / ₹229 (9")',
                description: 'Royal pizza with paneer, vegetables, and aromatic Indian spices',
                emoji: '🍕👑',
                details: {
                    fullDescription: 'A regal pizza fit for a king, featuring marinated paneer cubes, mixed vegetables, and aromatic Indian spices. This fusion pizza combines Italian techniques with Indian flavors for a truly royal experience.',
                    ingredients: ['Pizza dough', 'Spiced tomato sauce', 'Paneer cubes', 'Bell peppers', 'Onions', 'Mushrooms', 'Mozzarella cheese', 'Indian spices', 'Coriander'],
                    nutrition: {
                        calories: '385 (6") / 525 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Paneer marinated, vegetables sautéed (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-Italian fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.4,
                name: 'Napoli Classic',
                category: 'pizza',
                price: '₹329 (6") / ₹259 (9")',
                description: 'Authentic Neapolitan pizza with buffalo mozzarella and San Marzano tomatoes',
                emoji: '🍕🇮🇹',
                details: {
                    fullDescription: 'An authentic Neapolitan pizza made according to traditional methods with buffalo mozzarella, San Marzano tomatoes, and fresh basil. This classic represents the true essence of Naples pizza-making tradition.',
                    ingredients: ['Neapolitan dough', 'San Marzano tomatoes', 'Buffalo mozzarella', 'Fresh basil', 'Extra virgin olive oil', 'Sea salt', 'Garlic'],
                    nutrition: {
                        calories: '365 (6") / 495 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Traditional wood-fired preparation (10-12 mins)',
                    temperature: 'Served immediately hot',
                    origin: 'Authentic Neapolitan',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.5,
                name: 'Manali',
                category: 'pizza',
                price: '₹349 (6") / ₹269 (9")',
                description: 'Mountain-inspired pizza with exotic vegetables and herbs',
                emoji: '🍕🏔️',
                details: {
                    fullDescription: 'Inspired by the mountain town of Manali, this pizza features exotic vegetables, mountain herbs, and a unique blend of cheeses. The fresh, crisp flavors evoke the clean mountain air and natural ingredients.',
                    ingredients: ['Artisan dough', 'Herb-infused sauce', 'Mixed exotic vegetables', 'Mountain herbs', 'Goat cheese', 'Mozzarella', 'Pine nuts', 'Olive oil'],
                    nutrition: {
                        calories: '425 (6") / 565 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy, nuts'
                    },
                    prepTime: 'Exotic vegetables prepared fresh (15-18 mins)',
                    temperature: 'Served hot',
                    origin: 'Mountain-inspired fusion',
                    allergens: ['Gluten', 'Dairy', 'Nuts']
                }
            },
            {
                id: 28.6,
                name: 'Casa Mellino',
                category: 'pizza',
                price: '₹389 (6") / ₹299 (9")',
                description: 'Gourmet house special with premium ingredients and truffle oil',
                emoji: '🍕✨',
                details: {
                    fullDescription: 'Our signature gourmet pizza featuring premium ingredients including truffle oil, artisanal cheeses, and carefully selected vegetables. This house special represents the pinnacle of our pizza craftsmanship.',
                    ingredients: ['Sourdough base', 'Truffle-infused sauce', 'Burrata cheese', 'Prosciutto', 'Arugula', 'Cherry tomatoes', 'Truffle oil', 'Parmesan', 'Balsamic glaze'],
                    nutrition: {
                        calories: '485 (6") / 625 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Premium ingredients assembled fresh (18-20 mins)',
                    temperature: 'Served hot',
                    origin: 'Gourmet house special',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.7,
                name: 'Veggie Supreme',
                category: 'pizza',
                price: '₹359 (6") / ₹279 (9")',
                description: 'Loaded with fresh vegetables, olives, and multiple cheese varieties',
                emoji: '🍕🥬',
                details: {
                    fullDescription: 'The ultimate vegetarian pizza loaded with fresh bell peppers, mushrooms, onions, olives, tomatoes, and multiple cheese varieties. This supreme combination offers a perfect balance of flavors and textures.',
                    ingredients: ['Pizza dough', 'Rich tomato sauce', 'Bell peppers', 'Mushrooms', 'Red onions', 'Black olives', 'Cherry tomatoes', 'Mozzarella', 'Cheddar', 'Oregano'],
                    nutrition: {
                        calories: '445 (6") / 585 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Multiple vegetables prepared fresh (15-18 mins)',
                    temperature: 'Served hot',
                    origin: 'Loaded vegetarian',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.8,
                name: 'Tikka Paneer',
                category: 'pizza',
                price: '₹369 (6") / ₹289 (9")',
                description: 'Tandoor-style marinated paneer with onions and peppers',
                emoji: '🍕🔥',
                details: {
                    fullDescription: 'A fusion pizza featuring tandoor-style marinated paneer tikka with bell peppers, onions, and aromatic spices. This Indo-Italian creation brings the smoky flavors of Indian tandoor cooking to pizza.',
                    ingredients: ['Pizza dough', 'Tandoori sauce', 'Paneer tikka', 'Bell peppers', 'Red onions', 'Mozzarella cheese', 'Tandoori spices', 'Mint chutney', 'Coriander'],
                    nutrition: {
                        calories: '465 (6") / 605 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy'
                    },
                    prepTime: 'Paneer marinated in tandoori spices (15-18 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-Italian fusion',
                    allergens: ['Gluten', 'Dairy']
                }
            },
            {
                id: 28.9,
                name: 'Scrambled Delight',
                category: 'pizza',
                price: '₹389 (6") / ₹299 (9")',
                description: 'Unique pizza topped with creamy scrambled eggs and herbs',
                emoji: '🍕🍳',
                details: {
                    fullDescription: 'An innovative breakfast-inspired pizza featuring creamy scrambled eggs, fresh herbs, and cheese. This unique creation combines the comfort of breakfast with the satisfaction of pizza.',
                    ingredients: ['Pizza dough', 'White sauce base', 'Scrambled eggs', 'Fresh herbs', 'Mozzarella cheese', 'Chives', 'Black pepper', 'Butter', 'Cream'],
                    nutrition: {
                        calories: '485 (6") / 625 (9")',
                        servingSize: '1 pizza',
                        allergens: 'Contains gluten, dairy, eggs'
                    },
                    prepTime: 'Eggs scrambled fresh, assembled hot (12-15 mins)',
                    temperature: 'Served immediately hot',
                    origin: 'Breakfast-inspired fusion',
                    allergens: ['Gluten', 'Dairy', 'Eggs']
                }
            },
            // MILLET KITCHIDI
            {
                id: 29.1,
                name: 'Plain Dal Kitchidi',
                category: 'millet-kitchidi',
                price: '₹199',
                description: 'Nutritious millet and lentil porridge with aromatic spices',
                emoji: '🥣🌾',
                details: {
                    fullDescription: 'A wholesome and nutritious dish combining millet grains with lentils, cooked to a creamy consistency with aromatic spices. This traditional comfort food is easy to digest and packed with protein and fiber.',
                    ingredients: ['Millet grains', 'Yellow lentils', 'Turmeric', 'Cumin seeds', 'Ginger', 'Green chilies', 'Ghee', 'Salt', 'Water', 'Coriander leaves'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Slow-cooked for perfect texture (25-30 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 29.2,
                name: 'Vegetable Kitchidi',
                category: 'millet-kitchidi',
                price: '₹249',
                description: 'Millet kitchidi enriched with seasonal vegetables and nutrients',
                emoji: '🥣🥕',
                details: {
                    fullDescription: 'Enhanced version of traditional kitchidi with seasonal vegetables like carrots, peas, and beans. This nutritious meal provides complete protein, fiber, and essential vitamins in a comforting, easy-to-digest form.',
                    ingredients: ['Millet grains', 'Mixed lentils', 'Carrots', 'Green peas', 'Beans', 'Onions', 'Tomatoes', 'Ginger-garlic', 'Spices', 'Ghee'],
                    nutrition: {
                        calories: '325',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Vegetables cooked with millet (30-35 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy traditional',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 29.3,
                name: 'Palak Kitchidi',
                category: 'millet-kitchidi',
                price: '₹289',
                description: 'Iron-rich kitchidi with fresh spinach and aromatic spices',
                emoji: '🥣🥬',
                details: {
                    fullDescription: 'A nutritious green kitchidi featuring fresh spinach leaves blended with millet and lentils. This iron-rich dish is perfect for those seeking healthy comfort food with the added benefits of leafy greens.',
                    ingredients: ['Millet grains', 'Lentils', 'Fresh spinach', 'Onions', 'Ginger', 'Green chilies', 'Cumin', 'Coriander', 'Ghee', 'Spices'],
                    nutrition: {
                        calories: '305',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Spinach pureed fresh, slow-cooked (30-35 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 29.4,
                name: 'Paneer Kitchidi',
                category: 'millet-kitchidi',
                price: '₹299',
                description: 'Protein-rich kitchidi with soft paneer cubes and herbs',
                emoji: '🥣🧀',
                details: {
                    fullDescription: 'A protein-packed version of traditional kitchidi enhanced with soft paneer cubes. This creamy, satisfying dish combines the comfort of kitchidi with the richness of fresh paneer for a complete meal.',
                    ingredients: ['Millet grains', 'Lentils', 'Fresh paneer', 'Onions', 'Tomatoes', 'Ginger-garlic', 'Cumin', 'Coriander', 'Ghee', 'Cream', 'Spices'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Paneer added fresh, slow-cooked (35-40 mins)',
                    temperature: 'Served hot',
                    origin: 'Protein-rich Indian',
                    allergens: ['Dairy']
                }
            },
// CURRY RICE BOWLS
            {
                id: 30.1,
                name: 'Jeera Rice + Masala Dal Gravy',
                category: 'curry-rice-bowls',
                price: '₹249',
                description: 'Aromatic cumin rice paired with rich and spicy masala dal gravy',
                emoji: '🍚🌶️',
                details: {
                    fullDescription: 'Fragrant jeera rice cooked with whole cumin seeds and aromatic spices, served with a rich masala dal gravy made from mixed lentils, tomatoes, and traditional Indian spices. This classic combination offers comfort and nutrition in every bite.',
                    ingredients: ['Basmati rice', 'Cumin seeds', 'Mixed lentils', 'Tomatoes', 'Onions', 'Ginger-garlic', 'Turmeric', 'Red chili powder', 'Garam masala', 'Ghee'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Rice and dal cooked fresh (25-30 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 30.2,
                name: 'Lemon Fusion Rice + Tadkha Dahi',
                category: 'curry-rice-bowls',
                price: '₹309',
                description: 'Tangy lemon rice with tempered yogurt curry for a refreshing meal',
                emoji: '🍚🍋',
                details: {
                    fullDescription: 'Zesty lemon rice infused with curry leaves, mustard seeds, and turmeric, paired with tadkha dahi - a tempered yogurt curry with aromatic spices. This South Indian inspired combination is light, flavorful, and refreshing.',
                    ingredients: ['Basmati rice', 'Fresh lemon juice', 'Curry leaves', 'Mustard seeds', 'Fresh yogurt', 'Cumin seeds', 'Green chilies', 'Ginger', 'Turmeric', 'Oil'],
                    nutrition: {
                        calories: '345',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Rice tempered fresh, yogurt curry prepared (20-25 mins)',
                    temperature: 'Served warm',
                    origin: 'South Indian fusion',
                    allergens: ['Dairy']
                }
            },
            {
                id: 30.3,
                name: 'Herbed Rice + Rich Tomato Gravy',
                category: 'curry-rice-bowls',
                price: '₹349',
                description: 'Aromatic herb-infused rice with rich tomato-based curry gravy',
                emoji: '🍚🍅',
                details: {
                    fullDescription: 'Fragrant rice cooked with fresh herbs like mint, coriander, and dill, served with a rich tomato gravy made from ripe tomatoes, onions, and aromatic spices. This combination offers a perfect balance of freshness and richness.',
                    ingredients: ['Basmati rice', 'Fresh mint', 'Coriander leaves', 'Dill', 'Ripe tomatoes', 'Onions', 'Garlic', 'Indian spices', 'Cream', 'Ghee'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Herbs chopped fresh, tomato gravy simmered (30-35 mins)',
                    temperature: 'Served hot',
                    origin: 'Gourmet Indian',
                    allergens: ['Dairy']
                }
            },
            {
                id: 30.4,
                name: 'Palak Rice + Tandoor Gravy',
                category: 'curry-rice-bowls',
                price: '₹349',
                description: 'Nutritious spinach rice with smoky tandoor-style gravy',
                emoji: '🍚🥬',
                details: {
                    fullDescription: 'Healthy spinach-infused rice cooked with pureed palak and aromatic spices, paired with a smoky tandoor-style gravy featuring rich tomatoes, cream, and traditional tandoor spices. A nutritious and flavorful combination.',
                    ingredients: ['Basmati rice', 'Fresh spinach puree', 'Tandoor spices', 'Tomato puree', 'Heavy cream', 'Onions', 'Ginger-garlic', 'Kasuri methi', 'Butter', 'Spices'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Spinach pureed fresh, tandoor gravy prepared (35-40 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy Indian fusion',
                    allergens: ['Dairy']
                }
            },
            {
                id: 30.5,
                name: 'Mediterranean Rice + Paneer Makhani Gravy',
                category: 'curry-rice-bowls',
                price: '₹389',
                description: 'Mediterranean-style rice with creamy paneer makhani curry',
                emoji: '🍚🧀',
                details: {
                    fullDescription: 'Mediterranean-inspired rice cooked with olive oil, herbs, and sun-dried tomatoes, served with rich paneer makhani gravy featuring soft paneer cubes in a creamy tomato-based curry with aromatic Indian spices.',
                    ingredients: ['Basmati rice', 'Olive oil', 'Mediterranean herbs', 'Sun-dried tomatoes', 'Fresh paneer', 'Tomato puree', 'Heavy cream', 'Cashews', 'Garam masala', 'Butter'],
                    nutrition: {
                        calories: '525',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy, nuts'
                    },
                    prepTime: 'Mediterranean rice prepared, makhani gravy simmered (40-45 mins)',
                    temperature: 'Served hot',
                    origin: 'Mediterranean-Indian fusion',
                    allergens: ['Dairy', 'Nuts']
                }
            },
            {
                id: 30.6,
                name: 'Burnt Garlic Rice + Soya Makhani Gravy',
                category: 'curry-rice-bowls',
                price: '₹389',
                description: 'Aromatic burnt garlic rice with protein-rich soya makhani curry',
                emoji: '🍚🧄',
                details: {
                    fullDescription: 'Fragrant rice cooked with burnt garlic for a deep, smoky flavor, paired with soya chunks in rich makhani gravy. This protein-packed combination offers the indulgence of makhani with the health benefits of soya.',
                    ingredients: ['Basmati rice', 'Garlic cloves', 'Soya chunks', 'Tomato puree', 'Heavy cream', 'Cashew paste', 'Onions', 'Ginger', 'Makhani spices', 'Butter'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy, nuts, soy'
                    },
                    prepTime: 'Garlic burnt to perfection, soya makhani prepared (35-40 mins)',
                    temperature: 'Served hot',
                    origin: 'Fusion Indian',
                    allergens: ['Dairy', 'Nuts', 'Soy']
                }
            },
            {
                id: 30.7,
                name: 'Sauteed Rice + Omelette Gravy',
                category: 'curry-rice-bowls',
                price: '₹349',
                description: 'Perfectly sautéed rice with rich and creamy omelette curry',
                emoji: '🍚🍳',
                details: {
                    fullDescription: 'Expertly sautéed rice with vegetables and aromatic spices, served with a unique omelette gravy featuring fluffy egg omelettes in a rich, creamy curry base. This innovative combination brings together comfort and creativity.',
                    ingredients: ['Basmati rice', 'Mixed vegetables', 'Fresh eggs', 'Onions', 'Tomatoes', 'Cream', 'Ginger-garlic', 'Curry spices', 'Fresh herbs', 'Oil'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 bowl',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Rice sautéed fresh, omelette gravy prepared (30-35 mins)',
                    temperature: 'Served hot',
                    origin: 'Creative Indian fusion',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            // RICE BOWLS
            {
                id: 31.1,
                name: 'Jeera Rice',
                category: 'rice-bowls',
                price: '₹169',
                description: 'Aromatic basmati rice cooked with cumin seeds and whole spices',
                emoji: '🍚✨',
                details: {
                    fullDescription: 'Classic jeera rice made with premium basmati rice, whole cumin seeds, and aromatic spices. This simple yet flavorful rice dish is perfect as a side or a light meal, offering the perfect balance of aroma and taste.',
                    ingredients: ['Basmati rice', 'Cumin seeds', 'Bay leaves', 'Green cardamom', 'Cinnamon stick', 'Ghee', 'Salt', 'Water'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Rice cooked with whole spices (18-20 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 31.2,
                name: 'Dum Aloo Rice',
                category: 'rice-bowls',
                price: '₹199',
                description: 'Flavorful rice bowl with spiced baby potatoes in rich gravy',
                emoji: '🍚🥔',
                details: {
                    fullDescription: 'Aromatic basmati rice served with dum aloo - baby potatoes cooked in a rich, spiced gravy with yogurt, tomatoes, and traditional Indian spices. This hearty combination offers comfort and satisfaction in every bite.',
                    ingredients: ['Basmati rice', 'Baby potatoes', 'Yogurt', 'Tomatoes', 'Onions', 'Ginger-garlic paste', 'Red chili powder', 'Garam masala', 'Coriander', 'Ghee'],
                    nutrition: {
                        calories: '365',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Potatoes slow-cooked in spices (35-40 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Indian',
                    allergens: ['Dairy']
                }
            },
            {
                id: 31.3,
                name: 'Vegetable Rice',
                category: 'rice-bowls',
                price: '₹209',
                description: 'Nutritious rice bowl loaded with fresh seasonal vegetables',
                emoji: '🍚🥕',
                details: {
                    fullDescription: 'Wholesome rice bowl featuring basmati rice cooked with a medley of fresh seasonal vegetables including carrots, peas, beans, and bell peppers. This colorful and nutritious dish provides a complete meal with balanced flavors.',
                    ingredients: ['Basmati rice', 'Mixed vegetables', 'Carrots', 'Green peas', 'French beans', 'Bell peppers', 'Onions', 'Cumin seeds', 'Turmeric', 'Oil'],
                    nutrition: {
                        calories: '325',
                        servingSize: '1 bowl',
                        allergens: 'None'
                    },
                    prepTime: 'Vegetables sautéed fresh with rice (25-30 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy Indian',
                    allergens: ['None']
                }
            },
            {
                id: 31.4,
                name: 'Vegetable Masala Rice',
                category: 'rice-bowls',
                price: '₹219',
                description: 'Spiced vegetable rice with aromatic masala and fresh herbs',
                emoji: '🍚🌶️',
                details: {
                    fullDescription: 'Flavorful masala rice loaded with vegetables and aromatic spices. This dish features basmati rice cooked with mixed vegetables, onions, tomatoes, and a special blend of masala spices for an enhanced taste experience.',
                    ingredients: ['Basmati rice', 'Mixed vegetables', 'Onions', 'Tomatoes', 'Ginger-garlic', 'Masala spices', 'Red chili powder', 'Garam masala', 'Fresh coriander', 'Ghee'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Vegetables cooked with masala spices (30-35 mins)',
                    temperature: 'Served hot',
                    origin: 'Spiced Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 31.5,
                name: 'Mutter Paneer Rice',
                category: 'rice-bowls',
                price: '₹219',
                description: 'Classic rice bowl with green peas and soft paneer cubes',
                emoji: '🍚🟢',
                details: {
                    fullDescription: 'A classic combination featuring basmati rice with mutter paneer - green peas and soft paneer cubes cooked in a mildly spiced tomato-onion gravy. This popular dish offers protein, flavor, and comfort in one bowl.',
                    ingredients: ['Basmati rice', 'Fresh paneer', 'Green peas', 'Tomatoes', 'Onions', 'Ginger-garlic', 'Cumin powder', 'Coriander powder', 'Cream', 'Ghee'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Paneer and peas cooked fresh (25-30 mins)',
                    temperature: 'Served hot',
                    origin: 'Classic Indian',
                    allergens: ['Dairy']
                }
            },
            {
                id: 31.6,
                name: 'Mushroom Masala Rice',
                category: 'rice-bowls',
                price: '₹249',
                description: 'Earthy mushroom rice with aromatic spices and herbs',
                emoji: '🍚🍄',
                details: {
                    fullDescription: 'Aromatic rice bowl featuring fresh mushrooms cooked in a rich masala gravy with onions, tomatoes, and aromatic spices. The earthy flavor of mushrooms combined with traditional Indian spices creates a delightful and satisfying meal.',
                    ingredients: ['Basmati rice', 'Fresh mushrooms', 'Onions', 'Tomatoes', 'Ginger-garlic', 'Mushroom masala', 'Cream', 'Fresh herbs', 'Butter', 'Spices'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy'
                    },
                    prepTime: 'Mushrooms sautéed fresh with spices (30-35 mins)',
                    temperature: 'Served hot',
                    origin: 'Gourmet Indian',
                    allergens: ['Dairy']
                }
            },
            {
                id: 31.7,
                name: 'Rajma Loaded Brown Rice',
                category: 'rice-bowls',
                price: '₹299',
                description: 'Healthy brown rice with protein-rich kidney bean curry',
                emoji: '🍚🫘',
                details: {
                    fullDescription: 'Nutritious brown rice served with rajma - kidney beans cooked in a rich, spiced gravy with onions, tomatoes, and aromatic spices. This protein-packed, fiber-rich combination is both healthy and satisfying.',
                    ingredients: ['Brown rice', 'Kidney beans', 'Onions', 'Tomatoes', 'Ginger-garlic', 'Rajma masala', 'Bay leaves', 'Cumin seeds', 'Red chili powder', 'Ghee'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Rajma slow-cooked, brown rice prepared (45-50 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 31.8,
                name: 'Veg Aroma Rice Bowl',
                category: 'rice-bowls',
                price: '₹299',
                description: 'Aromatic rice bowl with mixed vegetables and fragrant spices',
                emoji: '🍚🌿',
                details: {
                    fullDescription: 'An aromatic rice bowl featuring basmati rice cooked with a variety of vegetables and fragrant spices including cardamom, cinnamon, and bay leaves. This dish offers a symphony of aromas and flavors in every bite.',
                    ingredients: ['Basmati rice', 'Mixed vegetables', 'Aromatic spices', 'Cardamom', 'Cinnamon', 'Bay leaves', 'Saffron', 'Mint leaves', 'Fried onions', 'Ghee'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 bowl',
                        allergens: 'Contains dairy (ghee)'
                    },
                    prepTime: 'Rice cooked with aromatic spices (35-40 mins)',
                    temperature: 'Served hot',
                    origin: 'Aromatic Indian',
                    allergens: ['Dairy (ghee)']
                }
            },
            {
                id: 31.9,
                name: 'Egg Rice Bowl',
                category: 'rice-bowls',
                price: '₹209',
                description: 'Simple and satisfying rice bowl with perfectly cooked eggs',
                emoji: '🍚🥚',
                details: {
                    fullDescription: 'A simple yet satisfying rice bowl featuring basmati rice with perfectly cooked eggs, onions, and mild spices. This protein-rich dish is comfort food at its best, offering familiar flavors and complete nutrition.',
                    ingredients: ['Basmati rice', 'Fresh eggs', 'Onions', 'Green chilies', 'Ginger', 'Turmeric', 'Cumin seeds', 'Coriander leaves', 'Salt', 'Oil'],
                    nutrition: {
                        calories: '365',
                        servingSize: '1 bowl',
                        allergens: 'Contains eggs'
                    },
                    prepTime: 'Eggs cooked fresh with rice (20-25 mins)',
                    temperature: 'Served hot',
                    origin: 'Comfort Indian',
                    allergens: ['Eggs']
                }
            },
            {
                id: 31.10,
                name: 'Double Egg Rice Bowl',
                category: 'rice-bowls',
                price: '₹239',
                description: 'Hearty rice bowl with double portion of eggs and spices',
                emoji: '🍚🥚🥚',
                details: {
                    fullDescription: 'A hearty and protein-packed rice bowl featuring basmati rice with a double portion of eggs, onions, and aromatic spices. This filling dish is perfect for those seeking a substantial meal with extra protein.',
                    ingredients: ['Basmati rice', 'Fresh eggs (double portion)', 'Onions', 'Tomatoes', 'Green chilies', 'Ginger-garlic', 'Spices', 'Coriander leaves', 'Mint', 'Oil'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 bowl',
                        allergens: 'Contains eggs'
                    },
                    prepTime: 'Double eggs prepared fresh with rice (25-30 mins)',
                    temperature: 'Served hot',
                    origin: 'Protein-rich Indian',
                    allergens: ['Eggs']
                }
            },

            // SIZZLERS
            {
                id: 32.1,
                name: 'Veg Sizzler',
                category: 'sizzlers',
                price: '₹259',
                description: 'Sizzling hot platter with mixed vegetables, rice, and aromatic sauces',
                emoji: '🔥🥬',
                details: {
                    fullDescription: 'A spectacular vegetarian sizzler featuring a medley of fresh vegetables, aromatic rice, crispy noodles, and rich sauces served on a sizzling hot iron plate. The dramatic presentation and delicious flavors make this a memorable dining experience.',
                    ingredients: ['Mixed vegetables', 'Basmati rice', 'Hakka noodles', 'Bell peppers', 'Onions', 'Mushrooms', 'Broccoli', 'Sizzler sauce', 'Garlic butter', 'Black pepper'],
                    nutrition: {
                        calories: '485',
                        servingSize: '1 platter',
                        allergens: 'Contains dairy, gluten'
                    },
                    prepTime: 'Vegetables grilled fresh, platter heated (20-25 mins)',
                    temperature: 'Served sizzling hot',
                    origin: 'Continental fusion',
                    allergens: ['Dairy', 'Gluten']
                }
            },
            {
                id: 32.2,
                name: 'Italian Sizzler',
                category: 'sizzlers',
                price: '₹299',
                description: 'Italian-style sizzler with pasta, vegetables, and rich Italian sauces',
                emoji: '🔥🍝',
                details: {
                    fullDescription: 'An Italian-inspired sizzler featuring perfectly cooked pasta, grilled vegetables, garlic bread, and authentic Italian sauces served on a sizzling platter. This fusion creation brings the flavors of Italy to the excitement of sizzler dining.',
                    ingredients: ['Pasta', 'Italian herbs', 'Garlic bread', 'Grilled vegetables', 'Marinara sauce', 'White sauce', 'Mozzarella cheese', 'Basil', 'Olive oil', 'Parmesan'],
                    nutrition: {
                        calories: '565',
                        servingSize: '1 platter',
                        allergens: 'Contains dairy, gluten'
                    },
                    prepTime: 'Pasta cooked al dente, Italian sauces prepared (25-30 mins)',
                    temperature: 'Served sizzling hot',
                    origin: 'Italian fusion',
                    allergens: ['Dairy', 'Gluten']
                }
            },
            {
                id: 32.3,
                name: 'Egg Sizzler',
                category: 'sizzlers',
                price: '₹299',
                description: 'Protein-rich sizzler with eggs, vegetables, and savory accompaniments',
                emoji: '🔥🍳',
                details: {
                    fullDescription: 'A protein-packed sizzler featuring perfectly cooked eggs, grilled vegetables, rice, noodles, and flavorful sauces on a sizzling hot plate. This hearty meal combines the drama of sizzler presentation with the comfort of egg-based dishes.',
                    ingredients: ['Fresh eggs', 'Mixed vegetables', 'Fried rice', 'Noodles', 'Grilled tomatoes', 'Mushrooms', 'Sizzler sauce', 'Pepper sauce', 'Butter', 'Herbs'],
                    nutrition: {
                        calories: '525',
                        servingSize: '1 platter',
                        allergens: 'Contains eggs, dairy, gluten'
                    },
                    prepTime: 'Eggs cooked to perfection, platter assembled (20-25 mins)',
                    temperature: 'Served sizzling hot',
                    origin: 'Continental fusion',
                    allergens: ['Eggs', 'Dairy', 'Gluten']
                }
            },
            // OMELETTES
            {
                id: 33.1,
                name: 'Boiled Egg (2)',
                category: 'omelettes',
                price: '₹49',
                description: 'Two perfectly boiled eggs, simple and nutritious',
                emoji: '🥚🥚',
                details: {
                    fullDescription: 'Two perfectly boiled eggs cooked to the ideal consistency with firm whites and creamy yolks. This simple yet nutritious dish is perfect for a light meal or as a protein-rich addition to any meal.',
                    ingredients: ['Fresh eggs (2)', 'Water', 'Salt'],
                    nutrition: {
                        calories: '155',
                        servingSize: '2 eggs',
                        allergens: 'Contains eggs'
                    },
                    prepTime: 'Eggs boiled to perfection (8-10 mins)',
                    temperature: 'Served warm',
                    origin: 'Classic preparation',
                    allergens: ['Eggs']
                }
            },
            {
                id: 33.2,
                name: 'Half Boil Omelette',
                category: 'omelettes',
                price: '₹59',
                description: 'Soft and creamy half-boiled style omelette',
                emoji: '🍳💫',
                details: {
                    fullDescription: 'A unique preparation featuring eggs cooked in an omelette style but with a soft, creamy texture reminiscent of half-boiled eggs. This delicate dish offers the best of both worlds with its silky consistency.',
                    ingredients: ['Fresh eggs', 'Butter', 'Salt', 'Black pepper', 'Fresh herbs'],
                    nutrition: {
                        calories: '185',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Carefully cooked for soft texture (5-7 mins)',
                    temperature: 'Served warm',
                    origin: 'Specialty preparation',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.3,
                name: 'Turkish Eggs',
                category: 'omelettes',
                price: '₹129',
                description: 'Mediterranean-style eggs with yogurt and aromatic spices',
                emoji: '🍳🇹🇷',
                details: {
                    fullDescription: 'A Mediterranean delicacy featuring poached eggs served over creamy yogurt infused with garlic, topped with spiced butter and fresh herbs. This Turkish-inspired dish offers a unique combination of textures and flavors.',
                    ingredients: ['Fresh eggs', 'Greek yogurt', 'Garlic', 'Paprika', 'Butter', 'Dill', 'Sumac', 'Olive oil', 'Salt', 'Black pepper'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 serving',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Yogurt prepared, eggs poached fresh (12-15 mins)',
                    temperature: 'Served warm',
                    origin: 'Turkish Mediterranean',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.4,
                name: 'Masala Omelette',
                category: 'omelettes',
                price: '₹129',
                description: 'Spiced Indian omelette with onions, chilies, and aromatic spices',
                emoji: '🍳🌶️',
                details: {
                    fullDescription: 'A classic Indian-style omelette loaded with onions, green chilies, tomatoes, and aromatic spices. This flavorful dish brings together the comfort of eggs with the vibrant tastes of Indian cuisine.',
                    ingredients: ['Fresh eggs', 'Onions', 'Green chilies', 'Tomatoes', 'Coriander leaves', 'Turmeric', 'Red chili powder', 'Cumin powder', 'Salt', 'Oil'],
                    nutrition: {
                        calories: '245',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs'
                    },
                    prepTime: 'Vegetables chopped fresh, spices mixed (8-10 mins)',
                    temperature: 'Served hot',
                    origin: 'Traditional Indian',
                    allergens: ['Eggs']
                }
            },
            {
                id: 33.5,
                name: 'Boiled Egg Omelette',
                category: 'omelettes',
                price: '₹159',
                description: 'Unique omelette incorporating chopped boiled eggs for extra protein',
                emoji: '🍳🥚',
                details: {
                    fullDescription: 'An innovative omelette featuring chopped boiled eggs mixed into beaten eggs and cooked to perfection. This protein-rich dish offers a unique texture and double the egg goodness in every bite.',
                    ingredients: ['Fresh eggs', 'Boiled eggs', 'Onions', 'Green chilies', 'Coriander leaves', 'Salt', 'Black pepper', 'Butter', 'Spices'],
                    nutrition: {
                        calories: '325',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Boiled eggs prepared, omelette cooked fresh (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Creative fusion',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.6,
                name: 'Cheese Masala Omelette',
                category: 'omelettes',
                price: '₹149',
                description: 'Spiced omelette with melted cheese and aromatic Indian spices',
                emoji: '🍳🧀',
                details: {
                    fullDescription: 'A delicious fusion of Indian masala omelette with melted cheese, creating a rich and flavorful dish. The combination of spices, vegetables, and creamy cheese makes this a satisfying and indulgent meal.',
                    ingredients: ['Fresh eggs', 'Cheese', 'Onions', 'Tomatoes', 'Green chilies', 'Coriander', 'Masala spices', 'Turmeric', 'Butter', 'Salt'],
                    nutrition: {
                        calories: '385',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Cheese melted fresh, spices mixed (10-12 mins)',
                    temperature: 'Served hot',
                    origin: 'Indo-fusion',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.7,
                name: 'Spinach Mushroom Omelette',
                category: 'omelettes',
                price: '₹199',
                description: 'Healthy omelette with fresh spinach and sautéed mushrooms',
                emoji: '🍳🥬',
                details: {
                    fullDescription: 'A nutritious and gourmet omelette featuring fresh spinach leaves and sautéed mushrooms. This healthy combination provides iron, protein, and earthy flavors in a beautifully presented dish.',
                    ingredients: ['Fresh eggs', 'Baby spinach', 'Button mushrooms', 'Onions', 'Garlic', 'Herbs', 'Olive oil', 'Salt', 'Black pepper', 'Butter'],
                    nutrition: {
                        calories: '285',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Mushrooms sautéed, spinach wilted fresh (12-15 mins)',
                    temperature: 'Served hot',
                    origin: 'Healthy gourmet',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.8,
                name: 'Makhani Omelette',
                category: 'omelettes',
                price: '₹199',
                description: 'Rich and creamy omelette with makhani-style sauce and spices',
                emoji: '🍳🍅',
                details: {
                    fullDescription: 'An indulgent omelette inspired by the rich makhani sauce, featuring eggs cooked with tomatoes, cream, and aromatic spices. This fusion creation brings the luxury of makhani flavors to the comfort of omelettes.',
                    ingredients: ['Fresh eggs', 'Tomato puree', 'Heavy cream', 'Butter', 'Garam masala', 'Kasuri methi', 'Ginger-garlic', 'Onions', 'Cashew paste', 'Spices'],
                    nutrition: {
                        calories: '425',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy, nuts'
                    },
                    prepTime: 'Makhani sauce prepared, omelette cooked (15-18 mins)',
                    temperature: 'Served hot',
                    origin: 'Indian fusion',
                    allergens: ['Eggs', 'Dairy', 'Nuts']
                }
            },
            {
                id: 33.9,
                name: 'Roy Omelette',
                category: 'omelettes',
                price: '₹199',
                description: 'Signature royal omelette with premium ingredients and spices',
                emoji: '🍳👑',
                details: {
                    fullDescription: 'Our signature royal omelette featuring premium ingredients and a special blend of spices. This house special combines the finest elements to create an omelette fit for royalty with exceptional flavors and presentation.',
                    ingredients: ['Premium eggs', 'Special spice blend', 'Exotic vegetables', 'Premium cheese', 'Herbs', 'Truffle oil', 'Gourmet butter', 'Royal seasonings'],
                    nutrition: {
                        calories: '465',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Premium ingredients prepared with care (18-20 mins)',
                    temperature: 'Served hot',
                    origin: 'House signature',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.10,
                name: 'Fluffy Omelette',
                category: 'omelettes',
                price: '₹199',
                description: 'Light and airy omelette with perfect fluffy texture',
                emoji: '🍳☁️',
                details: {
                    fullDescription: 'A masterfully prepared fluffy omelette with an incredibly light and airy texture. This technique-driven dish showcases the art of omelette making with its cloud-like consistency and delicate flavors.',
                    ingredients: ['Fresh eggs', 'Butter', 'Cream', 'Salt', 'White pepper', 'Fresh herbs', 'Chives'],
                    nutrition: {
                        calories: '325',
                        servingSize: '1 omelette',
                        allergens: 'Contains eggs, dairy'
                    },
                    prepTime: 'Eggs whipped to perfection, carefully cooked (15-18 mins)',
                    temperature: 'Served immediately hot',
                    origin: 'French technique',
                    allergens: ['Eggs', 'Dairy']
                }
            },
            {
                id: 33.11,
                name: 'Potato Spanish Omelette',
                category: 'omelettes',
                price: '₹199',
                description: 'Traditional Spanish tortilla with potatoes and onions',
                emoji: '🍳🥔',
                details: {
                    fullDescription: 'A traditional Spanish tortilla featuring thinly sliced potatoes and onions cooked slowly in olive oil, then combined with eggs to create a thick, cake-like omelette. This authentic dish represents the heart of Spanish cuisine.',
                    ingredients: ['Fresh eggs', 'Potatoes', 'Onions', 'Extra virgin olive oil', 'Salt', 'Spanish paprika', 'Garlic'],
                    nutrition: {
                        calories: '445',
                        servingSize: '1 portion',
                        allergens: 'Contains eggs'
                    },
                    prepTime: 'Potatoes slow-cooked, tortilla prepared traditionally (25-30 mins)',
                    temperature: 'Served warm',
                    origin: 'Traditional Spanish',
                    allergens: ['Eggs']
                }
            }




        ];

        

        const galleryItems =  [
    { id: 1, category: 'interior', title: 'Cozy Seating Area', description: 'Comfortable chairs and warm lighting', imageurl: '/Assets/Interior_1.png' },
    { id: 2, category: 'interior', title: 'Sofa Seating Area', description: 'Our beautiful espresso station', imageurl: '/Assets/Interior_2.png' },
    { id: 3, category: 'interior', title: 'Natural Trees', description: 'Perfect spot for quiet moments', imageurl: '/Assets/Interior_3.png' },
    { id: 4, category: 'drinks', title: 'Coffee', description: 'Beautiful foam designs', imageurl: 'Assets/Drinks_1.jpg' },
    { id: 5, category: 'drinks', title: 'Hot Tea', description: 'Perfectly brewed hot tea', imageurl: 'Assets/Drinks_2.png' },
    { id: 6, category: 'drinks', title: 'Fresh Cold Brew', description: 'Premium Cold Pressed Juices', imageurl: 'Assets/Drinks_3.jpg' },
    { id: 7, category: 'food', title: 'Fresh Sandwiches', description: 'Baked daily in-house', imageurl: 'Assets/Food_1.jpg' },
    { id: 8, category: 'food', title: 'White Creamy Pasta', description: 'Made with local ingredients', imageurl: 'Assets/Food_2.jpg' },
    { id: 9, category: 'food', title: 'Broccoli Bites', description: 'Freshly made broccoli bites', imageurl: 'Assets/Food_3.jpg' },
];

       // [
       //     { id: 1, category: 'interior', title: 'Cozy Seating Area', description: 'Comfortable chairs and warm lighting', emoji: '🪑' },
       //     { id: 2, category: 'interior', title: 'Coffee Bar', description: 'Our beautiful espresso station', emoji: '☕' },
       ///     { id: 3, category: 'interior', title: 'Reading Corner', description: 'Perfect spot for quiet moments', emoji: '📚' },
       //     { id: 4, category: 'drinks', title: 'Signature Latte Art', description: 'Beautiful foam designs', emoji: '🎨' },
       //     { id: 5, category: 'drinks', title: 'Fresh Cold Brew', description: 'Perfectly chilled coffee', emoji: '🧊' },
       //     { id: 6, category: 'drinks', title: 'Tea Selection', description: 'Premium loose leaf teas', emoji: '🍃' },
       //     { id: 7, category: 'food', title: 'Fresh Pastries', description: 'Baked daily in-house', emoji: '🥐' },
       //     { id: 8, category: 'food', title: 'Artisan Sandwiches', description: 'Made with local ingredients', emoji: '🥪' },
       //     { id: 9, category: 'food', title: 'Dessert Display', description: 'Tempting sweet treats', emoji: '🍰' },
       //     ];

        const reviewsData = [
            { id: 1, name: 'Sri Godha udamala', rating: 5, date: '2025-08-15', text: 'Their food is amazing. Coffees and pastas are worth reordering. Only complaint i have from them is their wraps. They feel very weird and mealy. It can totally be a personal opinion to', helpful: 24, category: '5star' },
            { id: 2, name: 'Tiru Mothukuri', rating: 4, date: '2024-01-10', text: 'Peaceful place in the middle of the city. Very relaxing ambience. Ambience is aptly implemented as per the Cafe name. All items are of great quality. Well maintained. Fast serving and very decently priced. Would highly recommend for a visit with family/family.', helpful: 18, category: 'recent' },
            { id: 3, name: 'Abhijit K', rating: 5, date: '2025-01-08', text: 'Visited first 2 years ago. Quality still great today. The white sauce pasta was super delicio', helpful: 31, category: '5star' },
            { id: 4, name: 'Pooja Tunuguntla', rating: 5, date: '2024-01-05', text: 'I loved the place.... I got chance to have food very very close to nature...nice ambience, food tastes good and with plenty of varieties. Very calm and quiet place. This place is must for nature lovers to visit once.Update: visited again today on 6th Nov 2022 1st floor is made available for sit out. The quality and taste of food has changed a lot. We didnt like the food at all this time. Hope they maintain same quality and taste of food as before. The ambience in 1st floor is soo good, loved the plants which are setup beside tables..but better to avoid first floor during evening as the lights are attracted some flies and 🦟 mosquitoes. Movies are being played with projector in 1st floor but instead of that quite and pleasant soothing music 🎵🎶 makes the place more better. Small plant pot station is made available...so people can buy them for gifting purpose or for themselves. Plants are damn cute', helpful: 12, category: 'helpful' },
            { id: 5, name: 'Ashok', rating: 4, date: '2024-01-03', text: 'Loved the ambiance. Especially the outdoor/garden seating area was amazing. However the tables are not sturdy since the ground is a bit uneven. Tried Spanish fluffy omelet and a few Cold pressed juices and the taste is good. What’s best:- Ambience, Service, Food', helpful: 28, category: '5star' },
            { id: 6, name: 'Manikanta Somepalli', rating: 3, date: '2023-12-28', text: 'A good place to spend time chatting with friends while nibbling good food. The best affordable cafe in Guntur', helpful: 8, category: 'recent' }
        ];

        let currentMenuFilter = 'all';
        let currentGalleryFilter = 'all';
        let currentReviewFilter = 'all';

        // Page navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId + '-page').classList.add('active');
            
            // Update navigation active states
            const navBtns = document.querySelectorAll('.nav-btn, .nav-btn-mobile');
            navBtns.forEach(btn => btn.classList.remove('active'));
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }

            // Initialize page-specific content
            if (pageId === 'menu') {
                initializeMenu();
            } else if (pageId === 'gallery') {
                initializeGallery();
            } else if (pageId === 'reviews') {
                initializeReviews();
            }
        }

        // Menu functionality
        function filterMenu(category) {
            currentMenuFilter = category;
            
            // Update filter buttons
            document.querySelectorAll('.menu-filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-green-600', 'text-white');
                btn.classList.add('text-green-600');
            });
            
            event.target.classList.add('active', 'bg-green-600', 'text-white');
            event.target.classList.remove('text-green-600');
            
            renderMenu();
        }

        function renderMenu() {
            const filteredItems = currentMenuFilter === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === currentMenuFilter);

            // Desktop
            const desktopGrid = document.getElementById('menu-grid');
            if (desktopGrid) {
                desktopGrid.innerHTML = filteredItems.map(item => `
                    <div class="bg-white rounded-xl p-6 shadow-lg card-hover">
                         <div class="text-4xl mb-4">${item.emoji}</div> 
                       <!-- <img src="${item.imgurl}" alt="${item.name}" class="w-full h-40 object-cover mb-4 rounded-lg"> -->
                        <h3 class="text-xl font-semibold mb-2 text-gray-800">${item.name}</h3>
                        <p class="text-gray-600 mb-4">${item.description}</p>
                        <button onclick="openMenuModal(${item.id})" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            View Details
                        </button>
                    </div>
                `).join('');
            }

            // Tablet
            const tabletGrid = document.getElementById('menu-grid-tablet');
            if (tabletGrid) {
                tabletGrid.innerHTML = filteredItems.map(item => `
                    <div class="bg-white rounded-xl p-4 shadow-lg card-hover">
                        <div class="text-3xl mb-3">${item.emoji}</div>
                        <h3 class="text-lg font-semibold mb-2 text-gray-800">${item.name}</h3>
                        <p class="text-gray-600 mb-3 text-sm">${item.description}</p>
                        <button onclick="openMenuModal(${item.id})" class="w-full bg-green-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm">
                            View Details
                        </button>
                    </div>
                `).join('');
            }

            // Mobile
            const mobileGrid = document.getElementById('menu-grid-mobile');
            if (mobileGrid) {
                mobileGrid.innerHTML = filteredItems.map(item => `
                    <div class="bg-white rounded-xl p-4 shadow-lg">
                        <div class="flex items-start space-x-4">
                            <div class="text-3xl">${item.emoji}</div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-800">${item.name}</h3>
                                <p class="text-gray-600 text-sm mb-2">${item.description}</p>
                                <button onclick="openMenuModal(${item.id})" class="w-full bg-green-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm btn-touch">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        function initializeMenu() {
            renderMenu();
        }

        // Menu modal functionality
        function openMenuModal(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            const modal = document.getElementById('menu-modal');
            const content = document.getElementById('menu-modal-content');
            
            content.innerHTML = `
                <div class="p-8 max-h-[80vh] overflow-y-auto">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <div class="text-4xl mb-4">${item.emoji}</div>
                        <h2 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h2>
                        <p class="text-lg text-gray-600">${item.description}</p>
                    </div>

                    <!-- Full Description -->
                    <div class="mb-2">
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">About This Item</h3>
                        <p class="text-gray-600 leading-relaxed">${item.details.fullDescription}</p>
                    </div>

                    <!-- Details Grid -->
                    <div class="grid md:grid-cols-2 gap-1 mb-4">
                        <!-- Ingredients -->
                        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                            <h3 class="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                <span class="text-lg mr-2">🥄</span>
                                Ingredients
                            </h3>
                            <ul class="space-y-2">
                                ${item.details.ingredients.map(ingredient => `
                                    <li class="text-gray-600 flex items-center">
                                        <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                        ${ingredient}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Nutrition & Info -->
                        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <span class="text-lg mr-2">📊</span>
                                Nutrition Info
                            </h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Calories:</span>
                                    <span class="font-medium">${item.details.nutrition.calories}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Caffeine:</span>
                                    <span class="font-medium">${item.details.nutrition.caffeine}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Size:</span>
                                    <span class="font-medium">${item.details.nutrition.size}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Preparation -->
                        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                            <h3 class="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                <span class="text-lg mr-2">⏱️</span>
                                Preparation
                            </h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Prep Time:</span>
                                    <span class="font-medium">${item.details.brewTime}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Temperature:</span>
                                    <span class="font-medium">${item.details.temperature}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Origin:</span>
                                    <span class="font-medium">${item.details.origin}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Allergens -->
                        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                            <h3 class="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                <span class="text-lg mr-2">⚠️</span>
                                Allergen Information
                            </h3>
                            <div class="space-y-2">
                                ${item.details.allergens.map(allergen => `
                                    <div class="flex items-center">
                                        <span class="w-2 h-2 ${allergen === 'None' ? 'bg-green-400' : 'bg-orange-400'} rounded-full mr-3"></span>
                                        <span class="text-gray-600">${allergen}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

<!-- Add-on Flavors (for coffee items) -->
${item.category === 'hot-coffee' || item.category === 'cold-coffee' ? `
<div class="mb-8">
  <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
    <span class="text-lg mr-2">✨</span>
    Add-on Flavors (Extra Charges)
  </h3>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-40 overflow-y-auto pr-2">
    <div class="flex items-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
      <span class="text-sm font-medium text-gray-700">🍦 Vanilla</span>
    </div>
    <div class="flex items-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
      <span class="text-sm font-medium text-gray-700">🍯 Caramel</span>
    </div>
    <div class="flex items-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
      <span class="text-sm font-medium text-gray-700">☘️ Irish</span>
    </div>
    <div class="flex items-center p-3 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg">
      <span class="text-sm font-medium text-gray-700">🌰 Roasted Hazelnut</span>
    </div>
    <div class="flex items-center p-3 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg">
      <span class="text-sm font-medium text-gray-700">🍂 Cinnamon</span>
    </div>
  </div>
</div>
` : ''}


                    <!-- Action Buttons -->
                    <div class="text-center">
                        <button onclick="closeMenuModal()" class="bg-green-600 text-white py-3 px-3 rounded-sm font-semibold hover:bg-green-700 transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            `;
            
            modal.classList.remove('opacity-0', 'invisible');
        }

        function closeMenuModal() {
            const modal = document.getElementById('menu-modal');
            modal.classList.add('opacity-0', 'invisible');
        }



        // Gallery functionality
        function filterGallery(category) {
            currentGalleryFilter = category;
            
            // Update filter buttons
            document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-green-600', 'text-white');
                btn.classList.add('text-green-600');
            });
            
            event.target.classList.add('active', 'bg-green-600', 'text-white');
            event.target.classList.remove('text-green-600');
            
            renderGallery();
        }

        function renderGallery() {
            const filteredItems = currentGalleryFilter === 'all' 
                ? galleryItems 
                : galleryItems.filter(item => item.category === currentGalleryFilter);

            // Desktop
            const desktopGrid = document.getElementById('gallery-grid');
            if (desktopGrid) {
                desktopGrid.innerHTML = filteredItems.map(item => `
                    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 card-hover cursor-pointer" onclick="openGalleryModal(${item.id})">
                        <!-- <div class="text-4xl mb-4">${item.image}</div> -->
                        <img src="${item.imageurl}" alt="${item.title}" class="w-full h-40 object-cover mb-4 rounded-lg">
                        <h3 class="text-lg font-semibold mb-2 text-gray-800">${item.title}</h3>
                        <p class="text-gray-600 text-sm">${item.description}</p>
                    </div>
                `).join('');
            }

            // Tablet
            const tabletGrid = document.getElementById('gallery-grid-tablet');
            if (tabletGrid) {
                tabletGrid.innerHTML = filteredItems.map(item => `
                    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 card-hover cursor-pointer" onclick="openGalleryModal(${item.id})">
                        <!--<div class="text-3xl mb-3">${item.emoji}</div>-->
                        <img src="${item.imageurl}" alt="${item.title}" class="w-full h-40 object-cover mb-4 rounded-lg">
                        <h3 class="font-semibold mb-2 text-gray-800">${item.title}</h3>
                        <p class="text-gray-600 text-sm">${item.description}</p>
                    </div>
                `).join('');
            }

            // Mobile
            const mobileGrid = document.getElementById('gallery-grid-mobile');
            if (mobileGrid) {
                mobileGrid.innerHTML = filteredItems.map(item => `
                    <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 cursor-pointer" onclick="openGalleryModal(${item.id})">
                        <!--<div class="text-3xl mb-2">${item.image}</div>-->
                        <img src="${item.imageurl}" alt="${item.title}" class="w-full h-40 object-cover mb-4 rounded-lg">
                        <h3 class="font-semibold mb-1 text-gray-800 text-sm">${item.title}</h3>
                        <p class="text-gray-600 text-xs">${item.description}</p>
                    </div>
                `).join('');
            }
        }

        function openGalleryModal(itemId) {
            const item = galleryItems.find(i => i.id === itemId);
            const modal = document.getElementById('gallery-modal');
            const content = document.getElementById('gallery-modal-content');
            
            content.innerHTML = `
                <div class="p-8 text-center">
                   <!-- <div class="text-8xl mb-6">${item.emoji}</div>-->
                    <img src="${item.imageurl}" alt="${item.title}" class="w-full h-40 object-cover mb-4 rounded-lg">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">${item.title}</h2>
                    <p class="text-gray-600 mb-6">${item.description}</p>
                  <!--  <p class="text-sm text-gray-500">Category: ${item.category}</p> -->
                </div>
            `;
            
            modal.classList.remove('opacity-0', 'invisible');
        }

        function closeGalleryModal() {
            const modal = document.getElementById('gallery-modal');
            modal.classList.add('opacity-0', 'invisible');
        }

        function initializeGallery() {
            renderGallery();
        }

        // Reviews functionality
        function filterReviews(category) {
            currentReviewFilter = category;
            
            // Update filter buttons
            document.querySelectorAll('.review-filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-green-600', 'text-white');
                btn.classList.add('text-green-600', 'border-2', 'border-green-600');
            });
            
            event.target.classList.add('active', 'bg-green-600', 'text-white');
            event.target.classList.remove('text-green-600', 'border-2', 'border-green-600');
            
            renderReviews();
        }

        function renderReviews() {
            let filteredReviews = reviewsData;
            
            if (currentReviewFilter === 'recent') {
                filteredReviews = [...reviewsData].sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (currentReviewFilter === 'helpful') {
                filteredReviews = [...reviewsData].sort((a, b) => b.helpful - a.helpful);
            } else if (currentReviewFilter === '5star') {
                filteredReviews = reviewsData.filter(review => review.rating === 5);
            }

            // Desktop
            const desktopGrid = document.getElementById('reviews-grid');
            if (desktopGrid) {
                desktopGrid.innerHTML = filteredReviews.map(review => `
                    <div class="bg-white rounded-xl p-6 shadow-lg">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                <span class="text-green-600 font-bold">${review.name.charAt(0)}</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">${review.name}</h3>
                                <div class="flex items-center space-x-2">
                                    <span class="text-yellow-400">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
                                    <span class="text-sm text-gray-500">${review.date}</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">${review.text}</p>
                        <div class="flex items-center justify-between">
                            <button class="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                👍 Helpful (${review.helpful})
                            </button>
                            <span class="text-xs text-gray-400">Verified Customer</span>
                        </div>
                    </div>
                `).join('');
            }

            // Tablet
            const tabletGrid = document.getElementById('reviews-grid-tablet');
            if (tabletGrid) {
                tabletGrid.innerHTML = filteredReviews.map(review => `
                    <div class="bg-white rounded-xl p-4 shadow-lg">
                        <div class="flex items-center mb-3">
                            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <span class="text-green-600 font-bold text-sm">${review.name.charAt(0)}</span>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800 text-sm">${review.name}</h3>
                                <div class="flex items-center space-x-2">
                                    <span class="text-yellow-400 text-sm">${'★'.repeat(review.rating)}</span>
                                    <span class="text-xs text-gray-500">${review.date}</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-3">${review.text}</p>
                        <div class="text-xs text-gray-500">
                            👍 ${review.helpful} helpful
                        </div>
                    </div>
                `).join('');
            }

            // Mobile
            const mobileGrid = document.getElementById('reviews-grid-mobile');
            if (mobileGrid) {
                mobileGrid.innerHTML = filteredReviews.map(review => `
                    <div class="bg-white rounded-xl p-4 shadow-lg">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <span class="text-green-600 font-bold text-xs">${review.name.charAt(0)}</span>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-gray-800 text-sm">${review.name}</h3>
                                <div class="flex items-center space-x-2">
                                    <span class="text-yellow-400 text-xs">${'★'.repeat(review.rating)}</span>
                                    <span class="text-xs text-gray-500">${review.date}</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm mb-2">${review.text}</p>
                        <div class="text-xs text-gray-500">
                            👍 ${review.helpful} helpful
                        </div>
                    </div>
                `).join('');
            }
        }

        function initializeReviews() {
            renderReviews();
            initializeReviewForm();
        }

        function initializeReviewForm() {
            // Star rating functionality
            const starBtns = document.querySelectorAll('.star-btn');
            const ratingValue = document.getElementById('rating-value');
            
            starBtns.forEach((btn, index) => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const rating = parseInt(this.dataset.rating);
                    ratingValue.value = rating;
                    
                    starBtns.forEach((star, i) => {
                        if (i < rating) {
                            star.classList.remove('text-gray-300');
                            star.classList.add('text-yellow-400');
                        } else {
                            star.classList.remove('text-yellow-400');
                            star.classList.add('text-gray-300');
                        }
                    });
                });
            });

            // Form submission
            const feedbackForm = document.getElementById('feedback-form');
            if (feedbackForm) {
                feedbackForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const name = document.getElementById('customer-name').value;
                    const email = document.getElementById('customer-email').value;
                    const rating = document.getElementById('rating-value').value;
                    const text = document.getElementById('review-text').value;
                    
                    if (rating === '0') {
                        alert('Please select a rating');
                        return;
                    }
                    
                    // Simulate form submission
                    alert('Thank you for your review! It will be published after moderation.');
                    this.reset();
                    
                    // Reset stars
                    starBtns.forEach(star => {
                        star.classList.remove('text-yellow-400');
                        star.classList.add('text-gray-300');
                    });
                    ratingValue.value = '0';
                });
            }
        }

        // Contact form functionality
        function initializeContactForm() {
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Simulate form submission
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                });
            }
        }

        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }

            // Initialize contact form
            initializeContactForm();
            
            // Close gallery modal when clicking outside
            const galleryModal = document.getElementById('gallery-modal');
            if (galleryModal) {
                galleryModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeGalleryModal();
                    }
                });
            }

            // Close menu modal when clicking outside
            const menuModal = document.getElementById('menu-modal');
            if (menuModal) {
                menuModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeMenuModal();
                    }
                });
            }

            // Close modals with Escape key
            document.addEventListener('keydown', function(e) 
            {
                if (e.key === 'Escape') {
                    const galleryModal = document.getElementById('gallery-modal');
                    const menuModal = document.getElementById('menu-modal');
                    
                    if (galleryModal && !galleryModal.classList.contains('invisible')) {
                        closeGalleryModal();
                    }
                    if (menuModal && !menuModal.classList.contains('invisible')) {
                        closeMenuModal();
                    }
                }
            });
            
                        function showPage(pageId) {
      // Hide all sections
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");

      // Show the selected section
      document.getElementById(pageId).style.display = "block";

      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const btn = document.getElementById("backToTop");
// Show/hide Back to Top button
    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Back to Top action
    btn.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
 


        });