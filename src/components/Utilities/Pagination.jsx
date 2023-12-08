const Pagination = ({page}) => {
    return ( 
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <button className="transition-all hover:text-color-accent underline">Prev</button>
            <p>{page} of </p>
            <button className="transition-all hover:text-color-accent underline">Next</button>
        </div>
     );
}
 
export default Pagination;