var radio = {
  current: null,
  {
    name: 'hot 97',
    station: 'FM',
    songs: [
      {
        title: 'In My Feelings',
        artist: 'Drake'
      },
      {
        title: 'Boo\'d Up',
        artist: 'Ella Mai'
      },
      {
        title: 'Nice For What',
        artist: 'Drake'
      },
    ],
  },
  {
    name: 'power 105',
    station: 'FM',
    songs: [
      {
        title: 'Run this Town',
        artist: 'Rhianna'
      },
      {
        title: 'Lucid Dreams',
        artist: 'Lil Purp'
      },
      {
        title: 'Get Busy',
        artist: 'Sean Paul'
      },
    ]
  },
  {
    name: 'La Mega',
    station: 'FM',
    songs: [
      {
        title: 'Unica',
        artist: 'Ozuna'
      },
      {
        title: 'Mala Mia',
        artist: 'Maluma'
      },
      {
        title: 'Estamos Bien',
        artist: 'Bad Bunny'
      },
    ]
  },
  {
    name: 'Sways Universe',
    station: 'Sirius',
    songs: [
      {
        title: 'Bring the Ruckus',
        artist: 'Wu Tang Clan'
      },
      {
        title: 'The Real Slim Shady',
        artist: 'Eminem'
    },
      {
        title: 'Three Little Birds',
        artist: 'Bob Marley'
    },
    ]
  },
  {
    change: function()
      {
          var station = this.stations[Math.floor(Math.random() * this.stations.length)];
          var song = station.songs[Math.floor(Math.random() * station.songs.length)];
          this.currentStation = station;
          this.currentSong = song;
          console.log("Now Playing: " + song.title + " by " + song.artist);

      }
    }
};
radio.change();
