import { useGetProductByIdQuery } from "../app/service/dummyData";


const SingleProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(4);
    console.log(data);

    if(isError) return <h1>Oops something is wrong!</h1>
    if(isLoading) return <h1>Loading... Please wait!</h1>

    return (
        <div>
            
        </div>
    );
};

export default SingleProduct;