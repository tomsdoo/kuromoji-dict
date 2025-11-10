cp /usr/local/additionals/*.csv ./node_modules/mecab-ipadic-seed/lib/dict/
npm run build-dict
mv dict /usr/local/results/
