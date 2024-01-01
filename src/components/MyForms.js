import { useState } from "react";
import "./MyForms.css"

const Myforms = ({user}) => {

    //usando useState para gerenciar os dados do imput e carregalos sem a necessidade de atualizar a pagina
    const [name, setName] = useState(user ? user.name:'')
    const [email, setEmail]=useState(user? user.email:'')

    const handleName = (e) =>{
        setName(e.target.value)
    };

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }; 
    
    console.log(email)

    const handlerSubmit=(e)=>{

        e.preventDefault();
        console.log("eviando o formulario")
        console.log(name, email);

        setName("");
        setEmail("");
    };

    

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                
                <div>
                    <label htmlFor="name">Nome </label>
                    <input type="text" name="name" placeholder="digite seu Nome Completo ..." onChange={handleName} value={name} />
                </div>

                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" placeholder="digite seu Email ..." onChange={handleEmail} value={email}/>
                </div>

                <input type="submit" value="Enviar" />

            </form>


        </div>
    );

}
export default Myforms;