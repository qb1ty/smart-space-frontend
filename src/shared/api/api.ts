import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "./axios.base-query";

export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["User", "Space", "Booking"],
    endpoints: () => ({})
})