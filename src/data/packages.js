// src/data/packages.js
// Travel package offerings for Wanderly Travel Agency

export const packages = [
  {
    id: "hunza-escape",
    name: "Hunza Escape",
    destination: "Hunza Valley, Gilgit-Baltistan",
    country: "Pakistan",
    region: "Pakistan",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    price: 45000,
    formattedPrice: "PKR 45,000",
    rating: 4.9,
    reviewsCount: 142,
    groupSize: "Small group (Max 12)",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Explore the ancient forts, crystal waters of Attabad Lake, and towering jagged peaks of legendary Hunza.",
    description: "Immerse yourself in northern Pakistan's most celebrated valley. Traverse the scenic Karakoram Highway, witness sunrise over Rakaposhi (7,788m), glide across the azure waters of Attabad Lake, and walk through the historic cobblestone alleys of Altit and Baltit Forts.",
    included: [
      "4 nights boutique hotel accommodation",
      "Daily gourmet mountain breakfasts & traditional dinners",
      "Private AC coaster transport & 4x4 jeeps",
      "Professional English & Urdu speaking tour guide",
      "Attabad Lake speed boat ride & life vests",
      "All national park and fort entrance fees",
      "First aid and mountain emergency support"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Islamabad & Scenic Karakoram Highway",
        description: "Depart early from Islamabad via the Hazara Motorway and Karakoram Highway. Pass through Abbottabad, Mansehra, and Besham. Stop at the dramatic junction point of three great mountain ranges (Himalayas, Karakoram, Hindu Kush). Overnight stay in Chilas or Gilgit."
      },
      {
        day: 2,
        title: "Arrival in Hunza & Altit Fort Heritage Tour",
        description: "Continue along the Hunza River with stunning views of Mt. Rakaposhi. Arrive in Karimabad, check in to your hotel, and visit the 900-year-old Altit Fort and the royal orchards of the Hunza royalty."
      },
      {
        day: 3,
        title: "Attabad Lake, Gulmit & Hussani Suspension Bridge",
        description: "Explore the turquoise Attabad Lake by boat. Journey onwards to the Upper Hunza (Gojal), walk across the famous Hussani Suspension Bridge, and view the iconic Passu Cones. Return to Karimabad for sunset at Eagle's Nest."
      },
      {
        day: 4,
        title: "Baltit Fort, Karimabad Bazaar & Local Cuisine",
        description: "Ascend to the 700-year-old Baltit Fort perched over Karimabad. Afternoon free for handicraft and gemstone shopping in Karimabad Bazaar, tasting traditional Hunza walnut cakes and Chapshuro."
      },
      {
        day: 5,
        title: "Return Journey via Gilgit to Islamabad",
        description: "Early breakfast and scenic drive back towards Islamabad with photo stops at Rakaposhi View Point and Babusar Top (seasonal). Arrive in Islamabad by late evening with unforgettable memories."
      }
    ]
  },
  {
    id: "skardu-adventure",
    name: "Skardu Adventure",
    destination: "Skardu, Baltistan",
    country: "Pakistan",
    region: "Pakistan",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    price: 55000,
    formattedPrice: "PKR 55,000",
    rating: 4.8,
    reviewsCount: 118,
    groupSize: "Small group (Max 10)",
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Discover cold high-altitude sand dunes, mirror-like alpine lakes, and the legendary Shangrila haven.",
    description: "Skardu is the ultimate crown of Baltistan. Walk through the mystical Katpana Cold Desert where white sand meets snow, marvel at Upper Kachura Lake's crystal depths, and enjoy the tranquil heritage of Lower Kachura Shangrila.",
    included: [
      "5 nights comfortable hotel stays",
      "Daily breakfasts and traditional Balti dinners",
      "Dedicated 4x4 Prado/Jeep transport for rugged trails",
      "Experienced local guide certified in Baltistan terrain",
      "Kachura Lake boating and Katpana desert entry",
      "Complimentary bonfire evening with Balti folk music",
      "All toll taxes, parking fees, and road permits"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Skardu & Indus River Canyon",
        description: "Travel towards Skardu along the breathtaking Indus River gorge with dramatic vistas of sheer canyon walls. Check in to your hotel and unwind."
      },
      {
        day: 2,
        title: "Lower Kachura (Shangrila) & Upper Kachura Lake",
        description: "Visit Shangrila Resort built around the heart-shaped Lower Kachura Lake. Hike up to the pristine Upper Kachura Lake for trout fishing and boating."
      },
      {
        day: 3,
        title: "Katpana Cold Desert & Sunset over Sand Dunes",
        description: "Experience the rare high-altitude desert of Katpana. Walk across cold shifting dunes surrounded by snowy peaks and capture an unforgettable sunset."
      },
      {
        day: 4,
        title: "Shigar Valley & Historic Shigar Fort",
        description: "Drive to the lush Shigar Valley. Tour the 17th-century restored palace of the Raja of Shigar, now managed by Serena Heritage, and wander the apricot orchards."
      },
      {
        day: 5,
        title: "Satpara Lake & Skardu Local Bazaars",
        description: "Visit the mesmerizing Satpara Lake, the primary water source of Skardu valley. Spend the afternoon browsing Balti embroidery, dried fruits, and woolen shawls."
      },
      {
        day: 6,
        title: "Farewell Baltistan & Return Travel",
        description: "Depart Skardu carrying memories of cold desert dunes and mighty Karakoram peaks. Safe return transit to departure hub."
      }
    ]
  },
  {
    id: "swat-getaway",
    name: "Swat Getaway",
    destination: "Swat Valley, Khyber Pakhtunkhwa",
    country: "Pakistan",
    region: "Pakistan",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    nightsCount: 3,
    price: 32000,
    formattedPrice: "PKR 32,000",
    rating: 4.7,
    reviewsCount: 96,
    groupSize: "Family friendly (Max 14)",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Relax among lush pine forests, gushing rivers, and Malam Jabba's premier alpine ski resort.",
    description: "Escape to the tranquil valleys of Swat. Known as the Switzerland of Pakistan, Swat offers crystal mountain streams, lush cedar forests of Kalam, serene Mahodand Lake, and chairlift adventures at Malam Jabba.",
    included: [
      "3 nights riverside resort & hotel stay",
      "Daily breakfast and scenic dinner spreads",
      "Air-conditioned private vehicle throughout",
      "4x4 jeep safari to Mahodand Lake",
      "Malam Jabba ski resort entry & chairlift access",
      "Dedicated tour coordinator",
      "Driver allowances, tolls, and fuel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Travel via Swat Motorway to Fizagat & Mingora",
        description: "Drive on the modern Swat Motorway through lush green foothills. Arrive in Mingora, visit the Swat Museum, and relax by the Swat River in Fizagat."
      },
      {
        day: 2,
        title: "Malam Jabba Alpine Adventure & Ziplining",
        description: "Head up the winding scenic road to Malam Jabba (9,200 ft). Enjoy chairlift rides, optional alpine ziplining, and panoramic valley views."
      },
      {
        day: 3,
        title: "Kalam Valley, Ushu Pine Forest & Mahodand Lake",
        description: "Travel upstream along the roaring Swat River to Kalam. Transfer to 4x4 jeeps to explore the dense Ushu Forest, Matiltan waterfall, and glacial Mahodand Lake."
      },
      {
        day: 4,
        title: "Local Handicrafts & Return Journey",
        description: "Browse famous Swati shawls, carved wooden furniture, and honey in Bahrain/Mingora before a comfortable return drive."
      }
    ]
  },
  {
    id: "dubai-explorer",
    name: "Dubai Explorer",
    destination: "Dubai, Downtown & Marina",
    country: "United Arab Emirates",
    region: "International",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    nightsCount: 4,
    price: 125000,
    formattedPrice: "PKR 125,000",
    rating: 4.9,
    reviewsCount: 204,
    groupSize: "Flexible group",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Experience the glittering skyline, dune bashing in red deserts, and luxury Marina yacht cruises.",
    description: "Dubai offers an exhilarating fusion of visionary engineering and rich Arabian heritage. Ascend to the top of Burj Khalifa, cruise along Dubai Marina under illuminated towers, and enjoy a thrilling desert safari with BBQ dinner and live shows.",
    included: [
      "4 nights 4-star city center hotel with breakfast",
      "Burj Khalifa At The Top (124th & 125th floor) entry",
      "Premium Desert Safari with 4x4 dune bashing, camel rides & BBQ",
      "Dubai Marina evening dhow dinner cruise",
      "Private airport transfers (DXB) in luxury vehicles",
      "Half-day Dubai city orientation tour with English guide",
      "UAE tourist visa processing assistance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai & Dubai Marina Leisure",
        description: "Arrive at Dubai International Airport with private transfer to hotel. Evening walk around the vibrant Dubai Marina promenade and JBR walk."
      },
      {
        day: 2,
        title: "Burj Khalifa, Dubai Mall & Fountain Spectacle",
        description: "Explore the vast Dubai Mall, gaze into the Dubai Aquarium, and ascend the Burj Khalifa for 360-degree views of the metropolis. Watch the evening Dubai Fountain show."
      },
      {
        day: 3,
        title: "Old Dubai Cultural Walk & Gold/Spice Souks",
        description: "Cross Dubai Creek on a traditional Abra boat. Wander the aromatic Spice Souk and dazzling Gold Souk, followed by a visit to Al Fahidi Historical Neighborhood."
      },
      {
        day: 4,
        title: "Red Dune Desert Safari & Bedouin BBQ Camp",
        description: "Afternoon 4x4 desert safari across crimson Lahbab dunes. Enjoy sandboarding, sunset photography, henna painting, Tanoura dance, and an Arabian BBQ buffet under the stars."
      },
      {
        day: 5,
        title: "Souvenir Shopping & Airport Departure",
        description: "Last-minute duty-free shopping at Mall of the Emirates or Dubai Mall before private airport transfer for your departure flight."
      }
    ]
  },
  {
    id: "istanbul-discovery",
    name: "Istanbul Discovery",
    destination: "Istanbul, Bosphorus & Sultanahmet",
    country: "Turkey",
    region: "International",
    duration: "7 Days / 6 Nights",
    daysCount: 7,
    nightsCount: 6,
    price: 180000,
    formattedPrice: "PKR 180,000",
    rating: 4.9,
    reviewsCount: 175,
    groupSize: "Small group (Max 12)",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A timeless voyage through Ottoman palaces, majestic mosques, the Bosphorus Strait, and vibrant bazaars.",
    description: "Step into centuries of living history in Istanbul. Stand inside the awe-inspiring domes of Hagia Sophia and Sultan Ahmed Mosque, uncover imperial secrets at Topkapi Palace, sail the waters separating Europe and Asia, and lose yourself in the labyrinthine Grand Bazaar.",
    included: [
      "6 nights in historic boutique hotel in Sultanahmet",
      "Daily Turkish breakfasts with fresh pastries and tea",
      "Sunset Bosphorus yacht cruise with Turkish appetizers",
      "Guided walking tours of Hagia Sophia, Blue Mosque & Basilica Cistern",
      "Fast-track entry passes to Topkapi Palace & harem",
      "Private airport transfers (IST / SAW)",
      "Dedicated licensed Turkish historian guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Istanbul & Sultanahmet Evening",
        description: "Arrive in Istanbul and transfer to your boutique hotel. Take a peaceful evening stroll across Sultanahmet Square illuminated by glowing historic fountains."
      },
      {
        day: 2,
        title: "Heart of the Empires: Hagia Sophia & Blue Mosque",
        description: "Full day exploring Hagia Sophia's 1,500-year-old Byzantine mosaics, the iconic six minarets of the Blue Mosque, and the subterranean Basilica Cistern."
      },
      {
        day: 3,
        title: "Imperial Splendor: Topkapi Palace & Grand Bazaar",
        description: "Tour the lavish courtyards and jewel collection of Topkapi Palace. Afternoon spent shopping for ceramics, rugs, lanterns, and sweets in the Grand Bazaar."
      },
      {
        day: 4,
        title: "Bosphorus Strait Cruise & Spice Market",
        description: "Board a private boat along the Bosphorus, sailing between European and Asian shores. In the afternoon, sample Turkish Delight and saffron in the Spice Market."
      },
      {
        day: 5,
        title: "Galata Tower, Istiklal Street & Taksim",
        description: "Cross the Golden Horn to Galata. Climb the Galata Tower for sweeping panoramic city views, then ride the historic red tram down buzzing Istiklal Avenue."
      },
      {
        day: 6,
        title: "Asian Side Discovery: Kadikoy & Moda",
        description: "Take a scenic public ferry to Kadikoy on the Asian side. Discover hipster cafes, vibrant street murals, fish markets, and watch sunset from Moda seaside."
      },
      {
        day: 7,
        title: "Turkish Hammam & Departure",
        description: "Optional morning traditional Turkish bath experience. Pack your treasures and transfer to the airport for your flight home."
      }
    ]
  },
  {
    id: "bali-retreat",
    name: "Bali Retreat",
    destination: "Bali, Ubud & Uluwatu",
    country: "Indonesia",
    region: "International",
    duration: "6 Days / 5 Nights",
    daysCount: 6,
    nightsCount: 5,
    price: 160000,
    formattedPrice: "PKR 160,000",
    rating: 4.8,
    reviewsCount: 162,
    groupSize: "Relaxed small group",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Recharge with lush emerald rice terraces, cliffside ocean temples, holistic wellness, and tropical sunsets.",
    description: "Bali is a soulful sanctuary that balances spiritual culture with pure tropical bliss. From the artistic jungle hills of Ubud and cascading waterfalls to the dramatic limestone ocean cliffs of Uluwatu with traditional Kecak dance, this retreat is designed to rejuvenate your spirit.",
    included: [
      "3 nights jungle resort in Ubud + 2 nights ocean-view villa in Uluwatu",
      "Daily tropical breakfasts and welcome coconut refreshments",
      "Tegallalang rice terrace tour and jungle swing experience",
      "Uluwatu Temple cliffside tour & sunset Kecak Fire Dance tickets",
      "1x complimentary Balinese traditional herbal massage (60 mins)",
      "Private air-conditioned vehicle with friendly English-speaking driver",
      "All temple sarong rentals, entrance fees, and airport transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali & Welcome to Ubud Jungle",
        description: "Arrive at Ngurah Rai International Airport (Denpasar). Scenic drive into the lush green highlands of Ubud. Settle into your tranquil jungle resort."
      },
      {
        day: 2,
        title: "Tegallalang Rice Terraces, Coffee Plantation & Waterfalls",
        description: "Walk among the UNESCO-listed Tegallalang rice paddies. Visit a traditional organic coffee farm to taste Luwak coffee, and swim in Tegenungan Waterfall."
      },
      {
        day: 3,
        title: "Sacred Monkey Forest & Ubud Art Market",
        description: "Visit the ancient banyan trees and playful macaques of Ubud Sacred Monkey Forest Sanctuary. Free afternoon for artisan markets and yoga."
      },
      {
        day: 4,
        title: "Transfer to Uluwatu & Balinese Spa Session",
        description: "Drive south to the Bukit Peninsula. Check in to your coastal resort. Enjoy an authentic 60-minute Balinese massage to melt all fatigue."
      },
      {
        day: 5,
        title: "Uluwatu Ocean Cliff Temple & Kecak Fire Dance",
        description: "Visit the stunning 70-meter cliff temple of Uluwatu. Watch the mesmerizing open-air sunset Kecak Fire Dance chanting, followed by a beachfront seafood dinner in Jimbaran Bay."
      },
      {
        day: 6,
        title: "Tropical Beach Morning & Farewell Bali",
        description: "Enjoy a leisurely morning swim or beach walk along Padang Padang before private transfer to the airport."
      }
    ]
  }
];
