---
title: Callback-Funktion
slug: Glossary/Callback_function
l10n:
  sourceCommit: 766ba3b1169c752e415fbc30cf0a1067ba9b8a78
---

{{GlossarySidebar}}

Eine **Callback-Funktion** ist eine Funktion, die als Argument an eine andere Funktion übergeben wird und dann innerhalb der äußeren Funktion aufgerufen wird, um eine Art von Routine oder Aktion abzuschließen.

Der Verbraucher einer auf Rückrufen basierenden API schreibt eine Funktion, die an die API übergeben wird. Der Anbieter der API (der _Aufrufer_ genannt) nimmt die Funktion und ruft (oder führt) die Funktion zu einem bestimmten Zeitpunkt im Körper des Aufrufers auf. Der Aufrufer ist dafür verantwortlich, die richtigen Parameter in die Callback-Funktion zu übergeben. Der Aufrufer kann auch einen bestimmten Rückgabewert von der Callback-Funktion erwarten, der das weitere Verhalten des Aufrufers steuert.

Es gibt zwei Möglichkeiten, wie der Rückruf aufgerufen werden kann: _synchron_ und _asynchron_. Synchrone Rückrufe werden unmittelbar nach dem Aufruf der äußeren Funktion aufgerufen, ohne dass zwischenzeitliche asynchrone Aufgaben stattfinden, während asynchrone Rückrufe irgendwann später aufgerufen werden, nachdem eine {{glossary("asynchronous")}} Operation abgeschlossen wurde.

Zu verstehen, ob der Rückruf synchron oder asynchron aufgerufen wird, ist besonders wichtig beim Analysieren von Seiteneffekten. Betrachten Sie das folgende Beispiel:

```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);
```

Wenn `doSomething` den Rückruf synchron aufruft, würde die letzte Anweisung `2` protokollieren, da `value = 2` synchron ausgeführt wird; andernfalls, wenn der Rückruf asynchron ist, würde die letzte Anweisung `1` protokollieren, da `value = 2` erst nach der `console.log`-Anweisung ausgeführt wird.

Beispiele für synchrone Rückrufe sind die Rückrufe, die an {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.forEach()")}}, usw. übergeben werden. Beispiele für asynchrone Rückrufe sind die Rückrufe, die an [`setTimeout()`](/de/docs/Web/API/setTimeout) und {{jsxref("Promise.prototype.then()")}} übergeben werden.

Die Anleitung [Using promises](/de/docs/Web/JavaScript/Guide/Using_promises#timing) bietet weitere Informationen zum Timing asynchroner Rückrufe.

## Siehe auch

- [Callback](<https://en.wikipedia.org/wiki/Callback_(computer_programming)>) auf Wikipedia
