navigator.mediaSession.metadata = new MediaMetadata({
  title: 'Song Title',
  artist: 'Artist Name',
  album: 'Album Name',
  artwork: [{ src: 'cover.jpg', sizes: '512x512', type: 'image/jpeg' }]
});
document.getElementById('play-btn').addEventListener('click', function() {
  navigator.mediaSession.playbackState = 'playing';
});
document.getElementById('pause-btn').addEventListener('click', function() {
  navigator.mediaSession.playbackState = 'paused';
});
document.getElementById('skip-btn').addEventListener('click', function() {
  navigator.mediaSession.playbackState = 'playing';
});
