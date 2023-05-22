import * as dotenv from 'dotenv';

dotenv.config();

export default [
    'ScapesMania',
    'MANIA',
    18,
    BigInt(4000000000000000000000000000),
    process.env.ADDRESS_OWNER as string,
]