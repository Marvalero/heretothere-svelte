import { writable } from 'svelte/store';

export const guess = writable(0);
export const level = writable(0);
export const display = writable(false);
