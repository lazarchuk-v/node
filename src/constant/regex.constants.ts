export const regexConstants: { [key: string]: RegExp } = {
  EMAIL: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};
