import { useGetAllProductsQuery } from "../app/service/dummyData";


const AllProducts = () => {
    const {data, isError, isLoading } = useGetAllProductsQuery();
    // const res = useGetAllProductsQuery();
    // console.log(res);

    if(isError) return <h1>Oops something is wrong!</h1>
    if(isLoading) return <h1>Loading... Please wait!</h1>

    return (
        <div>
            {
                data?.products.slice(0,10).map((p) => <p key={p.id}>{p.id}. {p.title}</p>)
            }
        </div>
    );
};

export default AllProducts;