const validateLevelValue = (level) => {
  const levelValue = Number.parseInt(level, 10);

  if (Number.isNaN(levelValue) === true) {
    return 0;
  }

  if (levelValue < 0) {
    return 0;
  }

  return levelValue;
};

const parseAffectionLevel = (cat) => {
  let level = validateLevelValue(cat?.affection_level ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseAdaptability = (cat) => {
  let level = validateLevelValue(cat?.adaptability ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseChildFriendly = (cat) => {
  let level = validateLevelValue(cat?.child_friendly ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseDogFriendly = (cat) => {
  let level = validateLevelValue(cat?.dog_friendly ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseEnergyLevel = (cat) => {
  let level = validateLevelValue(cat?.energy_level ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseGrooming = (cat) => {
  let level = validateLevelValue(cat?.grooming ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseHealthIssues = (cat) => {
  let level = validateLevelValue(cat?.health_issues ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseIntelligence = (cat) => {
  let level = validateLevelValue(cat?.intelligence ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseSheddingLevel = (cat) => {
  let level = validateLevelValue(cat?.shedding_level ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseSocialNeeds = (cat) => {
  let level = validateLevelValue(cat?.social_needs ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseStrangerFriendly = (cat) => {
  let level = validateLevelValue(cat?.stranger_friendly ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseVocalisation = (cat) => {
  let level = validateLevelValue(cat?.vocalisation ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

module.exports = {
  parseAffectionLevel,
  parseAdaptability,
  parseChildFriendly,
  parseDogFriendly,
  parseEnergyLevel,
  parseGrooming,
  parseHealthIssues,
  parseIntelligence,
  parseSheddingLevel,
  parseSocialNeeds,
  parseStrangerFriendly,
  parseVocalisation,
};
