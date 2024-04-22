interface NFT {
	id: string;
	inscriptionNumber: number;
	contentURI: string;
	contentPreviewURI?: string;
	chain?: string;
	meta?: {
		name: string;
		attributes: {
			value?: string;
			trait_type?: string;
		}[];
		high_res_img_url?: string;
		collection_page_img_url?: string;
	};
	listedPrice: number;
	satributes: string[];
}
