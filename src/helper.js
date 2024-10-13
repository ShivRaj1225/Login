// helper.js
export function handleUserData(username, password) {
    // Create an object to store user data
    
    const userData = {
      username: username,
      password: password,
    };
    console.log("Username: ", username);
    console.log("Password: ", password);
  
    // You can perform additional operations or validation here
  
    // Return the userData object
    return userData;
  }