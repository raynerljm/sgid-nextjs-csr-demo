type Session = {
  state?: string;
  nonce?: string;
  accessToken?: string;
  sgid?: string;
  userInfo?: Record<string, string>;
};

const store = new Map<string, Session>();

export { store };
