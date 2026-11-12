---
title: "HTMLInputElement: Methode stepUp()"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLInputElement.stepUp()`** erhöht den Wert eines numerischen {{HTMLElement("input")}}-Elements um den Wert des Attributs [`step`](/de/docs/Web/HTML/Reference/Attributes/step) oder um den Standardwert für `step`, wenn das Attribut nicht ausdrücklich gesetzt ist. Beim Aufruf erhöht die Methode den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n). Dabei ist `n` standardmäßig `1`, wenn kein Wert angegeben wird, und [`step`](/de/docs/Web/HTML/Reference/Attributes/step) entspricht dem Standardwert für `step`, wenn das Attribut nicht angegeben ist.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Input-Typ</th>
      <th>Standardwert für step</th>
      <th>Beispiel für die Angabe von step</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (Tag)</td>
      <td>
        Schritte von 7 Tagen (einer Woche):<br />
        <code>&#x3C;input type="date" min="2019-12-25" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (Monat)</td>
      <td>
        Schritte von 12 Monaten (einem Jahr):<br />
        <code>&#x3C;input type="month" min="2019-12" step="12"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (Woche)</td>
      <td>
        Schritte von zwei Wochen:<br />
        <code>&#x3C;input type="week" min="2019-W23" step="2"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (Sekunden)</td>
      <td>
        Schritte von 900 Sekunden (15 Minuten):<br />
        <code>&#x3C;input type="time" min="09:00" step="900"></code>
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>1</code> (Tag)</td>
      <td>
        Derselbe Wochentag:<br />
        <code>&#x3C;input type="datetime-local" min="019-12-25T19:30"
          step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        Schritte von 0,1:<br />
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><code>1</code></td>
      <td>
        Schritte von 2:<br />
        <code>&#x3C;input type="range" min="0" step="2" max="10"></code>
      </td>
    </tr>
  </thead>
</table>

Beim Aufruf ändert die Methode den Wert des Formularelements um den Wert des Attributs `step`, multipliziert mit dem übergebenen Parameter. Dabei gelten die für das Formularelement festgelegten Einschränkungen. Wenn kein Parameter übergeben wird, ist sein Standardwert `1`. Die Methode lässt weder zu, dass der Wert den festgelegten Wert von [`max`](/de/docs/Web/HTML/Reference/Attributes/max) überschreitet, noch, dass er gegen die durch das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) festgelegten Einschränkungen verstößt.

Ist der Wert vor dem Aufruf von `stepUp()` ungültig – etwa weil er nicht den durch das Attribut `step` festgelegten Einschränkungen entspricht –, führt der Aufruf zu einem Wert, der die Einschränkungen des Formularelements erfüllt.

Wenn das Formularelement weder einen Zeit-, Datums- noch einen numerischen Wert enthält und daher das Attribut `step` nicht unterstützt (siehe die Liste der unterstützten Input-Typen in der Tabelle oben), oder wenn der Wert von `step` auf `any` gesetzt ist, wird eine `InvalidStateError`-Ausnahme ausgelöst.

## Syntax

```js-nolint
stepUp()
stepUp(stepIncrement)
```

### Parameter

- `stepIncrement` {{optional_inline}}
  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, ist der Standardwert für `stepIncrement` `1`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um den Wert des {{HTMLElement("input/number", "number")}}-Eingabefelds zu erhöhen:

### HTML

```html
<p>
  <label for="theNumber">
    Enter a number between 0 and 400 that is divisible by 5:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label>
    Enter how many values of step you would like to increment by or leave it
    blank:
  </label>
  <input type="number" step="1" id="incrementInput" min="0" max="25" />
</p>
<input type="button" value="Increment" id="theButton" />
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
const button = document.getElementById("theButton");
button.addEventListener("click", () => {
  stepOnUp();
});

function stepOnUp() {
  let input = document.getElementById("theNumber");
  let val = document.getElementById("incrementInput").value;

  if (val) {
    /* increment with a parameter */
    input.stepUp(val);
  } else {
    /* or without a parameter. Try it with 0 */
    input.stepUp();
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

Wenn Sie der Methode `stepUp` keinen Parameter übergeben, verwendet sie standardmäßig `1`. Jeder andere Wert ist ein Multiplikator für den Wert des Attributs `step`, der hier `5` beträgt. Wenn Sie `4` als `stepIncrement` übergeben, erhöht `stepUp` den Eingabewert um `4 * 5`, also um `20`. Bei einem Parameterwert von `0` wird die Zahl nicht erhöht. `stepUp` lässt nicht zu, dass der Eingabewert den zulässigen Bereich verlässt: In diesem Fall stoppt die Erhöhung bei `400`. Als Parameter übergebene Fließkommazahlen werden abgerundet.

Versuchen Sie, den Eingabewert für die Schrittweite auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `4` zu setzen, was ungültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepDown`](/de/docs/Web/API/HTMLInputElement/stepDown)
- Die Attribute [`step`](/de/docs/Web/HTML/Reference/Attributes/step), [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)
