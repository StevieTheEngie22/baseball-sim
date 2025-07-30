const firstNames = [
  "Aaron", "Abel", "Abraham", "Adam", "Adrian", "Aidan", "Alan", "Albert", "Alec", "Alex", "Alexander", "Alfred", "Andre", "Andrew", "Angelo", "Anthony", "Antonio", "Archer", "Arthur", "Ashton", "Austin", "Axel",
  "Barry", "Beau", "Benjamin", "Bennett", "Blake", "Bobby", "Brad", "Bradley", "Brandon", "Brayden", "Brendan", "Brett", "Brian", "Brody", "Bruce", "Bruno", "Bryan", "Bryce",
  "Caleb", "Calvin", "Cameron", "Carl", "Carlos", "Carson", "Carter", "Casey", "Cedric", "Chad", "Chandler", "Charles", "Chase", "Chester", "Chris", "Christian", "Christopher", "Clarence", "Clark", "Clayton", "Clifford", "Clint", "Cole", "Colin", "Colton", "Connor", "Cooper", "Corey", "Craig", "Curtis", "Cyrus",
  "Dale", "Damian", "Daniel", "Danny", "Darius", "Dave", "David", "Dean", "Dennis", "Derek", "Devin", "Diego", "Dominic", "Donald", "Douglas", "Drake", "Drew", "Duncan", "Dustin", "Dylan",
  "Earl", "Eddie", "Edgar", "Edward", "Edwin", "Eli", "Elijah", "Elliott", "Ellis", "Emanuel", "Emilio", "Eric", "Ernest", "Ethan", "Eugene", "Evan", "Everett", "Ezra",
  "Felix", "Fernando", "Finn", "Floyd", "Francis", "Frank", "Franklin", "Frederick", "Fritz",
  "Gabriel", "Gage", "Garrett", "Gary", "Gavin", "George", "Gerald", "Gilbert", "Glen", "Glenn", "Gordon", "Graham", "Grant", "Gregory", "Griffin", "Gunnar", "Guy",
  "Harold", "Harrison", "Harry", "Harvey", "Hayden", "Heath", "Hector", "Henry", "Herbert", "Howard", "Hugh", "Hunter",
  "Ian", "Irving", "Isaac", "Isaiah", "Ivan",
  "Jack", "Jackson", "Jacob", "Jake", "James", "Jared", "Jason", "Jasper", "Javier", "Jay", "Jeffrey", "Jeremy", "Jerome", "Jerry", "Jesse", "Jesus", "Jim", "Joel", "John", "Johnny", "Jonathan", "Jordan", "Jorge", "Jose", "Joseph", "Joshua", "Juan", "Julian", "Julius", "Justin",
  "Keith", "Kelly", "Kenneth", "Kevin", "Kirk", "Kyle",
  "Lance", "Landon", "Larry", "Lawrence", "Lee", "Leo", "Leonard", "Leroy", "Lewis", "Liam", "Lincoln", "Logan", "Lorenzo", "Louis", "Lucas", "Luis", "Luke", "Luther",
  "Malcolm", "Manuel", "Marc", "Marco", "Marcus", "Mario", "Mark", "Marshall", "Martin", "Mason", "Matthew", "Maurice", "Max", "Maxwell", "Michael", "Miguel", "Miles", "Mitchell", "Morgan",
  "Nathan", "Nathaniel", "Neil", "Nelson", "Nicholas", "Nick", "Noah", "Nolan", "Norman",
  "Oliver", "Omar", "Orlando", "Oscar", "Owen",
  "Pablo", "Parker", "Patrick", "Paul", "Pedro", "Perry", "Peter", "Philip", "Phillip", "Pierce", "Preston",
  "Quincy", "Quinn",
  "Rafael", "Ralph", "Ramon", "Randall", "Randy", "Ray", "Raymond", "Reed", "Reginald", "Rex", "Ricardo", "Richard", "Rick", "Riley", "Robert", "Roberto", "Robin", "Rodney", "Roger", "Roland", "Roman", "Ronald", "Ross", "Roy", "Ruben", "Russell", "Ryan",
  "Salvador", "Sam", "Samuel", "Santiago", "Scott", "Sean", "Sebastian", "Sergio", "Seth", "Shane", "Shawn", "Simon", "Spencer", "Stanley", "Stephen", "Steve", "Steven", "Stewart",
  "Taylor", "Ted", "Terence", "Terry", "Theodore", "Thomas", "Timothy", "Todd", "Tom", "Tony", "Travis", "Trevor", "Troy", "Tyler",
  "Ulysses",
  "Vernon", "Victor", "Vincent", "Vince",
  "Wade", "Wallace", "Walter", "Warren", "Wayne", "Wesley", "William", "Willie", "Winston", "Wyatt",
  "Xavier",
  "Zachary", "Zane"
];

const lastNames = [
  "Abbott", "Adams", "Alexander", "Allen", "Anderson", "Armstrong", "Arnold", "Austin",
  "Bailey", "Baker", "Baldwin", "Ball", "Barnes", "Barrett", "Bates", "Bell", "Bennett", "Bishop", "Black", "Blake", "Boyd", "Bradley", "Brooks", "Brown", "Bryant", "Burke", "Burns", "Butler",
  "Campbell", "Carpenter", "Carroll", "Carter", "Casey", "Castillo", "Castro", "Chapman", "Clark", "Cole", "Coleman", "Collins", "Cook", "Cooper", "Cox", "Crawford", "Cruz",
  "Daniels", "Davis", "Dean", "Diaz", "Dixon", "Duncan", "Dunn",
  "Edwards", "Elliott", "Ellis", "Evans",
  "Ferguson", "Fernandez", "Fields", "Fisher", "Fleming", "Fletcher", "Flores", "Ford", "Foster", "Fox", "Franklin", "Freeman",
  "Garcia", "Gardner", "Gibson", "Gilbert", "Gomez", "Gonzalez", "Gordon", "Graham", "Grant", "Gray", "Green", "Griffin", "Gutierrez",
  "Hall", "Hamilton", "Hansen", "Harper", "Harris", "Harrison", "Hart", "Harvey", "Hayes", "Henderson", "Henry", "Hernandez", "Hicks", "Hill", "Hoffman", "Holmes", "Howard", "Hudson", "Hughes", "Hunt", "Hunter",
  "Jackson", "James", "Jenkins", "Johnson", "Johnston", "Jones", "Jordan",
  "Kelly", "Kennedy", "Kim", "King", "Knight",
  "Lane", "Lawrence", "Lee", "Lewis", "Little", "Long", "Lopez", "Love",
  "Marshall", "Martin", "Martinez", "Mason", "Matthews", "May", "McDonald", "Miller", "Mills", "Mitchell", "Moore", "Morales", "Morgan", "Morris", "Murphy", "Murray",
  "Nelson", "Newman", "Nguyen", "Nichols", "Norman",
  "Oliver", "Olson", "Ortiz", "Owens",
  "Palmer", "Parker", "Patterson", "Payne", "Perez", "Perry", "Peters", "Peterson", "Phillips", "Pierce", "Porter", "Powell", "Price",
  "Quinn",
  "Ramirez", "Ray", "Reed", "Reid", "Reyes", "Reynolds", "Rice", "Richards", "Richardson", "Riley", "Rivera", "Roberts", "Robertson", "Robinson", "Rodriguez", "Rogers", "Rose", "Ross", "Russell", "Ryan",
  "Sanchez", "Sanders", "Schmidt", "Scott", "Shaw", "Simmons", "Simpson", "Smith", "Snyder", "Spencer", "Stevens", "Stewart", "Stone", "Sullivan", "Sutton",
  "Taylor", "Thomas", "Thompson", "Torres", "Tucker", "Turner",
  "Vargas", "Vasquez",
  "Wagner", "Walker", "Wallace", "Walsh", "Ward", "Warren", "Washington", "Watson", "Webb", "Wells", "West", "Wheeler", "White", "Williams", "Wilson", "Wood", "Woods", "Wright",
  "Young",
  "Zimmerman"
];

function randomName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function getPositionName(positionNum) {
  const positions = {
    1: "the catcher",
    2: "first base",
    3: "second base",
    4: "shortstop",
    5: "third base",
    6: "the pitcher",
    7: "left field",
    8: "center field",
    9: "right field"
  };
  return positions[positionNum] || "unknown";
}

function createPlayers(teamPrefix, isPitcher = false) {
  const players = [];
  const count = isPitcher ? 5 : 9;
  
  // For position players, create an array of all positions and shuffle it
  let availablePositions = [];
  if (!isPitcher) {
    availablePositions = ["C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"];
    // Shuffle the array to randomize position assignments
    for (let i = availablePositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availablePositions[i], availablePositions[j]] = [availablePositions[j], availablePositions[i]];
    }
  }
  
  for (let i = 0; i < count; i++) {
    const player = {
      name: randomName(),
      position: isPitcher ? "P" : availablePositions[i] || "UTIL" // Fallback to UTIL if somehow we run out of positions
    };
    if (!isPitcher) {
      player.contact = Math.floor(Math.random() * 60) + 40;
      player.power = Math.floor(Math.random() * 60) + 40;
      player.speed = Math.floor(Math.random() * 60) + 40;
      player.defense = Math.floor(Math.random() * 60) + 40;
      player.atBats = 0;
      player.hits = 0;
      player.runs = 0;
      player.rbis = 0;
      player.doubles = 0;
      player.triples = 0;
      player.homeRuns = 0;
      player.walks = 0;
      player.strikeouts = 0;
      player.careerStats = {
        games: 0,
        atBats: 0,
        hits: 0,
        runs: 0,
        rbis: 0,
        doubles: 0,
        triples: 0,
        homeRuns: 0,
        walks: 0,
        strikeouts: 0
      };
    } else {
      player.control = Math.floor(Math.random() * 60) + 40;
      player.movement = Math.floor(Math.random() * 60) + 40;
      player.velocity = Math.floor(Math.random() * 60) + 40;
      player.stamina = Math.floor(Math.random() * 60) + 40;
    }
    players.push(player);
  }
  return players;
}

function createTeam() {
  const hitters = createPlayers("Team", false);
  const startingPitchers = createPlayers("Team", true);
  const bullpen = createPlayers("Team", true);
  return [...hitters, ...startingPitchers, ...bullpen];
}

function saveTeamsToStorage() {
  try {
    localStorage.setItem('team1Players', JSON.stringify(team1Players));
    localStorage.setItem('team2Players', JSON.stringify(team2Players));
    localStorage.setItem('team1Order', JSON.stringify(team1Order));
    localStorage.setItem('team2Order', JSON.stringify(team2Order));
    localStorage.setItem('team1PitcherOrder', JSON.stringify(team1PitcherOrder));
    localStorage.setItem('team2PitcherOrder', JSON.stringify(team2PitcherOrder));
    localStorage.setItem('team1BullpenOrder', JSON.stringify(team1BullpenOrder));
    localStorage.setItem('team2BullpenOrder', JSON.stringify(team2BullpenOrder));
    localStorage.setItem('team1PitcherIndex', JSON.stringify(team1PitcherIndex));
    localStorage.setItem('team2PitcherIndex', JSON.stringify(team2PitcherIndex));
  } catch (e) {
    console.error("Error saving teams:", e);
  }
}

function loadTeamsFromStorage() {
  try {
    const team1 = JSON.parse(localStorage.getItem('team1Players')) || createTeam();
    const team2 = JSON.parse(localStorage.getItem('team2Players')) || createTeam();
    const team1Order = JSON.parse(localStorage.getItem('team1Order')) || Array.from({ length: 9 }, (_, i) => i);
    const team2Order = JSON.parse(localStorage.getItem('team2Order')) || Array.from({ length: 9 }, (_, i) => i);
    const team1PitcherOrder = JSON.parse(localStorage.getItem('team1PitcherOrder')) || Array.from({ length: 5 }, (_, i) => i + 9);
    const team2PitcherOrder = JSON.parse(localStorage.getItem('team2PitcherOrder')) || Array.from({ length: 5 }, (_, i) => i + 9);
    const team1BullpenOrder = JSON.parse(localStorage.getItem('team1BullpenOrder')) || Array.from({ length: 5 }, (_, i) => i + 14);
    const team2BullpenOrder = JSON.parse(localStorage.getItem('team2BullpenOrder')) || Array.from({ length: 5 }, (_, i) => i + 14);
    const team1PitcherIndex = JSON.parse(localStorage.getItem('team1PitcherIndex')) || 0;
    const team2PitcherIndex = JSON.parse(localStorage.getItem('team2PitcherIndex')) || 0;
    return { team1, team2, team1Order, team2Order, team1PitcherOrder, team2PitcherOrder, team1BullpenOrder, team2BullpenOrder, team1PitcherIndex, team2PitcherIndex };
  } catch (e) {
    console.error("Error loading teams:", e);
    return { team1: null, team2: null, team1Order: null, team2Order: null, team1PitcherOrder: null, team2PitcherOrder: null, team1BullpenOrder: null, team2BullpenOrder: null, team1PitcherIndex: 0, team2PitcherIndex: 0 };
  }
}

// Game control elements
const startGameBtn = document.getElementById('startGameBtn');
const resetTeamsBtn = document.getElementById('resetTeamsBtn');
const team1ScoreRow = document.getElementById('team1ScoreRow');
const team2ScoreRow = document.getElementById('team2ScoreRow');

// Game state variables
let team1Players, team2Players, team1Order, team2Order, team1PitcherOrder, team2PitcherOrder, team1BullpenOrder, team2BullpenOrder, team1PitcherIndex, team2PitcherIndex;
let inning = 1;
let outs = 0;
let team1Score = 0;
let team2Score = 0;
let team1BatterIndex = 0;
let team2BatterIndex = 0;
let topHalf = true;
let bases = [null, null, null];
const storedTeams = loadTeamsFromStorage();
if (storedTeams.team1 && storedTeams.team2) {
  team1Players = storedTeams.team1;
  team2Players = storedTeams.team2;
  team1Order = storedTeams.team1Order;
  team2Order = storedTeams.team2Order;
  team1PitcherOrder = storedTeams.team1PitcherOrder;
  team2PitcherOrder = storedTeams.team2PitcherOrder;
  team1BullpenOrder = storedTeams.team1BullpenOrder;
  team2BullpenOrder = storedTeams.team2BullpenOrder;
  team1PitcherIndex = storedTeams.team1PitcherIndex;
  team2PitcherIndex = storedTeams.team2PitcherIndex;
} else {
  const team1 = createTeam();
  const team2 = createTeam();
  team1Players = team1;
  team2Players = team2;
  team1Order = Array.from({ length: 9 }, (_, i) => i);
  team2Order = Array.from({ length: 9 }, (_, i) => i);
  team1PitcherOrder = Array.from({ length: 5 }, (_, i) => i + 9);
  team2PitcherOrder = Array.from({ length: 5 }, (_, i) => i + 9);
  team1BullpenOrder = Array.from({ length: 5 }, (_, i) => i + 14);
  team2BullpenOrder = Array.from({ length: 5 }, (_, i) => i + 14);
  team1PitcherIndex = 0;
  team2PitcherIndex = 0;
  saveTeamsToStorage();
}

function renderBoxScore() {
  const team1BoxBody = document.getElementById("team1BoxScoreBody");
  const team2BoxBody = document.getElementById("team2BoxScoreBody");
  if (!team1BoxBody || !team2BoxBody) {
    console.error("Box score elements not found");
    return;
  }

  team1BoxBody.innerHTML = "";
  team2BoxBody.innerHTML = "";

  team1Order.forEach(playerIndex => {
    const p = team1Players[playerIndex];
    if (!p) return;
    const row = document.createElement("tr");
    row.innerHTML = `<td><a href="#" class="player-link" data-team="1" data-index="${playerIndex}">${p.name}</a></td><td>${p.atBats}</td><td>${p.runs}</td><td>${p.hits}</td><td>${p.rbis}</td><td>${p.walks}</td><td>${p.strikeouts}</td><td>${p.homeRuns}</td>`;
    team1BoxBody.appendChild(row);
  });

  team2Order.forEach(playerIndex => {
    const p = team2Players[playerIndex];
    if (!p) return;
    const row = document.createElement("tr");
    row.innerHTML = `<td><a href="#" class="player-link" data-team="2" data-index="${playerIndex}">${p.name}</a></td><td>${p.atBats}</td><td>${p.runs}</td><td>${p.hits}</td><td>${p.rbis}</td><td>${p.walks}</td><td>${p.strikeouts}</td><td>${p.homeRuns}</td>`;
    team2BoxBody.appendChild(row);
  });

  document.querySelectorAll('.player-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const team = e.target.dataset.team;
      const index = e.target.dataset.index;
      showPlayerProfile(team, index);
    });
  });
}

function renderBaseRunners() {
  const base1 = document.getElementById("base1");
  const base2 = document.getElementById("base2");
  const base3 = document.getElementById("base3");
  if (base1 && base2 && base3) {
    base1.classList.toggle("occupied", bases[0] !== null);
    base2.classList.toggle("occupied", bases[1] !== null);
    base3.classList.toggle("occupied", bases[2] !== null);
  }
}

function renderGameStatus() {
  const gameStatus = document.getElementById("gameStatus");
  if (!gameStatus) return;
  const battingTeam = topHalf ? team1Players : team2Players;
  const battingOrder = topHalf ? team1Order : team2Order;
  const pitcherTeam = topHalf ? team2Players : team1Players;
  const pitcherOrder = topHalf ? team2PitcherOrder : team1PitcherOrder;
  const pitcherIndex = topHalf ? team2PitcherIndex : team1PitcherIndex;
  const batterIndex = topHalf ? team1BatterIndex : team2BatterIndex;
  const nextBatterIndex = (batterIndex + 1) % 9;
  const onDeckIndex = (batterIndex + 2) % 9;
  const batter = battingTeam[battingOrder[nextBatterIndex]];
  const onDeck = battingOrder[onDeckIndex] !== undefined ? battingTeam[battingOrder[onDeckIndex]] : null;
  const pitcher = pitcherTeam[pitcherOrder[pitcherIndex]];
  gameStatus.innerHTML = `Batting: ${batter?.name || "Unknown"} | On Deck: ${onDeck?.name || "Unknown"} | Pitching: ${pitcher?.name || "Unknown"}`;
}

function renderBattingOrder(teamPlayers, orderArray, containerId, isPitcher = false, isBullpen = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = isPitcher ? `<h3>${isBullpen ? "Bullpen" : "Starting Pitchers"}</h3>` : "<h3>Lineup</h3>";
  const ol = document.createElement("ol");
  container.appendChild(ol);

  orderArray.forEach((playerIndex, idx) => {
    const p = teamPlayers[playerIndex];
    if (!p) return;
    const li = document.createElement("li");
    li.id = containerId.includes("team1") ? 
      (isPitcher ? (isBullpen ? `team1-bullpen-${playerIndex}` : `team1-pitcher-${playerIndex}`) : `team1-player-${playerIndex}`) :
      (isPitcher ? (isBullpen ? `team2-bullpen-${playerIndex}` : `team2-pitcher-${playerIndex}`) : `team2-player-${playerIndex}`);
    li.draggable = true;
    li.ondragstart = isPitcher ? (isBullpen ? dragBullpen : dragPitcher) : drag;
    li.ondrop = isPitcher ? (isBullpen ? dropBullpen : dropPitcher) : drop;
    li.ondragover = allowDrop;

    const infoSpan = document.createElement("span");
    infoSpan.className = "playerInfo";
    const link = document.createElement("a");
    link.href = "#";
    link.className = "player-link";
    link.dataset.team = containerId.includes("team1") ? "1" : "2";
    link.dataset.index = playerIndex;
    link.textContent = p.name;
    link.title = isPitcher
      ? `Control: ${p.control}, Movement: ${p.movement}, Velocity: ${p.velocity}, Stamina: ${p.stamina}`
      : `Contact: ${p.contact}, Power: ${p.power}, Speed: ${p.speed}, Defense: ${p.defense}`;
    infoSpan.appendChild(link);
    li.appendChild(infoSpan);

    const controls = document.createElement("div");
    controls.className = "controls";

    const upBtn = document.createElement("button");
    upBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    upBtn.disabled = idx === 0;
    upBtn.onclick = () => {
      if (idx === 0) return;
      [orderArray[idx], orderArray[idx - 1]] = [orderArray[idx - 1], orderArray[idx]];
      renderBattingOrder(teamPlayers, orderArray, containerId, isPitcher, isBullpen);
      saveTeamsToStorage();
    };
    controls.appendChild(upBtn);

    const downBtn = document.createElement("button");
    downBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    downBtn.disabled = idx === orderArray.length - 1;
    downBtn.onclick = () => {
      if (idx === orderArray.length - 1) return;
      [orderArray[idx], orderArray[idx + 1]] = [orderArray[idx + 1], orderArray[idx]];
      renderBattingOrder(teamPlayers, orderArray, containerId, isPitcher, isBullpen);
      saveTeamsToStorage();
    };
    controls.appendChild(downBtn);

    li.appendChild(controls);
    ol.appendChild(li);
  });

  document.querySelectorAll('.player-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const team = e.target.dataset.team;
      const index = e.target.dataset.index;
      showPlayerProfile(team, index);
    });
  });
}

function updateScoreboard() {
  // Ensure score display elements exist
  const team1ScoreDisplay = document.getElementById("team1ScoreDisplay");
  const team2ScoreDisplay = document.getElementById("team2ScoreDisplay");
  if (!team1ScoreDisplay || !team2ScoreDisplay) {
    console.error("Score display elements not found");
    return;
  }
  // Update total scores
  team1ScoreDisplay.textContent = team1Score.toString();
  team2ScoreDisplay.textContent = team2Score.toString();
  // Ensure inning scores are not accumulated
  for (let i = 1; i < team1ScoreRow.cells.length; i++) {
    team1ScoreRow.cells[i].textContent = team1ScoreRow.cells[i].textContent || "0";
  }
  for (let i = 1; i < team2ScoreRow.cells.length; i++) {
    team2ScoreRow.cells[i].textContent = team2ScoreRow.cells[i].textContent || "0";
  }
  console.log(`Scoreboard updated: Team 1: ${team1Score}, Team 2: ${team2Score}`);
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragPitcher(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragBullpen(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const source = document.getElementById(data);
  const target = event.target.closest('li');
  if (source && target && source !== target && source.id.includes("player") && target.id.includes("player")) {
    const sourceTeam = source.id.startsWith("team1") ? 1 : 2;
    const targetTeam = target.id.startsWith("team1") ? 1 : 2;
    if (sourceTeam === targetTeam) {
      const sourceIndex = parseInt(source.id.split("-")[2]);
      const targetIndex = parseInt(target.id.split("-")[2]);
      const order = sourceTeam === 1 ? team1Order : team2Order;
      [order[sourceIndex], order[targetIndex]] = [order[targetIndex], order[sourceIndex]];
      saveTeamsToStorage();
      renderBattingOrder(team1Players, team1Order, "team1Order");
      renderBattingOrder(team2Players, team2Order, "team2Order");
    }
  }
}

function dropPitcher(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const source = document.getElementById(data);
  const target = event.target;
  if (source && target && source !== target && source.id.includes("pitcher") && target.id.includes("pitcher")) {
    const sourceTeam = source.id.startsWith("team1") ? 1 : 2;
    const targetTeam = target.id.startsWith("team1") ? 1 : 2;
    if (sourceTeam === targetTeam) {
      const sourceIndex = parseInt(source.id.split("-")[2]);
      const targetIndex = parseInt(target.id.split("-")[2]);
      const order = sourceTeam === 1 ? team1PitcherOrder : team2PitcherOrder;
      [order[sourceIndex - 9], order[targetIndex - 9]] = [order[targetIndex - 9], order[sourceIndex - 9]];
      saveTeamsToStorage();
      renderBattingOrder(team1Players, team1PitcherOrder, "team1PitcherOrder", true);
      renderBattingOrder(team2Players, team2PitcherOrder, "team2PitcherOrder", true);
    }
  }
}

function dropBullpen(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const source = document.getElementById(data);
  const target = event.target;
  if (source && target && source !== target && source.id.includes("bullpen") && target.id.includes("bullpen")) {
    const sourceTeam = source.id.startsWith("team1") ? 1 : 2;
    const targetTeam = target.id.startsWith("team1") ? 1 : 2;
    if (sourceTeam === targetTeam) {
      const sourceIndex = parseInt(source.id.split("-")[2]);
      const targetIndex = parseInt(target.id.split("-")[2]);
      const order = sourceTeam === 1 ? team1BullpenOrder : team2BullpenOrder;
      [order[sourceIndex - 14], order[targetIndex - 14]] = [order[targetIndex - 14], order[sourceIndex - 14]];
      saveTeamsToStorage();
      renderBattingOrder(team1Players, team1BullpenOrder, "team1BullpenOrder", true, true);
      renderBattingOrder(team2Players, team2BullpenOrder, "team2BullpenOrder", true, true);
    }
  }
}

function showPlayerProfile(team, index) {
  const player = team === "1" ? team1Players[index] : team2Players[index];
  const profileBody = document.getElementById("playerProfileBody");
  const modal = document.getElementById("playerProfile");
  
  if (!player || !profileBody || !modal) return;

  // Calculate advanced stats for position players
  if (player.position !== "P") {
    const { careerStats } = player;
    const currentGameStats = {
      atBats: player.atBats || 0,
      hits: player.hits || 0,
      runs: player.runs || 0,
      rbis: player.rbis || 0,
      doubles: player.doubles || 0,
      triples: player.triples || 0,
      homeRuns: player.homeRuns || 0,
      walks: player.walks || 0,
      strikeouts: player.strikeouts || 0
    };

    // Career calculations
    const careerAvg = careerStats.atBats > 0 ? (careerStats.hits / careerStats.atBats).toFixed(3) : "0.000";
    const careerOBP = (careerStats.atBats + careerStats.walks) > 0 ? 
      ((careerStats.hits + careerStats.walks) / (careerStats.atBats + careerStats.walks)).toFixed(3) : "0.000";
    const careerSLG = careerStats.atBats > 0 ? 
      ((careerStats.hits - careerStats.doubles - careerStats.triples - careerStats.homeRuns + 
        2 * careerStats.doubles + 3 * careerStats.triples + 4 * careerStats.homeRuns) / careerStats.atBats).toFixed(3) : "0.000";
    const careerOPS = (parseFloat(careerOBP) + parseFloat(careerSLG)).toFixed(3);

    // Current game calculations
    const gameAvg = currentGameStats.atBats > 0 ? (currentGameStats.hits / currentGameStats.atBats).toFixed(3) : "0.000";
    const gameOBP = (currentGameStats.atBats + currentGameStats.walks) > 0 ? 
      ((currentGameStats.hits + currentGameStats.walks) / (currentGameStats.atBats + currentGameStats.walks)).toFixed(3) : "0.000";

    // Rating colors based on value
    const getRatingColor = (rating) => {
      if (rating >= 80) return '#48bb78'; // Green
      if (rating >= 70) return '#ed8936'; // Orange
      if (rating >= 60) return '#ecc94b'; // Yellow
      return '#f56565'; // Red
    };

    profileBody.innerHTML = `
      <div class="player-profile-header">
        <h2>${player.name}</h2>
        <div class="position-badge">${player.position}</div>
      </div>
      
      <div class="profile-section">
        <h3><i class="fas fa-star"></i> Player Ratings</h3>
        <div class="ratings-grid">
          <div class="rating-item">
            <span class="rating-label">Contact</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.contact}%; background-color: ${getRatingColor(player.contact)}"></div>
              <span class="rating-value">${player.contact}</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">Power</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.power}%; background-color: ${getRatingColor(player.power)}"></div>
              <span class="rating-value">${player.power}</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">Speed</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.speed}%; background-color: ${getRatingColor(player.speed)}"></div>
              <span class="rating-value">${player.speed}</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">Defense</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.defense}%; background-color: ${getRatingColor(player.defense)}"></div>
              <span class="rating-value">${player.defense}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <h3><i class="fas fa-chart-line"></i> Current Game Stats</h3>
        <div class="stats-grid">
          <div class="stat-item"><span class="stat-label">AB</span><span class="stat-value">${currentGameStats.atBats}</span></div>
          <div class="stat-item"><span class="stat-label">H</span><span class="stat-value">${currentGameStats.hits}</span></div>
          <div class="stat-item"><span class="stat-label">R</span><span class="stat-value">${currentGameStats.runs}</span></div>
          <div class="stat-item"><span class="stat-label">RBI</span><span class="stat-value">${currentGameStats.rbis}</span></div>
          <div class="stat-item"><span class="stat-label">2B</span><span class="stat-value">${currentGameStats.doubles}</span></div>
          <div class="stat-item"><span class="stat-label">3B</span><span class="stat-value">${currentGameStats.triples}</span></div>
          <div class="stat-item"><span class="stat-label">HR</span><span class="stat-value">${currentGameStats.homeRuns}</span></div>
          <div class="stat-item"><span class="stat-label">BB</span><span class="stat-value">${currentGameStats.walks}</span></div>
          <div class="stat-item"><span class="stat-label">SO</span><span class="stat-value">${currentGameStats.strikeouts}</span></div>
          <div class="stat-item highlight"><span class="stat-label">AVG</span><span class="stat-value">${gameAvg}</span></div>
          <div class="stat-item highlight"><span class="stat-label">OBP</span><span class="stat-value">${gameOBP}</span></div>
        </div>
      </div>

      <div class="profile-section">
        <h3><i class="fas fa-trophy"></i> Career Stats</h3>
        <div class="stats-grid">
          <div class="stat-item"><span class="stat-label">Games</span><span class="stat-value">${careerStats.games}</span></div>
          <div class="stat-item"><span class="stat-label">AB</span><span class="stat-value">${careerStats.atBats}</span></div>
          <div class="stat-item"><span class="stat-label">H</span><span class="stat-value">${careerStats.hits}</span></div>
          <div class="stat-item"><span class="stat-label">R</span><span class="stat-value">${careerStats.runs}</span></div>
          <div class="stat-item"><span class="stat-label">RBI</span><span class="stat-value">${careerStats.rbis}</span></div>
          <div class="stat-item"><span class="stat-label">2B</span><span class="stat-value">${careerStats.doubles}</span></div>
          <div class="stat-item"><span class="stat-label">3B</span><span class="stat-value">${careerStats.triples}</span></div>
          <div class="stat-item"><span class="stat-label">HR</span><span class="stat-value">${careerStats.homeRuns}</span></div>
          <div class="stat-item"><span class="stat-label">BB</span><span class="stat-value">${careerStats.walks}</span></div>
          <div class="stat-item"><span class="stat-label">SO</span><span class="stat-value">${careerStats.strikeouts}</span></div>
          <div class="stat-item highlight"><span class="stat-label">AVG</span><span class="stat-value">${careerAvg}</span></div>
          <div class="stat-item highlight"><span class="stat-label">OBP</span><span class="stat-value">${careerOBP}</span></div>
          <div class="stat-item highlight"><span class="stat-label">SLG</span><span class="stat-value">${careerSLG}</span></div>
          <div class="stat-item highlight"><span class="stat-label">OPS</span><span class="stat-value">${careerOPS}</span></div>
        </div>
      </div>
    `;
  } else {
    // Pitcher profile
    profileBody.innerHTML = `
      <div class="player-profile-header">
        <h2>${player.name}</h2>
        <div class="position-badge pitcher">Pitcher</div>
      </div>
      
      <div class="profile-section">
        <h3><i class="fas fa-star"></i> Pitching Ratings</h3>
        <div class="ratings-grid">
          <div class="rating-item">
            <span class="rating-label">Control</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.control}%; background-color: ${getRatingColor(player.control)}"></div>
              <span class="rating-value">${player.control}</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">Movement</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.movement}%; background-color: ${getRatingColor(player.movement)}"></div>
              <span class="rating-value">${player.movement}</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">Velocity</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.velocity}%; background-color: ${getRatingColor(player.velocity)}"></div>
              <span class="rating-value">${player.velocity}</span>
            </div>
          </div>
          <div class="rating-item">
            <span class="rating-label">Stamina</span>
            <div class="rating-bar">
              <div class="rating-fill" style="width: ${player.stamina}%; background-color: ${getRatingColor(player.stamina)}"></div>
              <span class="rating-value">${player.stamina}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-section">
        <h3><i class="fas fa-info-circle"></i> Pitcher Details</h3>
        <div class="pitcher-info">
          <p><strong>Specialty:</strong> ${player.velocity >= 80 ? 'Power Pitcher' : player.control >= 80 ? 'Control Specialist' : player.movement >= 80 ? 'Breaking Ball Expert' : 'Balanced Pitcher'}</p>
          <p><strong>Style:</strong> ${player.stamina >= 75 ? 'Starter' : 'Reliever'}</p>
          <p><strong>Overall Rating:</strong> ${Math.round((player.control + player.movement + player.velocity + player.stamina) / 4)}</p>
        </div>
      </div>
    `;
  }

  // Show the modal
  modal.style.display = 'flex';
  modal.classList.add('active');

  // Add event listener to close the modal
  const closeModal = document.getElementById("closeProfileBtn");
  if (closeModal) {
    closeModal.onclick = () => {
      modal.style.display = 'none';
      modal.classList.remove('active');
    };
  }
}

function simulateAtBat(player, runners, teamPlayers) {
  if (!player || !runners || !teamPlayers) {
    console.error("Invalid input in simulateAtBat");
    return { result: "out", type: "Struck out", position: 1 };
  }
  const contactBase = player.contact * 0.22034 + 10.1864;
  const contactVariance = (Math.random() - 0.5) * 1.5;
  const contactChance = contactBase + contactVariance;
  const roll = Math.random() * 100;

  if (roll >= 93) {
    player.walks++;
    return { result: "walk", position: 0 };
  }

  const runnerOn3rd = runners[2] !== null && typeof runners[2] === "number";
  const runnerOn2nd = runners[1] !== null && typeof runners[1] === "number";
  const runnerOn1st = runners[0] !== null && typeof runners[1] === "number";

  if (roll > contactChance) {
    player.atBats++;
    const outTypes = ["Struck out", "Grounded out", "Flied out", "Popped up"];
    let outType = outTypes[Math.floor(Math.random() * outTypes.length)];

    if (outType === "Grounded out") {
      const hitterSpeed = player.speed || 50;
      const runner1Speed = runnerOn1st && teamPlayers[runners[0]] ? teamPlayers[runners[0]].speed : 50;
      const runner2Speed = runnerOn2nd && teamPlayers[runners[1]] ? teamPlayers[runners[1]].speed : 50;

      if (runnerOn1st && outs < 2) {
        const baseDPChance = 0.11;
        const baseFCChance = 0.25;
        const hitterSpeedModifier = (hitterSpeed - 70) * 0.001;
        const runnerSpeedModifier = (runner1Speed - 70) * 0.001;
        let dpChance = baseDPChance - hitterSpeedModifier - runnerSpeedModifier;
        let fcChance = baseFCChance - hitterSpeedModifier;
        let advanceChance = 1 - dpChance - fcChance;

        dpChance = Math.max(0, Math.min(dpChance, 1));
        fcChance = Math.max(0, Math.min(fcChance, 1 - dpChance));
        advanceChance = 1 - dpChance - fcChance;

        const outcomeRoll = Math.random();
        if (outcomeRoll < dpChance) {
          return { result: "out", type: "double play", position: 4 };
        } else if (outcomeRoll < dpChance + fcChance) {
          return { result: "out", type: "fielders_choice", position: 4 };
        } else {
          return { result: "out", type: "groundout_advance", position: 4 };
        }
      } else if (runnerOn2nd && !runnerOn1st) {
        const advanceChance = 0.30 + (runner2Speed - 70) * 0.005;
        if (Math.random() < advanceChance) {
          return { result: "out", type: "groundout_advance_2nd", position: 4 };
        }
        return { result: "out", type: "groundout_hold", position: 4 };
      } else if (runnerOn3rd && !runnerOn1st && !runnerOn2nd) {
        const scoreChance = 0.10 + (runner2Speed - 70) * 0.005;
        if (Math.random() < scoreChance) {
          return { result: "out", type: "groundout_score_3rd", position: 4 };
        }
        return { result: "out", type: "groundout_hold", position: 4 };
      } else if (runnerOn1st && runnerOn2nd) {
        const baseDPChance = 0.11;
        const baseFCLeadOutChance = 0.15;
        const baseFC2ndOutChance = 0.25;
        const hitterSpeedModifier = (hitterSpeed - 70) * 0.001;
        const runner1SpeedModifier = (runner1Speed - 70) * 0.001;
        const runner2SpeedModifier = (runner2Speed - 70) * 0.001;
        let dpChance = baseDPChance - hitterSpeedModifier - runner1SpeedModifier;
        let fcLeadOutChance = baseFCLeadOutChance - hitterSpeedModifier;
        let fc2ndOutChance = baseFC2ndOutChance - hitterSpeedModifier;
        let advanceBothChance = 0.40 + (runner2Speed - 70) * 0.005;
        let advanceLeadOnlyChance = 1 - dpChance - fcLeadOutChance - fc2ndOutChance - advanceBothChance;

        dpChance = Math.max(0, Math.min(dpChance, 1));
        fcLeadOutChance = Math.max(0, Math.min(fcLeadOutChance, 1 - dpChance));
        fc2ndOutChance = Math.max(0, Math.min(fc2ndOutChance, 1 - dpChance - fcLeadOutChance));
        advanceBothChance = Math.max(0, Math.min(advanceBothChance, 1 - dpChance - fcLeadOutChance - fc2ndOutChance));
        advanceLeadOnlyChance = 1 - dpChance - fcLeadOutChance - fc2ndOutChance - advanceBothChance;

        const outcomeRoll = Math.random();
        if (outcomeRoll < dpChance) {
          return { result: "out", type: "double play", position: 4 };
        } else if (outcomeRoll < dpChance + fcLeadOutChance) {
          return { result: "out", type: "fielders_choice_lead_out", position: 5 };
        } else if (outcomeRoll < dpChance + fcLeadOutChance + fc2ndOutChance) {
          return { result: "out", type: "fielders_choice_2nd_out", position: 4 };
        } else if (outcomeRoll < dpChance + fcLeadOutChance + fc2ndOutChance + advanceBothChance) {
          return { result: "out", type: "groundout_advance_both", position: 4 };
        } else {
          return { result: "out", type: "groundout_advance_lead", position: 4 };
        }
      } else if (runnerOn1st && runnerOn3rd) {
        const baseDPChance = 0.11;
        const baseFCChance = 0.25;
        const hitterSpeedModifier = (hitterSpeed - 70) * 0.001;
        const runner1SpeedModifier = (runner1Speed - 70) * 0.001;
        const runner3SpeedModifier = (runner2Speed - 70) * 0.005;
        let dpChance = baseDPChance - hitterSpeedModifier - runner1SpeedModifier;
        let fcChance = baseFCChance - hitterSpeedModifier;
        let advanceChance = 0.30 + runner3SpeedModifier;

        dpChance = Math.max(0, Math.min(dpChance, 1));
        fcChance = Math.max(0, Math.min(fcChance, 1 - dpChance));
        advanceChance = Math.max(0, Math.min(advanceChance, 1 - dpChance - fcChance));

        const outcomeRoll = Math.random();
        if (outcomeRoll < dpChance) {
          return { result: "out", type: "double play", position: 4 };
        } else if (outcomeRoll < dpChance + fcChance) {
          return { result: "out", type: "fielders_choice", position: 4 };
        } else {
          return { result: "out", type: "groundout_advance_rbi", position: 4 };
        }
      } else if (runnerOn2nd && runnerOn3rd) {
        const advanceChance = 0.30 + (runner2Speed - 70) * 0.005;
        if (Math.random() < advanceChance) {
          return { result: "out", type: "groundout_advance_rbi", position: 4 };
        }
        return { result: "out", type: "groundout_hold", position: 4 };
      } else if (runnerOn1st && runnerOn2nd && runnerOn3rd) {
        const baseDPChance = 0.11;
        const baseFCChance = 0.20;
        const hitterSpeedModifier = (hitterSpeed - 70) * 0.001;
        const runner1SpeedModifier = (runner1Speed - 70) * 0.001;
        const runner3SpeedModifier = (runner2Speed - 70) * 0.005;
        let dpChance = baseDPChance - hitterSpeedModifier - runner1SpeedModifier;
        let fcChance = baseFCChance - hitterSpeedModifier;
        let advanceAllChance = 0.30 + runner3SpeedModifier;
        let advanceOneChance = 1 - dpChance - fcChance - advanceAllChance;

        dpChance = Math.max(0, Math.min(dpChance, 1));
        fcChance = Math.max(0, Math.min(fcChance, 1 - dpChance));
        advanceAllChance = Math.max(0, Math.min(advanceAllChance, 1 - dpChance - fcChance));
        advanceOneChance = 1 - dpChance - fcChance - advanceAllChance;

        const outcomeRoll = Math.random();
        if (outcomeRoll < dpChance) {
          return { result: "out", type: "double play", position: 4 };
        } else if (outcomeRoll < dpChance + fcChance) {
          return { result: "out", type: "fielders_choice_home", position: 2 };
        } else if (outcomeRoll < dpChance + fcChance + advanceAllChance) {
          return { result: "out", type: "groundout_advance_all", position: 4 };
        } else {
          return { result: "out", type: "groundout_advance_one", position: 4 };
        }
      }
      return { result: "out", type: "groundout", position: 4 };
    }

    if (outType === "Flied out" && runnerOn3rd && outs < 2 && Math.random() < 0.55) {
      player.atBats--;
      return { result: "out", type: "sac fly", position: 8 };
    }

    if (outType === "Struck out") {
      player.strikeouts++;
      return { result: "out", type: "Struck out", position: 1 };
    }

    let fieldPosition = 1 + Math.floor(Math.random() * 9);
    if (outType === "Grounded out" || outType === "Popped up") {
      if (fieldPosition > 6) fieldPosition = 1 + Math.floor(Math.random() * 6);
    } else if (outType === "Flied out") {
      if (fieldPosition < 7) fieldPosition = 7 + Math.floor(Math.random() * 3);
    }

    return { result: "out", type: outType, position: fieldPosition };
  }

  player.atBats++;
  player.hits++;
  let hitType = "single";
  const power = player.power || 50;
  const bumpRoll = Math.random() * 100;

  if (bumpRoll < power * 0.21) {
    hitType = "home run";
    player.homeRuns++;
    player.runs++;
  } else if (bumpRoll < power * 0.57) {
    const baseTripleChance = 0.5;
    const speedBonus = ((player.speed || 50) - 40) * 0.05;
    const tripleChance = baseTripleChance + speedBonus;

    if (Math.random() * 100 < tripleChance) {
      hitType = "triple";
      player.triples++;
    } else {
      hitType = "double";
      player.doubles++;
    }
  }

  let fieldPosition;
  if (hitType === "home run" || hitType === "double" || hitType === "triple") {
    const outfieldPositions = [7, 8, 9];
    fieldPosition = outfieldPositions[Math.floor(Math.random() * outfieldPositions.length)];
  } else {
    if (Math.random() < 0.75) {
      const outfieldPositions = [7, 8, 9];
      fieldPosition = outfieldPositions[Math.floor(Math.random() * outfieldPositions.length)];
    } else {
      fieldPosition = 1 + Math.floor(Math.random() * 6);
    }
  }

  return { result: "hit", type: hitType, position: fieldPosition };
}

function advanceRunners(hitType, hitPosition, currentOuts, batterIndex, teamPlayers) {
  let runsScored = 0;
  let runnerMoveMsg = "";
  const newBases = [null, null, null];

  if (hitType === "single") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd on the single!";
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      if (currentOuts === 2 && Math.random() < 0.75) {
        teamPlayers[bases[1]].runs++;
        runsScored++;
        runnerMoveMsg += runnerMoveMsg ? " Runner scores from 2nd on the single!" : "Runner scores from 2nd on the single!";
      } else if (currentOuts < 2 && Math.random() < 0.40) {
        teamPlayers[bases[1]].runs++;
        runsScored++;
        runnerMoveMsg += runnerMoveMsg ? " Runner scores from 2nd on the single!" : "Runner scores from 2nd on the single!";
      } else {
        newBases[2] = bases[1];
        runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
      }
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      let goToThird = false;
      if ((hitPosition === 8 || hitPosition === 9) && newBases[2] === null) {
        goToThird = currentOuts === 2 ? Math.random() < 0.65 : Math.random() < 0.45;
      }
      newBases[goToThird ? 2 : 1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? ` Runner advances from 1st to ${goToThird ? "3rd" : "2nd"}.` : `Runner advances from 1st to ${goToThird ? "3rd" : "2nd"}.`;
    }
    newBases[0] = batterIndex;

  } else if (hitType === "double") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd on the double!";
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      teamPlayers[bases[1]].runs++;
      runsScored++;
      runnerMoveMsg += runnerMoveMsg ? " Runner scores from 2nd on the double!" : "Runner scores from 2nd on the double!";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      const scoringChance = currentOuts === 2 ? 0.6 : 0.3;
      if ((hitPosition === 8 || hitPosition === 9) && Math.random() < scoringChance) {
        teamPlayers[bases[0]].runs++;
        runsScored++;
        runnerMoveMsg += runnerMoveMsg ? " Runner from 1st scores on the double!" : "Runner from 1st scores on the double!";
      } else {
        newBases[2] = bases[0];
        runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 3rd." : "Runner advances from 1st to 3rd.";
      }
    }
    newBases[1] = batterIndex;

  } else if (hitType === "triple") {
    for (let i = 2; i >= 0; i--) {
      if (bases[i] !== null && typeof bases[i] === "number" && teamPlayers[bases[i]]) {
        teamPlayers[bases[i]].runs++;
        runsScored++;
        runnerMoveMsg += runnerMoveMsg ? ` Runner scores from ${i + 1}st!` : `Runner scores from ${i + 1}st!`;
      }
    }
    newBases[2] = batterIndex;

  } else if (hitType === "home run") {
    for (let i = 0; i < 3; i++) {
      if (bases[i] !== null && typeof bases[i] === "number" && teamPlayers[bases[i]]) {
        teamPlayers[bases[i]].runs++;
        runsScored++;
        runnerMoveMsg += runnerMoveMsg ? ` Runner scores from ${i + 1}st!` : `Runner scores from ${i + 1}st!`;
      }
    }
    runsScored++;
    teamPlayers[batterIndex].runs++;

  } else if (hitType === "groundout_advance") {
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += "Runner advances from 1st to 2nd.";
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }

  } else if (hitType === "groundout_score_3rd") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }

  } else if (hitType === "groundout_advance_rbi") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }

  } else if (hitType === "groundout_advance_both") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }

  } else if (hitType === "groundout_advance_all") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }

  } else if (hitType === "groundout_advance_one") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }

  } else if (hitType === "groundout_hold") {
    runnerMoveMsg += "Runners hold their bases.";

  } else if (hitType === "fielders_choice") {
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }
    newBases[0] = batterIndex;

  } else if (hitType === "fielders_choice_lead_out") {
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += "Runner advances from 1st to 2nd.";
    }
    newBases[0] = batterIndex;

  } else if (hitType === "fielders_choice_home") {
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }
    newBases[0] = batterIndex;

  } else if (hitType === "sac fly") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd on the sac fly!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]] && Math.random() < 0.3) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]] && Math.random() < 0.2) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }

  } else if (hitType === "double play") {
    if (bases[2] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]] && Math.random() < 0.3) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd before double play!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }
    bases[0] = null;
    bases[1] = null;

  } else if (hitType === "walk") {
    if (bases[2] !== null && bases[1] !== null && bases[0] !== null && typeof bases[2] === "number" && teamPlayers[bases[2]]) {
      teamPlayers[bases[2]].runs++;
      runsScored++;
      runnerMoveMsg += "Runner scores from 3rd on the walk!";
      teamPlayers[batterIndex].rbis++;
    }
    if (bases[1] !== null && typeof bases[1] === "number" && teamPlayers[bases[1]]) {
      newBases[2] = bases[1];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 2nd to 3rd." : "Runner advances from 2nd to 3rd.";
    }
    if (bases[0] !== null && typeof bases[0] === "number" && teamPlayers[bases[0]]) {
      newBases[1] = bases[0];
      runnerMoveMsg += runnerMoveMsg ? " Runner advances from 1st to 2nd." : "Runner advances from 1st to 2nd.";
    }
    newBases[0] = batterIndex;
  }

  bases = newBases;
  return { runsScored, runnerMoveMsg };
}

function playHalfInning() {
  console.log('playHalfInning called');
  const currentTeam = topHalf ? team1Players : team2Players;
  const currentOrder = topHalf ? team1Order : team2Order;
  const pitcher = topHalf ? team2Players[team2PitcherOrder[team2PitcherIndex]] : team1Players[team1PitcherOrder[team1PitcherIndex]];
  
  console.log('Current team:', topHalf ? 'Team 1 (Away)' : 'Team 2 (Home)');
  console.log('Current pitcher:', pitcher?.name || 'Unknown');
  
  outs = 0;
  bases = [null, null, null];
  let runsThisInning = 0;
  renderBaseRunners();
  renderGameStatus();

  function nextAtBat() {
    console.log('nextAtBat called');
    const batterIndex = topHalf ? team1BatterIndex : team2BatterIndex;
    const teamPlayers = topHalf ? team1Players : team2Players;
    const battingOrder = topHalf ? team1Order : team2Order;
    
    renderGameStatus();
    if (!teamPlayers || !battingOrder || !teamPlayers[battingOrder[batterIndex]]) {
      console.error("Invalid team or player data");
      logMessage("Game error: Invalid player data.");
      startGameBtn.disabled = false;
      return;
    }

    const player = teamPlayers[battingOrder[batterIndex]];
    const atBatResult = simulateAtBat(player, bases, teamPlayers);

    if (atBatResult.result === "walk") {
      logMessage(`${player.name} draws a walk!`);
      let runsScored = 0;
      if (bases[2] !== null && bases[1] !== null && bases[0] !== null && teamPlayers[bases[2]]) {
        teamPlayers[bases[2]].runs++;
        teamPlayers[battingOrder[batterIndex]].rbis++;
        if (topHalf) team1Score++; else team2Score++;
        runsThisInning++;
        runsScored++;
        logMessage(`${player.name} walks in a run from 3rd! Runs scored: ${runsScored}`);
      }
      if (bases[1] !== null && bases[0] !== null && teamPlayers[bases[1]]) {
        bases[2] = bases[1];
      }
      if (bases[0] !== null && teamPlayers[bases[0]]) {
        bases[1] = bases[0];
      }
      bases[0] = battingOrder[batterIndex];

    } else if (atBatResult.result === "out") {
      if (atBatResult.type === "sac fly") {
        if (bases[2] !== null && teamPlayers[bases[2]]) {
          logMessage(`${player.name} hits a sac fly to center field! Runner on 3rd scores.`);
          teamPlayers[bases[2]].runs++;
          teamPlayers[battingOrder[batterIndex]].rbis++;
          if (topHalf) team1Score++; else team2Score++;
          runsThisInning++;
          bases[2] = null;
        } else {
          logMessage(`${player.name} hits a sac fly to center field, but no runner on 3rd.`);
        }
        outs += 1;
      } else if (atBatResult.type === "double play") {
        outs += 2;
        if (outs > 3) outs = 3;
        let logMsg = `${player.name} grounds into a double play!`;
        let runsScored = 0;
        if ((bases[2] !== null && bases[0] !== null && bases[1] !== null) || (bases[2] !== null && bases[0] !== null)) {
         keyboard_arrow_down
          if (teamPlayers[bases[2]] && Math.random() < 0.30) {
            teamPlayers[bases[2]].runs++;
            if (topHalf) team1Score++; else team2Score++;
            runsThisInning++;
            runsScored++;
            logMsg += " Runner on 3rd scores!";
            bases[2] = null;
          }
        }
        if (bases[0] !== null && bases[1] !== null) {
          bases[2] = bases[1];
          logMsg += ", runner on 2nd to 3rd";
        }
        bases[0] = null;
        bases[1] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_advance") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}, runner advances to 2nd`;
        if (bases[0] !== null && teamPlayers[bases[0]]) {
          bases[1] = bases[0];
        }
        bases[0] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_advance_both") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}, runners advance`;
        let runsScored = 0;
        if (bases[2] !== null && bases[1] !== null && bases[0] !== null && teamPlayers[bases[2]]) {
          teamPlayers[bases[2]].runs++;
          teamPlayers[battingOrder[batterIndex]].rbis++;
          if (topHalf) team1Score++; else team2Score++;
          runsThisInning++;
          runsScored++;
          logMsg += ", runner on 3rd scores";
        }
        if (bases[1] !== null && teamPlayers[bases[1]]) {
          bases[2] = bases[1];
        }
        if (bases[0] !== null && teamPlayers[bases[0]]) {
          bases[1] = bases[0];
        }
        bases[0] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_advance_lead") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}, lead runner advances to 3rd`;
        if (bases[1] !== null && teamPlayers[bases[1]]) {
          bases[2] = bases[1];
        }
        bases[0] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_advance_rbi") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}`;
        let runsScored = 0;
        if (bases[2] !== null && teamPlayers[bases[2]]) {
          teamPlayers[bases[2]].runs++;
          teamPlayers[battingOrder[batterIndex]].rbis++;
          if (topHalf) team1Score++; else team2Score++;
          runsThisInning++;
          runsScored++;
          logMsg += ", runner on 3rd scores";
        }
        if (bases[0] !== null && bases[1] !== null && teamPlayers[bases[1]]) {
          bases[2] = bases[1];
          logMsg += ", runner on 2nd to 3rd";
        }
        if (bases[0] !== null && teamPlayers[bases[0]]) {
          bases[1] = bases[0];
          logMsg += ", runner on 1st to 2nd";
        }
        bases[0] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_advance_all") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}, runners advance`;
        let runsScored = 0;
        if (bases[2] !== null && teamPlayers[bases[2]]) {
          teamPlayers[bases[2]].runs++;
          teamPlayers[battingOrder[batterIndex]].rbis++;
          if (topHalf) team1Score++; else team2Score++;
          runsThisInning++;
          runsScored++;
          logMsg += ", runner on 3rd scores";
        }
        if (bases[1] !== null && teamPlayers[bases[1]]) {
          bases[2] = bases[1];
        }
        if (bases[0] !== null && teamPlayers[bases[0]]) {
          bases[1] = bases[0];
        }
        bases[0] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_advance_one") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}, runner on 3rd scores`;
        teamPlayers[bases[2]].runs++;
        teamPlayers[battingOrder[batterIndex]].rbis++;
        if (topHalf) team1Score++; else team2Score++;
        runsThisInning++;
        bases[2] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_score_3rd") {
        outs += 1;
        let logMsg = `${player.name} grounds out to ${getPositionName(atBatResult.position)}, runner on 3rd scores`;
        teamPlayers[bases[2]].runs++;
        teamPlayers[battingOrder[batterIndex]].rbis++;
        if (topHalf) team1Score++; else team2Score++;
        runsThisInning++;
        bases[2] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "groundout_hold") {
        outs += 1;
        logMessage(`${player.name} grounds out to ${getPositionName(atBatResult.position)}. Outs: ${outs}`);
      } else if (atBatResult.type === "fielders_choice") {
        outs += 1;
        let logMsg = `${player.name} hits a fielder's choice to ${getPositionName(atBatResult.position)}, runner out at 2nd`;
        if (bases[1] !== null && teamPlayers[bases[1]]) {
          bases[2] = bases[1];
          logMsg += ", runner on 2nd to 3rd";
        }
        bases[0] = battingOrder[batterIndex];
        bases[1] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "fielders_choice_lead_out") {
        outs += 1;
        let logMsg = `${player.name} hits a fielder's choice to ${getPositionName(atBatResult.position)}, lead runner out at 3rd`;
        if (bases[0] !== null && teamPlayers[bases[0]]) {
          bases[1] = bases[0];
        }
        bases[0] = battingOrder[batterIndex];
        bases[2] = null;
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "fielders_choice_home") {
        outs += 1;
        let logMsg = `${player.name} hits a fielder's choice to ${getPositionName(atBatResult.position)}, runner out at home`;
        if (bases[1] !== null && teamPlayers[bases[1]]) {
          bases[2] = bases[1];
        }
        if (bases[0] !== null && teamPlayers[bases[0]]) {
          bases[1] = bases[0];
        }
        bases[0] = battingOrder[batterIndex];
        logMsg += `. Outs: ${outs}`;
        logMessage(logMsg);
      } else if (atBatResult.type === "Struck out") {
        outs += 1;
        logMessage(`${player.name} struck out. Outs: ${outs}`);
      } else {
        outs += 1;
        const posName = getPositionName(atBatResult.position);
        logMessage(`${player.name} ${atBatResult.type.toLowerCase()} to ${posName}. Outs: ${outs}`);
      }

    } else {
      const { runsScored, runnerMoveMsg } = advanceRunners(atBatResult.type, atBatResult.position, outs, battingOrder[batterIndex], teamPlayers);
      runsThisInning += runsScored;
      const posName = getPositionName(atBatResult.position);
      let msg = `${player.name} hits a ${atBatResult.type} to ${posName}!`;
      if (runnerMoveMsg) msg += ` ${runnerMoveMsg}`;
      if (runsScored > 0) msg += ` Runs scored: ${runsScored}`;
      logMessage(msg);
    }

    if (topHalf) {
      team1BatterIndex = (team1BatterIndex + 1) % 9;
    } else {
      team2BatterIndex = (team2BatterIndex + 1) % 9;
    }

    renderBoxScore();
    renderBaseRunners();

    if (outs >= 3) {
      if (topHalf) {
        team1Score += runsThisInning;
        updateInningScore(1, inning, runsThisInning);
      } else {
        team2Score += runsThisInning;
        updateInningScore(2, inning, runsThisInning);
      }
      updateScoreboard();

      topHalf = !topHalf;

      if (topHalf) {
        inning++;
        if (inning > 9) {
          logMessage(`Game over! Final Score: Team 1 ${team1Score} - Team 2 ${team2Score}`);
          try {
            [team1Players, team2Players].forEach(team => {
              if (!team) return;
              team.forEach(player => {
                if (!player || !player.careerStats) return;
                if (player.atBats > 0 || player.walks > 0) player.careerStats.games++;
                player.careerStats.atBats += player.atBats;
                player.careerStats.hits += player.hits;
                player.careerStats.runs += player.runs;
                player.careerStats.rbis += player.rbis;
                player.careerStats.doubles += player.doubles;
                player.careerStats.triples += player.triples;
                player.careerStats.homeRuns += player.homeRuns;
                player.careerStats.walks += player.walks;
                player.careerStats.strikeouts += player.strikeouts;
              });
            });
            team1PitcherIndex = (team1PitcherIndex + 1) % 5;
            team2PitcherIndex = (team2PitcherIndex + 1) % 5;
            saveTeamsToStorage();
          } catch (e) {
            console.error("Error saving stats:", e);
          }
          startGameBtn.disabled = false;
          return;
        }
        logMessage(`--- Inning ${inning}, Top Half ---`, true);
      } else {
        logMessage(`--- Inning ${inning}, Bottom Half ---`, true);
      }

      setTimeout(playHalfInning, 1000);
    } else {
      setTimeout(nextAtBat, 1000);
    }
  }

  // Start the first at-bat
  nextAtBat();
}

function updateInningScore(teamNum, inningNum, runs) {
  const row = teamNum === 1 ? team1ScoreRow : team2ScoreRow;
  if (!row) {
    console.error(`No score row for team ${teamNum}`);
    return;
  }
  // Ensure cells up to inningNum (1-based index)
  while (row.cells.length < inningNum + 1) {
    row.insertCell(-1).textContent = "";
  }
  // Update specific inning cell, avoid accumulation
  row.cells[inningNum].textContent = runs > 0 ? runs.toString() : "0";
  console.log(`Inning score updated: Team ${teamNum}, Inning ${inningNum}, Runs: ${runs}`);
}


// Initialize game start button
if (startGameBtn) {
  startGameBtn.onclick = () => {
    // Switch to game page
    if (teamsPage) teamsPage.classList.remove("active");
    if (gamePage) gamePage.classList.add("active");
    if (playerProfilePage) playerProfilePage.classList.remove("active");
    
    // Initialize game state
    startGameBtn.disabled = true;
    inning = 1;
    outs = 0;
    team1Score = 0;
    team2Score = 0;
    team1BatterIndex = 0;
    team2BatterIndex = 0;
    topHalf = true;
    bases = [null, null, null];
    
    // Reset player stats
    [team1Players, team2Players].forEach(team => {
      team.forEach(p => {
        if (p) {
          p.atBats = 0;
          p.hits = 0;
          p.runs = 0;
          p.rbis = 0;
          p.doubles = 0;
          p.triples = 0;
          p.homeRuns = 0;
          p.walks = 0;
          p.strikeouts = 0;
        }
      });
    });
    
    // Clear game log and scoreboard
    const gameLog = document.getElementById("gameLog");
    if (gameLog) gameLog.textContent = "";
    
    // Clear inning scores
    for (let i = 1; i <= 9; i++) {
      if (team1ScoreRow && team1ScoreRow.cells[i]) team1ScoreRow.cells[i].textContent = "";
      if (team2ScoreRow && team2ScoreRow.cells[i]) team2ScoreRow.cells[i].textContent = "";
    }
    
    // Initialize UI
    updateScoreboard();
    renderBoxScore();
    renderBaseRunners();
    renderGameStatus();
    
        // Start the game
    logMessage(`--- Game Started ---`, true);
    logMessage(`--- Inning 1, Top Half ---`);
    
    // Force UI update
    setTimeout(() => {
      try {
        console.log('Starting game...');
        playHalfInning();
      } catch (e) {
        console.error('Error starting game:', e);
        logMessage('Error starting game. Please check console for details.', true);
      }
    }, 100);
  };
}

if (resetTeamsBtn) {
  resetTeamsBtn.onclick = () => {
    localStorage.removeItem('team1Players');
    localStorage.removeItem('team2Players');
    localStorage.removeItem('team1Order');
    localStorage.removeItem('team2Order');
    localStorage.removeItem('team1PitcherOrder');
    localStorage.removeItem('team2PitcherOrder');
    localStorage.removeItem('team1BullpenOrder');
    localStorage.removeItem('team2BullpenOrder');
    localStorage.removeItem('team1PitcherIndex');
    localStorage.removeItem('team2PitcherIndex');
    
    const team1 = createTeam();
    const team2 = createTeam();
    team1Players = team1;
    team2Players = team2;
    team1Order = Array.from({ length: 9 }, (_, i) => i);
    team2Order = Array.from({ length: 9 }, (_, i) => i);
    team1PitcherOrder = Array.from({ length: 5 }, (_, i) => i + 9);
    team2PitcherOrder = Array.from({ length: 5 }, (_, i) => i + 9);
    team1BullpenOrder = Array.from({ length: 5 }, (_, i) => i + 14);
    team2BullpenOrder = Array.from({ length: 5 }, (_, i) => i + 14);
    team1PitcherIndex = 0;
    team2PitcherIndex = 0;
    saveTeamsToStorage();
    
    renderBattingOrder(team1Players, team1Order, "team1Order");
    renderBattingOrder(team2Players, team2Order, "team2Order");
    renderBattingOrder(team1Players, team1PitcherOrder, "team1PitcherOrder", true);
    renderBattingOrder(team2Players, team2PitcherOrder, "team2PitcherOrder", true);
    renderBattingOrder(team1Players, team1BullpenOrder, "team1BullpenOrder", true, true);
    renderBattingOrder(team2Players, team2BullpenOrder, "team2BullpenOrder", true, true);
  };
}

// Initialize the page - render teams and set up navigation
renderBattingOrder(team1Players, team1Order, "team1Order");
renderBattingOrder(team2Players, team2Order, "team2Order");
renderBattingOrder(team1Players, team1PitcherOrder, "team1PitcherOrder", true);
renderBattingOrder(team2Players, team2PitcherOrder, "team2PitcherOrder", true);
renderBattingOrder(team1Players, team1BullpenOrder, "team1BullpenOrder", true, true);
renderBattingOrder(team2Players, team2BullpenOrder, "team2BullpenOrder", true, true);

// Set up navigation
const teamsTabBtn = document.getElementById("teamsTab");
const gameTabBtn = document.getElementById("gameTab");
const teamsPage = document.getElementById("teamsPage");
const gamePage = document.getElementById("gamePage");
const playerProfilePage = document.getElementById("playerProfilePage");

function logMessage(message, isImportant = false) {
  const gameLog = document.getElementById("gameLog");
  if (!gameLog) {
    console.error('Game log element not found');
    return;
  }
  
  try {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    if (isImportant) {
      messageElement.style.fontWeight = "bold";
    }
    gameLog.appendChild(messageElement);
    gameLog.scrollTop = gameLog.scrollHeight;
    console.log('Logged message:', message);
  } catch (e) {
    console.error('Error logging message:', e);
  }
}

if (teamsTabBtn) {
  teamsTabBtn.onclick = () => {
    teamsPage.classList.add("active");
    gamePage.classList.remove("active");
    playerProfilePage.classList.remove("active");
  };
}

if (gameTabBtn) {
  gameTabBtn.onclick = () => {
    teamsPage.classList.remove("active");
    gamePage.classList.add("active");
    playerProfilePage.classList.remove("active");
  };
}

const backToGameBtn = document.getElementById("backToGameBtn");
if (backToGameBtn) {
  backToGameBtn.onclick = () => {
    teamsPage.classList.remove("active");
    gamePage.classList.add("active");
    playerProfilePage.classList.remove("active");
  };
}
