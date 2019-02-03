#!/usr/bin/env node

const path = require('path')
const create = require('../main/create')
const dir = process.env.TEMPLATE || 'app'

create(path.resolve(__dirname, '../templates', dir), process.argv[2])
