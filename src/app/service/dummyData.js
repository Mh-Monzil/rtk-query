import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    getProductById: builder.query({
        query: (id) => `/products/${id}`
    }),

    addNewProduct: builder.mutation({
        query: (newProduct) => ({
            url: `/products/newProduct`,
            method: 'POST',
            body: newProduct
        })
    })
  }),
});

export const {useGetAllProductsQuery, useGetProductByIdQuery} = productApi;