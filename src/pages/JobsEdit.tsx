import { FieldValues, useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { Jobs } from "./Home"

export function JobsEdit(){
    const navigate = useNavigate()

    const {register, setValue, handleSubmit} = useForm<Jobs>()
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/jobs/${id}`)
        .then((res) => {
            setValue("titulo", res.data.titulo),
            setValue('description', res.data.description),
            setValue('price', res.data.price),

            console.log(res.data)
        })
        .catch((error) => console.log(error))
    },[id, setValue] )


    const submit = (data: FieldValues) => {
        axios.put(`http://localhost:3000/jobs/${id}`, data)
        .then(res => {
            navigate('/')
            console.log(res.data)

        }).catch(falha => console.log(falha))
    }
    return(
        <>
<form onSubmit={handleSubmit(submit)} className="max-w-md mx-auto mt-32">
  <div className="relative z-0 w-full mb-5 group">
      <input {...register('titulo')} type="text" id="titleText" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="titleText" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="text" {...register('description')} id="descriptionText" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="descriptionText" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="text" {...register('price')} id="floating_priceNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_priceNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
</form>




        </>
    )
}

