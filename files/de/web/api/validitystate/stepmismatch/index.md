---
title: "ValidityState: stepMismatch-Eigenschaft"
short-title: stepMismatch
slug: Web/API/ValidityState/stepMismatch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`stepMismatch`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das `step`-Attribut des Elements festgelegten Einschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}}, und der Schrittwert nicht `any` ist, und der Wert nicht den durch die Werte [`step`](/de/docs/Web/HTML/Reference/Attributes/step) und [`min`](/de/docs/Web/HTML/Reference/Attributes/min) festgelegten Einschränkungen entspricht, dann wird `stepMismatch` auf wahr gesetzt. Wenn der Rest des Werts des Formularsteuerungselements minus dem Wert von [`min`](/de/docs/Web/HTML/Reference/Attributes/min) geteilt durch den Wert von [`step`](/de/docs/Web/HTML/Reference/Attributes/step) (der standardmäßig 1 ist, wenn er weggelassen wird) nicht null ist, liegt ein Mismatch vor.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Eingabe mit Schritt-Mismatch

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabe-Elements](/de/docs/Web/HTML/Reference/Elements/input/number).
Eine Einschränkung wurde unter Verwendung des [`step`-Attributs](/de/docs/Web/HTML/Reference/Elements/input/number#step) hinzugefügt, was bedeutet, dass die Eingabeinkremente von 5 als Werte erwartet.
Wenn der Benutzer eine Zahl eingibt, die nicht durch 5 teilbar ist, schlägt die Validierung der Einschränkung fehl, und die Stile, die zur {{cssxref(":invalid")}} CSS-Pseudoklasse passen, werden angewendet.

```css
input:invalid {
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
<input type="number" id="degrees" step="5" />
```

```js
const userInput = document.getElementById("degrees");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.stepMismatch) {
    log("Input must be divisible by 5");
  } else {
    log("Input is valid…");
  }
});
```

{{EmbedLiveSample("input_with_step_mismatch", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Reference/Attributes/step)
