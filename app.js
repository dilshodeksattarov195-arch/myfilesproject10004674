const tokenVenderConfig = { serverId: 6701, active: true };

const tokenVenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6701() {
    return tokenVenderConfig.active ? "OK" : "ERR";
}

console.log("Module tokenVender loaded successfully.");