import * as migration_20260907_192248_initial from './20260907_192248_initial';

export const migrations = [
  {
    up: migration_20260907_192248_initial.up,
    down: migration_20260907_192248_initial.down,
    name: '20260907_192248_initial'
  },
];
