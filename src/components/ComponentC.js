import React, { useContext } from "react";
import { UserChannel, UserValue } from "../App";

function ComponentC() {
  const value = useContext(UserValue);
  const channel = useContext(UserChannel);

  return (
    <div>
      {/* Beclearst Way */}
      <h1>
        {value} {channel}
      </h1>
      {/* Not Good */}
      <UserValue.Consumer>
        {(user) => {
          return (
            <UserChannel.Consumer>
              {(channel) => {
                return (
                  <h2>
                    User Name {user}, value {channel}
                  </h2>
                );
              }}
            </UserChannel.Consumer>
          );
        }}
      </UserValue.Consumer>
    </div>
  );
}

export default ComponentC;
