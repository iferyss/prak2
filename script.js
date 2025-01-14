const dictionary = 'abcdefghijklmnopqrstuvwxyz0123456789.,;!?:';
const fixedKey = 5;

function encrypt(message) {
    return message.split('').map(char => {
        const index = dictionary.indexOf(char);
        return index !== -1 ? (index + fixedKey) % dictionary.length : '';
    }).join(';');
}

function decrypt(encryptedMessage) {
    return encryptedMessage.split(';').map(part => {
        const index = parseInt(part);
        return (index - fixedKey + dictionary.length) % dictionary.length;
    }).map(index => dictionary.charAt(index)).join('');
}

function processMessage() {
    const message = document.getElementById('message').value;
    const mode = document.getElementById('mode').value;
    const result = mode === 'encrypt' ? encrypt(message) : decrypt(message);
    document.getElementById('output').innerText = result;
}

