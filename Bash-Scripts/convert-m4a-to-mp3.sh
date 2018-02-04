for f in *.m4a; do ffmpeg -i "$f" -ab 320k "${f%.m4a}.mp3"; done

