import { useUpdateProductMutation } from "../app/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  if (isError) return <h4>Oops something is wrong!</h4>;
  if (isLoading) return <h4>Loading... Please wait!</h4>;

  const handleUpdateProduct = async () => {
    try {
      const updateProductData = {
        title: "title updated",
      };

      await updateProduct({
        id: productId,
        updateProduct: updateProductData,
      });
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  return (
    <div>
        <h3>{data?.title}</h3>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
