import baseService from "./baseService";

export const getCollection = (collection: string, maxPrice?: number) =>
	baseService({ baseApi: "MAINNET" }).get(
		`/ord/btc/tokens?limit=100&offset=0&sortBy=priceDesc&minPrice=0&maxPrice=${
			maxPrice ? maxPrice : 0
		}&collectionSymbol=${collection}&disablePendingTransactions=false`
	);

export const getCollectionAttributes = (collection: string) =>
	baseService({ baseApi: "MAINNET" }).get(
		`/ord/btc/collections/${collection}/attribute_stats`
	);

export const getBitcoinsCollections = () =>
	baseService({ baseApi: "STATS" }).get(
		"/collection_stats/search/bitcoin?limit=108&window=1d&sort=volume&direction=desc"
	);

export const searchCollections = (search: string, quantity: number) =>
	baseService({ baseApi: "MAINNET" }).get(
		`/unifiedSearch/xchain/collection/${search}?edge_cache=true&limit=${quantity}`
	);
