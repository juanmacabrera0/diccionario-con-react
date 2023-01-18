import React from "react";

function SynOrAnt({ data }) {
    if (data != null) {
        return (
            data.map((synOrAnt, index) => {
              return(
                <>
                {
                    synOrAnt != undefined &&
                    <div className="container-single"
                    key={index}>
                  <h1>{synOrAnt}</h1>
                </div>
                }
                
                </>
            )
            })
        )
    }
}
export default SynOrAnt;


