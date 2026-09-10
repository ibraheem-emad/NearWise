const { faker } = require('@faker-js/faker');

function generateUser(id) {
  return {
    id,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    preferences: {
      category: faker.helpers.arrayElement(['Cafe', 'Restaurant', 'Hotel', 'Park']),
      budget: faker.number.int({ min: 1, max: 4 }),
    },
  };
}

function generatePlace(id) {
  return {
    id: `place_${id}`,
    name: faker.company.name(),
    category: faker.helpers.arrayElement(['Cafe', 'Restaurant', 'Hotel', 'Park']),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    location: {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    },
  };
}

function generateReview(userId, placeId) {
  return {
    userId,
    placeId,
    rating: faker.number.int({ min: 1, max: 5 }),
    comment: faker.lorem.sentence(),
    status: 'approved',
  };
}

function generateBehaviorEvent(userId, placeId) {
  return {
    userId,
    placeId,
    eventType: faker.helpers.arrayElement(['click', 'view', 'favorite', 'rating']),
    timestamp: faker.date.recent(),
  };
}

const users = Array.from({ length: 5 }, (_, i) => generateUser(i + 1));
const places = Array.from({ length: 20 }, (_, i) => generatePlace(i + 1));
const reviews = users.flatMap((user) =>
  faker.helpers.arrayElements(places, 3).map((place) => generateReview(user.id, place.id))
);
const behaviorEvents = users.flatMap((user) =>
  faker.helpers.arrayElements(places, 5).map((place) => generateBehaviorEvent(user.id, place.id))
);

console.log(users);
console.log(places);
console.log(reviews);
console.log(behaviorEvents);

module.exports = { generateUser, generatePlace, generateReview, generateBehaviorEvent };