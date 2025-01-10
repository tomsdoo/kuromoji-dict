docker compose build
docker compose up -d
speep 5
docker compose cp builder:/usr/local/app/kuromoji.js/dict ./
docker compose down
