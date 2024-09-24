---
title: "ValidityState: Eigenschaft rangeOverflow"
short-title: rangeOverflow
slug: Web/API/ValidityState/rangeOverflow
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`rangeOverflow`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState) Schnittstelle gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`max`](/de/docs/Web/HTML/Attributes/max)-Attribut des Elements festgelegten Einschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, und ein `max`-Wert festgelegt ist, wird die `rangeOverflow`-Eigenschaft auf true gesetzt, wenn der Wert nicht den durch den [`max`](/de/docs/Web/HTML/Attributes/step)-Wert festgelegten Einschränkungen entspricht.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Eingabe mit numerischem Überlauf

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Eine Einschränkung wurde mit dem [`max`-Attribut](/de/docs/Web/HTML/Element/input/number#max) hinzugefügt, das einen maximalen Wert von `18` für die Eingabe festlegt.
Wenn der Benutzer eine Zahl größer als 18 eingibt, schlägt die Einschränkungsüberprüfung des Elements fehl und die Stile, die den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} entsprechen,

```css
/* oder :invalid */
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
<input type="number" id="age" max="18" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.rangeOverflow) {
    log("Number is too high!");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_numeric_overflow", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ValidityState.rangeUnderflow")}}
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Attributes/step)
- [`min`-Attribut](/de/docs/Web/HTML/Attributes/min)
