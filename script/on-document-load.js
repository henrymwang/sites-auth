/* Code added here will be executed on the DOMContentLoaded event */


if (!window.YEXT_TOKENS || !window.YEXT_TOKENS.token1 || !window.YEXT_TOKENS.token1.token) {
  console.log('The auth token was not found on the window at window.YEXT_TOKENS.token1.token');
} else {
  const token = window.YEXT_TOKENS.token1.token;
  console.log(`Setting token ${token} in the runtime config`);
  AnswersExperience.runtimeConfig.set('tokenHeader', token);
}