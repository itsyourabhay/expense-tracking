exports.resetResponse = (id) => {
  const string = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>signup</title>
      <style>
      * {
      padding: 0px;
      margin: 0px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    body {
      height: 100vh;
      width: 100vw;
      background: rgb(241, 38, 34);
      background: linear-gradient(
        140deg,
        rgba(241, 38, 34, 1) 0%,
        rgba(241, 88, 34, 1) 13%,
        rgba(18, 18, 18, 1) 13%,
        rgba(18, 18, 18, 1) 89%,
        rgba(241, 88, 34, 1) 89%,
        rgba(241, 38, 34, 1) 100%
      );
    }
    #upper {
      height: 15vh;
    }
    #main {
      width: 40%;
      margin: auto;
    }
    form {
      margin: auto;
      width: 50%;
    }
    input {
      color: white;
      background-color: #121212;
      margin-bottom: 10px;
      outline: none;
      padding-top: 20px;
      padding-bottom: 10px;
      width: 100%;
      border: none;
      border-bottom: 1px solid rgb(198, 194, 194);
    }
    input:focus {
      background-color: #121212;
      border-bottom: 1px solid rgb(255, 255, 255);
    }
    input::placeholder {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      color: white;
    }
    p {
      font-size: 13px;
      margin-bottom: 20px;
      color: white;
    }
    h1 {
      font-size: 28px;
      color: white;
    }
    button {
      cursor: pointer;
      margin-top: 20px;
      height: 40px;
      background: rgb(241, 38, 34);
      background: linear-gradient(
        140deg,
        rgba(241, 38, 34, 1) 0%,
        rgba(241, 88, 34, 1) 89%
      );
      border: none;
      color: white;
      border-radius: 20px;
      width: 100%;
    }
    button:hover {
      opacity: 0.8;
      transition: 0.2s;
    }
    button:active {
      opacity: 0.6;
      transition: 0.2s;
    }
    #logInLinkDiv {
      margin: auto;
      margin-top: 10px;
      border-radius: 20px;
      border: 1px solid rgb(198, 194, 194);
      height: 25px;
      text-align: center;
      width: 100%;
    }
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      opacity: 0.8;
    }
    a:active {
      opacity: 0.6;
    }
    
    @media only screen and (max-width: 1200px) {
      #main {
        width: 50%;
        margin: auto;
      }
      form {
        margin: auto;
        width: 60%;
      }
    }
    
    @media only screen and (max-width: 992px) {
      #main {
        width: 60%;
        margin: auto;
      }
    
      form {
        margin: auto;
        width: 70%;
      }
    }
    
    /*Medium devices (landscape tablets, 768px and up) */
    @media only screen and (max-width: 768px) {
      #main {
        width: 80%;
        margin: auto;
      }
      form {
        margin: auto;
        width: 70%;
      }
    }
    
    @media only screen and (max-width: 600px) {
      #main {
        width: 90%;
        margin: auto;
      }
      form {
        margin: auto;
        width: 80%;
      }
    }
    
      </style>
    </head>
    <body>
      <div id="upper"></div>
      <div id="main">
        <form action="submit" , method="post">
          <h1>Reset Password</h1>
          <p>Let's get started with this amazing journey</p>
          <input
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="password"
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </body>
  </html>
  <script>
    const input = document.querySelectorAll("input");
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
e.preventDefault()
      if (input[0].value === input[1].value) {
        fetch("http://54.91.77.43:9000/password/resetpasswordsubmit/${id}", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            password: input[0].value,
          }),
        });
      } else {
        document.querySelector("p").style.color = "red";
        document.querySelector("p").innerText = "Password Missmatch";
      }
    });
  </script>`;
  return string;
};
