# Portfolio Website 🌟

Welcome to the repository for my personal portfolio website! This project is designed to showcase my skills, experience, and hobbies, all hosted on a fully containerized setup running on my home server.

![Portfolio Screenshot](https://github.com/user-attachments/assets/60792140-9379-48a7-82f0-a9d25195fea1)

## 🚀 Features

- **Modern UI**: Built with **Next.js** for seamless, server-rendered performance.
- **Custom Design**: Styled with **Tailwind CSS**, ensuring a sleek, responsive layout.
- **Homelab Hosting**: Hosted on my **home server cluster**, orchestrated with:
  - **Docker**: For containerized deployment.
  - **Metallb**: Providing a load balancer within the homelab.
  - **Traefik**: Serving as the reverse proxy with automatic HTTPS support.
  - **Cloudflare**: Configured for DNS management and tunneling.
  - **Cloudflare Tunnel**: Securely exposes the website to the internet without port forwarding.
- **Dynamic Sections**:
  - Links to blogs, photos, and my media server.
  - Hobbies, skills, education, and resume highlights.

## 🖥️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend/Hosting**: Self-hosted with:
  - [Docker](https://www.docker.com/)
  - [Kubernetes (k3s)](https://k3s.io/)
  - [Metallb](https://metallb.universe.tf/)
  - [Traefik](https://traefik.io/)
  - **Cloudflare Services**:
    - DNS for managing the domain.
    - Tunnel for secure, public access to the website.
