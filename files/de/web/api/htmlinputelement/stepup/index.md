---
title: "HTMLInputElement: stepUp() Methode"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepUp()`** Methode erhöht den Wert eines numerischen Typs eines {{HTMLElement("input")}} Elements um den Wert des [`step`](/de/docs/Web/HTML/Attributes/step) Attributs oder den Standardwert von `step`, wenn das step-Attribut nicht explizit gesetzt ist. Die Methode erhöht, wenn sie aufgerufen wird, den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei `n` standardmäßig `1` ist, wenn nicht angegeben, und [`step`](/de/docs/Web/HTML/Attributes/step) standardmäßig den Standardwert für `step` nutzt, wenn nicht angegeben.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Standardwert für step</th>
      <th>Beispiel für step-Deklaration</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (Tag)</td>
      <td>
        7-Tage (eine Woche) Schritte:<br />
        <code>&#x3C;input type="date" min="2019-12-25" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (Monat)</td>
      <td>
        12-Monats (ein Jahr) Schritte:<br />
        <code>&#x3C;input type="month" min="2019-12" step="12"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (Woche)</td>
      <td>
        Zweiwöchiger Inkrement:<br />
        <code>&#x3C;input type="week" min="2019-W23" step="2"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (Sekunden)</td>
      <td>
        900-Sekunden (15 Minuten) Schritte:<br />
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
        0,1 Schritte<br />
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><code>1</code></td>
      <td>
        Schritte um 2:<br />
        <code>&#x3C;input type="range" min="0" step="2" max="10"></code>
      </td>
    </tr>
  </thead>
</table>

Die Methode ändert, wenn sie aufgerufen wird, den Wert des Formularelements um den im `step`-Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der Beschränkungen, die für das Formularelement festgelegt sind. Der Standardwert für den Parameter ist `1`, wenn kein Wert übergeben wird. Die Methode wird nicht dazu führen, dass der Wert den festgelegten [`max`](/de/docs/Web/HTML/Attributes/max) Wert überschreitet oder die durch das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut festgelegten Beschränkungen verletzt.

Wenn der Wert vor dem Aufrufen der `stepUp()` Methode ungültig ist—zum Beispiel, wenn er nicht mit den durch das step-Attribut festgelegten Beschränkungen übereinstimmt—wird das Aufrufen der `stepUp()` Methode einen Wert zurückgeben, der die Beschränkungen des Formularelements erfüllt.

Wenn das Formularelement nicht zeit-, datums- oder numerisch ist und daher das `step` Attribut nicht unterstützt (siehe Liste der unterstützten Eingabetypen in der obigen Tabelle) oder wenn der step-Wert auf `any` gesetzt ist, wird eine `InvalidStateError` Ausnahme ausgelöst.

## Syntax

```js-nolint
stepUp()
stepUp(stepIncrement)
```

### Parameter

- `stepIncrement` {{optional_inline}}
  - : Ein numerischer Wert. Wenn kein Parameter übergeben wird, ist der Standardwert von `stepIncrement` `1`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um den Eingabetyp {{HTMLElement("input/number", "number")}} zu erhöhen:

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

Beachten Sie, dass wenn Sie keinen Parameter an die `stepUp`-Methode übergeben, der Standardwert `1` ist. Jeder andere Wert ist ein Multiplikator des `step` Attributwertes, der in diesem Fall `5` ist. Wenn Sie `4` als `stepIncrement` übergeben, wird das Eingabefeld um `4 * 5` oder `20` erhöht. Wenn der Parameter `0` ist, wird die Zahl nicht erhöht. Die stepUp-Methode erlaubt es nicht, dass die Eingabe außerhalb des Bereichs liegt, und stoppt in diesem Fall, wenn sie `400` erreicht, und rundet dabei übergebene Gleitkommazahlen ab.

Versuchen Sie, die inkrementelle Schrittweite auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `4` zu setzen, was ungültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepDown`](/de/docs/Web/API/HTMLInputElement/stepDown)
- [`step`](/de/docs/Web/HTML/Attributes/step),
  [`min`](/de/docs/Web/HTML/Attributes/min) und
  [`max`](/de/docs/Web/HTML/Attributes/max) Attribute
