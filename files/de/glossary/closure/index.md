---
title: Closure
slug: Glossary/Closure
l10n:
  sourceCommit: f2497dd4077c67b7832a466868fd5c828df40ec1
---

In der Computerprogrammierung ist ein **Closure** eine Technik zur Implementierung der lexikalischen {{Glossary("scope", "Namensbindung")}} in einer Sprache mit {{Glossary("first-class_function", "First-Class-Funktionen")}}.

In {{Glossary("JavaScript", "JavaScript")}} erstellt eine {{Glossary("function", "Funktion")}} einen Closure-Kontext. Wie der folgende Code zeigt, behält die innere Funktion Zugriff auf die Variable `count`, selbst nachdem `createCounter()` die Ausführung abgeschlossen hat.

```js
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

## Siehe auch

- [Closures in JavaScript](/de/docs/Web/JavaScript/Guide/Closures)
- [Closure](https://en.wikipedia.org/wiki/Closure_%28computer_programming%29) auf Wikipedia
