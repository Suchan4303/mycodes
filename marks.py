a=int(input("Enter the marks of first test "))
b=int(input("Enter the marks of second test "))
c=int(input("Enter the marks of third test "))
if(a<=b and a<=c):
      avg=(c+b)/2
elif(b<=a and b<=c):
      avg=(a+c)/2
else:
      avg=(a+b)/2
print("Average marks of best two tests is ",avg)
