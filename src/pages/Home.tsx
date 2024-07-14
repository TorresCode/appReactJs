import { useEffect, useState } from "react"
import axios from "axios"

type Jobs = {
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
    return(
        <ul className="mt-16">
            {jobs.map((job) => (
                <li className="text-4xl underline text-red-600" key={job.id}>A {job.titulo}</li>
            ) )}
        </ul>      
    )
}