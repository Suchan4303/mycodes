import os.path
import sys
fname=input("enter filename:")
if not os.path.isfile(fname):
 print("File",fname,"dosenot exists")
 sys.exit(0)
infile=open(fname,"r")
lineList=infile.readlines()
for i in range (3):
 print(i+1,":",lineList[i])
word=input("enter a word:")
count=0
for line in lineList:
 count+=line.count(word)
print("the word",word,"appears",count,"times in the file")

