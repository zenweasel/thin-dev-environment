FROM reactioncommerce/reaction:4.1.5
USER root
RUN npm install -g husky is-ci is-docker
USER node
COPY package*.json /tmp/
WORKDIR /usr/local/src/app
RUN npm install --no-audit --only=production
COPY plugins.json /usr/local/src/app/
