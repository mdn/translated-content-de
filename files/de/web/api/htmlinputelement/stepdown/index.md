---
title: "HTMLInputElement: stepDown() Methode"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepDown()`**-Methode verringert den Wert eines numerischen Typs eines {{HTMLElement("input")}}-Elements um den Wert des [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attributs oder bis zu `n` Vielfachen des step-Attributs, wenn eine Zahl als Parameter übergeben wird.

Die Methode, wenn sie aufgerufen wird, verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht spezifiziert, und [`step`](/de/docs/Web/HTML/Reference/Attributes/step) standardmäßig den Standardwert für `step` verwendet, wenn nicht spezifiziert.

Gültig für alle numerischen, Datums- und Uhrzeit-Eingabetypen, die das step-Attribut unterstützen, einschließlich {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, und {{HTMLElement("input/range", "range")}}.

Angenommen, `<input id="myTime" type="time" max="17:00" step="900" value="17:00">`, das Aufrufen von `myTime.stepDown(3)` ändert den Wert auf 16:15, indem die Zeit um `3 * 900`, also 45 Minuten, verringert wird. `myTime.stepDown()`, ohne Parameter, würde zu `16:45` führen, da `n` standardmäßig auf `1` gesetzt ist.

```html
<!-- decrements by intervals of 900 seconds (15 minute) -->
<input type="time" max="17:00" step="900" />

<!-- decrements by intervals of 7 days (one week) -->
<input type="date" max="2019-12-25" step="7" />

<!-- decrements by intervals of 12 months (one year) -->
<input type="month" max="2019-12" step="12" />
```

Das Aufrufen von `stepDown` bei `<input type="time" max="17:00" step="900">` würde den Wert jedoch nicht auf `17:00` setzen, wie man es erwarten könnte — und wie es für `stepUp` der Fall ist, wenn die Eingabe `<input type="time" min="17:00" step="900">` ist. Stattdessen setzt der erste Aufruf von `stepDown` den Anfangswert auf `23:45`, obwohl das `max`-Attribut gesetzt ist. Der zweite Aufruf setzt den Wert auf `17:00`. Und der dritte Aufruf setzt den Wert auf `16:45`.

```js
let input1 = document.createElement("input");
input1.setAttribute("type", "time");
input1.setAttribute("min", "17:00");
input1.setAttribute("step", 900);
console.log(input1.value); // ""
input1.stepUp();
console.log(input1.value); // "17:00"
// However
let input2 = document.createElement("input");
input2.setAttribute("type", "time");
input2.setAttribute("max", "17:00");
input2.setAttribute("step", 900);
console.log(input2.value); // ""
input2.stepDown();
console.log(input2.value); // "23:45"
input2.stepDown();
console.log(input2.value); // "17:00"
input2.stepDown();
console.log(input2.value); // "16:45"
```

Die Methode, wenn sie aufgerufen wird, ändert den Wert des Formular-Steuerelements um den im `step`-Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der im Formular-Steuerelement festgelegten Grenzen. Der Standardwert für den Parameter, wenn keiner übergeben wird, ist 1. Die Methode wird den Wert nicht unter den [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Wert setzen oder die durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut festgelegten Einschränkungen verletzen. Ein negativer Wert für `n` wird den Wert inkrementieren, aber nicht über den [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Wert hinaus inkrementieren.

Wenn der Wert vor dem Aufrufen der `stepDown()`-Methode ungültig ist, zum Beispiel, wenn er nicht den durch das `step`-Attribut gesetzten Einschränkungen entspricht, wird das Aufrufen der `stepDown()`-Methode einen Wert zurückgeben, der den Formularsteuerungsbeschränkungen entspricht.

Wenn das Formular-Steuerelement nicht zeit-, datums- oder numerisch ist und daher das `step`-Attribut nicht unterstützt (siehe die Liste der unterstützten Eingabetypen oben) oder wenn der `step`-Wert auf `any` gesetzt ist, wird eine `InvalidStateError`-Ausnahme ausgelöst.

## Syntax

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Parameter

- `stepDecrement` {{optional_inline}}
  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, verwendet _stepDecrement_ standardmäßig 1.

    Wenn der Wert ein Gleitkomma ist, wird der Wert verringert, als ob [`Math.floor(stepDecrement)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) übergeben wurde. Wenn der Wert negativ ist, wird der Wert statt verringert, inkrementiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle geworfen:
    - wenn die Methode für den aktuellen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Wert nicht anwendbar ist,
    - wenn das Element keinen [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Wert hat,
    - wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) nicht in eine Zahl umgewandelt werden kann,
    - wenn der resultierende Wert über dem [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) oder unter dem [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) liegt.

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um den Eingabetyp {{HTMLElement("input/number", "number")}} zu verringern:

### HTML

```html
<p>
  <label for="theNumber">
    Enter a number between 0 and 400 that is divisible by 5:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label for="decrementButton">
    Enter how many values of step you would like to decrement by or leave it
    blank:
  </label>
  <input type="number" step="1" id="decrementInput" min="-2" max="15" />
</p>
<input type="button" value="Decrement" id="theButton" />
```

### JavaScript

```js
/* make the button call the function */
let button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnDown();
});

function stepOnDown() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("decrementInput").value;

  if (val) {
    // decrement with a parameter
    input.stepDown(val);
  } else {
    // or without a parameter. Try it with 0, 5, -2, etc.
    input.stepDown();
  }
}
```

### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass, wenn Sie keinen Parameter an die `stepDown()`-Methode übergeben, diese standardmäßig auf 1 gesetzt ist. Jeder andere Wert ist ein Vielfaches des `step`-Attributwertes, was in diesem Fall 5 ist. Wenn wir `4` als `stepDecrement` übergeben, wird die Eingabe um `4 * 5`, also `20`, verringert. Wenn der Parameter `0` ist, wird die Zahl nicht verringert. Die `stepDown()`-Methode wird nicht zulassen, dass die Eingabe außerhalb des Bereichs geht, in diesem Fall stoppt sie, wenn sie 0 erreicht und rundet Gleitkommawerte ab, die als Parameter übergeben werden.

Versuchen Sie, das Schritt-Abnahme-Eingabefeld auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `44` zu setzen, was ungültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
- [`step`](/de/docs/Web/HTML/Reference/Attributes/step),
  [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und
  [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute
