import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Jobs } from "./Home"

export function JobDetails(){
    const [job, setJob] = useState<Jobs>({}as Jobs)
    const {id} = useParams()
    useEffect(() => {
        axios.get<Jobs>(`http://localhost:3000/jobs/${id}`)
        .then((res) => {
            setJob(res.data)
            console.log(res.data)
        })
        .catch((error) => console.log(error))
    })
    const {titulo, description, price} = job
    return(
        <>
            <div className="mt-32 p-5 text-center m-auto">
                <h2 className="text-3xl text-blue-900 text-center font-extralight">Details {job.titulo}</h2>
                <div className="pt-12 text-2xl font-extralight">
                    <p><span className="font-bold">Title:</span> {titulo}</p>
                    <p><span className="font-bold">Price:</span> {price}</p>
                    <p><span className="font-bold">Description</span>: {description}</p>
                </div>
            </div>
        </>
    )
}