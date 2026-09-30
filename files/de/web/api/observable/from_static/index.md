---
title: "Observable: Statische Methode from()"
short-title: from()
slug: Web/API/Observable/from_static
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die statische Methode **`from()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Observable zurück, das aus einem Promise, einem Iterable oder einem Async Iterable erstellt wurde. Bestehende Observables werden unverändert zurückgegeben.

## Syntax

```js-nolint
Observable.from(value)
```

### Parameter

- `value`
  - : Ein Objekt, das in ein Observable umgewandelt werden soll: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder ein [asynchron iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

### Rückgabewert

Ein [`Observable`](/de/docs/Web/API/Observable). Wenn `value` bereits ein Observable ist, wird es unverändert zurückgegeben. Andernfalls wird ein neues Observable zurückgegeben, das beim Abonnieren Werte aus `value` ausgibt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` nicht in ein Observable umgewandelt werden kann. Primitive Werte, einschließlich Strings, werden nicht akzeptiert.

## Beschreibung

Bei der Umwandlung wird zuerst geprüft, ob bereits ein Observable vorliegt, dann, ob es sich um ein Async Iterable, danach um ein Iterable und schließlich um ein Promise handelt.

- Ein Promise liefert seinen Erfüllungswert und anschließend eine Abschlussbenachrichtigung. Eine Zurückweisung wird zu einem Fehler.
- Ein Iterable liefert seine Werte synchron und anschließend eine Abschlussbenachrichtigung, wenn der Iterator erschöpft ist.
- Ein Async Iterable liefert seine Werte, sobald sie verfügbar sind, und anschließend eine Abschlussbenachrichtigung, wenn der Iterator erschöpft ist.

Fehler während der Iteration werden zu Fehlern im Observable.

Der Aufruf von `from()` abonniert das zurückgegebene Observable nicht. Bei der Umwandlung eines bestehenden Promise wird die Arbeit, durch die es erstellt wurde, jedoch nicht aufgeschoben. Auch das Abbestellen bricht diese Arbeit nicht ab. Wenn das Promise zurückgewiesen wird, nachdem der Abonnent inaktiv geworden ist, wird der Fehler an das globale Objekt gemeldet.

Viele Methoden, die Observables entgegennehmen, etwa [`Observable.takeUntil()`](/de/docs/Web/API/Observable/takeUntil), wandeln ihr Argument implizit in ein Observable um. Sie können daher auch Promises, Iterables und Async Iterables übergeben.

## Beispiele

### Ein synchrones Iterable umwandeln

Der Aufruf von `from()` erstellt das Observable, ohne die Iteration zu starten. In diesem Beispiel werden beim Abonnieren alle Array-Werte und die Abschlussbenachrichtigung ausgegeben, bevor `subscribe()` zurückkehrt:

```js
const observable = Observable.from([1, 2, 3]);

console.log("Before subscribing");
observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("Complete");
  },
});
console.log("After subscribing");

// Before subscribing
// 1
// 2
// 4
// Complete
// After subscribing
```

### Ein Promise umwandeln

Dieses Beispiel wandelt ein Promise für den ersten Klick auf die Schaltfläche in ein Observable um. Es zeigt die Koordinaten des Klicks und anschließend eine Abschlussmeldung an. Klicken Sie nach dem Ende des Streams auf „Neustart“, um es erneut zu versuchen.

```html hidden live-sample___from-promise
<button>Click me</button>
<p>Waiting for a click</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___from-promise
const btn = document.querySelector("button");
const output = document.querySelector("p");
const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for a click";
  const firstClick = btn.when("click").first();

  Observable.from(firstClick).subscribe({
    next(event) {
      output.textContent = `${event.clientX},${event.clientY}`;
    },
    complete() {
      restart.disabled = false;
      output.textContent += " — Complete.";
    },
  });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("from-promise", "", 140)}}

### Ein Async Iterable umwandeln

Dieses Beispiel protokolliert Textabschnitte aus einer abgerufenen Datei. Der decodierte [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist ein Async Iterable. Jeder Abschnitt kann einen Teil einer Zeile oder mehrere Zeilen enthalten.

```js
const response = await fetch("/data.txt");
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}

const textStream = response.body.pipeThrough(new TextDecoderStream());

Observable.from(textStream).subscribe({
  next(chunk) {
    console.log(chunk);
  },
  error(error) {
    console.error("Reading failed:", error);
  },
  complete() {
    console.log("Stream complete");
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
