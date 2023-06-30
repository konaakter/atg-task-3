import React from 'react';

const UserDetails = ({ data,  handledata,  refetch }) => {
    console.log(data)


    return (
        <div>

            <div onClick={() => handledata(data)} className=' bg-[#ECECEC] w-[350px] lg:w-[500px] py-5 px-4  flex gap-x-5 items-center'>
                <div>
                
                    {
                       data?.avatar ? <img className=' rounded-full w-12' src={data.avatar} alt="" /> : <img className=' rounded-full w-12' src='' alt="" />
                    }
                </div>
                
                <h1 className=' text-xl'>{data?.profile.username}</h1>
                
                
                
            </div>




        </div>
    );
};

export default UserDetails;