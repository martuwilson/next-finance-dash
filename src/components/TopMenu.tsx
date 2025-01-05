import { CiMenuBurger } from 'react-icons/ci';


export const TopMenu = () => {
  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">

      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Finanzas Personales</h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>
      </div>
    </div>
  )
}