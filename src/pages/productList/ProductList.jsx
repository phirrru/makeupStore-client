import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";

import { useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const [deleteUserId, setDeleteUserId] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get(
          "http://localhost:5500/api/products/"
        );
        setProducts(res.data);
      } catch {}
    };
    getProducts();
  }, []);
  // console.log(products);
  // console.log(products[0]?.categories);
  // const deleteUser = async () => {
  //   try {
  //     const res = await axios.delete(
  //       "http://localhost:5500/api/users/" + deleteUserId
  //     );
  //   } catch {}
  // };

  const handleClick = (deleteProductId) => {
    // deleteUserId.preventDefault();
    const deleteProduct = async () => {
      try {
        console.log(deleteProductId);
        const res = await userRequest.delete("products/" + deleteProductId);
      } catch (err) {
        console.log(err);
      }
    };

    deleteProduct();
    // dispatch(addProduct({ ...product, quantity, color }));
  };

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [cats, setCats] = useState();

  const submit = (e) => {
    // deleteUserId.preventDefault();
    const createProduct = async () => {
      console.log(title, desc, price, img, cats);
      e.preventDefault();
      try {
        await userRequest.post("products", {
          title: title,
          desc: desc,
          img: img,
          categories: stringToArray(cats),
          price: price,
        });
        function stringToArray(str) {
          const arr = str.split(",");
          return arr.map((word) => word.trim());
        }
      } catch (e) {
        console.log(e);
      }
    };

    createProduct(e);
    window.location.reload();
    // dispatch(addProduct({ ...product, quantity, color }));
  };

  // async function submit(e) {
  //   console.log(title, desc, price, img, cats);
  //   e.preventDefault();
  //   try {
  //     await userRequest.post("products", {
  //       title: title,
  //       desc: desc,
  //       img: img,
  //       categories: stringToArray(cats),
  //       price: price,
  //     });
  //     function stringToArray(str) {
  //       const arr = str.split(",");
  //       return arr.map((word) => word.trim());
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // console.log(users);
  return (
    <div>
      <br></br>
      <br></br>
      {/* <h3 id="talon_title">ПАНЕЛЬ АДМИНИСТРАТОРА</h3> */}
      <table className="table">
        <thead>
          {/* <tr> */}
          <th>id</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Ссылка на изображение</th>
          <th>Категории</th>
          <th>Цена</th>
          <th>Удалить</th>
        </thead>
        {products?.map((product) => (
          <>
            <tbody>
              <tr>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>{product.desc}</td>
                {/* <td>{product.img}</td> */}
                <a href={product.img}>ссылка</a>
                <td>
                  {product.categories.map((cat) => (
                    <p>{cat}</p>
                  ))}
                </td>
                <td>{product.price}</td>
                <td>
                  <form>
                    <button
                      type="submit"
                      className="red_button"
                      onClick={() => {
                        handleClick(product._id);
                      }}
                    >
                      Удалить продукт
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
      <br></br>
      <br></br>
      <form>
        <table className="table">
          <thead>
            {/* <tr> */}
            <th>Название</th>
            <th>Описание</th>
            <th>Ссылка на изображение</th>
            <th>Категории</th>
            <th>Цена</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  onChange={(e) => setImg(e.target.value)}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  onChange={(e) => setCats(e.target.value)}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </td>
              <td>
                <button type="submit" onClick={submit}>
                  Добавить
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ProductList;
