import data from "../model/model.js";

export const addUser = async (request, response) => {
  const user = request.body;
  const newData = new data(user);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};

export const allUsers = async (request, response) => {
  try {
    const users = await data.find({});
    response.status(200).json(users);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const user = await data.find({ _id: request.params.id });
    response.status(200).json(user);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const editUser = async (request, response) => {
  try {
    const { id } = request.params;
    const user = request.body;

    console.log('Updating user. ID:', id, 'Data:', user);

    const existingUser = await data.findById(id);

    if (!existingUser) {
      return response.status(404).json({ message: 'User not found' });
    }
    
    existingUser.set(user);
    await existingUser.save();

    console.log('User updated successfully:', existingUser);

    response.status(200).json(existingUser);
  } catch (err) {
    console.log('Error updating user:', err);
    response.status(409).json({ message: err.message });
  }
};


export const deleteUser = async (request, response) => {
  try {
    await data.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "User Deleted Successfully" });
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};


