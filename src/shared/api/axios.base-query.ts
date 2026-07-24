import { type AxiosRequestConfig, AxiosError } from "axios"
import type { BaseQueryFn } from "@reduxjs/toolkit/query"
import { axiosInstance } from "./axios.instance"

export const axiosBaseQuery =
    (): BaseQueryFn<
        { url: string, method?: AxiosRequestConfig["method"], data?: AxiosRequestConfig["data"], params?: AxiosRequestConfig["params"] },
        unknown,
        unknown
    > =>
    async ({ url, method = "GET", data, params }) => {
        try {
            const result = await axiosInstance({ url, method, data, params })
            return { data: result.data }
        } catch (err) {
            const error = err as AxiosError
            return {
                error: {
                    status: error.response?.status,
                    data: error.response?.data || error.message
                }
            }
        }
    }