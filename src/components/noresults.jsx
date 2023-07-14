import "../css/noresults.css"
import image from '../img/noresults.JPG'  //se le pone un nombre y despues se la importa


export const Noresults = ()=>{

const img_url = 'https://storage.googleapis.com/bd-doctors-2.appspot.com/noresults.JPG?GoogleAccessId=service-185533593610@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1689109158&Signature=jjL%2BE%2B/3vE5%2BP2vpekn8RQsaU88wPtNnO%2Bfv1JdglJxVkQmbWBiXGhWHqWaopvtFZqr7UtseNOhc0AU3qjkR%2B/17fo4pcuSH0wQMqZ0cPnoVQzNUHcFYWkNqgahR6TGEpZ8ZP0nDE16No%2BQ3or0gNmZL%2B2hEJn9lBfncRd8etnfVfNCP30X2FLuaMXH0qqZGIVGAKefXWEWs0e4gue0uIEY5PAlVj7Mmp0YXyhXjodOFDMX94wPSmlHCovPjqulPOecJTJ1yT7EBEjfcv5A185zNvOcXarjfl8/9lbkibWn5TB6Jm4nop79%2BxRY/y5L0Lxk%2BL%2BWOvWHZEmbeBG27rg%3D%3D'

return(

    <div className="container"><div className="imagen" ><img  src={image} alt="no results" /></div><h3 className="parrafo">No se encontraron resultados, por favor realice una nueva búsqueda</h3> </div>

)


}