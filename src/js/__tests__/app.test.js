const orderByProps = require('../app');

describe('orderByProps', () => {
    test('should return properties sorted by the given order and alphabetically', () => {
        const obj = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        };
        const order = ["name", "level"];
        const result = orderByProps(obj, order);
        expect(result).toEqual([
            {
                key: "name",
                value: "мечник"
            },
            {
                key: "level",
                value: 2
            },
            {
                key: "attack",
                value: 80
            },
            {
                key: "defence",
                value: 40
            },
            {
                key: "health",
                value: 10
            }
        ]);
    });

    test('should return properties sorted alphabetically when order is empty', () => {
        const obj = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        };
        const order = [];
        const result = orderByProps(obj, order);
        expect(result).toEqual([
            {
                key: "attack",
                value: 80
            },
            {
                key: "defence",
                value: 40
            },
            {
                key: "health",
                value: 10
            },
            {
                key: "level",
                value: 2
            },
            {
                key: "name",
                value: "мечник"
            }
        ]);
    });

    test('should return properties in original order if all are in order array', () => {
        const obj = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        };
        const order = ["name", "level", "attack", "defence", "health"];
        const result = orderByProps(obj, order);
        expect(result).toEqual([
            {
                key: "name",
                value: "мечник"
            },
            {
                key: "level",
                value: 2
            },
            {
                key: "attack",
                value: 80
            },
            {
                key: "defence",
                value: 40
            },
            {
                key: "health",
                value: 10
            }
        ]);
    });

    test('should return empty array if object is empty', () => {
        const obj = {};
        const order = ["name", "level"];
        const result = orderByProps(obj, order);
        expect(result).toEqual([]);
    });

    test('should return properties in order when order contains some properties and others are sorted alphabetically', () => {
        const obj = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        };
        const order = ["health", "attack"];
        const result = orderByProps(obj, order);
        expect(result).toEqual([
            {
                key: "health",
                value: 10
            },
            {
                key: "attack",
                value: 80
            },
            {
                key: "defence",
                value: 40
            },
            {
                key: "level",
                value: 2
            },
            {
                key: "name",
                value: "мечник"
            }
        ]);
    });
});
