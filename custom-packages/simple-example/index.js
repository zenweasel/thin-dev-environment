export default async function register(app) {
  await app.registerPlugin({
    name: "example-plugin"
  });
  console.log("hello");
};
