---
title: "Observable: forEach()-Methode"
short-title: forEach()
slug: Web/API/Observable/forEach
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`forEach()`**-Methode der [`Observable`](/de/docs/Web/API/Observable)-Schnittstelle gibt ein Promise zurück, das mit {{jsxref("undefined")}} erfüllt wird, wenn das Quell-Observable abgeschlossen ist. Zuvor führt die Methode für jeden ausgegebenen Wert eine Callback-Funktion aus.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, options)
```

### Parameter

- `callback`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Ihr Rückgabewert wird ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit der folgenden Eigenschaft:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wenn das Signal abgebrochen wird, wird das Abonnement der Quelle beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne die Quelle zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird, wenn das Quell-Observable abgeschlossen ist.

Wenn in der Quelle ein Fehler auftritt oder `callback` eine Ausnahme auslöst, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Abbruchgrund zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode die Quelle unmittelbar beim Aufruf. Ein gesonderter Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

`forEach()` ruft `callback` für jeden Wert aus der Quelle einmal auf. Wenn die Quelle nie abgeschlossen wird, bleibt das Promise ausstehend, sofern kein Fehler auftritt oder der Vorgang abgebrochen wird.

Der Rückgabewert von `callback` wird ignoriert. Auf zurückgegebene Promises wird nicht gewartet, und ihre Zurückweisungen werden von `forEach()` nicht behandelt. Um bei jedem Wert auf asynchrone Vorgänge zu warten, verwenden Sie [`flatMap()`](/de/docs/Web/API/Observable/flatMap) und geben Sie aus der Mapper-Funktion ein Promise zurück.

Wenn `callback` eine Ausnahme auslöst, wird das Abonnement der Quelle beendet.

## Beispiele

### forEach() verwenden

Dieses Beispiel zeigt die Koordinaten der ersten drei Klicks auf die Schaltfläche an und fügt anschließend eine Abschlussmeldung hinzu. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-foreach
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-foreach
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(3)
    .forEach((event, index) => {
      output.textContent = `Click ${index + 1}: ${event.clientX},${event.clientY}`;
    })
    .then(() => {
      restart.disabled = false;
      output.textContent += " — Count complete.";
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-forEach", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.find()`](/de/docs/Web/API/Observable/find)
- [`Observable.map()`](/de/docs/Web/API/Observable/map)
- [`Observable.filter()`](/de/docs/Web/API/Observable/filter)
- [`Observable.every()`](/de/docs/Web/API/Observable/every)
- [`Observable.some()`](/de/docs/Web/API/Observable/some)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
