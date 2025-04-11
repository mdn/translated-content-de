---
title: "HTMLInputElement: stepDown() Methode"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLInputElement.stepDown()`** verringert den Wert eines {{HTMLElement("input")}} Elements mit einem numerischen Typ um den Wert des [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attributs oder um bis zu `n` Vielfache des step-Attributs, wenn eine Zahl als Parameter übergeben wird.

Die Methode, wenn aufgerufen, verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht spezifiziert, und [`step`](/de/docs/Web/HTML/Reference/Attributes/step) der Standardwert für `step` ist, wenn nicht angegeben.

Gültig für alle numerischen, Datums- und Zeiteingabetypen, die das step-Attribut unterstützen, einschließlich {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, und {{HTMLElement("input/range", "range")}}.

Angenommen, `<input id="myTime" type="time" max="17:00" step="900" value="17:00">`, verändert der Aufruf von `myTime.stepDown(3)` den Wert auf 16:15, indem die Zeit um `3 * 900`, oder 45 Minuten, verringert wird. `myTime.stepDown()`, ohne Parameter, würde zu `16:45` führen, da `n` standardmäßig auf `1` gesetzt ist.

```html
<!-- decrements by intervals of 900 seconds (15 minute) -->
<input type="time" max="17:00" step="900" />

<!-- decrements by intervals of 7 days (one week) -->
<input type="date" max="2019-12-25" step="7" />

<!-- decrements by intervals of 12 months (one year) -->
<input type="month" max="2019-12" step="12" />
```

Jedoch würde der Aufruf von `stepDown` auf `<input type="time" max="17:00" step="900">` den Wert nicht auf `17:00` setzen, wie man erwarten könnte — und wie es bei `stepUp` der Fall ist, wenn die Eingabe `<input type="time" min="17:00" step="900">` ist. Stattdessen setzt der erste Aufruf von `stepDown` den Anfangswert auf `23:45`, obwohl das `max`-Attribut gesetzt ist. Der zweite Aufruf setzt den Wert auf `17:00`. Und der dritte Aufruf setzt den Wert auf `16:45`.

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

Die Methode, wenn aufgerufen, verändert den Wert des Formularelements um den im `step`-Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der im Formularelement festgelegten Beschränkungen. Der Standardwert für den Parameter ist 1, wenn keiner übergeben wird. Die Methode wird den Wert nicht unter den im [`min`](/de/docs/Web/HTML/Reference/Attributes/min) festgelegten Wert fallen lassen oder die durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut festgelegten Beschränkungen überschreiten. Ein negativer Wert für `n` wird den Wert erhöhen, aber nicht über den [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Wert hinaus erhöhen.

Wenn der Wert vor dem Aufruf der `stepDown()` Methode ungültig ist, zum Beispiel wenn er nicht den durch das `step`-Attribut festgelegten Einschränkungen entspricht, wird der Aufruf der `stepDown()` Methode einen Wert zurückgeben, der den Formularelement-Beschränkungen entspricht.

Wenn das Formularelement weder zeitlich, datums- noch numerisch ist und daher das `step`-Attribut nicht unterstützt (siehe die Liste der unterstützten Eingabetypen oben), oder wenn der `step`-Wert auf `any` gesetzt ist, wird eine `InvalidStateError` Ausnahme ausgelöst.

## Syntax

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Parameter

- `stepDecrement` {{optional_inline}}

  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, ist _stepDecrement_ standardmäßig 1.

    Wenn der Wert eine Fließkommazahl ist, wird der Wert verringert, als ob [`Math.floor(stepDecrement)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) übergeben wurde. Wenn der Wert negativ ist, wird der Wert anstelle des Verminderungsprozesses erhöht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - wenn die Methode nicht für den aktuellen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Wert anwendbar ist,
    - wenn dem Element kein [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Wert zugeordnet ist,
    - wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) nicht in eine Zahl umgewandelt werden kann,
    - wenn der resultierende Wert über dem [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) oder unter dem [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) liegt.

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um den {{HTMLElement("input/number", "number")}} Eingabetyp zu verringern:

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

Beachten Sie, dass, wenn Sie keinen Parameter an die `stepDown()` Methode übergeben, sie standardmäßig auf 1 gesetzt ist. Jeder andere Wert ist ein Multiplikator des `step` Attributwerts, der in diesem Fall 5 ist. Wenn wir `4` als `stepDecrement` übergeben, wird die Eingabe `stepDown` um `4 * 5`, oder `20`. Wenn der Parameter `0` ist, wird die Zahl nicht verringert. Die `stepDown()` Methode erlaubt nicht, dass die Eingabe den Bereich verlässt, in diesem Fall stoppt sie, wenn sie 0 erreicht, und rundet jede übergebene Fließkommazahl ab.

Versuchen Sie, die Step-Verkleinerung auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `44` zu setzen, was nicht gültig ist. Was passiert, wenn Sie die Methode aufrufen?

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
  [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribute
