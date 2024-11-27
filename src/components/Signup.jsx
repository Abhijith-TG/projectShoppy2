import React from 'react';
import '../styles/SignUp.css';
import logo from '../logo.svg'
import Ring from '../ring.png'

export default function Signup() {
  return (
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
                <h2>Create an Account</h2>
                <p style={
                    {
                        color: '#999',
                    }
                } >Sign up now to get started with an account</p>
                <button style={{
                    
                }} className='button1' > <img src={logo} width='50px' alt="" /> Sign up with React</button>
                <p>OR</p>
                <form style={{
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    marginBottom: '20px',
                    width: '100%',
                    gap: '15px',
                }} >

                    <div className='new1' >
                        <label htmlFor="fullname">Full Name *</label>
                        <input type="text" id="fullname" name="fullname" required />
                    </div>

                    <div className='new1'>
                        <label htmlFor="email">Email Address * </label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className='new1'>
                        <label htmlFor="password">Password *</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    
                    <div className='new1'>
                        <label htmlFor="password">Confirm Password *</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        
                    }} >
                        <input style={{ width:'10%',}} type="checkbox" name="check" id="check" />
                        <label htmlFor="check">I have read and agreed to the <a href="www.google.com"> Terms and Services </a></label>

                    </div>

                    <div style={
                        {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    } >
                    <button className='button2' >Get Started</button>
                    </div>
                    <div style={{
                        width:'100%',
                    }} >

                        <p style={{ fontWeight:'500',textAlign:'center',width:'100%' }} >Already have an account ? <a href="https://www.google.com">Log in</a></p>

                    </div>



                </form>

        </div>
    </div>
  )
}
