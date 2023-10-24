
const Vioture = () => {
    const voitures = {
        matricule : "123456",
        marque : "BMW",
        chevaux : "200",
    }
  return (
    <div
    className='  flex flex-col gap-2  justify-center items-center'
    >
        <p
        className=" bg-orange-500 text-white text-2xl p-2 rounded-lg"
        >
            this is the information about the car
        </p>
        <ul
        className=' mt-3 flex flex-col gap-2  justify-center items-center'
        >
            <li
            className=' text-slate-900 text-lg font-bold '
            >
                this is the matricule : {voitures.matricule}
            </li>
            <li
            className=' text-slate-900 text-lg font-bold'
            >
                this is the marque : {voitures.marque}
            </li>
            <li
            className=' text-slate-900 text-lg font-bold'
            >
                this is the chevaux : {voitures.chevaux}
            </li>
        </ul>
    </div>
  )
}

export default Vioture