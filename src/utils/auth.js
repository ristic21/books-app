export default (to, from, next) => {
  if (
    localStorage.getItem("accessToken") != null &&
    localStorage.getItem("accessToken").length > 0
  ) {
    next();
  } else {
    localStorage.removeItem("accessToken");
    next("/");
  }
};
