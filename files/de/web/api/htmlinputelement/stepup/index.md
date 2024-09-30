---
title: "HTMLInputElement: stepUp() Methode"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepUp()`** Methode erhöht den Wert eines numerischen Typs eines {{HTMLElement("input")}} Elements um den Wert des [`step`](/de/docs/Web/HTML/Attributes/step) Attributs oder den Standardwert von `step`, falls das Step-Attribut nicht explizit gesetzt ist. Wenn die Methode aufgerufen wird, erhöht sie den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei `n` standardmäßig `1` ist, falls nicht angegeben, und [`step`](/de/docs/Web/HTML/Attributes/step) auf den Standardwert für `step` zurückgreift, falls nicht angegeben.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Standardwert für Step</th>
      <th>Beispiel für Step-Deklaration</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (Tag)</td>
      <td>
        7-Tage- (eine Woche) Schritte:<br />
        <code>&#x3C;input type="date" min="2019-12-25" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (Monat)</td>
      <td>
        12-Monate- (ein Jahr) Schritte:<br />
        <code>&#x3C;input type="month" min="2019-12" step="12"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (Woche)</td>
      <td>
        Zweiwöchige Schritte:<br />
        <code>&#x3C;input type="week" min="2019-W23" step="2"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (Sekunden)</td>
      <td>
        900-Sekunden- (15 Minuten) Schritte:<br />
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
        <code>&#x3C;input type="datetime-local" min="019-12-25T19:30" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        Schritte von 0,1<br />
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

Wenn die Methode aufgerufen wird, wird der Wert des Formularelements um den im `step` Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der im Formularelement festgelegten Einschränkungen geändert. Der Standardwert für den Parameter, wenn kein Wert übergeben wird, ist `1`. Die Methode wird den Wert nicht über den festgelegten [`max`](/de/docs/Web/HTML/Attributes/max) Wert hinaus erhöhen oder die durch das [`step`](/de/docs/Web/HTML/Attributes/step) Attribut festgelegten Einschränkungen verletzen.

Wenn der Wert vor dem Aufrufen der `stepUp()` Methode ungültig ist—zum Beispiel, wenn er nicht den durch das Step-Attribut festgelegten Einschränkungen entspricht—wird das Aufrufen der `stepUp()` Methode einen Wert zurückgeben, der den Formularelement-Beschränkungen entspricht.

Wenn das Formularelement nicht zeit-, datums- oder zahlenspezifisch ist und daher das `step` Attribut nicht unterstützt (siehe die Liste der unterstützten Eingabetypen in der obigen Tabelle) oder der Step-Wert auf `any` gesetzt ist, wird eine `InvalidStateError` Ausnahme ausgelöst.

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

Beachten Sie, dass, wenn Sie keinen Parameter an die `stepUp` Methode übergeben, der Standardwert auf `1` gesetzt ist. Jeder andere Wert ist ein Multiplikator des `step` Attributwerts, der in diesem Fall `5` ist. Wenn Sie `4` als `stepIncrement` übergeben, wird der Eingang um `4 * 5` oder `20` erhöht. Wenn der Parameter `0` ist, wird die Zahl nicht erhöht. `stepUp` erlaubt es nicht, dass der Eingabewert den zulässigen Bereich überschreitet, und stoppt in diesem Fall, wenn er `400` erreicht, und rundet alle als Parameter übergebenen Gleitkommazahlen ab.

Versuchen Sie, den Step-Inkrement-Eingang auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `4` zu setzen, was nicht gültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.stepDown`](/de/docs/Web/API/HTMLInputElement/stepDown)
- [`step`](/de/docs/Web/HTML/Attributes/step), [`min`](/de/docs/Web/HTML/Attributes/min) und [`max`](/de/docs/Web/HTML/Attributes/max) Attribute
