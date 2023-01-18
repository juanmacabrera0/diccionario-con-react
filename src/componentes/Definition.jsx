
import React from "react";

function Definition( {data} ){

    if(data != null)
    {return (
        <>
        {
            data.map((Means) => {
                if (Means != null){
                    return Means.definitions.map((Def, index) => {
                        if (Def != null){
                            return (
                                <>
                                {Def.definition != undefined && 
                                <div className="container-single"
                                  key={index}>
                                  <h1>{Def.definition}</h1>
                                </div>}
                                </>
                            )
                        }
                        
                    })
                }
                
            })
        }
        </>
    );}
};

export default Definition;