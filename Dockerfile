cat <<EOF > Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "backend/app.js"]
EOF
