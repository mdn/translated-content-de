---
title: "ValidityState: stepMismatch-Eigenschaft"
short-title: stepMismatch
slug: Web/API/ValidityState/stepMismatch
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`stepMismatch`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das `step`-Attribut des Elements festgelegten Beschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} und der Schrittwert nicht `any` ist, gilt: Wenn der Wert nicht den durch [`step`](/de/docs/Web/HTML/Attributes/step) und [`min`](/de/docs/Web/HTML/Attributes/min) festgelegten Einschränkungen entspricht, ist `stepMismatch` true. Wenn der Restwert des Wertes des Formularelements abzüglich des [`min`](/de/docs/Web/HTML/Attributes/min)-Wertes, dividiert durch den [`step`](/de/docs/Web/HTML/Attributes/step)-Wert (der standardmäßig 1 ist, wenn er weggelassen wird), ungleich null ist, liegt ein Mismatch vor.

## Wert

Ein boolean, der `true` ist, wenn der `ValidityState` nicht den Beschränkungen entspricht.

## Beispiele

### Eingabe mit Schrittabweichung

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Mit dem [`step`-Attribut](/de/docs/Web/HTML/Element/input/number#step) wurde eine Einschränkung hinzugefügt, was bedeutet, dass die Eingabe Werte in Schritten von 5 erwartet.
Wenn der Benutzer eine Zahl eingibt, die nicht durch 5 teilbar ist, scheitert das Element an der Gültigkeitsprüfung der Einschränkung, und die Styles, die der {{cssxref(":invalid")}} CSS-Pseudoklasse entsprechen, werden angewendet.

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
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Attributes/step)
