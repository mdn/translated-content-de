---
title: Callback function
slug: Glossary/Callback_function
l10n:
  sourceCommit: 766ba3b1169c752e415fbc30cf0a1067ba9b8a78
---

{{GlossarySidebar}}

Eine **Callback-Funktion** ist eine Funktion, die als Argument an eine andere Funktion übergeben wird und innerhalb der äußeren Funktion aufgerufen wird, um eine bestimmte Routine oder Aktion zu vollenden.

Der Nutzer einer API, die auf Callback-Funktionen basiert, schreibt eine Funktion, die in die API übergeben wird. Der Anbieter der API (genannt der _Aufrufer_) nimmt die Funktion und ruft sie zu einem bestimmten Zeitpunkt innerhalb des Körpers des Aufrufers wieder auf (oder führt sie aus). Der Aufrufer ist dafür verantwortlich, die richtigen Parameter an die Callback-Funktion zu übergeben. Der Aufrufer kann auch einen bestimmten Rückgabewert von der Callback-Funktion erwarten, der verwendet wird, um das weitere Verhalten des Aufrufers zu steuern.

Es gibt zwei Möglichkeiten, wie der Callback aufgerufen werden kann: _synchron_ und _asynchron_. Synchrone Callbacks werden unmittelbar nach dem Aufruf der äußeren Funktion aufgerufen, ohne dass dazwischen asynchrone Aufgaben ausgeführt werden, während asynchrone Callbacks zu einem späteren Zeitpunkt aufgerufen werden, nachdem eine [asynchrone](/de/docs/Glossary/asynchronous) Operation abgeschlossen ist.

Das Verständnis darüber, ob der Callback synchron oder asynchron aufgerufen wird, ist besonders wichtig, wenn es darum geht, Seiteneffekte zu analysieren. Betrachten Sie das folgende Beispiel:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

Wenn `doSomething` den Callback synchron aufruft, dann würde die letzte Anweisung `2` ausgeben, da `value = 2` synchron ausgeführt wird; andernfalls, wenn der Callback asynchron ist, würde die letzte Anweisung `1` ausgeben, da `value = 2` erst nach der `console.log`-Anweisung ausgeführt wird.

Beispiele für synchrone Callbacks sind die an {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}} usw. übergebenen Callbacks. Beispiele für asynchrone Callbacks sind die an [`setTimeout()`](/de/docs/Web/API/setTimeout) und {{jsxref("Promise.prototype.then()")}} übergebenen Callbacks.

Der [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#timing) bietet weitere Informationen zum Timing von asynchronen Callbacks.

## Siehe auch

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) auf Wikipedia
