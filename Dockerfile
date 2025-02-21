# ---- Stage 1: Builder ----
FROM node:23-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your files and build
COPY . .
RUN npm run build  # <-- This runs next build

# ---- Stage 2: Runner ----
FROM node:23-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]

