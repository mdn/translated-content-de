---
title: Callback function
slug: Glossary/Callback_function
l10n:
  sourceCommit: 766ba3b1169c752e415fbc30cf0a1067ba9b8a78
---

{{GlossarySidebar}}

Eine **Callback-Funktion** ist eine Funktion, die in eine andere Funktion als Argument übergeben wird und dann innerhalb der äußeren Funktion aufgerufen wird, um eine Art von Routine oder Aktion abzuschließen.

Der Nutzer einer auf Callback basierenden API schreibt eine Funktion, die in die API übergeben wird. Der Anbieter der API (der sogenannte _Caller_) nimmt die Funktion und ruft sie zu einem bestimmten Zeitpunkt innerhalb des Callers auf (oder führt sie aus). Der Caller ist dafür verantwortlich, die richtigen Parameter an die Callback-Funktion zu übergeben. Der Caller kann auch einen bestimmten Rückgabewert von der Callback-Funktion erwarten, der verwendet wird, um das weitere Verhalten des Callers anzuweisen.

Es gibt zwei Arten, wie die Callback aufgerufen werden kann: _synchron_ und _asynchron_. Synchrone Callbacks werden unmittelbar nach dem Aufruf der äußeren Funktion ohne zwischengeschaltete asynchrone Aufgaben aufgerufen, während asynchrone Callbacks zu einem späteren Zeitpunkt nach dem Abschluss einer [asynchronen](/de/docs/Glossary/asynchronous) Operation aufgerufen werden.

Es ist besonders wichtig, zu verstehen, ob die Callback synchron oder asynchron aufgerufen wird, wenn man Nebeneffekte analysiert. Betrachten Sie das folgende Beispiel:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

Wenn `doSomething` den Callback synchron aufruft, würde die letzte Anweisung `2` protokollieren, da `value = 2` synchron ausgeführt wird; andernfalls, wenn der Callback asynchron ist, würde die letzte Anweisung `1` protokollieren, da `value = 2` erst nach der `console.log`-Anweisung ausgeführt wird.

Beispiele für synchrone Callbacks sind die an {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}} übergebenen Callbacks, etc. Beispiele für asynchrone Callbacks sind die an [`setTimeout()`](/de/docs/Web/API/setTimeout) und {{jsxref("Promise.prototype.then()")}} übergebenen Callbacks.

Der [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#timing) bietet weitere Informationen zum Timing asynchroner Callbacks.

## Siehe auch

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) auf Wikipedia
