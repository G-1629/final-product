import React,{useState} from 'react'
import '../Styles/Header.css'
import Modal from 'react-modal';




Modal.setAppElement('#root')
export default function Header() {
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

   const facebookLogin= (response) => {
    console.log(response);
  }

  const googleLogin=(response) => {
    console.log(response);
  }

    return (
        <div className="header">
                <div className="s-logo">
                    <span>e!</span>
                </div>
                <div className="btn-group login-block">
                    <span className="login" onClick={()=>setIsLoginModalOpen(true)}>LogIn</span>
                    <span className="signUp">Create an account</span>
                </div>
                <Modal isOpen={isLoginModalOpen} className='login_form' >
                <h3 onClick={()=>setIsLoginModalOpen(false)} className='close_button' >X</h3>
                  <h2 className='login_title'>
                    Login
                    
                  </h2>
                  <form>
                    <div>
                        <div>
                          <input placeholder='email' type="email" className='form_input'/>
                        </div>
                        <div>
                        <input placeholder='password' type="password" className='form_input'/>
                        </div>
                        <div>
                            <button  className='login_button'>Login</button>
                        </div>
                    </div>
                  
                  <div className="mt-4">
                 
                    
                  </div>
                  </form>
                </Modal>
                
        </div>
    )
}
