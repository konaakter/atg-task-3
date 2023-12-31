import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserDetails from './UserDetails';
import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';




const Home = () => {

    const [datas, setdatas] = useState()
    const [loding, setloding] = useState('')





    const { data: dataa = [], isLoading, refetch, isError, error } = useQuery({
        queryKey: ['dataa'],
        queryFn: async () => {
            const res = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
            return res.json();
        }



    })

    if (isLoading) {
        return <div className=' mx-auto w-52 mt-36'>
            <PacmanLoader
                color={'#C5DFFF'}
                loading={isLoading}

                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }






    const handledata = (data) => {

        console.log(data)
        setdatas(data)
        refetch()
    }

    console.log(dataa)

    return (
        <div className=' mt-40 w-10/12 mx-auto'>
            <div className=' lg:flex  gap-28 '>

                <div className=' lg:mb-1 mb-20'>
                    <div className=' bg-[#C5DFFF] w-[350px] lg:w-[500px] py-5 px-40 rounded-t-xl'>
                        <h1 className=' text-3xl'>USERS LIST</h1>
                    </div>

                    <div>
                        {
                            dataa == 'Not found' ? <p className=' text-center  mt-12 text-2xl'> Data not found</p> :
                                <div className=' mt-7 space-y-6'>
                                    {
                                        dataa.map(data =>
                                            <UserDetails
                                                data={data}
                                                handledata={handledata}
                                                refetch={refetch}
                                                loding={loding}
                                            ></UserDetails>


                                        )
                                    }
                                </div>
                        }



                    </div>

                </div>

                <div>


                    <div className="w-[350px]  lg:w-[450px] bg-base-100 ">
                        <div className=' bg-[#C5DFFF]  py-5 px-20 rounded-t-xl'>
                            <h1 className=' text-3xl'>USER DETAILS</h1>
                        </div>

                        {
                            datas ?
                                <div className='w-[300px] lg:w-96 mx-auto'>
                                    <div className=' w-24 mx-auto mt-5'>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-24 h-24 border">
                                                <img src={datas.avatar} alt="" />
                                            </div>
                                        </div>
                                       


                                    </div>
                                    <h1 className=' text-center mb-5 mt-4 text-xl font-bold'>@ {datas?.profile?.firstName}</h1>


                                    <div className=' space-y-4'>

                                        <h1 className=' bg-[#DBDBDB] py-5 px-4 text-lg rounded-lg border border-[#6C6C6C]'>{datas?.Bio}</h1>
                                        <h1>Full Name</h1>
                                        <h1 className=' bg-[#DBDBDB] py-5 px-4 text-lg rounded-lg border border-[#6C6C6C]'>{datas?.profile?.username}</h1>
                                        <h1>Job Title</h1>
                                        <h1 className=' bg-[#DBDBDB] py-5 px-4 text-lg rounded-lg border border-[#6C6C6C]'>{datas?.jobTitle}</h1>
                                        <h1>Email</h1>
                                        <h1 className=' bg-[#DBDBDB] py-5 px-4 text-lg rounded-lg border border-[#6C6C6C]'>{datas?.profile?.email}</h1>
                                    </div>



                                </div> : <p className=' text-xl text-center mt-5'>user not selected</p>
                        }
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;

