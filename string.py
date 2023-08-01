sentence = input("Enter a sentence:")
wordlist = sentence.split()
print("The sentence has", len(wordlist), "words")

dig = locase = upcase = 0  

for words in wordlist:
    word = list(words)
    for character in word:
        if character.isupper():  
            upcase += 1
        elif character.islower(): 
            locase += 1
        elif character.isdigit():
            dig += 1

print("This sentence has:\n", upcase, "uppercase letters\n", locase, " lowercase letters\n and\n", dig, "digits")
