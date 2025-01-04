---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 9a7e014bc1ee2ce53751b47adbe48d3180bc2d54
---

{{GlossarySidebar}}

Ein **IIFE** (Immediately Invoked Function Expression) ist ein Idiom, bei dem eine {{Glossary("JavaScript", "JavaScript")}}-{{Glossary("function", "Funktion")}} ausgeführt wird, sobald sie definiert ist. Sie ist auch als _selbstausführende anonyme Funktion_ bekannt. Der Name IIFE wurde von Ben Alman in [seinem Blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) gefördert.

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

Es besteht aus zwei Hauptteilen:

1. Einem [Funktion-_Ausdruck_](/de/docs/Web/JavaScript/Reference/Operators/function). Dieser muss normalerweise [in Klammern eingeschlossen](/de/docs/Web/JavaScript/Reference/Operators/Grouping) werden, um korrekt geparst zu werden.
2. Der sofortigen _Ausführung_ des Funktionsausdrucks. Argumente können übergeben werden, obwohl IIFEs ohne Argumente häufiger vorkommen.

IIFEs sind ein gängiges Muster, das verwendet wird, um beliebig viele Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und möglicherweise einen Wert zurückzugeben), an einem Ort, der einen einzigen Ausdruck erfordert. Sie sind ähnlich wie, aber viel mächtiger als der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), der nur mehrere Ausdrücke ausführen kann und daher keine Möglichkeit bietet, lokale Variablen oder Kontrollflussanweisungen zu verwenden.

Anwendungsfälle von IIFEs umfassen:

- Vermeidung der Verschmutzung des globalen Namensraums durch Erstellen eines neuen {{Glossary("scope", "Gültigkeitsbereichs")}}).
- Erstellen eines neuen asynchronen Kontexts zur Verwendung von {{jsxref("Operators/await", "await")}} in einem nicht-asynchronen Kontext.
- Berechnung von Werten mit komplexer Logik, wie die Verwendung mehrerer Anweisungen als einzelner Ausdruck.

Für Code-Beispiele siehe die Referenzseiten zum [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) und [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function).

## Siehe auch

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Funktion")}}
