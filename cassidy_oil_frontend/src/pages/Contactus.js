export default function ContactUs() {
    return (
        <>
            <div className="px-5 mt-5 d-flex justify-content-center" style={{
                backgroundColor: '#CBCBCB', paddingTop: '90px', paddingBottom: '60px'
                }}>
                <h1 className="fw-bold display-3" style={{color: '#777777'}}>Contact Us</h1>
            </div>
            <div className="p-5">
            <form>
                <div className="row">
                    <div className="col">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" className="mt-2 form-control form-control-lg" />
                    </div>
                    <div className="col">
                        <label for="firstName">Last Name</label>    
                        <input type="text" id="lastName" className="mt-2 form-control form-control-lg" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <label for="firstName">Phone Number</label>
                        <input type="phone" id="firstName" className="mt-2 form-control form-control-lg" />
                    </div>
                    <div className="col">
                        <label for="firstName">Email Address</label>    
                        <input type="email" id="lastName" className="mt-2 form-control form-control-lg" />
                    </div>
                </div>
                <div className="form-group mt-5">
                    <textarea placeholder="type message" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
            </form>            
            </div>                
        </>
    )
}