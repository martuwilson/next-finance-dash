interface MesPageProps {
  params: {
    id?: string; 
  };
}

export default function MesPage({ params }: MesPageProps) {
  const id = params?.id; 

  const validMonths = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  // Validamos si el `id` es válido o no
  if (!id || !validMonths.includes(id)) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Mes no válido</h1>
        <p>El mes seleccionado no existe. Por favor, selecciona uno válido.</p>
      </div>
    );
  }

  // Renderizamos el contenido si el `id` es válido
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Gastos del mes: {id.charAt(0).toUpperCase() + id.slice(1)}
      </h1>
      <p>Aquí podrás ver los gastos detallados del mes seleccionado.</p>
    </div>
  );
}
