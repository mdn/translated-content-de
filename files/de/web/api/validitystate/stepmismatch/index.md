---
title: "ValidityState: stepMismatch-Eigenschaft"
short-title: stepMismatch
slug: Web/API/ValidityState/stepMismatch
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`stepMismatch`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das `step`-Attribut festgelegten Einschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} und der Schrittwert nicht `any` ist, wird `stepMismatch` true, wenn der Wert nicht den durch die [`step`](/de/docs/Web/HTML/Attributes/step)- und [`min`](/de/docs/Web/HTML/Attributes/min)-Werte festgelegten Einschränkungen entspricht. Wenn der Rest des Wertes des Formularelements minus dem [`min`](/de/docs/Web/HTML/Attributes/min)-Wert, geteilt durch den [`step`](/de/docs/Web/HTML/Attributes/step)-Wert (der auf 1 zurückgesetzt wird, falls er weggelassen wird), nicht null ist, liegt eine Diskrepanz vor.

## Wert

Ein boolescher Wert, der `true` ist, wenn der `ValidityState` nicht den Einschränkungen entspricht.

## Beispiele

### Eingabe mit Step-Diskrepanz

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Eine Einschränkung wurde mit dem [`step`-Attribut](/de/docs/Web/HTML/Element/input/number#step) hinzugefügt, was bedeutet, dass die Eingabe Werte in Schritten von 5 erwartet.
Wenn der Benutzer eine Zahl eingibt, die nicht durch 5 teilbar ist, schlägt die Überprüfung der Einschränkung fehl und die Stile, die der {{cssxref(":invalid")}} CSS-Pseudoklasse entsprechen, werden angewendet.

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
<pre id="log">Validierung hier protokolliert...</pre>
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
    log("Eingabe muss durch 5 teilbar sein");
  } else {
    log("Eingabe ist gültig…");
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
