---
title: "HTMLInputElement: stepDown()-Methode"
short-title: stepDown()
slug: Web/API/HTMLInputElement/stepDown
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepDown()`** Methode verringert den Wert eines numerischen Typs eines {{HTMLElement("input")}}-Elements um den Wert des [`step`](/de/docs/Web/HTML/Attributes/step)-Attributs oder bis zu `n` Vielfache des `step`-Attributs, wenn eine Zahl als Parameter angegeben wird.

Die Methode, wenn aufgerufen, verringert den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben, und [`step`](/de/docs/Web/HTML/Attributes/step) auf den Standardwert für `step` zurückfällt, wenn nicht angegeben.

Gültig für alle numerischen, datums- und uhrzeitspezifischen Eingabetypen, die das `step`-Attribut unterstützen, einschließlich {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}}, und {{HTMLElement("input/range", "range")}}.

Gegeben `<input id="myTime" type="time" max="17:00" step="900" value="17:00">`, wird `myTime.stepDown(3)` den Wert auf 16:15 ändern, wodurch die Zeit um `3 * 900` oder 45 Minuten verringert wird. `myTime.stepDown()`, ohne Parameter, hätte zu `16:45` geführt, da `n` standardmäßig `1` ist.

```html
<!-- verringert in Intervallen von 900 Sekunden (15 Minuten) -->
<input type="time" max="17:00" step="900" />

<!-- verringert in Intervallen von 7 Tagen (eine Woche) -->
<input type="date" max="2019-12-25" step="7" />

<!-- verringert in Intervallen von 12 Monaten (ein Jahr) -->
<input type="month" max="2019-12" step="12" />
```

Der Aufruf von `stepDown` für `<input type="time" max="17:00" step="900">` würde den Wert nicht auf `17:00` setzen, wie man vielleicht erwarten würde – und wie es bei `stepUp` der Fall ist, wenn die Eingabe `<input type="time" min="17:00" step="900">` ist. Stattdessen wird der erste Aufruf von `stepDown` den Anfangswert auf `23:45` festlegen, obwohl das `max`-Attribut gesetzt ist. Der zweite Aufruf wird den Wert auf `17:00` setzen. Und der dritte Aufruf wird den Wert auf `16:45` setzen.

```js
let input1 = document.createElement("input");
input1.setAttribute("type", "time");
input1.setAttribute("min", "17:00");
input1.setAttribute("step", 900);
console.log(input1.value); // ""
input1.stepUp();
console.log(input1.value); // "17:00"
// Allerdings
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

Die Methode, wenn aufgerufen, ändert den Wert des Formularelements um den im `step`-Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der im Formularelement festgelegten Einschränkungen. Der Standardwert für den Parameter ist 1, wenn keiner angegeben ist. Die Methode wird nicht dazu führen, dass der Wert unter den [`min`](/de/docs/Web/HTML/Attributes/min)-Wert fällt oder die durch das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut gesetzten Einschränkungen verletzt. Ein negativer Wert für `n` erhöht den Wert, wird jedoch nicht über den [`max`](/de/docs/Web/HTML/Attributes/max)-Wert hinaus erhöhen.

Wenn der Wert vor dem Aufruf der Methode `stepDown()` ungültig ist, zum Beispiel, wenn er nicht den durch das `step`-Attribut festgelegten Einschränkungen entspricht, gibt der Aufruf der Methode `stepDown()` einen Wert zurück, der den Formularelementeinschränkungen entspricht.

Wenn das Formularelement nicht zeit-, datums- oder zahlenbasiert ist und daher das `step`-Attribut nicht unterstützt (siehe die oben genannten unterstützten Eingabetypen), oder wenn der `step`-Wert auf `any` gesetzt ist, wird eine `InvalidStateError`-Ausnahme ausgelöst.

## Syntax

```js-nolint
stepDown()
stepDown(stepDecrement)
```

### Parameter

- `stepDecrement` {{optional_inline}}

  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, ist _stepDecrement_ standardmäßig 1.

    Wenn der Wert ein Float ist, wird der Wert verringert, als ob [`Math.floor(stepDecrement)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) übergeben wurde. Wenn der Wert negativ ist, wird er erhöht, anstatt verringert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - wenn die Methode für den aktuellen [`type`](/de/docs/Web/HTML/Element/input#type)-Wert nicht anwendbar ist,
    - wenn das Element keinen [`step`](/de/docs/Web/HTML/Element/input#step)-Wert hat,
    - wenn der [`value`](/de/docs/Web/HTML/Element/input#value) nicht in eine Zahl umgewandelt werden kann,
    - wenn der resultierende Wert über dem [`max`](/de/docs/Web/HTML/Element/input#max)-Wert oder unter dem [`min`](/de/docs/Web/HTML/Element/input#min)-Wert liegt.

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um den {{HTMLElement("input/number", "number")}} Eingabetyp zu verringern:

### HTML

```html
<p>
  <label for="theNumber">
    Geben Sie eine Zahl zwischen 0 und 400 ein, die durch 5 teilbar ist:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label for="decrementButton">
    Geben Sie ein, um wie viele Schritte Sie verringern möchten, oder lassen Sie es leer:
  </label>
  <input type="number" step="1" id="decrementInput" min="-2" max="15" />
</p>
<input type="button" value="Verringern" id="theButton" />
```

### JavaScript

```js
/* lassen Sie die Schaltfläche die Funktion aufrufen */
let button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnDown();
});

function stepOnDown() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("decrementInput").value;

  if (val) {
    // verringern mit einem Parameter
    input.stepDown(val);
  } else {
    // oder ohne Parameter. Versuchen Sie es mit 0, 5, -2, etc.
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

Beachten Sie, wenn Sie keinen Parameter an die Methode `stepDown()` übergeben, ist sie standardmäßig 1. Jeder andere Wert ist ein Multiplikator des `step`-Attributwerts, der in diesem Fall 5 ist. Wenn wir `4` als `stepDecrement` übergeben, wird das Eingabefeld um `4 * 5` oder `20` `stepDown`. Wenn der Parameter `0` ist, wird die Zahl nicht verringert. Die Methode `stepDown()` wird nicht zulassen, dass die Eingabe den Bereich verlässt, in diesem Fall stoppt sie, wenn sie 0 erreicht, und rundet ab sowie alle übergebenen Float-Werte.

Versuchen Sie, die Schrittverringerung auf `1.2` zu setzen. Was passiert bei der Ausführung der Methode?

Versuchen Sie, den Wert auf `44` zu setzen, was ungültig ist. Was passiert, wenn Sie die Methode ausführen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.stepUp", "HTMLInputElement.stepUp()")}}
- [`step`](/de/docs/Web/HTML/Attributes/step), [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attribute
