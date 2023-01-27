import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    // find the user based on the id retrieved from the parameter
    const { id } = req.params;
    console.log("id", id);
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
