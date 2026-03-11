export function greetUser(username) {
  if (!username) {
    return "Welcome! Please enter your username.";
  }

  return `Hello ${username}, welcome back!`;
}