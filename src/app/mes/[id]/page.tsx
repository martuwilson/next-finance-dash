type Props = {
    params: { id: string };
  };
  
  export default function Mes({ params }: Props) {
    const { id } = params;
  
    return (
      <div>
        <h1 className="text-2xl font-bold">Resumen Mensual: {id}</h1>
        <p>Aquí se mostrarán los gastos y ahorros del mes {id}.</p>
      </div>
    );
  }
  