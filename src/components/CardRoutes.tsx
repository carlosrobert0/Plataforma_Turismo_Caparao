interface CardRoutesProps {
  urlImg: string;
  title: string;
  description: string;
}

export function CardRoutes({
  urlImg,
  title,
  description
}: CardRoutesProps) {
  return (
    <div className="flex flex-col items-center p-2 transition-colors duration-200 transform cursor-pointer group">
      <img className="object-cover w-full max-h-[200px] overflow-hidden rounded-t border-gray" src={urlImg} alt="" />

      <div className="flex flex-col items-center p-2 w-full max-h-[200px] rounded-b bg-green-800">
        <h1 className="mt-4 text-2xl font-semibold dark:text-white group-hover:text-green-500">{title}</h1>

        <p className="mt-2 text-gray-200 dark:text-gray-200 group-hover:text-gray-200">{description}</p>

        <div className="flex mt-3 -mx-2">
          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 1.66675L12.5748 6.88342L18.3332 7.72508L14.1665 11.7834L15.1498 17.5168L9.99984 14.8084L4.84984 17.5168L5.83317 11.7834L1.6665 7.72508L7.42484 6.88342L9.99984 1.66675Z" fill="#F25D27" stroke="#F25D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 1.66675L12.5748 6.88342L18.3332 7.72508L14.1665 11.7834L15.1498 17.5168L9.99984 14.8084L4.84984 17.5168L5.83317 11.7834L1.6665 7.72508L7.42484 6.88342L9.99984 1.66675Z" fill="#F25D27" stroke="#F25D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 1.66675L12.5748 6.88342L18.3332 7.72508L14.1665 11.7834L15.1498 17.5168L9.99984 14.8084L4.84984 17.5168L5.83317 11.7834L1.6665 7.72508L7.42484 6.88342L9.99984 1.66675Z" fill="#F25D27" stroke="#F25D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 1.66675L12.5748 6.88342L18.3332 7.72508L14.1665 11.7834L15.1498 17.5168L9.99984 14.8084L4.84984 17.5168L5.83317 11.7834L1.6665 7.72508L7.42484 6.88342L9.99984 1.66675Z" fill="#F25D27" stroke="#F25D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a href="#" className="ml-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 1.66675L12.5748 6.88342L18.3332 7.72508L14.1665 11.7834L15.1498 17.5168L9.99984 14.8084L4.84984 17.5168L5.83317 11.7834L1.6665 7.72508L7.42484 6.88342L9.99984 1.66675Z" fill="#F25D27" stroke="#F25D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}