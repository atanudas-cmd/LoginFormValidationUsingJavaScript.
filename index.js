
        // ******************Email ********************************


        // onblur function
        function email1() {
            var EmailId = document.querySelector(".Email").value;
            var regExp =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!regExp.test(EmailId)) {
                document.querySelector(".lable1").style.top = "19px";
                document.querySelector(".lable1").style.color = "red";
                document.querySelector(".Email").style.border = "2px solid red";
                document.querySelector(".Email").value = "";
                document.querySelector(".className1").innerHTML = "Please enter your email id";
                document.querySelector(".className1").style.color = "red";
                return false;   
            }
            else {
                document.querySelector(".lable1").style.top = "-0.1px";
                document.querySelector(".lable1").style.color = "green";
                document.querySelector(".lable1").style.backgroundColor = "white";
                document.querySelector(".Email").style.border = "2px solid green";
                document.querySelector(".className1").innerHTML = "";
            }
        }
        // onclick function
            function email2() {
                document.querySelector(".lable1").style.top = "-0.1px";
            }
        //onkeyup function
            function email3() {
                document.querySelector(".lable1").style.top = "-0.1px";
                var EmailId = document.querySelector(".Email").value;
                var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
                if (!regExp.test(EmailId)) {
                    document.querySelector(".className1").innerHTML = "Enter proper format only";
                    document.querySelector(".className1").style.color = "red";
                }
                if (regExp.test(EmailId)) {
                    document.querySelector(".className1").innerHTML = "";
                    document.querySelector(".lable1").style.top = "-0.1px";
                }
            }
    


              //********************Password****************************

// onblur function
    function password1() {
        var Password_Id = document.querySelector(".Password").value;
        var regExp =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!regExp.test(Password_Id)) {
            document.querySelector(".lable2").style.top = "19px";
            document.querySelector(".lable2").style.color = "red";
            document.querySelector(".Password").style.border = "2px solid red";
            document.querySelector(".Password").value = "";
            document.querySelector(".className2").innerHTML = "Please enter your password.";
            document.querySelector(".className2").style.color = "red";
            return false;   
        }
        else {
            document.querySelector(".lable2").style.top = "-0.1px";
            document.querySelector(".lable2").style.color = "green";
            document.querySelector(".lable2").style.backgroundColor = "white";
            document.querySelector(".Password").style.border = "2px solid green";
            document.querySelector(".className2").innerHTML = "";
        }
    }
    // onclick function
        function password2() {
            document.querySelector(".lable2").style.top = "-0.1px";
        }
    //onkeyup function
        function password3() {
            document.querySelector(".lable2").style.top = "-0.1px";
            var Password_Id = document.querySelector(".Password").value;
            var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            if (!regExp.test(Password_Id)) {
                document.querySelector(".className2").innerHTML = "Min. 8 character with mixed character.";
                document.querySelector(".className2").style.color = "red";
            }
            if (regExp.test(Password_Id)) {
                document.querySelector(".className2").innerHTML = "";
                document.querySelector(".lable2").style.top = "-0.1px";
            }
        }



        