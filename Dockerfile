FROM nginx:alpine

COPY ./dist/webServicesv1 /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d