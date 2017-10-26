import { default as config } from 'config';
import { default as Redis } from 'ioredis';
import { Promise } from 'bluebird';

const RedisClientPromise = Promise.promisifyAll(
  new Redis(config.connections.redis)
);

export default function redisClient() {
  return RedisClientPromise;
}