// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { store } from "../../lib/store";
import { sgidClient } from "../../lib/sgidClient";
import { setCookie } from "cookies-next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { state } = req.query;

  const sessionId = uuidv4();

  const { url, nonce } = sgidClient.authorizationUrl(
    String(state),
    "openid myinfo.name"
  );

  store.set(sessionId, { state: String(state), nonce });

  setCookie("sessionId", sessionId, { req, res });

  res.redirect(url);
}
