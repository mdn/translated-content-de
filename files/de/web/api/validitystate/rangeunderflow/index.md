---
title: "ValidityState: rangeUnderflow-Eigenschaft"
short-title: rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`rangeUnderflow`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Wert eines vom Benutzer bearbeiteten {{HTMLElement("input")}}-Elements nicht mit den durch das [`min`](/de/docs/Web/HTML/Reference/Attributes/min)-Attribut festgelegten Einschränkungen übereinstimmt.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, und ein `min`-Wert festgelegt ist, wird die `rangeUnderflow`-Eigenschaft auf true gesetzt, wenn der Wert nicht mit den durch den [`min`](/de/docs/Web/HTML/Reference/Attributes/step)-Wert festgelegten Einschränkungen übereinstimmt.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht mit den Einschränkungen übereinstimmt.

## Beispiele

### Eingabe mit numerischem Unterlauf

Das folgende Beispiel prüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Reference/Elements/input/number).
Eine Einschränkung wurde mit dem [`min`-Attribut](/de/docs/Web/HTML/Reference/Elements/input/number#min) hinzugefügt, das einen Mindestwert von `18` für die Eingabe festlegt.
Wenn der Benutzer eine Zahl kleiner als 18 eingibt, schlägt die Einschränkungsvalidierung des Elements fehl, und die Stile, die mit den {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen übereinstimmen

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
- [Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Reference/Attributes/step)
- [`max`-Attribut](/de/docs/Web/HTML/Reference/Attributes/max)
