<<<<<<< HEAD
# Alex's Portfolio Website

## Overview
A personal portfolio website showcasing my work as a Full-Stack Software Engineer based in San Francisco, CA. The site serves as a comprehensive platform to highlight my projects, skills, and professional experience.

## Features
- **Home**: Landing page with personal introduction and overview
- **Experience**: Detailed work history and professional accomplishments
- **Projects**: Showcase of personal and professional software projects
- **Education**: Academic background and certifications
- **Skills**: Technical skills and competencies
- **Resume**: Downloadable resume in PDF format

## Additional Sections
- **Blog**: Personal tech blog featuring articles and insights
- **Photos**: Gallery of personal photography
- **Media Server**: Self-hosted media content

## Technology Stack
Next.JS, React.JS, running on my HomeLab k3s cluster, DNS and domain in CloudFlare, Traefik as reverse proxy, MetalLB load balancer

## Hobbies & Interests
The site also includes sections highlighting personal interests:
- 🚀 Space and astronomy
- 🎸 Guitar and music
- 📚 Reading
- 🏔️ Hiking and outdoor activities

## Local Development
1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm i
```

3. Start the development server:
```bash
npm run dev
```

## Contact
Feel free to reach out through:
- GitHub
- LinkedIn
- Email
- Phone
=======
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
>>>>>>> 70b9ff5bb1119064121f859f132629cc5019683b
