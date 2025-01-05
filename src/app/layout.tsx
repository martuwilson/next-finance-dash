import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { TopMenu } from "@/components/TopMenu";

export const metadata = {
  title: 'Dashboard de Finanzas',
  description: 'Gestiona tus gastos y ahorros de manera eficiente.',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="es">
        <body>
          <Sidebar />
          <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
            <TopMenu />
            <div className="px-6 pt-6">
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
