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
        // <AdminLayout>
            <div className="w-full h-full mt-5 p-5 bg-white">
                <div className="flex flex-row justify-between">
                    <p>
                        Manajemen User
                    </p>
                    <button className="btn btn-square w-36 bg-[#41A0E4] text-white"
                        onClick={()=>document.getElementById('create_user').showModal()}>
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

                {/* <button className="btn" onClick={()=>document.getElementById('create_user').showModal()}>open modal</button> */}
                <dialog id="create_user" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Create User</h3>
                        <label className="form-control w-full mt-5">
                            <div className="label">
                                <span className="label-text text-xs font-normal text-[#757575]">
                                    Nama
                                </span>
                            </div>
                            <input type="text" placeholder="Masukan Password" className="input input-bordered input-md w-full" />
                        </label>
                        <label className="form-control w-full mt-5">
                            <div className="label">
                                <span className="label-text text-xs font-normal text-[#757575]">
                                    Email
                                </span>
                            </div>
                            <input type="text" placeholder="Contoh: admin@gmail.com" className="input input-bordered input-md w-full" />
                        </label>

                        <label className="form-control w-full mt-5">
                            <div className="label">
                                <span className="label-text text-xs font-normal text-[#757575]">
                                    Nomor Telpon
                                </span>
                            </div>
                            <input type="text" placeholder="Contoh: 08231231" className="input input-bordered input-md w-full" />
                        </label>

                        <button className="btn btn-info mt-7 w-full text-sm font-semibold text-white">
                            Create
                        </button>
                    </div>
                </dialog>
            </div>
        // </AdminLayout>
    );
};
  
export default User;
  