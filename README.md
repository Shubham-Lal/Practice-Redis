### Setup
1.  docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

    docker ps -a

2.  docker start `CONTAINER ID`

    docker exec -it `CONTAINER ID` bash
    
    redis-cli ping

3.  redis-cli

### String
1.  set user:1 Shubham
    
    set user:2 Kumkum
    
    set user:3 Shruti

2.  get user:1

    mget user:1 user:2 user:3

3.  set count 0

    incr count

    incrby count 4

    decr count

    decrby count 3

### Lists
1.  lpush hey

    lpush hello

    rpush messages bye

    llen messages

    lrange messages 0 -1

### Hashes
1.  hset bike:1 model Deimos brand Ergonom type 'Enduro bikes' price 4972