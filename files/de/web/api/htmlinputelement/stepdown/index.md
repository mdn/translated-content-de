---
title: "HTMLInputElement: Methode stepDown()"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLInputElement.stepDown()`** verringert den Wert eines numerischen {{HTMLElement("input")}}-Elements um den Wert des Attributs [`step`](/de/docs/Web/HTML/Reference/Attributes/step). Wird eine Zahl als Parameter übergeben, verringert sie den Wert um bis zu `n` Vielfache des `step`-Werts.

Beim Aufruf verringert die Methode den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n). Wenn `n` nicht angegeben wird, ist der Standardwert `1`. Wenn [`step`](/de/docs/Web/HTML/Reference/Attributes/step) nicht angegeben wird, gilt dessen Standardwert.

Die Methode ist für alle numerischen, Datums- und Zeiteingabetypen gültig, die das Attribut `step` unterstützen, darunter {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}.

Bei `<input id="myTime" type="time" max="17:00" step="900" value="17:00">` ändert der Aufruf von `myTime.stepDown(3)` den Wert in `16:15`: Die Zeit wird um `3 * 900`, also 45 Minuten, verringert. `myTime.stepDown()` ohne Parameter würde `16:45` ergeben, da `n` standardmäßig `1` ist.

```html
<!-- decrements by intervals of 900 seconds (15 minute) -->
<input type="time" max="17:00" step="900" />

<!-- decrements by intervals of 7 days (one week) -->
<input type="date" max="2019-12-25" step="7" />

<!-- decrements by intervals of 12 months (one year) -->
<input type="month" max="2019-12" step="12" />
```

Ein Aufruf von `stepDown` für `<input type="time" max="17:00" step="900">` setzt den Wert jedoch nicht wie erwartet auf `17:00` – anders als `stepUp` bei `<input type="time" min="17:00" step="900">`. Stattdessen setzt der erste Aufruf von `stepDown` den Anfangswert auf `23:45`, obwohl das Attribut `max` gesetzt ist. Der zweite Aufruf setzt den Wert auf `17:00`, der dritte auf `16:45`.

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

Beim Aufruf ändert die Methode den Wert des Formularsteuerelements um den Wert des Attributs `step`, multipliziert mit dem Parameter. Dabei berücksichtigt sie die für das Formularsteuerelement festgelegten Grenzen. Wird kein Parameter übergeben, ist dessen Standardwert `1`. Die Methode verringert den Wert nicht unter den durch [`min`](/de/docs/Web/HTML/Reference/Attributes/min) festgelegten Wert und verletzt nicht die durch das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) festgelegten Einschränkungen. Ein negativer Wert für `n` erhöht den Wert, jedoch nicht über den durch [`max`](/de/docs/Web/HTML/Reference/Attributes/max) festgelegten Wert hinaus.

Ist der Wert vor dem Aufruf von `stepDown()` ungültig, weil er beispielsweise nicht den durch das Attribut `step` festgelegten Einschränkungen entspricht, ergibt der Aufruf einen Wert, der den Einschränkungen des Formularsteuerelements entspricht.

Wenn das Formularsteuerelement weder ein Zeit-, Datums- noch ein numerischer Eingabetyp ist und daher das Attribut `step` nicht unterstützt (siehe die Liste der unterstützten Eingabetypen oben), oder wenn der Wert von `step` auf `any` gesetzt ist, wird eine `InvalidStateError`-Ausnahme ausgelöst.

## Syntax

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Parameter

- `stepDecrement` {{optional_inline}}
  - : Ein numerischer Wert. Wird kein Parameter übergeben, ist der Standardwert für _stepDecrement_ `1`.

    Ist der Wert eine Gleitkommazahl, wird er so verringert, als wäre [`Math.floor(stepDecrement)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) übergeben worden. Ist der Wert negativ, wird der Wert erhöht statt verringert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Methode ist für den aktuellen Wert von [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht anwendbar.
    - Das Element hat keinen Wert für [`step`](/de/docs/Web/HTML/Reference/Elements/input#step).
    - Der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) kann nicht in eine Zahl umgewandelt werden.
    - Der resultierende Wert liegt über [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) oder unter [`min`](/de/docs/Web/HTML/Reference/Elements/input#min).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um den Wert eines {{HTMLElement("input/number", "number")}}-Eingabefelds zu verringern:

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

### CSS

```css
input:invalid {
  border: red solid 3px;
}
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

### Ergebnis

{{EmbedLiveSample("Examples")}}

Wenn Sie der Methode `stepDown()` keinen Parameter übergeben, verwendet sie standardmäßig `1`. Jeder andere Wert ist ein Multiplikator für den Wert des Attributs `step`, der hier `5` beträgt. Wenn wir `4` als `stepDecrement` übergeben, verringert `stepDown` den Eingabewert um `4 * 5`, also `20`. Ist der Parameter `0`, wird die Zahl nicht verringert. Die Methode `stepDown()` lässt nicht zu, dass der Eingabewert den gültigen Bereich verlässt: In diesem Fall stoppt sie bei `0`. Als Parameter übergebene Gleitkommazahlen werden abgerundet.

Setzen Sie den Eingabewert für die Schrittverringerung auf `1.2`. Was geschieht, wenn Sie die Methode aufrufen?

Setzen Sie den Wert auf `44`, was kein gültiger Wert ist. Was geschieht, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
- Die Attribute [`step`](/de/docs/Web/HTML/Reference/Attributes/step), [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
