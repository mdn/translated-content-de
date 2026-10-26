---
title: "Window: queueMicrotask()-Methode"
short-title: queueMicrotask()
slug: Web/API/Window/queueMicrotask
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

Die Methode **`queueMicrotask()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) stellt eine Microtask in die Warteschlange. Sie wird zu einem sicheren Zeitpunkt ausgeführt, bevor die Kontrolle an die Ereignisschleife des Browsers zurückgegeben wird.

Die Microtask ist eine kurze Funktion, die ausgeführt wird, nachdem die aktuelle Task ihre Arbeit abgeschlossen hat und kein weiterer Code auf seine Ausführung wartet, bevor die Kontrolle über den Ausführungskontext an die Ereignisschleife des Browsers zurückgegeben wird.

So kann Ihr Code ausgeführt werden, ohne anderen ausstehenden Code mit möglicherweise höherer Priorität zu beeinträchtigen, aber noch bevor der Browser wieder die Kontrolle über den Ausführungskontext erhält. Das kann wichtig sein, wenn Sie zuvor bestimmte Arbeiten abschließen müssen. Mehr darüber, wie und warum Sie Microtasks verwenden können, erfahren Sie in unserem [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Microtasks sind wichtig, weil sie es ermöglichen, Aufgaben asynchron, aber in einer bestimmten Reihenfolge auszuführen. Weitere Einzelheiten finden Sie unter [Microtasks in JavaScript mit `queueMicrotask()` verwenden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Microtasks sind besonders nützlich für Bibliotheken und Frameworks, die abschließende Bereinigungen oder andere Aufgaben unmittelbar vor dem Rendering durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("Function")}}, die ausgeführt wird, wenn die Browser-Engine feststellt, dass Ihr Code sicher aufgerufen werden kann. In die Warteschlange gestellte Microtasks werden ausgeführt, nachdem alle ausstehenden Tasks abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers abgegeben wird.

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

- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
- [Polyfill für `queueMicrotask()` in `core-js`](https://core-js.io/docs/features/web-standards/queue-microtask)
- [Microtasks in JavaScript mit queueMicrotask() verwenden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [Erläuterung zu queueMicrotask](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, Microtasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
