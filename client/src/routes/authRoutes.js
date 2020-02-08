const passport = require("passport");

//exports
module.exports = app => {
  //route Handlers for Google passport
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //
  app.get("/auth/google/callback", passport.authenticate("google"));
  //
  // app.get("/", (req, res) => {
  //   res.send(`hello ${process.env.USERNAME}`);
  // });
  //
};
