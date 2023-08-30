import React from "react";

function Count({ count, text }) {
  console.log(`Rendering - ${text}`);
  return (
    <div>
      <h1>
        {text} - {count}
      </h1>
    </div>
  );
}

export default React.memo(Count);
