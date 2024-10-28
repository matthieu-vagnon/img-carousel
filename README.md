# Table of contents

- [Table of contents](#table-of-contents)
- [Roadmap](#roadmap)
- [Project informations](#project-informations)
  - [Description](#description)
  - [Tech stack](#tech-stack)
  - [Features](#features)
  - [Props](#props)

# Roadmap

| Task                                | Priority | Status |
| ----------------------------------- | -------- | ------ |
| ~~Create the script behind scroll~~ | !!!      | ✅     |
| ~~Animate the transition~~          | !!!      | ✅     |
| ~~Add effects on images~~           | !!       | ✅     |

# Project informations

## Description

This is a simple image carousel.

## Tech stack

This component was built using the following tools:

- React.js
- TypeScript
- CSS

## Features

The app has the following features, designed to showcase my competences:

| Functionality  | Description                                   |
| -------------- | --------------------------------------------- |
| Image carousel | Automatically slide image on a regular basis. |

## Props

| Prop           | Type            | Required (default value) | Description                                              |
| -------------- | --------------- | ------------------------ | -------------------------------------------------------- |
| `images`       | `Array<string>` | Yes                      | Collection of images, with a minimum of 2 images.        |
| `slideSpeed`   | `number`        | No (10000)               | Carousel slide speed.                                    |
| `noiseOpacity` | `number`        | No (0)                   | Optional noise that can be added to the carousel images. |
