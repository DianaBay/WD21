from math import sqrt
a = int(input())
cnt = int()
for x in range(1, sqrt(a) - 1):
    if a % x == 0:
        cnt += 1
print(cnt) 