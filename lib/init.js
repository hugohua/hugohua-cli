const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs-extra');

module.exports = async (type) => {

  // 可选的类库列表
  const choices = [
    'react',
    'vue'
  ];
  let choose = { lib: type };
  // 如果执行 hugohua-cli init 没有传参时，让用户进行选择
  if (choices.indexOf(type) == -1) {
    choose = await inquirer
      .prompt([{
        type: 'list',
        name: 'lib',
        message: 'Please choose library',
        choices
      }])
  }
  // 将模板文件复制到对应的文件夹内
  const srcTemplateDir = path.resolve(__dirname, '../templates/', choose.lib);
  const distDir = path.resolve(process.cwd());
  fs.copy(srcTemplateDir, distDir, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`init ${choose.lib} project success!`);
    }
  });
};
