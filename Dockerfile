FROM node

RUN mkdir /code
WORKDIR /code

COPY package.json /code/
RUN yarn

COPY ./ /code/