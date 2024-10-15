import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();

  if (isError) return <h4>Oops something is wrong!</h4>;
  if (isLoading) return <h4>Loading... Please wait!</h4>;

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description:
          "This is one of the best and amazing t-shirt in the market.",
      };

      await addNewProduct(newProductData);
    } catch (error) {
      console.error("Error adding new product", error);
    }
  };

  return (
    <div>
      <div>
        <h4>{data?.id}</h4>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
      </div>
      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
