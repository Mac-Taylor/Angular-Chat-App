
const app = angular.module('NewChatApp', []);

app.controller('ChatAppController', function($scope, ChatService) {



});

app.controller('NewMessageController', function($scope, ChatService){


});

app.factory('ChatService', function($http){
    let messages = [];

    let mostRecent = {
        sender: 'Username',
        messageContent: 'Message text.'
    };

    $http.get('https://tiy-28202.herokuapp.com/chats').then(function(response){

        

    });




})