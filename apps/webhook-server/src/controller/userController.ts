import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@packages/backend/convex/_generated/api";

const url = process.env.CONVEX_URL!;
const client = new ConvexHttpClient(url);

export default async function userController(fastify: FastifyInstance) {
  const data = await client.query(api.notes.getNotes);
  console.log({ data });

  fastify.get(
    "/",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      reply.send({
        balance: "$3,277.32",
        picture: "http://placehold.it/32x32",
        age: 30,
        name: "Leonor Cross",
        gender: "female",
        company: "GRONK",
        email: "leonorcross@gronk.com",
        url,
      });
    }
  );
}
