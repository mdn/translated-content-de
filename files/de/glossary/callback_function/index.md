---
title: Callback-Funktion
slug: Glossary/Callback_function
l10n:
  sourceCommit: bc0796927a1f937dc8ba92afde355fb2d7c05306
---

Eine **Callback-Funktion** ist eine Funktion, die als Argument an eine andere Funktion übergeben wird und dann innerhalb der äußeren Funktion aufgerufen wird, um eine Art Routine oder Aktion abzuschließen.

Der Verbraucher einer auf Callback basierenden API schreibt eine Funktion, die in die API übergeben wird. Der Anbieter der API (der _Aufrufer_ genannt) nimmt die Funktion und ruft sie (oder führt sie aus) an einem bestimmten Punkt innerhalb des Körpers des Aufrufers zurück. Der Aufrufer ist dafür verantwortlich, die richtigen Parameter in die Callback-Funktion zu übergeben. Der Aufrufer erwartet möglicherweise auch einen bestimmten Rückgabewert von der Callback-Funktion, der verwendet wird, um das weitere Verhalten des Aufrufers zu steuern.

Es gibt zwei Möglichkeiten, wie der Callback aufgerufen werden kann: _synchron_ und _asynchron_. Synchrone Callbacks werden unmittelbar nach dem Aufruf der äußeren Funktion aufgerufen, ohne dass dazwischen asynchrone Aufgaben liegen, während asynchrone Callbacks zu einem späteren Zeitpunkt aufgerufen werden, nachdem eine {{Glossary("asynchronous", "asynchrone")}} Operation abgeschlossen ist.

Zu verstehen, ob der Callback synchron oder asynchron aufgerufen wird, ist besonders wichtig, wenn man Seiteneffekte analysiert. Betrachten Sie das folgende Beispiel:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value); // 1 or 2?
```

Wenn `doSomething` den Callback synchron aufruft, würde die letzte Anweisung `2` protokollieren, da `value = 2` synchron ausgeführt wird; andernfalls, wenn der Callback asynchron ist, würde die letzte Anweisung `1` protokollieren, da `value = 2` erst nach der `console.log`-Anweisung ausgeführt wird.

Beispiele für synchrone Callbacks sind die Callbacks, die an {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}} usw. übergeben werden. Beispiele für asynchrone Callbacks sind die Callbacks, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und {{jsxref("Promise.prototype.then()")}} übergeben werden. Hier sind Beispielimplementierungen von `doSomething`, die den Callback synchron und asynchron aufrufen:

```js
// Synchronous
function doSomething(callback) {
  callback();
}

// Asynchronous
function doSomething(callback) {
  setTimeout(callback, 0);
}
```

Der [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#timing) bietet weitere Informationen zum Timing von asynchronen Callbacks.

## Siehe auch

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) auf Wikipedia
