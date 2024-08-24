import React from 'react';
import DOMPurify from 'dompurify';

const ProjectCard = ({ data }) => {
  // Sanitize the description if it contains HTML
  const sanitizedDescription = DOMPurify.sanitize(data?.description);

  return (
    <div className='bg-[#B30732] p-10'>
      <div >
        <h2 className='font-semibold text-3xl text-white capitalize'>{data?.title}</h2>
        {/* Render the sanitized HTML content dynamically */}
        <p className='  text-white text-base' dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
      </div>
      <div className='  flex items-center justify-between my-10'>
        <div>
          <span className=' font-medium text-[#C3D11C]'>Client</span>
          <p className=' text-white'>{data?.clients}</p>
        </div>
        <div>
          <span className=' font-medium text-[#C3D11C]'>Time Duration</span>
            <p className=' text-white'>{data?.start_date}-{data?.end_date}</p>
        </div>
      </div>
      <div>
<img src={data?.photo} alt='name'/>

      </div>
    </div>
  );
};

export default ProjectCard;
