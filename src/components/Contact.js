
const ContactUs=()=>{
    const details = {
        name: 'Rajeshwari Gadagi',
        bio: 'Frontend Developer',
        contact: {
          email: 'rajeshwarigadagi06@gmail.com',
          github: 'https://github.com/rajeshwari2538',
          linkedin: 'https://www.linkedin.com/in/rajeshwari-g-5bab95202/'
        },
      };
    
    
    return (
        
            <div className='my-24 md:w-[600]  py-10 bg-gray-200 px-10 md:ml-[30%] md:mt-[8%] mt-[20%] w-[400] ml-[10%]'>
              <h1 className='text-lg md:text-2xl my-4 font-bold'>Contact</h1>
              <div>
                <h2 className='text-md md:text-xl font-semibold'>Hi 👋, I'm {details.name} 👩‍💻</h2>
                <p className='md:text-lg'>{details.bio}</p>
        
                <div className='my-4 space-y-2'>
                  <h3 className='md:text-lg font-semibold'>Connect with me</h3>
                  <p className='flex flex-wrap items-center gap-2'>
                    <span className='font-semibold'>Gmail: </span>
                    <a href={details.contact.email} className='flex items-center gap-1'>
                      {details.contact.email}
                    </a>
                  </p>
                  <p className='flex flex-wrap items-center gap-2'>
                    <span className='font-semibold'>Github: </span>{' '}
                    <a
                      href={details.contact.github}
                      className='flex items-center gap-1'
                    >
                      {details.contact.github}
                    </a>
                  </p>
                  <p className='flex flex-wrap items-center gap-2'>
                    <span className='font-semibold'>Linkedin: </span>{' '}
                    <a
                      href={details.contact.linkedin}
                      className='flex items-center gap-1'
                    >
                      {details.contact.linkedin}

                    </a>
                  </p>
                  
                </div>
              </div>
            </div>
          );
    
}
export default ContactUs;