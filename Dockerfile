FROM node:8 as builder

COPY . /webservicesv1

WORKDIR /webservicesv1

RUN npm install 
RUN $(npm bin)/ng build 


FROM nginx 

COPY --from=builder /webservicesv1/dist/webServicesv1/* /usr/share/nginx/html/

EXPOSE 80

