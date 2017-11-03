Library = function(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.addPlaylist = (playlist)=>{
    this.playlists.push(playlist);
  }
  this.printPlaylists = ()=>{
    console.log(`printing playlists in library ${this.name}`)
    this.playlists.forEach((playlist)=>{
      console.log(`playlist: ${playlist.name} tracks ${playlist.tracks.length} `);
      console.log(`overall rating ${playlist.overallRating()} total duration ${playlist.totalDuration()}`);
      playlist.printTracks();

    })
  };
}

Playlist = function(name){
  this.name = name;
  this.tracks = [];
  this.overallRating = ()=>{
    let numberTrack = this.tracks.length;
    let totalRating = 0;
    if(numberTrack == 0) {return totalRating;}
    this.tracks.forEach((track)=>{
      totalRating =+ track.rating;
    });
    return (totalRating/numberTrack);
  };
  this.totalDuration = ()=>{
   let numberTrack = this.tracks.length;
   let totalDuration = 0;
   if(numberTrack == 0) {return totalDuration}
    this.tracks.forEach((track)=>{
      totalDuration += track.length;
    });
    return totalDuration;
  };
  this.addTrack = (track)=>{
    this.tracks.push(track);
  }
  this.printTracks = ()=>{
    console.log(`tracks in ${this.name}:`)
    this.tracks.forEach((track)=>{
      console.log(`${track.title}: rating ${track.rating}, length ${track.length}`);
    })
  }
}

Track = function(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;

  if(this.rating > 5) this.rating = 5;
  if(this.rating < 1) this.rating = 1;

  if(this.length < 0) this.length = 0;

}

var BernieLibrary = new Library('Bernie Hits','Bernard Roach');
var playlist1 = new Playlist('playlist1');

playlist1.addTrack(new Track('megahit',3,300));
playlist1.addTrack(new Track('megahitII',4,300));
playlist1.addTrack(new Track('megahitIII it cannot get any better!',5,900));

BernieLibrary.addPlaylist(playlist1);

BernieLibrary.printPlaylists();