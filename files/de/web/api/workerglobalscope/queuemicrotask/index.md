---
title: "WorkerGlobalScope: queueMicrotask()-Methode"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die Methode **`queueMicrotask()`** der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) reiht eine Microtask ein, die zu einem sicheren Zeitpunkt ausgeführt wird, bevor die Kontrolle an die Event-Loop des Browsers zurückgegeben wird.

Die Microtask ist eine kurze Funktion, die ausgeführt wird, nachdem die aktuelle Task ihre Arbeit abgeschlossen hat und kein weiterer Code mehr darauf wartet, ausgeführt zu werden, bevor die Kontrolle über den Ausführungskontext an die Event-Loop des Browsers zurückgegeben wird.

So kann Ihr Code ausgeführt werden, ohne anderen ausstehenden Code mit möglicherweise höherer Priorität zu beeinträchtigen, aber noch bevor der Browser die Kontrolle über den Ausführungskontext zurückerhält. Dies kann wichtig sein, wenn Sie zuvor noch Arbeiten abschließen müssen. Mehr darüber, wie Sie Microtasks verwenden und warum Sie sich dafür entscheiden könnten, erfahren Sie in unserem [Leitfaden zu Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Microtasks sind wichtig, weil sie es ermöglichen, Aufgaben asynchron, aber in einer bestimmten Reihenfolge auszuführen. Weitere Informationen finden Sie unter [Microtasks in JavaScript mit `queueMicrotask()` verwenden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Microtasks sind besonders nützlich für Bibliotheken und Frameworks, die abschließende Bereinigungen oder andere Aufgaben unmittelbar vor dem Rendering ausführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("Function")}}, die ausgeführt wird, wenn die Browser-Engine feststellt, dass Ihr Code sicher aufgerufen werden kann. Eingereihte Microtasks werden ausgeführt, nachdem alle ausstehenden Tasks abgeschlossen sind, aber bevor die Kontrolle an die Event-Loop des Browsers abgegeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
queueMicrotask(() => {
  // function contents here
});
```

Aus der [queueMicrotask-Spezifikation](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

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

- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Polyfill für `queueMicrotask()` in `core-js`](https://core-js.io/docs/features/web-standards/queue-microtask)
- [Microtasks in JavaScript mit queueMicrotask() verwenden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [Erläuterung zu queueMicrotask](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, Microtasks, Queues und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
