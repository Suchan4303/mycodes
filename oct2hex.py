def bin2Dec(n):
    rev=n[::-1]
    dec = 0
    i = 0
    for dig in rev:
        dec += int(dig) * 2**i
        i += 1
    return dec
def oct2Hex(n):
    rev=n[::-1]
    dec = 0
    i = 0
    for dig in rev:
        dec += int(dig) * 8**i
        i += 1
    list=[]
    while dec != 0:
        list.append(dec%16)
        dec = dec // 16
       
    c=[]
    for elem in list[::-1]:
        if elem <= 9:
            c.append(str(elem))
        else:
            c.append(chr(ord('A') + (elem -10)))
    hex = "".join(c)
   
    return hex

a = input("Enter a binary number : ")    
print("Decimal representation:",bin2Dec(a))
b = input("Enter a octal number : ")
print("Hexadecimal representation:",oct2Hex(b))








