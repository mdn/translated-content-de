---
title: "Window: queueMicrotask() Methode"
short-title: queueMicrotask()
slug: Web/API/Window/queueMicrotask
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{APIRef("HTML DOM")}}

Die **`queueMicrotask()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle
reiht eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückgabe der Kontrolle an die
Eventschleife des Browsers ausgeführt wird.

Die Mikrotask ist eine kurze Funktion, die ausgeführt wird, nachdem
die aktuelle Aufgabe ihre Arbeit abgeschlossen hat und wenn kein anderer Code darauf wartet,
ausgeführt zu werden, bevor die Kontrolle des Ausführungskontextes an die Eventschleife des Browsers übergeben wird.

Dies ermöglicht es Ihrem Code, auszuführen, ohne andere möglicherweise höher
priorisierte, ausstehende Codes zu stören, aber bevor der Browser die Kontrolle über den
Ausführungskontext zurückerhält, möglicherweise basierend auf der Arbeit, die Sie abschließen müssen. Mehr über die Verwendung von Mikrotasks und warum Sie sich dafür entscheiden könnten, erfahren Sie in unserem [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in ihrer Fähigkeit, Aufgaben asynchron, aber in einer bestimmten Reihenfolge auszuführen. Weitere Details finden Sie unter [Verwendung von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die abschließende Bereinigungen oder andere Aufgaben kurz vor dem Rendern durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("function")}}, die ausgeführt wird, wenn die Browser-Engine bestimmt, dass es
    sicher ist, Ihren Code zu verwenden. Eingereihte Mikrotasks werden ausgeführt, nachdem alle ausstehenden Aufgaben
    abgeschlossen wurden, aber bevor die Steuerung an die Eventschleife des Browsers übergeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
queueMicrotask(() => {
  // function contents here
});
```

Übernommen aus der [queueMicrotask Spezifikation](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

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

- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
- [Polyfill von `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask Erklärer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, Mikrotasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
