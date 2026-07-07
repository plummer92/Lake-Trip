const TRIP_ID = 'take-5-cabin-2026';
const LOCAL_KEY = `planner:${TRIP_ID}`;

const categories = [
  'Produce', 'Dairy', 'Meat', 'Frozen', 'Dry Goods', 'Snacks', 'Condiments',
  'Bread', 'Breakfast', 'Drinks', 'Alcohol', 'Cleaning', 'Paper Products',
  'Boat', 'Cabin', 'Fishing', 'Personal', 'Miscellaneous'
];

const mealOptions = {
  breakfast: ['Eggs', 'Bacon', 'Sausage', 'Biscuits', 'Pancakes', 'French toast', 'Breakfast burritos', 'Fruit'],
  lunch: ['Sandwiches', 'Hot dogs', 'Burgers', 'Chicken wraps', 'Quesadillas', 'Leftovers'],
  dinner: ['Steaks', 'Chicken', 'Pulled pork', 'Tacos', 'Fajitas', 'Spaghetti', 'Pizza', 'Kabobs', 'Grilled shrimp', 'Smoked ribs', 'Restaurant'],
  snacks: ['Chips and dip', 'Fruit', 'Trail mix', 'Veggie tray', 'Pretzels', 'Jerky'],
  dessert: ['Smores', 'Brownies', 'Ice cream', 'Cookies', 'Banana pudding']
};

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
  Chicken: [['Meat', 'Chicken breasts', '8 lb'], ['Condiments', 'Marinade', '2 bottles']],
  'Pulled pork': [['Meat', 'Pulled pork', '8 lb'], ['Bread', 'Slider buns', '3 packs'], ['Condiments', 'BBQ sauce', '2 bottles']],
  Tacos: [['Meat', 'Ground beef', '6 lb'], ['Bread', 'Taco shells', '4 boxes'], ['Dairy', 'Shredded cheese', '3 bags'], ['Produce', 'Lettuce and tomatoes', '1 set']],
  Fajitas: [['Meat', 'Fajita meat', '7 lb'], ['Produce', 'Peppers and onions', '1 tray'], ['Bread', 'Tortillas', '3 packs']],
  Spaghetti: [['Dry Goods', 'Pasta', '4 boxes'], ['Dry Goods', 'Pasta sauce', '4 jars'], ['Meat', 'Italian sausage', '4 lb']],
  Pizza: [['Frozen', 'Frozen pizzas', '8']],
  Kabobs: [['Meat', 'Kabob meat', '7 lb'], ['Produce', 'Kabob vegetables', '1 tray'], ['Miscellaneous', 'Skewers', '1 pack']],
  'Grilled shrimp': [['Meat', 'Shrimp', '6 lb'], ['Dairy', 'Butter', '1 lb'], ['Produce', 'Lemons', '8']],
  'Smoked ribs': [['Meat', 'Ribs', '8 racks'], ['Condiments', 'BBQ rub', '1 jar'], ['Condiments', 'BBQ sauce', '2 bottles']],
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

function createDefaultState() {
  return {
    dark: false,
    people: ['Tony', 'Amy', 'Kylee', 'Elleman'],
    owned: ['Charcoal', 'Seasonings', 'Fishing rods', 'Coolers', 'Life jackets', 'Paper towels', 'Coffee', 'Trash bags'],
    days: Object.fromEntries(days.map((day, index) => [day.id, {
      breakfast: index === 0 ? '' : 'Eggs',
      lunch: index === 6 ? 'Restaurant' : 'Sandwiches',
      dinner: day.id === '2026-07-24' ? 'Restaurant' : ['Steaks', 'Tacos', 'Pulled pork', 'Chicken', 'Pizza', 'Fajitas', 'Restaurant', 'Kabobs', 'Smoked ribs'][index],
      snacks: 'Chips and dip',
      dessert: index % 2 ? 'Ice cream' : 'Smores',
      activities: {
        boatTime: true,
        fishing: index % 2 === 0,
        swimming: true,
        tubing: index > 1 && index < 7,
        relaxing: true,
        campfire: index % 2 === 1,
        restaurant: day.id === '2026-07-24'
      },
      notes: day.id === '2026-07-24' ? 'Knoxville dinner and night out.' : ''
    }])),
    checks: Object.fromEntries(Object.entries(checklistSeeds).flatMap(([section, items]) => items.map(item => [`${section}:${item}`, false]))),
    customShopping: [],
    shoppingChecks: {},
    shoppingQty: {},
    budget: Object.fromEntries(budgetSeeds.map(([name, planned, actual]) => [name, { planned, actual }])),
    updatedAt: null
  };
}

async function init() {
  populateCategorySelect();
  bindEvents();
  await loadState();
  render();
}

async function loadState() {
  const local = localStorage.getItem(LOCAL_KEY);
  if (local) state = mergeState(JSON.parse(local));

  try {
    const health = await fetch('/api/health').then(response => response.json());
    syncMode = health.mode === 'neon' ? 'Neon shared sync' : 'This browser only';
    if (health.mode === 'neon') {
      const remote = await fetch(`/api/state/${TRIP_ID}`).then(response => response.json());
      if (remote.data) state = mergeState(remote.data);
      await saveState(false);
    }
  } catch {
    syncMode = 'This browser only';
  }
}

function mergeState(incoming) {
  return {
    ...createDefaultState(),
    ...incoming,
    days: { ...createDefaultState().days, ...(incoming.days || {}) },
    checks: { ...createDefaultState().checks, ...(incoming.checks || {}) },
    budget: { ...createDefaultState().budget, ...(incoming.budget || {}) }
  };
}

function bindEvents() {
  document.getElementById('saveNow').addEventListener('click', () => saveState(true));
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
  document.getElementById('exportJson').addEventListener('click', exportJson);
  document.getElementById('importJson').addEventListener('change', importJson);
  document.getElementById('searchEverything').addEventListener('input', applySearch);
}

async function saveState(showToast = false) {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(state));

  if (syncMode === 'Neon shared sync') {
    try {
      const response = await fetch(`/api/state/${TRIP_ID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: state })
      });
      if (!response.ok) throw new Error('Save failed');
    } catch {
      syncMode = 'This browser only';
      toast('Neon save failed. Kept a local copy.');
    }
  }

  document.getElementById('lastSaved').textContent = new Date(state.updatedAt).toLocaleString();
  document.getElementById('syncMode').textContent = syncMode;
  if (showToast) toast('Planner saved.');
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => saveState(false), 350);
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
  renderOwned();
  renderChecklists();
  renderBudget();
  lucide.createIcons();
  applySearch();
}

function renderMetrics() {
  const unchecked = getUncheckedCount();
  const mealsRemaining = days.reduce((sum, day) => {
    const plan = state.days[day.id];
    return sum + ['breakfast', 'lunch', 'dinner'].filter(key => !plan[key]).length;
  }, 0);
  const groceryEstimate = getShoppingItems().filter(item => item.category !== 'Alcohol').length * 8;
  const alcoholEstimate = getShoppingItems().filter(item => item.category === 'Alcohol').length * 18 + 450;
  const tripStart = new Date('2026-07-18T00:00:00');
  const diff = Math.max(0, Math.ceil((tripStart - new Date()) / 86400000));
  const metrics = [
    ['Countdown', `${diff}`, 'days until Norris Lake'],
    ['People', state.people.length, 'family travelers'],
    ['Meals Open', mealsRemaining, 'breakfast/lunch/dinner slots'],
    ['Unchecked', unchecked, 'master tasks remaining'],
    ['Grocery Est.', money(groceryEstimate), 'auto list estimate'],
    ['Alcohol Est.', money(alcoholEstimate), 'drinks and supplies'],
    ['Weather', 'TBD', 'add forecast week-of'],
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
      <article class="day-card searchable" data-search="${day.label} ${Object.values(plan).join(' ')}">
        <h3>${day.label}</h3>
        ${nightOut}
        <div class="mini-grid">
          ${mealField(day.id, 'breakfast', 'Breakfast')}
          ${mealField(day.id, 'lunch', 'Lunch')}
          ${mealField(day.id, 'dinner', 'Dinner')}
          ${mealField(day.id, 'snacks', 'Snacks')}
          ${mealField(day.id, 'dessert', 'Dessert')}
        </div>
        <div class="activity-row">
          ${activityField(day.id, 'boatTime', 'Boat')}
          ${activityField(day.id, 'fishing', 'Fishing')}
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

function mealField(dayId, key, label) {
  const options = mealOptions[key] || [];
  const value = state.days[dayId][key] || '';
  return `
    <div class="field">
      <label>${label}</label>
      <select data-day="${dayId}" data-field="${key}">
        <option value="">Pick meal</option>
        ${options.map(option => `<option ${option === value ? 'selected' : ''}>${option}</option>`).join('')}
      </select>
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
  renderMeals();
  renderShopping();
}

function renderMeals() {
  document.getElementById('mealBoard').innerHTML = days.map(day => {
    const plan = state.days[day.id];
    return `
      <article class="meal-day searchable" data-search="${day.label} ${plan.breakfast} ${plan.lunch} ${plan.dinner} ${plan.snacks} ${plan.dessert}">
        <h3>${day.label}</h3>
        <div class="meal-selects">
          ${['breakfast', 'lunch', 'dinner', 'snacks', 'dessert'].map(key => `
            <div><span class="label">${title(key)}</span><strong>${escapeHtml(plan[key] || 'Unplanned')}</strong></div>
          `).join('')}
        </div>
      </article>
    `;
  }).join('');
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
  return `
    <div class="check-row ${done}">
      <label class="item-main">
        <input type="checkbox" data-shopping-check="${item.id}" ${checked}>
        <span>${escapeHtml(item.name)}</span>
      </label>
      <input class="qty" data-shopping-qty="${item.id}" value="${escapeHtml(qty)}" aria-label="${escapeHtml(item.name)} quantity">
      ${item.custom ? `<button data-remove-custom="${item.id}" aria-label="Remove ${escapeHtml(item.name)}"><i data-lucide="trash-2"></i></button>` : ''}
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

  Object.values(state.days).forEach(plan => {
    ['breakfast', 'lunch', 'dinner', 'snacks', 'dessert'].forEach(key => {
      (mealGroceries[plan[key]] || []).forEach(([category, name, qty]) => add(category, name, qty));
    });
  });

  checklistSeeds.Alcohol.forEach(item => add(item.match(/Beer|Liquor|Wine|Mixers|Coolers|Limes|Lemons|Mint|Simple/) ? 'Alcohol' : 'Drinks', item, ''));
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
  document.getElementById('budgetSummary').innerHTML = `
    <span class="label">Actual Spent</span>
    <strong>${money(actual)}</strong>
    <p>Planned: ${money(planned)}<br>Remaining: ${money(planned - actual)}</p>
    <div class="progress" style="--value:${pct}%"><span></span></div>
  `;
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

function title(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
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
