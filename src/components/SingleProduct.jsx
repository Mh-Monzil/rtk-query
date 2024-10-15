import { useGetProductByIdQuery } from "../app/service/dummyData";


const SingleProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(4);
    console.log(data);

    if(isError) return <h4>Oops something is wrong!</h4>
    if(isLoading) return <h4>Loading... Please wait!</h4>

    return (
        <div>
            
        </div>
    );
};

export default SingleProduct;