import React from 'react'

const register = () => {
  return (
    <div>
                                       
                                        <form action="{{ route('login.auth') }}" method="post" className='w3-container  w3-animate-bottom' >

                                            <div className="form-outline mb-4">
                                                <label className="form-label lbl" for="form2Example11">First Name</label>
                                                <input type="text" id="form2Example11" className="form-control inp"
                                                    placeholder="first name" name="fname" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label lbl" for="form2Example11">Last Name</label>
                                                <input type="text" id="form2Example11" className="form-control inp"
                                                    placeholder="last name" name="lname" />

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label lbl" for="form2Example11">Account Type</label>
                                                <select name="account" className="accountt inp" id="account"
                                                    >
                                                    <option value="vendor">account type</option>
                                                    <option value="freelancer">webdesign</option>
                                                    <option value="agency">Agency</option>

                                                </select>
                                             </div>



                                            <div className="form-outline mb-4">
                                                <label className="form-label lbl" for="form2Example11">Email</label>
                                                <input type="email" id="form2Example11" className="form-control inp"
                                                    placeholder="email address" name="email"
                                                    />
                                               </div>


                                            <div className="form-outline mb-4">
                                                <label className="form-label lbl" for="form2Example22">Password</label>
                                                <input type="password" placeholder="password" id="form2Example22"
                                                    className="form-control inp" name="pass" />
                                            </div>
                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btnCreate "type="submit">Submit</button>

                                            </div>
                                        </form>
                                    </div>
)
}

export default register