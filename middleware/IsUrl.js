import urlExist from "url-exist";

const middlewareUrl = async (req, res, next) => {
  const { url } = req.body;
  const isValid = await urlExist(url);
  if (!isValid) {
    return res
      .status(401)
      .json({ message: "Response 401: invalid URL", type: "failure" });
  }
  next();
};

export { middlewareUrl };
