// Related notes, per subject. One line per note:
//   Note: confused A, B; similar C; with D, E; opposite F
// confused = easily mistaken for it · similar = close but distinguishable · with = commonly appear together
// opposite = genuine contrast on the same axis. Relations are symmetric (the app mirrors them).
// Names must match notes of the SAME subject exactly. Notes missing from the current detail level are hidden.
const RELATED={
"Coffee":`
Blackberry: confused Blackcurrant, Mulberry; similar Boysenberry, Black Cherry; with Dark Chocolate, Winey
Raspberry: confused Hibiscus, Strawberry; similar Cranberry, Red Gooseberry; with Rose, Lime, Milk Chocolate
Blueberry: confused Blackberry, Wild Blueberry; similar Mulberry, Elderberry; with Winey, Jasmine, Dark Chocolate
Strawberry: confused Raspberry; similar Strawberry Jam, Cherry; with Cream Soda, Milk Chocolate, Lactic
Blackcurrant: confused Blackberry, Elderberry; similar Cranberry; with Tomato Soup, Grapefruit, Winey
Cranberry: confused Red Gooseberry, Hibiscus; similar Sour Cherry, Raspberry; with Lime, Malic
Elderberry: confused Blackcurrant, Blueberry; similar Mulberry; with Winey, Dark Chocolate
Mulberry: confused Blackberry; similar Blueberry, Elderberry; with Molasses, Raisin
Raisin: confused Prune, Golden Raisin; similar Date, Fig; with Molasses, Dark Chocolate, Winey
Prune: confused Raisin, Plum; similar Date, Fig; with Molasses, Dark Chocolate, Boozy
Fig: confused Date; similar Raisin, Prune; with Brown Sugar, Walnut, Molasses
Date: confused Fig, Date Syrup; similar Raisin, Prune; with Brown Sugar, Molasses
Dried Apricot: confused Golden Raisin, Apricot; similar Dried Mango; with Honey, Black Tea
Tamarind: confused Prune; similar Sour Cherry, Acetic; with Molasses, Brown Sugar
Golden Raisin: confused Dried Apricot, Raisin; similar Honey; with Panela, Black Tea
Lemon: confused Lemon Juice, Bergamot; similar Lime, Yuzu, Citric; with Black Tea, Jasmine, Honey
Lime: confused Lemon; similar Makrut Lime, Green Apple; with Cane Sugar, Raspberry, Lemongrass
Orange: confused Mandarin, Tangelo; similar Orange Blossom, Grapefruit; with Milk Chocolate, Caramel
Grapefruit: confused Bergamot, Pomelo; similar Orange, Lemon; with Blackcurrant, Black Tea
Bergamot: confused Earl Grey, Grapefruit; similar Lemon, Orange Blossom; with Jasmine, Black Tea
Mandarin: confused Orange, Clementine; similar Blood Orange, Yuzu; with Honey, Peach
Blood Orange: confused Orange; similar Raspberry, Mandarin; with Dark Chocolate, Cherry
Yuzu: confused Lemon, Mandarin; similar Bergamot, Lime; with Jasmine, Green Tea
Cherry: confused Black Cherry, Red Apple; similar Strawberry, Plum; with Milk Chocolate, Almond
Peach: confused Apricot, Nectarine; similar Mango; with Jasmine, Honey, Black Tea
Apricot: confused Peach, Nectarine; similar Dried Apricot; with Honey, Orange Blossom, Jasmine
Nectarine: confused Peach, Apricot; similar Plum; with Honey, Black Tea
Plum: confused Prune, Black Cherry; similar Cherry, Nectarine; with Brown Sugar, Dark Chocolate
Black Cherry: confused Cherry, Plum; similar Blackberry, Port; with Dark Chocolate, Winey
Apple: confused Red Apple, Pear; similar Malic, Cider; with Caramel, Honey
Pear: confused Apple, Quince; similar Asian Pear; with Honey, Cane Sugar, Jasmine
Quince: confused Pear; similar Apple, Apricot; with Honey, Rose
Green Apple: confused Malic, Lime; similar Apple; with Cane Sugar, Fresh Grass
Red Apple: confused Apple, Cherry; similar Pear; with Caramel, Cinnamon
Pineapple: confused Mango; similar Passion Fruit, Guava; with Cane Sugar, Coconut, Rum-like
Mango: confused Papaya, Peach; similar Pineapple, Guava; with Passion Fruit, Boozy
Papaya: confused Mango, Melon; similar Guava; with Overripe Fruit, Pineapple
Passion Fruit: confused Guava, Grapefruit; similar Pineapple, Lychee; with Mango, Fermented Honey
Coconut: similar Macadamia, Coconut Cream; with Pineapple, Rum-like, Vanilla
Lychee: confused Rose; similar Passion Fruit, Muscat Grape; with Jasmine, Peach
Guava: confused Passion Fruit, Papaya; similar Mango; with Pineapple, Rum-like
Melon: confused Cucumber, Honeydew; similar Papaya, Cantaloupe; with Honeysuckle
Banana: confused Overripe Fruit, Banana Bread; similar Mango, Ripe Plantain; with Boozy, Rum-like
Jasmine: confused Orange Blossom, Honeysuckle; similar Jasmine Tea, Magnolia; with Bergamot, Peach, Lemon
Rose: confused Hibiscus, Lychee; similar Rosewater, Geranium; with Raspberry, Black Tea
Chamomile: confused Hay, Honey; similar Elderflower; with Apricot, Golden Raisin
Lavender: similar Violet, Bergamot; with Blueberry, Black Tea
Hibiscus: confused Raspberry, Cranberry, Rose; similar Sour Cherry; with Winey, Lactic
Orange Blossom: confused Jasmine, Neroli; similar Bergamot, Honeysuckle; with Apricot, Honey, Orange
Elderflower: confused Lychee, Honeysuckle; similar Chamomile; with Pear, Lime
Honeysuckle: confused Jasmine, Orange Blossom; similar Magnolia, Honey; with Peach, Melon
Magnolia: confused Jasmine, Honeysuckle; similar Gardenia; with Peach, Lemon
Black Tea: confused Earl Grey; similar Oolong, Rooibos; with Lemon, Bergamot, Peach
Earl Grey: confused Bergamot, Black Tea; similar Lavender; with Lemon, Honey
Green Tea: confused Fresh Grass, Snow Pea; similar Oolong, Matcha, Jasmine Tea; with Lemon, Yuzu
Oolong: confused Black Tea, Green Tea; similar Rooibos; with Peach, Honey, Orange Blossom
Rooibos: confused Black Tea; similar Hay, Oolong; with Honey, Vanilla
Caramel: confused Toffee, Butterscotch; similar Brown Sugar, Dulce de Leche; with Milk Chocolate, Hazelnut, Red Apple
Toffee: confused Caramel, Butterscotch; similar Brown Sugar; with Hazelnut, Dark Chocolate
Butterscotch: confused Caramel, Toffee; similar Brown Sugar, Dulce de Leche; with Vanilla, Pecan
Brown Sugar: confused Panela, Demerara, Molasses; similar Caramel; with Raisin, Cinnamon, Plum
Dulce de Leche: confused Caramel, Butterscotch; similar Custard; with Milk Chocolate, Vanilla
Burnt Caramel: confused Molasses, Burnt Toast; similar Caramel, Toffee; with Dark Chocolate, Smoky; opposite Honey
Honey: confused Golden Syrup, Chamomile; similar Cane Sugar, Fermented Honey; with Black Tea, Peach, Apricot
Molasses: confused Brown Sugar, Burnt Caramel; similar Panela; with Raisin, Prune, Dark Chocolate
Maple Syrup: confused Brown Sugar, Golden Syrup; similar Caramel, Pecan; with Vanilla, Walnut
Golden Syrup: confused Honey, Maple Syrup; similar Cane Sugar, Caramel; with Toast, Vanilla
Cane Sugar: confused Honey; similar Panela, Demerara; with Lime, Green Apple, Pineapple
Panela: confused Brown Sugar, Piloncillo; similar Molasses, Demerara; with Red Apple, Plum
Demerara: confused Brown Sugar, Panela; similar Cane Sugar; with Toffee, Raisin
Vanilla: confused Cream Soda, Marshmallow; similar Custard, Vanilla Bean; with Caramel, Milk Chocolate, Almond
Marshmallow: confused Vanilla; similar Meringue, Cotton Candy; with Milk Chocolate, Graham Cracker
Custard: confused Vanilla, Dulce de Leche; similar Crème Brûlée; with Caramel, Nutmeg
Cream Soda: confused Vanilla; similar Marshmallow, Bubblegum; with Strawberry, Caramel
Meringue: similar Marshmallow, Cane Sugar; with Lemon, Vanilla
Almond: confused Marzipan, Cherry; similar Hazelnut, Cashew; with Milk Chocolate, Vanilla
Hazelnut: confused Almond, Roasted Hazelnut; similar Walnut, Gianduja; with Milk Chocolate, Caramel
Peanut: confused Raw Peanut, Roasted Almond; similar Cashew; with Milk Chocolate, Brown Sugar
Walnut: confused Pecan, Hazelnut; similar Walnut Skin; with Fig, Maple Syrup, Dark Chocolate
Pecan: confused Walnut; similar Praline, Maple Syrup; with Brown Sugar, Butterscotch
Cashew: confused Macadamia, Almond; similar Peanut; with Coconut, Milk Chocolate
Macadamia: confused Cashew; similar Coconut; with White Chocolate, Vanilla
Pistachio: similar Almond, Green Tea; with Rose, Cardamom
Brazil Nut: confused Macadamia; similar Walnut; with Cocoa Powder, Dark Chocolate
Dark Chocolate: confused Baker's Chocolate, Cacao Nibs; similar Cocoa Powder; with Blackberry, Black Cherry, Molasses; opposite Lemon
Milk Chocolate: confused Hot Cocoa, Chocolate Milk; similar Caramel, Hazelnut; with Almond, Orange, Vanilla
Cacao Nibs: confused Dark Chocolate, Baker's Chocolate; similar Roasted Chicory; with Walnut, Raisin
Cocoa Powder: confused Dark Chocolate, Baker's Chocolate; similar Malt; with Brazil Nut, Toast
Baker's Chocolate: confused Dark Chocolate, Cacao Nibs; similar Burnt Caramel, Roasted Chicory; with Smoky, Molasses
Cinnamon: confused Cassia; similar Nutmeg, Allspice; with Red Apple, Brown Sugar, Clove
Nutmeg: confused Allspice, Mace; similar Cinnamon; with Custard, Clove
Clove: confused Allspice; similar Medicinal; with Cinnamon, Nutmeg, Molasses
Ginger: confused Candied Ginger; similar Cardamom, Lemongrass; with Lemon, Brown Sugar
Allspice: confused Clove, Nutmeg; similar Black Pepper; with Cinnamon, Gingerbread
Cassia: confused Cinnamon; similar Clove; with Brown Sugar, Dark Chocolate
Gingerbread: confused Speculoos; similar Molasses, Cinnamon; with Allspice, Ginger, Clove
Black Pepper: confused Allspice, Szechuan Pepper; similar Pink Peppercorn; with Dark Chocolate, Woody
Anise: confused Licorice, Star Anise; similar Fennel; with Dark Chocolate, Molasses
Cardamom: confused Coriander Seed, Bergamot; similar Ginger; with Black Tea, Orange
Coriander Seed: confused Cardamom, Orange; similar Bergamot; with Lemon, Ginger
Licorice: confused Anise; similar Fennel, Molasses; with Dark Chocolate, Smoky
Juniper: similar Sage, Woody, Coriander Seed; with Black Pepper, Grapefruit
Szechuan Pepper: confused Black Pepper; similar Lime, Pink Peppercorn; with Grapefruit, Juniper
Grain: confused Malt, Raw Peanut; similar Barley, Oatmeal; with Hay, Cardboard
Malt: confused Grain, Barley; similar Graham Cracker, Toast; with Milk Chocolate, Caramel
Toast: confused Burnt Toast, Fresh Bread; similar Graham Cracker, Malt; with Caramel, Hazelnut
Graham Cracker: confused Malt, Digestive Biscuit; similar Toast, Honey; with Marshmallow, Cinnamon
Brown Rice: confused Barley, Genmaicha; similar Grain; with Hay, Green Tea
Oatmeal: confused Grain; similar Barley, Granola; with Brown Sugar, Cinnamon
Barley: confused Malt, Brown Rice; similar Grain, Roasted Chicory; with Toast, Cocoa Powder
Fresh Bread: confused Toast, Sourdough; similar Grain, Malt; with Butterscotch, Honey
Smoky: confused Ashy, Charred; similar Pipe Tobacco, Carbon; with Dark Chocolate, Burnt Caramel; opposite Fresh Grass
Ashy: confused Smoky, Carbon; similar Acrid, Cigar; with Burnt Toast; opposite Jasmine
Charred: confused Smoky, Burnt Toast; similar Carbon, Acrid; with Baker's Chocolate
Acrid: confused Ashy, Burnt Toast; similar Carbon, Rubber; with Charred
Burnt Toast: confused Charred, Toast; similar Burnt Caramel, Acrid; with Ashy, Carbon
Roasted Chicory: confused Baker's Chocolate, Barley; similar Cacao Nibs, Licorice; with Molasses, Dark Chocolate
Carbon: confused Ashy, Charred; similar Acrid, Burnt Toast; with Smoky, Rubber
Pipe Tobacco: confused Cigar, Fresh Tobacco; similar Smoky, Molasses; with Dark Chocolate, Raisin, Woody
Fresh Tobacco: confused Hay, Pipe Tobacco; similar Black Tea, Rooibos; with Dried Apricot, Honey
Cigar: confused Pipe Tobacco, Ashy; similar Woody, Humidor; with Dark Chocolate, Earthy
Green Bell Pepper: confused Snow Pea, Fresh Bean; similar Green Tomato, Bell Pepper Seed; with Fresh Grass, Raw Peanut
Fresh Grass: confused Green Tea, Hay; similar Snow Pea, Cucumber; with Green Apple, Lime; opposite Smoky
Olive: confused Dill; similar Kale, Salty; with Sage, Thyme
Cucumber: confused Melon, Zucchini; similar Fresh Grass, Snow Pea; with Lime, Mint
Zucchini: confused Cucumber; similar Snow Pea, Green Bean; with Fresh Grass
Green Tomato: confused Green Bell Pepper; similar Tomato Soup, Kale; with Malic, Fresh Grass
Kale: confused Green Bean; similar Olive, Green Tomato; with Earthy, Hay
Raw Peanut: confused Fresh Bean, Grain, Peanut; similar Soybean, Snow Pea; with Green Bell Pepper
Snow Pea: confused Green Bean, Fresh Grass; similar Green Bell Pepper, Raw Peanut; with Green Tea
Fresh Bean: confused Raw Peanut, Soybean; similar Green Bean, Green Bell Pepper; with Grain
Green Bean: confused Snow Pea, Fresh Bean; similar Zucchini, Kale; with Hay
Soybean: confused Fresh Bean, Edamame; similar Raw Peanut, Grain; with Musty
Dill: confused Fennel, Olive; similar Fresh Grass, Cucumber; with Lime
Hay: confused Fresh Tobacco, Chamomile, Fresh Grass; similar Grain, Rooibos; with Cardboard, Stale
Sage: confused Thyme; similar Juniper, Olive; with Black Tea, Bay Leaf
Thyme: confused Sage; similar Olive, Mint; with Honey, Lemon
Mint: confused Menthol; similar Fennel, Cucumber; with Dark Chocolate, Lime
Fennel: confused Anise, Dill; similar Licorice, Mint; with Lemon, Cucumber
Citric: confused Lemon, Malic; similar Lime, Lemon Juice; with Jasmine, Black Tea; opposite Stale
Malic: confused Green Apple, Citric; similar Tartaric, Apple; with Pear, Cane Sugar
Tartaric: confused Winey, Malic; similar Citric; with Grape Juice, Blackcurrant
Winey: confused Tartaric, Boozy, Overripe Fruit; similar Red Wine, Black Cherry; with Blueberry, Blackberry, Dark Chocolate
Acetic: confused Kombucha-like, Lactic; similar Balsamic, Sour Cherry; with Overripe Fruit, Winey
Lactic: confused Acetic, Sourdough; similar Kefir; with Strawberry, Sourdough
Sour Cherry: confused Cranberry, Hibiscus; similar Cherry, Tamarind; with Winey, Dark Chocolate
Lemon Juice: confused Lemon, Citric; similar Lime; with Green Tea, Honey
Overripe Fruit: confused Winey, Boozy, Banana; similar Fruit Compote, Fermented Honey; with Rum-like, Acetic; opposite Fresh Grass
Boozy: confused Winey, Rum-like, Overripe Fruit; similar Whiskey-like; with Raisin, Prune, Strawberry
Whiskey-like: confused Boozy, Rum-like; similar Woody, Charred Oak; with Vanilla, Caramel
Kombucha-like: confused Acetic, Cider; similar Lactic; with Overripe Fruit, Black Tea
Rum-like: confused Boozy, Whiskey-like; similar Molasses, Overripe Fruit; with Banana, Pineapple, Raisin
Sourdough: confused Lactic, Fresh Bread; similar Acetic; with Grain
Cider: confused Apple, Kombucha-like; similar Malic, Fermented Honey; with Red Apple, Cinnamon
Cardboard: confused Stale, Newsprint; similar Woody; with Musty, Grain; opposite Citric
Musty: confused Earthy, Damp Wood; similar Old Books, Stale; with Cardboard, Medicinal
Earthy: confused Musty, Damp Wood; similar Mushroom Broth, Woody; with Cigar, Dark Chocolate, Pipe Tobacco
Woody: confused Cardboard, Damp Wood; similar Cigar, Charred Oak; with Earthy, Stale
Stale: confused Cardboard, Newsprint; similar Woody, Old Books; with Musty; opposite Citric
Damp Wood: confused Musty, Earthy; similar Woody, Old Books; with Stale
Old Books: confused Musty, Cardboard; similar Dusty Attic, Damp Wood; with Stale
Rubber: confused Acrid, Petroleum; similar Medicinal, Plastic; with Carbon, Charred
Medicinal: confused Iodine, Bitter Medicine; similar Rubber, Clove; with Petroleum
Petroleum: confused Gasoline, Rubber; similar Medicinal, Creosote; with Skunky
Salty: confused Olive; similar Umami, Soy Sauce; with Medicinal, Rubber
Skunky: confused Rubber, Petroleum; similar Gasoline; with Musty, Earthy
Gasoline: confused Petroleum; similar Skunky, Acetone; with Rubber
`,
"Tea":`
Jasmine: confused Night Jasmine, Gardenia, Tuberose; similar Honeysuckle, Orange Blossom; with Fresh Grass, Honey, Peach
Honeysuckle: confused Jasmine, Lily of the Valley; similar Gardenia; with Honey, Nectar, Apricot
Gardenia: confused Jasmine, Tuberose; similar Magnolia, Lily; with Cream, Coconut
Lily: confused Lily of the Valley; similar Gardenia, Magnolia, Narcissus; with Honey, Lychee
Magnolia: similar Gardenia, Lily, Orchid; with Pear, Cream, Lemon
Orange Blossom: confused Neroli, Pomelo Blossom; similar Jasmine, Honeysuckle; with Bergamot, Honey, Apricot
Rose: confused Damask Rose, Lychee; similar Peony; with Honey, Raspberry
Orchid: similar Magnolia, Lily, Osmanthus; with Honey, Lychee, Peach, Roasted Grain
Lilac: confused Wisteria, Hyacinth; similar Lily, Peony; with Honey, Vanilla
Peony: confused White Peony Petal; similar Rose, Lilac; with Hay, Honey, Honeydew
Narcissus: similar Lily, Hyacinth, Orchid; with Mineral Spring, Roasted Grain, Old Wood
Ylang-Ylang: confused Tuberose, Frangipani; similar Jasmine, Gardenia; with Banana, Coconut, Custard
Chrysanthemum: confused Golden Chrysanthemum, Dried Chrysanthemum; similar Chamomile, Marigold; with Hay, Honey, Goji
Osmanthus: confused Dried Osmanthus, Apricot; similar Peach, Orchid; with Honey, Toasted Rice, Roasted Grain
Chamomile: confused Chrysanthemum; similar Hay, Daisy; with Honey, Apple, Lemon
Dandelion: similar Marigold, Hay, Bitter Herb; with Honey, Roasted Barley, Dried Roots
Marigold: confused Chrysanthemum; similar Dandelion, Buttercup; with Hay, Apricot
Elderflower: confused Lychee, White Grape; similar Honeysuckle, Lily; with Pear, Lemon, Green Apple
Bergamot: confused Orange Blossom, Lemon; similar Neroli, Mandarin; with Malty, Vanilla, Dried Lavender
Lemon: confused Lemongrass, Yuzu; similar Lemon Balm, Grapefruit; with Ginger, Honey, Mint
Yuzu: confused Sudachi, Grapefruit; similar Lemon, Mandarin; with Seaweed, Fresh Grass
Orange Peel: confused Tangerine Peel, Chenpi; similar Mandarin, Bergamot; with Cinnamon, Clove, Malty
Grapefruit: confused Pomelo; similar Yuzu, Lemon; with Fresh Grass, Bitter Herb
Mandarin: confused Tangerine Peel, Orange Peel; similar Yuzu, Bergamot; with Chenpi, Malty
Apple: confused Pear; similar Quince, Green Apple; with Honey, Cinnamon, Malty
Pear: confused Nashi Pear, Apple; similar Quince, Lychee; with Orchid, Magnolia, Honey
Quince: confused Pear, Apple; similar Apricot; with Honey, Rose
Green Apple: confused Apple, White Grape; similar Pear, Lemon; with Fresh Grass, Snow Pea
White Grape: confused Lychee; similar Green Apple, Elderflower; with Jasmine, Honey
Apricot: confused Peach, Osmanthus; similar Dried Apricot, Nectarine; with Honey, Orchid, Toasted Rice
Peach: confused Nectarine, Apricot, White Peach; similar Lychee, Plum; with Orchid, Osmanthus, Honey
Plum: similar Cherry, Prune, Umeboshi; with Malty, Raisin
Nectarine: confused Peach; similar Apricot, Plum; with Honey, Orchid
Cherry: similar Plum, Raspberry; with Almond, Rose
Lychee: confused Rose, Longan; similar Rambutan, Peach; with Honey, Orchid
Mango: similar Passion Fruit, Papaya, Peach; with Honey, Coconut
Pineapple: similar Passion Fruit, Mango; with Honey, Coconut
Passion Fruit: similar Mango, Guava; with Lychee, Pineapple
Coconut: confused Coconut Milk; similar Cream, Vanilla; with Pandan, Ylang-Ylang
Papaya: similar Mango, Cantaloupe; with Honey, Lychee
Banana: similar Mango, Custard; with Ylang-Ylang, Cream, Vanilla
Strawberry: confused Wild Strawberry; similar Raspberry, Lychee; with Cream, Rose
Raspberry: similar Strawberry, Blackcurrant; with Rose, Cocoa, Malty
Goji: similar Cranberry, Raisin, Dried Jujube; with Chrysanthemum, Chinese Herbs
Blackcurrant: confused Blackberry; similar Raspberry, Cranberry; with Malty, Cocoa
Cranberry: similar Raspberry, Goji, Blackcurrant; with Malty
Raisin: confused Prune, Dried Fig; similar Date, Dried Apricot; with Malty, Cocoa, Honey
Date: confused Raisin, Dried Jujube; similar Prune, Molasses; with Brown Sugar, Old Wood
Dried Apricot: confused Apricot; similar Raisin, Osmanthus; with Honey, Toasted Rice
Prune: confused Raisin; similar Date, Plum; with Forest Floor, Molasses, Cocoa
Longan: confused Lychee, Dried Longan Smoke; similar Date, Raisin; with Pine Smoke, Honey, Roasted Grain
Fresh Grass: confused Cut Hay, Wheatgrass; similar Bamboo Leaf, Snow Pea; with Seaweed, Spinach; opposite Hay
Hay: confused Straw; similar Dried Roots, Cut Hay; with Honey, Chamomile, Malty; opposite Fresh Grass
Straw: confused Hay; similar Dried Bamboo, Roasted Grain; with Honey, Wet Earth
Bamboo Leaf: similar Fresh Grass, Bamboo; with Snow Pea, Edamame, Mint
Wheatgrass: confused Fresh Grass; similar Spinach, Nettle; with Seaweed, Edamame
Nettle: similar Spinach, Wheatgrass; with Seaweed, Hay
Spinach: confused Steamed Spinach; similar Bok Choy, Nettle; with Seaweed, Broth
Asparagus: similar Artichoke, Snow Pea; with Broth, Seaweed
Artichoke: similar Asparagus, Bitter Herb; with Spinach, Broth
Edamame: confused Steamed Edamame, Snow Pea; similar Green Bean; with Seaweed, Chestnut, Toasted Rice
Snow Pea: confused Edamame; similar Green Bean, Zucchini; with Fresh Grass, Chestnut
Bok Choy: similar Spinach, Zucchini; with Broth
Zucchini: similar Snow Pea, Bok Choy, Chayote; with Fresh Grass
Mint: confused Spearmint; similar Peppermint, Menthol; with Lemon, Fresh Grass
Spearmint: confused Mint; similar Peppermint, Basil; with Lemon
Peppermint: confused Menthol, Mint; similar Wintergreen, Eucalyptus; with Camphor
Basil: similar Mint, Thyme; with Lemon, Fresh Grass
Sage: similar Thyme, Rosemary; with Camphor, Hay
Lemongrass: confused Lemon, Lemon Balm; similar Verbena; with Ginger, Mint
Thyme: similar Sage, Oregano, Basil; with Honey, Hay
Dill: similar Fennel Frond, Anise; with Seaweed
Eucalyptus: confused Camphor, Menthol; similar Peppermint, Pine Balm; with Wintergreen
Seaweed: confused Nori, Kelp; similar Brine, Sea Air; with Spinach, Fresh Grass, Broth
Kelp: confused Kombu, Seaweed; similar Dashi, Brine; with Broth
Brine: similar Sea Salt, Oyster Shell, Sea Air; with Seaweed
Oyster Shell: similar Brine, Wet Stone, Chalk; with Seaweed
Sea Air: similar Brine, Salt Spray; with Seaweed, Wet Stone
Chestnut: confused Roasted Chestnut, Edamame; similar Hazelnut, Roasted Sweet Potato; with Toasted Rice, Snow Pea
Almond: confused Marzipan; similar Hazelnut, Cherry; with Vanilla, Toast
Walnut: similar Pecan, Hazelnut; with Old Wood, Malty
Hazelnut: similar Almond, Chestnut, Walnut; with Toast, Cocoa
Pecan: similar Walnut, Maple; with Caramel, Brown Sugar
Pine Nut: similar Almond, Macadamia; with Butter, Pine
Peanut: similar Roasted Grain, Hazelnut; with Toast, Caramel
Toast: confused Baked Bread, Biscuit; similar Roasted Grain; with Caramel, Hazelnut
Roasted Grain: confused Roasted Barley, Toasted Rice; similar Toast, Biscuit; with Charcoal, Caramel
Toasted Rice: confused Genmai, Popcorn; similar Roasted Grain, Sticky Rice; with Seaweed, Chestnut
Popcorn: confused Toasted Rice; similar Roasted Grain, Buttered Corn; with Butter
Baked Bread: confused Toast, Biscuit; similar Malty; with Honey, Brown Sugar
Biscuit: confused Baked Bread, Toast; similar Malty; with Honey, Butter
Roasted Barley: confused Roasted Grain; similar Malty, Barley Tea Roast; with Cocoa, Caramel
Honey: confused Nectar, Honeycomb; similar Beeswax, Maple; with Orchid, Malty, Apricot
Nectar: confused Honey; similar Honeysuckle, Lychee; with Jasmine, Peach
Honeycomb: confused Honey, Beeswax; similar Caramel; with Malty, Raisin
Beeswax: confused Honeycomb; similar Lanolin, Honey; with Hay, Old Wood
Maple: confused Brown Sugar, Caramel; similar Molasses, Honey; with Pecan, Old Wood
Caramel: confused Toffee, Burnt Sugar; similar Brown Sugar, Maple; with Toast, Roasted Grain
Brown Sugar: confused Molasses, Maple; similar Caramel, Date; with Malty, Cinnamon
Malty: similar Roasted Barley, Baked Bread, Brown Sugar; with Honey, Cocoa, Raisin
Toffee: confused Caramel, Butterscotch; similar Brown Sugar; with Malty, Butter
Molasses: confused Brown Sugar; similar Date, Prune, Tar; with Malty, Forest Floor
Vanilla: similar Custard, Cream, Coconut; with Bergamot, Caramel
Cocoa: confused Chocolate; similar Roasted Barley, Malty; with Raisin, Old Wood
Marzipan: confused Almond; similar Custard, Vanilla; with Cherry
Custard: similar Vanilla, Cream, Condensed Milk; with Banana
Chocolate: confused Cocoa; similar Malty, Caramel; with Cherry, Raisin
Broth: confused Dashi, Chicken Broth; similar Miso, Mushroom; with Seaweed, Spinach
Nori: confused Seaweed, Nori Sheet; similar Kelp; with Toasted Rice, Broth
Miso: similar Broth, Soy Milk, Mushroom; with Wet Earth
Dashi: confused Broth, Kombu; similar Kelp, Nori; with Edamame, Spinach
Mushroom: confused Truffle; similar Forest Floor, Wet Earth; with Broth, Leather
Cream: similar Butter, Condensed Milk, Custard; with Orchid, Milk Candy
Butter: confused Ghee; similar Cream, Popcorn; with Orchid, Toast, Butter Tea
Condensed Milk: confused Evaporated Milk; similar Custard, Caramel, Cream; with Malty
Coconut Milk: confused Coconut; similar Cream, Soy Milk; with Pandan
Sticky Rice: similar Toasted Rice, Mochi; with Forest Floor, Wet Earth, Camphor
Pine Smoke: confused Campfire, Smoked Wood; similar Bonfire, Tar; with Longan, Malty, Dried Longan Smoke
Bonfire: confused Campfire; similar Pine Smoke, Smoked Wood; with Charcoal, Leather
Tar: similar Pine Smoke, Molasses, Leather; with Charcoal, Tobacco
Campfire: confused Bonfire, Pine Smoke; similar Smoked Wood; with Charcoal
Smoked Wood: confused Pine Smoke; similar Campfire, Old Wood; with Leather, Tobacco
Charcoal: similar Roasted Grain, Ash, Flint; with Roasted Barley, Mineral Spring
Wet Earth: confused Petrichor, Loam; similar Forest Floor, Mushroom; opposite Wet Stone
Forest Floor: confused Wet Earth; similar Moss, Mushroom, Autumn Leaves; with Leather, Old Wood
Petrichor: confused Wet Earth; similar Wet Stone, Moss
Loam: confused Wet Earth; similar Compost, Garden Soil
Compost: similar Loam, Forest Floor, Humus; with Sticky Rice
Moss: similar Forest Floor, Petrichor, Seaweed
Leather: similar Tobacco, Smoked Wood; with Forest Floor, Pine Smoke
Tobacco: similar Leather, Autumn Leaves, Hay; with Old Wood, Smoked Wood
Autumn Leaves: similar Tobacco, Forest Floor, Hay; with Malty, Old Wood
Betel Nut: similar Old Wood, Camphor, Tobacco; with Forest Floor
Old Wood: confused Antique Wood; similar Camphor, Cedar; with Forest Floor, Date, Sandalwood
Wet Stone: confused River Stone, Slate; similar Flint, Petrichor; with Orchid, Narcissus; opposite Wet Earth
Flint: similar Slate, Charcoal, Wet Stone; with Roasted Grain
Slate: confused Wet Stone; similar Flint, River Stone; with Narcissus
River Stone: confused Wet Stone; similar Slate, Mineral Spring
Chalk: similar Limestone, Oyster Shell, Wet Stone
Chinese Herbs: confused Dang Gui, Angelica; similar Ginseng, Licorice Root; with Dried Roots, Date, Camphor
Ginseng: similar Dried Roots, Licorice Root, Chinese Herbs; with Honey
Licorice Root: confused Anise, Licorice; similar Ginseng, Chinese Herbs; with Dried Roots
Angelica: confused Dang Gui; similar Chinese Herbs, Celery Leaf; with Dried Roots
Dried Roots: similar Ginseng, Chinese Herbs, Old Wood; with Forest Floor, Hay
Camphor: confused Borneol, Menthol; similar Eucalyptus, Camphor Wood; with Old Wood, Sticky Rice
Menthol: confused Peppermint, Camphor; similar Wintergreen, Cooling Tingle; with Eucalyptus
Wintergreen: similar Peppermint, Menthol, Licorice Root; with Camphor
Pine Balm: similar Pine, Camphor, Eucalyptus; with Pine Smoke
Cinnamon: confused Cassia; similar Clove, Nutmeg; with Malty, Orange Peel, Ginger
Clove: similar Cinnamon, Nutmeg; with Orange Peel, Camphor
Ginger: similar Black Pepper, Cardamom; with Lemon, Lemongrass, Cinnamon
Anise: confused Licorice Root, Star Anise; similar Fennel Seed; with Cinnamon
Cardamom: similar Ginger, Eucalyptus; with Cinnamon, Clove
Nutmeg: confused Mace; similar Cinnamon, Clove; with Custard
Black Pepper: similar Ginger, Sichuan Peppercorn; with Leather, Tobacco
Cedar: similar Cypress, Sandalwood, Pine; with Old Wood, Leather
Pine: similar Pine Balm, Cypress, Cedar; with Pine Smoke
Sandalwood: similar Cedar, Agarwood; with Old Wood, Camphor, Orchid
Bamboo: confused Bamboo Leaf; similar Fresh Grass, Cedar; with Straw
Cypress: similar Cedar, Pine, Hinoki
`,
"Wine":`
Cherry: confused Red Plum, Raspberry; similar Sour Cherry, Black Cherry; with Violet, Tobacco, Tomato Leaf, Leather
Strawberry: confused Wild Strawberry, Raspberry; similar Red Cherry Skin; with Cream, Brioche, Mushroom; opposite Underripe Strawberry
Raspberry: confused Strawberry, Red Currant; similar Loganberry; with Violet, Black Pepper, Rose
Red Currant: confused Cranberry, Raspberry; similar Pomegranate, Sour Cherry; with Wet Stone, Chalk
Cranberry: confused Red Currant, Pomegranate; similar Sour Cherry, Rhubarb; with Forest Floor, Mushroom, Tea Leaf
Pomegranate: confused Cranberry, Red Currant; similar Red Plum; with Rose, Dried Rose, Clove
Red Plum: confused Cherry, Plum; similar Pomegranate; with Clove, Cinnamon, Rose
Wild Strawberry: confused Strawberry, Raspberry; similar Red Cherry Skin; with Forest Floor, Mushroom, Violet
Blackberry: confused Mulberry, Cassis; similar Black Cherry, Boysenberry; with Black Pepper, Licorice, Vanilla
Black Cherry: confused Cherry, Plum; similar Blackberry, Cherry Cordial; with Vanilla, Cocoa, Cedar
Plum: confused Black Cherry, Damson; similar Red Plum, Prune; with Cinnamon, Clove, Cocoa; opposite Green Apple
Cassis: confused Blackberry, Blueberry; similar Mulberry, Cassis Bud; with Cedar, Mint, Bell Pepper, Graphite, Cigar Box
Mulberry: confused Blackberry, Blueberry; similar Black Cherry; with Licorice, Black Pepper
Blueberry: confused Cassis, Mulberry; similar Huckleberry; with Violet, Black Pepper, Vanilla
Damson: confused Plum, Prune; similar Black Cherry, Sour Cherry; with Clove, Tobacco, Leather
Lemon: confused Lime, Grapefruit; similar Preserved Lemon, Meyer Lemon; with Chalk, Wet Stone, Saline; opposite Mango
Lime: confused Lemon, Grapefruit; similar Lime Zest, Makrut Lime; with Petrol, Slate, Green Apple
Grapefruit: confused Lime, Lemon; similar Passion Fruit, Citrus Pith; with Gooseberry, Grass, Bell Pepper
Orange Zest: confused Tangerine, Marmalade; similar Candied Orange Peel; with Apricot, Ginger, Honeysuckle
Tangerine: confused Orange Zest, Apricot; similar Kumquat; with Peach, Orange Blossom
Marmalade: confused Orange Zest, Dried Apricot; similar Candied Orange Peel; with Honey Drizzle, Saffron, Ginger, Toffee
Preserved Lemon: confused Lemon; similar Candied Lemon; with Saline, Brioche, Chamomile, Beeswax
Green Apple: confused Yellow Apple, Pear; similar Lime, Gooseberry; with Chalk, Brioche, Wet Stone; opposite Baked Apple
Pear: confused Yellow Apple, Quince; similar White Peach, Poached Pear; with Acacia, Almond Blossom, White Pepper
Peach: confused Nectarine, Apricot; similar White Peach; with Honeysuckle, Orange Blossom, Ginger
Apricot: confused Peach, Nectarine; similar Dried Apricot, Mirabelle; with Honeysuckle, Ginger, Violet, Orange Blossom
Nectarine: confused Peach, White Peach; similar Apricot; with Lime, Wet Stone, Honeysuckle
Quince: confused Pear, Yellow Apple; similar Quince Paste, Membrillo; with Beeswax, Lanolin, Chamomile, Honey Drizzle
White Peach: confused Nectarine, Peach; similar Pear; with Acacia, Jasmine, Brioche
Yellow Apple: confused Pear, Green Apple; similar Golden Delicious; with Butter, Cream, Toasted Hazelnut Oak, Toast
Pineapple: confused Passion Fruit, Guava; similar Mango; with Butter, Vanilla, Coconut, Saffron
Melon: confused Pear, White Peach; similar Honeydew, Cantaloupe; with Butter, Fig, Cream
Lychee: confused Rose, Turkish Delight; similar Guava; with Rose, Ginger, Jasmine
Passion Fruit: confused Guava, Gooseberry; similar Grapefruit; with Grass, Tomato Leaf, Boxwood, Lime
Guava: confused Passion Fruit, Lychee; similar Mango; with Gooseberry, Pineapple
Mango: confused Pineapple, Apricot; similar Papaya; with Passion Fruit, Ginger, Honey Drizzle; opposite Lemon
Banana: confused Bubblegum; similar Pear Drop; with Bubblegum, Strawberry, Raspberry
Kiwi: confused Gooseberry, Lime; similar Green Apple; with Grass, Passion Fruit
Raisin: confused Prune, Fig; similar Sultana, Date; with Fruitcake, Toffee, Walnut
Fig: confused Date, Raisin; similar Fresh Fig, Fig Paste; with Walnut, Tobacco, Leather
Prune: confused Raisin, Plum; similar Date; with Cocoa, Balsamic, Licorice
Dried Cranberry: confused Cranberry, Raisin; similar Sultana; with Dried Rose, Tea Leaf
Date: confused Fig, Prune; similar Raisin; with Toffee, Walnut, Caramel
Fruitcake: confused Christmas Cake; similar Raisin, Fig; with Walnut, Clove, Toffee
Dried Apricot: confused Marmalade, Apricot; similar Mango; with Saffron, Honey Drizzle, Botrytis Honey, Ginger
Violet: confused Iris, Lavender; similar Candied Violet; with Blueberry, Black Cherry, Cassis, Graphite
Lavender: confused Violet; similar Garrigue, Rosemary; with Black Cherry, Thyme
Iris: confused Violet; similar Hyacinth; with Raspberry, Chalk
Hyacinth: confused Iris, Jasmine; similar Lily; with White Peach, Wet Stone
Elderflower: confused Gooseberry, Acacia; similar Honeysuckle; with Grass, Grapefruit, Lime
Orange Blossom: confused Jasmine, Honeysuckle; similar Citrus Blossom; with Apricot, Peach, Tangerine
Acacia: confused Honeysuckle, Elderflower; similar Acacia Blossom; with Pear, White Peach, Beeswax
Honeysuckle: confused Acacia, Jasmine; similar Elderflower, Orange Blossom; with Apricot, Peach, Melon
Jasmine: confused Orange Blossom, Honeysuckle; similar Gardenia; with Lychee, White Peach, Peach
Chamomile: confused Hay Loft, Tea Leaf; similar Linden; with Quince, Beeswax, Preserved Lemon
Rose: confused Lychee, Turkish Delight; similar Potpourri, Fresh Cut Rose; with Ginger, Lychee, Cherry
Potpourri: confused Dried Rose; similar Rose; with Tea Leaf, Dried Leaves, Cherry
Dried Rose: confused Potpourri; similar Rose; with Licorice, Cherry, Leather, Truffle
Turkish Delight: confused Lychee, Rose; similar Rose Lychee Cream; with Ginger
Bell Pepper: confused Jalapeño, Tomato Leaf; similar Capsicum, Asparagus; with Cassis, Graphite, Cedar; opposite Jam
Grass: confused Gooseberry, Tomato Leaf; similar Nettle, Asparagus; with Grapefruit, Passion Fruit, Lime
Tomato Leaf: confused Bell Pepper, Grass; similar Cassis Bud, Boxwood; with Cherry, Passion Fruit
Jalapeño: confused Bell Pepper; similar Green Peppercorn; with Grass, Grapefruit, Lime
Gooseberry: confused Kiwi, Passion Fruit; similar Grass, Elderflower; with Boxwood, Grapefruit, Lime
Boxwood: confused Tomato Leaf, Gooseberry; similar Grass; with Passion Fruit, Grapefruit
Asparagus: confused Bell Pepper, Grass; similar Snap Pea; with Gooseberry, Wet Stone
Eucalyptus: confused Mint; similar Camphor Oil; with Cassis, Black Pepper, Bay Leaf
Mint: confused Eucalyptus; similar Dill; with Cassis, Cedar, Cocoa
Thyme: confused Rosemary, Sage; similar Garrigue; with Lavender, Black Olive, Black Pepper
Bay Leaf: confused Sage; similar Eucalyptus; with Black Pepper, Thyme, Blackberry
Sage: confused Bay Leaf, Thyme; similar Rosemary; with Cherry, Dried Leaves
Rosemary: confused Thyme, Lavender; similar Garrigue; with Black Olive, Blackberry
Tea Leaf: confused Dried Leaves, Chamomile; similar Tobacco; with Cranberry, Cherry, Rose
Dill: confused Coconut, Mint; similar Fresh Fennel; with Coconut, Vanilla, American Oak
Cinnamon: confused Nutmeg, Baking Spices; similar Cinnamon Stick; with Clove, Vanilla, Plum
Clove: confused Cinnamon, Nutmeg; similar Baking Spices; with Plum, Vanilla, Cedar
Anise: confused Licorice; similar Fennel; with Black Cherry, Blackberry, Black Pepper
Nutmeg: confused Clove, Cinnamon; similar Baking Spices; with Vanilla, Butter, Toast
Vanilla: confused Coconut, Cream; similar Caramel; with Toast, Coconut, Cinnamon, Blackberry; opposite Grass
Ginger: confused White Pepper; similar Candied Ginger; with Lychee, Apricot, Marmalade
Black Pepper: confused White Pepper, Clove; similar Cracked Peppercorn; with Blackberry, Violet, Game, Black Olive
Licorice: confused Anise; similar Red Licorice; with Blackberry, Plum, Black Cherry
White Pepper: confused Black Pepper, Ginger; similar Green Peppercorn; with Lime, Pear, Grapefruit
Juniper: confused Black Pepper; similar Rosemary; with Blackberry, Black Olive, Game
Cardamom: confused Eucalyptus; similar Ginger; with Rose, Lychee
Forest Floor: confused Wet Leaves, Mushroom; similar Sous Bois; with Cherry, Truffle, Tea Leaf
Mushroom: confused Truffle, Forest Floor; similar Dried Porcini; with Cherry, Wild Strawberry, Cranberry
Truffle: confused Mushroom, Forest Floor; similar Dried Porcini; with Dried Rose, Licorice, Leather
Wet Leaves: confused Forest Floor, Dried Leaves; similar Autumn Leaves; with Mushroom, Cherry
Potting Soil: confused Beetroot, Forest Floor; similar Black Earth; with Plum, Mushroom
Beetroot: confused Potting Soil; similar Sous Bois; with Cherry, Strawberry, Cranberry
Wet Stone: confused Slate, Chalk; similar Petrichor, Crushed Rock; with Lemon, Lime, Green Apple; opposite Butter
Chalk: confused Wet Stone, Crushed Rock; similar Oyster Shell, Limestone; with Lemon, Green Apple, Brioche
Flint: confused Struck Match, Wet Stone; similar Struck Flint; with Lemon, Grapefruit, Smoke
Saline: confused Crushed Rock; similar Sea Spray, Oyster Shell; with Lemon, Chalk, Preserved Lemon
Slate: confused Wet Stone; similar Wet Slate Roof; with Lime, Petrol, Green Apple
Petrichor: confused Wet Stone; similar Crushed Rock; with Lemon, Slate
Crushed Rock: confused Wet Stone, Chalk; similar Graphite; with Blackberry, Lime
Coconut: confused Dill, Vanilla; similar Toasted Coconut; with American Oak, Vanilla, Blackberry
Cedar: confused Cigar Box, Sandalwood; similar Pencil Lead; with Cassis, Mint, Tobacco
Sandalwood: confused Cedar; similar Resin; with Rose, Vanilla
Baking Spices: confused Cinnamon, Clove; similar Nutmeg; with Vanilla, Plum, Toast
Toast: confused Brioche, Biscuit; similar Toasted Bread; with Vanilla, Butter, Smoke
Smoke: confused Charred Wood, Struck Match; similar Bacon Fat; with Black Pepper, Toast, Game
Espresso: confused Coffee Grounds, Cocoa; similar Mocha; with Vanilla, Blackberry, Charred Wood
Charred Wood: confused Smoke; similar Bourbon Barrel; with Coconut, Vanilla, Espresso
Coffee Grounds: confused Espresso; similar Roasted Coffee; with Cocoa, Plum
Caramel: confused Toffee; similar Vanilla; with Raisin, Walnut, Fig
Brioche: confused Biscuit, Toast; similar Toasted Brioche; with Lemon, Green Apple, Chalk
Sourdough: confused Bread Dough; similar Sourdough Starter; with Yogurt, Lemon, Lees
Bread Dough: confused Sourdough, Brioche; similar Lees, Yeast Roll; with Green Apple, Lemon
Biscuit: confused Brioche, Toast; similar Shortbread; with Roasted Nuts, Lemon, Chalk
Lager: confused Bread Dough; similar Beer Bread; with Green Apple, Sourdough
Butter: confused Cream, Lanolin; similar Salted Butter; with Vanilla, Toast, Yellow Apple; opposite Wet Stone
Cream: confused Butter, Yogurt; similar Whipped Cream; with Strawberry, Brioche
Yogurt: confused Cream, Sourdough; similar Crème Fraîche; with Butter, Green Apple
Cheese Rind: confused Yogurt, Barnyard; similar Parmesan; with Brioche, Lees, Walnut
Barnyard: confused Horse Blanket, Band-Aid; similar Farmhouse Funk; with Leather, Game, Cherry
Musk: confused Game, Sweaty Saddle; similar Leather; with Rose, Leather
Horse Blanket: confused Barnyard, Band-Aid; similar Sweaty Saddle; with Leather, Game
Band-Aid: confused Horse Blanket, Barnyard; similar Smoke; with Leather, Game
Game: confused Leather, Barnyard; similar Smoked Meat, Bacon Fat; with Black Pepper, Black Olive, Violet
Leather: confused Tobacco, Game; similar Antique Leather Chair; with Cherry, Dried Rose, Tobacco
Tobacco: confused Cigar Box, Dried Leaves; similar Tobacco Leaf; with Cedar, Leather, Fig
Cocoa: confused Espresso, Coffee Grounds; similar Mocha; with Black Cherry, Plum, Vanilla, Mint
Cigar Box: confused Cedar, Tobacco; similar Cedar Humidor; with Cassis, Graphite, Leather
Dried Leaves: confused Tea Leaf, Tobacco; similar Autumn Leaves; with Dried Rose, Mushroom, Fig
Walnut: confused Roasted Nuts, Bruised Apple; similar Rancio; with Toffee, Fig, Caramel
Bruised Apple: confused Walnut, Yellow Apple; similar Bruised Pear; with Walnut, Roasted Nuts, Saline
Toffee: confused Caramel, Roasted Nuts; similar Praline; with Fig, Raisin, Walnut, Marmalade
Roasted Nuts: confused Walnut, Toffee; similar Toasted Almond; with Brioche, Toast, Bruised Apple
Petrol: confused Kerosene, Rubber; similar Diesel; with Lime, Slate, Green Apple
Beeswax: confused Lanolin, Honey Drizzle; similar Paraffin; with Quince, Chamomile, Saffron, Acacia
Kerosene: confused Petrol; similar Paraffin; with Lime, Slate
Lanolin: confused Beeswax, Butter; similar Waxed Canvas; with Quince, Chamomile, Lemon
Rubber: confused Burnt Rubber, Petrol; similar New Tire; with Smoke, Black Pepper
Musty Cork: confused Wet Cardboard, Wet Newspaper; similar Moldy Cork; with Damp Basement; opposite Petrichor
Wet Newspaper: confused Wet Cardboard, Musty Cork; similar Damp Basement
Damp Basement: confused Musty Cork, Wet Cardboard; similar Mildew; with Wet Dog
Wet Cardboard: confused Wet Newspaper, Musty Cork; similar Damp Basement
Wet Dog: confused Damp Basement, Barnyard; similar Wet Fur; with Musty Cork
Vinegar: confused Nail Polish, Balsamic; similar Acetone; with Nail Polish
Nail Polish: confused Acetone, Vinegar; similar Solvent, Pear Drop; with Vinegar
Acetone: confused Nail Polish; similar Solvent, Glue; with Vinegar
Balsamic: confused Vinegar, Prune; similar Fig Balsamic; with Prune, Raisin, Cherry
Struck Match: confused Flint, Smoke; similar Burnt Match, Spent Match Head; with Lemon, Toast, Grapefruit
Rotten Egg: confused Boiled Cabbage, Struck Match; similar Sewer Whiff; with Garlic, Rubber
Burnt Rubber: confused Rubber, Struck Match; similar New Tire; with Smoke, Garlic
Garlic: confused Boiled Cabbage, Rotten Egg; similar Chive Blossom; with Burnt Rubber
Boiled Cabbage: confused Garlic, Rotten Egg; similar Canned Corn; with Burnt Rubber
`,
"Beer":`
Bread Crust: similar Toast, Biscuit; confused Biscuity; with Caramel, Noble
Biscuit: confused Biscuity, Digestive Biscuit; similar Cracker, Bread Crust; with Toffee, Earthy
Dough: confused Doughy, Proofing Dough; similar Fresh Yeast, Grainy; with Wheat
Cracker: confused Water Cracker; similar Grainy, Biscuit; with Grassy, Noble
Toast: similar Bread Crust, Burnt Toast; confused Biscuity; with Caramel, Toffee
Wheat: similar Dough, Grainy; with Banana, Clove, Lemon, Coriander
Grainy: confused Old Grain, Cracker; similar Wheat, Hay; with Grassy
Caramel: confused Toffee; similar Brown Sugar, Burnt Sugar; with Bread Crust, Raspberry; opposite Ash
Toffee: confused Caramel, Butterscotch; similar Brown Sugar; with Biscuit, Earthy
Burnt Sugar: similar Caramel, Treacle; confused Molasses; with Burnt Toast, Dark Chocolate
Brown Sugar: confused Muscovado; similar Toffee, Caramel; with Banana, Clove
Bread Pudding: similar Malt Loaf, Brioche, Sticky Toffee Pudding; with Vanilla, Cinnamon, Fig
Coffee: confused Espresso, Cold Brew; similar Roasted Chicory; with Chocolate, Vanilla, Lactose
Chocolate: confused Cocoa Nib, Carob; similar Dark Chocolate; with Coffee, Vanilla, Lactose, Peanut Butter
Burnt Toast: confused Charred Rye; similar Ash, Espresso; with Burnt Grain Husk
Espresso: confused Coffee; similar Burnt Toast; with Dark Chocolate, Bourbon
Dark Chocolate: confused Chocolate, Cocoa Nib; similar Espresso; with Coffee, Vanilla Bean, Cherry
Ash: confused Burnt Grain Husk; similar Smoke, Burnt Toast; with Espresso; opposite Caramel
Smoke: confused Smoked Phenol, Medicinal; similar Ash; with Maple Bacon, Leathery
Grapefruit: confused Pomelo, Grapefruit Zest Oil; similar Tangerine, Orange Peel; with Pine Resin, Passion Fruit
Orange Peel: confused Tangerine, Sour Orange; similar Citrus Pith; with Coriander, Clove
Lime Zest: confused Makrut Lime, Lime Leaf; similar Lemon; with Lemongrass, Coconut
Lemon: confused Meyer Lemon, Lemongrass; similar Lime Zest; with Coriander, Wheat, Lactic Tang
Tangerine: confused Orange Peel, Tangerine Dream; similar Grapefruit; with Mango, Pineapple
Yuzu: confused Grapefruit, Lime Zest; similar Calamansi, Bergamot; with Passion Fruit
Mango: confused Ripe Mango Skin, Papaya; similar Peach; with Passion Fruit, Pineapple, Grapefruit, Catty
Passion Fruit: confused Passionfruit Pulp, Guava; similar Gooseberry; with Mango, Pineapple, Grapefruit
Guava: confused Passion Fruit; similar Papaya, Lychee; with Mango, Catty
Lychee: confused Rose, Grape Candy; similar Melon, Guava; with White Grape
Pineapple: confused Mango; similar Passion Fruit; with Coconut, Tangerine, Grapefruit
Papaya: confused Mango, Melon; similar Guava; with Pineapple
Melon: confused Honeydew, Cantaloupe; similar Lychee, Pear; with Strawberry
Coconut: confused Toasted Coconut, Vanilla; with Pineapple, Lime Zest, Chocolate, Coffee
Apricot: confused Peach, Stone Fruit; similar Nectarine; with Mango, Honey
Peach: confused Apricot, Nectarine; similar Stone Fruit; with Mango, Pear
Nectarine: confused Peach; similar Apricot; with Tangerine
Cherry: confused Sour Cherry, Cherry Skin; similar Raspberry; with Dark Chocolate, Barnyard
Pine Resin: confused Sticky Resin, Resin; similar Spruce; with Grapefruit, Caramel
Spruce: confused Fir, Pine Needle Tea; similar Pine Resin, Juniper; with Sap
Juniper: confused Juniper Resin, Gin Barrel; similar Spruce, Pine Resin; with Rye Crust, Coriander
Fir: confused Spruce, Grand Fir; similar Christmas Tree; with Sap, Resin
Sap: confused Conifer Sap; similar Sticky Resin, Spruce; with Fir
Resin: confused Pine Resin, Sticky Resin; similar Hop Oil, Terpene Oil; with Grapefruit, Catty
Weedy: confused Sticky Icky, Catty; similar Grassy, Garlic-Onion; with Pine Resin, Diesel
Catty: confused Blackcurrant, Weedy; similar Gooseberry; with Passion Fruit, Mango, Guava
Garlic-Onion: confused Green Onion; similar Weedy, Catty; with Diesel
Sticky Resin: confused Resin, Sticky Icky; similar Pine Resin, Hop Oil; with Weedy, Grapefruit
Floral: similar Noble, Lavender, Rose; with Honey, Coriander, Chamomile
Grassy: confused Hay, Weedy; similar Tea, Noble; with Cracker, Lemon
Noble: confused Floral, Tea; similar Grassy, White Pepper; with Cracker, Bread Crust, Hay
Lavender: confused Floral; similar Chamomile, Rose; with Honey, Lemon
Chamomile: confused Hay; similar Lavender, Tea; with Honey, Wheat
Mint: confused Eucalyptus, Peppermint; similar Spruce; with Chocolate
Tea: confused Noble; similar Grassy, Hay; with Lemon, Chamomile
Banana: confused Bubblegum, Pear; similar Juicy Fruit Gum; with Clove, Wheat, Vanilla
Pear: confused Pear Drops, Apple; similar Melon; with Banana, Honey
Apple: confused Red Apple, Pear; similar Green Apple; with Honey, Cinnamon
Stone Fruit: confused Peach, Apricot; similar Nectarine; with Mango, White Pepper
Bubblegum: confused Banana, Tutti Frutti; similar Pear Drops, Strawberry; with Clove
Strawberry: confused Raspberry, Bubblegum; similar Cherry; with Melon, Vanilla, Lactose
Pear Drops: confused Pear, Bubblegum; similar Banana, Juicy Fruit Gum; with Strawberry
Red Apple: confused Apple; similar Cherry, Pear; with Caramel
Clove: confused Allspice, Clove Cigarette; similar Nutmeg; with Banana, Wheat, Vanilla; opposite Bubblegum
White Pepper: confused Grains of Paradise, Peppercorn Medley; similar Coriander; with Pear, Orange Peel, Stone Fruit
Nutmeg: confused Allspice, Cinnamon; similar Clove; with Pumpkin Spice, Vanilla
Allspice: confused Clove, Nutmeg; similar Cinnamon; with Pumpkin Spice
Cinnamon: confused Allspice; similar Nutmeg, Ginger; with Vanilla, Apple, Pumpkin Spice
Doughy: confused Dough, Fresh Yeast; similar Proofing Dough; with Brioche
Brioche: confused Biscuity, Bread Crust; similar Doughy, Bread Pudding; with Honey, Pear
Fresh Yeast: confused Doughy, Dough; similar Nutritional Yeast, Bakery Air; with Wheat
Biscuity: confused Biscuit, Bread Crust; similar Brioche, Toast; with Honey
Green Apple: confused Sour Apple Candy, Pear; similar Gooseberry, White Grape; with Lemon, Grassy
Vinegar: confused Cider Vinegar Nip; similar Sour Cherry, Lactic Tang; with Cherry, Barnyard, Leathery
Sour Cherry: confused Cherry, Tart Cherry Juice; similar Raspberry; with Barnyard, Vinegar, Toasted Oak
Gooseberry: confused Green Currant, Catty; similar Passion Fruit, Kiwi; with Lime Zest, Grassy
Lactic Tang: confused Salty Gose Tang, Berry Yogurt; similar Lemon, Vinegar; with Wheat, Coriander, Raspberry
Kiwi: confused Gooseberry, Green Apple; similar Lime Zest, Passion Fruit; with Melon
Barnyard: confused Horse Blanket, Farm Gate; similar Hay, Earthy; with Sour Cherry, Leathery, Vinegar
Hay: confused Compost Straw, Grassy; similar Chamomile, Grainy; with Barnyard, Lemon
Earthy: confused Musty Cellar, Mushroom; similar Forest Floor, Barnyard; with Toffee, Biscuit
Horse Blanket: confused Barnyard, Wet Wool; similar Leathery, Goaty; with Sour Cherry
Musty Cellar: confused Lambic Cellar, Cellar Mold; similar Earthy, Papery; with Cardboard
Goaty: confused Cheese Rind, Socks; similar Horse Blanket; with Barnyard
Socks: confused Gym Bag, Goaty; similar Rancid Butter, Cheese Rind; with Faded Hops
Vanilla: confused Vanilla Oak, Marshmallow; similar Vanilla Bean; with Coffee, Coconut, Bourbon
Honey: confused Honeycomb, Golden Syrup; similar Biscuity; with Floral, Chamomile, Ginger
Lactose: confused Heavy Cream, Marshmallow; similar Vanilla; with Coffee, Chocolate, Strawberry
Maple: confused Maple Pecan, Brown Sugar; similar Caramel, Molasses; with Coffee, Maple Bacon
Marshmallow: confused Marshmallow Fluff, Vanilla; similar Toasted Meringue, S'mores; with Graham Cracker, Chocolate
Peanut Butter: confused Roast Hazelnut; with Chocolate, Raspberry, Lactose
Raspberry: confused Boysenberry, Strawberry; similar Blackberry, Sour Cherry; with Lactic Tang, Chocolate
Blackberry: confused Boysenberry, Marionberry; similar Raspberry, Blackcurrant; with Vanilla, Lactose
Coriander: confused Cracked Coriander, Orange Peel; similar Lemon, White Pepper; with Wheat, Lactic Tang
Pumpkin Spice: confused Gingerbread, Chai; similar Cinnamon, Allspice; with Brown Sugar, Vanilla
Ginger: confused Dried Ginger, Grains of Paradise; similar Cinnamon, Lemongrass; with Honey, Lemon
Chili: confused Ancho Chili; similar Ginger, White Pepper; with Chocolate, Mango, Lime Zest
Grains of Paradise: confused White Pepper, Cardamom; similar Coriander, Ginger; with Orange Peel
Diacetyl: confused Butterscotch, Movie Popcorn; similar Slick Butter, Rancid Butter; with Caramel; opposite Sticky Resin
Movie Popcorn: confused Diacetyl, Melted Movie Butter; similar Cooked Corn, Butterscotch
Butterscotch: confused Diacetyl, Toffee; similar Caramel, Butterscotch Slick; with Movie Popcorn
Rancid Butter: confused Socks, Goaty; similar Diacetyl, Cheese Rind; with Faded Hops
Cooked Corn: confused Creamed Corn, Canned Peas; similar Cabbage, Cooked Vegetables; with Celery
Cabbage: confused Boiled Cabbage Water, Cooked Corn; similar Cooked Vegetables, Garlic-Onion; with Skunky
Celery: confused Cooked Vegetables, Asparagus Water; similar Tomato Juice, Cabbage
Tomato Juice: confused Celery; similar Cooked Vegetables; with Cooked Corn
Cooked Vegetables: confused Cooked Corn, Cabbage; similar Celery, Tomato Juice
Cardboard: confused Papery, Wet Paper; similar Old Grain; with Sherry-like, Faded Hops
Skunky: confused Lightstruck, Weedy; similar Garlic-Onion, Catty; with Cabbage
Papery: confused Cardboard, Papery Finish; similar Wet Paper; with Sherry-like, Metallic
Sherry-like: confused Sherry, Oloroso; similar Cardboard, Bread Pudding; with Papery, Leathery
Wet Dog: confused Wet Wool, Horse Blanket; similar Musty Cellar, Goaty; with Barnyard
Leathery: confused Brett Leather, Wet Saddle; similar Horse Blanket, Sherry-like; with Smoke, Barnyard
Metallic: confused Rusty Can, Old Keg Line; similar Papery; with Cardboard
`,
"Whiskey":`
Malted Barley: confused Biscuit, Cooked Mash; similar Malted Bread; with Honey, Heather, Pear
Corn: confused Cornbread; similar Corn Grits; with Vanilla, Caramel, Coconut
Rye Bread: confused Black Pepper; similar Rye Spice Grain; with Black Pepper, Anise, Herb Garden, Cinnamon
Oatmeal: confused Porridge; similar Porridge Oats; with Honey, Golden Syrup, Apple
Wheat: confused Bran, Biscuit; similar Semolina; with Honey, Vanilla, Caramel
Cornbread: confused Corn; similar Corn Grits; with Butterscotch, Maple, Vanilla
Cooked Mash: confused Porridge, Malted Barley; similar Warm Mash Tun; with Sawdust, Pear
Biscuit: confused Shortbread, Malted Barley; similar Digestive Biscuit; with Honey, Vanilla, Pear
Porridge: confused Oatmeal, Cooked Mash; similar Honeyed Porridge; with Honey, Golden Syrup, Cinnamon
Bran: confused Wheat, Hay; similar Weetabix; with Malted Barley, Straw
Shortbread: confused Biscuit, Pastry; similar Millionaire Shortbread; with Vanilla, Butterscotch, Honey
Toasted Bread: confused Toasted Oak, Biscuit; similar Brown Toast; with Malted Barley, Marmalade, Peat Smoke
Pastry: confused Shortbread, Biscuit; similar Pear Tart; with Baked Apple, Vanilla, Cinnamon
Apple: confused Pear, Green Apple; similar Baked Apple; with Malted Barley, Honey, Cinnamon
Pear: confused Apple, Pear Drop; similar Poached Pear; with Vanilla, Heather, Malted Barley
Green Apple: confused Apple, Pear Drop; similar Lime; with Cut Grass, Pear; opposite Baked Apple
Banana: confused Pear Drop; similar Banana Bread; with Vanilla, Coconut, Caramel
Baked Apple: confused Toffee Apple, Apple; similar Apple Crumble; with Cinnamon, Vanilla, Caramel
Pear Drop: confused Pear, Banana; similar Green Apple; with Cut Grass, Vanilla
Quince: confused Pear, Apple; similar Quince Jelly; with Honey, Beeswax
Raisin: confused Sultana, Prune; similar Rum-Soaked Raisin; with Sherry, Fruitcake, Walnut, Cinnamon
Fig: confused Date, Prune; similar Fig Roll; with Sherry, Walnut, Leather
Date: confused Fig, Prune; similar Date Loaf; with Sherry, Molasses, Walnut
Prune: confused Raisin, Date; similar Prune Compote; with Pedro Ximénez, Dark Chocolate, Leather
Sultana: confused Raisin, Dried Apricot; similar Golden Syrup; with Honey, Vanilla, Toffee Apple
Dried Apricot: confused Sultana, Marmalade; similar Stewed Fruit; with Honey, Vanilla
Orange Peel: confused Marmalade, Candied Peel; similar Orange Oil; with Dark Chocolate, Clove, Sherry
Lemon: confused Lime; similar Lemon Curd; with Peat Smoke, Sea Spray, Cut Grass
Marmalade: confused Orange Peel, Candied Peel; similar Seville Orange; with Toasted Bread, Sherry, Ginger
Lime: confused Lemon, Grapefruit; similar Lime Cordial; with Peat Smoke, Cut Grass
Grapefruit: confused Lime, Lemon; similar Candied Grapefruit; with Vanilla, Pear
Candied Peel: confused Marmalade, Orange Peel; similar Glacé Cherry; with Fruitcake, Christmas Cake, Clove
Heather: confused Honey, Hay; similar Burning Heather; with Honey, Peat Smoke, Malted Barley
Rose Water: confused Geranium, Violet; similar Rose Garden; with Sherry, Marzipan
Elderflower: confused Pear Drop, Heather; similar Honeysuckle; with Pear, Green Apple, Cut Grass
Geranium: confused Rose Water; similar Violet; with Sherry, Red Wine
Violet: confused Rose Water, Geranium; similar Lavender Field; with Pear, Vanilla
Cut Grass: confused Hay, Fern; similar Barley Field; with Green Apple, Lemon, Pear; opposite Peat Smoke
Hay: confused Straw, Heather; similar Hay Barn; with Honey, Malted Barley
Straw: confused Hay, Bran; similar Barley Husk; with Malted Barley, Lemon
Herb Garden: confused Fern, Cut Grass; similar Menthol; with Pear, Lemon
Fern: confused Cut Grass, Herb Garden; similar Bracken; with Wet Moss, Peat Smoke
Bonfire: confused Peat Smoke, Campfire Embers; similar Wood Ash; with Tar, Ash
Tar: confused Creosote, Rubber; similar Tar Rope; with Peat Smoke, Iodine, Anise
Creosote: confused Tar, Antiseptic; similar Railway Sleeper; with Peat Smoke, Iodine
Peat Smoke: confused Bonfire, Smoked Fish; similar Turf Fire; with Iodine, Sea Spray, Lemon, Tar; opposite Cut Grass
Ash: confused Charcoal, Bonfire; similar Wood Ash; with Peat Smoke
Charcoal: confused Ash, Campfire Embers; similar Oak Char; with Vanilla, Toasted Oak
Smoked Fish: confused Peat Smoke, Iodine; similar Kippers; with Sea Spray, Lemon
Iodine: confused Antiseptic, TCP; similar Seaweed Smoke; with Peat Smoke, Sea Spray, Tar
Antiseptic: confused TCP, Iodine, Bandages; similar Carbolic Soap; with Peat Smoke
Sea Spray: confused Iodine; similar Harbour Air; with Peat Smoke, Lemon, Smoked Fish
TCP: confused Antiseptic, Iodine; similar Bandages; with Peat Smoke, Creosote
Bandages: confused TCP, Antiseptic; similar Hospital Gauze; with Peat Smoke
Carbolic Soap: confused Antiseptic, Creosote; similar Pine Disinfectant; with Peat Smoke
Vanilla: confused Coconut, Caramel; similar Vanilla Fudge; with Toasted Oak, Coconut, Banana
Coconut: confused Vanilla, Sawdust; similar Oak Vanilla Cream; with Vanilla, Banana, Toasted Oak
Cedar: confused Pencil Shavings, Sandalwood; similar Cigar Box; with Tobacco Pouch, Leather
Sawdust: confused Pencil Shavings, Cedar; similar Virgin Oak; with Cooked Mash, Coconut
Sandalwood: confused Cedar; similar Mizunara; with Vanilla, Coconut
Pencil Shavings: confused Cedar, Sawdust; similar Cigar Box; with Vanilla
Toasted Oak: confused Toasted Bread, Charcoal; similar Toasted Stave; with Vanilla, Caramel, Clove
Espresso: confused Dark Chocolate; similar Coffee Bean; with Molasses, Sherry
Dark Chocolate: confused Espresso, Burnt Sugar; similar Black Forest Cake; with Orange Peel, Cherry Brandy, Sherry
Burnt Sugar: confused Caramel, Molasses; similar Burnt Caramel; with Vanilla, Charcoal
Molasses: confused Treacle, Burnt Sugar; similar Black Treacle; with Raisin, Dark Chocolate
Campfire Embers: confused Bonfire, Charcoal; similar Ember Glow; with Peat Smoke
Sherry: confused Port, Madeira; similar Oloroso; with Raisin, Walnut, Dark Chocolate
Port: confused Red Wine, Sherry; similar Ruby Port; with Dark Chocolate, Prune
Madeira: confused Marsala, Sherry; similar Rancio; with Walnut, Caramel
Marsala: confused Madeira; similar Sherry; with Raisin, Fig
Red Wine: confused Port; similar Wine Cask; with Geranium, Dark Chocolate
Rancio: confused Madeira, Walnut; similar Amontillado; with Leather, Old Books, Sherry
Fruitcake: confused Christmas Cake; similar Dundee Cake; with Sherry, Clove, Raisin
Walnut: confused Rancio; similar Amontillado; with Sherry, Fig, Leather
Christmas Cake: confused Fruitcake; similar Plum Pudding; with Sherry, Cinnamon, Marzipan
Marzipan: confused Christmas Cake; similar Seed Cake; with Cherry Brandy, Vanilla, Rose Water
Treacle: confused Molasses, Golden Syrup; similar Treacle Toffee; with Dark Chocolate, Raisin
Stewed Fruit: confused Baked Apple, Fruitcake; similar Rumtopf; with Cinnamon, Sherry
Leather: confused Tobacco Pouch, Saddle; similar Leather Armchair; with Sherry, Old Books, Tobacco Pouch
Tobacco Pouch: confused Cigar Box, Leather; similar Pipe Rack; with Sherry, Fig
Old Books: confused Leather, Rancio; similar Bookbinding Glue; with Beeswax, Furniture Polish
Saddle: confused Leather; similar Tack Room; with Sherry, Furniture Polish
Cigar Box: confused Cedar, Tobacco Pouch; similar Pencil Shavings; with Leather, Dark Chocolate
Beeswax: confused Candle Wax, Furniture Polish; similar Honeycomb Wax; with Honey, Heather, Old Books
Candle Wax: confused Beeswax, Plasticine; similar Church Candle; with Pear, Lemon
Plasticine: confused Putty, Candle Wax; similar Crayon; with Candle Wax
Furniture Polish: confused Beeswax; similar Lanolin; with Old Books, Sherry, Rancio
Putty: confused Plasticine; similar Lanolin; with Candle Wax
Struck Match: confused Gunpowder, Spent Fireworks; similar Cordite; with Sherry, Meaty
Rubber: confused Tar, Struck Match; similar Vulcanized Rubber; with Struck Match
Meaty: confused Cabbage Water; similar Charred Steak; with Sherry, Struck Match, Rubber
Cabbage Water: confused Meaty; similar Mineral Spring Egg; with Struck Match
Gunpowder: confused Struck Match, Spent Fireworks; similar Cordite; with Sherry, Peat Smoke
Spent Fireworks: confused Gunpowder, Struck Match; similar Fireworks Smoke
Honey: confused Golden Syrup, Heather; similar Heather Honey; with Malted Barley, Vanilla, Beeswax
Caramel: confused Butterscotch, Toffee Apple; similar Burnt Sugar; with Vanilla, Corn, Toasted Oak
Butterscotch: confused Caramel, Vanilla Fudge; similar Tablet; with Vanilla, Cornbread
Maple: confused Golden Syrup, Caramel; similar Treacle; with Corn, Vanilla, Cinnamon
Golden Syrup: confused Honey, Maple; similar Syrup Sponge; with Porridge, Sultana
Vanilla Fudge: confused Butterscotch; similar Fudge; with Vanilla, Toasted Oak
Toffee Apple: confused Baked Apple, Caramel; similar Treacle Toffee; with Cinnamon
Cinnamon: confused Nutmeg, Clove; similar Allspice; with Baked Apple, Vanilla, Rye Bread
Clove: confused Cinnamon, Nutmeg; similar Allspice; with Orange Peel, Sherry, Toasted Oak
Black Pepper: confused White Pepper, Chili Warmth; similar Cracked Coriander; with Rye Bread, Peat Smoke
Ginger: confused Chili Warmth; similar Stem Ginger; with Marmalade, Lemon
Nutmeg: confused Cinnamon, Clove; similar Mace; with Vanilla, Toasted Oak
Anise: confused Fennel Seed; with Rye Bread, Dark Chocolate, Tar
White Pepper: confused Black Pepper, Ginger; similar Chili Warmth; with Pear, Malted Barley
Chili Warmth: confused Black Pepper, Ginger; similar Dried Chili; with Rye Bread, Cinnamon
`,
"Chocolate":`
Cacao Nib: confused Roasted Cacao, Fire-Toasted Nib; similar Bitter Cocoa, Coffee; with Red Wine, Raisin
Dark Cocoa: confused Bitter Cocoa, Cocoa Powder; similar Brownie, Espresso; with Black Cherry, Tobacco
Cocoa Powder: confused Dutched Cocoa, Dark Cocoa; similar Brownie, Malted Milk; with Cinnamon
Bitter Cocoa: confused Dark Cocoa, Cacao Nib; similar Espresso, Burnt Toast; with Tobacco; opposite Condensed Milk
Roasted Cacao: confused Cacao Nib; similar Coffee, Toast; with Hazelnut, Caramel
Brownie: confused Fudge, Chocolate Cake; similar Dark Cocoa, Cocoa Powder; with Walnut, Pecan
Fudge: confused Brownie, Caramel; similar Condensed Milk, Dulce de Leche; with Butter, Malted Milk
Chocolate Cake: confused Brownie, Devil's Food; similar Pastry, Cocoa Powder; with Black Cherry, Cream
Biscuit: confused Pastry, Malted Milk; similar Toast, Cinnamon Toast; with Butter, Honey, Hazelnut
Pastry: confused Biscuit, Almond Croissant; similar Butter, Chocolate Cake; with Almond
Raspberry: confused Strawberry, Cranberry; similar Blackcurrant, Cherry; with Rose, Yogurt
Cherry: confused Black Cherry, Dried Cherry; similar Raspberry, Plum; with Almond, Red Wine
Blackcurrant: confused Blueberry, Elderberry; similar Raspberry, Violet; with Tobacco, Mint
Strawberry: confused Raspberry; similar Banana, Cream; with Yogurt, Milk Powder
Blueberry: confused Blackcurrant, Wild Blueberry; similar Violet; with Lavender, Cream
Cranberry: confused Raspberry, Dried Cranberry; similar Cherry, Lime; with Orange
Orange: confused Mandarin, Candied Orange; similar Bergamot, Apricot; with Cinnamon, Orange Blossom
Bergamot: confused Orange, Lemon; similar Black Tea, Lavender; with Jasmine, Violet
Lemon: confused Lime, Citron; similar Grapefruit, Yogurt; with Ginger, Cream
Lime: confused Lemon; similar Grapefruit, Yuzu; with Coconut, Passion Fruit, Mint
Grapefruit: confused Lemon, Lime; similar Bergamot, Cranberry; with Pink Pepper
Apricot: confused Peach, Dried Apricot; similar Mango, Orange; with Honey, Almond, Jasmine
Plum: confused Prune, Black Cherry; similar Fig, Raisin; with Cinnamon, Tobacco
Peach: confused Apricot, Nectarine; similar Mango, White Peach; with Cream, Honeysuckle
Black Cherry: confused Cherry, Plum; similar Blackcurrant, Dried Cherry; with Dark Cocoa, Red Wine
Banana: confused Plantain, Green Banana; similar Mango; with Caramel, Malted Milk, Coconut
Passion Fruit: confused Mango, Lychee; similar Lime, Pineapple; with Coconut, Passion Ganache
Coconut: confused Coconut Cream, Toasted Coconut; similar Macadamia, Cream; with Pineapple, Banana
Mango: confused Peach, Passion Fruit; similar Apricot, Pineapple; with Coconut, Chili
Pineapple: confused Passion Fruit; similar Mango, Lime; with Coconut
Lychee: confused Rose, Passion Fruit; similar Peach, Elderflower; with Raspberry
Raisin: confused Sultana, Prune; similar Fig, Date; with Rum Raisin, Port, Cinnamon
Fig: confused Date, Fig Jam; similar Prune, Raisin; with Walnut, Honey, Port
Prune: confused Plum, Raisin; similar Date, Fig; with Tobacco, Prune Armagnac
Date: confused Fig, Brown Sugar; similar Prune, Toffee; with Walnut, Cardamom
Dried Cherry: confused Cherry, Black Cherry; similar Raisin, Dried Cranberry; with Almond, Port
Jasmine: confused Orange Blossom, Honeysuckle; similar Ylang-Ylang, Green Tea; with Peach, Apricot
Orange Blossom: confused Neroli, Jasmine; similar Orange Flower Water, Honey; with Orange, Almond
Rose: confused Lychee, Rosewater; similar Violet, Geranium; with Raspberry, Cardamom
Violet: confused Blueberry, Violet Cream; similar Rose, Lavender; with Blackcurrant
Lavender: confused Violet; similar Rose, Eucalyptus; with Blueberry, Honey
Honeysuckle: confused Jasmine, Elderflower; similar Honey; with Peach, Apricot
Elderflower: confused Honeysuckle, Lychee; similar Green Grape, Chamomile; with Lemon, Lime
Hazelnut: confused Gianduja, Praline; similar Almond, Pecan; with Milk Powder, Caramel, Coffee
Almond: confused Marzipan, Macadamia; similar Hazelnut; with Cherry, Apricot, Orange Blossom
Peanut: confused Peanut Butter, Peanut Skin; similar Roasted Cashew, Hazelnut; with Caramel, Milk Powder
Walnut: confused Pecan; similar Hazelnut, Tobacco; with Fig, Date, Brownie
Pecan: confused Walnut, Pecan Pie; similar Maple Fudge, Hazelnut; with Caramel, Brown Sugar
Macadamia: confused Almond, Cream; similar Coconut, Butter; with White Peach
Chestnut: confused Hazelnut, Roasted Cacao; similar Malted Milk, Wet Earth; with Honey, Mushroom
Marzipan: confused Almond, Candied Almond; similar Nougat, Cherry; with Orange Blossom
Praline: confused Gianduja, Hazelnut; similar Caramel, Nut Brittle; with Milk Powder
Nougat: confused Turrón, Marzipan; similar Honey, Praline; with Almond, Hazelnut
Gianduja: confused Praline, Hazelnut; similar Peanut Butter; with Milk Powder, Cream
Peanut Butter: confused Peanut; similar Gianduja, Praline; with Raspberry, Caramel
Caramel: confused Toffee, Butterscotch; similar Dulce de Leche, Brown Sugar; with Milk Powder, Banana; opposite Bitter Cocoa
Toffee: confused Caramel, Butter Toffee; similar Butterscotch, Burnt Caramel; with Almond
Butterscotch: confused Toffee, Caramel; similar Brown Sugar, Butter; with Pecan
Honey: confused Nougat, Honeysuckle; similar Brown Sugar, Malted Milk; with Almond, Orange Blossom
Brown Sugar: confused Caramel, Date; similar Butterscotch, Molasses Char; with Cinnamon, Raisin
Dulce de Leche: confused Cajeta, Condensed Milk; similar Caramel, Milk Jam; with Banana
Burnt Caramel: confused Burnt Toast, Burnt Butterscotch; similar Toffee, Coffee; with Smoke
Cream: confused Butter, Milk Powder; similar Condensed Milk, Mascarpone; with Strawberry, Malted Milk
Butter: confused Cream, Brown Butter; similar Pastry, Macadamia; with Caramel
Malted Milk: confused Milk Powder, Biscuit; similar Malted Shake, Toast; with Hazelnut, Caramel
Yogurt: confused Yogurt Tang, Buttermilk; similar Crème Fraîche, Lemon; with Raspberry, Strawberry
Condensed Milk: confused Dulce de Leche, Milk Powder; similar Fudge, Cream; with Caramel; opposite Bitter Cocoa
Milk Powder: confused Malted Milk, Condensed Milk; similar Cream; with Hazelnut, Caramel
Cinnamon: confused Mexican Cinnamon, Allspice; similar Nutmeg, Clove; with Orange, Chili
Nutmeg: confused Allspice, Clove; similar Cinnamon; with Cream, Pecan
Clove: confused Allspice, Clove Bud; similar Nutmeg, Anise; with Orange, Plum
Ginger: confused Gingerbread; similar Cardamom, Black Pepper; with Lemon, Orange
Cardamom: confused Eucalyptus, Black Cardamom Smoke; similar Ginger, Mint; with Coffee, Rose
Allspice: confused Clove, Nutmeg; similar Cinnamon, Black Pepper; with Chili
Licorice: confused Anise, Star Anise; similar Tobacco, Molasses Char; with Black Cherry
Black Pepper: confused Pink Pepper, Long Pepper; similar Chili, Allspice; with Strawberry, Tobacco
Chili: confused Smoked Chili, Ancho; similar Black Pepper, Ginger; with Cinnamon, Mango, Orange
Smoked Chili: confused Ancho, Smoke; similar Chili, Tobacco; with Cinnamon
Anise: confused Licorice, Star Anise; similar Clove, Mint; with Orange
Tobacco: confused Tobacco Barn, Black Tea; similar Licorice, Forest Floor; with Dark Cocoa, Raisin, Smoke
Grass: confused Cut Grass, Fresh Hay; similar Green Tea, Olive; with Cucumber
Green Tea: confused Matcha, Grass; similar Jasmine, Olive; with Bergamot
Olive: confused Grass, Green Banana; similar Mushroom, Green Tea; with Black Pepper
Cut Grass: confused Grass; similar Cucumber, Snap Pea; with Lime
Cucumber: confused Cucumber Skin; similar Cut Grass, Green Grape; with Mint, Lime
Matcha: confused Green Tea; similar Grass, Nori; with Cream, Milk Powder
Mint: confused Spearmint, Menthol; similar Eucalyptus, Basil; with Blackcurrant, Cream; opposite Smoke
Eucalyptus: confused Menthol, Camphor; similar Mint, Pine; with Blackcurrant, Cardamom
Menthol: confused Eucalyptus, Mint; similar Wintergreen, Camphor
Pine: confused Fir Needle, Juniper; similar Eucalyptus, Forest Floor; with Moss, Smoke
Mushroom: confused Porcini, Truffle; similar Forest Floor, Damp Soil; with Wet Earth
Forest Floor: confused Wet Earth, Moss; similar Mushroom, Tobacco; with Damp Soil
Wet Earth: confused Damp Soil, Petrichor; similar Forest Floor, Clay; with Mushroom
Moss: confused Forest Floor; similar Wet Earth, Pine, Grass
Truffle: confused Mushroom, Porcini; similar Damp Soil; with Forest Floor
Damp Soil: confused Wet Earth, Root Cellar; similar Mushroom, Cave; with Moss
Coffee: confused Espresso, Roasted Cacao; similar Cacao Nib, Burnt Caramel; with Caramel, Hazelnut
Toast: confused Biscuit; similar Roasted Cacao, Malted Milk; with Hazelnut, Butter
Smoke: confused Grill Smoke, Charred Wood; similar Tobacco, Smoked Chili; with Burnt Toast
Espresso: confused Coffee, French Roast; similar Bitter Cocoa, Dark Cocoa; with Burnt Caramel
Charred Wood: confused Smoke, Char; similar Burnt Toast; with Tobacco
Burnt Toast: confused Char, Ash Roast; similar Charred Wood, Bitter Cocoa; with Smoke
`,
"Cider":`
Fresh Apple: confused Apple Juice, Red Apple; similar Green Apple; with Apple Blossom, Pear, Lemon; opposite Cooked Apple
Baked Apple: confused Cooked Apple; similar Apple Butter; with Cinnamon, Clove, Vanilla Oak, Honey
Apple Skin: confused Skin Tannin; similar Green Apple Skin; with Fresh Apple, Walnut
Bruised Apple: confused Cooked Apple, Barnyard; similar Bruised Windfall; with Earthy Funk, Walnut, Musty Cellar
Green Apple: confused Sour Apple, Fresh Apple; similar Crabapple, Gooseberry; with Lemon, Lime; opposite Baked Apple
Red Apple: confused Fresh Apple, Apple Juice; similar Gala; with Honey, Cinnamon
Apple Juice: confused Fresh Apple; similar Pressed Pomace; with Honey, Red Apple
Cooked Apple: confused Baked Apple, Bruised Apple; similar Apple Butter; with Cinnamon, Honey
Pear: confused Quince, White Grape; similar Nashi; with Fresh Apple, Elderflower, Honey
Quince: confused Pear, Cooked Apple; similar Quince Skin; with Honey, Beeswax, Skin Tannin
Stone Fruit: confused Apricot; similar Mirabelle; with Honeysuckle, Honey
Apricot: confused Stone Fruit, Quince; similar Mirabelle; with Honey, Honeysuckle
White Grape: confused Pear, Gooseberry; similar Grape Skin; with Elderflower, Lime
Gooseberry: confused Green Apple, Sour Apple; similar Green Gooseberry; with Elderflower, Lime, Grapefruit
Lemon: confused Lemon Sour, Lime; similar Candied Lemon; with Green Apple, Sherbet
Orange Zest: confused Grapefruit; similar Dried Orange Peel; with Clove, Cinnamon, Honey
Grapefruit: confused Lime, Lemon; similar Pink Grapefruit; with Gooseberry, Elderflower
Lime: confused Lemon, Lemon Sour; similar Citric Bite; with Green Apple, Gooseberry
Apple Blossom: confused Elderflower, Honeysuckle; similar Pear Blossom; with Fresh Apple, Honey, Meadow
Elderflower: confused Apple Blossom, Gooseberry; similar Honeysuckle; with Pear, Lemon
Meadow: confused Hay, Dandelion; similar Wildflower Meadow; with Honey, Apple Blossom
Honeysuckle: confused Apple Blossom, Elderflower; similar Rose; with Apricot, Honey
Rose: confused Honeysuckle; similar Sweetbriar; with Quince, Apple Blossom
Dandelion: confused Meadow, Hay; similar Gorse; with Honey, Bruised Apple
Honey: confused Nectar, Honeycomb; similar Orchard Honey; with Baked Apple, Beeswax, Apple Blossom
Beeswax: confused Honeycomb, Honey; similar Royal Jelly; with Quince, Honey, Bruised Apple
Honeycomb: confused Beeswax, Honey; similar Mead-like; with Apple Blossom
Mead-like: confused Honey, Honeycomb; similar Warm Mead; with Beeswax, Apricot
Nectar: confused Honey, Apple Juice; similar Mead-like; with Stone Fruit, Pear
Barnyard: confused Horse Blanket, Earthy Funk; similar Scrumpy Funk; with Leather, Bruised Apple, Skin Tannin; opposite Fresh Apple
Horse Blanket: confused Barnyard, Wet Wool; similar Farmhouse Floor; with Leather, Smoke
Hay: confused Meadow; similar Straw; with Honey, Barnyard
Musty Cellar: confused Earthy Funk, Mushroom; similar Cider Cellar; with Bruised Apple, Acetic Tang
Wet Wool: confused Horse Blanket, Barnyard; similar Sheep Wool; with Earthy Funk
Earthy Funk: confused Barnyard, Forest Floor; similar Scrumpy Funk; with Bruised Apple, Leather, Mushroom
Sour Apple: confused Green Apple, Crabapple; similar Lemon Sour; with Lactic, Acetic Tang
Lactic: confused Sour Apple, Sherbet; similar Lees; with Lemon Sour, Barnyard
Sherbet: confused Lemon, Lactic; similar Champagne Acid; with Green Apple, Lime
Lemon Sour: confused Lemon, Sour Apple; similar Citric Bite; with Lactic, Acetic Tang
Acetic Tang: confused Lemon Sour, Sour Apple; similar White Vinegar Nip; with Bruised Apple, Musty Cellar
Skin Tannin: confused Strong Tea, Grape Skin; similar Bittersweet Apple; with Barnyard, Leather, Black Tea
Black Tea: confused Strong Tea, Skin Tannin; similar Tea Bag Squeeze; with Bruised Apple, Walnut
Walnut: confused Skin Tannin; similar Green Walnut; with Bruised Apple, Black Tea, Oak
Grape Skin: confused Skin Tannin, White Grape; similar Apple Skin; with Black Tea
Strong Tea: confused Black Tea, Skin Tannin; similar Oversteeped Tea; with Walnut, Leather
Crabapple: confused Sour Apple, Green Apple; similar Crab Apple Juice; with Skin Tannin, Lemon
Oak: confused Toasted Oak, Cedar; similar Old Barrel; with Vanilla Oak, Walnut
Cedar: confused Pencil Shavings, Oak; similar Wet Bark; with Tobacco, Smoke
Toasted Oak: confused Oak, Smoke; similar Seasoned Oak; with Vanilla Oak, Clove, Baked Apple
Vanilla Oak: confused Toasted Oak; similar Vanilla; with Baked Apple, Cinnamon, Honey
Pencil Shavings: confused Cedar; similar Twig; with Oak, Tobacco
Cinnamon: confused Allspice, Nutmeg; similar Mulling Spice; with Baked Apple, Clove, Vanilla Oak
Clove: confused Allspice, Cinnamon; similar Orange Clove Stud; with Orange Zest, Baked Apple
Nutmeg: confused Allspice, Cinnamon; similar Mulling Spice; with Baked Apple, Vanilla Oak
Ginger: confused Cinnamon; similar Gingerbread; with Lemon, Honey
Allspice: confused Clove, Nutmeg; similar Mulling Spice; with Baked Apple, Cinnamon
Star Anise: confused Clove; similar Chai Mull; with Cinnamon, Orange Zest
Leather: confused Tobacco, Horse Blanket; similar Barnyard; with Skin Tannin, Smoke
Smoke: confused Toasted Oak; similar Woodsmoke; with Leather, Tobacco
Tobacco: confused Leather, Strong Tea; similar Autumn Leaves; with Cedar, Smoke
Forest Floor: confused Mushroom, Earthy Funk; similar Autumn Leaves; with Bruised Apple, Musty Cellar
Mushroom: confused Forest Floor, Musty Cellar; similar Damp Orchard; with Earthy Funk
`,
"Rum":`
Molasses: confused Blackstrap, Treacle Tart; similar Burnt Sugar, Demerara; with Licorice, Coffee, Overripe Banana
Brown Sugar: confused Demerara, Muscovado; similar Caramel, Toffee; with Vanilla, Cinnamon
Caramel: confused Toffee, Butterscotch; similar Brown Sugar, Fudge; with Vanilla, Toasted Oak
Demerara: confused Brown Sugar, Muscovado; similar Molasses, Panela; with Raisin
Burnt Sugar: confused Molasses, Crème Brûlée; similar Char, Caramel; with Coffee, Smoke
Maple Syrup: confused Golden Syrup, Amber Syrup; similar Caramel, Honey; with Vanilla, Toasted Oak
Golden Syrup: confused Maple Syrup, Honey; similar Caramel, Cane Juice; with Butterscotch
Vanilla: confused Vanilla Pod, Tonka Bean; similar Crème Brûlée, Marzipan; with Toasted Oak, Coconut, Caramel
Toffee: confused Caramel, Butterscotch; similar Fudge, Brown Sugar; with Banana, Toasted Oak
Honey: confused Golden Syrup, Dark Honey; similar Maple Syrup; with Cinnamon, Orange Peel
Fudge: confused Toffee; similar Caramel, Nougat; with Dark Chocolate, Raisin
Marzipan: confused Nougat, Praline; similar Vanilla; with Dried Apricot, Orange Peel
Nougat: confused Marzipan, Honey; similar Fudge, Praline
Crème Brûlée: confused Burnt Sugar, Vanilla Custard Spice; similar Vanilla, Caramel; with Banana
Butterscotch: confused Toffee, Caramel; similar Golden Syrup; with Vanilla, Banana
Banana: confused Overripe Banana, Pear Drops; similar Plantain, Caramelized Banana; with Pineapple, Vanilla, Brown Sugar
Pineapple: confused Bruised Pineapple, Mango; similar Passion Fruit; with Coconut, Banana
Coconut: confused Toasted Coconut Cask, Coconut Husk; similar Vanilla; with Pineapple, Toasted Oak, Lime
Mango: confused Overripe Mango, Papaya; similar Passion Fruit, Guava; with Pineapple
Papaya: confused Mango, Overripe Papaya; similar Guava, Banana
Guava: confused Passion Fruit, Ripe Guava; similar Papaya, Mango; with Lime
Passion Fruit: confused Guava; similar Pineapple, Grapefruit; with Mango, Lime
Plantain: confused Banana, Baked Plantain; similar Breadfruit; with Brown Sugar, Allspice
Raisin: confused Rum-Soaked Raisin, Prune; similar Date, Fig; with Molasses, Fruitcake, Leather
Date: confused Fig, Date Molasses; similar Raisin, Prune; with Toffee, Cinnamon
Fig: confused Date, Prune; similar Raisin, Burnt Fig; with Tobacco, Old Leather
Prune: confused Raisin, Fig; similar Date, Fruitcake; with Coffee, Leather
Dried Apricot: confused Candied Orange; similar Marzipan, Fig; with Honey, Vanilla
Fruitcake: confused Spiced Cake, Raisin; similar Prune, Candied Orange; with Nutmeg, Cinnamon, Molasses
Tamarind: confused Tamarind Ball; similar Prune, Lime; with Molasses, Brown Sugar
Orange Peel: confused Candied Orange, Curaçao Peel; similar Grapefruit, Lemon Zest; with Clove, Vanilla
Lime: confused Lemon Zest, Key Lime; similar Grapefruit; with Coconut, Cane Juice
Grapefruit: confused Orange Peel; similar Lime, Passion Fruit; with Varnish
Candied Orange: confused Orange Peel, Dried Apricot; similar Fruitcake, Marzipan; with Clove
Lemon Zest: confused Lime; similar Orange Peel, Ginger; with Vanilla
Overripe Banana: confused Banana, Banana Foam; similar Bruised Pineapple, Overripe Mango; with Varnish, Molasses
Bruised Pineapple: confused Pineapple Funk, Overripe Mango; similar Overripe Banana; with Nail Polish, Barnyard
Varnish: confused Nail Polish, Acetone; similar Pear Drops, Airplane Glue; with Overripe Banana, Bruised Pineapple
Nail Polish: confused Varnish, Acetone; similar Pear Drops; with Bruised Pineapple, Bubblegum
Pear Drops: confused Bubblegum, Nail Polish; similar Banana, Juicy Fruit; with Varnish
Bubblegum: confused Pear Drops, Juicy Fruit; similar Banana; with Pineapple
Barnyard: confused Wet Rope, Damp Burlap; similar Blue Cheese, Overripe Mango; with Molasses, Leather
Olive Brine: confused Briny; similar Blue Cheese, Salt Fish; with Overripe Banana, Smoke
Briny: confused Olive Brine, Iodine Brine; similar Harbour Water; with Lime, Toasted Oak
Overripe Mango: confused Mango Peel Funk, Bruised Pineapple; similar Overripe Banana, Papaya; with Barnyard
Blue Cheese: confused Barnyard; similar Olive Brine, Wet Rope; with Varnish
Wet Rope: confused Damp Burlap, Sea Rot Rope; similar Barnyard, Leather
Cinnamon: confused Cinnamon Sugar, Allspice; similar Nutmeg, Clove; with Vanilla, Brown Sugar
Nutmeg: confused Mace, Allspice; similar Cinnamon, Clove; with Vanilla, Fruitcake
Allspice: confused Clove, Allspice Berry; similar Nutmeg, Cinnamon; with Bay Rum, Plantain
Clove: confused Allspice, Clove Oil; similar Nutmeg, Star Anise; with Orange Peel, Smoke
Star Anise: confused Anise, Licorice; similar Clove; with Molasses
Cardamom: similar Ginger, Cinnamon, Orange Peel; with Coffee
Ginger: confused Candied Ginger, Ginger Beer Bite; similar Black Pepper, Cardamom; with Lime, Allspice
Black Pepper: confused White Pepper, Cracked Pepper; similar Chili, Ginger; with Tobacco, Toasted Oak
Anise: confused Star Anise, Licorice; similar Fenugreek; with Molasses
Chili: confused Dried Chili, Scotch Bonnet Warmth; similar Black Pepper, Ginger; with Allspice
White Pepper: confused Black Pepper; similar Ginger; with Lime, Cane Juice
Licorice: confused Anise, Star Anise; similar Molasses, Molasses Tar; with Coffee, Tobacco
Toasted Oak: confused Charred Cask, Char; similar Cedar, Sawdust; with Vanilla, Coconut, Caramel
Char: confused Charred Cask, Charred Hogshead; similar Smoke, Burnt Sugar; with Coffee, Toasted Oak
Cedar: confused Pencil Cedar, Sawdust; similar Cigar, Toasted Oak; with Tobacco, Leather
Sawdust: confused Cedar; similar Toasted Oak, Varnish
Smoke: confused Char, Cigar Ash; similar Tobacco, Cane Field Fire; with Olive Brine, Burnt Sugar
Tobacco: confused Cigar, Humidor; similar Leather, Cedar; with Raisin, Coffee, Molasses
Leather: confused Old Leather, Saddle Leather; similar Tobacco, Wet Rope; with Prune, Cigar
Coffee: confused Espresso, Coffee Spice; similar Dark Chocolate, Burnt Sugar; with Molasses, Vanilla
Dark Chocolate: confused Cocoa Powder; similar Coffee, Fudge; with Raisin, Orange Peel
Old Leather: confused Leather, Leather Trunk; similar Antique Furniture, Rancio Oak; with Cigar, Fig
Cigar: confused Tobacco, Humidor; similar Cedar, Old Leather; with Espresso, Raisin
Espresso: confused Coffee; similar Dark Chocolate, Char; with Cigar, Molasses
`,
"Gin":`
Juniper Berry: confused Pine Needle, Resin; similar Crushed Juniper; with Coriander, Angelica, Lemon Peel, Orris Root
Pine Needle: confused Juniper Berry, Spruce Tip; similar Fir; with Rosemary, Lemon Peel
Resin: confused Pine Sap, Juniper Berry; similar Camphor; with Angelica, Cypress
Camphor: confused Resin; similar Rosemary, Bay Leaf; with Juniper Berry, Cardamom
Spruce Tip: confused Fir, Pine Needle; similar Douglas Fir; with Lime, Grapefruit
Fir: confused Spruce Tip, Pine Needle; similar Cypress; with Juniper Berry, Moss
Cypress: confused Fir, Resin; similar Cedar Tip; with Juniper Berry, Rosemary
Pine Sap: confused Resin; similar Pine Forest; with Juniper Berry, Licorice Root
Lemon Peel: confused Lime, Lemon Sherbet; similar Bergamot; with Juniper Berry, Coriander, Angelica
Orange Peel: confused Candied Citrus, Bergamot; similar Bitter Orange; with Coriander, Cinnamon, Cardamom
Grapefruit: confused Pomelo, Lime; similar Pink Grapefruit; with Juniper Berry, Pink Peppercorn, Rosemary
Lime: confused Lemon Peel, Yuzu; similar Makrut Lime; with Lemongrass, Ginger, Cucumber
Bergamot: confused Lemon Peel, Orange Peel; similar Yuzu; with Lavender, Jasmine
Yuzu: confused Bergamot, Lime; similar Pomelo; with Ginger, Szechuan Pepper, Green Peppercorn
Pomelo: confused Grapefruit, Yuzu; similar Citron; with Pink Peppercorn
Candied Citrus: confused Orange Peel, Lemon Sherbet; similar Citron; with Cinnamon, Licorice Root, Vanilla
Lemon Sherbet: confused Lemon Peel, Candied Citrus; similar Verbena; with Coriander, Elderflower
Elderflower: confused Honeysuckle; similar Meadowsweet; with Cucumber, Gooseberry, Lemon Peel
Rose: confused Hibiscus, Violet; similar Rose Garden; with Cucumber, Orris Root, Cardamom
Lavender: confused Violet, Rosemary; similar Camphor; with Bergamot, Lemon Peel, Juniper Berry
Chamomile: confused Honeysuckle; similar Meadowsweet; with Lemon Peel, Orris Root
Violet: confused Orris Root, Rose; similar Violet Pastille; with Lavender, Juniper Berry
Honeysuckle: confused Elderflower, Jasmine; similar Orange Blossom; with Chamomile, Lemon Peel
Orange Blossom: confused Jasmine, Honeysuckle; similar Orange Flower Water; with Orange Peel, Coriander
Hibiscus: confused Rose; similar Cranberry; with Pink Peppercorn, Ginger
Jasmine: confused Orange Blossom, Honeysuckle; similar Lilac; with Bergamot, Rose
Basil: confused Mint, Tarragon; similar Thai Basil; with Lime, Black Pepper, Olive
Sage: confused Rosemary, Bay Leaf; similar Thyme; with Juniper Berry, Pine Needle
Thyme: confused Sage, Rosemary; similar Bay Leaf; with Lemon Peel, Olive
Mint: confused Basil; similar Garden Mint; with Cucumber, Lime
Rosemary: confused Pine Needle, Thyme; similar Sage; with Olive, Grapefruit, Juniper Berry
Lemongrass: confused Verbena, Lemon Peel; similar Makrut Leaf; with Ginger, Lime
Verbena: confused Lemongrass, Lemon Sherbet; similar Lemon Verbena Zest; with Lemon Peel, Mint
Tarragon: confused Star Anise, Fennel Seed; similar Basil; with Angelica, Dill
Bay Leaf: confused Sage; similar Bay Laurel; with Juniper Berry, Black Pepper, Rosemary
Olive: confused Samphire, Saline; similar Green Olive Brine; with Rosemary, Thyme, Basil
Cucumber: confused Celery; similar Salted Cucumber; with Rose, Mint, Elderflower
Celery: confused Cucumber, Angelica; similar Lovage; with Samphire, Black Pepper
Dill: confused Fennel Seed, Tarragon; similar Fennel Frond; with Cucumber, Caraway
Samphire: confused Saline, Olive; similar Sea Lettuce; with Lemon Peel, Juniper Berry
Saline: confused Samphire, Olive; similar Oyster Shell; with Lemon Peel, Grapefruit
Cardamom: confused Camphor, Coriander; similar Ginger; with Orange Peel, Rose, Cinnamon
Coriander: confused Lemon Peel, Cardamom; similar Coriander Blossom; with Juniper Berry, Angelica, Orange Peel
Cinnamon: confused Cassia; similar Nutmeg; with Orange Peel, Cardamom, Licorice Root
Grains of Paradise: confused Black Pepper, Cubeb; similar Alligator Pepper; with Cardamom, Coriander
Nutmeg: confused Cinnamon; similar Warm Nutmeg; with Orange Peel, Cassia
Star Anise: confused Licorice Root, Fennel Seed; similar Caraway; with Cinnamon, Juniper Berry
Caraway: confused Dill, Fennel Seed; similar Star Anise; with Coriander, Juniper Berry
Fennel Seed: confused Star Anise, Caraway; similar Dill; with Coriander, Licorice Root
Black Pepper: confused Cubeb, Grains of Paradise; similar White Pepper; with Juniper Berry, Grapefruit
Cubeb: confused Black Pepper, Grains of Paradise; similar Cracked Cubeb; with Juniper Berry, Lemon Peel
Ginger: confused Ginger Root, Chili; similar Galangal; with Lime, Lemongrass, Cardamom
Pink Peppercorn: confused Black Pepper; similar Juniper Berry; with Grapefruit, Hibiscus, Rose
Chili: confused Ginger, Szechuan Pepper; similar Long Pepper; with Lime
Szechuan Pepper: confused Chili, Pink Peppercorn; similar Sansho Pepper; with Yuzu, Grapefruit
Angelica: confused Celery, Burdock; similar Angelica Seed; with Juniper Berry, Coriander, Orris Root
Orris Root: confused Violet; similar Orris Warmth; with Juniper Berry, Angelica, Coriander
Licorice Root: confused Star Anise, Fennel Seed; similar Licorice Twig; with Cassia, Orris Root, Juniper Berry
Ginger Root: confused Ginger; similar Fresh Ginger; with Lemongrass, Lime
Burdock: confused Angelica, Damp Earth; similar Dandelion Root; with Gentian
Gentian: confused Burdock; similar Chicory Root; with Orange Peel, Angelica
Damp Earth: confused Moss, Burdock; similar Forest Loam; with Angelica, Vetiver
Woody: confused Cypress, Angelica; similar Cassia Bark; with Juniper Berry, Vanilla
Pine Forest: confused Fir, Pine Needle; similar Forest Air; with Juniper Berry, Moss
Moss: confused Damp Earth; similar Damp Bracken; with Pine Forest, Fir
`,
"Mezcal & Tequila":`
Roasted Agave: confused Charred Agave Heart, Sweet Potato; similar Caramelized Squash, Agave Nectar; with Campfire, Earth Oven; opposite Raw Agave
Sweet Potato: confused Baked Yam, Roasted Agave; similar Caramelized Squash; with Smoked Yam, Cinnamon
Caramelized Squash: confused Candied Pumpkin, Sweet Potato; similar Baked Yam, Roasted Agave; with Piloncillo
Baked Yam: confused Sweet Potato, Smoked Yam; similar Caramelized Squash; with Earth Oven
Roasted Corn: confused Grilled Corn, Masa; similar Toasted Corn Husk, Sweet Potato; with Campfire
Piloncillo: confused Brown Sugar, Cooked Piloncillo; similar Burnt Sugar, Honey; with Cinnamon, Roasted Agave
Agave Nectar: confused Honey, Maguey Syrup; similar Roasted Agave; with Vanilla, Pineapple
Brown Sugar: confused Piloncillo; similar Burnt Sugar, Vanilla; with Cinnamon, Clove
Honey: confused Agave Nectar, Burnt Honey; similar Piloncillo; with Vanilla, Orange
Vanilla: confused Brown Sugar; similar Honey, Cinnamon; with Charred Wood, Agave Nectar
Raw Agave: confused Agave Leaf, Fresh Cut Maguey; similar Green Pepper, Aloe; with Black Pepper, Lime, Grassy
Green Pepper: confused Bell Pepper, Poblano; similar Raw Agave, Nopal; with White Pepper
Aloe: confused Aloe Gel, Cucumber; similar Raw Agave, Nopal; with Mint
Cucumber: confused Aloe, Melon; similar Snap Pea, Celery; with Mint, Lime
Bell Pepper: confused Green Pepper, Poblano; similar Snap Pea, Celery; with Black Pepper
Nopal: confused Prickly Pear Pad, Aloe; similar Green Pepper, Snap Pea; with Lime, Wet Clay
Snap Pea: confused Green Bean; similar Cucumber, Bell Pepper; with Grassy
Celery: confused Cucumber; similar Bell Pepper, Cilantro; with Salt, Black Pepper
Sage: confused Wild Sage; similar Mint, Eucalyptus; with Creosote, Dust
Mint: confused Mountain Mint, Eucalyptus; similar Sage, Cilantro; with Lime, Cucumber
Grassy: confused Raw Agave, Damp Hay; similar Cilantro, Snap Pea; with Lime, White Pepper
Eucalyptus: confused Mint, Creosote Bush; similar Sage; with Black Pepper
Cilantro: confused Epazote; similar Grassy, Celery; with Lime, Chili
Epazote: confused Cilantro, Hoja Santa; similar Anise, Mint; with Wet Clay, Black Pepper
Campfire: confused Wood Ember, Charred Wood; similar Mesquite, Charcoal; with Roasted Agave, Smoked Meat
Charcoal: confused Mesquite Coal, Ash; similar Campfire, Flint; with Roasted Agave
Tar: confused Creosote, Rubber; similar Charcoal, Leather; with Smoked Meat
Ash: confused Volcanic Ash, Charcoal; similar Dust, Campfire; with Flint, Salt
Mesquite: confused Campfire, Mesquite Coal; similar Smoked Meat; with Roasted Agave, Brown Sugar
Smoked Meat: confused Barbacoa Sweetness; similar Mesquite, Tar; with Campfire, Leather, Black Pepper
Creosote: confused Creosote Bush, Tar; similar Rubber, Petrichor; with Sage, Dust
Burnt Sugar: confused Piloncillo, Brown Sugar; similar Roasted Agave, Charred Wood; with Campfire
Rubber: confused Tar, Creosote; similar Gunpowder; with Smoked Meat
Charred Wood: confused Campfire, Black Char; similar Burnt Sugar, Ash; with Vanilla, Cinnamon
Gunpowder: confused Flint, Rubber; similar Ash, Charcoal; with Salt
Lime: confused Key Lime, Lemon; similar Grapefruit; with Salt, Raw Agave, Black Pepper
Grapefruit: confused Grapefruit Pith, Lime; similar Orange, Tangerine; with White Pepper
Orange: confused Tangerine, Bitter Orange; similar Grapefruit; with Vanilla, Clove, Honey
Lemon: confused Lime; similar Grapefruit, Lemongrass; with Mint, Salt
Tangerine: confused Orange; similar Grapefruit, Mango; with Pineapple
Pineapple: confused Roasted Pineapple Core, Guava; similar Mango, Papaya; with Agave Nectar, Tepache
Guava: confused Pineapple, Papaya; similar Mango; with Chili
Melon: confused Cucumber, Watermelon; similar Papaya; with Mint
Mango: confused Papaya; similar Tangerine, Guava; with Chili
Papaya: confused Mango, Ripe Papaya; similar Melon, Banana
Banana: confused Baked Banana, Green Banana; similar Papaya; with Vanilla, Roasted Agave
Wet Clay: confused Wet Adobe, Adobe; similar Damp Cave, Petrichor; with Chalk, Roasted Agave
Dust: confused Desert Dust, Chalk; similar Ash, Stone; with Sage, Leather
Leather: confused Wet Leather, Goat Hide; similar Tar, Smoked Meat; with Dust
Adobe: confused Wet Clay, Sun-Baked Clay; similar Dust; with Campfire
Petrichor: confused High Desert Rain, Wet Clay; similar Stone, Damp Cave; with Creosote
Damp Cave: confused Cave Floor, Root Cellar; similar Wet Clay, Slate
Flint: confused Gunpowder, Stone; similar Slate, Chalk; with Ash, Lime
Salt: confused Saline, Sea Salt; similar Brine; with Lime, Stone, Ash
Stone: confused River Rock, Slate; similar Flint, Chalk; with Saline
Chalk: confused Limestone Dust, Dust; similar Stone, Slate; with Wet Clay
Slate: confused Stone, Flint; similar Chalk, Damp Cave; with Saline
Saline: confused Salt, Brine; similar Sea Salt; with Stone, Lime, Raw Agave
White Pepper: confused Black Pepper, Green Peppercorn; similar Raw Agave; with Grassy, Lime
Cinnamon: confused Canela; similar Clove, Nutmeg; with Vanilla, Piloncillo
Anise: confused Hoja Santa, Epazote; similar Mint; with Clove
Chili: confused Ancho, Chipotle; similar Black Pepper; with Mango, Guava, Smoked Meat
Black Pepper: confused White Pepper, Green Peppercorn; similar Chili; with Raw Agave, Smoked Meat
Clove: confused Nutmeg, Cinnamon; similar Anise; with Vanilla, Orange
Nutmeg: confused Clove, Cinnamon; with Vanilla, Brown Sugar
`,
"Sake":`
Green Apple: confused Nashi, Fuji Apple; similar Pear, White Grape; with Melon, Lemon; opposite Steamed Rice
Pear: confused Nashi; similar Green Apple, Melon; with White Flowers, Steamed Rice
Nashi: confused Pear, Twentieth Century Pear; similar Green Apple, Melon; with Lily
Banana: similar Melon, Coconut, Mango; with Pineapple, Rice Pudding, Fresh Cream
White Grape: confused Muscat, Green Grape; similar Green Apple, Lychee; with White Flowers
Muscat: confused White Grape, Lychee; similar Champagne Grape, Muscat Jelly; with Melon, Jasmine
Quince: similar Pear, Green Apple; with Honey, Chestnut
Melon: confused Honeydew Rind; similar Pear, Banana, Nashi; with Green Apple, Rice Flour
Lychee: confused Muscat; similar White Grape, Pineapple; with Jasmine, Lily
Pineapple: similar Mango, Banana, Lychee; with Yogurt
Mango: similar Pineapple, Banana; with Coconut, Fresh Cream
Coconut: similar Fresh Cream, Rice Pudding; with Banana, Mango
Yuzu: confused Sudachi, Kabosu, Grapefruit; similar Lemon, Mikan; with Spring Water, Cherry Blossom
Lemon: confused Lime, Yuzu; similar Grapefruit; with Green Apple, Wet Stone
Lime: confused Lemon, Shikuwasa; similar Yuzu; with Spring Water, Yogurt
Grapefruit: confused Yuzu, White Grapefruit; similar Lemon; with Wet Stone
Mikan: confused Iyokan; similar Yuzu, Lemon; with Melon
Cherry Blossom: confused Sakura Petal; similar White Flowers, Plum Blossom; with Steamed Rice, Mochi
White Flowers: similar Acacia, Lily, Jasmine; with Pear, Melon
Honeysuckle: confused Jasmine; similar Acacia, White Flowers; with Melon, Honey
Jasmine: confused Honeysuckle; similar Lily, White Flowers; with Muscat, Lychee
Lily: similar White Flowers, Jasmine, Magnolia; with Nashi, Lychee
Acacia: similar White Flowers, Honeysuckle; with Honey, Pear
Steamed Rice: confused Cooked Grain, Warm Rice Steam; similar Mochi, Rice Flour; with Chestnut, Fresh Cream; opposite Green Apple
Mochi: confused Fresh Mochi, Rice Cake; similar Steamed Rice, Rice Flour; with Amazake, Cherry Blossom
Rice Flour: similar Steamed Rice, Mochi, Rice Bran; with Melon, Wet Stone
Cooked Grain: confused Steamed Rice; similar Rice Bran, Bread Dough; with Roasted Nut
Rice Bran: similar Cooked Grain, Rice Husk; with Chestnut, Roasted Nut
Rice Pudding: confused Amazake; similar Sweet Koji, Cream; with Banana, Coconut
Sweet Koji: confused Amazake, Chestnut; similar Rice Pudding, Honey; with Steamed Rice, Mushroom Dashi
Chestnut: confused Sweet Koji, Steamed Chestnut; similar Roasted Chestnut, Almond; with Steamed Rice, Rice Bran
Roasted Chestnut: confused Chestnut; similar Roasted Nut, Caramel; with Soy Caramel
Amazake: confused Sweet Koji, Rice Pudding; similar Mochi, Honey; with Steamed Rice
Yogurt: confused Fresh Yogurt Whey, Buttermilk; similar Ricotta, Fresh Cream; with Yeast Lees, Lime
Cream: confused Fresh Cream; similar Milk, Ricotta; with Rice Pudding, Coconut
Ricotta: similar Cream, Yogurt, Buttermilk; with Yeast Lees
Fresh Cream: confused Cream, Whipped Cream; similar Milk; with Banana, Steamed Rice
Milk: similar Cream, Fresh Cream, Rice Milk; with Steamed Rice
Buttermilk: confused Yogurt; similar Ricotta, Yeast Lees; with Cooked Grain
Yeast Lees: confused Fresh Yeast, Bread Dough; similar Ricotta, Buttermilk; with Yogurt, Steamed Rice
Bread Dough: confused Fresh Yeast, Yeast Lees; similar Steamed Bun, Proofing Sponge; with Cooked Grain
Fresh Yeast: confused Yeast Lees, Bread Dough; similar Steamed Bun
Steamed Bun: confused Bread Dough; similar Steamed Rice, Mochi; with Rice Flour
Dashi: confused Kombu, Bonito; similar Seaweed, Shiitake; with Soy Sauce
Soy Sauce: confused Soy Caramel; similar Miso; with Dried Mushroom, Sherry
Miso: confused White Miso, Soy Sauce; similar Dashi; with Yeast Lees, Dried Mushroom
Seaweed: confused Kombu; similar Dashi; with Oyster
Kombu: confused Seaweed, Dashi; similar Kelp Water; with Shiitake, Steamed Rice
Bonito: confused Dashi; similar Soy Sauce, Dried Scallop; with Kombu
Shiitake: confused Dried Mushroom; similar Dashi, Mushroom Dashi; with Kombu, Soy Sauce
Roasted Nut: similar Walnut, Roasted Chestnut, Sesame; with Caramel, Sherry
Sesame: confused Sesame Paste; similar Roasted Nut, Walnut; with Soy Caramel
Almond: similar Chestnut, Walnut, Cashew; with Sherry, Dried Fig
Walnut: similar Roasted Nut, Almond; with Sherry, Dried Mushroom
Cashew: similar Almond, Macadamia; with Cream, Steamed Rice
Caramel: confused Soy Caramel; similar Maple, Honey; with Dried Fig, Roasted Nut
Dried Fig: confused Dried Date; similar Dried Persimmon, Molasses; with Sherry, Caramel
Sherry: confused Aged Mirin; similar Walnut, Soy Caramel; with Dried Fig, Dried Mushroom
Honey: confused Maple; similar Amazake, Caramel; with Acacia, Chestnut
Maple: confused Honey; similar Caramel, Soy Caramel; with Roasted Nut
Soy Caramel: confused Caramel, Soy Sauce; similar Sherry, Aged Soy; with Dried Mushroom
Dried Mushroom: confused Shiitake; similar Soy Sauce, Old Library; with Sherry, Soy Caramel
Wet Stone: confused River Stone; similar Limestone, Spring Water; with Lemon, Grapefruit
Spring Water: confused Snowmelt, Soft Spring; similar Rain, Well Water; with Pear, Yuzu
Rain: similar Spring Water, Wet Stone, Snowmelt; with Bamboo Forest Air
Snowmelt: confused Spring Water, Winter Stream; similar Rain, River Stone
River Stone: confused Wet Stone; similar Limestone, Polished Stone
Limestone: similar Wet Stone, River Stone, Granite Spring; with Spring Water
`,
"Kombucha":`
Apple Cider Vinegar: confused Apple Cider, Cider-like; similar White Vinegar, Malt Vinegar; with Green Apple, Vinegar Mother, Honey
White Vinegar: confused Apple Cider Vinegar, Rice Vinegar; similar Lemon, Vinegar Mother; with Green Tea; opposite Honey
Balsamic: confused Sherry Vinegar; similar Molasses, Black Vinegar; with Cherry, Blackberry, Caramel
Malt Vinegar: confused Black Vinegar; similar Apple Cider Vinegar, Sherry Vinegar; with Yeast, Beer-like, Black Tea
Sherry Vinegar: confused Balsamic; similar Wine-like, Malt Vinegar; with Tannin, Black Tea
Lemon: confused Green Apple; similar Gooseberry, White Vinegar; with Green Tea, Ginger Bug, Honey
Green Apple: confused Lemon, Apple Cider Vinegar; similar Gooseberry, Rhubarb; with Pear, White Grape
Gooseberry: confused Green Apple, Green Gooseberry; similar Rhubarb, Lemon; with White Grape, Elderflower
Rhubarb: confused Sour Cherry; similar Gooseberry, Green Apple; with Strawberry, Hibiscus
Sour Cherry: confused Rhubarb, Tart Cherry; similar Cherry, Tamarind; with Hibiscus, Raspberry
Tamarind: similar Sour Cherry, Balsamic, Molasses; with Black Tea, Ginger Bug
Apple: confused Apple Juice, Apple Cider; similar Pear, Quince; with Cider-like, Honey
Pear: confused Asian Pear, Nashi; similar Apple, Quince; with Ginger Bug, White Grape, Elderflower
Apple Cider: confused Cider-like, Apple Cider Vinegar; similar Apple Juice, Apple; with Yeast
Quince: confused Pear; similar Apple, Apricot; with Honey, Rose
White Grape: confused Wine-like, Elderflower; similar Green Apple, Pear; with Jasmine Tea, Green Tea
Peach: confused Apricot, Nectarine; similar White Peach; with Oolong, Jasmine, Honey
Strawberry: similar Raspberry, Rhubarb; with Hibiscus, Rose, Green Tea
Cherry: confused Sour Cherry; similar Raspberry, Cherry Cola; with Hibiscus, Balsamic
Apricot: confused Peach; similar Quince, Stone Fruit Nectar; with Oolong, Honey, Chamomile
Raspberry: confused Hibiscus; similar Strawberry, Blackberry; with Rose, Sour Cherry
Blackberry: confused Boysenberry, Blackcurrant; similar Raspberry; with Hibiscus, Black Tea, Balsamic
Black Tea: confused Tannin; similar Oolong, Earl Grey; with Molasses, Malt Vinegar, Caramel; opposite Green Tea
Green Tea: confused Sencha, Jasmine Tea; similar White Tea, Oolong; with Lemon, Gooseberry
Tannin: confused Black Tea; similar Wine-like; with Sherry Vinegar, Blackberry; opposite Honey
Oolong: confused Roasted Oolong; similar Black Tea, Green Tea; with Peach, Apricot, Honey
Earl Grey: similar Black Tea, Lemon; with Lavender, Orange Blossom, Honey
Jasmine Tea: confused Jasmine, Green Tea; similar Orange Blossom; with Peach, White Grape, Honey
Yeast: confused Bread Dough, Sourdough; similar Beer-like; with Barnyard, Vinegar Mother
Sourdough: confused Yeast, Rye Sour; similar Bread Dough, Kvass; with Apple Cider Vinegar
Beer-like: confused Kvass, Malt Vinegar; similar Yeast, Cider-like; with Bread Dough, Black Tea
Cider-like: confused Apple Cider, Apple Cider Vinegar; similar Wine-like, Beer-like; with Apple, Yeast
Wine-like: confused White Grape, Sherry Vinegar; similar Cider-like, Tannin; with Blackberry, Cherry
Bread Dough: confused Yeast, Sourdough; similar Beer-like; with Honey
Vinegar Mother: confused Kombucha Mother Tang, Apple Cider Vinegar; similar Yeast, Musty; with Wet Straw
Barnyard: confused Lambic Funk; similar Wet Straw, Musty; with Yeast, Damp Cellar
Musty: confused Damp Cellar; similar Wet Straw, Barnyard; with Vinegar Mother; opposite Lemon
Wet Straw: confused Hay Loft; similar Musty, Barnyard; with Chamomile, Yeast
Damp Cellar: confused Musty, Cellar Beam; similar Barnyard; with Vinegar Mother
Honey: confused Raw Honeycomb, Fermented Honey; similar Cane Sugar, Caramel; with Chamomile, Ginger Bug, Lemon
Cane Sugar: confused Honey; similar Apple Juice; with Lemon, Green Tea; opposite White Vinegar
Caramel: confused Molasses; similar Honey, Balsamic; with Black Tea, Apple
Apple Juice: confused Apple, Apple Cider; similar Cane Sugar, Pear; with Ginger Bug
Molasses: confused Caramel, Balsamic; similar Tamarind, Date Syrup; with Black Tea, Malt Vinegar
Elderflower: confused White Grape, Honeysuckle; similar Jasmine, Chamomile; with Lemon, Gooseberry, Pear
Jasmine: confused Jasmine Tea; similar Orange Blossom, Honeysuckle; with Green Tea, Peach
Rose: confused Hibiscus; similar Raspberry, Rose Lemonade; with Strawberry, Black Tea
Hibiscus: confused Raspberry, Rose; similar Sour Cherry, Cranberry; with Strawberry, Ginger Bug, Rhubarb
Chamomile: confused Elderflower; similar Honey, Apricot; with Wet Straw, Lemon
`,
"Cheese":`
Fresh Milk: confused Steamed Milk, Sweet Whey; similar Cream, Fresh Curd; with Fresh Grass, Butter; opposite Ammonia
Cream: confused Butter, Crème Fraîche; similar Fresh Milk, Clotted Cream; with Button Mushroom, Hazelnut
Butter: confused Cream, Cultured Butter; similar Browned Butter, Ghee; with Hazelnut, Fresh Grass, Toast
Steamed Milk: confused Fresh Milk, Warm Ricotta; similar Condensed Milk, Cooked Vegetable; with Butter
Sweet Whey: confused Fresh Milk, Mozzarella Whey; similar Yogurt; with Fresh Curd, Lemony
Yogurt: confused Buttermilk, Sour Cream; similar Lemony, Kefir; with Goat Tang, Fresh Milk
Buttermilk: confused Yogurt, Sour Cream; similar Crème Fraîche, Kefir; with Butter, Lemony
Sour Cream: confused Crème Fraîche, Yogurt; similar Buttermilk; with Chive, Button Mushroom
Lemony: confused Lemon, Citrus; similar Yogurt, Goat Tang; with Fresh Grass, Chive; opposite Butterscotch
Crème Fraîche: confused Sour Cream, Cream; similar Buttermilk, Cultured Cream; with Button Mushroom, Hazelnut
Goat Tang: confused Lemony, Goat Curd; similar Yogurt, Barnyard; with Wild Herbs, Hay, Wet Stone
Fresh Grass: confused Hay, Spring Pasture; similar Wild Herbs, Chive; with Butter, Fresh Milk, Lemony
Hay: confused Fresh Grass, Ripening Straw Mat; similar Alpine Herbs, Wildflower; with Hazelnut, Roasted Grain
Wild Herbs: confused Alpine Herbs; similar Fresh Grass, Wildflower; with Goat Tang, Garlic
Wildflower: confused Alpine Herbs, Meadow; similar Hay, Wild Herbs; with Butter, Pineapple
Alpine Herbs: confused Wild Herbs, Wildflower; similar Hay, Dried Alpine Flowers; with Hazelnut, Browned Butter, Cooked Vegetable
Chive: confused Garlic, Wild Garlic; similar Fresh Grass, Green Olive; with Sour Cream, Lemony
Artichoke: confused Cooked Vegetable; similar Broccoli, Green Olive; with Goat Tang, Lemony
Cooked Vegetable: confused Broccoli, Cabbage; similar Boiled Potato, Steamed Milk; with Alpine Herbs, Meaty
Broccoli: confused Cabbage, Cooked Vegetable; similar Cauliflower; with Ammonia, Garlic
Cabbage: confused Broccoli, Cooked Vegetable; similar Ammonia, Barnyard; with Meaty, Garlic
Green Olive: confused Artichoke; similar Salty Mold, Chive; with Lemony, Goat Tang
Citrus: confused Lemony, Lemon; similar Pineapple, Green Apple; with Fresh Grass, Fresh Milk
Green Apple: confused Lemony, White Wine; similar Citrus, Pear Skin; with Fresh Milk, Walnut
Lemon: confused Lemony, Citrus; similar Green Apple, Lemon Curd; with Goat Tang, Wet Stone
White Wine: confused Wine-like, Green Apple; similar Champagne, Green Grape; with Mineral, Lemony
Sour Cherry: similar Dried Apricot, Raisin; with Piquant, Peppery Mold
Pineapple: confused Dried Apricot; similar Citrus, Caramel; with Butterscotch, Roasted Grain, Hazelnut
Dried Apricot: confused Pineapple, Fig Jam; similar Raisin, Apricot Preserve; with Butterscotch, Caramel
Wine-like: confused White Wine; similar Sour Cherry, Raisin; with Barnyard, Peppery Mold
Fig Jam: confused Raisin, Dried Apricot; similar Membrillo; with Walnut, Salty Mold, Caramel
Raisin: confused Fig Jam; similar Dried Apricot, Wine-like; with Walnut, Peppery Mold
Hazelnut: confused Walnut, Browned Butter; similar Almond, Roasted Chestnut; with Butter, Hay, Alpine Herbs
Walnut: confused Hazelnut, Pecan; similar Almond; with Fig Jam, Salty Mold, Green Apple
Almond: confused Hazelnut, Roasted Almond Skin; similar Cashew, Walnut; with Butter, Fresh Milk
Peanut: confused Cashew, Roasted Grain; similar Hazelnut; with Butterscotch, Toast
Cashew: confused Almond, Peanut; similar Macadamia; with Butter, Cream
Pecan: confused Walnut; similar Toffee, Hazelnut; with Butterscotch, Caramel
Browned Butter: confused Butterscotch, Hazelnut; similar Butter, Ghee; with Toast, Caramel, Roasted Grain
Toast: confused Roasted Grain; similar Browned Butter, Toasted Rye; with Hazelnut, Butterscotch
Roasted Grain: confused Toast, Malted Milk; similar Hay; with Hazelnut, Caramel, Pineapple
Caramel: confused Butterscotch, Toffee; similar Burnt Sugar, Dulce de Leche; with Hazelnut, Pineapple, Salty Mold
Toffee: confused Butterscotch, Caramel; similar Salted Caramel, Pecan; with Roasted Grain, Hazelnut
Butterscotch: confused Toffee, Caramel, Browned Butter; similar Salted Caramel; with Pineapple, Roasted Grain; opposite Lemony
Salted Caramel: confused Butterscotch, Toffee; similar Caramel, Tingling Salt; with Hazelnut, Roasted Grain
Burnt Sugar: confused Caramel, Brûléed Sugar; similar Toffee; with Roasted Grain, Smoked Wood
Condensed Milk: confused Sweetened Condensed Milk, Dulce de Leche; similar Steamed Milk, Custard; with Caramel, Butter
Malted Milk: confused Roasted Grain; similar Condensed Milk, Toast; with Caramel, Butter
Custard: confused Condensed Milk; similar White Chocolate, Butter; with Caramel, Fresh Milk
White Chocolate: confused Custard, Condensed Milk; similar Cream, Butter; with Caramel, Hazelnut
Button Mushroom: confused Wild Mushroom, Champignon Stem; similar Cream, Cave; with Crème Fraîche, Cabbage
Truffle: confused Garlic, Porcini; similar Forest Floor, Wild Mushroom; with Cream, Hazelnut
Forest Floor: confused Wild Mushroom; similar Truffle, Damp Stone; with Old Cellar, Musty
Porcini: confused Truffle, Wild Mushroom; similar Meaty, Beef Broth; with Hazelnut, Browned Butter
Wild Mushroom: confused Button Mushroom, Forest Floor; similar Porcini; with Cave, Hay
Cave: confused Old Cellar, Damp Stone; similar Wet Stone, Musty; with Button Mushroom, Mineral
Wet Stone: confused Mineral, Damp Stone; similar Cave; with Goat Tang, Lemony, White Wine
Musty: confused Old Cellar, Cave; similar Forest Floor, Damp Stone; with Ammonia, Barnyard; opposite Fresh Milk
Damp Stone: confused Wet Stone, Cave; similar Old Cellar, Musty; with Button Mushroom
Old Cellar: confused Cave, Musty; similar Damp Stone, Forest Floor; with Barnyard, Meaty
Mineral: confused Wet Stone, Metallic; similar Salty Mold; with Goat Tang, White Wine
Barnyard: confused Meaty, Goat Tang; similar Cabbage, Musty; with Ammonia, Hay, Garlic
Meaty: confused Beef Broth, Barnyard; similar Cured Meat, Ham; with Garlic, Cabbage, Peppery Mold
Ammonia: confused Cabbage; similar Barnyard, Horseradish; with Garlic, Musty, Button Mushroom; opposite Fresh Milk
Beef Broth: confused Meaty, Onion Broth; similar Porcini, Cured Meat; with Garlic, Browned Butter
Garlic: confused Chive, Truffle; similar Horseradish; with Meaty, Barnyard, Ammonia
Cured Meat: confused Ham, Meaty; similar Bacon, Beef Broth; with Salty Mold, Garlic
Peppery Mold: confused Piquant, Spicy Blue Crumble; similar Horseradish, Salty Mold; with Raisin, Fig Jam, Walnut
Metallic: confused Mineral, Iron; similar Piquant; with Peppery Mold, Salty Mold
Piquant: confused Peppery Mold, Horseradish; similar Metallic; with Salty Mold, Sour Cherry; opposite Butter
Salty Mold: confused Peppery Mold; similar Piquant, Mineral; with Walnut, Fig Jam, Caramel
Horseradish: confused Piquant, Peppery Mold; similar Garlic, Ammonia; with Salty Mold
Smoked Wood: confused Campfire, Hickory; similar Applewood, Beechwood; with Bacon, Ham, Butter
Bacon: confused Ham, Cured Meat; similar Hickory, Smoked Wood; with Applewood, Meaty
Campfire: confused Smoked Wood; similar Hickory, Bonfire Cheese Rind; with Bacon, Burnt Sugar
Applewood: confused Smoked Wood, Beechwood; similar Hickory; with Bacon, Caramel, Butter
Hickory: confused Smoked Wood, Campfire; similar Applewood, Bacon; with Ham
Ham: confused Bacon, Cured Meat; similar Meaty; with Smoked Wood, Hickory, Butter
`,
"Honey":`
Acacia: confused Clover; similar Vanilla, Linden; with Almond Blossom, Pear; opposite Buckwheat
Clover: confused Alfalfa, Acacia; similar Cut Grass, Hay; with Vanilla, Cotton Blossom
Alfalfa: confused Clover; similar Hay, Grass; with Beeswax
Cotton Blossom: similar Clover, Acacia; with Vanilla, Butterscotch
Fireweed: similar Acacia, Clover; with Butterscotch, Tea, Pear
Tupelo: similar Acacia, Cotton Candy; with Pear, Jasmine
Orange Blossom: confused Citrus Blossom, Neroli; similar Jasmine, Citrus; with White Grape, Apricot
Lavender: similar Rosemary, Thyme, Sage; with Fresh Herbs, Hay
Linden: similar Mint, Fresh Herbs, Chamomile; with Medicinal, Citrus
Wildflower: similar Clover, Fresh Herbs; with Hay, Chamomile, Berry
Rose: confused Damask Rose; similar Jasmine, Honeysuckle; with Apricot, Berry
Jasmine: confused Honeysuckle, Night Blooming Jasmine; similar Orange Blossom, Rose; with Tupelo
Honeysuckle: confused Jasmine; similar Orange Blossom; with Apricot, Peach
Citrus: confused Orange Blossom; similar Yuzu, Fresh Herbs; with Linden, Eucalyptus
Apple: confused Pear, Baked Apple; similar Quince Paste; with Acacia, Fireweed
Apricot: confused Peach, Apricot Jam; similar Dried Fig; with Orange Blossom, Honeysuckle
Berry: confused Red Berry, Raspberry Blossom; similar Cranberry; with Rose, Blackberry Blossom
Peach: confused Apricot, Nectarine; similar Pear; with Honeysuckle, Tupelo
Pear: confused Apple; similar Peach, Melon; with Acacia, Fireweed
Cranberry: similar Berry, Currant, Sour Ferment; with Molasses
Dried Fig: confused Date, Raisin; similar Prune, Fig Jam; with Chestnut, Molasses
Raisin: confused Sultana, Dried Fig; similar Prune, Date; with Molasses, Malt
Tropical Fruit: similar Peach, Melon; with Vanilla, Butterscotch
Date: confused Dried Fig, Date Syrup; similar Prune, Raisin; with Molasses, Toffee
Prune: confused Raisin; similar Date, Dried Fig; with Molasses, Buckwheat
Cooked Fruit: similar Baked Apple, Apricot Jam, Dried Fig; with Caramel, Fermented
Caramel: confused Toffee, Butterscotch; similar Brown Sugar, Burnt Sugar; with Vanilla, Chestnut
Toffee: confused Caramel, Butterscotch; similar Brown Sugar; with Date, Malt
Brown Sugar: confused Molasses, Demerara; similar Caramel, Maple; with Date
Molasses: confused Brown Sugar; similar Burnt Sugar, Carob, Prune; with Buckwheat, Malt
Burnt Sugar: confused Caramel, Smoke; similar Molasses, Overheated Sugar; with Chestnut
Cotton Candy: similar Vanilla, Caramel; with Tupelo, Acacia
Vanilla: similar Custard, Marzipan; with Acacia, Clover, Cotton Blossom
Beeswax: confused Propolis; similar Musky, Pine Resin; with Hay, Fermented
Butterscotch: confused Toffee, Caramel; similar Custard; with Fireweed, Cotton Blossom
Custard: confused Egg Custard; similar Vanilla, Butterscotch; with Apricot
Marzipan: similar Vanilla, Almond Blossom; with Apricot
Maple: confused Brown Sugar; similar Molasses, Tree Sap; with Malt, Oak
Fresh Herbs: similar Mint, Grass, Thyme; with Linden, Citrus
Grass: confused Cut Grass, Fresh Herbs; similar Hay, Alfalfa; with Clover
Mint: confused Eucalyptus; similar Fresh Herbs, Linden; with Citrus
Eucalyptus: confused Mint, Medicinal; similar Pine Resin, Spruce
Cut Grass: confused Grass; similar Hay, Fern; with Clover, Alfalfa
Thyme: confused Wild Thyme; similar Rosemary, Sage, Dried Herbs; with Medicinal, Pine Resin
Rosemary: similar Thyme, Lavender, Sage; with Pine Resin
Sage: confused Sage Blossom; similar Thyme, Rosemary; with Fresh Herbs, Pear
Hay: confused Straw; similar Dried Herbs, Alfalfa; with Clover, Chamomile, Beeswax
Straw: confused Hay; similar Malt, Wet Cardboard; with Dried Herbs
Chamomile: similar Hay, Dried Herbs, Linden; with Apple, Wildflower
Dried Herbs: confused Hay; similar Tea, Chamomile, Thyme; with Tobacco
Tea: similar Dried Herbs, Tobacco; with Fireweed, Linden
Fern: similar Cut Grass, Tree Sap, Forest Floor; with Musky
Pine Resin: confused Propolis; similar Spruce, Fir, Tree Sap; with Honeydew, Smoke
Cedar: similar Oak, Pine Resin; with Tobacco, Smoke
Tree Sap: similar Pine Resin, Maple, Honeydew; with Malt
Fir: confused Spruce; similar Pine Resin; with Honeydew, Malt
Spruce: confused Fir; similar Pine Resin, Eucalyptus; with Honeydew
Propolis: confused Pine Resin, Beeswax; similar Medicinal, Amber Resin; with Smoke
Chestnut: similar Oak, Tobacco, Leather; with Molasses, Medicinal
Oak: similar Cedar, Chestnut; with Tobacco, Smoke, Maple
Tobacco: similar Leather, Chestnut, Tea; with Cedar, Oak
Carob: similar Molasses, Malt, Date; with Buckwheat
Buckwheat: similar Molasses, Malt, Barnyard; with Dark Bread, Prune; opposite Acacia
Malt: confused Barley, Malted Milk; similar Dark Bread, Brown Bread; with Molasses, Buckwheat
Dark Bread: confused Rye Bread, Brown Bread; similar Malt; with Buckwheat, Molasses
Barley: confused Malt; similar Brown Bread, Straw; with Carob
Brown Bread: confused Dark Bread; similar Malt, Barley, Yeasty
Barnyard: similar Game, Leather, Sweaty; with Buckwheat, Musky
Leather: similar Tobacco, Barnyard, Game; with Chestnut, Smoke
Smoke: confused Burnt Sugar, Bee Smoke; similar Smoke Taint; with Chestnut, Leather, Propolis
Game: similar Barnyard, Musky, Leather
Musky: similar Game, Sweaty, Barnyard; with Beeswax, Buckwheat
Fermented: confused Yeasty, Sour Ferment; similar Cooked Fruit; with Bee Bread
Yeasty: confused Fermented; similar Brown Bread, Sourdough; with Sour Ferment
Medicinal: confused Eucalyptus, Propolis; similar Chemical; with Chestnut, Linden, Thyme
Sweaty: similar Musky, Barnyard, Sour Ferment
Sour Ferment: confused Fermented; similar Yeasty, Sour Mash; with Wet Cardboard
Wet Cardboard: similar Damp Box, Straw, Damp Cellar Note; with Sour Ferment
Chemical: similar Medicinal, Metallic, Plastic Tub; with Overheated Sugar
`,
"Olive Oil":`
Fresh Grass: confused Lawn Clippings, Green Leaf; similar Wheatgrass, Green Stems; with Artichoke, Tomato Leaf, Black Pepper; opposite Ripe Olive
Green Leaf: confused Olive Leaf, Fresh Grass; similar Green Stems; with Bitter Herb, Arugula
Mown Hay: confused Humid Straw; similar Fresh Grass; with Almond, Ripe Olive
Wheatgrass: confused Fresh Grass; similar Nettle, Green Leaf; with Green Apple
Green Stems: confused Crushed Stems; similar Green Leaf, Celery; with Artichoke
Nettle: similar Wheatgrass, Arugula, Green Leaf; with Bitter Herb
Artichoke: confused Artichoke Leaf, Artichoke Heart; similar Asparagus, Green Almond; with Fresh Grass, Tomato Leaf, Black Pepper
Green Tomato: confused Tomato Leaf; similar Green Bean, Green Apple; with Artichoke, Fresh Grass; opposite Red Tomato
Tomato Leaf: confused Green Tomato; similar Green Leaf, Fresh Grass; with Artichoke, Almond
Green Bean: confused Snap Pea; similar Asparagus, Green Tomato; with Fresh Grass
Asparagus: similar Artichoke, Green Bean, Celery; with Fresh Grass
Celery: similar Green Stems, Fennel, Asparagus; with Fresh Grass
Snap Pea: confused Green Bean; similar Pea Pod, Green Almond; with Fresh Grass
Ripe Olive: confused Black Olive Paste; similar Buttery Fruit; with Almond, Butter, Ripe Tomato Flesh; opposite Fresh Grass
Buttery Fruit: similar Ripe Olive, Avocado, Butter; with Banana, Almond
Tropical: similar Banana, Melon, Passion Fruit; with Ripe Olive, Almond
Melon: similar Tropical, Pear, Cucumber Peel; with Almond
Banana: confused Green Banana; similar Tropical, Buttery Fruit; with Almond
Stone Fruit: similar Ripe Apricot, Yellow Plum, Pear; with Almond, Ripe Olive
Green Apple: confused Granny Smith; similar Green Banana, Pear, Citrus Zest; with Fresh Grass, Almond
Green Banana: confused Banana; similar Green Apple, Green Almond; with Fresh Grass, Artichoke
Citrus Zest: confused Lime Zest; similar Green Apple, Kiwi; with Fresh Grass
Kiwi: similar Green Apple, Citrus Zest, Green Banana; with Fresh Grass
Pear: similar Green Apple, Melon, Stone Fruit; with Almond
Red Tomato: confused Ripe Tomato Flesh; similar Stone Fruit; with Ripe Olive; opposite Green Tomato
Almond: confused Green Almond, Marcona Almond; similar Hazelnut, Walnut; with Ripe Olive, Mown Hay
Pine Nut: similar Almond, Hazelnut; with Butter
Walnut: confused Fresh Walnut; similar Hazelnut, Almond; with Walnut Skin, Ripe Olive; opposite Rancid Nut
Hazelnut: similar Almond, Walnut; with Butter, Ripe Olive
Pistachio: similar Green Almond, Almond; with Fresh Grass
Green Almond: confused Almond; similar Artichoke, Pistachio, Green Banana; with Fresh Grass
Butter: confused Sweet Cream; similar Cream, Buttery Fruit; with Ripe Olive, Almond
Cream: confused Sweet Cream; similar Butter, Cocoa Butter
Cocoa Butter: similar Butter, Cream; with Ripe Olive
Sweet Cream: confused Cream, Butter; similar Custard; with Almond
Black Pepper: confused Chili, White Pepper; similar Throat Catch; with Artichoke, Fresh Grass, Bitter Herb
Chili: confused Black Pepper; similar Throat Catch, Ginger; with Green Chili
Throat Catch: confused Back-Throat Burn, Black Pepper; similar Chili, Ginger; with Bitter Herb, Artichoke
White Pepper: confused Black Pepper; similar Ginger, Mustard
Ginger: similar White Pepper, Chili, Throat Catch
Mustard: confused Arugula; similar Horseradish, Raw Radish; with Black Pepper
Arugula: confused Mustard, Watercress; similar Radicchio, Cress Bite; with Black Pepper, Bitter Herb
Radicchio: confused Chicory, Endive; similar Arugula, Bitter Herb; with Artichoke Leaf
Bitter Herb: similar Dandelion, Chicory, Olive Leaf; with Black Pepper, Artichoke, Fresh Grass
Dandelion: confused Chicory; similar Bitter Herb, Radicchio; with Green Leaf
Chicory: confused Dandelion, Radicchio; similar Bitter Chicory Root, Endive; with Bitter Herb
Artichoke Leaf: confused Artichoke; similar Bitter Herb, Olive Leaf; with Black Pepper
Rancid Nut: confused Stale Nuts, Oxidized Nut; similar Crayon, Putty, Linseed; opposite Walnut
Crayon: confused Wax Crayon, Putty; similar Rancid Nut, Varnish
Stale Nuts: confused Rancid Nut, Old Walnut; similar Stale Breadcrumb, Stale Fry Oil
Putty: confused Crayon, Linseed; similar Rancid Nut
Linseed: confused Putty, Varnish; similar Rancid Nut, Crayon
Fusty: confused Muddy, Olive Brine; similar Sauerkraut, Table Olive Brine; with Musty, Winey
Winey: confused Vinegary, Sour Wine; similar Boozy Ferment; with Fusty
Vinegary: confused Winey, Sour Wine; similar Vinegar Mother
Yeasty: similar Bready Ferment, Winey, Fusty
Sour Wine: confused Winey, Vinegary; similar Boozy Ferment
Musty: confused Earthy Mold, Damp Cellar; similar Humid Straw, Wet Burlap; with Fusty
Muddy: confused Fusty, Muddy Vats; similar Earthy Mold, Wet Wood
Wet Wood: similar Damp Cellar, Wet Rope, Muddy; with Musty
Damp Cellar: confused Musty, Cellar Mold; similar Wet Wood, Earthy Mold
Earthy Mold: confused Musty, Damp Cellar; similar Mold Bloom, Muddy
Humid Straw: confused Musty, Mown Hay; similar Wet Burlap, Wet Wood
`,
"Maple Syrup":`
Vanilla: confused Tonka, Vanilla Bark; similar Custard, Marshmallow; with Caramel, Butter, Cream
Marshmallow: confused Cotton Candy; similar Vanilla, Marshmallow Cream; with Burnt Marshmallow, Toast
Custard: confused Pastry Cream; similar Vanilla, Condensed Milk; with Caramel, Nutmeg, Eggnog
Cream Soda: confused Vanilla; similar Cotton Candy, Marshmallow; with Caramel, Brown Sugar
Whipped Cream: confused Cream, Sweet Cream; similar Marshmallow, Meringue; with Vanilla
White Chocolate: confused Condensed Milk; similar Vanilla, Butter; with Cream, Caramel
Caramel: confused Toffee, Butter Caramel; similar Brown Sugar, Burnt Sugar; with Vanilla, Butter, Toasted Nut
Toffee: confused Caramel, Butter Caramel; similar Brown Sugar; with Butter, Toasted Nut, Molasses
Brown Sugar: confused Demerara, Wet Brown Sugar; similar Molasses, Caramel; with Cinnamon, Raisin
Burnt Sugar: confused Burnt Marshmallow; similar Caramel, Molasses; with Coffee, Toast, Dark Chocolate
Molasses: confused Brown Sugar; similar Burnt Sugar, Golden Syrup; with Coffee, Dried Fruit, Clove, Ginger
Demerara: confused Brown Sugar; similar Caramel, Golden Syrup; with Raisin, Toast
Cotton Candy: confused Marshmallow; similar Cream Soda, Vanilla; with Burnt Sugar
Coffee: confused Espresso, Coffee Grounds; similar Cocoa, Dark Chocolate; with Burnt Sugar, Molasses, Toast
Cocoa: confused Carob; similar Dark Chocolate, Coffee; with Vanilla, Toast, Toasted Nut
Toast: similar Toasted Nut, Toasted Sugar Crust; with Caramel, Butter, Brown Sugar, Coffee
Espresso: confused Coffee, French Roast; similar Dark Chocolate, Burnt Sugar; with Molasses
Dark Chocolate: confused Cocoa; similar Espresso, Coffee; with Molasses, Burnt Sugar, Dried Fruit
Burnt Marshmallow: confused Burnt Sugar; similar Marshmallow, Toast; with Smoked Maple, Caramel
Butter: confused Cream, Sweet Cream Butter; similar Butter Caramel; with Caramel, Toffee, Vanilla, Toast
Cream: confused Sweet Cream, Whipped Cream; similar Butter, Condensed Milk; with Vanilla, Custard
Condensed Milk: confused Milk Caramel; similar Custard, White Chocolate, Cream; with Caramel, Vanilla
Buttermilk: similar Cream, Butter; with Baked Apple, Vanilla; opposite Condensed Milk
Sweet Cream: confused Cream, Whipped Cream; similar Butter; with Vanilla, Marshmallow
Baked Apple: confused Apple Fritter, Candy Apple; similar Pear, Poached Pear; with Cinnamon, Brown Sugar, Butter
Peach: similar Apricot, Pear; with Honeysuckle, Vanilla, Cream
Dried Fruit: confused Raisin, Fig; similar Date Paste, Roasted Plum; with Molasses, Brown Sugar, Clove
Pear: confused Poached Pear; similar Baked Apple, Peach; with Vanilla, Clove, Honeysuckle
Raisin: confused Dried Fruit, Golden Raisin; similar Fig; with Molasses, Brown Sugar, Cinnamon
Apricot: similar Peach, Dried Fruit; with Honeysuckle, Vanilla, Cream
Citrus Zest: confused Candied Orange; similar Orange Glaze; with Vanilla, Ginger, Clove
Clover: confused Wildflower; similar Fresh Grass, Hay, Linden; with Honeysuckle, Vanilla
Dandelion: similar Wildflower, Clover, Fresh Grass; with Hay, Chamomile
Honeysuckle: confused Wildflower; similar Clover, Linden; with Peach, Apricot, Vanilla
Chamomile: confused Hay; similar Wildflower, Green Tea, Straw; with Honeysuckle, Apricot
Wildflower: confused Clover, Honeysuckle; similar Dandelion, Chamomile; with Hay, Vanilla
Hay: confused Straw, Toasted Hay; similar Chamomile, Fresh Grass; with Clover, Bark
Fresh Grass: confused Hay; similar Green Tea, Fern; with Clover, Dandelion; opposite Burnt Sugar
Straw: confused Hay; similar Chamomile, Sawdust; with Fresh Grass, Bark
Green Tea: confused Fresh Grass; similar Chamomile, Hay; with Clover, Bark
Cinnamon: confused Burnt Cinnamon; similar Nutmeg, Allspice; with Brown Sugar, Baked Apple, Vanilla
Clove: confused Allspice; similar Nutmeg, Clove Honey; with Molasses, Cinnamon, Dried Fruit
Nutmeg: confused Allspice; similar Cinnamon, Clove; with Custard, Eggnog, Butter
Ginger: similar Cinnamon, Citrus Zest; with Molasses, Molasses Cookie, Clove
Allspice: confused Clove, Nutmeg; similar Cinnamon; with Molasses, Brown Sugar
Anise: confused Star Anise, Warm Anise; with Molasses, Clove, Cinnamon
Bark: confused Maple Bark, Birch; similar Oak, Cedar, Sawdust; with Hay, Straw
Cedar: similar Bark, Oak, Sawdust; with Cedar Tips, Toast
Toasted Nut: confused Toast, Roasted Chestnut; similar Praline, Toffee; with Caramel, Butter, Brown Sugar
Oak: confused Bark; similar Cedar, Charred Barrel; with Vanilla, Toast, Caramel
Sawdust: confused Bark, Split Firewood; similar Cedar, Straw; with Oak, Hay
`,
};
