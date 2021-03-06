import chalk from 'chalk';
import {DIRECTION, Vehicle} from "./types";

// Modify this source file for more tests
import { DIRECTIONS, POSITIONS } from './test/testset_1';

/**
 * Entities in crossroad array which symbolizes empty space, exit or wall (border)
 */
export const ENTITIES: any = {
    FREE: '0',
    WALL: 'B',
    EXIT: 'E',
};

/**
 * The array of starting point
 * Positions are loaded from src/test/testset_*.ts
 */
export const vehicles: Vehicle[] = [
    {
        id: 1,
        name: 'cervene',
        color: (text: string) => chalk.bgRed(text),
        length: 2,
        polarity: 'H',
        position: POSITIONS['cervene'],
    },
    {
        id: 2,
        name: 'oranzove',
        color: (text: string) => chalk.bgKeyword('orange')(text),
        length: 2,
        polarity: 'H',
        position: POSITIONS['oranzove'],
    },
    {
        id: 3,
        name: 'zlte',
        color: (text: string) => chalk.bgYellow(text),
        length: 3,
        polarity: 'V',
        position: POSITIONS['zlte'],
    },
    {
        id: 4,
        name: 'fialove',
        color: (text: string) => chalk.bgKeyword('indigo')(text),
        length: 2,
        polarity: 'V',
        position: POSITIONS['fialove'],
    },

    {
        id: 5,
        name: 'sive',
        color: (text: string) => chalk.bgKeyword('dimgrey')(text),
        length: 2,
        polarity: 'H',
		position: POSITIONS['sive'],
    },
    {
        id: 6,
        name: 'zelene',
        color: (text: string) => chalk.bgGreen(text),
        length: 3,
        polarity: 'V',
		position: POSITIONS['zelene'],
	},
    {
        id: 7,
        name: 'svetlomodre',
        color: (text: string) => chalk.bgBlueBright(text),
        length: 3,
        polarity: 'H',
		position: POSITIONS['svetlomodre'],
    },
    {
        id: 8,
        name: 'tmavomodre',
        color: (text: string) => chalk.bgKeyword('darkblue')(text),
        length: 3,
        polarity: 'V',
        position: POSITIONS['tmavomodre'],
    },
];

export const directions : DIRECTION[]= DIRECTIONS;
