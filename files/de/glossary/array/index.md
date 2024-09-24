---
title: Array
slug: Glossary/Array
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Array** ist eine geordnete Sammlung von Daten (entweder {{Glossary("primitive", "primitive")}} oder {{Glossary("object", "Objektdaten")}}, abhängig von der Programmiersprache). Arrays werden verwendet, um mehrere Werte unter einem einzigen Variablennamen zu speichern. Eine normale Variable hingegen kann nur einen Wert speichern.

Jedes Element in einem Array hat eine Nummer, genannt numerischer Index, die es Ihnen ermöglicht, darauf zuzugreifen. In JavaScript beginnen Arrays bei Index null und können mit verschiedenen {{Glossary("Method", "Methoden")}} manipuliert werden.

Arrays in JavaScript sehen folgendermaßen aus:

```js
// Arrays in JavaScript können verschiedene Datentypen speichern
const myArray = [1, 2, 3, 4];
const barbieDollNamesArray = ["Barbie", "Ken", "Midge", "Allan", "Skipper"];

// Array-Indizes beginnen bei 0.
console.log(myArray[0]); // Ausgabe: 1
console.log(barbieDollNamesArray[2]); // Ausgabe: "Midge"
```

## Siehe auch

- JavaScript {{jsxref("Array")}}
