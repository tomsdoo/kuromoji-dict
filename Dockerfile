FROM node:8.10-alpine

COPY ./app /usr/local/app
WORKDIR /usr/local/app

COPY ./additionals /usr/local/app/additionals

RUN apk update
RUN apk --no-cache add git

RUN git clone https://github.com/takuyaa/kuromoji.js.git
WORKDIR /usr/local/app/kuromoji.js
RUN npm install

RUN cp /usr/local/app/additionals/*.csv ./node_modules/mecab-ipadic-seed/lib/dict/
RUN npm run build-dict

CMD ["sleep", "5m"]
