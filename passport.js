import passport from "passport";
import User from "./models/User";

//strategy => 로그인 하는 방식
//createStrategy => 이미 완성된 로그인 strategy를 생성해줌
passport.use(User.createStrategy());

// serializeUser & deserializeUser
// serialization
//  -어떤 정보를 쿠키에게 주느냐를 의미(쿠키가 어떤 정보를 가질수 있으냐)
//  -어떤 field가 쿠키에 포함될 것인지 알려주는 역할

// deserializeUser
//  -어느 사용자인지 어떻게 찾는가를 의미

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
