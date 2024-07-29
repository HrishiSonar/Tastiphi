
import { useRouteError } from "react-router-dom";

import React from "react";

function Errror() {
    const err = useRouteError();
    console.log(err);
  return (<>

    <div>
      <h1>something went wrong</h1> <h2> sorry nigga</h2>
    </div>
    <div>
    {err.status}
    </div>
    </>
  );
}

export default Errror;
