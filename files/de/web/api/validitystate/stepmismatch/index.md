---
title: "ValidityState: stepMismatch-Eigenschaft"
short-title: stepMismatch
slug: Web/API/ValidityState/stepMismatch
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`stepMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das `step`-Attribut des Elements festgelegten Einschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} und der Schrittwert nicht `any` ist, wird `stepMismatch` auf true gesetzt, falls der Wert nicht den durch die [`step`](/de/docs/Web/HTML/Attributes/step)- und [`min`](/de/docs/Web/HTML/Attributes/min)-Werte festgelegten Einschränkungen entspricht. Wenn der Rest des Werts des Formularsteuerungselements minus dem [`min`](/de/docs/Web/HTML/Attributes/min)-Wert geteilt durch den [`step`](/de/docs/Web/HTML/Attributes/step)-Wert (der standardmäßig 1 ist, wenn er nicht angegeben wird) nicht null ist, besteht ein Mismatch.

## Wert

Ein boolean, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Eingabe mit Schritt-Mismatch

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Es wurde eine Einschränkung mit dem [`step`-Attribut](/de/docs/Web/HTML/Element/input/number#step) hinzugefügt, was bedeutet, dass die Eingabe Inkremente von 5 als Werte erwartet.
Wenn der Benutzer eine Zahl eingibt, die nicht durch 5 teilbar ist, schlägt die Gültigkeitsprüfung des Elements fehl, und die Stile, die der {{cssxref(":invalid")}}-CSS-Pseudoklasse entsprechen, werden angewendet.

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

- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Attributes/step)
