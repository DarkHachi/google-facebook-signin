const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID = "181766353162-vb1sirdohj635ai33mq5jf3kqqg0d8ht.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [CLIENT_ID, "181766353162-9esdrkl9f0tjl87kril9peuv1unm69td.apps.googleusercontent.com", ""],
    });
    const payload = ticket.getPayload();
    console.log(payload);

    return {
        'name': payload['name'],
        'picture': payload['picture'],
        'email' : payload['email']
    };
  } catch (error) {}
};

module.exports = { validarGoogleIdToken };
