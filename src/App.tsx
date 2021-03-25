import { useEffect, useState } from "react";
import { genericController } from "./api/generic-api";
import { People } from "./api/schemas/people";

function App() {
  const [schema, setSchema] = useState<People>();
  const { getById } = genericController<People>("people");

  useEffect(() => {
    getById(2)
      .then((valor) => setSchema(valor))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>{schema ? schema.created : null}</h1>
    </div>
  );
}

export default App;
