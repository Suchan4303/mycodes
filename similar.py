a=input("String 1:\n")
b=input("String 2:\n")
if len(b)<len(a):
    short=len(b)
    long=len(a)
else:
    short=len(a)
    long=len(b)
similar=0
for i in range(short):
    if a[i]==b[i]:
            similar=similar+1
print("Similarity between 2 strings:",(similar/long)*100,"%")   
