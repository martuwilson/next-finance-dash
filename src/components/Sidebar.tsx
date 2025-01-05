
import { SidebarItem } from './SidebarItem';
import { IoCalendarOutline  } from 'react-icons/io5';
import { BsCashCoin } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: 'Resumen Total',
    path: '/'
  },
  {
    icon: <BsCashCoin />,
    title: 'Gastos Totales',
    path: '/gastos-totales'
  },
  {
    icon: <BsCashCoin />,
    title: 'Gastos Fijos',
    path: '/gastos-fijos'
  },
  {
    icon: <BsCashCoin />,
    title: 'Gasto y Ahorro Mensual',
    path: '/mes/enero'
  },
  {
    icon: <TbPigMoney  />,
    title: 'Ahorros Totales',
    path: '/ahorros-totales'
  },
]


export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <ul className="space-y-2 tracking-wide mt-8">
          {
            menuItems.map( item => (
              <SidebarItem key={ item.path } {...item} />
            ))
          }
          
        </ul>
      </div>
    </aside>
  )
}