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

function login(userName,password){
    let users=['sindhu','rajeev','pavani','ramana'];
    let correctPassword='Emp@123';
    if(!users.includes(userName))
    {
        return "User_Not_Found,_Please_Signup";
    }
    else if(password === correctPassword)
    {
        return "Login_Successful";
    }
    else
    {
        return "Wrong_Password";
    }
}