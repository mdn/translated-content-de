---
title: "WorkerGlobalScope: queueMicrotask() Methode"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`queueMicrotask()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle
reiht eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle zur
Ereignisschleife des Browsers ausgeführt werden soll.

Die Mikrotask ist eine kurze Funktion, die nach
Abschluss der aktuellen Aufgabe ausgeführt wird und wenn kein anderer Code darauf wartet, ausgeführt zu werden,
bevor die Kontrolle des Ausführungskontextes an die Ereignisschleife des Browsers zurückgegeben wird.

Dies ermöglicht es Ihrem Code, auszuführen, ohne andere, potenziell höher priorisierte
Aufgaben zu stören, die ausstehen, aber bevor der Browser die Kontrolle über den
Ausführungskontext wiedererlangt, möglicherweise abhängig von Arbeiten, die Sie abschließen müssen. Weitere Informationen über die Verwendung von Mikrotasks und warum Sie dies tun sollten, finden Sie in unserem [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in ihrer Fähigkeit, Aufgaben asynchron, aber
in einer bestimmten Reihenfolge auszuführen. Weitere Einzelheiten finden Sie unter [Die Verwendung von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die
letzte Aufräumarbeiten oder andere Aufgaben direkt vor dem Rendern durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("Function")}}, die ausgeführt wird, wenn die Browser-Engine bestimmt, dass es
    sicher ist, Ihren Code aufzurufen. Eingereihte Mikrotasks werden ausgeführt, nachdem alle ausstehenden Aufgaben abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers übergeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
queueMicrotask(() => {
  // function contents here
});
```

Entnommen aus der [queueMicrotask Spezifikation](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

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
- [Polyfill von `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Die Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask Erläuterung](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
