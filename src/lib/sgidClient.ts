import { SgidClient } from "@opengovsg/sgid-client";

const sgidClient = new SgidClient({
  clientId: String(process.env.SGID_CLIENT_ID) || "",
  clientSecret: String(process.env.SGID_CLIENT_SECRET) || "",
  privateKey: String(process.env.SGID_PRIVATE_KEY).replace(/\\n/g, "\n") || "",
  // redirectUri: "https://sgid-nextjs-csr-demo.vercel.app/api/callback",

  // For local development
  redirectUri: "http://localhost:3000/api/callback",
});

export { sgidClient };
