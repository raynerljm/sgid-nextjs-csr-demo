import { SgidClient } from "@opengovsg/sgid-client";

const sgidClient = new SgidClient({
  clientId: String(process.env.SGID_CLIENT_ID),
  clientSecret: String(process.env.SGID_CLIENT_SECRET),
  privateKey: String(process.env.SGID_PRIVATE_KEY),
  redirectUri:
    process.env.NODE_ENV !== "development"
      ? "https://sgid-nextjs-csr-demo-git-test-oidc-conformance-raypuff.vercel.app/api/callback"
      : "http://localhost:3000/api/callback",
  hostname: "https://www.certification.openid.net/test/a/sgid-sdk-test",
});

export { sgidClient };
