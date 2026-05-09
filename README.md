# Spotify Canvas API

Unofficial API to fetch Spotify **Canvas video data** (the looping visual videos that appear behind songs on mobile).  

> [!WARNING]  
> This project uses undocumented endpoints and may violate [Spotify's Terms of Service](https.www.spotify.com/legal/end-user-agreement/). Use at your own risk.

---

## Features

- Retrieve **Canvas video URLs** by track ID or URI
- Parses Protobuf responses from the internal Spotify API
- Works with public or private tracks (as long as you're authenticated)

---

## Example Request

### GET `/api/canvas`

To get the canvas data, you need to provide a track ID and your `sp_dc` cookie.

```bash
http://localhost:3000/api/canvas?trackId=3OHfY25tqY28d16oZczHc8&sp_dc=your_sp_dc_cookie_here
```

### How to get your `sp_dc` cookie:
1. Open your browser and go to [open.spotify.com](https://open.spotify.com).
2. Open the developer tools (usually by pressing `F12` or `Ctrl+Shift+I`).
3. Go to the "Application" (or "Storage") tab.
4. Find the "Cookies" section and click on the `open.spotify.com` domain.
5. Look for a cookie named `sp_dc`. Copy its value.

### Response:
```json
{
  "data": {
    "canvasesList": [
      {
        "id": "32b57cbf354b453a95eee32bb04d4e42",
        "canvasUrl": "https://canvaz.scdn.co/upload/licensor/5bSw7fRotCnRCcO9br14W5/video/32b57cbf354b453a95eee32bb04d4e42.cnvs.mp4",
        "trackUri": "spotify:track:3OHfY25tqY28d16oZczHc8",
        "artist": {
          "artistUri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP",
          "artistName": "SZA",
          "artistImgUrl": "https://i.scdn.co/image/ab6761610000f1780895066d172e1f51f520bc65"
        },
        "otherId": "2c441fceb502eaa25f26bcd5b1ccfc0d",
        "canvasUri": "spotify:canvas:1xGyujDyxbx4eTPD4nKLw6"
      }
    ]
  }
}
```

---

## Setup

### 1. Clone the Repo

```bash
git clone https://github.com/Paxsenix0/Spotify-Canvas-API.git
cd Spotify-Canvas-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will now be running at `http://localhost:3000`.

---

## Deployment

You can deploy instantly with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPaxsenix0%2FSpotify-Canvas-API%2Ftree%2Fmain&project-name=Spotify-Canvas-API&repository-name=Spotify-Canvas-API&redirect-url=https%3A%2F%2Fgithub.com%2FPaxsenix0%2FSpotify-Canvas-API)

---

## Notes

> I'm developing this project entirely on my phone, without a PC or laptop. Also, I'm still learning — so feel free to send pull requests or suggestions if something looks off!

---

## Reference

Shoutout to this helpful repo that inspired parts of this:
https://github.com/bartleyg/my-spotify-canvas

---

## License

This project is licensed under the MIT license. see [LICENSE](https://github.com/Paxsenix0/Spotify-Canvas-API/blob/initial/LICENSE) for details.

---

## Contact

Telegram: [@paxsenix0](https://t.me/paxsenix0)

Email: alex24dzn@proton.me

My Rest-API website: https://api.paxsenix.biz.id

---