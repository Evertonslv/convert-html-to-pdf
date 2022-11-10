FROM node:18-alpine

WORKDIR /usr/convert-html-pdf

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

COPY package*.json .

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apk update && apk add --no-cache nmap && \
    echo @edge https://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge https://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache \
      chromium \
      harfbuzz \
      "freetype>2.8" \
      ttf-freefont \
      nss

RUN npm install

USER node

CMD ["npm", "start"]
