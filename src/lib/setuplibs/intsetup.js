require('@sapphire/plugin-logger/register');
require('@sapphire/plugin-api/register');
require('@sapphire/plugin-editable-commands/register');
const { createColors } = require('colorette');
const { inspect } = require('util');
const db = require('quick.db');
// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Enable colorette
createColors({ useColor: true });

// db
new db.table('bank');