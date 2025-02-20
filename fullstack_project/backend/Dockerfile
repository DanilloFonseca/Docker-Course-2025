FROM node:16-alpine  
# Cria o diretório /usr/src/app dentro do container (caso não exista)
RUN mkdir -p /usr/src/app  
# Define /usr/src/app como o diretório de trabalho dentro do container
WORKDIR /usr/src/app  
# Instala o Nodemon globalmente para reiniciar automaticamente a aplicação ao detectar mudanças no código
RUN npm install -g nodemon --quiet  
# Expõe a porta 4000 para comunicação externa (o backend rodará nessa porta)
EXPOSE 4000  
# Define o comando padrão para iniciar o backend (executa "npm start")
CMD [ "npm", "start" ]  
