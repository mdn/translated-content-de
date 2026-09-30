---
title: "Observable: Methode every()"
short-title: every()
slug: Web/API/Observable/every
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`every()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob jeder vom Quell-Observable ausgegebene Wert die angegebene Prüffunktion erfüllt.

## Syntax

```js-nolint
every(predicate)
every(predicate, options)
```

### Parameter

- `predicate`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn der Wert die Prüfung besteht, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement des Quell-Observables beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne das Quell-Observable zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `false` erfüllt wird, sobald `predicate` einen falsy-Wert zurückgibt, oder mit `true`, wenn das Quell-Observable abgeschlossen wird, ohne dass ein Wert die Prüfung nicht besteht. Wird das Quell-Observable abgeschlossen, ohne Werte ausgegeben zu haben, wird das Promise mit `true` erfüllt.

Tritt beim Quell-Observable ein Fehler auf oder löst `predicate` eine Ausnahme aus, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Abbruchgrund zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode das Quell-Observable sofort beim Aufruf. Ein gesonderter Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

Wenn `predicate` einen falsy-Wert zurückgibt, beendet `every()` das Abonnement des Quell-Observables, ohne dessen Abschluss abzuwarten. Wenn das Quell-Observable nie abgeschlossen wird und alle Werte die Prüfung bestehen, bleibt das Promise ausstehend, sofern kein Fehler auftritt und der Vorgang nicht abgebrochen wird.

Der Rückgabewert von `predicate` wird in einen booleschen Wert umgewandelt, ohne auf ihn zu warten. Eine asynchrone Funktion gibt unabhängig von ihrem späteren Ergebnis ein truthy-Promise-Objekt zurück und kann daher nicht als asynchrone Prüffunktion verwendet werden.

Wenn `predicate` eine Ausnahme auslöst, wird das Abonnement des Quell-Observables beendet.

## Beispiele

### every() verwenden

Dieses Beispiel prüft, ob bei jedem der ersten drei Klicks auf die Schaltfläche die Umschalttaste gedrückt gehalten wird. Es meldet `false`, sobald ein Klick die Prüfung nicht besteht, oder `true`, nachdem alle drei sie bestanden haben. Klicken Sie nach dem Ende des Datenstroms auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-every
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-every
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .every((event) => event.shiftKey)
    .then((result) => {
      restart.disabled = false;
      output.textContent = result;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-every", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.find()`](/de/docs/Web/API/Observable/find)
- [`Observable.some()`](/de/docs/Web/API/Observable/some)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
