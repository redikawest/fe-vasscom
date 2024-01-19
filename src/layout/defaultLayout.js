import Image from "next/image";

export default function DefaultLayout({children}) {
    return (
      <main className="flex min-h-screen w-full">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-white justify-between items-center">
                
                <div className="flex w-1/3">
                    <Image src="/icon.svg" height={100} width={200} />
                </div>
                <div className="flex w-1/3 text-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="flex w-1/3">
                    <ul className="menu menu-horizontal gap-4">
                    {/* Navbar menu content here */}
                        <li>
                            <button className="text-white font-semibold text-sm rounded-none bg-[#41A0E4] mr-4">
                            Login
                            </button>
                        </li>
                        <li>
                            <button className="text-white font-semibold text-sm rounded-none bg-[#41A0E4]">
                            Register
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Page content here */}
            {children}
          </div> 
        </div>
      </main>
    )
  }  