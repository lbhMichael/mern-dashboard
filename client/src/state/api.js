import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
  }),
});

/* 
  Set up configuration for api Calls
  get user query using redux
  get_user call to api using build.query
*/

export const { useGetUserQuery, useGetProductsQuery } = api;

/* Get user query Has prefix Get and suffix Query Just as getUser: build.query
 */

/* Set this up then go to index.js and setup the api and the setupListener */
