const organizations = require("../services/organization-service");

module.exports = {
  addOrganization: async (req, res, claims) => {
    const creator_id = claims.user_id;
    const { name, description, address } = req.body;
    const organization = await organizations.addOrganization(
      name,
      creator_id,
      description,
      address
    );
    if (!organization) res.status(400).send("Bad data!");
    else res.json(organization);
  },
  getOrganization: async (req, res) => {
    const id = req.params.id;
    const organization = await organizations.getOrganization(id);
    if (!organization) res.status(400).send("Wrong id!");
    else res.json(organization);
  },
  updateOrganization: async (req, res, claims) => {
    const id = req.params.id;
    const creator_id = claims.user_id;
    const { name, description, address } = req.body;
    try {
      const modified = await organizations.updateOrganization(
        id,
        name,
        creator_id,
        description,
        address
      );
      if (!modified) res.status(400).send("Bad data");
      else res.status(200).send();
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },
  deleteOrganization: async (req, res, claims) => {
    const id = req.params.id;
    const creator_id = claims.user_id;
    try {
      const deleted = await organizations.deleteOrganization(id, creator_id);
      if (!deleted) res.status(400).send("Bad data");
      else res.status(200).send();
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  },
};
