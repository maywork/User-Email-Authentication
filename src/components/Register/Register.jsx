
const Register = () => {

  const handleRegister = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  }

  return (
    <div>
      <h2 className="text-3xl my-4">Please Register</h2>
      <form onSubmit={handleRegister} className="my-4">
        <input className="my-4 w-3/4 rounded-sm py-2 px-2" type="email" name="email" placeholder="Email Address" id="" />
        <br />
        <input className="my-4 w-3/4 rounded-sm py-2 px-2" type="password" name="password" placeholder="Password" id="" />
        <br />
        <input className="btn btn-secondary my-4 w-3/4" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;