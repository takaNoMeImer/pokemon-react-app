interface TableProps {
  data: any[]
}

const TableData = ({ data }: TableProps) => {
  return (
    <>
      <p className="mt-4 mb-4 text-4xl" style={{textAlign: 'center'}}>LISTA DE POKEMON</p>
      <div className="relative overflow-x-auto" style={{margin: '0 auto'}}>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Peso
              </th>
              <th scope="col" className="px-6 py-3">
                Numero
              </th>
              <th scope="col" className="px-6 py-3">
                Altura
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((i: any) => (
              <tr key={i.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img src={i.sprites.front_default} alt="Imagen" />
                </th>
                <td className="px-6 py-4" style={{textTransform: 'uppercase'}}>
                  {i.name}
                </td>
                <td className="px-6 py-4">
                  {i.weight}
                </td>
                <td className="px-6 py-4">
                  {i.id}
                </td>
                <td className="px-6 py-4">
                  {i.height}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default TableData;