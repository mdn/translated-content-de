---
title: "WorkerGlobalScope: queueMicrotask() Methode"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`queueMicrotask()`** Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle
reiht eine Mikrotask zur Ausführung zu einem sicheren Zeitpunkt vor der Rückkehr zur
Ereignisschleife des Browsers ein.

Die Mikrotask ist eine kurze Funktion, die nach
Abschluss der aktuellen Aufgabe und wenn kein anderer Code darauf wartet,
ausgeführt zu werden, ausgeführt wird, bevor die Kontrolle des Ausführungskontexts
zurück zur Ereignisschleife des Browsers geht.

Dadurch kann Ihr Code ausgeführt werden, ohne in andere möglicherweise höher priorisierte
ausstehende Code einzugreifen, jedoch bevor der Browser wieder die Kontrolle über den
Ausführungskontext übernimmt, möglicherweise abhängig von der Arbeit, die Sie abschließen müssen.
Sie können mehr darüber erfahren, wie man Mikrotasks nutzt und warum Sie sich dafür entscheiden könnten,
in unserem [Leitfaden zu Mikrotasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in ihrer Fähigkeit, Aufgaben asynchron aber
in einer bestimmten Reihenfolge auszuführen. Siehe [Verwendung von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) für weitere Details.

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die
abschließende Bereinigungsarbeiten oder andere Aufgaben unmittelbar vor dem Rendering
ausführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("function")}}, die ausgeführt wird, wenn die Browser-Engine feststellt, dass es
    sicher ist, Ihren Code aufzurufen. Enqueuete Mikrotasks werden ausgeführt, nachdem alle
    ausstehenden Aufgaben abgeschlossen sind, aber bevor die Kontrolle zur
    Ereignisschleife des Browsers übergeht.

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

- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [Polyfill von `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Verwendung von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask Erklärung](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Aufgaben, Mikrotasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
