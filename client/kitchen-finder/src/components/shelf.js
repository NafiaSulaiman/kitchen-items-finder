import React from "react";
function Shelf() {
  const [shelfRespnse, setShelf] = React.useState();
  React.useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setShelf(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  if (shelfRespnse)
    return (
      <div>
        {shelfRespnse.fact}
        {shelfRespnse.length}
      </div>
    );
  else {
    return <div>{"no data"}</div>;
  }
}
export default Shelf;
