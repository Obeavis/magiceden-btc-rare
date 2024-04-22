import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getEnv(name: string) {
	const value: string | undefined = process.env[name];
	if (!value) {
		throw new Error(`Environment variable ${name} not found`);
	}
	return value;
}

export function removeZerosAndNonDigits(value: string): string {
	return value?.replace(/[^0-9]/g, "")?.replace(/^0+/, "");
}

export function satoshitoBitcoin(value: string): number {
	const totalSatoshis: number = 100000000;
	const valueInBitcoin: number = parseFloat(value ? value : "0");
	if (isNaN(valueInBitcoin)) {
		throw new Error("O valor fornecido não é um número válido.");
	}
	const valueInSatoshi: number = Math.round(valueInBitcoin * totalSatoshis);

	return valueInSatoshi;
}

export function satoshiToBitcoin(satoshi: number): number {
	const satoshiPerBitcoin = 100000000;
	const bitcoin = satoshi / satoshiPerBitcoin;
	return parseFloat(bitcoin.toFixed(4));
}

interface FileMapping {
	[key: string]: string;
}

const fileMappings: FileMapping = {
	Alpha: "alpha",
	"Black Rare": "black_rare",
	"Black Uncommon": "black_uncommon",
	"Block 286": "block286",
	"Block 666": "block666",
	"Block 78": "block78",
	"Block 9": "block9",
	"Block 9 450x": "block9_450x",
	Common: "common",
	"First Transaction": "first_transaction",
	Hitman: "hitman",
	JPEG: "jpeg",
	Legacy: "legacy",
	Nakamoto: "nakamoto",
	Omega: "omega",
	"Paliblock Palindrome": "paliblock_palindrome",
	Palindrome: "palindrome",
	"Perfect Palinception": "perfect_palinception",
	Pizza: "pizza",
	Rare: "rare",
	Uncommon: "uncommon",
	"Uniform Palinception": "uniform_palinception",
	Vintage: "vintage",
};

export function getFileName(key: string): string | undefined {
    return fileMappings[key];
}

