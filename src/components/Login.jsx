import React from 'react'
import logo from '../logo.svg'
import Ring from '../ring.png'
import { Link } from 'react-router-dom'

export default function Login() {

    // const users = [
    //     {
    //         id:1,
    //         email:'user@gmail.com',
    //         username:'User',
    //         password:'qwertyui',
    //         role:'user'
    //     }
    // ]




  return (
    <div>
         <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f8f9fa',
        flexDirection: 'column',
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px #ddd',
        marginTop: '10px',    
        }} >
            <img width='150px' style={{ margin:'0',padding:'0'}} src={Ring} alt="" />
                <h2>Login To Your Account</h2>
                <p style={
                    {
                        color: '#999',
                    }
                } >Welcome Back to your Account!</p>
                <button style={{
                    
                }} className='button1' > <img src={logo} width='50px' alt="" /> Continue with React</button>
                <p>OR</p>
                <form style={{
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    marginBottom: '20px',
                    width: '100%',
                    gap: '15px',
                }} >

                    

                    <div className='new1'>
                        <label htmlFor="email">Email Address * </label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className='new1'>
                        <label htmlFor="password">Password *</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    
                    

                    <div style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        
                    }} >
                        <div style={{
                            display:'flex',
                            alignItems:'center',
                        }}>
                            <input type="checkbox" name="" id="check" style={{
                                width:'15px',
                                marginRight:'5px'
                            }} />
                            <label htmlFor="check" style={{
                            }}>Remember me</label>
                        </div>
                        <p style={{
                            margin:'0',
                            color:'rgb(10,80,250)'
                        }} >Fogot password?</p>

                    </div>

                    <div style={
                        {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    } >
                    <button className='button2' >Login</button>
                    </div>
                    <div style={{
                        width:'100%',
                    }} >

                        <p style={{ fontWeight:'500',textAlign:'center',width:'100%' }} >Don't have an account ? 
                    <Link to="/signup" > Sign up</Link>

                        </p>

                    </div>



                </form>

        </div>
    </div>
    
    </div>
    
  )
}
