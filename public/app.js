const TRIP_ID = 'take-5-cabin-2026';
const LOCAL_KEY = `planner:${TRIP_ID}`;
const SYNC_POLL_MS = 4000;
const pageIds = ['dashboard', 'weather', 'norris-faq', 'flat-hollow-faq', 'daily', 'meals', 'shopping', 'wheel', 'packing', 'budget'];

const categories = [
  'Produce', 'Dairy', 'Meat', 'Frozen', 'Dry Goods', 'Snacks', 'Condiments',
  'Bread', 'Breakfast', 'Drinks', 'Alcohol', 'Cleaning', 'Paper Products',
  'Boat', 'Cabin', 'Fishing', 'Personal', 'Miscellaneous'
];

const defaultDinnerIdeas = ['Steaks', 'Tacos', 'Pulled pork sandwiches', 'Grilled chicken', 'Pizza night', 'Fajitas', 'Restaurant', 'Kabobs', 'Smoked ribs'];

const wheelOptions = [
  { category: 'Lake', title: 'Best Splash Contest', detail: 'Everyone gets one jump, cannonball, or float pose. Loudest dock applause wins.', icon: 'waves' },
  { category: 'Lake', title: 'Sunset Cove Cruise', detail: 'Pick one quiet cove and make it the official sunset lap for the day.', icon: 'ship-wheel' },
  { category: 'Lake', title: 'Float DJ Takeover', detail: 'Winner gets three lake songs in a row while everyone is floating.', icon: 'music' },
  { category: 'Game Night', title: 'Cabin Card Table', detail: 'Play cards or dice after dinner. Winner gets first pick from the snack stash.', icon: 'dice-5' },
  { category: 'Game Night', title: 'Minute-to-Win-It Round', detail: 'Invent a 60-second cabin challenge using cups, napkins, or whatever is on hand.', icon: 'timer' },
  { category: 'Game Night', title: 'Mystery Prize Night', detail: 'Somebody brings one tiny prize, then the group plays for it after dinner.', icon: 'gift' },
  { category: 'Bring', title: 'Bring Glow Sticks', detail: 'Pack glow sticks or cheap light-up bracelets for dock photos after dark.', icon: 'sparkles' },
  { category: 'Bring', title: 'Bring a Mystery Snack', detail: 'Bring one snack nobody else knows about. Everyone gives it a lake rating.', icon: 'shopping-bag' },
  { category: 'Bring', title: 'Bring a Floating Trophy', detail: 'Bring something silly that can become the weekly champion trophy.', icon: 'trophy' },
  { category: 'Marina', title: 'Twisted Pickle Pick', detail: 'At the marina, order one thing the table has not tried yet and pass bites around.', icon: 'utensils' },
  { category: 'Marina', title: 'Marina Photo Hunt', detail: 'Get one good group photo with boats, dock boards, or the marina sign in the background.', icon: 'camera' },
  { category: 'Food', title: 'Best Dip Challenge', detail: 'Make or buy a dip. The group votes before dinner and the winner gets bragging rights.', icon: 'chef-hat' },
  { category: 'Food', title: 'Snack Board Draft', detail: 'Each person adds one thing to a shared snack board. No duplicate picks.', icon: 'sandwich' },
  { category: 'Beer', title: 'Beer or Soda Blind Taste', detail: '21+ can blind taste two beers; everyone else uses soda. Guess before the reveal.', icon: 'beer' },
  { category: 'Beer', title: 'Lake Toast Round', detail: 'Everyone gives a quick toast to the best moment so far. Beer, soda, or water all count.', icon: 'glass-water' },
  { category: 'Cocktail', title: 'Cabin Drink Name', detail: 'Make a 21+ cocktail or a mocktail and give it a Take-5 Cabin name.', icon: 'martini' },
  { category: 'Cocktail', title: 'Mocktail Backup Round', detail: 'Someone has to make the best no-alcohol lake drink. Garnish counts.', icon: 'cup-soda' },
  { category: 'Dare', title: 'Weather Reporter Bit', detail: 'Record a 20-second dramatic lake weather report from the deck.', icon: 'cloud-sun' },
  { category: 'Dare', title: 'Boat Name Pitch', detail: 'Everyone pitches a ridiculous boat name. Best one wins the round.', icon: 'anchor' }
];

const wheelColors = ['#176178', '#f2b84b', '#1e5a42', '#d8644d', '#103d56', '#9a683f'];

const mealGroceries = {
  Eggs: [['Breakfast', 'Eggs', '2 dozen'], ['Dairy', 'Butter', '1 lb']],
  Bacon: [['Meat', 'Bacon', '3 packs']],
  Sausage: [['Meat', 'Breakfast sausage', '3 packs']],
  Biscuits: [['Breakfast', 'Biscuits', '3 cans'], ['Condiments', 'Jam', '1 jar']],
  Pancakes: [['Breakfast', 'Pancake mix', '1 box'], ['Breakfast', 'Syrup', '1 bottle']],
  'French toast': [['Bread', 'Texas toast', '2 loaves'], ['Dairy', 'Milk', '1 gallon'], ['Breakfast', 'Cinnamon', '1 jar']],
  'Breakfast burritos': [['Breakfast', 'Tortillas', '2 packs'], ['Dairy', 'Shredded cheese', '2 bags'], ['Produce', 'Peppers', '6']],
  Fruit: [['Produce', 'Mixed fruit', '1 large tray']],
  Sandwiches: [['Bread', 'Sandwich bread', '3 loaves'], ['Meat', 'Deli meat', '4 lb'], ['Dairy', 'Sliced cheese', '2 packs'], ['Condiments', 'Mayo', '1 jar']],
  'Hot dogs': [['Meat', 'Hot dogs', '36'], ['Bread', 'Hot dog buns', '36'], ['Condiments', 'Ketchup', '1 bottle'], ['Condiments', 'Mustard', '1 bottle']],
  Burgers: [['Meat', 'Burger patties', '36'], ['Bread', 'Burger buns', '36'], ['Dairy', 'Cheese slices', '2 packs'], ['Produce', 'Lettuce and tomato', '1 set']],
  'Chicken wraps': [['Meat', 'Grilled chicken', '5 lb'], ['Bread', 'Wrap tortillas', '3 packs'], ['Produce', 'Romaine', '2 heads']],
  Quesadillas: [['Dairy', 'Shredded cheese', '3 bags'], ['Bread', 'Tortillas', '3 packs'], ['Meat', 'Chicken', '4 lb']],
  Leftovers: [['Miscellaneous', 'Storage containers', '1 pack']],
  Steaks: [['Meat', 'Steaks', '12'], ['Produce', 'Baked potatoes', '12'], ['Produce', 'Salad kit', '3']],
  'Grilled chicken': [['Meat', 'Chicken breasts', '8 lb'], ['Condiments', 'Marinade', '2 bottles']],
  'Pulled pork sandwiches': [['Meat', 'Pulled pork', '8 lb'], ['Bread', 'Slider buns', '3 packs'], ['Condiments', 'BBQ sauce', '2 bottles']],
  Tacos: [['Meat', 'Ground beef', '6 lb'], ['Bread', 'Taco shells', '4 boxes'], ['Dairy', 'Shredded cheese', '3 bags'], ['Produce', 'Lettuce and tomatoes', '1 set']],
  Fajitas: [['Meat', 'Fajita meat', '7 lb'], ['Produce', 'Peppers and onions', '1 tray'], ['Bread', 'Tortillas', '3 packs']],
  Spaghetti: [['Dry Goods', 'Pasta', '4 boxes'], ['Dry Goods', 'Pasta sauce', '4 jars'], ['Meat', 'Italian sausage', '4 lb']],
  'Pizza night': [['Frozen', 'Frozen pizzas', '8']],
  Kabobs: [['Meat', 'Kabob meat', '7 lb'], ['Produce', 'Kabob vegetables', '1 tray'], ['Miscellaneous', 'Skewers', '1 pack']],
  'Grilled shrimp': [['Meat', 'Shrimp', '6 lb'], ['Dairy', 'Butter', '1 lb'], ['Produce', 'Lemons', '8']],
  'Smoked ribs': [['Meat', 'Ribs', '8 racks'], ['Condiments', 'BBQ rub', '1 jar'], ['Condiments', 'BBQ sauce', '2 bottles']],
  'Burgers and hot dogs': [['Meat', 'Burger patties', '24'], ['Meat', 'Hot dogs', '24'], ['Bread', 'Burger buns', '24'], ['Bread', 'Hot dog buns', '24'], ['Dairy', 'Cheese slices', '2 packs'], ['Produce', 'Lettuce and tomatoes', '1 set']],
  'Chips and dip': [['Snacks', 'Chips', '8 bags'], ['Dairy', 'Dip', '4 tubs']],
  'Trail mix': [['Snacks', 'Trail mix', '2 large bags']],
  'Veggie tray': [['Produce', 'Veggie tray', '2 large']],
  Pretzels: [['Snacks', 'Pretzels', '2 bags']],
  Jerky: [['Snacks', 'Jerky', '2 bags']],
  Smores: [['Snacks', 'Graham crackers', '3 boxes'], ['Snacks', 'Marshmallows', '3 bags'], ['Snacks', 'Chocolate bars', '24']],
  Brownies: [['Dry Goods', 'Brownie mix', '3 boxes']],
  'Ice cream': [['Frozen', 'Ice cream', '4 tubs']],
  Cookies: [['Snacks', 'Cookies', '4 packs']],
  'Banana pudding': [['Produce', 'Bananas', '12'], ['Dairy', 'Milk', '1 gallon'], ['Dry Goods', 'Pudding mix', '4 boxes'], ['Snacks', 'Vanilla wafers', '2 boxes']]
};

const masterGrocerySeeds = [
  ['Breakfast', 'Eggs', '4 dozen'],
  ['Meat', 'Bacon', '4 packs'],
  ['Meat', 'Breakfast sausage', '3 packs'],
  ['Breakfast', 'Pancake mix', '2 boxes'],
  ['Breakfast', 'Syrup', '2 bottles'],
  ['Bread', 'Biscuits', '4 cans'],
  ['Bread', 'Bagels', '2 packs'],
  ['Dairy', 'Cream cheese', '2 tubs'],
  ['Dairy', 'Butter', '2 lb'],
  ['Dairy', 'Milk', '3 gallons'],
  ['Dairy', 'Shredded cheese', '4 bags'],
  ['Dairy', 'Cheese slices', '3 packs'],
  ['Dairy', 'Sour cream', '2 tubs'],
  ['Produce', 'Bananas', '18'],
  ['Produce', 'Apples', '18'],
  ['Produce', 'Watermelon', '2'],
  ['Produce', 'Grapes', '4 lb'],
  ['Produce', 'Lemons', '10'],
  ['Produce', 'Limes', '12'],
  ['Produce', 'Lettuce', '3 heads'],
  ['Produce', 'Tomatoes', '10'],
  ['Produce', 'Onions', '8'],
  ['Produce', 'Bell peppers', '10'],
  ['Produce', 'Potatoes', '15 lb'],
  ['Produce', 'Corn on the cob', '24 ears'],
  ['Produce', 'Salad kits', '5'],
  ['Produce', 'Veggie tray', '2 large'],
  ['Meat', 'Deli turkey and ham', '5 lb'],
  ['Meat', 'Chicken breasts', '8 lb'],
  ['Meat', 'Ground beef', '8 lb'],
  ['Meat', 'Steaks', '12'],
  ['Meat', 'Pulled pork', '8 lb'],
  ['Meat', 'Shrimp', '6 lb'],
  ['Meat', 'Ribs', '8 racks'],
  ['Meat', 'Burger patties', '24'],
  ['Meat', 'Hot dogs', '24'],
  ['Bread', 'Sandwich bread', '4 loaves'],
  ['Bread', 'Burger buns', '24'],
  ['Bread', 'Hot dog buns', '24'],
  ['Bread', 'Slider buns', '3 packs'],
  ['Bread', 'Tortillas', '5 packs'],
  ['Bread', 'Taco shells', '4 boxes'],
  ['Dry Goods', 'Pasta', '5 boxes'],
  ['Dry Goods', 'Pasta sauce', '5 jars'],
  ['Dry Goods', 'Rice', '1 large bag'],
  ['Dry Goods', 'Mac and cheese', '4 boxes'],
  ['Dry Goods', 'Pudding mix', '4 boxes'],
  ['Dry Goods', 'Brownie mix', '3 boxes'],
  ['Frozen', 'Frozen pizzas', '8'],
  ['Frozen', 'Ice cream', '4 tubs'],
  ['Snacks', 'Chips', '10 bags'],
  ['Snacks', 'Dip', '5 tubs'],
  ['Snacks', 'Pretzels', '3 bags'],
  ['Snacks', 'Trail mix', '3 large bags'],
  ['Snacks', 'Beef jerky', '3 bags'],
  ['Snacks', 'Crackers', '4 boxes'],
  ['Snacks', 'Cookies', '5 packs'],
  ['Snacks', 'Granola bars', '3 boxes'],
  ['Snacks', 'Graham crackers', '4 boxes'],
  ['Snacks', 'Marshmallows', '4 bags'],
  ['Snacks', 'Chocolate bars', '30'],
  ['Snacks', 'Vanilla wafers', '2 boxes'],
  ['Condiments', 'Ketchup', '2 bottles'],
  ['Condiments', 'Mustard', '2 bottles'],
  ['Condiments', 'Mayo', '2 jars'],
  ['Condiments', 'BBQ sauce', '4 bottles'],
  ['Condiments', 'Marinade', '3 bottles'],
  ['Condiments', 'Salsa', '3 jars'],
  ['Condiments', 'Hot sauce', '1 bottle'],
  ['Condiments', 'Ranch', '2 bottles'],
  ['Condiments', 'Italian dressing', '2 bottles'],
  ['Condiments', 'Taco seasoning', '8 packets'],
  ['Condiments', 'BBQ rub', '1 jar'],
  ['Condiments', 'Salt', '1'],
  ['Condiments', 'Pepper', '1'],
  ['Condiments', 'Seasonings', '1 set'],
  ['Condiments', 'Cooking oil', '1 bottle'],
  ['Condiments', 'Olive oil', '1 bottle'],
  ['Condiments', 'Nonstick spray', '2 cans'],
  ['Drinks', 'Bottled water', '6 cases'],
  ['Drinks', 'Sports drinks', '4 cases'],
  ['Drinks', 'Soft drinks', '5 cases'],
  ['Drinks', 'Coffee', '2 bags'],
  ['Drinks', 'Coffee creamer', '3 bottles'],
  ['Drinks', 'Juice', '3 bottles'],
  ['Alcohol', 'Beer', 'as needed'],
  ['Alcohol', 'Liquor', 'as needed'],
  ['Alcohol', 'Wine', 'as needed'],
  ['Alcohol', 'Mixers', 'as needed'],
  ['Alcohol', 'Limes', '12'],
  ['Alcohol', 'Lemons', '10'],
  ['Alcohol', 'Mint', '2 packs'],
  ['Alcohol', 'Simple syrup', '1 bottle'],
  ['Cabin', 'Ice', '12 bags'],
  ['Paper Products', 'Paper plates', '2 large packs'],
  ['Paper Products', 'Plastic utensils', '2 large packs'],
  ['Paper Products', 'Napkins', '2 packs'],
  ['Paper Products', 'Solo cups', '2 large packs'],
  ['Paper Products', 'Paper towels', '3 large packs'],
  ['Paper Products', 'Toilet paper', '2 large packs'],
  ['Cleaning', 'Trash bags', '2 boxes'],
  ['Cleaning', 'Dish soap', '1 bottle'],
  ['Cleaning', 'Dishwasher pods', '1 tub'],
  ['Cleaning', 'Laundry detergent', '1 bottle'],
  ['Cleaning', 'Cleaning spray', '1 bottle'],
  ['Cleaning', 'Sponges', '1 pack'],
  ['Miscellaneous', 'Aluminum foil', '2 rolls'],
  ['Miscellaneous', 'Plastic wrap', '1 roll'],
  ['Miscellaneous', 'Ziplock bags', '2 boxes'],
  ['Miscellaneous', 'Storage containers', '1 pack'],
  ['Miscellaneous', 'Charcoal', '2 bags'],
  ['Miscellaneous', 'Propane', '1 spare tank'],
  ['Miscellaneous', 'Fire starters', '1 box'],
  ['Miscellaneous', 'Lighter', '2'],
  ['Miscellaneous', 'Matches', '1 box']
];

const checklistSeeds = {
  'Before Leaving Home': ['Buy groceries before arriving', 'Confirm cabin access', 'Pack chargers', 'Freeze ice packs', 'Check weather', 'Share planner link with family'],
  Boat: ['Life jackets', 'Throw cushion', 'Tow rope', 'Tube', 'Pump', 'Air compressor', 'Anchor', 'Extra anchor rope', 'Dock lines', 'Boat bumpers', 'Boat towels', 'Dry bags', 'Phone dry bags', 'Sunscreen', 'Bug spray', 'First aid kit', 'Boat registration', 'Insurance card', 'Tool kit', 'Jump pack', 'Battery charger', 'Flashlights', 'Fuel additive', 'Boat keys', 'Boat charger', 'Spare prop hardware'],
  Cabin: ['Trash bags', 'Dish soap', 'Laundry detergent', 'Toilet paper', 'Paper towels', 'Hand soap', 'Cleaning spray', 'Sponges', 'Dishwasher pods', 'Aluminum foil', 'Plastic wrap', 'Ziplock bags', 'Coffee filters', 'Charcoal', 'Fire starters', 'Lighter', 'Matches', 'Propane', 'Seasonings', 'Cooking oil', 'Salt', 'Pepper', 'Paper plates', 'Plastic utensils', 'Napkins', 'Solo cups', 'Ice'],
  Alcohol: ['Beer', 'Liquor', 'Wine', 'Mixers', 'Coolers', 'Water', 'Sports drinks', 'Soft drinks', 'Coffee', 'Energy drinks', 'Plastic cups', 'Shot cups', 'Bottle opener', 'Corkscrew', 'Limes', 'Lemons', 'Mint', 'Simple syrup'],
  Fishing: ['Fishing rods', 'Reels', 'Extra line', 'Hooks', 'Sinkers', 'Bobbers', 'Soft plastics', 'Hard baits', 'Topwater', 'Crankbaits', 'Spinnerbaits', 'Jigs', 'Live bait', 'Cast net', 'Needle nose pliers', 'Fish grips', 'Cooler', 'Measuring board', 'Scale'],
  Personal: ['Clothes', 'Swimsuits', 'Shoes', 'Flip flops', 'Hat', 'Sunglasses', 'Toiletries', 'Phone charger', 'Watch charger', 'Medications', 'Wallet', 'License', 'Fishing license', 'Towels', 'Beach towels', 'Blankets', 'Pillow', 'Books', 'Kindle', 'Headphones', 'Portable speaker', 'Camera', 'GoPro', 'Drone'],
  'Returning Home': ['Clean cabin', 'Take trash out', 'Start laundry', 'Pack food left', 'Check boat slip', 'Drain coolers', 'Lock cabin']
};

const budgetSeeds = [
  ['Groceries', 900, 0], ['Alcohol', 450, 0], ['Gas', 240, 0], ['Boat fuel', 500, 0],
  ['Restaurants', 600, 0], ['Entertainment', 250, 0], ['Ice', 100, 0], ['Miscellaneous', 250, 0]
];

const days = Array.from({ length: 9 }, (_, index) => {
  const date = new Date('2026-07-18T12:00:00');
  date.setDate(date.getDate() + index);
  return {
    id: date.toISOString().slice(0, 10),
    label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  };
});

let state = createDefaultState();
let syncMode = 'localStorage';
let saveTimer = null;
let syncPollTimer = null;
let remoteSyncAvailable = false;
let lastRemoteUpdatedAt = null;
let lastSyncedState = null;
let localVersion = 0;
let savedVersion = 0;
let saveInFlight = false;
let pendingSaveAfterInFlight = false;
let remoteRenderPending = false;
let weatherData = null;
let weatherError = null;
let selectedMealIdea = '';
let wheelRotation = 0;
let wheelCategory = 'All';

function createDefaultState() {
  return {
    dark: false,
    people: ['Tony', 'Amy', 'Kylee', 'Elleman'],
    owned: ['Charcoal', 'Seasonings', 'Fishing rods', 'Coolers', 'Life jackets', 'Paper towels', 'Coffee', 'Trash bags'],
    days: Object.fromEntries(days.map((day, index) => [day.id, {
      dinner: day.id === '2026-07-24' ? 'Restaurant' : ['Steaks', 'Tacos', 'Pulled pork sandwiches', 'Grilled chicken', 'Pizza night', 'Fajitas', 'Restaurant', 'Kabobs', 'Smoked ribs'][index],
      activities: {
        boatTime: true,
        drinkingBeer: true,
        swimming: true,
        tubing: index > 1 && index < 7,
        relaxing: true,
        campfire: index % 2 === 1,
        restaurant: day.id === '2026-07-24'
      },
      notes: day.id === '2026-07-24' ? 'Knoxville dinner and night out.' : ''
    }])),
    checks: Object.fromEntries(Object.entries(checklistSeeds).flatMap(([section, items]) => items.map(item => [`${section}:${item}`, false]))),
    mealIdeas: [...defaultDinnerIdeas],
    customShopping: [],
    shoppingChecks: {},
    shoppingQty: {},
    shoppingBuyer: {},
    shoppingCost: {},
    budget: Object.fromEntries(budgetSeeds.map(([name, planned, actual]) => [name, { planned, actual }])),
    wheelHistory: [],
    updatedAt: null
  };
}

async function init() {
  populateCategorySelect();
  bindEvents();
  await loadState();
  render();
  refreshWeather();
  startSharedSync();
}

async function loadState() {
  const local = localStorage.getItem(LOCAL_KEY);
  if (local) state = mergeState(JSON.parse(local));
  lastSyncedState = cloneState(state);

  try {
    const health = await fetch('/api/health').then(response => response.json());
    remoteSyncAvailable = health.mode === 'neon';
    setSyncStatus(remoteSyncAvailable ? 'Neon shared sync' : 'This browser only');
    if (remoteSyncAvailable) {
      const remote = await fetchRemoteState();
      if (remote.data) {
        state = mergeState(remote.data);
        lastRemoteUpdatedAt = getRemoteUpdatedAt(remote);
        lastSyncedState = cloneState(state);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
      } else {
        await saveState(false);
      }
    }
  } catch {
    remoteSyncAvailable = false;
    setSyncStatus('This browser only');
  }
}

function mergeState(incoming) {
  const base = createDefaultState();
  const mergedDays = { ...base.days, ...(incoming.days || {}) };
  const incomingMealIdeas = Array.isArray(incoming.mealIdeas) ? incoming.mealIdeas : base.mealIdeas;
  return {
    ...base,
    ...incoming,
    days: Object.fromEntries(Object.entries(mergedDays).map(([id, plan]) => [id, normalizeDayPlan(plan)])),
    mealIdeas: normalizeMealIdeas([...incomingMealIdeas, ...Object.values(mergedDays).map(plan => plan?.dinner)]),
    checks: { ...base.checks, ...(incoming.checks || {}) },
    shoppingChecks: { ...(incoming.shoppingChecks || {}) },
    shoppingQty: { ...(incoming.shoppingQty || {}) },
    shoppingBuyer: { ...(incoming.shoppingBuyer || {}) },
    shoppingCost: { ...(incoming.shoppingCost || {}) },
    budget: { ...base.budget, ...(incoming.budget || {}) },
    wheelHistory: Array.isArray(incoming.wheelHistory) ? incoming.wheelHistory.slice(0, 8) : []
  };
}

function mergeFamilyState(remote, local, base) {
  const merged = mergeState(remote || {});
  const original = base || createDefaultState();

  if (!deepEqual(local.dark, original.dark)) merged.dark = local.dark;
  merged.people = mergeSharedTextList(merged.people, local.people, original.people);
  merged.owned = mergeSharedTextList(merged.owned, local.owned, original.owned);
  merged.mealIdeas = normalizeMealIdeas(mergeSharedTextList(merged.mealIdeas, local.mealIdeas, original.mealIdeas));
  merged.customShopping = mergeCustomShopping(merged.customShopping, local.customShopping, original.customShopping);
  merged.days = mergeObjectEdits(merged.days, local.days, original.days);
  merged.checks = mergeObjectEdits(merged.checks, local.checks, original.checks);
  merged.shoppingChecks = mergeObjectEdits(merged.shoppingChecks, local.shoppingChecks, original.shoppingChecks);
  merged.shoppingQty = mergeObjectEdits(merged.shoppingQty, local.shoppingQty, original.shoppingQty);
  merged.shoppingBuyer = mergeObjectEdits(merged.shoppingBuyer, local.shoppingBuyer, original.shoppingBuyer);
  merged.shoppingCost = mergeObjectEdits(merged.shoppingCost, local.shoppingCost, original.shoppingCost);
  merged.budget = mergeObjectEdits(merged.budget, local.budget, original.budget);
  merged.wheelHistory = mergeWheelHistory(merged.wheelHistory, local.wheelHistory);

  return mergeState(merged);
}

function mergeSharedTextList(remoteList = [], localList = [], baseList = []) {
  const remoteChanged = !sameTextList(remoteList, baseList);
  const localChanged = !sameTextList(localList, baseList);
  if (localChanged && !remoteChanged) return [...localList];
  if (!localChanged) return [...remoteList];

  const baseKeys = new Set(baseList.map(normalize));
  const remoteKeys = new Set(remoteList.map(normalize));
  const merged = [...remoteList];
  localList.forEach(item => {
    const key = normalize(item);
    if (!remoteKeys.has(key) && !baseKeys.has(key)) {
      remoteKeys.add(key);
      merged.push(item);
    }
  });
  return merged;
}

function sameTextList(left = [], right = []) {
  return deepEqual(left.map(normalize), right.map(normalize));
}

function mergeCustomShopping(remoteList = [], localList = [], baseList = []) {
  const remoteChanged = !deepEqual(remoteList, baseList);
  const localChanged = !deepEqual(localList, baseList);
  if (localChanged && !remoteChanged) return cloneState(localList);
  if (!localChanged) return cloneState(remoteList);

  const baseById = new Map(baseList.map(item => [item.id, item]));
  const byId = new Map(remoteList.map(item => [item.id, cloneState(item)]));
  localList.forEach(item => {
    const baseItem = baseById.get(item.id);
    if (!baseItem || !deepEqual(item, baseItem)) byId.set(item.id, cloneState(item));
  });
  return [...byId.values()];
}

function mergeWheelHistory(remoteList = [], localList = []) {
  const seen = new Set();
  return [...localList, ...remoteList].filter(item => {
    const key = `${item?.pickedAt || ''}:${item?.category || ''}:${item?.title || ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return item?.title;
  }).slice(0, 8);
}

function mergeObjectEdits(remote = {}, local = {}, base = {}) {
  const result = cloneState(remote || {});
  const keys = new Set([...Object.keys(local || {}), ...Object.keys(base || {})]);
  keys.forEach(key => {
    const localValue = local?.[key];
    const baseValue = base?.[key];
    if (deepEqual(localValue, baseValue)) return;

    if (localValue === undefined) {
      delete result[key];
      return;
    }

    if (isPlainObject(localValue) && isPlainObject(baseValue)) {
      result[key] = mergeObjectEdits(result[key] || {}, localValue, baseValue);
      return;
    }

    result[key] = cloneState(localValue);
  });
  return result;
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value ?? null));
}

function deepEqual(left, right) {
  return JSON.stringify(left ?? null) === JSON.stringify(right ?? null);
}

function normalizeDayPlan(plan) {
  const dinnerMap = {
    Chicken: 'Grilled chicken',
    'Pulled pork': 'Pulled pork sandwiches',
    Pizza: 'Pizza night'
  };
  const activities = {
    ...(plan.activities || {}),
    drinkingBeer: plan.activities?.drinkingBeer ?? true
  };
  delete activities.fishing;
  return {
    ...plan,
    activities,
    dinner: dinnerMap[plan.dinner] || plan.dinner || ''
  };
}

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      navigatePage(link.dataset.nav);
    });
  });
  window.addEventListener('hashchange', () => setActivePage(getPageFromHash(), true));
  window.addEventListener('popstate', () => setActivePage(getPageFromHash(), true));
  window.addEventListener('focus', () => pullRemoteState(true));
  window.addEventListener('pagehide', flushPendingSave);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) pullRemoteState(true);
  });
  document.addEventListener('focusout', () => {
    if (remoteRenderPending && !hasPendingLocalChanges()) {
      remoteRenderPending = false;
      render();
    }
  });
  document.getElementById('saveNow').addEventListener('click', () => saveState(true));
  document.getElementById('refreshWeather').addEventListener('click', () => refreshWeather(true));
  document.getElementById('printPlanner').addEventListener('click', () => window.print());
  document.getElementById('toggleDark').addEventListener('click', () => {
    state.dark = !state.dark;
    scheduleSave();
    render();
  });
  document.getElementById('addPerson').addEventListener('click', addPerson);
  document.getElementById('personName').addEventListener('keydown', event => {
    if (event.key === 'Enter') addPerson();
  });
  document.getElementById('addOwned').addEventListener('click', addOwned);
  document.getElementById('ownedItem').addEventListener('keydown', event => {
    if (event.key === 'Enter') addOwned();
  });
  document.getElementById('addShoppingItem').addEventListener('click', addCustomShopping);
  document.getElementById('addMealIdea').addEventListener('click', addMealIdea);
  document.getElementById('mealIdeaName').addEventListener('keydown', event => {
    if (event.key === 'Enter') addMealIdea();
  });
  document.getElementById('spinWheelButton').addEventListener('click', spinWheel);
  document.getElementById('exportJson').addEventListener('click', exportJson);
  document.getElementById('importJson').addEventListener('change', importJson);
  document.getElementById('searchEverything').addEventListener('input', applySearch);
}

async function fetchRemoteState() {
  const response = await fetch(`/api/state/${TRIP_ID}?ts=${Date.now()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Could not load shared planner state.');
  return response.json();
}

function getRemoteUpdatedAt(remote) {
  return remote?.updatedAt || remote?.data?.updatedAt || null;
}

function isRemoteNewer(remote) {
  const next = Date.parse(getRemoteUpdatedAt(remote) || '');
  const current = Date.parse(lastRemoteUpdatedAt || '');
  return Number.isFinite(next) && (!Number.isFinite(current) || next > current + 250);
}

function setSyncStatus(label) {
  syncMode = label;
  const node = document.getElementById('syncMode');
  if (node) node.textContent = label;
}

function startSharedSync() {
  clearInterval(syncPollTimer);
  if (!remoteSyncAvailable) return;
  syncPollTimer = setInterval(() => pullRemoteState(false), SYNC_POLL_MS);
}

async function pullRemoteState(showToast = false) {
  if (!remoteSyncAvailable || saveInFlight || hasPendingLocalChanges()) return;
  try {
    const remote = await fetchRemoteState();
    if (!remote.data || !isRemoteNewer(remote)) {
      setSyncStatus('Neon shared sync');
      return;
    }

    state = mergeState(remote.data);
    lastRemoteUpdatedAt = getRemoteUpdatedAt(remote);
    lastSyncedState = cloneState(state);
    savedVersion = localVersion;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
    setSyncStatus('Neon shared sync');
    render();
    if (showToast) toast('Updated with family edits.');
  } catch {
    setSyncStatus('Neon sync paused');
  }
}

async function saveState(showToast = false) {
  if (saveInFlight) {
    pendingSaveAfterInFlight = true;
    return;
  }

  clearTimeout(saveTimer);
  saveTimer = null;
  const versionToSave = localVersion;
  saveInFlight = true;
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(state));

  if (remoteSyncAvailable) {
    try {
      setSyncStatus('Autosaving...');
      const remote = await fetchRemoteState();
      if (remote.data && isRemoteNewer(remote)) {
        state = mergeFamilyState(mergeState(remote.data), state, lastSyncedState || createDefaultState());
        state.updatedAt = new Date().toISOString();
        localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
        if (canRefreshUiNow()) render();
        else remoteRenderPending = true;
      }

      const response = await fetch(`/api/state/${TRIP_ID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: state })
      });
      if (!response.ok) throw new Error('Save failed');
      const saved = await response.json();
      lastRemoteUpdatedAt = saved.updatedAt || state.updatedAt;
      lastSyncedState = cloneState(state);
      if (localVersion === versionToSave) savedVersion = versionToSave;
      setSyncStatus('Neon shared sync');
    } catch {
      remoteSyncAvailable = false;
      clearInterval(syncPollTimer);
      setSyncStatus('This browser only');
      toast('Neon save failed. Kept a local copy.');
    } finally {
      saveInFlight = false;
      if (pendingSaveAfterInFlight || localVersion !== savedVersion) {
        pendingSaveAfterInFlight = false;
        setTimeout(() => saveState(false), 50);
      }
    }
  } else {
    savedVersion = versionToSave;
    saveInFlight = false;
  }

  document.getElementById('lastSaved').textContent = new Date(state.updatedAt).toLocaleString();
  document.getElementById('syncMode').textContent = syncMode;
  if (showToast) toast('Planner saved.');
}

function scheduleSave() {
  localVersion += 1;
  clearTimeout(saveTimer);
  setSyncStatus(remoteSyncAvailable ? 'Autosaving...' : 'This browser only');
  saveTimer = setTimeout(() => saveState(false), 500);
}

function hasPendingLocalChanges() {
  return Boolean(saveTimer) || saveInFlight || localVersion !== savedVersion;
}

function flushPendingSave() {
  if (!hasPendingLocalChanges()) return;
  clearTimeout(saveTimer);
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
  if (!remoteSyncAvailable) return;

  fetch(`/api/state/${TRIP_ID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: state }),
    keepalive: true
  }).catch(() => {});
}

function canRefreshUiNow() {
  return !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
}

function render() {
  document.body.classList.toggle('dark', Boolean(state.dark));
  document.getElementById('syncMode').textContent = syncMode;
  document.getElementById('lastSaved').textContent = state.updatedAt ? new Date(state.updatedAt).toLocaleString() : 'Not yet';
  renderMetrics();
  renderPeople();
  renderDays();
  renderMeals();
  renderShopping();
  renderWheel();
  renderOwned();
  renderChecklists();
  renderBudget();
  renderWeather();
  lucide.createIcons();
  setActivePage(getPageFromHash(), Boolean(window.location.hash));
  applySearch();
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '');
  return pageIds.includes(page) ? page : 'dashboard';
}

function navigatePage(page) {
  if (!pageIds.includes(page)) return;
  if (window.location.hash !== `#${page}`) {
    history.pushState(null, '', `#${page}`);
    setActivePage(page, true);
    return;
  }
  setActivePage(page, true);
}

function setActivePage(page, scrollToPage = false) {
  document.body.hidden = false;
  document.querySelectorAll('.page[data-page]').forEach(section => {
    section.hidden = section.dataset.page !== page;
  });
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === page);
    link.setAttribute('aria-current', link.dataset.nav === page ? 'page' : 'false');
  });
  document.body.dataset.page = page;
  if (scrollToPage) {
    requestAnimationFrame(() => {
      document.querySelector('main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

async function refreshWeather(showToast = false) {
  weatherError = null;
  renderWeather();
  try {
    const response = await fetch('/api/weather');
    if (!response.ok) throw new Error('Weather unavailable');
    weatherData = await response.json();
    renderMetrics();
    renderWeather();
    lucide.createIcons();
    if (showToast) toast('Weather refreshed.');
  } catch (error) {
    weatherError = error.message;
    renderMetrics();
    renderWeather();
    if (showToast) toast('Weather is unavailable right now.');
  }
}

function renderMetrics() {
  const unchecked = getUncheckedCount();
  const mealsRemaining = days.reduce((sum, day) => {
    const plan = state.days[day.id];
    return sum + (plan.dinner ? 0 : 1);
  }, 0);
  const groceryEstimate = getShoppingItems().filter(item => item.category !== 'Alcohol').length * 8;
  const alcoholEstimate = getShoppingItems().filter(item => item.category === 'Alcohol').length * 18 + 450;
  const tripStart = new Date('2026-07-18T00:00:00');
  const diff = Math.max(0, Math.ceil((tripStart - new Date()) / 86400000));
  const weatherMetric = getWeatherMetric();
  const metrics = [
    ['Countdown', `${diff}`, 'days until Norris Lake'],
    ['People', state.people.length, 'family travelers'],
    ['Dinners Open', mealsRemaining, 'dinner slots to pick'],
    ['Unchecked', unchecked, 'master tasks remaining'],
    ['Grocery Est.', money(groceryEstimate), 'auto list estimate'],
    ['Alcohol Est.', money(alcoholEstimate), 'drinks and supplies'],
    weatherMetric,
    ['Knoxville', 'Jul 24', 'night out badge']
  ];

  document.getElementById('metrics').innerHTML = metrics.map(([label, value, hint]) => `
    <article class="card metric-card searchable" data-search="${label} ${value} ${hint}">
      <span>${label}</span>
      <strong>${value}</strong>
      <span>${hint}</span>
    </article>
  `).join('');
}

function getWeatherMetric() {
  if (weatherData?.forecast?.current) {
    const current = weatherData.forecast.current;
    return ['Weather', `${round(current.temperature_2m)}F`, weatherLabel(current.weather_code)];
  }
  if (weatherError) return ['Weather', 'Offline', 'forecast unavailable'];
  return ['Weather', 'Loading', 'Flat Hollow forecast'];
}

function renderWeather() {
  const currentNode = document.getElementById('weatherCurrent');
  const hourlyNode = document.getElementById('hourlyForecast');
  const dailyNode = document.getElementById('dailyForecast');
  const boatNode = document.getElementById('weatherBoatRead');
  const updatedNode = document.getElementById('weatherUpdated');
  if (!currentNode || !hourlyNode || !dailyNode || !boatNode || !updatedNode) return;

  if (weatherError) {
    currentNode.innerHTML = `
      <span class="label">Weather unavailable</span>
      <strong>--</strong>
      <p class="weather-condition">Could not reach the live forecast.</p>
    `;
    hourlyNode.innerHTML = '';
    dailyNode.innerHTML = '';
    boatNode.textContent = 'Try again in a bit';
    updatedNode.textContent = weatherError;
    return;
  }

  if (!weatherData?.forecast?.current) {
    currentNode.innerHTML = `
      <span class="label">Live weather</span>
      <strong>Loading</strong>
      <p class="weather-condition">Checking Flat Hollow Marina area...</p>
    `;
    hourlyNode.innerHTML = '';
    dailyNode.innerHTML = '';
    boatNode.textContent = 'Waiting on forecast';
    updatedNode.textContent = 'Live weather will refresh from the server.';
    return;
  }

  const { forecast, location, fetchedAt, source } = weatherData;
  const current = forecast.current;
  const today = dailyRows(forecast)[0];
  const boat = boatRead(current, today);
  currentNode.innerHTML = `
    <div>
      <span class="label">${escapeHtml(location.name)}</span>
      <strong>${round(current.temperature_2m)}&deg;</strong>
      <p class="weather-condition"><i data-lucide="${weatherIcon(current.weather_code)}"></i> ${weatherLabel(current.weather_code)}</p>
    </div>
    <div class="weather-facts">
      <span><i data-lucide="thermometer"></i> Feels ${round(current.apparent_temperature)}&deg;</span>
      <span><i data-lucide="wind"></i> ${round(current.wind_speed_10m)} mph</span>
      <span><i data-lucide="cloud-rain"></i> ${round(current.precipitation, 2)} in now</span>
      <span><i data-lucide="droplets"></i> ${round(current.relative_humidity_2m)}%</span>
    </div>
  `;
  boatNode.textContent = boat.title;
  updatedNode.textContent = `${boat.detail} Updated ${formatDateTime(fetchedAt)} from ${source}.`;

  hourlyNode.innerHTML = hourlyRows(forecast).map(hour => `
    <article class="hour-card searchable" data-search="${hour.time} ${weatherLabel(hour.weather_code)}">
      <span>${formatHour(hour.time)}</span>
      <strong>${round(hour.temperature_2m)}&deg;</strong>
      <span><i data-lucide="${weatherIcon(hour.weather_code)}"></i> ${weatherLabel(hour.weather_code)}</span>
      <span>Rain ${hour.precipitation_probability ?? 0}%</span>
      <span>Wind ${round(hour.wind_speed_10m)} mph</span>
    </article>
  `).join('');

  dailyNode.innerHTML = dailyRows(forecast).map(day => `
    <article class="forecast-card ${isTripDay(day.time) ? 'trip-day' : ''} searchable" data-search="${day.time} ${weatherLabel(day.weather_code)}">
      <span>${formatDay(day.time)}${isTripDay(day.time) ? ' - Trip' : ''}</span>
      <strong>${round(day.temperature_2m_max)}&deg; / ${round(day.temperature_2m_min)}&deg;</strong>
      <span><i data-lucide="${weatherIcon(day.weather_code)}"></i> ${weatherLabel(day.weather_code)}</span>
      <span>Rain ${day.precipitation_probability_max ?? 0}% (${round(day.precipitation_sum, 2)} in)</span>
      <span>Wind ${round(day.wind_speed_10m_max)} mph, gusts ${round(day.wind_gusts_10m_max)} mph</span>
      <span>UV ${round(day.uv_index_max, 1)}</span>
    </article>
  `).join('');
}

function hourlyRows(forecast) {
  const hourly = forecast.hourly || {};
  const currentHour = forecast.current?.time?.slice(0, 13);
  const start = Math.max(0, hourly.time?.findIndex(time => time.slice(0, 13) >= currentHour) ?? 0);
  return (hourly.time || []).slice(start, start + 12).map((time, index) => {
    const i = start + index;
    return {
      time,
      temperature_2m: hourly.temperature_2m?.[i],
      precipitation_probability: hourly.precipitation_probability?.[i],
      precipitation: hourly.precipitation?.[i],
      weather_code: hourly.weather_code?.[i],
      wind_speed_10m: hourly.wind_speed_10m?.[i],
      wind_gusts_10m: hourly.wind_gusts_10m?.[i],
      uv_index: hourly.uv_index?.[i]
    };
  });
}

function dailyRows(forecast) {
  const daily = forecast.daily || {};
  return (daily.time || []).map((time, i) => ({
    time,
    weather_code: daily.weather_code?.[i],
    temperature_2m_max: daily.temperature_2m_max?.[i],
    temperature_2m_min: daily.temperature_2m_min?.[i],
    precipitation_probability_max: daily.precipitation_probability_max?.[i],
    precipitation_sum: daily.precipitation_sum?.[i],
    wind_speed_10m_max: daily.wind_speed_10m_max?.[i],
    wind_gusts_10m_max: daily.wind_gusts_10m_max?.[i],
    uv_index_max: daily.uv_index_max?.[i],
    sunrise: daily.sunrise?.[i],
    sunset: daily.sunset?.[i]
  }));
}

function boatRead(current, today) {
  const rain = today?.precipitation_probability_max ?? 0;
  const wind = Math.max(current?.wind_speed_10m ?? 0, today?.wind_speed_10m_max ?? 0);
  const gusts = Math.max(current?.wind_gusts_10m ?? 0, today?.wind_gusts_10m_max ?? 0);
  if (rain >= 65 || gusts >= 30) {
    return { title: 'Watch the water', detail: 'Storm odds or gusts are high enough to keep boat plans flexible.' };
  }
  if (rain >= 40 || wind >= 18 || gusts >= 24) {
    return { title: 'Plan around weather', detail: 'Good lake time may still happen, but keep an eye on wind and rain windows.' };
  }
  return { title: 'Good lake window', detail: 'Current conditions look friendly for marina runs and lake time.' };
}

function weatherLabel(code) {
  const labels = {
    0: 'Clear sky',
    1: 'Mostly clear',
    2: 'Partly cloudy',
    3: 'Cloudy',
    45: 'Fog',
    48: 'Rime fog',
    51: 'Light drizzle',
    53: 'Drizzle',
    55: 'Heavy drizzle',
    56: 'Freezing drizzle',
    57: 'Freezing drizzle',
    61: 'Light rain',
    63: 'Rain',
    65: 'Heavy rain',
    66: 'Freezing rain',
    67: 'Freezing rain',
    71: 'Light snow',
    73: 'Snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Rain showers',
    81: 'Rain showers',
    82: 'Heavy showers',
    85: 'Snow showers',
    86: 'Snow showers',
    95: 'Thunderstorms',
    96: 'Thunderstorms',
    99: 'Thunderstorms'
  };
  return labels[code] || 'Forecast';
}

function weatherIcon(code) {
  if ([0, 1].includes(code)) return 'sun';
  if ([2, 3].includes(code)) return 'cloud-sun';
  if ([45, 48].includes(code)) return 'cloud-fog';
  if ([95, 96, 99].includes(code)) return 'cloud-lightning';
  if (code >= 51 && code <= 82) return 'cloud-rain';
  if (code >= 71 && code <= 86) return 'cloud-snow';
  return 'cloud';
}

function renderPeople() {
  document.getElementById('peopleList').innerHTML = state.people.map(person => `
    <span class="pill searchable" data-search="${person}">
      ${escapeHtml(person)}
      <button aria-label="Remove ${escapeHtml(person)}" data-remove-person="${escapeHtml(person)}"><i data-lucide="x"></i></button>
    </span>
  `).join('');
  document.querySelectorAll('[data-remove-person]').forEach(button => {
    button.addEventListener('click', () => {
      state.people = state.people.filter(person => person !== button.dataset.removePerson);
      scheduleSave();
      render();
    });
  });
}

function renderDays() {
  document.getElementById('dayGrid').innerHTML = days.map(day => {
    const plan = state.days[day.id];
    const nightOut = day.id === '2026-07-24' ? '<span class="pill">Knoxville Night Out</span>' : '';
    return `
      <article class="day-card searchable" data-search="${day.label} ${plan.dinner} ${plan.notes || ''}">
        <h3>${day.label}</h3>
        ${nightOut}
        ${dinnerDecision(plan.dinner)}
        <div class="activity-row">
          ${activityField(day.id, 'boatTime', 'Boat')}
          ${activityField(day.id, 'drinkingBeer', 'Drinking beer')}
          ${activityField(day.id, 'swimming', 'Swimming')}
          ${activityField(day.id, 'tubing', 'Tubing')}
          ${activityField(day.id, 'relaxing', 'Relax')}
          ${activityField(day.id, 'campfire', 'Fire')}
        </div>
        <div class="field" style="margin-top: 10px">
          <label for="notes-${day.id}">Notes</label>
          <textarea id="notes-${day.id}" data-day="${day.id}" data-field="notes">${escapeHtml(plan.notes || '')}</textarea>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('[data-day][data-field], [data-day][data-activity]').forEach(input => {
    input.addEventListener('change', updateDayField);
    input.addEventListener('input', event => {
      if (event.target.tagName === 'TEXTAREA') updateDayField(event);
    });
  });
}

function dinnerDecision(dinner) {
  return `
    <div class="dinner-decision">
      <span class="label">Decided Dinner</span>
      <strong>${escapeHtml(dinner || 'TBD')}</strong>
    </div>
  `;
}

function activityField(dayId, key, label) {
  return `
    <label>
      <input type="checkbox" data-day="${dayId}" data-activity="${key}" ${state.days[dayId].activities[key] ? 'checked' : ''}>
      ${label}
    </label>
  `;
}

function updateDayField(event) {
  const day = event.target.dataset.day;
  const field = event.target.dataset.field;
  if (field) state.days[day][field] = event.target.value;
  if (event.target.dataset.activity) {
    state.days[day].activities[event.target.dataset.activity] = event.target.checked;
  }
  scheduleSave();
  renderMetrics();
  renderDays();
  renderMeals();
  renderShopping();
}

function renderMeals() {
  const ideas = normalizeMealIdeas(state.mealIdeas);
  state.mealIdeas = ideas;
  document.getElementById('mealIdeaList').innerHTML = ideas.map(idea => mealIdeaCard(idea)).join('');

  document.getElementById('mealBoard').innerHTML = days.map(day => {
    const plan = state.days[day.id];
    const dinner = plan.dinner || '';
    return `
      <article class="meal-day meal-drop-zone searchable ${dinner ? 'has-dinner' : ''}" data-meal-drop-day="${day.id}" data-search="${day.label} ${dinner}" tabindex="0">
        <h3>${day.label}</h3>
        <div class="assigned-dinner">
          <span class="label">Dinner</span>
          <strong>${escapeHtml(dinner || 'Drop dinner here')}</strong>
          ${dinner ? `<button type="button" data-clear-dinner="${day.id}" aria-label="Clear dinner for ${day.label}"><i data-lucide="x"></i></button>` : ''}
        </div>
      </article>
    `;
  }).join('');

  bindMealIdeaEvents();
  bindMealDropEvents();
}

function mealIdeaCard(idea) {
  const selected = selectedMealIdea === idea ? 'selected' : '';
  return `
    <div class="meal-idea-card ${selected}" draggable="true" data-meal-idea="${escapeHtml(idea)}" tabindex="0">
      <span class="drag-handle"><i data-lucide="grip-vertical"></i></span>
      <strong>${escapeHtml(idea)}</strong>
      <button type="button" data-remove-meal-idea="${escapeHtml(idea)}" aria-label="Remove ${escapeHtml(idea)}"><i data-lucide="x"></i></button>
    </div>
  `;
}

function bindMealIdeaEvents() {
  document.querySelectorAll('[data-meal-idea]').forEach(card => {
    card.addEventListener('click', event => {
      if (event.target.closest('button')) return;
      selectedMealIdea = card.dataset.mealIdea;
      renderMeals();
      lucide.createIcons();
    });
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      selectedMealIdea = card.dataset.mealIdea;
      renderMeals();
      lucide.createIcons();
    });
    card.addEventListener('dragstart', event => {
      selectedMealIdea = card.dataset.mealIdea;
      event.dataTransfer.setData('text/plain', card.dataset.mealIdea);
      event.dataTransfer.effectAllowed = 'copy';
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
  });

  document.querySelectorAll('[data-remove-meal-idea]').forEach(button => {
    button.addEventListener('click', () => removeMealIdea(button.dataset.removeMealIdea));
  });
}

function bindMealDropEvents() {
  document.querySelectorAll('[data-meal-drop-day]').forEach(zone => {
    zone.addEventListener('dragover', event => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', event => {
      event.preventDefault();
      zone.classList.remove('drag-over');
      const dinner = event.dataTransfer.getData('text/plain') || selectedMealIdea;
      assignDinner(zone.dataset.mealDropDay, dinner);
    });
    zone.addEventListener('click', event => {
      if (event.target.closest('button') || !selectedMealIdea) return;
      assignDinner(zone.dataset.mealDropDay, selectedMealIdea);
    });
    zone.addEventListener('keydown', event => {
      if (!selectedMealIdea || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      assignDinner(zone.dataset.mealDropDay, selectedMealIdea);
    });
  });

  document.querySelectorAll('[data-clear-dinner]').forEach(button => {
    button.addEventListener('click', () => assignDinner(button.dataset.clearDinner, ''));
  });
}

function addMealIdea() {
  const input = document.getElementById('mealIdeaName');
  const idea = input.value.trim();
  if (!idea) return;
  state.mealIdeas = normalizeMealIdeas([...state.mealIdeas, idea]);
  selectedMealIdea = idea;
  input.value = '';
  scheduleSave();
  renderMeals();
  lucide.createIcons();
}

function removeMealIdea(idea) {
  state.mealIdeas = state.mealIdeas.filter(item => normalize(item) !== normalize(idea));
  if (selectedMealIdea === idea) selectedMealIdea = '';
  scheduleSave();
  renderMeals();
  lucide.createIcons();
}

function assignDinner(dayId, dinner) {
  if (!state.days[dayId]) return;
  const nextDinner = String(dinner || '').trim();
  state.days[dayId].dinner = nextDinner;
  if (nextDinner) state.mealIdeas = normalizeMealIdeas([...state.mealIdeas, nextDinner]);
  selectedMealIdea = nextDinner || selectedMealIdea;
  scheduleSave();
  renderMetrics();
  renderDays();
  renderMeals();
  renderShopping();
  lucide.createIcons();
}

function renderWheel() {
  const entries = getWheelEntries();
  const wheel = document.getElementById('spinWheel');
  if (!wheel) return;
  wheel.style.background = wheelGradient(entries);
  wheel.style.transform = `rotate(${wheelRotation}deg)`;
  wheel.querySelector('.wheel-center')?.style.setProperty('transform', `rotate(${-wheelRotation}deg)`);

  const latest = state.wheelHistory[0];
  document.getElementById('wheelResultCategory').textContent = latest?.category || 'Ready';
  document.getElementById('wheelResultTitle').textContent = latest?.title || 'Let the lake decide.';
  document.getElementById('wheelResultDetail').textContent = latest?.detail || 'A fresh challenge will land here after the spin.';

  const categories = ['All', ...new Set(wheelOptions.map(option => option.category))];
  document.getElementById('wheelFilters').innerHTML = categories.map(category => `
    <button type="button" class="${category === wheelCategory ? 'active' : ''}" data-wheel-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
  `).join('');

  document.getElementById('wheelPromptGrid').innerHTML = entries.map(option => `
    <article class="wheel-prompt-card">
      <span><i data-lucide="${option.icon}"></i>${escapeHtml(option.category)}</span>
      <h3>${escapeHtml(option.title)}</h3>
      <p>${escapeHtml(option.detail)}</p>
    </article>
  `).join('');

  renderWheelHistory();

  document.querySelectorAll('[data-wheel-category]').forEach(button => {
    button.addEventListener('click', () => {
      wheelCategory = button.dataset.wheelCategory;
      renderWheel();
      lucide.createIcons();
    });
  });
}

function renderWheelHistory() {
  const history = state.wheelHistory || [];
  document.getElementById('wheelHistory').innerHTML = `
    <span class="label">Recent Spins</span>
    ${history.length ? history.map(item => `
      <div class="wheel-history-item">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.category)}</span>
      </div>
    `).join('') : '<p>No spins yet.</p>'}
  `;
}

function spinWheel() {
  const entries = getWheelEntries();
  if (!entries.length) return;
  const button = document.getElementById('spinWheelButton');
  const wheel = document.getElementById('spinWheel');
  const choiceIndex = Math.floor(Math.random() * entries.length);
  const choice = entries[choiceIndex];
  const segmentAngle = 360 / entries.length;
  const currentMod = ((wheelRotation % 360) + 360) % 360;
  const landingAngle = 360 - (choiceIndex * segmentAngle + segmentAngle / 2);
  wheelRotation += 1440 + Math.floor(Math.random() * 3) * 360 + landingAngle - currentMod;
  button.disabled = true;
  wheel.classList.add('spinning');
  wheel.style.transform = `rotate(${wheelRotation}deg)`;
  wheel.querySelector('.wheel-center')?.style.setProperty('transform', `rotate(${-wheelRotation}deg)`);

  setTimeout(() => {
    state.wheelHistory = [{
      category: choice.category,
      title: choice.title,
      detail: choice.detail,
      at: new Date().toISOString()
    }, ...(state.wheelHistory || [])].slice(0, 8);
    button.disabled = false;
    wheel.classList.remove('spinning');
    scheduleSave();
    renderWheel();
    lucide.createIcons();
  }, 2300);
}

function getWheelEntries() {
  return wheelCategory === 'All'
    ? wheelOptions
    : wheelOptions.filter(option => option.category === wheelCategory);
}

function wheelGradient(entries) {
  const segment = 100 / entries.length;
  return `conic-gradient(${entries.map((_, index) => {
    const color = wheelColors[index % wheelColors.length];
    return `${color} ${index * segment}% ${(index + 1) * segment}%`;
  }).join(', ')})`;
}

function renderShopping() {
  const grouped = groupBy(getShoppingItems(), 'category');
  document.getElementById('shoppingLists').innerHTML = categories
    .filter(category => grouped[category]?.length)
    .map(category => `
      <article class="list-card searchable" data-search="${category} ${grouped[category].map(item => item.name).join(' ')}">
        <h3>${category}</h3>
        ${grouped[category].map(item => shoppingRow(item)).join('')}
      </article>
    `).join('');

  document.querySelectorAll('[data-shopping-check]').forEach(input => {
    input.addEventListener('change', () => {
      state.shoppingChecks[input.dataset.shoppingCheck] = input.checked;
      scheduleSave();
      renderMetrics();
    });
  });
  document.querySelectorAll('[data-shopping-qty]').forEach(input => {
    input.addEventListener('input', () => {
      state.shoppingQty[input.dataset.shoppingQty] = input.value;
      scheduleSave();
    });
  });
  document.querySelectorAll('[data-shopping-buyer]').forEach(select => {
    select.addEventListener('change', () => {
      state.shoppingBuyer[select.dataset.shoppingBuyer] = select.value;
      scheduleSave();
      renderBudgetSummary();
    });
  });
  document.querySelectorAll('[data-shopping-cost]').forEach(input => {
    input.addEventListener('input', () => {
      state.shoppingCost[input.dataset.shoppingCost] = input.value;
      scheduleSave();
      renderBudgetSummary();
      renderMetrics();
    });
  });
  document.querySelectorAll('[data-remove-custom]').forEach(button => {
    button.addEventListener('click', () => {
      state.customShopping = state.customShopping.filter(item => item.id !== button.dataset.removeCustom);
      scheduleSave();
      render();
    });
  });
}

function shoppingRow(item) {
  const checked = state.shoppingChecks[item.id] ? 'checked' : '';
  const done = state.shoppingChecks[item.id] ? 'done' : '';
  const qty = state.shoppingQty[item.id] || item.qty || '';
  const buyer = state.shoppingBuyer[item.id] || '';
  const cost = state.shoppingCost[item.id] || '';
  return `
    <div class="check-row shopping-row ${done}">
      <label class="item-main">
        <input type="checkbox" data-shopping-check="${item.id}" ${checked}>
        <span>${escapeHtml(item.name)}</span>
      </label>
      <div class="shopping-controls">
        <input class="qty" data-shopping-qty="${item.id}" value="${escapeHtml(qty)}" placeholder="Qty" aria-label="${escapeHtml(item.name)} quantity">
        <input class="cost-input" type="number" min="0" step="0.01" data-shopping-cost="${item.id}" value="${escapeHtml(cost)}" placeholder="Cost" aria-label="${escapeHtml(item.name)} cost">
        <select class="buyer-select" data-shopping-buyer="${item.id}" aria-label="${escapeHtml(item.name)} buyer">
          <option value="">Buyer</option>
          ${state.people.map(person => `<option value="${escapeHtml(person)}" ${person === buyer ? 'selected' : ''}>${escapeHtml(person)}</option>`).join('')}
        </select>
        ${item.custom ? `<button data-remove-custom="${item.id}" aria-label="Remove ${escapeHtml(item.name)}"><i data-lucide="trash-2"></i></button>` : ''}
      </div>
    </div>
  `;
}

function getShoppingItems() {
  const owned = new Set(state.owned.map(normalize));
  const map = new Map();
  const add = (category, name, qty, custom = false, id = null) => {
    if (!name || owned.has(normalize(name))) return;
    const key = id || `${category}:${normalize(name)}`;
    if (!map.has(key)) map.set(key, { id: key, category, name, qty, custom });
  };

  masterGrocerySeeds.forEach(([category, name, qty]) => add(category, name, qty));

  Object.values(state.days).forEach(plan => {
    (mealGroceries[plan.dinner] || []).forEach(([category, name, qty]) => add(category, name, qty));
  });
  state.customShopping.forEach(item => add(item.category, item.name, item.qty, true, item.id));
  return [...map.values()].sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}

function renderOwned() {
  document.getElementById('ownedList').innerHTML = state.owned.map(item => `
    <span class="pill searchable" data-search="${item}">
      ${escapeHtml(item)}
      <button aria-label="Remove ${escapeHtml(item)}" data-remove-owned="${escapeHtml(item)}"><i data-lucide="x"></i></button>
    </span>
  `).join('');
  document.querySelectorAll('[data-remove-owned]').forEach(button => {
    button.addEventListener('click', () => {
      state.owned = state.owned.filter(item => item !== button.dataset.removeOwned);
      scheduleSave();
      render();
    });
  });
}

function renderChecklists() {
  document.getElementById('checklists').innerHTML = Object.entries(checklistSeeds).map(([section, items]) => `
    <article class="check-card searchable" data-search="${section} ${items.join(' ')}">
      <h3>${section}</h3>
      ${items.map(item => {
        const id = `${section}:${item}`;
        const checked = state.checks[id] ? 'checked' : '';
        const done = state.checks[id] ? 'done' : '';
        return `
          <label class="check-row ${done}">
            <span class="item-main">
              <input type="checkbox" data-check-id="${escapeHtml(id)}" ${checked}>
              <span>${escapeHtml(item)}</span>
            </span>
          </label>
        `;
      }).join('')}
    </article>
  `).join('');
  document.querySelectorAll('[data-check-id]').forEach(input => {
    input.addEventListener('change', () => {
      state.checks[input.dataset.checkId] = input.checked;
      scheduleSave();
      renderMetrics();
      input.closest('.check-row').classList.toggle('done', input.checked);
      maybeCelebrate();
    });
  });
}

function renderBudget() {
  document.getElementById('budgetTable').innerHTML = Object.entries(state.budget).map(([name, values]) => `
    <div class="budget-row searchable" data-search="${name}">
      <strong>${name}</strong>
      <input type="number" min="0" data-budget="${name}" data-budget-field="planned" value="${values.planned}" aria-label="${name} planned">
      <input type="number" min="0" data-budget="${name}" data-budget-field="actual" value="${values.actual}" aria-label="${name} actual">
    </div>
  `).join('');

  document.querySelectorAll('[data-budget]').forEach(input => {
    input.addEventListener('input', () => {
      state.budget[input.dataset.budget][input.dataset.budgetField] = Number(input.value || 0);
      scheduleSave();
      renderBudgetSummary();
      renderMetrics();
    });
  });

  renderBudgetSummary();
}

function renderBudgetSummary() {
  const planned = Object.values(state.budget).reduce((sum, item) => sum + Number(item.planned || 0), 0);
  const actual = Object.values(state.budget).reduce((sum, item) => sum + Number(item.actual || 0), 0);
  const pct = planned ? Math.min(100, Math.round((actual / planned) * 100)) : 0;
  const buyerTotals = getBuyerTotals();
  document.getElementById('budgetSummary').innerHTML = `
    <span class="label">Actual Spent</span>
    <strong>${money(actual)}</strong>
    <p>Planned: ${money(planned)}<br>Remaining: ${money(planned - actual)}</p>
    <div class="progress" style="--value:${pct}%"><span></span></div>
    <div class="buyer-summary">
      <span class="label">Grocery Assignments</span>
      ${buyerTotals.map(row => `
        <div class="buyer-row">
          <span>${escapeHtml(row.name)}</span>
          <strong>${money(row.total)}</strong>
        </div>
      `).join('')}
    </div>
  `;
}

function getBuyerTotals() {
  const totals = new Map(state.people.map(person => [person, 0]));
  let unassigned = 0;
  getShoppingItems().forEach(item => {
    const cost = Number(state.shoppingCost[item.id] || 0);
    if (!cost) return;
    const buyer = state.shoppingBuyer[item.id];
    if (buyer) totals.set(buyer, (totals.get(buyer) || 0) + cost);
    else unassigned += cost;
  });
  const rows = [...totals.entries()].map(([name, total]) => ({ name, total }));
  rows.push({ name: 'Unassigned', total: unassigned });
  return rows;
}

function addPerson() {
  const input = document.getElementById('personName');
  const name = input.value.trim();
  if (!name) return;
  state.people.push(name);
  input.value = '';
  scheduleSave();
  render();
}

function addOwned() {
  const input = document.getElementById('ownedItem');
  const item = input.value.trim();
  if (!item) return;
  state.owned.push(item);
  input.value = '';
  scheduleSave();
  render();
}

function addCustomShopping() {
  const name = document.getElementById('customItemName').value.trim();
  const category = document.getElementById('customItemCategory').value;
  const qty = document.getElementById('customItemQty').value.trim();
  if (!name) return;
  state.customShopping.push({ id: `custom:${Date.now()}`, name, category, qty, custom: true });
  document.getElementById('customItemName').value = '';
  document.getElementById('customItemQty').value = '';
  scheduleSave();
  render();
}

function populateCategorySelect() {
  document.getElementById('customItemCategory').innerHTML = categories.map(category => `<option>${category}</option>`).join('');
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'take-5-cabin-lake-planner.json';
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state = mergeState(JSON.parse(reader.result));
    localVersion += 1;
    saveState(true);
    render();
  };
  reader.readAsText(file);
}

function applySearch() {
  const query = document.getElementById('searchEverything')?.value?.trim().toLowerCase() || '';
  document.querySelectorAll('.searchable').forEach(node => {
    node.classList.toggle('hidden-by-search', Boolean(query) && !node.dataset.search?.toLowerCase().includes(query));
  });
}

function getUncheckedCount() {
  const checklistUnchecked = Object.keys(state.checks).filter(key => !state.checks[key]).length;
  const shoppingUnchecked = getShoppingItems().filter(item => !state.shoppingChecks[item.id]).length;
  return checklistUnchecked + shoppingUnchecked;
}

function maybeCelebrate() {
  if (getUncheckedCount() === 0) toast('Everything is checked. Lake week is ready.');
}

function toast(message) {
  const node = document.getElementById('toast');
  node.textContent = message;
  node.classList.add('show');
  setTimeout(() => node.classList.remove('show'), 2600);
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    groups[item[key]] ||= [];
    groups[item[key]].push(item);
    return groups;
  }, {});
}

function normalize(value) {
  return String(value).trim().toLowerCase();
}

function normalizeMealIdeas(ideas) {
  const seen = new Set();
  return ideas.reduce((list, idea) => {
    const meal = String(idea || '').trim();
    const key = normalize(meal);
    if (!meal || seen.has(key)) return list;
    seen.add(key);
    list.push(meal);
    return list;
  }, []);
}

function title(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function round(value, digits = 0) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '--';
  return Number(value).toFixed(digits).replace(/\.0+$/, '');
}

function formatHour(value) {
  return new Date(value).toLocaleTimeString('en-US', { hour: 'numeric' });
}

function formatDay(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

function formatDateTime(value) {
  return new Date(value).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function isTripDay(value) {
  return value >= '2026-07-18' && value <= '2026-07-26';
}

function money(value) {
  return Number(value).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

init();
