import tokenParamaters from './setting'

export default function getAlbumes(artist) {
    const albumes = fetch(`https://api.spotify.com/v1/artists/${artist}/albums`,tokenParamaters)
                            .then(resp => resp.json())
                            .then(data => data.items)
                        return albumes
}