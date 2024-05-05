const generatedUUIDs = new Set();

function generateUUID() {
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    const timestamp = Date.now().toString(16);
    let uuid;

    do {
        uuid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4() + timestamp).toLowerCase();
    } while (generatedUUIDs.has(uuid));
    
    generatedUUIDs.add(uuid);
    return uuid;
}

module.exports = generateUUID;
