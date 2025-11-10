---
title: "ValidityState: rangeOverflow-Eigenschaft"
short-title: rangeOverflow
slug: Web/API/ValidityState/rangeOverflow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`rangeOverflow`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribut des Elements festgelegten Beschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} und ein `max`-Wert festgelegt ist, wird die `rangeOverflow`-Eigenschaft auf true gesetzt, wenn der Wert nicht den durch den [`max`](/de/docs/Web/HTML/Reference/Attributes/step)-Wert festgelegten Beschränkungen entspricht.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Beschränkungen entspricht.

## Beispiele

### Eingabe mit numerischem Überlauf

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Reference/Elements/input/number).
Mit Hilfe des [`max`-Attributs](/de/docs/Web/HTML/Reference/Elements/input/number#max) wurde eine Beschränkung hinzugefügt, die einen maximalen Wert von `18` für die Eingabe festlegt.
Wenn der Benutzer eine Zahl größer als 18 eingibt, schlägt die Überprüfung der Beschränkungen fehl, und die Stile, die den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} entsprechen, werden angewendet.

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

- [`ValidityState.rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow)
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Reference/Attributes/step)
- [`min`-Attribut](/de/docs/Web/HTML/Reference/Attributes/min)
