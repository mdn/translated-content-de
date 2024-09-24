---
title: Callback function
slug: Glossary/Callback_function
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{GlossarySidebar}}

Eine **Callback-Funktion** ist eine Funktion, die als Argument in eine andere Funktion übergeben wird und innerhalb der äußeren Funktion aufgerufen wird, um eine Art von Routine oder Aktion abzuschließen.

Der Benutzer einer auf Callback basierenden API schreibt eine Funktion, die der API übergeben wird. Der Anbieter der API (der sogenannte _Aufrufer_) nimmt die Funktion und ruft sie (oder führt sie aus) zu einem bestimmten Zeitpunkt innerhalb des Körpers des Aufrufers auf. Der Aufrufer ist dafür verantwortlich, die richtigen Parameter in die Callback-Funktion zu übergeben. Der Aufrufer erwartet möglicherweise auch einen bestimmten Rückgabewert von der Callback-Funktion, der verwendet wird, um das weitere Verhalten des Aufrufers zu steuern.

Es gibt zwei Arten, wie der Callback aufgerufen werden kann: _synchron_ und _asynchron_. Synchrone Callbacks werden unmittelbar nach dem Aufruf der äußeren Funktion aufgerufen, ohne dass zwischenzeitlich asynchrone Aufgaben stattfinden, während asynchrone Callbacks irgendwann später aufgerufen werden, nachdem eine {{Glossary("asynchronous", "asynchrone")}} Operation abgeschlossen wurde.

Zu verstehen, ob der Callback synchron oder asynchron aufgerufen wird, ist besonders wichtig, wenn es darum geht, Seiteneffekte zu analysieren. Betrachten Sie das folgende Beispiel:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

Wenn `doSomething` den Callback synchron aufruft, würde die letzte Anweisung `2` protokollieren, da `value = 2` synchron ausgeführt wird; andernfalls, wenn der Callback asynchron ist, würde die letzte Anweisung `1` protokollieren, da `value = 2` erst nach der `console.log`-Anweisung ausgeführt wird.

Beispiele für synchrone Callbacks sind die Callbacks, die an {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}} usw. übergeben werden. Beispiele für asynchrone Callbacks sind die Callbacks, die an [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und {{jsxref("Promise.prototype.then()")}} übergeben werden.

Der [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises#timing) enthält weitere Informationen zum Timing von asynchronen Callbacks.

## Siehe auch

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) auf Wikipedia
