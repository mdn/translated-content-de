---
title: "HTMLInputElement: stepUp() Methode"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepUp()`** Methode erhöht den Wert eines numerischen Typs eines {{HTMLElement("input")}} Elements um den Wert des [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attributs oder den Standardwert von `step`, falls das `step` Attribut nicht explizit gesetzt ist. Wenn die Methode aufgerufen wird, erhöht sie den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei `n` standardmäßig auf `1` gesetzt ist, wenn nicht angegeben, und [`step`](/de/docs/Web/HTML/Reference/Attributes/step) standardmäßig den Standardwert für `step` hat, wenn nicht angegeben.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Input-Typ</th>
      <th>Standardwert für Step</th>
      <th>Beispiel für Step-Deklaration</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (Tag)</td>
      <td>
        7 Tage (eine Woche) Schritte:<br />
        <code>&#x3C;input type="date" min="2019-12-25" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (Monat)</td>
      <td>
        12 Monate (ein Jahr) Schritte:<br />
        <code>&#x3C;input type="month" min="2019-12" step="12"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (Woche)</td>
      <td>
        Zwei Wochen Schritte:<br />
        <code>&#x3C;input type="week" min="2019-W23" step="2"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (Sekunden)</td>
      <td>
        900 Sekunden (15 Minuten) Schritte:<br />
        <code>&#x3C;input type="time" min="09:00" step="900"></code>
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>1</code> (Tag)</td>
      <td>
        Gleicher Wochentag:<br />
        <code>&#x3C;input type="datetime-local" min="019-12-25T19:30"
          step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        0.1 Schritte<br />
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><code>1</code></td>
      <td>
        Erhöhungen um 2:<br />
        <code>&#x3C;input type="range" min="0" step="2" max="10"></code>
      </td>
    </tr>
  </thead>
</table>

Die Methode ändert, wenn sie aufgerufen wird, den Wert des Formkontrolls um den im `step` Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der auf das Formkontroll angewendeten Einschränkungen. Der Standardwert für den Parameter ist `1`, wenn kein Wert übergeben wird. Die Methode wird den Wert nicht über den gesetzten [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Wert hinaus erhöhen oder die durch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Attribut festgelegten Einschränkungen missachten.

Wenn der Wert vor dem Aufruf der `stepUp()` Methode ungültig ist - zum Beispiel, wenn er nicht den durch das step Attribut festgelegten Einschränkungen entspricht - wird der Aufruf der `stepUp()` Methode einen Wert zurückgeben, der den Einschränkungen der Formkontrolls entspricht.

Wenn das Formkontroll nicht zeit-, daten- oder zahlenbasiert ist und daher das `step` Attribut nicht unterstützt (siehe die Liste der unterstützten Eingabetypen in der obigen Tabelle), oder wenn der step-Wert auf `any` gesetzt ist, wird eine `InvalidStateError` Ausnahme ausgelöst.

## Syntax

```js-nolint
stepUp()
stepUp(stepIncrement)
```

### Parameter

- `stepIncrement` {{optional_inline}}
  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, ist `stepIncrement` standardmäßig `1`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um den {{HTMLElement("input/number", "number")}} Eingabetyp zu erhöhen:

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

### CSS

```css
input:invalid {
  border: red solid 3px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

Beachten Sie, dass die Methode, wenn kein Parameter an die `stepUp` Methode übergeben wird, standardmäßig `1` verwendet. Jeder andere Wert ist ein Multiplikator des `step` Attributwerts, der in diesem Fall `5` ist. Wenn Sie `4` als `stepIncrement` übergeben, wird die Eingabe um `4 * 5` oder `20` erhöht. Wenn der Parameter `0` ist, wird die Zahl nicht erhöht. Die stepUp Methode wird nicht zulassen, dass die Eingabe den Bereich überschreitet, in diesem Fall wird sie bei `400` stoppen und übergebene Fließkommazahlen abrunden.

Versuchen Sie, den Schritterhöhungswert auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `4` zu setzen, was ungültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepDown`](/de/docs/Web/API/HTMLInputElement/stepDown)
- [`step`](/de/docs/Web/HTML/Reference/Attributes/step),
  [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und
  [`max`](/de/docs/Web/HTML/Reference/Attributes/max) Attribute
