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

const parseAffectionLevel = (dog) => {
  let level = validateLevelValue(dog?.affection_level ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseAdaptability = (dog) => {
  let level = validateLevelValue(dog?.adaptability ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseChildFriendly = (dog) => {
  let level = validateLevelValue(dog?.child_friendly ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseDogFriendly = (dog) => {
  let level = validateLevelValue(dog?.dog_friendly ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseEnergyLevel = (dog) => {
  let level = validateLevelValue(dog?.energy_level ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseGrooming = (dog) => {
  let level = validateLevelValue(dog?.grooming ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseHealthIssues = (dog) => {
  let level = validateLevelValue(dog?.health_issues ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseIntelligence = (dog) => {
  let level = validateLevelValue(dog?.intelligence ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseSheddingLevel = (dog) => {
  let level = validateLevelValue(dog?.shedding_level ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseSocialNeeds = (dog) => {
  let level = validateLevelValue(dog?.social_needs ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseStrangerFriendly = (dog) => {
  let level = validateLevelValue(dog?.stranger_friendly ?? 0);
  const stars = [];

  while (level) {
    level -= 1;
    stars.push('★');
  }

  return stars.join(' ');
};

const parseVocalisation = (dog) => {
  let level = validateLevelValue(dog?.vocalisation ?? 0);
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
