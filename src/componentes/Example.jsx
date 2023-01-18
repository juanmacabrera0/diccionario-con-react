
import React from "react";

function Example( {data} ){

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
                                {Def.example != undefined && 
                                <div className="container-single"
                                  key={index}>
                                  <h1>{Def.example}</h1>
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

export default Example;