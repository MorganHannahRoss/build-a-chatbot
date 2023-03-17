// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

const TEST_NAME = "Morgan";

describe("getBotReply", () => {
  // do chores
  it("should reply with do chores", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = `${TEST_NAME} will your chores take all day?`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "You should probably do them or you'll end up spending the entire day staring at them.";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply();
    const expectedReply4 = "Have a nice day, to start again type 'restart'";
    expect(botReply4).toEqual(expectedReply4);
  });

  // take a hike
  it("should reply with take a hike", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = `${TEST_NAME} do you want to exercise today?`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("yes");
    const expectedReply3 =
      "Take a hike with friends, hit the beach for a swim, or get those gains at the gym if you'd rather spend the day working on yourself.";
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply();
    const expectedReply4 = "Have a nice day, to start again type 'restart'";
    expect(botReply4).toEqual(expectedReply4);
  });

  // Go for a walk at a forest reserve
  it("should reply with grab a coffee", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = `${TEST_NAME} will your chores take all day?`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = `${TEST_NAME} will you have any energy to see anyone after you do your chores today?`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Grab a coffee, or go shopping with a friend. If the evening suits you better you could always go bowling, or see a movie instead.";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply();
    const expectedReply5 = "Have a nice day, to start again type 'restart'";
    expect(botReply5).toEqual(expectedReply5);
  });

  // Relax after chores
  it("should reply with relax after chores", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("yes");
    const expectedReply2 = `${TEST_NAME} will your chores take all day?`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = `${TEST_NAME} will you have any energy to see anyone after you do your chores today?`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply();
    const expectedReply5 = "Have a nice day, to start again type 'restart'";
    expect(botReply5).toEqual(expectedReply5);
  });

  // Relax inside
  it("should reply with relax inside", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = `${TEST_NAME} do you want to exercise today?`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = `${TEST_NAME} are you wanting to spend the day outside?`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("no");
    const expectedReply4 =
      "Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply();
    const expectedReply5 = "Have a nice day, to start again type 'restart'";
    expect(botReply5).toEqual(expectedReply5);
  });

  // Go for a walk at a forest reserve
  it("should reply with go for a walk", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("no");
    const expectedReply2 = `${TEST_NAME} do you want to exercise today?`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("no");
    const expectedReply3 = `${TEST_NAME} are you wanting to spend the day outside?`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply("yes");
    const expectedReply4 =
      "Go for a walk at a forest reserve, meet up with a friend and have a picnic at a local park, or take a sunset stroll on a beach.";
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply();
    const expectedReply5 = "Have a nice day, to start again type 'restart'";
    expect(botReply5).toEqual(expectedReply5);
  });

  // help and restart test below
  it("should reply with help", () => {
    const botReply1 = getBotReply("help");
    const expectedReply1 = "Try answering 'yes' or 'no'";

    expect(botReply1).toEqual(expectedReply1);
  });

  it("should reply with restart", () => {
    const botReply1 = getBotReply("restart");
    const expectedReply1 =
      "Hello, I am Day Decision Bot. I'm here to help you decide what to do on your day off. What is your name?";

    expect(botReply1).toEqual(expectedReply1);
  });

  // test for garbage talk
  it("should reply with I dont understand do this instead ", () => {
    const botReply1 = getBotReply(TEST_NAME);
    const expectedReply1 =
      "Do you have any chores you have to do today Morgan?";

    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("vhjgvgh");
    const expectedReply2 = `I couldn't understand your reply, try answering 'yes' or 'no'.
 Or type 'restart' to start again, or 'help' for guidence`;
    expect(botReply2).toEqual(expectedReply2);
  });
});
