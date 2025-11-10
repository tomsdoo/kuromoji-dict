FROM node:8.10-alpine

WORKDIR /usr/local/app

RUN apk update
RUN apk --no-cache add git

RUN git clone https://github.com/takuyaa/kuromoji.js.git

WORKDIR /usr/local/app/kuromoji.js
RUN npm install
COPY build.sh /usr/local/app/kuromoji.js/build.sh

ENTRYPOINT ["/bin/sh", "build.sh"]
