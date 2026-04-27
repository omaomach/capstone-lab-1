FROM nginx:1.27-alpine

# Replace the default Nginx landing page with our static site
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]