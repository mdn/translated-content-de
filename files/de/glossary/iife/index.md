---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **IIFE** (Immediately Invoked Function Expression) ist ein Idiom, bei dem eine {{Glossary("JavaScript", "JavaScript")}} {{Glossary("function", "function")}} ausgeführt wird, sobald sie definiert ist. Es ist auch als _selbstausführende anonyme Funktion_ bekannt. Der Name IIFE wird von Ben Alman in [seinem Blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) gefördert.

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

Es enthält zwei Hauptkomponenten:

1. Ein [function _expression_](/de/docs/Web/JavaScript/Reference/Operators/function). Diese muss normalerweise [in Klammern eingeschlossen](/de/docs/Web/JavaScript/Reference/Operators/Grouping) sein, um korrekt geparst zu werden.
2. Sofortiges _Aufrufen_ des Function Expressions. Argumente können bereitgestellt werden, obwohl IIFEs ohne Argumente häufiger vorkommen.

IIFEs sind ein gängiges Muster, um beliebig viele Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und möglicherweise einen Wert zurückzugeben) an einem Ort, der einen einzigen Ausdruck erfordert. Sie sind ähnlich wie, aber viel leistungsfähiger als der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), der nur mehrere Ausdrücke ausführen kann und daher keine Möglichkeit bietet, lokale Variablen oder Kontrollflussanweisungen zu verwenden.

Anwendungsfälle für IIFEs umfassen:

- Vermeidung der Verschmutzung des globalen Namensraums durch Erstellen eines neuen {{Glossary("scope", "scopes")}}.
- Schaffung eines neuen asynchronen Kontexts, um {{jsxref("Operators/await", "await")}} in einem nicht asynchronen Kontext zu verwenden.
- Berechnen von Werten mit komplexer Logik, wie die Verwendung mehrerer Anweisungen als einzelner Ausdruck.

Für Codebeispiele siehe die Referenzseiten zu [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function) und [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function).

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Function")}}
