import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { store } from "../../lib/store";
import { sgidClient } from "../../lib/sgidClient";
import { setCookie } from "cookies-next";
import { generatePkcePair } from "@opengovsg/sgid-client";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retrieve the state from the query params
  let { state } = req.query;
  state = String(state);

  // Generate a session ID
  const sessionId = uuidv4();

  // Generate a PKCE pair (consisting of code challenge and code verifier)
  const { codeChallenge, codeVerifier } = generatePkcePair();

  // Generate an authorization URL
  const { url, nonce } = sgidClient.authorizationUrl({
    state,
    codeChallenge,
  });

  // Store the code verifier, state and nonce in the store
  store.set(sessionId, { codeVerifier, state, nonce });

  // Set the session ID in the browser cookies
  setCookie("sessionId", sessionId, { req, res, httpOnly: true, secure: true });

  // Redirect the browser to the authorization URL
  res.redirect(url);
}
