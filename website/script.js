function randomRating() {
  return Math.floor(Math.random() * 61) + 40;
}

function generatePlayer(position) {
  return {
    name: "Joe Random",
    contact: randomRating(),
    power: randomRating(),
    speed: randomRating(),
    defense: randomRating(),
    position: position
  };
}

function generateTeam() {
  const positions = ["C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"];
  const hitters = positions.map(pos => generatePlayer(pos));
  const pitcher = { name: "Joe Random", overall: randomRating(), position: "P" };
  return { hitters, pitcher };
}

function getHitResult(power) {
  const roll = Math.random() * 100;
  if (roll < power * 0.1) return "Home Run";
  if (roll < power * 0.25) return "Triple";
  if (roll < power * 0.55) return "Double";
  return "Single";
}

function getOutType() {
  const types = ["Strikeout", "Groundout", "Flyout"];
  return types[Math.floor(Math.random() * types.length)];
}

const output = document.getElementById("output");
let gameStarted = false;
let interval = null;

document.getElementById("startBtn").addEventListener("click", () => {
  if (gameStarted) return;
  gameStarted = true;
  startGame();
});

function startGame() {
  const team1 = generateTeam();
  const team2 = generateTeam();
  let score1 = 0;
  let score2 = 0;
  let inning = 1;
  let half = "top";
  let outs = 0;
  let batterIndex1 = 0;
  let batterIndex2 = 0;

  let base1 = false;
  let base2 = false;
  let base3 = false;

  output.textContent = "Team 1:\n";
  team1.hitters.forEach(p => {
    output.textContent += `${p.position} - ${p.name} | Contact: ${p.contact}, Power: ${p.power}, Speed: ${p.speed}, Defense: ${p.defense}\n`;
  });
  output.textContent += `Pitcher - ${team1.pitcher.name} | Overall: ${team1.pitcher.overall}\n`;

  output.textContent += "\nTeam 2:\n";
  team2.hitters.forEach(p => {
    output.textContent += `${p.position} - ${p.name} | Contact: ${p.contact}, Power: ${p.power}, Speed: ${p.speed}, Defense: ${p.defense}\n`;
  });
  output.textContent += `Pitcher - ${team2.pitcher.name} | Overall: ${team2.pitcher.overall}\n`;

  output.textContent += `\nGame Start!\n\n`;

  interval = setInterval(() => {
    if (inning > 9) {
      output.textContent += `\nFinal Score:\nTeam 1: ${score1}\nTeam 2: ${score2}`;
      clearInterval(interval);
      return;
    }

    let currentTeam, opponentPitcher, batterIndex, score;

    if (half === "top") {
      currentTeam = team1;
      opponentPitcher = team2.pitcher;
      batterIndex = batterIndex1;
      score = score1;
    } else {
      currentTeam = team2;
      opponentPitcher = team1.pitcher;
      batterIndex = batterIndex2;
      score = score2;
    }

    const batter = currentTeam.hitters[batterIndex % 9];

    // Adjusted hit chance
    const hitChance = (batter.contact - opponentPitcher.overall) * 0.5 + 15;
    const roll = Math.random() * 100;

    if (roll < hitChance) {
      const result = getHitResult(batter.power);
      output.textContent += `${half === "top" ? "Team 1" : "Team 2"} - ${batter.position} gets a ${result}\n`;

      // Run logic
      if (result === "Home Run") {
        let runs = 1;
        if (base1) runs++;
        if (base2) runs++;
        if (base3) runs++;
        base1 = base2 = base3 = false;
        score += runs;
      } else if (result === "Triple") {
        if (base3) score++;
        if (base2) score++;
        if (base1) score++;
        base1 = base2 = false;
        base3 = true;
      } else if (result === "Double") {
        if (base3) score++;
        if (base2) score++;
        if (base1) base3 = true;
        else base3 = false;
        base1 = false;
        base2 = true;
      } else if (result === "Single") {
        if (base3) score++;
        base3 = base2;
        base2 = base1;
        base1 = true;
      }

    } else {
      const out = getOutType();
      output.textContent += `${half === "top" ? "Team 1" : "Team 2"} - ${batter.position} is out: ${out}\n`;
      outs++;
    }

    if (half === "top") batterIndex1++;
    else batterIndex2++;

    if (outs >= 3) {
      output.textContent += `End of ${half === "top" ? "Top" : "Bottom"} ${inning}. Score: Team 1 - ${score1}, Team 2 - ${score2}\n\n`;
      if (half === "bottom") inning++;
      half = half === "top" ? "bottom" : "top";
      outs = 0;
      base1 = base2 = base3 = false;
    }

    if (half === "top") score1 = score;
    else score2 = score;

  }, 3000); // 3 seconds per at-bat
}
