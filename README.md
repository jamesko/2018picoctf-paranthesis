# 2018picoctf-paranthesis
Write script to solve parenthesis  problem.

After considering the rules for the paranthsis "language". I also felt compelled to see what others had ascertained about the language itself. It was a bit confusing, but it did boil down to just two or three rules. Compare depth of terms being operated on. Largest wil absorb the adjacent term into the nearest paranthesis. If the terms had equal depth, then just concatenate the terms. And work from left to right for all terms in a formula to simplify/solve.

I chose to write in JavaScript to run from the command line using NodeJS.

Example of Usage:
```node solver.js "()() + ((())) + (())(()) = ???"```

Console output:
```RESULT: (()()(())(())(()))```

</>


