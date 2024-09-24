---
title: Funktion queueMicrotask() global
short-title: queueMicrotask()
slug: Web/API/queueMicrotask
l10n:
  sourceCommit: cb279e20569055b200f93802d1704846c28aa04f
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die Methode **`queueMicrotask()`**,
die auf der Schnittstelle {{domxref("Window")}} oder {{domxref("Worker")}} zur Verfügung steht,
wartet einen Mikrotask, um zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle zur
Ereignisschleife des Browsers ausgeführt zu werden.

Der Mikrotask ist eine kurze Funktion, die nach
Abschluss der aktuellen Aufgabe ausgeführt wird und wenn kein anderer Code darauf wartet,
ausgeführt zu werden, bevor die Kontrolle des Ausführungskontextes an die Ereignisschleife des Browsers zurückgegeben wird.

Dies ermöglicht es Ihrem Code, ohne Störung durch möglicherweise höherpriorisierten,
noch ausstehenden Code ausgeführt zu werden, bevor der Browser die Kontrolle über den
Ausführungskontext zur Verfügung hat, abhängig von der Arbeit, die Sie abschließen müssen. Sie erfahren
mehr darüber, wie Sie Mikrotasks verwenden und warum Sie sich dafür entscheiden könnten, in unserem [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in ihrer Fähigkeit, Aufgaben asynchron, aber
in einer bestimmten Reihenfolge auszuführen. Weitere Details finden Sie unter [Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die
abschließende Bereinigungen oder andere Aufgaben direkt vor dem Rendering durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(() => {/* ... */})
```

### Parameter

- `function`
  - : Eine {{jsxref("function")}}, die ausgeführt werden soll, wenn die Browser-Engine
    es als sicher erachtet, Ihren Code auszuführen. Eingereihte Mikrotasks werden ausgeführt, nachdem alle anstehenden Aufgaben
    abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers übergeben wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
queueMicrotask(() => {
  // function contents here
});
```

Entnommen aus der [queueMicrotask-Spezifikation](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        this._cache[url] = data;
        this._setData(data);
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask-Erklärer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Aufgaben, Mikrotasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
