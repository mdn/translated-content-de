---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

Ein **IIFE** (Immediately Invoked Function Expression) ist ein Idiom, bei dem eine {{Glossary("JavaScript", "JavaScript")}} {{Glossary("function", "Funktion")}} ausgeführt wird, sobald sie definiert ist. Es ist auch bekannt als eine _selbstausführende anonyme Funktion_. Der Name IIFE wird von Ben Alman in [seinem Blog](https://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) gefördert.

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

Es enthält zwei Hauptbestandteile:

1. Ein [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function). Dieser muss normalerweise [in Klammern eingeschlossen](/de/docs/Web/JavaScript/Reference/Operators/Grouping) werden, um korrekt geparst zu werden.
2. Das unmittelbare _Aufrufen_ des Funktionsausdrucks. Es können Argumente bereitgestellt werden, obwohl IIFEs ohne Argumente häufiger sind.

IIFEs sind ein gängiges Muster, das verwendet wird, um beliebig viele Anweisungen in ihrem eigenen Bereich auszuführen (und möglicherweise einen Wert zurückzugeben), an einem Ort, der einen einzelnen Ausdruck erfordert. Sie sind ähnlich wie, aber viel leistungsfähiger als, der [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), der nur mehrere Ausdrücke ausführen kann und daher keine Möglichkeit bietet, lokale Variablen oder Kontrollflussanweisungen zu verwenden.

Anwendungsfälle für IIFEs umfassen:

- Vermeidung der Verschmutzung des globalen Namensraums durch Erstellen eines neuen {{Glossary("scope", "Scopes")}}.
- Erstellen eines neuen asynchronen Kontexts, um {{jsxref("Operators/await", "await")}} in einem nicht-asychronen Kontext zu verwenden.
- Berechnen von Werten mit komplexer Logik, etwa durch die Nutzung mehrerer Anweisungen als einzelner Ausdruck.

Für Codebeispiele siehe die Referenzseiten zu [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function) und [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function).

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Verwandte Glossareinträge:
  - {{Glossary("Function", "Funktion")}}
