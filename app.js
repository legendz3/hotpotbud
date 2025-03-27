// Simulated data for static recipe generation
const sauceIngredients = [
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
  'Doubanjiang (spicy bean paste)',
  'Fermented black beans',
  'Sichuan peppercorns',
  'Star anise',
  'Cinnamon stick',
  'Dried chili peppers',
  'Shaoxing wine',
  'Mirin',
  'Lime juice',
  'Fish sauce',
  'MSG',
  'Sesame seeds',
  'White pepper'
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
  'Classical'
];

// Energy levels and moods for flavor profiles
const energyLevels = ['Low', 'Medium', 'High', 'Intense'];
const moods = ['Melancholic', 'Chill', 'Upbeat', 'Energetic', 'Dreamy', 'Aggressive'];

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

// Generate a random recipe based on tracks
function generateRecipe(tracks) {
  // Generate a random recipe name
  const name = `${getRandomElement(recipeNamePrefixes)} ${getRandomElement(recipeNameSuffixes)} Hotpot Sauce`;
  
  // Random flavor profile
  const flavorProfile = {
    topGenre: getRandomElement(musicGenres),
    energyLevel: getRandomElement(energyLevels),
    mood: getRandomElement(moods)
  };
  
  // Random ingredients (5-8 ingredients)
  const ingredientCount = Math.floor(Math.random() * 4) + 5;
  const ingredients = getRandomElements(sauceIngredients, ingredientCount).map(name => {
    const amount = getIngredientAmount(name);
    return { name, amount };
  });
  
  // Generate instruction steps
  const instructions = generateInstructions(ingredients);
  
  // Generate description
  const description = generateDescription(flavorProfile);
  
  // Randomly select 3 tracks as "influential"
  const influentialTracks = getRandomElements(tracks, 3);
  
  return {
    name,
    description,
    imageUrl: "",
    tags: [flavorProfile.topGenre, flavorProfile.energyLevel, flavorProfile.mood],
    flavorProfile,
    ingredients,
    instructions,
    influentialTracks
  };
}

function getIngredientAmount(ingredient) {
  // Generate realistic amounts for each ingredient
  const units = {
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
    'Doubanjiang (spicy bean paste)': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Fermented black beans': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Sichuan peppercorns': ['1/4 tsp', '1/2 tsp', '1 tsp'],
    'Star anise': ['1 piece'],
    'Cinnamon stick': ['1 small piece'],
    'Dried chili peppers': ['1', '2', '3'],
    'Shaoxing wine': ['1 tsp', '2 tsp', '1 tbsp'],
    'Mirin': ['1 tsp', '2 tsp', '1 tbsp'],
    'Lime juice': ['1/2 tsp', '1 tsp', '2 tsp'],
    'Fish sauce': ['1/4 tsp', '1/2 tsp', '1 tsp'],
    'MSG': ['a pinch', '1/4 tsp'],
    'Sesame seeds': ['1/2 tsp', '1 tsp', '2 tsp'],
    'White pepper': ['a pinch', '1/4 tsp', '1/2 tsp']
  };
  
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
    'Classical': 'A timeless, refined sauce with perfect structure'
  };
  
  const energyDescriptions = {
    'Low': 'subtle',
    'Medium': 'balanced',
    'High': 'vibrant',
    'Intense': 'powerful'
  };
  
  const moodDescriptions = {
    'Melancholic': 'thoughtful',
    'Chill': 'relaxing',
    'Upbeat': 'cheerful',
    'Energetic': 'invigorating',
    'Dreamy': 'enchanting',
    'Aggressive': 'bold'
  };
  
  const baseDescription = descriptions[flavorProfile.topGenre] || 'A uniquely crafted sauce';
  return `${baseDescription} with ${energyDescriptions[flavorProfile.energyLevel]} intensity and ${moodDescriptions[flavorProfile.mood]} character, perfect for complementing hotpot dishes.`;
}

// Show the recipe on the page
function displayRecipe(recipe) {
  recipeName.textContent = recipe.name;
  recipeDescription.textContent = recipe.description;
  
  // Update flavor profile
  topGenre.innerHTML = `<span class="w-28 text-gray-400">Top Genre:</span> <span>${recipe.flavorProfile.topGenre}</span>`;
  energyLevel.innerHTML = `<span class="w-28 text-gray-400">Energy:</span> <span>${recipe.flavorProfile.energyLevel}</span>`;
  mood.innerHTML = `<span class="w-28 text-gray-400">Mood:</span> <span>${recipe.flavorProfile.mood}</span>`;
  
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
    li.textContent = `"${track.name}" by ${track.artists[0].name}`;
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