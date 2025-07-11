---
title: Callback-Funktion
slug: Glossary/Callback_function
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Callback-Funktion** ist eine Funktion, die als Argument in eine andere Funktion übergeben wird und dann innerhalb der äußeren Funktion aufgerufen wird, um eine Art Routine oder Aktion abzuschließen.

Der Nutzer einer Callback-basierten API schreibt eine Funktion, die in die API übergeben wird. Der Anbieter der API (genannt der _Aufrufer_) nimmt die Funktion und ruft diese an einem bestimmten Punkt innerhalb des Körpers des Aufrufers auf (oder führt sie aus). Der Aufrufer ist dafür verantwortlich, die richtigen Parameter in die Callback-Funktion zu übergeben. Der Aufrufer kann auch einen bestimmten Rückgabewert von der Callback-Funktion erwarten, der genutzt wird, um das weitere Verhalten des Aufrufers zu steuern.

Es gibt zwei Möglichkeiten, wie der Callback aufgerufen werden kann: _synchron_ und _asynchron_. Synchrone Callbacks werden direkt nach dem Aufruf der äußeren Funktion ausgeführt, ohne dazwischenliegende asynchrone Aufgaben, während asynchrone Callbacks zu einem späteren Zeitpunkt aufgerufen werden, nachdem eine {{Glossary("asynchronous", "asynchrone")}} Operation abgeschlossen wurde.

Das Verständnis, ob der Callback synchron oder asynchron aufgerufen wird, ist besonders wichtig bei der Analyse von Seiteneffekten. Betrachten Sie das folgende Beispiel:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

Wenn `doSomething` den Callback synchron aufruft, dann würde die letzte Anweisung `2` protokollieren, da `value = 2` synchron ausgeführt wird; andernfalls, wenn der Callback asynchron ist, würde die letzte Anweisung `1` protokollieren, da `value = 2` erst nach der `console.log`-Anweisung ausgeführt wird.

Beispiele für synchrone Callbacks sind die Callbacks, die an {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}} übergeben werden, usw. Beispiele für asynchrone Callbacks sind die Callbacks, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und {{jsxref("Promise.prototype.then()")}} übergeben werden.

Der [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#timing) bietet mehr Informationen zur zeitlichen Ausführung von asynchronen Callbacks.

## Siehe auch

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) auf Wikipedia
