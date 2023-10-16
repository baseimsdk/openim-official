# OpenIM Docs

# OpenIM Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e054801-f5b6-40c7-826c-3ae5901753f0/deploy-status)](https://app.netlify.com/sites/openim-web/deploys)

Welcome to the official documentation repository for OpenIM, an open-source, free, and universal instant messaging ecosystem. This repository contains the source files for our documentation, which is built with Docusaurus.

The documentation for OpenIM is hosted on GitHub as well as on an official documentation site. Here are the details:

1. **GitHub Repository**:
   + Repository URL: [https://github.com/OpenIMSDK/docs/](https://github.com/OpenIMSDK/docs/).
   + This repository contains the version 3 documentation for OpenIM, and developers can contribute to the documentation by creating a GitHub account and making pull requests.
2. **Official Documentation Site**:
   + Documentation URL: [https://doc.rentsoft.cn](https://doc.rentsoft.cn/) Now update to [https://openim.io](https://openim.io).
   + The official documentation site provides a structured and detailed guide for using OpenIM, covering various SDKs, guides, and API references. It also offers links to demo applications and the community Slack channel for support and interaction with other developers.
3. **Community and Additional Resources**:
   + OpenIM also maintains a community-driven approach, providing a Slack community for developers to share ideas, get help, and connect with others. They encourage developers to join their community, contribute to open-source projects, and improve their [engineering skills through collaboration](https://github.com/openimsdk).

These resources should provide a comprehensive understanding and guide for anyone looking to work with or contribute to the OpenIM project.

## Table of Contents

- [OpenIM Docs](#openim-docs)
- [OpenIM Documentation](#openim-documentation)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Getting Started](#getting-started)
  - [Other Projects](#other-projects)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

OpenIM provides both server-side and client-side SDKs, delivering high performance, lightweight, and easy-to-expand essential features. Developers can quickly integrate instant messaging and real-time network capabilities into their applications by integrating OpenIM components and privatizing the deployment of servers, ensuring the security and privacy of business data.

## Getting Started

To set up the documentation locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/openimsdk/docs.git
   cd docs
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```
At this point, you can access the local [http://localhost:3000](http://localhost:3000/) port.


In the `package.json` file, the `scripts` section provides various commands to help you work with the documentation:

+ `start` or `dev`: Starts the development server.
+ `build`: Builds the static files for your documentation.
+ `serve`: Serves the built documentation.
+ `deploy`: Deploys the documentation to GitHub Pages.
+ `clear`: Clears the cache of the documentation.
+ `swizzle`: Swizzles a Docusaurus theme component.
+ `write-translations`: Writes translation files.
+ `write-heading-ids`: Writes heading IDs.
+ `lint`: Lints the project using ESLint.
+ `lint:fix`: Fixes linting issues using ESLint.
+ `format`: Formats the source files using Prettier.
+ `format:docs`: Formats the documentation files using Prettier.
+ `typecheck`: Runs TypeScript type checking.

## Other Projects

OpenIMSDK encompasses a variety of open-source projects, each serving different purposes in the realm of instant messaging. Here is an overview of the mentioned projects along with their GitHub repository URLs:

1. **OpenIM Server (open-im-server)**:
   + GitHub Repository: [https://github.com/openimsdk/open-im-server](https://github.com/openimsdk/open-im-server).
   + This is the core server-side component of OpenIM, written in Go. It provides the backend infrastructure necessary for instant messaging. Features include supporting a variety of message types (text, images, voice, video, etc.), one-to-one and group chats, and more. The server is designed to be high-performance, easy to extend, and supports a layered [governance architecture in clusters](https://www.openim.online/en).
2. **Open IM Flutter Demo (open-im-flutter-demo)**:
   + GitHub Repository: [https://github.com/openimsdk/open-im-flutter-demo](https://github.com/openimsdk/open-im-flutter-demo).
   + This project serves as a demonstration of how OpenIM can be implemented in Flutter, providing a practical example for developers interested in integrating OpenIM within a Flutter application.
3. **OpenIM Electron Demo (openim-electron-demo)**:
   + GitHub Repository: [https://github.com/openimsdk/openim-electron-demo](https://github.com/openimsdk/openim-electron-demo).
   + This demo project showcases how OpenIM can be utilized in an Electron-based web application, providing a practical reference for developers.
4. **OpenIM Android Demo (open-im-android-demo)**:
   + GitHub Repository: [https://github.com/openimsdk/open-im-android-demo](https://github.com/openimsdk/open-im-android-demo).
   + This project provides a demonstration of OpenIM integration on the Android platform, serving as a useful reference for developers working on Android applications.
5. **OpenIM UniApp Demo (open-im-uniapp-demo)**:
   + GitHub Repository: [https://github.com/openimsdk/open-im-uniapp-demo](https://github.com/openimsdk/open-im-uniapp-demo).
   + This demo project showcases the integration of OpenIM in a UniApp application, providing a practical example for developers working with UniApp.
6. **Community Management for OpenIM (community)**:
   + GitHub Repository: [https://github.com/openimsdk/community](https://github.com/openimsdk/community).
   + This repository seems to be dedicated to community management aspects of OpenIM, although the exact details are not provided in the repository.

## Contributing

We welcome contributions from the community! Please refer to our [CONTRIBUTING.md](https://github.com/openimsdk/community/tree/main/CONTRIBUTING.md) file for detailed information on how to contribute.

## License

This project is licensed under the [MIT License](https://github.com/openimsdk/docs/blob/main/LICENSE).
