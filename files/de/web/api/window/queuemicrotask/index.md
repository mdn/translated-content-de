---
title: "Window: queueMicrotask() Methode"
short-title: queueMicrotask()
slug: Web/API/Window/queueMicrotask
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{APIRef("HTML DOM")}}

Die **`queueMicrotask()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces reiht eine Microtask ein, die zu einem sicheren Zeitpunkt ausgeführt wird, bevor die Kontrolle an die Ereignisschleife des Browsers zurückgegeben wird.

Die Microtask ist eine kurze Funktion, die nach Abschluss der aktuellen Aufgabe ausgeführt wird und wenn kein anderer Code darauf wartet, ausgeführt zu werden, bevor die Kontrolle des Ausführungskontextes an die Ereignisschleife des Browsers zurückgegeben wird.

Dies ermöglicht es Ihrem Code, ohne Beeinträchtigung anderer potenziell höher priorisierter Aufgaben ausgeführt zu werden, aber bevor der Browser die Kontrolle über den Ausführungskontext zurückerhält, abhängig von der Arbeit, die Sie abschließen müssen. Sie können mehr über die Verwendung von Microtasks und warum Sie sich dafür entscheiden könnten, in unserem [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) erfahren.

Die Bedeutung von Microtasks liegt in ihrer Fähigkeit, Aufgaben asynchron, aber in einer bestimmten Reihenfolge, auszuführen. Weitere Details finden Sie unter [Verwendung von Microtasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Microtasks sind besonders nützlich für Bibliotheken und Frameworks, die Abschlüsse oder andere Aufgaben unmittelbar vor dem Rendern durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("function")}}, die ausgeführt wird, wenn die Browser-Engine bestimmt hat, dass es sicher ist, Ihren Code aufzurufen. Eingereihte Microtasks werden ausgeführt, nachdem alle anstehenden Aufgaben abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers übergeben wird.

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
- [Verwendung von Microtasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask Erklärungsdokument](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Aufgaben, Microtasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
