---
title: "Observable: Methode toArray()"
short-title: toArray()
slug: Web/API/Observable/toArray
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
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
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement der Quelle beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne die Quelle zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei Abschluss der Quelle mit einem neuen {{jsxref("Array")}} erfüllt wird, das alle Quellwerte in der Reihenfolge ihrer Ausgabe enthält. Schließt die Quelle ab, ohne Werte auszugeben, wird das Promise mit einem leeren Array erfüllt.

Tritt bei der Quelle ein Fehler auf, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Grund für den Abbruch zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode die Quelle sofort beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

`toArray()` speichert jeden Quellwert, bis die Quelle abgeschlossen ist. Wenn die Quelle nie abgeschlossen wird, bleibt das Promise ausstehend, sofern kein Fehler auftritt oder der Vorgang abgebrochen wird. Das Array wächst weiter, während Werte eintreffen. Verwenden Sie bei Bedarf [`take()`](/de/docs/Web/API/Observable/take) oder [`takeUntil()`](/de/docs/Web/API/Observable/takeUntil), um den Stream zu begrenzen.

Quellwerte werden unverändert gespeichert. Ist ein Wert ein Promise, enthält das Array dieses Promise-Objekt statt des Werts, mit dem es erfüllt wird.

## Beispiele

### toArray() verwenden

Dieses Beispiel sammelt die Koordinaten der ersten drei Klicks auf eine Schaltfläche und zeigt sie als Array in der Reihenfolge der Klicks an. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-toarray
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-toarray
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
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
