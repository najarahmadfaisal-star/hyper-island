navigator.mediaSession.metadata = new MediaMetadata({
  title: 'Song Title',
  artist: 'Artist Name',
  album: 'Album Name',
  artwork: [{ src: 'cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
});
document.getElementById('play-btn').addEventListener('click', function() {
  navigator.mediaSession.playbackState = 'playing';
});
