import { axios } from './axios';

type QuoteType = {
	id: number;
	quote: string;
	author: string;
};

export const fetchQuote = async (): Promise<QuoteType> => {
	const quote = await axios.get<QuoteType>(`quotes/random`);
	return quote.data;
};
