import tokenParamaters from "./setting"

export default function getArtist (artistID) {
    const artist = fetch(`https://api.spotify.com/v1/artists/${artistID}`,tokenParamaters)
                                .then(resp => resp.json())
                                return artist
}