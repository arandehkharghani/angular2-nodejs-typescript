const messageRoute = function (app) {

  app.get('/api/messages', async function (req, res, next) {
    res.send(
      [{ text: 't' }, { text: 'e' }]
    );

    app.post("/api/messages/create", async function (req, res) {
      res.send([{ user: 'u', text: 't', time: new Date("October 13, 2014 11:13:00") }]);
      //io.sockets.emit("message", {text:this.request.body.text});  
    });

  });

};

export { messageRoute };
