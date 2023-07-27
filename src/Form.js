import { useEffect, useState } from "react";

const Form = (props) => {
  // life cycle method
  // function performs actions on react states

  // console.log(props.editUser)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [users, setUsers] = useState([]);

  // console.log(users);

  // const [table, setTable] = useState({});
  // console.log(props.editUser, typeof props.editUser)

  useEffect(() => {
    if (props.editUser) {
      // console.log(props.editUser);
      setEmail(props.editUser.email);
      setName(props.editUser.name);
      setAge(props.editUser.age);
    }
  }, [props.editUser]);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // event ko params me lerk
    // preventDefault() --> loop me jaane se rokega kyoki form submit hone ke baad refresh hota hai
    // console.log(event.target.email.value);
    // console.log(event.target.name.value);
    // console.log(event.target.age.value);

    const table = {
      email: email,
      name: name,
      age: age
    };

    props.addUsers(table);

    // const users_ref = users;
    // users_ref.push(table);
    // setUsers(users_ref);
    // the above one is not the best practice

    // best practice
    // is to use empty array then copy existing users element in our empyt array then append the data get from frontend in our new_arry then set that array using setUsers
    // use the spread ooperator in js

    // console.log(table); in order to check data
    setEmail("");
    setName("");
    setAge("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    // console.log(e.target.value);
    setAge(e.target.value);
  };
  return (
    <>
      <h1 className="text-center">Form</h1>
      <form type="submit">
        <div className="">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              // whenever i have to pass any variable here I need to write it inside {} (curly braces) this brackets
              value={email}
              onChange={(e) => {
                handleEmailChange(e);
              }}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              // value="Niraj"
              value={name}
              onChange={(e) => {
                handleNameChange(e);
              }}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              // value="22"
              value={age}
              onChange={(e) => {
                handleAgeChange(e);
              }}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your age"
            />
          </div>

          <div className="text-center">
            <input
              className="btn btn-outline-dark"
              type="submit"
              value="Submit"
              onClick={(event) => {
                handleSubmit(event);
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
