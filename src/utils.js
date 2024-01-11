export const waitTwoSeconds = (payload) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve( payload );
    }, 2000);
  });
