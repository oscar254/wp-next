FROM mhart/alpine-node:10

WORKDIR /app
COPY . .

RUN yarn install --production=true
RUN yarn build
ENV PORT=3000

EXPOSE 3000
CMD ["yarn", "start"]
