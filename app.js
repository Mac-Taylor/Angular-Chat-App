
const app = angular.module('NewChatApp', []);

app.controller('ReceiveMessageController', function ($scope, ChatService) {

    $scope.newMessages = ChatService.getChats();

    $scope.messageNow = ChatService.getNewChats();

    $scope.readChat = function (chat) {
        ChatService.readChat(chat);
    };

});

app.controller('SendMessageController', function ($scope, ChatService) {

    $scope.functionName = function () {
        ChatService.sendMessage({
            message: $scope.msg,
            from: $scope.usrnm,
        });
    };

});

app.factory('ChatService', function ($http) {
    let newMessages = [];

    let messageNow = {
        from: 'Username',
        message: 'Message text.',
        id: 'number',
        added: 'time',
    };

    $http.get('https://tiy-28202.herokuapp.com/chats').then(function (response) {

        const statements = response.data.chats;
        for (let i = 0; i < statements.length; i++) {
            newMessages.push({
                from: statements[i].from,
                message: statements[i].message,
                id: statements[i].id,
                added: statements[i].added,
            });
        };
        console.log(newMessages);
    });

    return {
        getChats() {
            return newMessages;
        },
        getNewChats() {
            return messageNow;
        },
        readChat(chat) {
            messageNow.message = chat.message;
        },
        sendMessage(someObject) {
            $http.post('https://tiy-28202.herokuapp.com/chats', someObject);
            console.log('click');
        },
    };
});