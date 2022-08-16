// TODO: Include packages needed for this application
var bsd = "BSD 2-Clause" +"\n"+ " License Copyright (c) [year], [fullname]" + "\n" + "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"+ "\n"+"1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."+ "\n"+" 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."+ "\n" + " THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS " + "AS IS" + " AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";
var mit =  "MIT License "+ "\n" + "Copyright (c) [year] [fullname]" + "\n"+ "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."+ "\n"+ " THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
var gnu = "   GNU GENERAL PUBLIC LICENSE" + "\n" + "Version 2, June 1991" + " Copyright (C) 1989, 1991 Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed."





const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['Enter Title:','Enter Description:','Enter installation instructions','Enter: usage information','Enter contribution guidelines','Enter test instructions','Choose a liscence:','Enter GitHub usernsme:','Enter Email:'];
//Objective: figure out how to display questions on terminal
const promptUser = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation_instuctions',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage_information',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'contribution_guidelines',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'test_instructions',
        message: questions[5],
      },
    {
      type: 'rawlist',
      message: questions[6],
      name: 'liscence',
      choices: ['BSD','MIT','GPL'],
    },
    {
        type: 'input',
        name: 'github_username',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
  ])
}
  // var stuff = promptUser().then((answers)=>
  // {
    
  // });
  // console.log('hello'+stuff);
  const generateHTML = ({ title,description,installation_instuctions,usage_information,contribution_guidelines,test_instructions,liscence,github_username,email},liscence_info) =>
  //left off liscence
  
  `
  ${liscence_info}


  ## Table of Contents
  -[Installation Information](#installation-information)
  
  -[Usage Information](#usage-information)
  -[Contribution Guidlines](#contribution-guidlines)
  -[Test Instructions](#test-instructions)
  -[Questions](#questions)
  ## ${title}
  ## Description:
  ${description}
  ## Installation Information:
  ${installation_instuctions}
  ## Usage Information:
  ${usage_information}
  ## Contribution Guidlines:
  ${contribution_guidelines}
  ## Test Instructions:
  ${test_instructions}
  ## Questions:
  GitHub Username: ${github_username}
  GitHub: https://github.com/${github_username}?tab=repositories
  If you require any further information, feel free to contact me at ${email}
  

  `;
  
  
const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => {
        //in order to present the right liscence information
        if(answers.liscence === 'BSD'){
          var liscence_info = bsd;
        }
        else if(answers.liscence === 'MIT'){
          var liscence_info = mit;
        }
        else{
          var liscence_info = gnu;
        }
        fs.writeFileSync(answers.title +'.md', generateHTML(answers,liscence_info))
        
    })
      .then(() => console.log('Successfully wrote to index.html'))
    //   .catch((err) => console.error(err));
  };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();

//.toLowerCase().split(' ').join('')
