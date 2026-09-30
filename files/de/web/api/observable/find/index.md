---
title: "Observable: Methode find()"
short-title: find()
slug: Web/API/Observable/find
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`find()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit dem ersten vom Quell-Observable ausgegebenen Wert erfüllt wird, der die übergebene Prüffunktion erfüllt. Wird das Quell-Observable ohne Treffer abgeschlossen, wird das Promise mit {{jsxref("undefined")}} erfüllt.

## Syntax

```js-nolint
find(predicate)
find(predicate, options)
```

### Parameter

- `predicate`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, wenn der Wert die Prüfung besteht, andernfalls einen {{Glossary("Falsy", "falsy")}} Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit der folgenden Eigenschaft:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement des Quell-Observables beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne das Quell-Observable zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem ersten Wert erfüllt wird, für den `predicate` einen truthy Wert zurückgibt. Wird das Quell-Observable ohne passenden Wert abgeschlossen, wird das Promise mit {{jsxref("undefined")}} erfüllt.

Wenn beim Quell-Observable ein Fehler auftritt oder `predicate` eine Ausnahme auslöst, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Grund für den Abbruch zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode das Quell-Observable sofort beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

Wenn `predicate` einen truthy Wert zurückgibt, beendet `find()` das Abonnement des Quell-Observables, ohne auf dessen Abschluss zu warten. Wird das Quell-Observable nie abgeschlossen und besteht kein Wert die Prüfung, bleibt das Promise ausstehend, sofern kein Fehler auftritt oder der Vorgang abgebrochen wird.

Der Rückgabewert von `predicate` wird in einen booleschen Wert umgewandelt, ohne darauf zu warten. Eine async-Funktion gibt unabhängig von ihrem späteren Ergebnis ein truthy Promise-Objekt zurück und kann daher nicht für eine asynchrone Prüfung verwendet werden.

Wenn `predicate` eine Ausnahme auslöst, wird das Abonnement des Quell-Observables beendet.

Ist der ausgewählte Wert ein Promise, übernimmt das zurückgegebene Promise dessen späteren Zustand, statt mit dem Promise-Objekt selbst erfüllt zu werden.

## Beispiele

### find() verwenden

Dieses Beispiel sucht unter bis zu drei Klicks auf eine Schaltfläche den ersten Klick mit gedrückter Umschalttaste und zeigt dessen Koordinaten an. Wenn kein Klick die Bedingung erfüllt, wird stattdessen eine Meldung angezeigt. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-find
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-find
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .find((event) => event.shiftKey)
    .then((result) => {
      restart.disabled = false;
      output.textContent = result
        ? `${result.clientX},${result.clientY}`
        : "No Shift-click found.";
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-find", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.every()`](/de/docs/Web/API/Observable/every)
- [`Observable.some()`](/de/docs/Web/API/Observable/some)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
