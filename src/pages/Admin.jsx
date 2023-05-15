import UserList from "../pages/userList/UserList";
import ProductList from "../pages/productList/ProductList";
import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <UserList />
      <ProductList />
    </div>
  );
};

export default Admin;
