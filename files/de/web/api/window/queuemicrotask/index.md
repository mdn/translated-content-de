---
title: "Window: queueMicrotask()-Methode"
short-title: queueMicrotask()
slug: Web/API/Window/queueMicrotask
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

{{APIRef("HTML DOM")}}

Die **`queueMicrotask()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces
reiht einen Mikrotask ein, der zu einem sicheren Zeitpunkt ausgeführt wird, bevor die Kontrolle zur Ereignisschleife des Browsers zurückkehrt.

Der Mikrotask ist eine kurze Funktion, die nach Abschluss der aktuellen Aufgabe ausgeführt wird und wenn kein anderer Code darauf wartet, ausgeführt zu werden, bevor die Kontrolle des Ausführungskontextes an die Ereignisschleife des Browsers zurückgegeben wird.

Dies ermöglicht es Ihrem Code, ohne Beeinträchtigung anderer möglicherweise höher priorisierter ausstehender Codes ausgeführt zu werden, aber bevor der Browser die Kontrolle über den Ausführungskontext zurückerlangt, abhängig von der Arbeit, die Sie abschließen müssen. Sie können mehr darüber erfahren, wie Sie Mikrotasks nutzen und warum Sie dies tun könnten, in unserem [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in der Fähigkeit, Aufgaben asynchron aber in einer bestimmten Reihenfolge auszuführen. Weitere Details finden Sie unter [Verwendung von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die abschließende Bereinigung oder andere Aufgaben direkt vor dem Rendern ausführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("Function")}}, die ausgeführt wird, wenn die Browser-Engine feststellt, dass es sicher ist, Ihren Code aufzurufen. Eingereihte Mikrotasks werden ausgeführt, nachdem alle ausstehenden Aufgaben abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers übergeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
- [Polyfill von `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask-Erklärung](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, Mikrotasks, Queues und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
