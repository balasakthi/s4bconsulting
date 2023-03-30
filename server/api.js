import { route } from "@nuxtjs/bridge";

export default route({
  path: "/api/hello",
  async handler(req, res) {
    res.json({ message: "Hello from the API!" });
  },
});
