const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email;
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
const usernameResponse= emailSchema.safeParse(username);
const  passwordResponse = passwordSchema.safeParse(password)
 if( !usernameResponse.success || !passwordResponse.success){
    return null;
 }

 const signature = jwt.sign({
    username
 }, jwtPassword)

return signature
}

function verifyJwt(token){
    let ans= true;
    try{
      jwt.verify(token,jwtPassword)
    }catch(e){
       ans = false;
      
    }
    return ans;
  }

function decodeJwt(token){
    // true false
  const decoded= jwt.decode(token);
  if(decoded){
    return true;
  }
  else{
    return false;
  }
  
}

// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
