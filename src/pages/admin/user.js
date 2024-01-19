import AdminLayout from "@/layout/adminLayout";
import { listUser } from "@/repository/user.repository";
import { useEffect, useState } from "react";

const User = () => {

    const [users, setUsers] = useState([]);

    const getDataUser = async () => {
        try {
          const queryParams = { take: 10, skip: 1 };
    
          const response = await listUser(queryParams);
          
          setUsers(response.data)
        } catch (error) {
          console.error('Error:', error.message);
        }
    }
    
    useEffect(() => {
        getDataUser();
    }, []);

    return (
        <AdminLayout>
            <div className="w-full h-full mt-5 p-5">
                <div className="flex flex-row justify-between">
                    <p>
                        Manajemen User
                    </p>
                    <button className="btn btn-square w-36 bg-[#41A0E4] text-white">
                        Tambah User
                    </button>
                </div>

                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name Lengkap</th>
                                    <th>Email</th>
                                    <th>No Telepon</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? users.map((value, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>{value.name}</th>
                                        <th>{value.email}</th>
                                        <th>{value.phone_number}</th>
                                        <th>{value.status_id == 1 ? "Active" : "Not Active"}</th>
                                    </tr>
                                )) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};
  
export default User;
  