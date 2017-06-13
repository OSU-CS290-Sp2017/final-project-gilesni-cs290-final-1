function showNameModal() {

    var modalBackdrop = document.getElementById('empty-space');
    var nameModal = document.getElementById('login-modal');

    // Show the modal and its backdrop.
    modalBackdrop.classList.remove('hidden');
    nameModal.classList.remove('hidden');

}

function closeNameModal() {

    var modalBackdrop = document.getElementById('empty-space');
    var nameModal = document.getElementById('login-modal');

    // Show the modal and its backdrop.
    modalBackdrop.classList.add('hidden');
    nameModal.classList.add('hidden');

    var loginInput = document.getElementById('login-account-input');
    loginInput.value = '';
}

function acceptName() {
    var nameArr = ['Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Amelia', 'Charlotte', 'Harper', 'Aria', 'Ella', 'Abigail', 'Evelyn', 'Avery', 'Emily', 'Madison', 'Scarlett', 'Sofia', 'Mila', 'Riley', 'Lily', 'Chloe', 'Layla', 'Ellie', 'Grace', 'Zoey', 'Aubrey', 'Elizabeth', 'Penelope', 'Hannah', 'Victoria', 'Nora', 'Stella', 'Luna', 'Addison', 'Lillian', 'Skylar', 'Natalie', 'Maya', 'Paisley', 'Savannah', 'Hazel', 'Lucy', 'Bella', 'Camila', 'Brooklyn', 'Audrey', 'Aaliyah', 'Aurora', 'Leah', 'Zoe', 'Elena', 'Anna', 'Violet', 'Claire', 'Eva', 'Kennedy', 'Eleanor', 'Hailey', 'Kinsley', 'Sophie', 'Emilia', 'Maria', 'Alice', 'Madelyn', 'Aubree', 'Gabriella', 'Adeline', 'Sarah', 'Ariana', 'Serenity', 'Arianna', 'Sadie', 'Eliana', 'Clara', 'Isabelle', 'Peyton', 'Caroline', 'Piper', 'Julia', 'Kaylee', 'Naomi', 'Gianna', 'Willow', 'Reagan', 'Autumn', 'Rylee', 'Nevaeh', 'Quinn', 'Valentina', 'Everly', 'Alexa', 'Samantha', 'Mackenzie', 'Brielle', 'Ruby', 'Isla', 'Madeline', 'Cora', 'Taylor', 'Emery', 'Ivy', 'Nova', 'Delilah', 'Melanie', 'Athena', 'Lydia', 'Natalia', 'Leilani', 'Arya', 'Jade', 'Kylie', 'Allison', 'Charlie', 'Lilly', 'Bailey', 'Nur', 'Annabelle', 'Faith', 'Adalyn', 'Norah', 'Hadley', 'Laila', 'Alyssa', 'Sara', 'Liliana', 'Genesis', 'Adalynn', 'Alexis', 'Alexandra', 'Raelynn', 'Jasmine', 'Princess', 'Vivian', 'Kayla', 'Ariel', 'Isabel', 'Eden', 'Lyla', 'Jordyn', 'Lauren', 'Payton', 'London', 'Melody', 'Ana', 'Katherine', 'Arabella', 'Iris', 'Mya', 'Ryleigh', 'Teagan', 'Alina', 'Aliyah', 'Rose', 'Trinity', 'Adaline', 'Morgan', 'Gracie', 'Josie', 'Khloe', 'Eliza', 'Callie', 'Zara', 'Finley', 'Brianna', 'Alaina', 'Londyn', 'Maggie', 'Sydney', 'Anastasia', 'Juliana', 'Paige', 'Elise', 'Mckenzie', 'Presley', 'Adriana', 'Harley', 'Amara', 'Amaya', 'Harmony', 'Emerson', 'Freya', 'Jocelyn', 'Mary', 'Abby', 'Molly', 'Sienna', 'Cecilia', 'Kendall', 'Josephine', 'Laura', 'Marley', 'Maryam', 'Summer', 'Nina', 'Andrea', 'Ayla', 'Evie', 'Angel', 'Eloise', 'Liam', 'Noah', 'Mason', 'Lucas', 'Oliver', 'Ethan', 'Elijah', 'Logan', 'Aiden', 'James', 'Benjamin', 'Jackson', 'Carter', 'Jacob', 'Sebastian', 'Alexander', 'Michael', 'Matthew', 'Luke', 'Jack', 'Jayden', 'Wyatt', 'Daniel', 'Gabriel', 'William', 'Grayson', 'Henry', 'Owen', 'Jaxon', 'Levi', 'Ryan', 'Julian', 'Lincoln', 'Isaiah', 'David', 'Adam', 'Josiah', 'Joseph', 'Samuel', 'Eli', 'Isaac', 'Nathan', 'John', 'Caleb', 'Andrew', 'Leo', 'Dylan', 'Joshua', 'Muhammad', 'Anthony', 'Hunter', 'Connor', 'Christian', 'Asher', 'Adrian', 'Aaron', 'Landon', 'Christopher', 'Mateo', 'Cameron', 'Brayden', 'Easton', 'Jeremiah', 'Ezra', 'Jordan', 'Hudson', 'Greyson', 'Jace', 'Thomas', 'Nolan', 'Max', 'Bryson', 'Nicholas', 'Charlie', 'Dominic', 'Evan', 'Xavier', 'Jaxson', 'Colton', 'Austin', 'Carson', 'Ayden', 'Kayden', 'Gavin', 'Elias', 'Maverick', 'Cooper', 'Jonathan', 'Chase', 'Ezekiel', 'Kai', 'Luca', 'Bentley', 'Santiago', 'Alex', 'Parker', 'Tyler', 'Robert', 'Roman', 'Tristan', 'Ian', 'King', 'Jason', 'Micah', 'Miles', 'Harrison', 'Theodore', 'Jameson', 'Zachary', 'Declan', 'Leonardo', 'Sawyer', 'Ryder', 'Damian', 'Finn', 'Vincent', 'Braxton', 'Cole', 'Maddox', 'Silas', 'Everett', 'Jude', 'Weston', 'Kaiden', 'Ali', 'Jayce', 'Blake', 'Theo', 'Charles', 'George', 'Nathaniel', 'Matteo', 'Xander', 'Wesley', 'Ashton', 'Emmett', 'Eric', 'Kingston', 'Ryker', 'Axel', 'Giovanni', 'Camden', 'Omar', 'Abel', 'Brandon', 'Amir', 'Bennett', 'Avery', 'Elliott', 'Rowan', 'Hayden', 'Jax', 'Angel', 'Calvin', 'Brantley', 'Zayden', 'Mohammed', 'Bryce', 'Ivan', 'Justin', 'Karter', 'Lorenzo', 'Elliot', 'Kevin', 'Maxwell', 'Brody', 'Zane', 'Diego', 'Zion', 'Antonio', 'Jose', 'Beau', 'Jonah', 'Malachi', 'Aidan', 'Marcus', 'Dawson', 'Luis', 'Carlos', 'Prince', 'Kaleb', 'Miguel', 'Ben', 'Dean', 'Enzo', 'Lukas', 'Tucker', 'Sam', 'Aj', 'Caden', 'Kaden', 'Grant', 'Paxton', 'Patrick', 'Stephen', 'Messiah', 'Riley', 'Sean', 'Waylon', 'Jake', 'Cthulhu, Eater of Souls']
    var name = '';

    var loginInput = document.getElementById('login-account-input');
    if (loginInput.value == '') {
        var randNum = Math.floor((Math.random() * 399) + 0);
        console.log("== RANDOM NUMBER: ", randNum);
        name = nameArr[randNum];
    }
    else {
        name = loginInput.value;
    }

    var checkInButton = document.getElementsByClassName('check-in-button');
    checkInButton[0].classList.remove('navitem');
    checkInButton[0].classList.add('navitem-hidden');

    var nameButton = document.getElementById('name-button');
    if (nameButton.textContent) {
        nameButton.lastChild.textContent = name;
    }
    else {
        var nameContent = document.createTextNode(name);
        nameButton.appendChild(nameContent);
    }

    var nameClass = document.getElementsByClassName('name-button');
    nameClass[0].classList.remove('navitem-hidden');
    nameClass[0].classList.add('navitem');

    closeNameModal();
}

function getGroupIDFromLocation() {
    var pathComponents = window.location.pathname.split('/');
    return pathComponents[1];
}

function newPost() {
    var userID = document.getElementById('name-button');
    if (userID.lastChild.textContent == '') {
        userIDNode = document.createTextNode('Anonymous');
        userID.appendChild(userIDNode);
    }
    var textVal = document.getElementById('text-input').value;
    if (textVal) {
        console.log("two");
        var groupID = getGroupIDFromLocation();
        if (groupID == '')
            groupID = 'general'
        if (groupID) {
            console.log("== Group ID: ", groupID);

            storeNewPost(groupID, userID.lastChild.textContent, textVal, function (err) {
                if (err) {
                    alert("Unable to send message. Error: " + err);
                } else {
                    var postTemplate = Handlebars.templates.post;
                    var templateArgs = {
                        user: userID.lastChild.textContent,
                        text: textVal
                    };
                    console.log("three")
                    var newPostHTML = postTemplate(templateArgs);

                    var postContainer = document.querySelector('.scroll-box');
                    postContainer.insertAdjacentHTML('beforeend', newPostHTML);

                }
            });

        }

        var clearText = document.getElementById('text-input');
        clearText.value = '';

    } else {
        alert('You must type a message to be sent');
    }
}

function storeNewPost(groupID, userID, textVal, callback) {
    console.log("Store function reached.");
    var postURL = "/" + groupID + "/newMessage";

    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', postURL);
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event) {
        var error;
        if (event.target.status !== 200) {
            error = event.target.response;
        }
        callback(error);
    });

    var postBody = {
        user: userID,
        text: textVal
    };
    console.log("postBody: ", JSON.stringify(postBody));
    postRequest.send(JSON.stringify(postBody));

}

window.addEventListener('DOMContentLoaded', function () {
    var checkInButton = document.getElementById('check-in-button');
    checkInButton.addEventListener('click', showNameModal);
    var nameButton = document.getElementById('name-button');
    nameButton.addEventListener('click', showNameModal);
    var modalCloseButton = document.getElementsByClassName('modal-close-button');
    modalCloseButton[0].addEventListener('click', closeNameModal);
    var modalCancelButton = document.getElementsByClassName('modal-cancel-button');
    modalCancelButton[0].addEventListener('click', closeNameModal);
    var modalLoginButton = document.getElementsByClassName('modal-login-button');
    modalLoginButton[0].addEventListener('click', acceptName);
    var postButton = document.getElementById('post-button');
    postButton.addEventListener('click', newPost);
});
