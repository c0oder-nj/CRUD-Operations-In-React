const Table = (props) => {
  // console.log(props.user_data);
  // data reaches till here
  return (
    <>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id.</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {props.user_data.map((obj, i) => {
            return (
              <tr key={i + 1}>
                <th scope="row">{i + 1}</th>
                <td>{obj["email"]}</td>
                <td>{obj["name"]}</td>
                <td>{obj["age"]}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      props.deleteUser(i + 1);
                    }}
                  >
                    Delete
                  </button>
                </td>
                {/* the above approach give me {}} in console 
                problem is solve by passing key attribute in tr */}

                {/* in order to solve above warning
                key error aa rahi hai upar
                hamara jo th hai vo ek component ki tarah work kr raha hai 
                har ek row uska ek children hoga
                
                so jab ham key de denge toh vo sirf usi child ko re-render krega jisse hamari warning hat jayegi or react ka optimization better hoga*/}

                {/* <td>{obj.email}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td> */}

                <td>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => {
                      props.handleEditUpdate(obj,i);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
