# Expo X Docker X Tailwind
> Starter kit for building React Native Expo Tailwind app with Docker and Docker Compose.  

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- No dependencies required except [Docker](https://docs.docker.com/) and [Docker Compose](https://docs.docker.com/compose/compose-file/)
- Build an app from scratch with [expo-template-blank](https://github.com/expo/expo/tree/main/templates/expo-template-blank)


## Technologies Used
- Docker - version 20.10.18
- Docker Compose - version 3.8
- Expo - version 46.0.1
- React - version 18.0.0
- React Native - version 0.69.6


## Setup
### Requirements
Before using this repo, make sure you have installed:
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Get started
First you have to get the repo
```bash
# Clone the repo 
git clone git@github.com:Badisse/expo-template-blank-docker-sample.git

# Get into the repo
cd expo-template-blank-docker-sample
```

Then you need to create an .env file containing those informations:
```
EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
REACT_NATIVE_PACKAGER_HOSTNAME=<YOUR IP ADDRESS>
```
Replace `<YOUR IP ADDRESS>` by the ip address of the host.

You can now run the project:

```bash
# Build containers
make build

# Get into the running container
make expo

# Install dependencies (inside the container)
yarn install

# Start expo (inside the container)
expo start
```

Once all those steps done, you can access the Expo Dev Tools at: `http://<YOUR IP ADDRESS>:19002`

Don't forget to chose the **tunnel** option if you want to run the app on your device with Expo Go.


## Project Status
Project is: _in progress_ 


## Room for Improvement
- Improve the docker image
- Improve the docker compose setup
- Improve the makefile
- Add a script to build the .env file and add the local IP directly inside

