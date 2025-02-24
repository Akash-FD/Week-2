// import { FC } from "react"

import axios from "axios";
import { useEffect, useState } from "react";

// interface AppProp{               // props with interface
//   title:string 
// }

// type AppProp = {                    // props with type 
//   title:string
// }

//const App: FC<AppProp> = () =>{      
  const App = ({ title } :{ title: string }) =>{       //{ title }: { title: string }

    const [user, setUser]= useState([])

    useEffect(() => {
       const getUser = async()=>{
        try {
          const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
          setUser(data)
          

          
        } catch (error) {
          console.log(error);
          
          
        }
        
       }
       getUser()
      }, [])
      console.log(user);

    
    

   return <> 
   <h1>{title}</h1> 
   <div>
    {user.map((item, index)=>{
      return <li key={index}>{item.name}</li>
    })}
   </div>
   </>
}

export default App;
