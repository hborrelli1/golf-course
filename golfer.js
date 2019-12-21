class Golfer {
  constructor(playerInfo) {
    this.name = playerInfo.name;
    this.handicap = playerInfo.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg() {
    var avg = 72 + this.handicap;
    return `I usually shoot a ${avg} on average.`;
  }

  playRound(course) {
    switch (course.difficulty) {
      case 'hard':
        this.frustration += 500;
        break;
      case 'moderate':
        this.frustration += 100;
        break;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(course) {
    var features = course.features;
    return `I love the ${features[0]} and ${features[1]} on this course!`;
  }

  whatYaShoot(score) {
    if (score > 0) {
      // Bad
      this.frustration += 20;
      return 'Doh!';
    }
    else if (score === 0) {
      // good
      this.frustration -= 10;
      return 'Booyah!';
    }
    else if (score < 0) {
      // Excellent
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }
}

module.exports = Golfer;
