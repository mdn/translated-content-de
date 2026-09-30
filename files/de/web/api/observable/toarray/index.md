---
title: "Observable: Methode toArray()"
short-title: toArray()
slug: Web/API/Observable/toArray
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`toArray()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit einem neuen Array erfüllt wird. Dieses enthält die Werte des Quell-Observables in der Reihenfolge, in der sie ausgegeben wurden.

## Syntax

```js-nolint
toArray()
toArray(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, endet das Abonnement der Quelle, und das Promise wird mit der [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne die Quelle zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das nach Abschluss der Quelle mit einem neuen {{jsxref("Array")}} erfüllt wird. Das Array enthält alle Werte der Quelle in der Reihenfolge ihrer Ausgabe. Schließt die Quelle ab, ohne Werte auszugeben, wird das Promise mit einem leeren Array erfüllt.

Tritt in der Quelle ein Fehler auf, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Abbruchgrund zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode die Quelle sofort beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

`toArray()` speichert jeden Wert der Quelle, bis diese abgeschlossen ist. Wird die Quelle nie abgeschlossen, bleibt das Promise ausstehend, sofern kein Fehler auftritt und der Vorgang nicht abgebrochen wird. Das Array wächst dann mit jedem eintreffenden Wert weiter. Verwenden Sie bei Bedarf [`take()`](/de/docs/Web/API/Observable/take) oder [`takeUntil()`](/de/docs/Web/API/Observable/takeUntil), um den Stream zu begrenzen.

Werte der Quelle werden unverändert gespeichert. Ist ein Wert ein Promise, enthält das Array dieses Promise-Objekt und nicht den Wert, mit dem es erfüllt wird.

## Beispiele

### Verwendung von toArray()

Dieses Beispiel sammelt die Koordinaten der ersten drei Klicks auf eine Schaltfläche und zeigt sie als Array in der Reihenfolge der Klicks an. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-toArray
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-toArray
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .map((event) => ({ x: event.clientX, y: event.clientY }))
    .toArray()
    .then((result) => {
      restart.disabled = false;
      output.textContent = JSON.stringify(result);
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-toArray", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
