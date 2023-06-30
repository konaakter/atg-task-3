import React from 'react';

const UserDetails = ({ data,  handledata,  refetch }) => {
    console.log(data)


    return (
        <div>

            <div onClick={() => handledata(data)} className=' bg-[#ECECEC] w-[350px] lg:w-[500px] py-5 px-4 rounded-lg  flex gap-x-5 items-center'>
                <div>
                
                   <img className=' rounded-full w-12' src={data.avatar} alt="" /> 
                    
                </div>
                
                <h1 className=' text-xl'>{data?.profile.username}</h1>
                
                
                
            </div>




        </div>
    );
};

export default UserDetails;