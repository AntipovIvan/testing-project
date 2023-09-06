FROM rust:latest

WORKDIR /app
COPY . .

RUN cargo build --release

EXPOSE 8000
ENV RUST_ROCKET_HOST=0.0.0.0

CMD ["target/release/rust"]
