import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export type Jobs = {
    id: string,
    titulo: string,
    description: string,
    price: string
}

export function Home(){
    const [jobs, setJobs] = useState<Jobs[]>([]);
    useEffect(() => {
        axios
            .get<Jobs[]>("http://localhost:3000/jobs")
            .then((resposta) => {
                setJobs(resposta.data);
                console.log(resposta.data[0].titulo);
            })
            .catch((falha) => console.log(falha))
    })
    const deleteVaga = (id: string) => {
        axios.delete<Jobs>(`http://localhost:3000/jobs/${id}`)
        .then((res) => {
            setJobs(jobs.filter(job => job.id !== id))
            console.log(res.data)
        })
        .catch((error) => console.log(error))
    }
    return(
        <>        

<div className="mt-16"></div>
<div className="shadow-md p-3 text-center flex">
    <h3 className="text-blue-900 font-bold text-2xl rounded-md">Vagas de Emprego</h3>
    <Link to={'jobs'}>
        <button className="bg-blue-900 text-white text-2xl py-1 px-2 font-bold" type="button">Cadastra Vaga</button>
    </Link>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8 mb-32 w-1/2 m-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            {jobs.map((job) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <Link to={`/jobs/${job.id}/detalhes`}>
                        <th scope="row" key={job.id} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {job.titulo}
                        </th>
                    </Link>
                    <td className="px-6 py-4">
                        {job.price}
                    </td>
                    <td className="px-6 py-4">
                        <Link to={`/jobs/${job.id}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteVaga(job.id)} type="button">Delete</button>
                    </td>
                </tr>
            ) )}
            
        </tbody>
    </table>
</div>
        </>
          
    )
}