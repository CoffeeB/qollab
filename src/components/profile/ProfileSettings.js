import React, { forwardRef } from 'react'

const ProfileSettings = forwardRef((props, ref) => {
  return (

        <div className="card border-0 rounded-0 card-common pb-lg-5 pb-sm-10" ref={ref}>
            <div className="card-body">
                <div className="row">
                    <div className="text-left text-secondary pt-4 col-12 px-3 d-flex flex-column justify-content-between">
                        <h1 className='m-0 text-danger fs-3 fw-light mb-3'>Settings</h1>
                        <div className='mt-4 mb-8 px-3'>
                            <div className='py-4 px-0 form-check form-switch border-bottom d-flex justify-content-between align-items-center border-light'>
                                <label className="form-check-label" for="flexCheckDefault">
                                Available</label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                            <div className='py-4 px-0 form-check form-switch border-bottom d-flex justify-content-between align-items-center border-light'>
                                <label className="form-check-label" for="flexCheckDefault">
                                App Appearance</label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                            <div className='py-4 px-0 form-check form-switch border-bottom d-flex justify-content-between align-items-center border-light'>
                            <label className="form-check-label" for="flexCheckDefault">
                                Notifications</label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                            <div className='py-4 px-0 border-bottom d-flex cursor-pointer justify-content-between align-items-center border-light'>
                                <span className='p-0'>Change Password</span>
                                <i className='bx bxs-chevron-right text-light display-7' />
                            </div>
                            <div className='py-4 px-0 border-bottom d-flex cursor-pointer justify-content-between align-items-center border-light'>
                                <span className='p-0'>Blocked</span>
                                <i className='bx bxs-chevron-right text-light display-7' />
                            </div>
                            <div className='py-4 px-0 border-bottom d-flex cursor-pointer justify-content-between align-items-center border-light'>
                                <span className='p-0'>Change Payment Method</span>
                                <i className='bx bxs-chevron-right text-light display-7' />
                            </div>
                        </div>
                        <div className='mt-8 px-0 cursor-pointer d-flex justify-content-between align-items-center border-light'>
                                <span className='p-0 text-danger'>Delete account</span>
                                <i className='bx bxs-trash-alt text-danger display-7' />
                            </div>
                    </div>
                </div>
            </div>
        </div>
  )
})

export default ProfileSettings;
