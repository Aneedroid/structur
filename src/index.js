#!/usr/bin/env node
const program = require('commander');
const fs = require('fs-extra');
const path = require('path');

const { initializeTemplatesAndConfig, createFile } = require('./helpers/index.js');

program
  .version('1.0.0')
  .description('Structur');

program
  .command('init')
  .description('Initialize Structur templates')
  .action(async () => await initializeTemplatesAndConfig(
    path.resolve(__dirname, '..', 'templates'),
    path.resolve(process.cwd(), 'templates/'),
    path.resolve(process.cwd(), 'structur.json')
  ));

  program
  .command('create <fullComponentName>')
  .description('Bootstraps the necessary files for a component')
  .action(async (fullComponentName) => {
    try {
        const configObj = await fs.readJson(path.resolve(process.cwd(), 'structur.json'));

        const localComponentName = fullComponentName.split('/').pop();
        const localComponentDir = path.resolve(configObj.componentsPath, fullComponentName);

        const componentExists = await fs.pathExists(localComponentDir);

        if (componentExists) {
          console.log('Component already exists!');
          return;
        }

        const localComponentFilePath = path.resolve(localComponentDir, `${localComponentName}.jsx`);
        const localComponentBarrelFilePath = path.resolve(localComponentDir, 'index.js');

        const testFileDir = path.resolve(configObj.testsPath, fullComponentName);
        const testFilePath = path.resolve(testFileDir, `${localComponentName}.${configObj.testStyle}.jsx`);

        const localTemplateDir = path.resolve(process.cwd(), 'templates');

        //TODO: Can also make it such a way - Number of files in templates = number of files to create.

        // Component.
        createFile(path.resolve(localTemplateDir, 'Component.template.jsx'), localComponentFilePath, localComponentName);

        // Index file.
        createFile(path.resolve(localTemplateDir, 'index.js'), localComponentBarrelFilePath, localComponentName);

        // Test file.
        createFile(path.resolve(localTemplateDir, 'Component.template.testStyle.jsx'), testFilePath, localComponentName, configObj.componentsPath + fullComponentName);

        console.log('Component created!');

    } catch (err) {
        console.error('Error while creating the component ', err);
    }
  });

program.parse(process.argv);