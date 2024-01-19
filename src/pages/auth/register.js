
const Register = () => {

    return (
        <main className="flex min-h-screen w-full">
            <div className='w-1/2 bg-[#41A0E4]'>
            {/* <h1>asdamsldmasdlaskamd</h1> */}
            </div>
            <div className='flex items-center justify-center h-screen bg-white'>
                <div className="w-3/4 bg-white">
                    <div className="px-5">
                        <p className="text-base font-medium text-[#3E3E3E]">
                            Silahkan Register
                        </p>
                        <p className="font-normal text-sm text-[#9B9B9B] mt-4">
                            Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi
                        </p>

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

                        <label className="form-control w-full mt-5">
                            <div className="label">
                                <span className="label-text text-xs font-normal text-[#757575]">
                                    Password
                                </span>
                            </div>
                            <input type="password" placeholder="Masukan Password" className="input input-bordered input-md w-full" />
                        </label>

                        <button className="btn btn-info mt-7 w-full text-sm font-semibold text-white">
                            Masuk
                        </button>

                    </div>
                </div>
            </div>

        </main>
    );
  };
  
  export default Register;
  