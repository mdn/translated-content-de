---
title: "Observable: Methode some()"
short-title: some()
slug: Web/API/Observable/some
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`some()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird. Dieser gibt an, ob mindestens ein vom Quell-Observable ausgegebener Wert die angegebene Prüffunktion erfüllt.

## Syntax

```js-nolint
some(predicate)
some(predicate, options)
```

### Parameter

- `predicate`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn der Wert den Test besteht, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement der Quelle beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne die Quelle zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `true` erfüllt wird, sobald `predicate` einen truthy-Wert zurückgibt, oder mit `false`, wenn die Quelle abgeschlossen wird, ohne dass ein Wert den Test bestanden hat. Wird die Quelle abgeschlossen, ohne Werte ausgegeben zu haben, wird das Promise mit `false` erfüllt.

Tritt in der Quelle ein Fehler auf oder löst `predicate` eine Ausnahme aus, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Abbruchgrund zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode die Quelle unmittelbar beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

Wenn `predicate` einen truthy-Wert zurückgibt, beendet `some()` das Abonnement der Quelle, ohne auf deren Abschluss zu warten. Wird die Quelle nie abgeschlossen und besteht kein Wert den Test, bleibt das Promise ausstehend, sofern kein Fehler auftritt oder der Vorgang abgebrochen wird.

Der Rückgabewert von `predicate` wird in einen booleschen Wert umgewandelt, ohne darauf zu warten. Eine asynchrone Funktion gibt unabhängig von ihrem späteren Ergebnis ein truthy-Promise-Objekt zurück und kann daher nicht als asynchrone Prüffunktion verwendet werden.

Wenn `predicate` eine Ausnahme auslöst, wird das Abonnement der Quelle beendet.

## Beispiele

### some() verwenden

Dieses Beispiel prüft, ob bei einem der ersten drei Klicks auf die Schaltfläche die Umschalttaste gedrückt gehalten wird. Sobald ein Klick den Test besteht, wird `true` gemeldet; bestehen alle drei Klicks den Test nicht, wird `false` gemeldet. Klicken Sie nach dem Ende des Streams auf „Neu starten“, um es erneut zu versuchen.

```html hidden live-sample___basic-some
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-some
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .some((event) => event.shiftKey)
    .then((result) => {
      restart.disabled = false;
      output.textContent = result;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-some", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.every()`](/de/docs/Web/API/Observable/every)
- [`Observable.find()`](/de/docs/Web/API/Observable/find)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
