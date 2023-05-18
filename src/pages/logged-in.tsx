type UserInfoRes = {
  sub?: string;
  userInfo?: Record<string, string>;
  state?: string;
};

const LoggedIn = () => {
  return <div>Logged in page</div>;
};

export default LoggedIn;
