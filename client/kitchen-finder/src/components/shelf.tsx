import React from "react";
import { Temperatures } from "../lib/interfaces";
function Shelf() {
  const [shelfRespnse, setShelf] = React.useState<Temperatures|undefined>();
  const getFact = React.useCallback(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setShelf(result);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  if (shelfRespnse)
    return (
      <div>
        {shelfRespnse.data &&
          shelfRespnse.data.map(itm => (
            <div>
              {itm.Nation}
              {itm.Year}
        {itm["ID Nation"]}
            </div>
          ))}
        <button
          onClick={() => {
            setShelf({data:[],source:[]});
          }}
        >
          un set
        </button>
      </div>
    );
  else {
    return (
      <div>
        <button onClick={getFact}>get Fact</button>
      </div>
    );
  }
}
export default Shelf;
