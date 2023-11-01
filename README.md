# TRPC Expo + Node + Next.Js Starter

## Things configured

- Monorepo with Turbo and npm workspaces.
- Expo configured for monorepo and TRPC.
- Node.JS server with express and TRPC with TRPC Adapter.
- Shared tsconfig.
- Shared Eslint config.
- Shared common utilities.
- Unit Testing with Jest for all three apps.

## Runnig development server.

```bash
# 1. Install turbo globally
npm install turbo --global

# 2. Run development server
turbo dev
```

**Note:** dev script for mobile app will excecute `export start --android`

## Running tests.

```bash
turbo test
```
