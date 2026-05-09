import { getCanvases } from '../services/spotifyCanvasService.js';

export const fetchCanvas = async (req, res) => {
  const { trackId, sp_dc } = req.query;
  if (!trackId) {
    return res.status(400).json({ error: 'Missing trackId parameter' });
  }
  if (!sp_dc) {
    return res.status(400).json({ error: 'Missing sp_dc parameter' });
  }

  const canvasData = await getCanvases(`spotify:track:${trackId}`, sp_dc);
  if (!canvasData) {
    return res.status(500).json({ error: 'Failed to fetch canvas data' });
  }

  res.json(canvasData);
};