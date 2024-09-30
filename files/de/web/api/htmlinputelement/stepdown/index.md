---
title: "HTMLInputElement: stepDown()-Methode"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepDown()`**-Methode verringert den Wert eines numerischen Typs des {{HTMLElement("input")}}-Elements um den Wert des [`step`](/de/docs/Web/HTML/Attributes/step)-Attributs oder um bis zu `n` Vielfache des step-Attributs, wenn eine Zahl als Parameter übergeben wird.

Wenn die Methode aufgerufen wird, verringert sie den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n auf 1 standardmäßig gesetzt ist, wenn nichts angegeben ist, und [`step`](/de/docs/Web/HTML/Attributes/step) auf den Standardwert für `step` standardmäßig gesetzt, wenn nichts angegeben ist.

Gültig für alle numerischen, Datums- und Zeiteingabetypen, die das step-Attribut unterstützen, einschließlich {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

Angenommen, `<input id="myTime" type="time" max="17:00" step="900" value="17:00">`, `myTime.stepDown(3)` ändert den Wert auf 16:15, indem die Zeit um `3 * 900` oder 45 Minuten verringert wird. `myTime.stepDown()`, ohne Parameter, würde zu `16:45` führen, da `n` standardmäßig auf `1` gesetzt ist.

```html
<!-- decrements by intervals of 900 seconds (15 minute) -->
<input type="time" max="17:00" step="900" />

<!-- decrements by intervals of 7 days (one week) -->
<input type="date" max="2019-12-25" step="7" />

<!-- decrements by intervals of 12 months (one year) -->
<input type="month" max="2019-12" step="12" />
```

Allerdings würde der Aufruf von `stepDown` bei `<input type="time" max="17:00" step="900">` den Wert nicht auf `17:00` setzen, wie man es erwarten würde - und wie es bei `stepUp` der Fall ist, wenn die Eingabe `<input type="time" min="17:00" step="900">` ist. Stattdessen setzt der erste Aufruf von `stepDown` den initialen Wert auf `23:45`, obwohl das `max`-Attribut gesetzt ist. Der zweite Aufruf setzt den Wert auf `17:00`. Der dritte Aufruf setzt den Wert auf `16:45`.

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

Wenn die Methode aufgerufen wird, ändert sie den Wert des Formularelements um den im `step`-Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der im Formularelement gesetzten Beschränkungen. Der Standardwert für den Parameter ist 1, wenn nichts übergeben wird. Die Methode führt nicht dazu, dass der Wert unter den im [`min`](/de/docs/Web/HTML/Attributes/min)-Attribut gesetzten Wert fällt oder die Beschränkungen, die durch das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut gesetzt sind, verletzt. Ein negativer Wert für `n` erhöht den Wert, wird aber nicht über den im [`max`](/de/docs/Web/HTML/Attributes/max)-Attribut gesetzten Wert hinaus erhöhen.

Wenn der Wert vor dem Aufruf der `stepDown()`-Methode ungültig ist, beispielsweise weil er die durch das `step`-Attribut festgelegten Beschränkungen nicht erfüllt, gibt die `stepDown()`-Methode einen Wert zurück, der den Formularsteuerungseinschränkungen entspricht.

Wenn das Formularelement keine Zeit-, Datums- oder Zahlenart ist, und daher das `step`-Attribut nicht unterstützt (siehe die Liste der unterstützten Eingabetypen oben), oder wenn der `step`-Wert auf `any` gesetzt ist, wird eine `InvalidStateError`-Ausnahme ausgelöst.

## Syntax

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Parameter

- `stepDecrement` {{optional_inline}}

  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, ist _stepDecrement_ standardmäßig 1.

    Wenn der Wert ein Gleitkommawert ist, wird der Wert so verringert, als wäre [`Math.floor(stepDecrement)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) übergeben worden. Wenn der Wert negativ ist, wird der Wert anstelle dessen erhöht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - wenn die Methode für den aktuellen [`type`](/de/docs/Web/HTML/Element/input#type)-Wert nicht zutreffend ist,
    - wenn das Element keinen [`step`](/de/docs/Web/HTML/Element/input#step)-Wert hat,
    - wenn der [`value`](/de/docs/Web/HTML/Element/input#value) nicht in eine Zahl umgewandelt werden kann,
    - wenn der resultierende Wert über dem [`max`](/de/docs/Web/HTML/Element/input#max) oder unter dem [`min`](/de/docs/Web/HTML/Element/input#min) liegt.

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

Beachten Sie, dass wenn Sie keinen Parameter an die `stepDown()`-Methode übergeben, dieser standardmäßig auf 1 gesetzt ist. Jeder andere Wert ist ein Vielfaches des `step`-Attributswertes, der in diesem Fall 5 ist. Wenn wir `4` als `stepDecrement` übergeben, wird die Eingabe um `4 * 5` oder `20` verringert. Wenn der Parameter `0` ist, wird die Zahl nicht verringert. Die `stepDown()`-Methode erlaubt nicht, dass die Eingabe außerhalb des Bereichs geht, in diesem Fall wird sie gestoppt, wenn sie 0 erreicht, und rundet ab und Gleitkommazahlen, die als Parameter übergeben werden.

Versuchen Sie, die Stufenverringerungseingabe auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `44` zu setzen, der nicht gültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
- [`step`](/de/docs/Web/HTML/Attributes/step),
  [`min`](/de/docs/Web/HTML/Attributes/min) und
  [`max`](/de/docs/Web/HTML/Attributes/max) Attribute
