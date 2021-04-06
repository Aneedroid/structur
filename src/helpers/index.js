const fs = require('fs-extra');

const initializeTemplatesAndConfig = async (templatesSrc, templateDestination, configDestination) => {
  const basicConfig = {
    componentsPath: 'components/',
    testsPath: 'test/components/',
    testStyle: 'test',
  };

  try {
    fs.copySync(templatesSrc, templateDestination);
    await fs.writeJson(configDestination, basicConfig, { spaces: ' ' });
    console.log('Configs and templates are initialized!');
  } catch (err) {
    console.error('Error while initializing! ', err);
  }
};

const createFile = (readFilePath, writeFilePath, replaceComponentName, replaceComponentPath) => {
  try {
    const fileData = fs.readFileSync(readFilePath, 'utf8');
    let replacedData = fileData.replace(/__COMPONENT_NAME__/g, replaceComponentName);
    if (replaceComponentName) {
      replacedData = replacedData.replace(/__COMP_PATH__/g, replaceComponentPath);
    }
    fs.outputFileSync(writeFilePath, replacedData);
  } catch (err) {
    console.log('Error while reading template file! ', err);
  }
};

module.exports = {
  initializeTemplatesAndConfig,
  createFile,
};
