function orderByProps(obj, order) {
    const ordered = [];

    order.forEach(key => {
        if (key in obj) {
            ordered.push({
                key: key,
                value: obj[key]
            });
        }
    });

    const unordered = Object.keys(obj)
        .filter(key => !order.includes(key))
        .sort()
        .map(key => ({
            key: key,
            value: obj[key]
        }));

    return [...ordered, ...unordered];
}

module.exports = orderByProps;
