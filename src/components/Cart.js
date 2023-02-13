import Nav from './Nav'
function Cart(){
    const placeOrderHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let shippingData = {
            name :data.get("name"),
            email :data.get("email"),
            address :data.get("address"),
            phone :data.get("phone")
        }
        console.log(shippingData);
    }
return(
    <div>
        <Nav />
    <div className="container">
        <h3>Cart</h3>
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover w-100">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>count</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>item1</td>
                            <td>03</td>
                            <td>15000</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="col-md-4">
                <h5>Shipping Info</h5>
                <form onSubmit={placeOrderHandler}>
                    <input className="form-control my-1" name='name' placeholder="Fullname" type="text" required/>
                    <input className="form-control my-1" name='email' placeholder="Email" type="text" required/>
                    <input className="form-control my-1" name='phone' placeholder="Phone Number" type="text" required/>
                    <input className="form-control my-1" name='address' placeholder="Ship Address" type="text" required/>
                    <button className="btn btn-success my-2">PLace Order</button>
                </form>
            </div>
        </div>
        
    </div>
    </div>
);
}
export default Cart