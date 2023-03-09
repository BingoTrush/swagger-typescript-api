const Mock = require("mockjs");

export const success = <T>(data: T, message = "") => {
  const result = Mock.mock({
    ...data,
  });
  return {
    code: 0,
    message,
    data: {
      ...result,
    },
  };
};

export const success2 = <T>(data: T, message = "") => {
  const result = Mock.mock({
    ...data,
  });
  return {
    code: 0,
    message,
    data: data,
  };
};

export const error = (code: number, message) => {
  return {
    code: 500,
    message: message,
    data: null,
  };
};
