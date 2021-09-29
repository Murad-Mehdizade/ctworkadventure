WA.sendChatMessage('Message #1', 'Tutor');

WA.onChatMessage((message => {
WA.sendChatMessage(message, 'echo');
}));

WA.sendChatMessage('Message #2', 'Tutor');
