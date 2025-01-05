---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: d8fdf0fa24f97d788951ee4a1675632e55306e92
---

{{GlossarySidebar}}

Ein **IIFE** (Immediately Invoked Function Expression) ist ein Idiom, bei dem eine {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("function", "Funktion")}} ausgeführt wird, sobald sie definiert ist. Es ist auch bekannt als _selbst-aufrufende anonyme Funktion_. Der Name IIFE wird von Ben Alman in [seinem Blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) gefördert.

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

1. Ein [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function). Dieser muss normalerweise [in Klammern eingeschlossen](/de/docs/Web/JavaScript/Reference/Operators/Grouping) werden, um korrekt geparst zu werden.
2. Das sofortige _Aufrufen_ des Funktionsausdrucks. Argumente können bereitgestellt werden, wobei IIFEs ohne Argumente häufiger vorkommen.

IIFEs sind ein häufiges Muster, das verwendet wird, um eine beliebige Anzahl von Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und möglicherweise einen Wert zurückzugeben) an einem Ort, der einen einzelnen Ausdruck erfordert. Sie sind ähnlich wie, aber viel mächtiger als der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), der nur mehrere Ausdrücke ausführen kann und daher keine Möglichkeit bietet, lokale Variablen oder Kontrollflussanweisungen zu verwenden.

Verwendungszwecke von IIFEs umfassen:

- Vermeidung der Verschmutzung des globalen Namensraums durch Erstellen eines neuen {{Glossary("scope", "Gültigkeitsbereichs")}}.
- Erstellen eines neuen asynchronen Kontexts, um {{jsxref("Operators/await", "await")}} in einem nicht-asynchronen Kontext zu verwenden.
- Berechnung von Werten mit komplexer Logik, wie z.B. die Verwendung mehrerer Anweisungen als einzelner Ausdruck.

Für Codebeispiele siehe die Referenzseiten zu [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function) und [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function).

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Function")}}
