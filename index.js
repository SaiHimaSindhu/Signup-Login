function signup(userName){
    let users=['sindhu','pavani','ramana']
    if(users.includes(userName))
    {
        return "User_Already_Registered,_Please_Login";
    }
    else
    {
        users.push(userName);
        return "Signup_Successful,_Please_Login";
    }
}