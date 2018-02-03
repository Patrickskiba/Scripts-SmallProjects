const tracks = require('./tracks.json')
const { spawn } = require('child_process')

const getTrackArtist = () => {
  tracks['items'].map((song) => {
    const youtube = spawn('/usr/local/bin/youtube-dl~', ['-f 140', 'gvsearch1:' + song['track']['name'] + ' ' + song['track']['artists'][0]['name']])

    youtube.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`)
    })

    youtube.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`)
    })

    youtube.on('error', (data) => {
      console.log(`stdout: ${data}`)
    })

    youtube.on('error', (data) => {
      console.log(`stderr: ${data}`)
    })

    youtube.on('close', (code) => {
      console.log(`child process exited with code ${code}`)
    })
  })
}

getTrackArtist()
