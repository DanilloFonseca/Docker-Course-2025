FROM node:18
WORKDIR /usr/src/app
# Copia os arquivos de dependência primeiro
COPY package*.json ./
# Instala pacotes necessários para dependências nativas
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
# Instala as dependências
RUN npm install
# Copia o restante do código
COPY . .
# Expõe a porta do Vite
EXPOSE 5173
CMD ["npm", "run", "dev"]
