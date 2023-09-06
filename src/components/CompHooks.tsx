import React, { useEffect, useState } from "react";

function CompHooks() {
  const [data, setData] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    const f = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        console.error(e);
      }
    };

    f();
  }, []);

  return (
    <div>
      {data.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  );
}

export default CompHooks;
