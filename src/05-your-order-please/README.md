# Your order please
Write a program that sorts a string and returns the result.

## Criteria
- Each word in the string will contain a single number, which is the position that the word should have once the string is sorted.  
- The words in the input string will only contain valid consecutive numbers, so "tes1t hey1 let2s" is not allowed but "tes3t hey1 let2s" is perfectly fine.  
- Numbers can be from 1 to 9. So 1 will be the first word (not 0).  
- If the input string is empty, return an empty string.

## Examples
```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```