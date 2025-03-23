
const Footballer = ({footballer}) => {
    console.log(footballer);
    return (
        <div className="">
            <div className="p-3 border border-gray-400 rounded-lg">
            <div className="h-44"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsskVwrrm8fXruPYa2EtKB92o0nD4zLch83A&s" className=" h-full rounded-lg object-cover w-full" alt=""/></div>
            <div className="my-3 ">
                <div className="flex gap-1">

                    <div className={`w-12 h-12 rounded-full border-4 ${footballer.status==="Active"?"border-blue-600":"border-gray-500"}  p-1`}><img className="h-full  object-fill rounded-full w-full" src="https://static.vecteezy.com/system/resources/previews/002/125/745/non_2x/soccer-player-action-outline-vector.jpg" alt=""/></div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold flex items-center gap-2">{footballer.name}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A5158C" className="size-6">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </h3>
                        <p className="text-gray-600 mx-2 font-medium ">Age: {footballer.age}</p>
                        <p className="text-gray-600 mx-2 font-medium">Nationality : {footballer.nationality}</p>
                        <p className="text-gray-600 mx-2 font-medium">Club : {footballer.club}</p>
                        <p className="text-gray-600 mx-2 font-medium">Position : {footballer.position}</p>
                        <p className="text-gray-600 mx-2 my-2 font-medium">Value : 20M <button className="bg-[#A5158C] font-bold text-lg px-2 py-1 rounded-lg text-white ml-5">Details</button></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export  {Footballer};