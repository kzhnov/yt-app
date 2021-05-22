import axios from 'axios';

const KEY = 'AIzaSyDyBcQYhFzLOmvJ3GCY4-eJqYrXtSSh9zQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});
