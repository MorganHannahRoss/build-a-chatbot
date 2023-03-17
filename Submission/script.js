/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

// global scope
let level = 1;
let branch;
let username;
let end = false;

const getBotReply = (msg) => {
  if (username) {
    msg = msg.toLowerCase();
  }
  if (level >= 2) {
    if (msg !== "yes" && msg !== "no") {
      return `I couldn't understand your reply, try answering 'yes' or 'no'.
 Or type 'restart' to start again, or 'help' for guidence`;
    }
  }

  if (msg === "help") return "Try answering 'yes' or 'no'";
  if (msg === "restart") {
    reset();
    end = false;
    return "Hello, I am Day Decision Bot. I'm here to help you decide what to do on your day off. What is your name?";
  }
  if (end) return "Have a nice day, to start again type 'restart'";

  if (level === 1) {
    level = 2;
    username = msg;
    return `Do you have any chores you have to do today ${username}?`;
  }

  if (level === 2) {
    level = 3;
    if (msg === "yes") {
      // `Do you have any chores you have to do today ${username}?`
      branch = "yes";
      return `${username} will your chores take all day?`;
    }
    // `Do you have any chores you have to do today ${username}?`
    if (msg === "no") {
      branch = "no";
      return `${username} do you want to exercise today?`;
    }
  }

  if (level === 3) {
    level = 4;
    if (branch === "yes") {
      // ${username} will your chores take all day?

      if (msg === "yes") {
        // end and reset
        end = true;
        reset();
        return `You should probably do them or you'll end up spending the entire day staring at them.`;
      }

      if (msg === "no") {
        return `${username} will you have any energy to see anyone after you do your chores today?`;
      }
    }
    if (branch === "no") {
      // ${username} do you want to exercise today?

      if (msg === "yes") {
        // end and reset
        end = true;
        reset();
        return `Take a hike with friends, hit the beach for a swim, or get those gains at the gym if you'd rather spend the day working on yourself.`;
      }

      if (msg === "no") {
        return `${username} are you wanting to spend the day outside?`;
      }
    }
  }

  if (level === 4) {
    level = 5;
    if (branch === "yes") {
      // ${username} will you have any energy to see anyone after you do your chores today?

      if (msg === "yes") {
        // end and reset
        end = true;
        reset();
        return `Grab a coffee, or go shopping with a friend. If the evening suits you better you could always go bowling, or see a movie instead.`;
      }

      if (msg === "no") {
        // end and reset
        end = true;
        reset();
        return `Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.`;
      }
    }
    if (branch === "no") {
      // ${username} are you wanting to spend the day outside?

      if (msg === "yes") {
        // end and reset
        end = true;
        reset();
        return `Go for a walk at a forest reserve, meet up with a friend and have a picnic at a local park, or take a sunset stroll on a beach.`;
      }

      if (msg === "no") {
        // end and reset
        end = true;
        reset();
        return `Relax and rejuvenate the best way you know how to! This could be a day binge-watching Netflix, a personal hobby, gaming, or doing an all-out spa day for yourself.`;
      }
    }
  }
};

const reset = () => {
  level = 1;
  username = undefined;
  branch = undefined;
};

export { getBotReply };
