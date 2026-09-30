---
title: "Observable: Methode last()"
short-title: last()
slug: Web/API/Observable/last
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`last()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit dem letzten vom Quell-Observable ausgegebenen Wert erfüllt wird.

## Syntax

```js-nolint
last()
last(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement der Quelle beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne die Quelle zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem letzten vom Quell-Observable ausgegebenen Wert erfüllt wird, wenn die Quelle abgeschlossen ist. Wird die Quelle abgeschlossen, ohne einen Wert auszugeben, wird das Promise mit einem {{jsxref("RangeError")}} zurückgewiesen.

Tritt bei der Quelle ein Fehler auf, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Grund für den Abbruch zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode die Quelle sofort beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

`last()` speichert den zuletzt ausgegebenen Wert und wartet darauf, dass die Quelle abgeschlossen wird. Wird die Quelle nie abgeschlossen, bleibt das Promise ausstehend, sofern kein Fehler auftritt oder der Vorgang abgebrochen wird.

Ist der ausgewählte Wert ein Promise, übernimmt das zurückgegebene Promise dessen endgültigen Zustand, statt mit dem Promise-Objekt selbst erfüllt zu werden.

## Beispiele

### last() verwenden

Dieses Beispiel wartet auf drei Klicks auf eine Schaltfläche und zeigt anschließend die Koordinaten des letzten Klicks an. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-last
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-last
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .last()
    .then((result) => {
      restart.disabled = false;
      output.textContent = `${result.clientX},${result.clientY}`;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-last", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.first()`](/de/docs/Web/API/Observable/first)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
