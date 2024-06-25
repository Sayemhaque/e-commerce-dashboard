import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='bg-gray-800 text-gray-100 min-h-screen w-[280px]'>
      <div className='p-4 border-b border-gray-700'>
        <h1 className='text-2xl font-bold'>Sidebar</h1>
      </div>
      <nav className='p-4'>
        <ul>
          <li className='mb-2'>
            <Link href='/' className='block p-2 rounded hover:bg-gray-700'>
              Home
            </Link>
          </li>
          <li className='mb-2'>
            <Link
              href='/create-product'
              className='block p-2 rounded hover:bg-gray-700'>
              Add product
            </Link>
          </li>
          <li className='mb-2'>
            <Link
              href='/products'
              className='block p-2 rounded hover:bg-gray-700'>
              Products
            </Link>
          </li>
          <li className='mb-2'>
            <a href='#' className='block p-2 rounded hover:bg-gray-700'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
