import jwt from 'jsonwebtoken';
//passing the user id to generate the token through specific user 
export const generateJWTToken = (res, userID) => {
    const token = jwt.sign({ id: userID }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })
}

res.cookie("token", token, {
    httpOnly: true, //cookie is not accessible through client side script
    secure: process.env.NODE_ENV === "production", //cookie will only be set in production
    sameSite: "strict" //cookie will only be set in the same site

})