---
title: "ValidityState: Eigenschaft badInput"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`badInput`**-Eigenschaft der [ValidityState](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht umwandeln kann. Zum Beispiel, wenn Sie ein number-Input-Element haben, dessen Inhalt eine Zeichenkette ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht dem erwarteten Typ entspricht.

## Beispiele

### Erkennung fehlerhafter Eingaben

Im folgenden Beispiel wird die Gültigkeit eines [nummerischen Eingabeelements](/de/docs/Web/HTML/Reference/Elements/input/number) überprüft. Wenn der Benutzer anstelle einer Zahl Text eingibt, schlägt die Validierung der Einschränkungen des Elements fehl, und die Styles, die auf [`input:invalid`](/de/docs/Web/CSS/Reference/Selectors/:invalid) zutreffen, werden angewendet. Das [`<pre>`](/de/docs/Web/HTML/Reference/Elements/pre)-Element oberhalb der Eingabe zeigt die Validierungsnachricht an, wenn die Eigenschaft `badInput` des Elements auf `true` ausgewertet wird:

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
    log(`Bad input detected: ${userInput.validationMessage}`);
  }
});
```

{{EmbedLiveSample("displaying_validity_state", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- ValidityState [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError)-Eigenschaften.
- [Leitfaden: Validierung von Einschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
