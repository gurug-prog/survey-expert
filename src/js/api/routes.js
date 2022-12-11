const users = require("./controllers/user-controller");
const organizations = require("./controllers/organization-controller");
const { protect } = require("./controllers/user-controller");

const routes = [
  { path: "/users/:id", method: "get", func: protect(users.getUser) },
  { path: "/users", method: "get", func: protect(users.getUsers) },
  { path: "/register", method: "post", func: users.registerUser },
  { path: "/login", method: "post", func: users.login },

  {
    path: "/organizations",
    method: "post",
    func: protect(organizations.addOrganization),
  },
  {
    path: "/organizations/:id",
    method: "get",
    func: protect(organizations.getOrganization),
  },
  {
    path: "/organizations/:id",
    method: "put",
    func: protect(organizations.updateOrganization),
  },
  {
    path: "/organizations/:id",
    method: "delete",
    func: protect(organizations.deleteOrganization),
  },
];

module.exports = routes;
