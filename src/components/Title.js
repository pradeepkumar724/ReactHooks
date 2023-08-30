import React from "react";

function Title() {
  console.log("Rendering title component");
  return (
    <div>
      <h1>UseCallback Hook</h1>
    </div>
  );
}

export default React.memo(Title);
