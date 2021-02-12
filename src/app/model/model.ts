export type Mood = 'einsam' | 'langweilig' | 'wütend' | 'hungrig' | 'durstig' | 'kalt';


export const moodIcons = {
    'einsam': 'favorite',
    'wütend': 'flash_on',
    'hungrig': 'fastfood',
    'durstig': 'emoji_food_beverage',
    'kalt': 'device_thermostat',
    'langweilig': 'hourglass_bottom'
};



export const titleOptions = [
    'Rockstar',
    'Klemptner',
    'Investor',
    'Draufgänger',
    'Haudegen',
    'Künstler'
];


export interface DialogData {
    mood: Mood;
    info?: string;
}
