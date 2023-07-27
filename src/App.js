import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Form from "./Form";
import Table from "./Table";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUser, seteditUser] = useState(null);
  const [user_id,setUserId] = useState('');
  const [flag,setFlag] = useState(0);

  
  const handleEditUpdate = (obj,user_id) => {
    // console.log(obj);
    seteditUser(obj)
    setUserId(user_id)
    setFlag(1);
    // console.log(editUser)
  };

  // const addUpdateData = (obj) => {
  //   // console.log("update value reflected")

  //   // let updatedValue = users.filter((val,i)=>{
  //   //   return 
  //   // })

  //   const userRef = [...users]
  //   userRef.map((val,i)=>{
  //     if(user_id === i){
  //       val.email = obj.email
  //       val.name = obj.name
  //       val.age = obj.age
  //     }
  //   })
    
  //   setUsers(userRef)
  //   seteditUser(null)
    
  // }

  // console.log("App Users", users);
  // console.log(editUser);

  const addUsers = (user_data) => {

    if(flag === 1){
      // console.log(user_data);
      const userRef = [...users];
      userRef.map((obj,i)=>{
        if(user_id === i){
          obj.email = user_data.email;
          obj.name = user_data.name;
          obj.age = user_data.age;
        }
      })

      setUsers(userRef);
      setFlag(0);
    }

    else{
      const usersRef = [...users];
      usersRef.push(user_data);
      setUsers(usersRef);
    }

    // const usersRef = users;
    // this approach causes probelm above approach
    // const usersRef = [...users];
    // usersRef.push(user_data);
    // setUsers(usersRef);
    // ye state ko update bhi kr dega but ye state componnet ko re-render nahi kr rahi hai
    // toh basically users ke pass abhi bhi vahi value hogi pehle wali jab re-render hoga tab hi
    // users ki value update hogi

    // now we do best practice thing
    // const userRef = [...users];
    // usersRef.push(user_data);
    // setUsers(usersRef);
  };



  const deleteUser = (user_id) => {
    // console.log(user_id);
    let updateUser = users.filter((obj, i) => {
      return i !== user_id - 1;
      // You can write your code just after return and just before ()
    });

    setUsers(updateUser);
  };



  // console.log(editUser)

  return (
    <div className="App">
      <Form addUsers={addUsers} editUser={editUser} flag={flag} />
      <Table
        user_data={users}
        deleteUser={deleteUser}
        handleEditUpdate={handleEditUpdate}
      />
    </div>
  );
};
export default App;
