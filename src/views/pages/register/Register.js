import React from 'react'
import axios from 'axios'
import "../pages/index.scss";
import { getUser, getUserId ,getPassword,getToken} from '../../../Common'
import {
  CButton,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState } from 'react'

export default function Login() {
 
  const [id, setUserId] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordOld, setPasswordOld] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const configToken = {
    headers:{
      Authorization: 'Bearer ' + getToken()
    }
    }
 
  const handleLogin = () => {

    let checkPass = getPassword()
    if(password === ""){
      alert("Cannot be left blank password !!!!!")
      return false
    }if(passwordOld === "" ){
      alert("Cannot be left blank passwordOld !!!")
      return false
    }if(confirmpassword==""){
      alert("Cannot be left blank confirmpassword !!!!")
      return false
    }
    if(passwordOld !== checkPass){
          alert('Please enter old password !!!')   
             return false
    }if(password !=confirmpassword){
      alert('Confirmation password does not match !!!')
      return false
      
    }
   else{
      axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/login/changepassword`,configToken ,{ id: getUserId(), username: getUser(), password: password }).then(response => {
        setLoading(false);
        window.location.href = "/#/login"
        alert("Change password successfully")
      }).catch(error => {
        setLoading(false);
        alert("Change password failed")
      });
    } 
    return true;
}
  return (
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="user_cardReset">
            <div class="d-flex justify-content-center">
            </div>
            <CForm>
              <div class="tileLoginReset">
                <h1>Change Password</h1>
                <p className="text-medium-emphasis">Change your Password</p>
                <div >
                  <CFormInput type="hidden" className="form-control" placeholder="Id" {...id} autoComplete="username" value={getUserId()} onChange={e => setUserId(e.target.value)} />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <CInputGroup >
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput className="form-control" placeholder="Username" {...userName} autoComplete="username" value={getUser()} onChange={e => setUserName(e.target.value)} />
                    </CInputGroup>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <CInputGroup >
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput type="password" className="form-control" placeholder="Password Old"   name="passwordOld"
                      onChange={(e) => setPasswordOld(e.target.value)}/>
                    </CInputGroup>
                  </div>
                  </div>
                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <CInputGroup >
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput type="password" className="form-control" placeholder="New Password"   name="newpassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                    </CInputGroup>
                  </div>
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <CInputGroup className="mb-2">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Confirm New Password"
                        {...password}
                        value={password} onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        name="confirmpassword"
                      />
                    </CInputGroup>
                  </div>
                </div>
              </div>
              <CRow>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <button type="button" onClick={handleLogin} class="btn btn-primary">Sumbit</button>
                </div>
              </CRow>
            </CForm>
          </div>

        </div>
      </div>
  )
  }

