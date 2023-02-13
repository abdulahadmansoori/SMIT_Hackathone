

function Nav(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand text-success fw-bold fs-4" href="/">SAYLANI WELFAER <span className='fs-6 text-primary fw-semibold'>DISCOUNT STORE</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/admin"><i class="bi bi-house-door-fill text-secondary"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/addProduct"><i class="bi bi-plus-circle-fill text-secondary"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/account"><i class="bi bi-person-fill text-secondary"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
      </div>  
    );
}
export default Nav