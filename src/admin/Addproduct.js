import { getDatabase, ref, set } from "firebase/database";
import Nav from "./Nav";

function Addproduct() {
    const addItemHandler = (event) => {
        event.preventDefault();
        let itemData = new FormData(event.currentTarget);
        let item = {
            pic: itemData.get("pic"),
            name: itemData.get("name"),
            category: itemData.get("category"),
            unit: itemData.get("unit"),
            price: itemData.get("price"),
            description: itemData.get("description"),
        }
        let items;
        if (localStorage.getItem("items") == null) {
            items = [];
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
        } else {
            items = JSON.parse(localStorage.getItem("items"));
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));
        }
        // function writeUserData(userId, name, email, imageUrl) {

        const db = getDatabase();
        const date = new Date();
        const productId = date.getTime();
        set(ref(db, 'products/' + productId), item);
        // }
        // localStorage.setItem(JSON.stringify())
        console.log(item);
        JSON.stringify(localStorage.getItem("items")).forEach(element => {


        });
    }
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="text-success">
                                <tr>
                                    <th>Pciture</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Unit</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>product image</td>
                                    <td>#024F9D</td>
                                    <td>Product Name</td>
                                    <td>Product category</td>
                                    <td>Product unit</td>
                                    <td>Product price</td>
                                    <td>Product Description</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <h4>Add Item</h4>
                        <form onSubmit={addItemHandler}>

                            <input className="form-control my-2" name="pic" type="file" />
                            <input placeholder="name" className="form-control  my-2" name="name" type="text" />
                            <input placeholder="category" className="form-control  my-2" name="category" type="text" />
                            <input placeholder="unit" className="form-control  my-2" name="unit" type="text" />
                            <input placeholder="price" className="form-control  my-2" name="price" type="text" />
                            <input placeholder="description" className="form-control  my-2" name="description" type="text" />
                            <button className="btn btn-success my-3 w-100">Add Item</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Addproduct