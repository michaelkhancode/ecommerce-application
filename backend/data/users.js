import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123"),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123"),
  },
  {
    name: "Sam Ford",
    email: "sam@example.com",
    password: bcrypt.hashSync("123"),
  },
];

export default users;
