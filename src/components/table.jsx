


export const Table = ({medicos})=>{

return(    

        <div className="container">
        <div className="row">
            <div className="col">
            
            <table className='table table-hover'  >
                    
                    <thead >
                    <tr>
                                
                                <th className='datos'> Nombre</th>
                                <th className='datos'> Apellido</th>
                                <th className='datos'> Especialidad </th>
                                <th className='datos'colSpan={3}> Dirección</th>
                                <th className='datos' colSpan={3}>  </th>
                            </tr>
                    </thead> 
                    <tbody>    
                        
                    
                    {medicos.map((medico)=>
                    <tr key={medico.id}>
                    <td className='datos'>{(medico.name)[0].toUpperCase()+(medico.name).slice(1)}</td>
                    <td className='datos'>{(medico.lastname)[0].toUpperCase()+(medico.lastname).slice(1)}</td>
                    <td className='datos'>{(medico.specialty)[0].toUpperCase()+(medico.specialty).slice(1)}</td>
                    
                    <td className='datos'>{(medico.street)[0].toUpperCase()+(medico.street).slice(1)}</td>
                    <td className='datos'>{medico.number}</td>
                    <td className='datos'>{(medico.city)[0].toUpperCase()+(medico.city).slice(1)}</td>
                    
                    <td><div className='divPerfil' ><img className='imgPerfil' src={medico.url} alt="imagen_perfil" /></div></td>{/*<td>{medico.address.street} {medico.address.number } {medico.address.city }</td>*/} 
                
                
            </tr> )}
                    {/*  <td><img src={pic.url} alt="imagen_perfil" /></td> */}
                    {/* porque si no agrego el () de los argumentos de la funcion, la misma se ejecuta de una? */}
                    
                    </tbody>
                </table>
            </div>
            
        </div>
        </div>

    )
}
