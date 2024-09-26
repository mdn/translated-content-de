---
title: "HTMLInputElement: stepUp()-Methode"
short-title: stepUp()
slug: Web/API/HTMLInputElement/stepUp
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement.stepUp()`**-Methode erhöht den Wert
eines numerischen Typs eines {{HTMLElement("input")}}-Elements um den Wert des
[`step`](/de/docs/Web/HTML/Attributes/step)-Attributs oder den
Standardwert von `step`, falls das step-Attribut nicht explizit gesetzt ist. Wenn die Methode aufgerufen wird, erhöht sie den [`value`](/de/docs/Web/HTML/Element/input#value) um
([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei `n` standardmäßig
`1` ist, wenn nicht anders angegeben, und
[`step`](/de/docs/Web/HTML/Attributes/step) standardmäßig den
Standardwert für `step` verwendet, falls nicht angegeben.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Eingabetyp</th>
      <th>Standardwert von step</th>
      <th>Beispiel für eine step-Deklaration</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>1</code> (Tag)</td>
      <td>
        Erhöhungen um 7 Tage (eine Woche):<br />
        <code>&#x3C;input type="date" min="2019-12-25" step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>1</code> (Monat)</td>
      <td>
        Erhöhungen um 12 Monate (ein Jahr):<br />
        <code>&#x3C;input type="month" min="2019-12" step="12"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>1</code> (Woche)</td>
      <td>
        Erhöhungen um zwei Wochen:<br />
        <code>&#x3C;input type="week" min="2019-W23" step="2"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>60</code> (Sekunden)</td>
      <td>
        Erhöhungen um 900 Sekunden (15 Minuten):<br />
        <code>&#x3C;input type="time" min="09:00" step="900"></code>
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>1</code> (Tag)</td>
      <td>
        Gleichbleibender Wochentag:<br />
        <code>&#x3C;input type="datetime-local" min="2019-12-25T19:30"
          step="7"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><code>1</code></td>
      <td>
        Erhöhungen um 0,1<br />
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

Wenn diese Methode aufgerufen wird, ändert sie den Wert des Formularelements um den im `step`-Attribut angegebenen Wert, multipliziert mit dem Parameter, innerhalb der für das Formularelement festgelegten Einschränkungen. Der Standardwert für den Parameter ist `1`, wenn kein Wert übergeben wird. Die Methode überschreitet nicht den festgelegten [`max`](/de/docs/Web/HTML/Attributes/max)-Wert oder ignoriert die durch das [`step`](/de/docs/Web/HTML/Attributes/step)-Attribut festgelegten Einschränkungen.

Wenn der Wert vor dem Aufruf der `stepUp()`-Methode ungültig ist – beispielsweise dann, wenn er nicht den durch das step-Attribut festgelegten Einschränkungen entspricht – wird die `stepUp()`-Methode einen Wert zurückgeben, der den Formularelement-Einschränkungen entspricht.

Falls das Formularelement nicht die Art Zeit, Datum oder nummerisch besitzt und daher das `step`-Attribut nicht unterstützt (siehe Liste der unterstützten Eingabetypen in der obigen Tabelle) oder wenn der step-Wert auf `any` gesetzt ist, wird eine `InvalidStateError`-Ausnahme ausgelöst.

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
    Geben Sie eine Zahl zwischen 0 und 400 ein, die durch 5 teilbar ist:
  </label>
  <input type="number" step="5" id="theNumber" min="0" max="400" />
</p>
<p>
  <label>
    Geben Sie ein, um wie viele Werte des Steps Sie erhöhen möchten, oder lassen Sie es leer:
  </label>
  <input type="number" step="1" id="incrementInput" min="0" max="25" />
</p>
<input type="button" value="Erhöhen" id="theButton" />
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

Beachten Sie, dass wenn Sie keinen Parameter an die `stepUp`-Methode übergeben, dieser standardmäßig `1` ist. Jeder andere Wert ist ein Multiplikator des `step`-Attributwerts, der in diesem Fall `5` beträgt. Wenn Sie `4` als `stepIncrement` übergeben, erhöht sich der Eingabewert um `4 * 5` oder `20`. Wenn der Parameter `0` ist, wird die Nummer nicht erhöht. Die stepUp-Methode erlaubt es nicht, dass der Eingabewert den Bereich überschreitet, in diesem Fall wird er bei `400` gestoppt und alle als Parameter übergebenen Gleitkommazahlen werden abgerundet.

Versuchen Sie, die Step-Erhöhungseingabe auf `1.2` zu setzen. Was passiert, wenn Sie die Methode aufrufen?

Versuchen Sie, den Wert auf `4` zu setzen, was nicht gültig ist. Was passiert, wenn Sie die Methode aufrufen?

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.stepDown")}}
- [`step`](/de/docs/Web/HTML/Attributes/step),
  [`min`](/de/docs/Web/HTML/Attributes/min) und
  [`max`](/de/docs/Web/HTML/Attributes/max) Attribute