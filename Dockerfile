FROM denoland/deno:2.0.6

WORKDIR /app

COPY deno.json ./
COPY deno.lock ./

COPY main.ts ./
COPY config ./config/
COPY routes ./routes/
COPY controllers ./controllers/
COPY db ./db/

RUN deno cache main.ts

COPY . .

ENV PORT=8003

EXPOSE 8003

CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--unstable", "main.ts"]