---
title: "Observable: Methode first()"
short-title: first()
slug: Web/API/Observable/first
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`first()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit dem ersten vom Quell-Observable ausgegebenen Wert erfüllt wird.

## Syntax

```js-nolint
first()
first(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement des Quell-Observables beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne das Quell-Observable zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem ersten vom Quell-Observable ausgegebenen Wert erfüllt wird. Wird das Quell-Observable abgeschlossen, ohne einen Wert auszugeben, wird das Promise mit einem {{jsxref("RangeError")}} zurückgewiesen.

Tritt beim Quell-Observable ein Fehler auf, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Abbruchgrund zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode das Quell-Observable unmittelbar beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

Sobald das Quell-Observable einen Wert ausgibt, beendet `first()` dessen Abonnement, ohne auf seinen Abschluss zu warten. Wenn das Quell-Observable weder einen Wert ausgibt noch abgeschlossen wird, bleibt das Promise ausstehend, sofern kein Fehler auftritt oder der Vorgang abgebrochen wird.

Ist der ausgewählte Wert ein Promise, übernimmt das zurückgegebene Promise dessen endgültigen Zustand, statt mit dem Promise-Objekt selbst erfüllt zu werden.

## Beispiele

### first() verwenden

Dieses Beispiel zeigt die Koordinaten des ersten Klicks auf die Schaltfläche an und reagiert danach nicht mehr auf Klicks. Klicken Sie auf „Restart“, nachdem der Stream beendet wurde, um es erneut zu versuchen.

```html hidden live-sample___basic-first
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-first
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .first()
    .then((result) => {
      restart.disabled = false;
      output.textContent = `${result.clientX},${result.clientY}`;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-first", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.last()`](/de/docs/Web/API/Observable/last)
- [`Observable.find()`](/de/docs/Web/API/Observable/find)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
