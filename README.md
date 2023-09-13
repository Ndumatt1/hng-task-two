# HOW TO USE THE API

# How to install dependencies
* Install dependencies by running npm install in the root directory of the project.

# Setting up environment variables
* Define a .env file that contains your environment variable
    * PORT => port the server should listen on
    * POSTGRES_DB => Your postgres database, Create it manually.
    * POSTGRES_USER => postgres user
    * POSTGRES_PASSWORD => postgres password of the user
    * POSTGRES_HOST => postgres host

# How to run
* Run npm start in the project root directory

# How to use
# POST REQUEST => e.g https://hng-task-two-a95v.onrender.com/api
    * to create a new user:
    * The endpint expects an attribute "name" from the body of the request
    * The value of name can only be a String
    * Returns a json response => 'User created Successfully' with the id . If the user was created in the database
    * Else returns an error message.

    * USAGE:
        * ENDPOINT => https://hng-task-two-a95v.onrender.com/api
        * METHOD => POST
        * BODY => {
            "name": "Matthew"
        }
        * RESPONSE => {
            "message": "User created successfully with id: 6"
        }

# GET REQUEST => e.g https://hng-task-two-a95v.onrender.com/api/:user_id
    * To get a user replace, replace :user_id with an integer representing the id of a user created
    * If no user is found, The API returns 'User not found!'
    * Else, returns the name of the user with the corresponding id.

    * USAGE:
        * ENDPOINT => https://hng-task-two-a95v.onrender.com/api/6
        * METHOD => GET
        * RESPONSE => {
            "name": "Matthew",
            "id": "6"
        }

# PUT REQUEST => e.g https://hng-task-two-a95v.onrender.com/api/:user_id
    * To update a user information, replace the :user_id with an integer representing the id of the user.
    * Send the new 'name' in the body of the request
    * If not user found with the id, 'User not found!' is returned
    * Else the user information in the database is update (name). and a response 'User updated successfully is returned'

    *USAGE:
        * ENDPOINT => https://hng-task-two-a95v.onrender.com/api/6
        * METHOD => PUT
        * BODY => {
            "name": "Matthew Ndubuisi"
        }
        * RESPONSE => {
            "message": "User updated successfully"
        }

# DELETE REQUEST => e.g https://hng-task-two-a95v.onrender.com/api/:user_id
    * To delete a user, replace :user_id with an integer representing the id of the user.
    * if no user with the id is found, the API returns 'No user found!'
    * Else deletes the user with the if and returns 'User deleted successfully!'.

    * USAGE:
        * ENDPOINT => https://hng-task-two-a95v.onrender.com/api/6
        * METHOD: DELETE
        RESPONSE => {
            "message": "User deleted successfully!"
        }
