a=int(input("Enter a number: "))
temp=a
rev=0
while(temp>0):
    dig=temp%10
    rev=rev*10+dig
    temp=temp//10
if(a==rev):
    print("Number is palindrome")
    for i in range(0,10):
        count=0
        temp=a
        while temp>0:
            dig=temp%10
            if dig==i:
                count=count+1
            temp=temp//10
        if count>0:
            print(i," occurs ",count," times")
else:
    print("Number is not palindrome")        
