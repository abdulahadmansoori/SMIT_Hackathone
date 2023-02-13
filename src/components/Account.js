import Nav from "./Nav";

function Account() {
    return (
        <div>
            <Nav />
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-3 bg-success bg-opacity-25 rounded text-success">
                        <h3 className="mt-3">Setting</h3>
                        <div className="w-100">
                            <img className="w-50" src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png"/>
                        </div>
                        <input className="my-3 form-control" name="name" type="text" value='Person Name'/>
                        <button className="btn btn-success mb-3">Update Profile</button>
                    </div>
                    <div className="col-sm-9">
                        <h4>Delivered Orders </h4>
                        <p>list1</p>
                        <p>list1</p>
                        <p>list1</p>
                        <p>list1</p>
                        <p>list1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Account;