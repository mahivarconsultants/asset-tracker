// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "POST") {
    const { userId, password } = req.body;
    console.log({ userId, password });
    if (!userId || !password) {
      return res.status(401).send({
        success: false,
        error: "AUTH-INVCRED",
        message: "Missing credentials",
      });
    }
    if (userId === password) {
      res.json({
        success: userId === password,
      });
    } else {
      //error
      res.status(401).send({
        success: false,
        error: "AUTH-INVCRED",
        message: "Invalid credentials",
      });
    }
  }
};
