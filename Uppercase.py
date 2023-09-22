sentence = input("Enter a sentence: ")
wordList = sentence.split(" ")
print("The length of the sentence is", len(wordList), "words")
dig = lowercase = upcase = 0

for word in wordList:
    for character in word:
        if character.isupper():
            upcase += 1
        elif character.islower():
            lowercase += 1
        elif character.isdigit():
            dig += 1

print("The sentence has", upcase, "uppercase letters,", lowercase, "lowercase letters,", dig, "digits")
