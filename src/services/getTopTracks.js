import tokenParamaters from "./setting";

export default function getTopTracks(artist) {
    const topTracks = fetch(`https://api.spotify.com/v1/artists/${artist}/top-tracks?country=ES`,tokenParamaters)
                                .then(resp =>resp.json())
                                .then(data => data.tracks)
                                return topTracks
}