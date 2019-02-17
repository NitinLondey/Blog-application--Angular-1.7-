UserRouter.route('/create').post(function (req, res) {
    const user = new User(req.body);
    console.log(user);
    user.save()
      .then(user => {
        res.json('Data added successfully');
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });