export function findTopRarestNFTs(
	nfts: NFT[],
	attributes: Attribute[],
	topCount: number
): NFT[] {
	const rarestNFTs: NFT[] = [];
	const rarityMap: Map<NFT, number> = new Map();

	for (const nft of nfts) {
		let combinationCount = 1;
		for (const attribute of nft.meta?.attributes ?? []) {
			const attributeInfo = attributes.find(
				(info) =>
					info.attribute.traitType === attribute.trait_type &&
					info.attribute.value === attribute.value
			);
			if (attributeInfo) {
				combinationCount *= attributeInfo.count;
			}
		}
		rarityMap.set(nft, combinationCount);
	}

	const sortedNFTs = Array.from(rarityMap.keys()).sort(
		(a, b) => rarityMap.get(a)! - rarityMap.get(b)!
	);

	for (let i = 0; i < Math.min(topCount, sortedNFTs.length); i++) {
		rarestNFTs.push(sortedNFTs[i]);
	}

	return rarestNFTs;
}
