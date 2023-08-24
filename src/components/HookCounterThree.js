import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <label htmlFor="firstname">First Name : </label>
        <input
          placeholder="Enter firstName"
          id="firstname"
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <br />
        <label htmlFor="lastname">Last Name : </label>
        <input
          placeholder="Enter lastName"
          id="lastName"
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h1>FirstName - {name.firstName}</h1>
        <h3>Weds</h3>
        <h1>LastName - {name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
