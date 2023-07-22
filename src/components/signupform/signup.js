import React from "react";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => navigate("/mainsitepage");
  const navigate = useNavigate();

  return (
    <div className="signincontainer">
      <div className="signinform">
        <h2>Sign In</h2>
        <form
          id="form"
          classname="signinform"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label for="email" className="txt">
            Email
          </label>
          <br />
          <input
            type="text"
            {...register("email", { required: true })}
            id="email"
            name="email"
            placeholder="ex:christian@gmail.com"
          ></input>
          <br />
          {errors.email?.type === "required" && "Email is required"}
          <br />
          <label for="username" className="txt">
            Username
          </label>
          <br />
          <input
            type="text"
            {...register("username", { required: true })}
            id="username"
            name="username"
            placeholder="ex:Ghost0982"
          ></input>
          <br />
          {errors.username?.type === "required" && "Username is required"}
          <br />
          <label for="password" className="txt">
            Password
          </label>
          <br />
          <input
            type="text"
            {...register("password", { required: true })}
            id="password"
            name="password"
            placeholder="ex:*******"
          ></input>
          <br />
          {errors.password?.type === "required" && "Password is required"}
          <br />
          <label for="phonenumber" className="txt">
            Phone Number
          </label>
          <br />
          <input
            type="text"
            {...register("phonenumber", { required: true })}
            id="phonenumber"
            name="phonenumber"
            placeholder="0123456789"
          ></input>
          <br />
          {errors.phonenumber?.type === "required" &&
            "Phone number is required"}
          <button className="btn">Submit</button>
          {/* <input type="Submit" onClick={handleClick}></input> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
