const CLIENT_ID = '4218986f43d8409d82f7c093f396269e';
const CLIENT_SECRET = '3509aebbf85e41ca937f1a4ad8b9fb7d';

const tokenParamaters = {
    headers: {
        'Authorization': 'Bearer BQBBj57_1rvb7WINXv1KjebQDLwNTWCS4NfV_AkwCmPB5dpAnlhgopm-Eb3cw1UdspjcC56Z_ieBFXDPjBb-b-gOwaYmurvtVRLjnx8gCq6P-SdjgWFyTrBurIN8tsSTp2bS5VrW5hkn4A27-7t9cXGr4CvjVg-mpyM'
    }
};

let objToken = {  
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'grant_type': 'client_credentials'
    })
}

const getToken = () => {
    
    fetch('https://accounts.spotify.com/api/token',objToken
        // method:'POST',
        // headers: {
        //     Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        // }
    ).then(resp => resp.json())
    .then(data => console.log(data));
}

export default tokenParamaters;