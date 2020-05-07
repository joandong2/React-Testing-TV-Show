import React from "react";
import { render, wait, act } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");
console.log(mockFetchShow);

const shows = {
    data: [
        {
            id: 2993,
            url: "http://www.tvmaze.com/shows/2993/stranger-things",
            name: "Stranger Things",
            type: "Scripted",
            language: "English",
            genres: ["Drama", "Fantasy", "Science-Fiction"],
            status: "Running",
            runtime: 60,
            premiered: "2016-07-15",
            officialSite: "https://www.netflix.com/title/80057281",
            schedule: {
                time: "",
                days: ["Thursday"],
            },
            rating: {
                average: 8.7,
            },
            weight: 99,
            network: null,
            webChannel: {
                id: 1,
                name: "Netflix",
                country: null,
            },
            externals: {
                tvrage: 48493,
                thetvdb: 305288,
                imdb: "tt4574334",
            },
            image: {
                medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                original:
                    "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
            },
            summary:
                "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
            updated: 1586341552,
            _links: {
                self: {
                    href: "http://api.tvmaze.com/shows/2993",
                },
                previousepisode: {
                    href: "http://api.tvmaze.com/episodes/1576476",
                },
            },
        },
    ],
};

test("App fetches data and renders properly", async () => {
    // this is putting "missions" to return from our mockFetchMissions function
    mockFetchShow.mockResolvedValueOnce(shows);

    const { getByText, queryAllByTestId, getByTestId } = render(<App />);
    await wait();
    getByTestId(/heading/i);
});
