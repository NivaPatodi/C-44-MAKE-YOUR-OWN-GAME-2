class Page3_2
{
    constructor()
    {
        this.login = createButton('LOGIN');
        this.signup = createButton('SIGN UP');
    }

    hide()
    {
        this.login.hide();
        this.signup.hide();
    }

    display()
    {
        this.login.position(windowWidth/2.5, windowHeight/2);
        this.signup.position(windowWidth/1.8, windowHeight/2);
    }    
}