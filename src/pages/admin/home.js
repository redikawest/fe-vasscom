import AdminLayout from "@/layout/adminLayout";

const Home = () => {
  return (
    // <AdminLayout>
        <div className="max-w-full h-full mt-5 p-5">
            <div className="flex flex-row w-full">
                <div className="flex w-1/4 mr-3">
                    <div className="card card-compact w-60 bg-gradient-to-r from-[#C2D6FF] via-transparent to-[#ADC9FF] shadow-xl">
                        <div className="card-body mt-5">
                            <p className="text-sm font-normal text-[#597393]">
                                Jumlah User
                            </p>
                            <p className="text-lg font-normal text-black">
                                150 User
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-1/4 mr-3">
                    <div className="card card-compact w-60 bg-gradient-to-r from-[#C2D6FF] via-transparent to-[#ADC9FF] shadow-xl">
                        <div className="card-body mt-5">
                            <p className="text-sm font-normal text-[#597393]">
                                Jumlah User Aktif
                            </p>
                            <p className="text-lg font-normal text-black">
                                150 User
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-1/4 mr-3">
                    <div className="card card-compact w-60 bg-gradient-to-r from-[#C2D6FF] via-transparent to-[#ADC9FF] shadow-xl">
                        <div className="card-body mt-5">
                            <p className="text-sm font-normal text-[#597393]">
                                Jumlah Product
                            </p>
                            <p className="text-lg font-normal text-black">
                                150 Product
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-1/4">
                    <div className="card card-compact w-60 bg-gradient-to-r from-[#C2D6FF] via-transparent to-[#ADC9FF] shadow-xl">
                        <div className="card-body mt-5">
                            <p className="text-sm font-normal text-[#597393]">
                                Jumlah Product Active
                            </p>
                            <p className="text-lg font-normal text-black">
                                150 Product
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // </AdminLayout>
  );
};

export default Home;
