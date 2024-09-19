import resultNotFound from '../asserts/resultNotFound.jpg'

const EmptyData = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-96'>
        <img src={resultNotFound} className='w-1/4 h-full' />
    </div>
  )
}

export default EmptyData