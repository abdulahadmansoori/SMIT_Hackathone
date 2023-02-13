import Nav from "./Nav";
import image from "../images/C1.png"

function Admin(){
    return(
        <div>
            <Nav />
            <h1>Admin Portal</h1>
            <div className='container my-3'>
                    <div className='row'>
                    <span className='fw-bold my-3'>Products</span>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-6'>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                            <div className='row justify-content-center my-3'>
                                <div className='col-sm-4'> <img src={image} className="w-100" /></div>
                                <div className='col-sm-6 pt-2'><h3 className="">Product name</h3>
                                <p>
                                    this is description
                                </p>
                                </div>
                                <div className='col-sm-2 pt-3'>Rating 4.8<a className="btn btn-sm btn-success w-100 my-2">add</a></div>
                            </div>
                        </div>
                        <div className='col-sm-3'></div>
                    </div>
                </div>

        </div>

    );
}
export default Admin