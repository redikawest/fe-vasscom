import AdminLayout from "@/layout/adminLayout";
import { detailProduct, listProduct } from "@/repository/product.repository";
import Image from "next/image";
import { useEffect, useState } from "react";

const Product = () => {

  const [products, setProducts] = useState([]);

  const getDataProduct = async () => {
    try {
      const accessToken = 'get from local storage';
      const queryParams = { take: 10, skip: 1 };

      const response = await listProduct(accessToken, queryParams);
      
      setProducts(response.data)
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  useEffect(() => {
    getDataProduct();
  }, []);

  return (
    <AdminLayout>
      <div className="w-full h-full mt-5 p-5">
        <div className="flex flex-row justify-between">
          <p>Manajemen Product</p>
          <button className="btn btn-square w-36 bg-[#41A0E4] text-white">
              Tambah Product
          </button>
        </div>

        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? products.map((value, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <th>
                      <Image src="/icon.svg" height={50} width={100} alt="dumy" />
                    </th>
                    <th>{value.name}</th>
                    <th>{value.price}</th>
                    <th>{value.status_id == 1 ? "Active" : "Not Active"}</th>
                  </tr>
                )) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )};
  
export default Product;
  