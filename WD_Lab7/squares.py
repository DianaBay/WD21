from math import sqrt
a = int(input())
b = int(input())
for x in range(a, b + 1):
    if sqrt(x).is_integer() == True:
        print(x, end = ' ')