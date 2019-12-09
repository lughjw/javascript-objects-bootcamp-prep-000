var playlist = {
  MariahCarey : "All I Want for Christmas Is You",
  Wham : "Last Christmas"
  BobbyHelms: "Jingle Bell Rock"
};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artistName: songTitle})
}
