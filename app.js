// ===== DATA =====
const workouts = [
  { id:1,  cat:'upper', name:'Barbell Rows',           diff:'med',  sets:4, reps:'10–12',    rest:'90s',   desc:'Pull the bar towards your lower chest, squeezing your shoulder blades together. Keep your back flat throughout the movement.',               emoji:'🏋️' },
  { id:2,  cat:'upper', name:'Pull-Ups',               diff:'hard', sets:4, reps:'6–10',     rest:'2 min', desc:'Grip the bar slightly wider than shoulder-width. Drive your elbows down to your hips as you pull up. Controlled negative.',              emoji:'💪' },
  { id:3,  cat:'upper', name:'Dumbbell Rows',          diff:'easy', sets:3, reps:'12–15',    rest:'60s',   desc:'Place one knee on a bench, row the dumbbell to your hip. Keep your core braced and spine neutral throughout.',                           emoji:'🤜' },
  { id:4,  cat:'upper', name:'Face Pulls',             diff:'easy', sets:3, reps:'15–20',    rest:'45s',   desc:'Use a cable or band at face height. Pull towards your nose splitting your hands apart, targeting rear delts and rotator cuff.',           emoji:'🎯' },
  { id:5,  cat:'lower', name:'Barbell Squats',         diff:'hard', sets:5, reps:'5–8',      rest:'3 min', desc:'Feet shoulder-width apart, bar on your upper traps. Break at the hips and knees simultaneously, hitting parallel depth.',                emoji:'🦵' },
  { id:6,  cat:'lower', name:'Romanian Deadlift',      diff:'med',  sets:4, reps:'10–12',    rest:'90s',   desc:'Hip hinge movement. Push hips back, lower the bar along your legs until you feel a deep hamstring stretch then drive hips forward.',     emoji:'🏃' },
  { id:7,  cat:'lower', name:'Walking Lunges',         diff:'easy', sets:3, reps:'12 each',  rest:'60s',   desc:'Step forward lowering your rear knee toward the ground. Keep your front shin vertical and torso upright throughout.',                    emoji:'🚶' },
  { id:8,  cat:'lower', name:'Calf Raises',            diff:'easy', sets:4, reps:'20–25',    rest:'45s',   desc:'Stand on the edge of a step. Full range of motion — deep stretch at the bottom and full contraction at the top.',                        emoji:'👟' },
  { id:9,  cat:'chest', name:'Bench Press',            diff:'hard', sets:4, reps:'6–10',     rest:'2 min', desc:'Lie flat, grip slightly wider than shoulders. Lower the bar to your mid-chest with control, then press powerfully upward.',               emoji:'🏋️' },
  { id:10, cat:'chest', name:'Push-Ups',               diff:'easy', sets:4, reps:'15–20',    rest:'60s',   desc:'Hands just outside shoulder-width. Keep your body in a straight line from head to heels. Chest touches the floor each rep.',             emoji:'💪' },
  { id:11, cat:'chest', name:'Dumbbell Shoulder Press',diff:'med',  sets:4, reps:'10–12',    rest:'90s',   desc:'Seated or standing. Press dumbbells overhead until arms are almost fully extended, then lower to ear level with control.',                emoji:'🎽' },
  { id:12, cat:'chest', name:'Bicep Curls',            diff:'easy', sets:3, reps:'12–15',    rest:'60s',   desc:'Standing with dumbbells. Curl the weight up by contracting your biceps, keeping elbows pinned to your sides throughout.',                emoji:'💪' },
  { id:13, cat:'chest', name:'Tricep Dips',            diff:'med',  sets:3, reps:'10–15',    rest:'75s',   desc:'On parallel bars or a bench. Lower until upper arms are parallel to the floor, then push up. Lean forward to hit chest more.',           emoji:'🤸' },
  { id:14, cat:'chest', name:'Lateral Raises',         diff:'easy', sets:3, reps:'15–20',    rest:'45s',   desc:'Raise dumbbells out to your sides until arms are parallel to the floor. Lead with your elbows, slight bend in the arm.',                 emoji:'🦅' },
  { id:15, cat:'cardio',name:'Hill Sprints',           diff:'hard', sets:8, reps:'30s sprint',rest:'90s',  desc:"Find a moderate hill. Sprint up at 90% effort, walk down for recovery. One of Kenya's most beloved cardio traditions.",                  emoji:'⛰️' },
  { id:16, cat:'cardio',name:'Jump Rope',              diff:'med',  sets:5, reps:'3 min',    rest:'60s',   desc:'Double-under intervals mixed with standard jumps. Great for footwork, coordination, and cardiovascular endurance.',                       emoji:'🪢' },
  { id:17, cat:'cardio',name:'Burpees',                diff:'hard', sets:4, reps:'15 reps',  rest:'75s',   desc:'Full body explosive movement. Drop to a push-up, jump feet to hands, then explode upward with a jump and clap overhead.',                emoji:'🔥' },
  { id:18, cat:'cardio',name:'Long Run',               diff:'med',  sets:1, reps:'30–45 min',rest:'—',     desc:'Steady-state aerobic run at 60–70% max heart rate. Perfect for building your aerobic base the Kenyan way.',                              emoji:'🏃' },
];

const meals = [
  { id:1,  cat:'breakfast', name:'Uji wa Wimbi',         emoji:'🥣', tag:'Breakfast', desc:'Finger millet porridge — a classic Kenyan breakfast rich in iron and complex carbs to fuel your morning training session.',              cal:280, pro:8,  carb:52 },
  { id:2,  cat:'breakfast', name:'Eggs & Avocado Toast', emoji:'🥑', tag:'Breakfast', desc:'Scrambled eggs on whole-grain bread with sliced avocado. High protein, healthy fats — perfect post-morning workout meal.',              cal:380, pro:22, carb:28 },
  { id:3,  cat:'breakfast', name:'Mandazi & Chai',       emoji:'☕', tag:'Breakfast', desc:'Lightly sweetened mandazi with spiced Kenyan chai. A lighter pre-workout option for early risers.',                                     cal:310, pro:7,  carb:54 },
  { id:4,  cat:'lunch',     name:'Ugali & Sukuma Wiki',  emoji:'🌿', tag:'Lunch',     desc:"Kenya's staple — stiff maize meal with braised kale. High carb energy with iron-rich greens. Add nyama for extra protein.",            cal:520, pro:18, carb:88 },
  { id:5,  cat:'lunch',     name:'Githeri',              emoji:'🫘', tag:'Lunch',     desc:'Boiled maize and beans — a complete protein source beloved upcountry. Add tomatoes and onions for flavour and micronutrients.',         cal:440, pro:22, carb:72 },
  { id:6,  cat:'lunch',     name:'Nyama Choma & Kachumbari',emoji:'🥩',tag:'Lunch',  desc:'Grilled goat or beef with fresh tomato-onion salsa. High protein recovery meal — ideal after a hard strength session.',                 cal:580, pro:46, carb:12 },
  { id:7,  cat:'dinner',    name:'Pilau',                emoji:'🍚', tag:'Dinner',    desc:'Spiced rice with meat and aromatic spices. A post-workout dinner that replenishes glycogen and satisfies your whole family.',           cal:610, pro:28, carb:82 },
  { id:8,  cat:'dinner',    name:'Tilapia & Ugali',      emoji:'🐟', tag:'Dinner',    desc:'Fried or grilled tilapia with ugali and sukuma. Lean protein from Lake Victoria fish with excellent essential amino acid profile.',     cal:490, pro:38, carb:56 },
  { id:9,  cat:'dinner',    name:'Mukimo',               emoji:'🥔', tag:'Dinner',    desc:'Mashed potatoes, maize, peas and greens. A nutrient-dense Kikuyu classic loaded with vitamins and complex carbohydrates.',             cal:460, pro:14, carb:80 },
  { id:10, cat:'snack',     name:'Roasted Groundnuts',   emoji:'🥜', tag:'Snack',     desc:"A handful of dry-roasted groundnuts. Packed with healthy fats, protein and energy — Kenya's ultimate on-the-go snack.",               cal:180, pro:8,  carb:6  },
  { id:11, cat:'snack',     name:'Boiled Maize',         emoji:'🌽', tag:'Snack',     desc:'Roadside boiled maize — a clean carb snack. Light, filling, and sold on every street corner across Kenya.',                           cal:140, pro:4,  carb:30 },
  { id:12, cat:'snack',     name:'Passion Fruit & Yoghurt',emoji:'🍑',tag:'Snack',   desc:'Fresh passion fruit blended with Kenyan yoghurt. Rich in probiotics, Vitamin C and natural sugars for quick energy.',                  cal:160, pro:6,  carb:24 },
];

// ===== STATE =====
let workoutFilter = 'all';
let mealFilter    = 'all';
let workoutLog    = JSON.parse(localStorage.getItem('pulse254_log') || '[]');
let timerSeconds  = 90;
let timerTotal    = 90;
let timerRunning  = false;
let timerInterval = null;

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  if (page === 'workouts')  renderWorkouts();
  if (page === 'nutrition') renderMeals();
  if (page === 'progress')  renderProgress();
  window.scrollTo(0, 0);
}

// ===== WORKOUTS =====
function filterWorkouts(cat, btn) {
  workoutFilter = cat;
  document.querySelectorAll('.workout-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderWorkouts();
}

function renderWorkouts() {
  const grid = document.getElementById('workout-grid');
  const filtered = workoutFilter === 'all' ? workouts : workouts.filter(w => w.cat === workoutFilter);
  grid.innerHTML = filtered.map(w => `
    <div class="workout-card">
      <div class="workout-card-header">
        <div class="workout-category">${catLabel(w.cat)}</div>
        <div class="difficulty diff-${diffClass(w.diff)}">${w.diff}</div>
      </div>
      <h3>${w.emoji} ${w.name}</h3>
      <p>${w.desc}</p>
      <div class="workout-meta">
        <div class="meta-item"><strong>${w.sets}</strong>Sets</div>
        <div class="meta-item"><strong>${w.reps}</strong>Reps</div>
        <div class="meta-item"><strong>${w.rest}</strong>Rest</div>
      </div>
      <button class="log-btn" onclick="logWorkout(${w.id})">✓ Log This Workout</button>
    </div>
  `).join('');
}

function catLabel(cat) {
  const map = { upper:'Upper Body', lower:'Lower Body', chest:'Chest, Hands & Shoulders', cardio:'Cardio' };
  return map[cat] || cat;
}

function diffClass(d) {
  if (d === 'easy') return 'easy';
  if (d === 'hard') return 'hard';
  return 'med';
}

function logWorkout(id) {
  const w = workouts.find(x => x.id === id);
  const entry = {
    id: w.id, name: w.name, cat: w.cat,
    emoji: w.emoji, sets: w.sets, reps: w.reps,
    date: new Date().toISOString()
  };
  workoutLog.unshift(entry);
  localStorage.setItem('pulse254_log', JSON.stringify(workoutLog));
  showToast(`<span class="green">✓ Logged!</span> ${w.name} — ${w.sets} sets`);
}

// ===== MEALS =====
function filterMeals(cat, btn) {
  mealFilter = cat;
  document.querySelectorAll('.workout-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMeals();
}

function renderMeals() {
  const grid = document.getElementById('meal-grid');
  const filtered = mealFilter === 'all' ? meals : meals.filter(m => m.cat === mealFilter);
  grid.innerHTML = filtered.map(m => `
    <div class="meal-card">
      <div class="meal-emoji">${m.emoji}</div>
      <div class="meal-body">
        <div class="meal-tag">${m.tag}</div>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="macro-row">
          <div class="macro cal"><div class="val">${m.cal}</div><div class="lbl">Calories</div></div>
          <div class="macro pro"><div class="val">${m.pro}g</div><div class="lbl">Protein</div></div>
          <div class="macro carb"><div class="val">${m.carb}g</div><div class="lbl">Carbs</div></div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== PROGRESS =====
function renderProgress() {
  renderLog();
  renderWeek();
  renderStats();
}

function renderLog() {
  const list = document.getElementById('log-list');
  if (!workoutLog.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="icon">📋</div>
        <p>No workouts logged yet.<br>Head to workouts and start your first session!</p>
      </div>`;
    return;
  }
  list.innerHTML = workoutLog.slice(0, 15).map(e => {
    const d = new Date(e.date);
    return `
      <div class="log-item">
        <div class="log-dot">${e.emoji}</div>
        <div class="log-info">
          <div class="name">${e.name}</div>
          <div class="time">${catLabel(e.cat)} · ${formatDate(d)}</div>
        </div>
        <div class="log-sets">${e.sets}×${e.reps}</div>
      </div>`;
  }).join('');
}

function renderWeek() {
  const grid = document.getElementById('week-grid');
  const today = new Date();
  const days = ['S','M','T','W','T','F','S'];
  grid.innerHTML = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    const done = workoutLog.some(e => new Date(e.date).toDateString() === d.toDateString());
    return `
      <div class="day-box ${done ? 'done' : ''}">
        <span class="day-num">${d.getDate()}</span>
        <span>${days[d.getDay()]}</span>
      </div>`;
  }).join('');

  // compute streak
  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    if (workoutLog.some(e => new Date(e.date).toDateString() === d.toDateString())) {
      streak++;
    } else {
      break;
    }
  }
  document.getElementById('streak-info').innerHTML = `<strong>${streak} day</strong> current streak 🔥`;
}

function renderStats() {
  const total = workoutLog.length;
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  const thisWeek = workoutLog.filter(e => new Date(e.date) >= weekStart).length;

  let streak = 0;
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    if (workoutLog.some(e => new Date(e.date).toDateString() === d.toDateString())) {
      streak++;
    } else {
      break;
    }
  }

  const catCount = {};
  workoutLog.forEach(e => { catCount[e.cat] = (catCount[e.cat] || 0) + 1; });
  const topCat = Object.keys(catCount).sort((a, b) => catCount[b] - catCount[a])[0];

  document.getElementById('stat-total').textContent  = total;
  document.getElementById('stat-week').textContent   = thisWeek;
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-fav').textContent    = topCat ? catLabel(topCat).split(' ')[0] : '—';
}

function formatDate(d) {
  const now = new Date();
  if (d.toDateString() === now.toDateString()) {
    return 'Today ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return d.toLocaleDateString('en-KE', { day: 'numeric', month: 'short' });
}

// ===== TIMER =====
function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  document.getElementById('timer-display').textContent =
    `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  const pct = (timerSeconds / timerTotal) * 100;
  document.getElementById('timer-bar').style.width = pct + '%';
  const disp = document.getElementById('timer-display');
  if (timerRunning) {
    disp.classList.add('running');
    disp.classList.remove('rest');
  } else {
    disp.classList.remove('running');
  }
}

function timerToggle() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timer-start-btn').textContent = 'Resume';
  } else {
    timerRunning = true;
    document.getElementById('timer-start-btn').textContent = 'Pause';
    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('timer-start-btn').textContent = 'Start';
        document.getElementById('timer-display').classList.add('rest');
        showToast('⏱️ <span class="green">Rest complete!</span> Time for next set.');
      }
    }, 1000);
  }
}

function timerReset() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = timerTotal;
  document.getElementById('timer-start-btn').textContent = 'Start';
  updateTimerDisplay();
}

function setTimer(secs) {
  clearInterval(timerInterval);
  timerRunning  = false;
  timerSeconds  = secs;
  timerTotal    = secs;
  document.getElementById('timer-start-btn').textContent = 'Start';
  updateTimerDisplay();
}

// ===== AUTH =====
function showAuthTab(tab) {
  document.getElementById('form-signin').style.display = tab === 'signin' ? 'block' : 'none';
  document.getElementById('form-signup').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('tab-signin').classList.toggle('active', tab === 'signin');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
}

function handleSignin() {
  const email = document.getElementById('signin-email').value.trim();
  const pass  = document.getElementById('signin-pass').value;
  if (!email || !pass) { showToast('Please fill in all fields.'); return; }
  showToast(`<span class="green">Welcome back!</span> Signed in as ${email}`);
  setTimeout(() => navigate('home'), 1200);
}

function handleSignup() {
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass  = document.getElementById('signup-pass').value;
  if (!name || !email || !pass) { showToast('Please fill in all fields.'); return; }
  if (pass.length < 6) { showToast('Password must be at least 6 characters.'); return; }
  showToast(`<span class="green">Account created!</span> Welcome, ${name.split(' ')[0]}! 🇰🇪`);
  setTimeout(() => navigate('home'), 1200);
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== INIT =====
updateTimerDisplay();
renderWorkouts();
renderMeals();
