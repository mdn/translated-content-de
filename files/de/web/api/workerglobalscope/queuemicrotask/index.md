---
title: "WorkerGlobalScope: queueMicrotask()-Methode"
short-title: queueMicrotask()
slug: Web/API/WorkerGlobalScope/queueMicrotask
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`queueMicrotask()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces
reiht eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle zur Ereignisschleife des Browsers ausgeführt wird.

Die Mikrotask ist eine kurze Funktion, die nach Abschluss der aktuellen Task ausgeführt wird und wenn kein anderer Code darauf wartet, ausgeführt zu werden, bevor die Kontrolle des Ausführungskontextes an die Ereignisschleife des Browsers zurückgegeben wird.

Dies ermöglicht es Ihrem Code, ohne Beeinträchtigung durch anderen, möglicherweise höher priorisierten, anstehenden Code zu laufen, jedoch bevor der Browser die Kontrolle über den Ausführungskontext zurückerlangt, möglicherweise abhängig von der Arbeit, die Sie abschließen müssen. Sie können mehr über die Verwendung von Mikrotasks und warum Sie sich dafür entscheiden könnten, in unserem [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) erfahren.

Die Bedeutung von Mikrotasks liegt in ihrer Fähigkeit, Aufgaben asynchron, aber in einer bestimmten Reihenfolge auszuführen. Weitere Einzelheiten finden Sie unter [Verwendung von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die letzten Bereinigungen oder andere Aufgaben unmittelbar vor der Darstellung ausführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("function")}}, die ausgeführt werden soll, wenn die Browser-Engine entscheidet, dass es sicher ist, Ihren Code auszuführen. Eingereihte Mikrotasks werden ausgeführt, nachdem alle anstehenden Aufgaben abgeschlossen sind, jedoch bevor die Kontrolle an die Ereignisschleife des Browsers übergeben wird.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
queueMicrotask(() => {
  // function contents here
});
```

Aus der [queueMicrotask-Spezifikation](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing) entnommen:

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
- [queueMicrotask-Erklärung](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Aufgaben, Mikrotasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
