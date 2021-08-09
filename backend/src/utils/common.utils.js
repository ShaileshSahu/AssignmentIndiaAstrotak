import  { SALT } from './secret.util.js';
export const responseMerge = (MainCode, {
    data,
    available = false
}) => {
    return {
        ...MainCode,
        ...{
            data: data,
            available
        }
    };
};


export const jwtTokenGenerator = (data) => {
    return jwt.sign(data, SALT);
  };
  
  export const jwtTokenVerify = (token) => {
    try {
      const tokenData = jwt.verify(token, process.env.JWTSECRET);
      if (!tokenData) return { fail: true };
      return { fail: false, tokenData };
    } catch (error) {
      return { fail: true };
    }
  };