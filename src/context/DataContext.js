import { createContext } from 'react'

 const UserContext = createContext({
    state: false,
    setDelete: () => {}
  })

 export default UserContext