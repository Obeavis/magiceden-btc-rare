import { getEnv } from "@/lib/utils";
import axios, { AxiosInstance } from "axios";

interface Props {
	baseApi?: "MAINNET" | "STATS";
	headerParams?: Record<string, unknown>;
}

const baseService = ({ baseApi, headerParams = {} }: Props): AxiosInstance => {
	const headers = {
		"Content-Type": "application/json",
		...headerParams,
	};

	return axios.create({
		baseURL: String(getEnv(`VITE_API_${baseApi}`)),
		maxRedirects: 0,
		headers,
	});
};

export default baseService;
