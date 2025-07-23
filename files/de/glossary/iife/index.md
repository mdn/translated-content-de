---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 765822679f4e2ee8b16b9d0b27eb46409fe37b47
---

Ein **IIFE** (Immediately Invoked Function Expression) ist ein Idiom, bei dem eine {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("function", "Funktion")}} sofort ausgeführt wird, sobald sie definiert ist. Es wird auch als _selbst-exekutierende anonyme Funktion_ bezeichnet. Der Name IIFE wird von Ben Alman in [seinem Blog](http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) gefördert.

```js
// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();
```

Es enthält zwei Hauptteile:

1. Ein [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function). Dieser muss in der Regel [in Klammern gesetzt](/de/docs/Web/JavaScript/Reference/Operators/Grouping) werden, um korrekt geparst zu werden.
2. Das sofortige _Aufrufen_ des Funktionsausdrucks. Argumente können bereitgestellt werden, obwohl IIFEs ohne Argumente häufiger vorkommen.

IIFEs sind ein häufig verwendetes Muster, um beliebig viele Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und möglicherweise einen Wert zurückzugeben), an einem Ort, der einen einzelnen Ausdruck erfordert. Sie sind ähnlich wie, aber viel mächtiger als der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), der nur mehrere Ausdrücke ausführen kann und daher keine Möglichkeit bietet, lokale Variablen oder Kontrollflussanweisungen zu verwenden.

Anwendungsfälle von IIFEs beinhalten:

- Vermeidung der Verschmutzung des globalen Namensraums durch Erstellen eines neuen {{Glossary("scope", "Gültigkeitsbereichs")}}.
- Erstellen eines neuen asynchronen Kontexts, um {{jsxref("Operators/await", "await")}} in einem nicht-asynchronen Kontext zu verwenden.
- Berechnen von Werten mit komplexer Logik, wie das Verwenden mehrerer Anweisungen als einzelnen Ausdruck.

Für Codebeispiele siehe die Referenzseiten zu [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function) und [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function).

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Verwandte Glossareinträge:
  - {{Glossary("Function", "Funktion")}}
