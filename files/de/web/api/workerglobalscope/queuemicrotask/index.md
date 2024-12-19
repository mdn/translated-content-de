---
title: "WorkerGlobalScope: Methode queueMicrotask()"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`queueMicrotask()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle
reiht eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle an die
Ereignisschleife des Browsers ausgeführt wird.

Die Mikrotask ist eine kurze Funktion, die nach
Abschluss der aktuellen Aufgabe ausgeführt wird und wenn kein anderer Code darauf wartet,
ausgeführt zu werden, bevor die Kontrolle des Ausführungskontexts an die Ereignisschleife des Browsers zurückgegeben wird.

Dadurch kann Ihr Code ausgeführt werden, ohne andere, potenziell höher priorisierte
Code-Pendenzen zu stören, jedoch bevor der Browser die Kontrolle über
den Ausführungskontext wiedererlangt, möglicherweise abhängig von Arbeit, die Sie abschließen müssen. Sie können mehr darüber erfahren, wie Sie Mikrotasks verwenden und warum Sie sich dafür entscheiden könnten, in unserem [Leitfaden zu Mikrotasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in der Fähigkeit, Aufgaben asynchron, aber in einer bestimmten Reihenfolge auszuführen. Weitere Details finden Sie unter [Verwendung von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die Bereinigungen oder andere Aufgaben direkt vor der Darstellung durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("function")}}, die ausgeführt werden soll, wenn die Browser-Engine bestimmt, dass es
    sicher ist, Ihren Code aufzurufen. Eingereihte Mikrotasks werden ausgeführt, nachdem alle anstehenden Aufgaben
    abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers abgegeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
queueMicrotask(() => {
  // function contents here
});
```

Aus den [queueMicrotask-Spezifikationen](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing):

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
- [Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask Erklärer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
