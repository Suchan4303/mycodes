def recfib(n):  
   if n<=1:  
       return n  
   else:  
       return(recfib(n-1)+recfib(n-2))  
a=int(input("Enter the value of n "))  
if a<=0:  
   print("Wrong Input")  
else:  
   for i in range(a):  
       print(recfib(i))  
   
