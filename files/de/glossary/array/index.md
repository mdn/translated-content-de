---
title: Array
slug: Glossary/Array
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Array** ist eine geordnete Sammlung von Daten (entweder {{Glossary("primitive", "primitiven")}} oder {{Glossary("object", "Objekten")}}, abhängig von der Sprache). Arrays werden verwendet, um mehrere Werte unter einem einzigen Variablennamen zu speichern. Eine reguläre Variable hingegen kann nur einen Wert speichern.

Jedes Element in einem Array hat eine Nummer, die als numerischer Index bezeichnet wird und Ihnen Zugriff darauf gewährt. In JavaScript beginnen Arrays bei Index null und können mit verschiedenen {{Glossary("Method", "Methoden")}} manipuliert werden.

Arrays in JavaScript sehen so aus:

```js
// Arrays in JavaScript can hold different types of data
const myArray = [1, 2, 3, 4];
const barbieDollNamesArray = ["Barbie", "Ken", "Midge", "Allan", "Skipper"];

// Array indexes starts at 0.
console.log(myArray[0]); // output: 1
console.log(barbieDollNamesArray[2]); // output: "Midge"
```

## Siehe auch

- JavaScript {{jsxref("Array")}}
