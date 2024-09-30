---
title: Array
slug: Glossary/Array
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Array** ist eine geordnete Sammlung von Daten (entweder [primitive](/de/docs/Glossary/primitive) oder [object](/de/docs/Glossary/object) je nach Sprache). Arrays werden verwendet, um mehrere Werte unter einem einzigen Variablennamen zu speichern. Eine normale Variable hingegen kann nur einen einzelnen Wert speichern.

Jedes Element in einem Array hat eine Nummer, die als numerischer Index bezeichnet wird und Ihnen den Zugriff darauf ermöglicht. In JavaScript beginnen Arrays bei Index null und können mit verschiedenen [methoden](/de/docs/Glossary/Method) manipuliert werden.

Arrays in JavaScript sehen folgendermaßen aus:

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
