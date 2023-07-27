# Password-Generator

## Description
This is my password generator site. The user can choose if they want uppercase letters, lowercase letters, numbers, and special characters to be included in their generated password. The user can also choose the desired length of their password. I stored the characters to choose from in separate arrays, which are concatenated into a new array (built array), based on the user's preferred characters, which is then used to generate the password. If the user chooses to include none of the given arrays in their generated password, they receive an alert telling them that they must include at least one character type, and then it runs the prompts again. I generated the random characters by setting a new variable (generatedLetterIndex) to be equal to math.floor math.random multiplied by the length of the built array inside of a for loop which runs until the length of password selected by the user is met. The password is set to += the built array at the generated letter index, the function then returns the password to be displayed on the user's screen

[This is a link to the deployed site](https://danmac121.github.io/Password-Generator/)

![Here is a screenshot of the site](./assets/generator-site.png)