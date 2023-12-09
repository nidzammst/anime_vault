"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
	const url = `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${page = 1 ? 15 : 8}`
	const response = await fetch(url);
	console.log(url)

	const { data } = await response.json();
	return data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ));
}