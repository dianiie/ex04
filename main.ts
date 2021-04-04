let score1 = randint(0, 20)
let score2 = randint(0, 20)
let score3 = randint(0, 20)
let sum = (score1 + score2 + score3) / 3
serial.writeValue("score1", score1)
serial.writeValue("score2", score2)
serial.writeValue("score3", score3)
serial.writeValue("sum", sum)
serial.writeValue("sum score", Math.map(sum, 0, 20, 0, 10))
