---
title: "Observable: Methode reduce()"
short-title: reduce()
slug: Web/API/Observable/reduce
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`reduce()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein Promise zurück, das mit einem einzelnen Wert erfüllt wird. Dieser entsteht, indem die Werte des Quell-Observables mithilfe einer Reducer-Funktion kombiniert werden.

## Syntax

```js-nolint
reduce(reducer)
reduce(reducer, initialValue)
reduce(reducer, initialValue, options)
```

### Parameter

- `reducer`
  - : Eine Funktion, die Quellwerte in einem Akkumulator zusammenführt. Ihr Rückgabewert wird beim nächsten Aufruf als Argument `accumulator` übergeben. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, den der vorherige Aufruf von `reducer` zurückgegeben hat. Beim ersten Aufruf ist dies `initialValue`, falls angegeben, andernfalls der erste Quellwert.
    - `value`
      - : Der aktuell verarbeitete Wert. Beim ersten Aufruf ist dies der erste Quellwert, falls `initialValue` angegeben wurde, andernfalls der zweite Quellwert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts. Beim ersten Aufruf ist dies `0`, falls `initialValue` angegeben wurde, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Der Anfangswert des Akkumulators. Wird er weggelassen, wird der erste Quellwert verwendet, und der Reducer beginnt mit dem zweiten Quellwert. Die explizite Angabe von `undefined` zählt als Angabe eines Anfangswerts.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem der Vorgang abgebrochen werden kann. Wird das Signal abgebrochen, wird das Abonnement der Quelle beendet und das Promise mit dem [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals zurückgewiesen. Ist das Signal bereits abgebrochen, wird das Promise zurückgewiesen, ohne die Quelle zu abonnieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das beim Abschluss der Quelle mit dem endgültigen Akkumulatorwert erfüllt wird. Wird die Quelle abgeschlossen, ohne Werte ausgegeben zu haben, wird das Promise mit `initialValue` erfüllt, falls angegeben. Andernfalls wird es mit einem {{jsxref("TypeError")}} zurückgewiesen.

Falls bei der Quelle ein Fehler auftritt oder `reducer` eine Ausnahme auslöst, wird das Promise mit diesem Fehler zurückgewiesen. Wird der Vorgang abgebrochen, wird das Promise mit dem Abbruchgrund zurückgewiesen.

## Beschreibung

Wie andere Operatoren, die ein Promise zurückgeben, abonniert diese Methode die Quelle sofort beim Aufruf. Ein separater Aufruf von [`subscribe()`](/de/docs/Web/API/Observable/subscribe) ist nicht erforderlich.

Ist `initialValue` angegeben, wird `reducer` für jeden Quellwert aufgerufen, beginnend bei Index `0`. Andernfalls initialisiert der erste Quellwert den Akkumulator, und `reducer` beginnt mit dem zweiten Wert bei Index `1`. Gibt die Quelle nur einen Wert aus und wurde kein Anfangswert angegeben, wird das Promise mit diesem Wert erfüllt, ohne `reducer` aufzurufen.

Der Rückgabewert von `reducer` wird unverändert an den nächsten Aufruf übergeben, ohne darauf zu warten. Ist der endgültige Akkumulatorwert ein Promise, übernimmt das zurückgegebene Promise dessen endgültigen Zustand. Wird die Quelle nie abgeschlossen, bleibt das Promise ausstehend, sofern kein Fehler auftritt und der Vorgang nicht abgebrochen wird.

Löst `reducer` eine Ausnahme aus, wird das Abonnement der Quelle beendet.

## Beispiele

### reduce() verwenden

Dieses Beispiel zählt die ersten fünf Klicks auf eine Schaltfläche mithilfe eines Akkumulators und zeigt nach Abschluss des Streams die Gesamtzahl an. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-reduce
<button>Click me</button>
<p>Waiting for clicks</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-reduce
const btn = document.querySelector("button");
const output = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  output.textContent = "Waiting for clicks";
  btn
    .when("click")
    .take(5)
    .reduce((count) => count + 1, 0)
    .then((result) => {
      restart.disabled = false;
      output.textContent = `Total clicks: ${result}`;
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-reduce", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.map()`](/de/docs/Web/API/Observable/map)
- [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
