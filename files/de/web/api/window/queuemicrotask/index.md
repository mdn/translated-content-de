---
title: "Window: queueMicrotask() Methode"
short-title: queueMicrotask()
slug: Web/API/Window/queueMicrotask
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`queueMicrotask()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces
reiht eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückgabe der Kontrolle an die Ereignisschleife des Browsers ausgeführt wird.

Die Mikrotask ist eine kurze Funktion, die nach Abschluss der aktuellen Aufgabe und wenn kein anderer Code darauf wartet, ausgeführt zu werden, bevor die Kontrolle des Ausführungskontexts an die Ereignisschleife des Browsers zurückgegeben wird, ausgeführt wird.

Dies ermöglicht es Ihrem Code, ohne Beeinträchtigung anderer, potenziell höher priorisierter, ausstehender Codes zu laufen, jedoch bevor der Browser die Kontrolle über den Ausführungskontext zurückerlangt, möglicherweise abhängig von Arbeiten, die Sie abschließen müssen. Sie können mehr darüber erfahren, wie Sie Mikrotasks verwenden und warum Sie dies möglicherweise tun möchten, in unserem [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Die Bedeutung von Mikrotasks liegt in ihrer Fähigkeit, Aufgaben asynchron, aber in einer bestimmten Reihenfolge auszuführen. Weitere Einzelheiten finden Sie unter [Verwenden von Mikrotasks in JavaScript mit `queueMicrotask()`](/de/docs/Web/API/HTML_DOM_API/Microtask_guide).

Mikrotasks sind besonders nützlich für Bibliotheken und Frameworks, die eine abschließende Bereinigung oder andere Aufgaben unmittelbar vor dem Rendern durchführen müssen.

## Syntax

```js-nolint
queueMicrotask(callback)
```

### Parameter

- `callback`
  - : Eine {{jsxref("function")}}, die ausgeführt wird, wenn die Browser-Engine feststellt, dass es sicher ist, Ihren Code aufzurufen. Eingereihte Mikrotasks werden ausgeführt, nachdem alle ausstehenden Aufgaben abgeschlossen sind, aber bevor die Kontrolle an die Ereignisschleife des Browsers übergeben wird.

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

- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
- [Polyfill von `queueMicrotask()` in `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Verwenden von Mikrotasks in JavaScript mit queueMicrotask()](/de/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)
- [queueMicrotask-Erklärer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Aufgaben, Mikrotasks, Warteschlangen und Zeitpläne](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) von Jake Archibald
