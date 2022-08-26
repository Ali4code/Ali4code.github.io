# What was done?

Implementation of the “Git Commit History app as a test project for FrontEnd dev of Insided” using TypeScript and React.
Public url : https://ali4code.github.io/git-history/

# Design

 Used React.js and typescript and also tried to wirte some test to demonstrate my fimilarity with writing tests and TDD approach even though this project not have complex logic(I did not completely follow TDD), just implement few tests. used functional components and hooks like useState, useEffect, useRef.
 I Did not use any React UI Component Library as it was not really needed but I worked last 2 years with MUI, plain css is used as modules per component, and tried to make project fully resposive to different screen sizes. also I wanted to implement some end-to-end tests with Cypress But if i can not push auth token what should i test ? (further approach)


- Main technology stack for this project are:
    * [React](https://reactjs.org/) library for building ui
    * [TypeScript](https://www.typescriptlang.org/) Used typed syntax

# How to run

> _NOTE: requires node v more than 16 (preferable LTS 16.16.0)
>
Go to the project directory
```bash
cd git-history
```

Install dependencies using: 
```bash
yarn
```
Run the project using: 
```bash
yarn start
```
Run unit tests using: 
```bash
yarn test
```
The project is running in:  
http://localhost:3000


# Thing's I learn
There are some things that I learned during this sample project:
* Github pages
* Github Commit Api


# Further improvements
Because of time limits, but there are some things that if I had more time, I would do:
* improves the overall UI of the system to be pretty.
* add more interactivity to adding access token so if its unvalid color changed or if its added we dont see input anymore.
* add another filed for user & repo address so this app is not just limited to this projects history
* add more unit tests and e2e test

