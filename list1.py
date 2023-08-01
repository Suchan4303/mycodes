list1=[]
n=int(input("Enter number of elements: "))
print("Enter ",n," elements")
for i in range(0,n):
    ele=int(input())
    list1.append(ele)
mergeSort(list1,0,len(list1)-1)
print(list1)




