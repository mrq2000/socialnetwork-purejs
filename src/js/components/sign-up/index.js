customElements.define('sign-up',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const testHere = () => {
        return ({
          html: /*html*/`
            <style type="text/css">
              .container{
                max-width: 700px;
                width: 100%;
                background: #fff;
                padding: 25px 30px;
                border-radius: 5px;
              }
              .container .title{
                font-size: 25px;
                font-weight: 500;
                position: relative;
              }
              .container .title::before{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                height: 3px;
                width: 30px;
                background: linear-gradient(135deg, #71b7e6, #9b59b6);
              }
              .container form .user-details{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 20px 0 12px 0;
              }
              form .user-details .input-box{
                margin-bottom: 15px;
                width: calc(100% / 2 - 20px);
              }
              .user-details .input-box .details{
                font-weight: 500;
                margin-bottom: 5px;
                display: block;
              }
              .user-details .input-box input{
                height: 45px;
                width: 100%;
                outline: none;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding-left: 15px;
                font-size: 16px;
                border-bottom-width: 2px;
                transition: all 0.3s ease;
              }
              .user-details .input-box input:focus,
              .user-details .input-box input:valid{
                border-color: #9b59b6;
              }
              form .gender-details .gender-title{
                font-size: 20px;
                font-weight: 500;
              }
              form .gender-details .category{
                display: flex;
                width: 80%;
                margin: 14px 0;
                justify-content: space-between;
              }
              .gender-details .category label{
                display: flex;
                align-items: center;
              }
              .gender-details .category .dot{
                height: 18px;
                width: 18px;
                background: pink;
                border-radius: 50%;
                margin-right: 10px;
                border: 5px solid transparent;
                transition: all 0.3s ease;
              }
              #dot-1:checked ~ .category label .one,
              #dot-2:checked ~ .category label .two,
              #dot-3:checked ~ .category label .three{
                border-color: #d9d9d9;
                background: #9b59b6;
              }
              form input[type="radio"]{
                display: none;
              }
              form .button{
                height: 45px;
                margin: 45px 0;
              }

              #submitBtn {
                padding: 10px;
                height: 100%;
                width: 100%;
                outline: none;
                color: #fff;
                border: none;
                font-size: 18px;
                font-weight: 500;
                border-radius: 5px;
                letter-spacing: 1px;
                background: linear-gradient(135deg, #71b7e6, #9b59b6);
              }
              #submitBtn:hover{
                background: linear-gradient(135deg, #71b7e6, pink);
              }
              @media(max-width: 584px){
                .container{
                  max-width: 100%
                }
                form .user-details .input-box{
                  margin-bottom: 15px;
                  width: 100%;
                }
                form .gender-details .category{
                  width: 100%;
                }
                .container form .user-details{
                  max-height: 300px;
                  overflow-y: scroll;
                }
                .user-details::-webkit-scrollbar{
                  width: 0;
                }
              }
            
              #submitBtn:disabled {
                background-color: #bbbec1;
              }
            </style>

            <div class="container">
              <div class="title">Registration</div>
              <form onsubmit="return false">
                <div class="user-details">
                  <div class="input-box">
                    <span class="details">
                      Full Name
                    </span>
                    <input type="text" placeholder="Enter your name" id="fullName" required>
                  </div>
                  <div class="input-box">
                    <span class="details">
                      Id student
                    </span>
                    <input type="text" placeholder="Enter your Id student" id="mssv" required>
                  </div>
                  <div class="input-box">
                    <span class="details">
                      Email
                    </span>
                    <input type="text" placeholder="Enter your email" id="email" required>
                  </div>
                  <div class="input-box">
                    <span class="details">
                      Password
                    </span>
                    <input type="password" placeholder="Enter your password" id="password" required>
                  </div>
                  <div class="input-box">
                    <span class="details">
                      Confirm Password
                    </span>
                    <input type="password" placeholder="Confirm your password" id="confirmPassword" required>
                  </div>
                  <div class="input-box">
                    <span class="details">
                      Province
                    </span>
                    <input type="text" placeholder="Province" id="province">
                  </div>
                  <div class="input-box">
                    <span class="details">
                      district
                    </span>
                    <input type="text" placeholder="district" id="district">
                  </div>
                </div>
                <div class="gender-details">
                  <input type="radio" name="gender" id="dot-1">
                  <input type="radio" name="gender" id="dot-2">
                  <input type="radio" name="gender" id="dot-3">
                  <span class="gender-title">Gender</span>
                  <div class="category">
                    <label for="dot-1">
                      <span class="dot one"></span>
                      <span class="gender">Male</span>
                    </label>
                    <label for="dot-2">
                      <span class="dot two"></span>
                      <span class="gender">Female</span>
                    </label>
                    <label for="dot-3">
                      <span class="dot three"></span>
                      <span class="gender">Other</span>
                    </label>
                  </div>
                </div>

                <button class="button" id="submitBtn" onclick="signUp()">
                  Register
                </button>
              </form>
            </div>
        `,
        })
      }

      const templateEl = document.createElement("template");

      templateEl.innerHTML = testHere().html;

      this.append(templateEl.content.cloneNode(true));
    }
  }
);