import React from 'react'

export default function table(props) {

    console.log(props)
    return (
        <div>
            <table>
                    <thead>
                        <tr>
                            <th>albumId</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            props.tabledata.map((data)=>{
                                return(
                                    <tr>
                                       <td>{data.albumId}</td>
                                      <td>{data.title}</td>
                                    </tr>
                                )   
                                
                            })

                        }


                      
                    </tbody>
                </table>
        </div>
    )
}
