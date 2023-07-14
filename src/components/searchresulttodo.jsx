// import {get}from '../utils/clienthttp'
import { useEffect,useState } from 'react'
import {bd} from '../firebase/conexion'
import {collection,doc,getDoc,getDocs,deleteDoc} from 'firebase/firestore'
// import { getStorage ,ref, getBytes} from "firebase/storage";
import { getApp } from "firebase/app";
// import 'bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {Link} from 'react-router-dom'
import {storage} from '../firebase/conexion'
import { ref,getStorage,getDownloadURL} from 'firebase/storage'
import {Search} from './search'
import {useLocation, useNavigate,useParams} from 'react-router-dom'
import {Singout} from './singout'
import {Table} from './table'
import {Noresults} from './noresults'
import "../css/searchResult.css"

export const Result = ()=>{

   const [todos,settodos] = useState([])
   const [medicos,setmedicos]=useState([])
   // const [medicosfiltrados, setmedicosfiltrados] = useState([])
   const [palabraclave,setpalabraclave] = useState(null)
   const [palabraFront,setpalabraFront] = useState([''])
   const [resultado,setresultado] = useState(true)
   // const [pics,setpics] = useState([])  //con esto tengo que empezar a hacer la descarga
//    const[plan,setplan] = useState('210')
   




   const {plan} = useParams();

   const navigate = useNavigate();


   //extraccion de parametro de URL

   const location = useLocation();
    

   //nosotros definimos usequery, que usa el metodo urlserchparams 

   const useQuery = ()=>{
        
   return  new URLSearchParams(location.search)
        
    }

   const query=useQuery()
   console.log('QUERY: ',query);

   const search = query.get('search') //con esto extraigo el parametro (search es la clave, el valor es la palabra para la busqueda) search de location
    
   console.log('SEARCH: ',search);

   console.log('LOCATION: ',location.search);
    // const location = useLocation(); esta se usa en peliculas grid porque se tiene que usar donde se realiza la busqueda

    // const palabra = ()=>{}

    




   
   const doctores = collection(bd,plan)
 
   
   const getdoctors = async()=>{

      
      console.log('PLAN:', plan);


      console.log('RESULTADO AL PRINCIPIO',resultado)

      const datos = await getDocs(doctores);
      // const pics = await  getBytes(StorageReference);


      console.log('LOS DATOS SON:', datos.docs);
      // console.log('LAS FOTOS SOON',pics);

      setpalabraclave(searsssssch)
      setpalabraFront( palabraclave[0].toUpperCase()+palabraclave.slice(1))

      
      console.log('SEARCH DENTRO DE GET DOCTORS',search);
      console.log('PALABRA CLAVE' , palabraclave);
      
      
      setmedicos(

         datos.docs.map((doc)=>(({...doc.data(), id:doc.id}))) //al paecer data solo se puede invocar de una solaforma sino arroja error
         

      )

                
             
         

         if(palabraclave!==null)
          {
         // console.log('PALABRA CLAVE' , palabraclave);
          console.log('DENTRO DE IF PALABRA CLAVE !==',palabraclave);
            const especialidad = (medicos.filter(medico=>medico.specialty==palabraclave));
               //   if(especialidad.length!==0)
                 {settodos(especialidad)
                  console.log('DENTRO DE ESPECIALIDAD NEGADO');
                  console.log('TODOS',todos,'ESPECIALIDAD', especialidad, 'PALABRA CLAVE IF',palabraclave);}
            //     else{{const nombre = (medicos.filter(medico=>medico.name==palabraclave));
            //          if(nombre.length!==0){settodos(nombre);
            //             console.log('TODOS',todos,'NOMBRE', nombre)}
            //             else {const apellido = (medicos.filter(medico=>medico.lastname==palabraclave));
            //                if(apellido.length!==0){settodos(apellido);
            //                   console.log('TODOS',todos,'APELLIDO', apellido)}
            //                else{const ciudad = (medicos.filter(medico=>medico.city==palabraclave))
            //                   if(ciudad.length!==0){settodos(ciudad);
            //                      console.log('TODOS',todos,'CIUDAD', ciudad) }
            //                   else console.log('NO HAY RESULTADOS');setresultado(false);;}
            //                   }}}

             
            //  ;
            //  console.log('TODOS',todos,'IF name');
            //  (medicos.filter(medico=>medico.lastname==palabraclave));
            //  console.log('TODOS',todos,'IF lalstname')
            //  (medicos.filter(medico=>medico.city==palabraclave));
            //  console.log('TODOS',todos,'IF city')
            console.log('RESULTADO AL FINAL',resultado)
         }

           else navigate('/doctors')
         // console.log('PALABRA', palabraclave)
         // console.log('TODOS',todos);
      //aca tengo que bajar las fotos
         // setpics(download(),{pics:pics.name}) 
      

}

// const download = async() =>{
         
//          const pathReference = ref(storage,`${archivo.name}`)
//          return await console.log(getDownloadURL(pathReference));  //con esto consigo el valor de la URL
//       }

useEffect(
   ()=>{getdoctors(search)},[search]
)




return(

<>

   

   <div >


      
      <div className='prestador'>
         <><h3>Resultado de busqueda de Prestadores</h3>
         <h4>{palabraFront} en el plan {plan} , para realizar otra busqueda diríjase a <Link className='home' to={'/search'}>Nueva búsqueda</Link></h4></>
         {/* <h4>Por favor ingrese el plan donde donde pertenece su prestador: </h4> */}
         
            {/* <select onChange={(e)=>setplan(e.target.value)}>
               <<option value="210">210</option>
               <option value="310">310</option>
               <option value="410">410</option>
            </select> */}
      
         
      
         {/* <table><tr><Link to={'/doctors/create'}><tr>Crear prestador</tr></Link></tr></table> */}

         <Table medicos = {todos}/>

            {/* {resultado?<Table medicos = {todos}/>:<Noresults/>}    */}
            


{/* 

         <div class="container">
  <div class="row">
    <div class="col">
      
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
                  
            
            {todos.map((medico)=>
            <tr key={medico.id}>
            <td className='datos'>{(medico.name)[0].toUpperCase()+(medico.name).slice(1)}</td>
            <td className='datos'>{(medico.lastname)[0].toUpperCase()+(medico.lastname).slice(1)}</td>
            <td className='datos'>{(medico.specialty)[0].toUpperCase()+(medico.specialty).slice(1)}</td>
               
               <td className='datos'>{(medico.street)[0].toUpperCase()+(medico.street).slice(1)}</td>
               <td className='datos'>{medico.number}</td>
               <td className='datos'>{(medico.city)[0].toUpperCase()+(medico.city).slice(1)}</td>
            
            <td><div className='divPerfil' ><img className='imgPerfil' src={medico.url} alt="imagen_perfil" /></div></td> */}
            {/*<td>{medico.address.street} {medico.address.number } {medico.address.city }</td>*/} 
         
         
      {/* </tr> )} */}
            {/*  <td><img src={pic.url} alt="imagen_perfil" /></td> */}
            {/* porque si no agrego el () de los argumentos de la funcion, la misma se ejecuta de una? */}
            
            {/* </tbody>
         </table>
    </div>
    
  </div>
</div> */}


        
      </div>  
      </div>
      <Singout style={{marginRight:25}}/>
    
     


   </>
      )

   }