# Turkish Numbers

Write a program which converts an integer into a string representing the Turkish name for the integer

## Criteria

- Input will always be an integer between 0 and 99 (inclusive)  
- The output should always be lowercase

## Background

Forming the Turkish names for the numbers 0-99 is very straightforward:

Units (0-9) and tens (10, 20, 30, etc.) each have their own unique name

```
0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz

10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan
```

All other numbers are simply [tens] + [unit], like twenty one in English.  

Unlike English, Turkish does not have "teen"-suffixed numbers; e.g. 13 would be directly translated as "ten three" rather than "thirteen".

## Example

```
1  -->  "bir"
13  -->  "on üç"
27  -->  "yirmi yedi"
38  -->  "otuz sekiz"
77  -->  "yetmiş yedi"
94  -->  "doksan dört"
```
