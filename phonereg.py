import re
phone_regex="\+91[6-9]\d{9}"
email_regex="[a-z0-9]+@[a-z0-9]+\.[a-z]{3}"
file1=open('new.txt','r')
f=file1.readlines()
for line in f:
matches=re.findall(phone_regex,line)
for match in matches:
print(match)
matches=re.findall(email_regex,line)
for match in matches:
print(match)
file1.close
