# Architecture Overview

hosting.eth is built as a cloud-native distributed system with the following components:

## Frontend

- Quasar Framework (Vue3/TypeScript)
- TanStack components for data management and UI
- PrimeVue and Tailwind CSS for styling
- Web3 integration with Ethereum

## Backend

- PHP with Spiral Framework
- Cycle ORM for database operations
- Swoole for high-performance PHP
- Dapr for distributed application runtime

## Infrastructure

- Kubernetes for container orchestration
- Dapr for microservices communication
- Hashicorp Cloud Platform for infrastructure management
- CI/CD with 8-part system (Nx, Tecton, Jenkins, GitHub Actions, Hydra, Flux CD, ArgoCD, Ansible)

## Web3 Integration

- Ethereum blockchain for domain registration
- ENS (Ethereum Name Service) integration
- Web3 wallet connectivity
- Dual-mode operation (traditional and blockchain domains)
