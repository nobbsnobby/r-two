import { faker } from '@faker-js/faker';

const NUM_USERS = 3;
const POSTS_PER_USER = 3;
const RECENT_NOTIFICATIONS_DAYS = 7;

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000;

export const createUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    username: faker.internet.userName(),
  };
};

export const createPostData = (user: any) => ({
  title: faker.lorem.words(),
  date: faker.date.recent({ days: RECENT_NOTIFICATIONS_DAYS }).toISOString(),
  user,
  content: faker.lorem.paragraphs(),
  // reactions: db.reaction.create(),
});

// Create an initial set of users and posts
for (let i = 0; i < NUM_USERS; i++) {
  // const author = db.user.create(createUserData());
  // for (let j = 0; j < POSTS_PER_USER; j++) {
  //   const newPost = createPostData(author);
  //   db.post.create(newPost);
  // }
}
