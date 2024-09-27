---
title: "ValidityState: badInput-Eigenschaft"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`badInput`**-Eigenschaft der [ValidityState](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht umwandeln kann. Zum Beispiel, wenn Sie ein Zahleneingabeelement haben, dessen Inhalt eine Zeichenkette ist.

## Wert

Ein Boolean, der `true` ist, wenn das `ValidityState`-Objekt nicht dem erwarteten Typ entspricht.

## Beispiele

### Schlechte Eingabe erkennen

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Wenn der Benutzer Text anstelle einer Zahl eingibt, schlägt die Einschränkungsvalidierung des Elements fehl, und die Stile, die zu [`input:invalid`](/de/docs/Web/CSS/:invalid) passen, werden angewendet.
Das [`<pre>`](/de/docs/Web/HTML/Element/pre)-Element oberhalb der Eingabe zeigt die Validierungsnachricht an, wenn die Eigenschaft `badInput` des Elements auf `true` bewertet wird:

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
<input type="number" id="age" />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.badInput) {
    log("Bad input detected: " + userInput.validationMessage);
  }
});
```

{{EmbedLiveSample("displaying_validity_state", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- ValidityState [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError) Eigenschaften.
- [Leitfaden: Beschränktheitsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Anleitung: Validierung von Formulardaten](/de/docs/Learn/Forms/Form_validation)
