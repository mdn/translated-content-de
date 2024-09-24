---
title: "ValidityState: Eigenschaft rangeUnderflow"
short-title: rangeUnderflow
slug: Web/API/ValidityState/rangeUnderflow
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`rangeUnderflow`**-Eigenschaft der [`ValidityState`](/de/docs/Web/API/ValidityState)-Schnittstelle zeigt an, ob der Wert eines {{HTMLElement("input")}}, nachdem er vom Benutzer bearbeitet wurde, nicht den durch das [`min`](/de/docs/Web/HTML/Attributes/min)-Attribut des Elements gesetzten Beschränkungen entspricht.

Wenn das Feld numerischer Natur ist, einschließlich der Typen {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} und {{HTMLElement("input/range", "range")}} und ein `min`-Wert festgelegt ist, wird die `rangeUnderflow`-Eigenschaft wahr sein, wenn der Wert nicht den durch den [`min`](/de/docs/Web/HTML/Attributes/step)-Wert gesetzten Beschränkungen entspricht.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` nicht den Beschränkungen entspricht.

## Beispiele

### Eingabe mit numerischem Underflow

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Eine Beschränkung wurde mit dem [`min`-Attribut](/de/docs/Web/HTML/Element/input/number#min) hinzugefügt, das einen Mindestwert von `18` für die Eingabe festlegt.
Wenn der Benutzer eine Zahl kleiner als 18 eingibt, schlägt die Beschränkungsprüfung fehl, und die Stile, die auf die CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} passen

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
<pre id="log">Validierung hier protokolliert...</pre>
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
    log("Nummer ist zu niedrig!");
  } else {
    log("Gültig…");
  }
});
```

{{EmbedLiveSample("input_with_numeric_underflow", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ValidityState.rangeOverflow")}}
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [`step`-Attribut](/de/docs/Web/HTML/Attributes/step)
- [`max`-Attribut](/de/docs/Web/HTML/Attributes/max)
