import Image from "next/image";
import { useRouter } from "next/router";

const AdminLayout = ({children}) => {

    const router = useRouter();

    const isActive = (path) => router.pathname === path;

    const handleMenuItemClick = (path) => {
        router.push(path);
    };

    return (
        <div className="drawer">
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-white">
                    <div className="flex-1 px-2 py-4 mx-2">
                        <Image src="/icon.svg" height={100} width={200} />
                    </div>
                    <div className="flex-none block">
                        <ul className="menu menu-horizontal">
                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-50">

                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                            {children}
                        
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                            
                            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                                <li className={isActive('/admin/home') ? 'bg-[#41A0E4]' : ''} onClick={() => handleMenuItemClick('/admin/home')}>
                                    <a><span className="material-icons"></span> Dashboard</a>
                                </li>
                                <li className={isActive('/admin/user') ? 'bg-[#41A0E4]' : ''} onClick={() => handleMenuItemClick('/admin/user')}>
                                    <a><span className="material-icons"></span> Manajemen User</a>
                                </li>
                                <li className={isActive('/admin/product') ? 'bg-[#41A0E4]' : ''} onClick={() => handleMenuItemClick('/admin/product')}>
                                    <a><span className="material-icons"></span> Manajemen Produk</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};
  
export default AdminLayout;
  