// Simulated data for static recipe generation
const sauceIngredients = [
  // Base ingredients
  'Soy sauce',
  'Chili oil',
  'Sesame oil',
  'Garlic, minced',
  'Ginger, grated',
  'Green onion, chopped',
  'Cilantro, chopped',
  'Vinegar',
  'Honey',
  'Brown sugar',
  'Hoisin sauce',
  'Oyster sauce',
  
  // Spicy and complex ingredients
  'Doubanjiang (spicy bean paste)',
  'Fermented black beans',
  'Sichuan peppercorns',
  'Star anise',
  'Cinnamon stick',
  'Dried chili peppers',
  'Dried red chilies',
  'Thai bird eye chilies',
  'Habanero peppers',
  'Ghost pepper (extremely hot)',
  
  // Additional texture and flavor enhancers
  'Shaoxing wine',
  'Mirin',
  'Lime juice',
  'Fish sauce',
  'MSG',
  'Sesame seeds',
  'Tahini paste',
  'Peanut butter',
  'Crushed peanuts',
  'White pepper',
  'Black vinegar',
  'Plum sauce',
  'XO sauce',
  'Sriracha sauce',
  'Yuzu juice',
  'Gochujang (Korean chili paste)',
  'Lemongrass, minced',
  'Kaffir lime leaves',
  'Coconut milk',
  'Orange zest'
];

// Sample data for simulated Spotify tracks
const sampleTracks = [
  {
    id: '1',
    name: 'Electric Feel',
    artists: [{ id: 'a1', name: 'MGMT' }],
    album: {
      id: 'al1',
      name: 'Oracular Spectacular',
      images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273776c2c20798e3a0a5834bb01' }]
    },
    // Extended track attributes - these would come from Spotify Audio Features API
    audio_features: {
      tempo: 130,
      acousticness: 0.3,
      danceability: 0.7,
      energy: 0.8,
      instrumentalness: 0.1,
      valence: 0.65,  // happiness level
      loudness: -5.2,
      liveness: 0.2
    }
  },
  {
    id: '2',
    name: 'Dance Monkey',
    artists: [{ id: 'a2', name: 'Tones and I' }],
    album: {
      id: 'al2',
      name: 'The Kids Are Coming',
      images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273f11b4b941abdf72f9298f800' }]
    },
    audio_features: {
      tempo: 98,
      acousticness: 0.4,
      danceability: 0.9,
      energy: 0.7,
      instrumentalness: 0.05,
      valence: 0.8,
      loudness: -4.8,
      liveness: 0.15
    }
  },
  {
    id: '3',
    name: 'Blinding Lights',
    artists: [{ id: 'a3', name: 'The Weeknd' }],
    album: {
      id: 'al3',
      name: 'After Hours',
      images: [{ url: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' }]
    },
    audio_features: {
      tempo: 171,
      acousticness: 0.1,
      danceability: 0.8,
      energy: 0.73,
      instrumentalness: 0.0,
      valence: 0.33,
      loudness: -5.9,
      liveness: 0.09
    }
  },
  {
    id: '4',
    name: 'Bad Guy',
    artists: [{ id: 'a4', name: 'Billie Eilish' }],
    album: {
      id: 'al4',
      name: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
      images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273641a6c2b7463a1f5b82d6f72' }]
    },
    audio_features: {
      tempo: 135,
      acousticness: 0.33,
      danceability: 0.7,
      energy: 0.43,
      instrumentalness: 0.0,
      valence: 0.56,
      loudness: -11.7,
      liveness: 0.1
    }
  },
  {
    id: '5',
    name: 'Shape of You',
    artists: [{ id: 'a5', name: 'Ed Sheeran' }],
    album: {
      id: 'al5',
      name: '÷ (Divide)',
      images: [{ url: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96' }]
    },
    audio_features: {
      tempo: 96,
      acousticness: 0.58,
      danceability: 0.83,
      energy: 0.65,
      instrumentalness: 0.0,
      valence: 0.93,
      loudness: -3.2,
      liveness: 0.09
    }
  }
];

// Sample genres for the random generator
const musicGenres = [
  'Pop',
  'Rock',
  'Hip Hop',
  'Electronic',
  'R&B',
  'Indie',
  'Dance',
  'Folk',
  'Jazz',
  'Classical',
  'Metal',
  'Country',
  'Blues',
  'Reggae',
  'Funk',
  'Soul',
  'Disco',
  'Punk',
  'Alternative',
  'K-Pop'
];

// Energy levels and moods for flavor profiles
const energyLevels = ['Low', 'Medium', 'High', 'Intense'];
const moods = ['Melancholic', 'Chill', 'Upbeat', 'Energetic', 'Dreamy', 'Aggressive'];

// Additional sauce metrics
const spiceLevels = ['Mild', 'Medium', 'Spicy', 'Extra Spicy', 'Fiery'];
const textures = ['Smooth', 'Chunky', 'Creamy', 'Coarse', 'Silky'];
const thickness = ['Thin', 'Medium', 'Thick', 'Very Thick'];
const complexity = ['Simple', 'Balanced', 'Complex', 'Intricate'];

// Tempo categories
const tempoRanges = {
  'Slow': [0, 85],
  'Medium': [85, 120],
  'Upbeat': [120, 140],
  'Fast': [140, 180],
  'Very Fast': [180, 999]
};

// Recipe names
const recipeNamePrefixes = [
  'Spicy', 'Sweet', 'Tangy', 'Smoky', 'Zesty', 'Fiery', 'Aromatic', 'Bold', 'Savory', 'Umami'
];

const recipeNameSuffixes = [
  'Fusion', 'Delight', 'Explosion', 'Symphony', 'Harmony', 'Sensation', 'Adventure', 'Creation', 'Masterpiece', 'Signature'
];

// DOM elements
const spotifyLoginBtn = document.getElementById('spotify-login-btn');
const loginContainer = document.getElementById('login-container');
const loadingContainer = document.getElementById('loading-container');
const resultContainer = document.getElementById('result-container');
const recipeName = document.getElementById('recipe-name');
const recipeDescription = document.getElementById('recipe-description');
const topGenre = document.getElementById('top-genre');
const energyLevel = document.getElementById('energy-level');
const mood = document.getElementById('mood');
const ingredientsList = document.getElementById('ingredients-list');
const instructionsList = document.getElementById('instructions-list');
const tracksList = document.getElementById('tracks-list');
const saveBtn = document.getElementById('save-btn');
const shareBtn = document.getElementById('share-btn');
const newRecipeBtn = document.getElementById('new-recipe-btn');

// Helper functions
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function showToast(message) {
  // Create a toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  // Add it to the document
  document.body.appendChild(toast);
  
  // Trigger the show class after a small delay (for animation)
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Remove the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Helper functions for calculating averages from track audio features
function calculateAverageAudioFeature(tracks, featureName) {
  if (!tracks || tracks.length === 0) return 0;
  
  const sum = tracks.reduce((total, track) => {
    // Make sure the track has audio features
    if (track.audio_features && track.audio_features[featureName] !== undefined) {
      return total + track.audio_features[featureName];
    }
    return total;
  }, 0);
  
  return sum / tracks.length;
}

function getTempoCategory(tempo) {
  for (const [category, range] of Object.entries(tempoRanges)) {
    if (tempo >= range[0] && tempo <= range[1]) {
      return category;
    }
  }
  return 'Medium'; // Default
}

// Generate a recipe based on music metrics
function generateRecipe(tracks) {
  // Calculate average music metrics
  const avgEnergy = calculateAverageAudioFeature(tracks, 'energy');
  const avgValence = calculateAverageAudioFeature(tracks, 'valence');
  const avgDanceability = calculateAverageAudioFeature(tracks, 'danceability');
  const avgAcousticness = calculateAverageAudioFeature(tracks, 'acousticness');
  const avgTempo = calculateAverageAudioFeature(tracks, 'tempo');
  
  // Map energy level based on track energy
  let energyLevelIndex = Math.floor(avgEnergy * 4);
  if (energyLevelIndex >= energyLevels.length) energyLevelIndex = energyLevels.length - 1;
  const selectedEnergyLevel = energyLevels[energyLevelIndex];
  
  // Map mood based on valence (happiness)
  let moodIndex = Math.floor(avgValence * moods.length);
  if (moodIndex >= moods.length) moodIndex = moods.length - 1;
  const selectedMood = moods[moodIndex];
  
  // Map spice level based on energy and valence
  let spiceIndex = Math.floor((avgEnergy * 1.5 + avgValence * 0.5) * (spiceLevels.length / 2));
  if (spiceIndex >= spiceLevels.length) spiceIndex = spiceLevels.length - 1;
  const selectedSpiceLevel = spiceLevels[spiceIndex];
  
  // Map texture based on acousticness
  let textureIndex = Math.floor((1 - avgAcousticness) * textures.length);
  if (textureIndex >= textures.length) textureIndex = textures.length - 1;
  const selectedTexture = textures[textureIndex];
  
  // Map thickness based on danceability
  let thicknessIndex = Math.floor(avgDanceability * thickness.length);
  if (thicknessIndex >= thickness.length) thicknessIndex = thickness.length - 1;
  const selectedThickness = thickness[thicknessIndex];
  
  // Get tempo category
  const selectedTempo = getTempoCategory(avgTempo);
  
  // Map complexity based on overall metrics
  let complexityScore = (avgEnergy + avgDanceability + (1 - avgAcousticness)) / 3;
  let complexityIndex = Math.floor(complexityScore * complexity.length);
  if (complexityIndex >= complexity.length) complexityIndex = complexity.length - 1;
  const selectedComplexity = complexity[complexityIndex];
  
  // Generate a name that reflects the music metrics
  // Higher energy = more intense prefix
  const namePrefix = recipeNamePrefixes[Math.min(Math.floor(avgEnergy * 10), recipeNamePrefixes.length - 1)];
  const nameSuffix = recipeNameSuffixes[Math.min(Math.floor(avgValence * 10), recipeNameSuffixes.length - 1)];
  const name = `${namePrefix} ${nameSuffix} Hotpot Sauce`;
  
  // Select a pseudo-random genre that's weighted toward certain genres for certain energy levels
  // This simulates what a real music-based algorithm would do but in a simple way
  let genrePool;
  if (avgEnergy > 0.8) {
    genrePool = ['Rock', 'Metal', 'Electronic', 'Dance', 'Hip Hop', 'Punk'];
  } else if (avgEnergy > 0.6) {
    genrePool = ['Pop', 'Electronic', 'Dance', 'R&B', 'Alternative', 'K-Pop'];
  } else if (avgEnergy > 0.4) {
    genrePool = ['Indie', 'Pop', 'Folk', 'Blues', 'Soul', 'Funk', 'Disco'];
  } else {
    genrePool = ['Classical', 'Jazz', 'Folk', 'R&B', 'Blues'];
  }
  
  const topGenre = getRandomElement(genrePool);
  
  // Enhanced flavor profile with additional metrics
  const flavorProfile = {
    topGenre: topGenre,
    energyLevel: selectedEnergyLevel,
    mood: selectedMood,
    spiceLevel: selectedSpiceLevel,
    texture: selectedTexture,
    thickness: selectedThickness,
    tempo: selectedTempo,
    complexity: selectedComplexity
  };
  
  // Select ingredients based on the metrics
  // More energy = more spicy ingredients
  // Higher valence (happiness) = more sweet ingredients
  // Higher danceability = more varied ingredients
  
  // Base ingredients that always get included (3-4)
  const baseCount = 3 + (Math.random() > 0.5 ? 1 : 0);
  const baseIngredients = [
    { name: 'Soy sauce', amount: getIngredientAmount('Soy sauce') },
    { name: 'Sesame oil', amount: getIngredientAmount('Sesame oil') }
  ];
  
  // Add garlic based on energy
  if (avgEnergy > 0.3) {
    baseIngredients.push({ name: 'Garlic, minced', amount: getIngredientAmount('Garlic, minced') });
  }
  
  // Add ginger based on energy and tempo
  if (avgEnergy > 0.4 || avgTempo > 120) {
    baseIngredients.push({ name: 'Ginger, grated', amount: getIngredientAmount('Ginger, grated') });
  }
  
  // Determine the number of additional spicy ingredients based on energy
  const spicyCount = Math.floor(avgEnergy * 3) + 1;
  
  // Spicy ingredients pool - select based on spice level
  let spicyPool = ['Chili oil'];
  
  if (selectedSpiceLevel === 'Mild') {
    spicyPool = ['Chili oil', 'Green onion, chopped'];
  } else if (selectedSpiceLevel === 'Medium') {
    spicyPool = ['Chili oil', 'Dried chili peppers', 'Sriracha sauce'];
  } else if (selectedSpiceLevel === 'Spicy') {
    spicyPool = ['Chili oil', 'Doubanjiang (spicy bean paste)', 'Dried red chilies', 'Sriracha sauce', 'Sichuan peppercorns'];
  } else if (selectedSpiceLevel === 'Extra Spicy') {
    spicyPool = ['Chili oil', 'Doubanjiang (spicy bean paste)', 'Thai bird eye chilies', 'Sichuan peppercorns', 'Gochujang (Korean chili paste)'];
  } else if (selectedSpiceLevel === 'Fiery') {
    spicyPool = ['Chili oil', 'Doubanjiang (spicy bean paste)', 'Thai bird eye chilies', 'Habanero peppers', 'Ghost pepper (extremely hot)', 'Sichuan peppercorns'];
  }
  
  const spicyIngredients = getRandomElements(spicyPool, Math.min(spicyCount, spicyPool.length)).map(name => ({
    name,
    amount: getIngredientAmount(name)
  }));
  
  // Sweeteners based on valence (happiness)
  const sweetCount = Math.floor(avgValence * 2) + (avgValence > 0.7 ? 1 : 0);
  const sweetPool = ['Honey', 'Brown sugar', 'Mirin', 'Plum sauce'];
  const sweeteners = getRandomElements(sweetPool, Math.min(sweetCount, sweetPool.length)).map(name => ({
    name,
    amount: getIngredientAmount(name)
  }));
  
  // Flavor enhancers based on complexity
  const complexityCount = selectedComplexity === 'Simple' ? 1 : 
                          selectedComplexity === 'Balanced' ? 2 :
                          selectedComplexity === 'Complex' ? 3 : 4;
  
  const complexityPool = [
    'Fermented black beans', 'XO sauce', 'Oyster sauce', 'Fish sauce', 
    'Shaoxing wine', 'Star anise', 'Cilantro, chopped', 'Lime juice', 
    'Yuzu juice', 'White pepper', 'Black vinegar', 'Hoisin sauce'
  ];
  
  const enhancers = getRandomElements(complexityPool, complexityCount).map(name => ({
    name,
    amount: getIngredientAmount(name)
  }));
  
  // Texture elements based on selected texture and thickness
  let textureIngredients = [];
  
  if (selectedTexture === 'Smooth') {
    // No additional texture elements
  } else if (selectedTexture === 'Chunky') {
    textureIngredients = getRandomElements(['Green onion, chopped', 'Sesame seeds', 'Crushed peanuts'], 1).map(name => ({
      name,
      amount: getIngredientAmount(name)
    }));
  } else if (selectedTexture === 'Creamy') {
    textureIngredients = getRandomElements(['Tahini paste', 'Peanut butter', 'Coconut milk'], 1).map(name => ({
      name,
      amount: getIngredientAmount(name)
    }));
  } else if (selectedTexture === 'Coarse') {
    textureIngredients = getRandomElements(['Crushed peanuts', 'Sesame seeds'], 1).map(name => ({
      name,
      amount: getIngredientAmount(name)
    }));
  } else if (selectedTexture === 'Silky') {
    // No additional texture elements, but might add MSG or other flavor enhancers
    if (Math.random() > 0.5) {
      textureIngredients = [{ name: 'MSG', amount: getIngredientAmount('MSG') }];
    }
  }
  
  // Combine all ingredients
  let allIngredients = [
    ...baseIngredients,
    ...spicyIngredients,
    ...sweeteners,
    ...enhancers,
    ...textureIngredients
  ];
  
  // Remove duplicates if any
  const uniqueIngredients = [];
  const ingredientNames = new Set();
  
  allIngredients.forEach(ingredient => {
    if (!ingredientNames.has(ingredient.name)) {
      ingredientNames.add(ingredient.name);
      uniqueIngredients.push(ingredient);
    }
  });
  
  // Generate instruction steps
  const instructions = generateInstructions(uniqueIngredients);
  
  // Generate description using the enhanced flavor profile
  const description = generateDescription(flavorProfile);
  
  // Select 3 tracks as "influential" - prefer tracks with energy levels closest to the average
  const tracksByEnergySimilarity = [...tracks].sort((a, b) => {
    const aEnergyDiff = Math.abs((a.audio_features?.energy || 0.5) - avgEnergy);
    const bEnergyDiff = Math.abs((b.audio_features?.energy || 0.5) - avgEnergy);
    return aEnergyDiff - bEnergyDiff;
  });
  
  const influentialTracks = tracksByEnergySimilarity.slice(0, 3);
  
  return {
    name,
    description,
    imageUrl: "",
    tags: [flavorProfile.topGenre, flavorProfile.energyLevel, flavorProfile.mood, flavorProfile.spiceLevel],
    flavorProfile,
    ingredients: uniqueIngredients,
    instructions,
    influentialTracks
  };
}

function getIngredientAmount(ingredient) {
  // Generate realistic amounts for each ingredient
  const units = {
    // Base ingredients
    'Soy sauce': ['1 tbsp', '2 tbsp', '3 tbsp'],
    'Chili oil': ['1 tsp', '2 tsp', '1 tbsp'],
    'Sesame oil': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Garlic, minced': ['1 clove', '2 cloves', '3 cloves'],
    'Ginger, grated': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'Green onion, chopped': ['1 stalk', '2 stalks'],
    'Cilantro, chopped': ['1 tbsp', '2 tbsp'],
    'Vinegar': ['1 tsp', '2 tsp', '1 tbsp'],
    'Honey': ['1/2 tbsp', '1 tbsp', '2 tbsp'],
    'Brown sugar': ['1/2 tbsp', '1 tbsp', '2 tbsp'],
    'Hoisin sauce': ['1/2 tbsp', '1 tbsp', '2 tbsp'],
    'Oyster sauce': ['1/2 tbsp', '1 tbsp', '2 tbsp'],
    
    // Spicy ingredients
    'Doubanjiang (spicy bean paste)': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Fermented black beans': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Sichuan peppercorns': ['1/4 tsp', '1/2 tsp', '1 tsp'],
    'Star anise': ['1 piece'],
    'Cinnamon stick': ['1 small piece'],
    'Dried chili peppers': ['1', '2', '3'],
    'Dried red chilies': ['1', '2', '3'],
    'Thai bird eye chilies': ['1', '2', '3'],
    'Habanero peppers': ['1/4', '1/2', 'just a tiny piece'],
    'Ghost pepper (extremely hot)': ['a small sliver', 'a tiny piece'],
    
    // Additional ingredients
    'Shaoxing wine': ['1 tsp', '2 tsp', '1 tbsp'],
    'Mirin': ['1 tsp', '2 tsp', '1 tbsp'],
    'Lime juice': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Fish sauce': ['1/4 tsp', '1/2 tsp', '1 tsp'],
    'MSG': ['a pinch', '1/4 tsp'],
    'Sesame seeds': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Tahini paste': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'Peanut butter': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'Crushed peanuts': ['1 tsp', '1 tbsp', '2 tbsp'],
    'White pepper': ['a pinch', '1/4 tsp', '1/2 tsp'],
    'Black vinegar': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'Plum sauce': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'XO sauce': ['1/4 tsp', '1/2 tsp', '1 tsp'],
    'Sriracha sauce': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'Yuzu juice': ['1/4 tsp', '1/2 tsp', '1 tsp'],
    'Gochujang (Korean chili paste)': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Lemongrass, minced': ['1/2 tsp', '1 tsp', '1 tbsp'],
    'Kaffir lime leaves': ['1 leaf', '2 leaves'],
    'Coconut milk': ['1 tsp', '1 tbsp', '2 tbsp'],
    'Orange zest': ['1/4 tsp', '1/2 tsp']
  };
  
  // If we have a specific unit for this ingredient, use it, otherwise use a generic amount
  return units[ingredient] ? getRandomElement(units[ingredient]) : '1 tbsp';
}

function generateInstructions(ingredients) {
  const baseInstructions = [
    { step: 1, text: `Mix ${ingredients[0].amount} ${ingredients[0].name.toLowerCase()} with ${ingredients[1].amount} ${ingredients[1].name.toLowerCase()} in a small bowl.` }
  ];
  
  // Add steps for each remaining ingredient
  for (let i = 2; i < ingredients.length; i++) {
    baseInstructions.push({
      step: i,
      text: `Add ${ingredients[i].amount} ${ingredients[i].name.toLowerCase()} and stir well.`
    });
  }
  
  // Add final steps
  baseInstructions.push({ 
    step: ingredients.length, 
    text: "Let the sauce sit for 5 minutes to allow flavors to meld." 
  });
  
  baseInstructions.push({ 
    step: ingredients.length + 1, 
    text: "Taste and adjust seasoning if needed before serving." 
  });
  
  return baseInstructions;
}

function generateDescription(flavorProfile) {
  // Base descriptions by genre
  const descriptions = {
    'Pop': 'A crowd-pleasing blend that balances flavors perfectly',
    'Rock': 'A bold and robust sauce with depth and character',
    'Hip Hop': 'A fresh and innovative mix with unexpected combinations',
    'Electronic': 'A vibrant and pulsating blend of flavors',
    'R&B': 'A smooth and soulful sauce with rich undertones',
    'Indie': 'A unique and creative blend that stands apart',
    'Dance': 'An energetic sauce that excites the palate',
    'Folk': 'A traditional blend with rustic, authentic flavors',
    'Jazz': 'A sophisticated, complex sauce with improvised notes',
    'Classical': 'A timeless, refined sauce with perfect structure',
    'Metal': 'An intense, powerful sauce that commands attention',
    'Country': 'A down-to-earth sauce with familiar, comforting notes',
    'Blues': 'A soulful sauce with deep, resonant flavors',
    'Reggae': 'A relaxed, sunny sauce with bright accents',
    'Funk': 'A groovy, bold sauce with unexpected twists',
    'Soul': 'A heartfelt sauce with deep, emotional flavors',
    'Disco': 'A lively, upbeat sauce that brings joy to the palate',
    'Punk': 'A rebellious, intense sauce that breaks all the rules',
    'Alternative': 'An unconventional sauce for the adventurous palate',
    'K-Pop': 'A colorful, vibrant sauce with perfectly balanced sweetness and heat'
  };
  
  // Energy level descriptors
  const energyDescriptions = {
    'Low': 'subtle',
    'Medium': 'balanced',
    'High': 'vibrant',
    'Intense': 'powerful'
  };
  
  // Mood descriptors
  const moodDescriptions = {
    'Melancholic': 'thoughtful',
    'Chill': 'relaxing',
    'Upbeat': 'cheerful',
    'Energetic': 'invigorating',
    'Dreamy': 'enchanting',
    'Aggressive': 'bold'
  };
  
  // Spice level descriptors
  const spiceDescriptions = {
    'Mild': 'gentle warmth',
    'Medium': 'moderate heat',
    'Spicy': 'notable spiciness',
    'Extra Spicy': 'intense heat',
    'Fiery': 'searing spiciness'
  };
  
  // Texture descriptors
  const textureDescriptions = {
    'Smooth': 'velvety',
    'Chunky': 'textured',
    'Creamy': 'rich',
    'Coarse': 'rustic',
    'Silky': 'refined'
  };
  
  // Thickness descriptors
  const thicknessDescriptions = {
    'Thin': 'light',
    'Medium': 'medium-bodied',
    'Thick': 'hearty',
    'Very Thick': 'substantial'
  };
  
  // Tempo descriptors
  const tempoDescriptions = {
    'Slow': 'lingering',
    'Medium': 'steady',
    'Upbeat': 'lively',
    'Fast': 'quick-hitting',
    'Very Fast': 'rapid-fire'
  };
  
  // Complexity descriptors
  const complexityDescriptions = {
    'Simple': 'straightforward',
    'Balanced': 'harmonious',
    'Complex': 'multifaceted',
    'Intricate': 'elaborate'
  };
  
  // Generate base description
  const baseDescription = descriptions[flavorProfile.topGenre] || 'A uniquely crafted sauce';
  
  // Add tempo and thickness if available
  let enhancedDescription = `${baseDescription} with ${energyDescriptions[flavorProfile.energyLevel]} intensity and ${moodDescriptions[flavorProfile.mood]} character`;
  
  // Add additional attributes if they exist
  if (flavorProfile.spiceLevel) {
    enhancedDescription += `, featuring a ${spiceDescriptions[flavorProfile.spiceLevel]}`;
  }
  
  if (flavorProfile.texture) {
    enhancedDescription += ` and ${textureDescriptions[flavorProfile.texture]} texture`;
  }
  
  if (flavorProfile.thickness) {
    enhancedDescription += `. This ${thicknessDescriptions[flavorProfile.thickness]} sauce`;
  } else {
    enhancedDescription += '. This sauce';
  }
  
  if (flavorProfile.tempo) {
    enhancedDescription += ` delivers ${tempoDescriptions[flavorProfile.tempo]} notes`;
  } else {
    enhancedDescription += ' delivers notes';
  }
  
  if (flavorProfile.complexity) {
    enhancedDescription += ` in a ${complexityDescriptions[flavorProfile.complexity]} arrangement`;
  }
  
  // Finish the description
  enhancedDescription += ', perfect for complementing hotpot dishes.';
  
  return enhancedDescription;
}

// Show the recipe on the page
function displayRecipe(recipe) {
  recipeName.textContent = recipe.name;
  recipeDescription.textContent = recipe.description;
  
  // Update basic flavor profile
  topGenre.innerHTML = `<span class="w-28 text-gray-400">Top Genre:</span> <span>${recipe.flavorProfile.topGenre}</span>`;
  energyLevel.innerHTML = `<span class="w-28 text-gray-400">Energy:</span> <span>${recipe.flavorProfile.energyLevel}</span>`;
  mood.innerHTML = `<span class="w-28 text-gray-400">Mood:</span> <span>${recipe.flavorProfile.mood}</span>`;
  
  // Add additional metrics if they exist in this flavor profile
  if (recipe.flavorProfile.spiceLevel || recipe.flavorProfile.texture || 
      recipe.flavorProfile.tempo || recipe.flavorProfile.complexity) {
    
    // Create extended flavor profile container
    const extendedMetrics = document.createElement('div');
    extendedMetrics.className = 'mt-4';
    
    // Add a heading for extended metrics
    const extendedHeading = document.createElement('h4');
    extendedHeading.className = 'text-md font-semibold text-blue-400 mb-2';
    extendedHeading.textContent = 'Extended Flavor Profile';
    extendedMetrics.appendChild(extendedHeading);
    
    // Create list for extended metrics
    const extendedList = document.createElement('ul');
    extendedList.className = 'text-left space-y-2';
    
    // Add each extended metric if it exists
    if (recipe.flavorProfile.spiceLevel) {
      const li = document.createElement('li');
      li.className = 'flex items-center';
      li.innerHTML = `<span class="w-28 text-gray-400">Spice Level:</span> <span>${recipe.flavorProfile.spiceLevel}</span>`;
      extendedList.appendChild(li);
    }
    
    if (recipe.flavorProfile.texture) {
      const li = document.createElement('li');
      li.className = 'flex items-center';
      li.innerHTML = `<span class="w-28 text-gray-400">Texture:</span> <span>${recipe.flavorProfile.texture}</span>`;
      extendedList.appendChild(li);
    }
    
    if (recipe.flavorProfile.thickness) {
      const li = document.createElement('li');
      li.className = 'flex items-center';
      li.innerHTML = `<span class="w-28 text-gray-400">Thickness:</span> <span>${recipe.flavorProfile.thickness}</span>`;
      extendedList.appendChild(li);
    }
    
    if (recipe.flavorProfile.tempo) {
      const li = document.createElement('li');
      li.className = 'flex items-center';
      li.innerHTML = `<span class="w-28 text-gray-400">Tempo:</span> <span>${recipe.flavorProfile.tempo}</span>`;
      extendedList.appendChild(li);
    }
    
    if (recipe.flavorProfile.complexity) {
      const li = document.createElement('li');
      li.className = 'flex items-center';
      li.innerHTML = `<span class="w-28 text-gray-400">Complexity:</span> <span>${recipe.flavorProfile.complexity}</span>`;
      extendedList.appendChild(li);
    }
    
    // Add the list to the container
    extendedMetrics.appendChild(extendedList);
    
    // Insert the extended metrics after the basic flavor profile
    mood.parentNode.parentNode.appendChild(extendedMetrics);
  }
  
  // Update ingredients list
  ingredientsList.innerHTML = '';
  recipe.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = `${ingredient.amount} ${ingredient.name}`;
    ingredientsList.appendChild(li);
  });
  
  // Update instructions list
  instructionsList.innerHTML = '';
  recipe.instructions.forEach(instruction => {
    const li = document.createElement('li');
    li.textContent = instruction.text;
    instructionsList.appendChild(li);
  });
  
  // Update tracks list
  tracksList.innerHTML = '';
  recipe.influentialTracks.forEach(track => {
    const li = document.createElement('li');
    li.innerHTML = `"${track.name}" by ${track.artists[0].name}`;
    if (track.audio_features) {
      // Add audio feature details in smaller text
      const audioDetails = document.createElement('div');
      audioDetails.className = 'text-xs text-gray-400 mt-1';
      
      // Format the audio features we're using
      const tempo = Math.round(track.audio_features.tempo);
      const energy = Math.round(track.audio_features.energy * 100);
      const danceability = Math.round(track.audio_features.danceability * 100);
      const valence = Math.round(track.audio_features.valence * 100); // happiness
      
      audioDetails.textContent = `Tempo: ${tempo} BPM • Energy: ${energy}% • Dance: ${danceability}% • Mood: ${valence}%`;
      li.appendChild(audioDetails);
    }
    tracksList.appendChild(li);
  });
}

// Save the current recipe to localStorage
function saveRecipe(recipe) {
  const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
  savedRecipes.push(recipe);
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  showToast('Recipe saved successfully!');
}

// Share functionality (simulated)
function shareRecipe(recipe) {
  // In a real app, this would open a share dialog or copy to clipboard
  // For this demo, we'll just show a toast
  showToast('Recipe link copied to clipboard!');
}

// Main app logic
let currentRecipe = null;

// Simulated Spotify auth
spotifyLoginBtn.addEventListener('click', () => {
  // Hide login, show loading
  loginContainer.classList.add('hidden');
  loadingContainer.classList.remove('hidden');
  
  // Simulate API delay
  setTimeout(() => {
    // Generate recipe based on sample tracks
    currentRecipe = generateRecipe(sampleTracks);
    
    // Hide loading, show results
    loadingContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    // Display the recipe
    displayRecipe(currentRecipe);
  }, 1500);
});

// Button event listeners
saveBtn.addEventListener('click', () => {
  if (currentRecipe) {
    saveRecipe(currentRecipe);
  }
});

shareBtn.addEventListener('click', () => {
  if (currentRecipe) {
    shareRecipe(currentRecipe);
  }
});

newRecipeBtn.addEventListener('click', () => {
  // Show loading
  resultContainer.classList.add('hidden');
  loadingContainer.classList.remove('hidden');
  
  // Generate a new recipe after a short delay
  setTimeout(() => {
    currentRecipe = generateRecipe(sampleTracks);
    
    // Hide loading, show results
    loadingContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    // Display the new recipe
    displayRecipe(currentRecipe);
  }, 1000);
});
