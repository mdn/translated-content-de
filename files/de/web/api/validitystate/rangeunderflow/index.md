---
title: "ValidityState: Eigenschaft rangeUnderflow"
short-title: rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`rangeUnderflow`** Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState) Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`min`](/de/docs/Web/HTML/Attributes/min) Attribut gesetzten Einschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} und ein `min` Wert festgelegt ist, wird die `rangeUnderflow` Eigenschaft auf true gesetzt, wenn der Wert nicht den durch den [`min`](/de/docs/Web/HTML/Attributes/step) Wert gesetzten Einschränkungen entspricht.

## Wert

Ein boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Eingabe mit numerischem Unterlauf

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Eine Einschränkung wurde mithilfe des [`min` Attributs](/de/docs/Web/HTML/Element/input/number#min) hinzugefügt, die einen Mindestwert von `18` für die Eingabe festlegt.
Wenn der Benutzer eine Zahl kleiner als 18 eingibt, schlägt die Elementvalidierung fehl, und die Stile, die mit den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} übereinstimmen

```css
/* or :invalid */
input:out-of-range {
  outline: red solid 3px;
}
```

```css hidden
body {
  margin: 0.5rem;
}
pre {
  padding: 1rem;
  height: 2rem;
  background-color: lightgrey;
  outline: 1px solid grey;
}
```

```html
<pre id="log">Validation logged here...</pre>
<input type="number" id="age" min="18" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.rangeUnderflow) {
    log("Number is too low!");
  } else {
    log("Valid…");
  }
});
```

{{EmbedLiveSample("input_with_numeric_underflow", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ValidityState.rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`step` Attribut](/de/docs/Web/HTML/Attributes/step)
- [`max` Attribut](/de/docs/Web/HTML/Attributes/max)
