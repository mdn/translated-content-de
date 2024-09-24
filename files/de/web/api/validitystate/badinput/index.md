---
title: "ValidityState: badInput-Eigenschaft"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`badInput`**-Eigenschaft der [ValidityState](/de/docs/Web/API/ValidityState)-Schnittstelle gibt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann. Zum Beispiel, wenn Sie ein Nummern-Eingabefeld haben, dessen Inhalt eine Zeichenkette ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht dem erwarteten Typ entspricht.

## Beispiele

### Erkennung von fehlerhaften Eingaben

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Wenn der Benutzer statt einer Zahl Text eingibt, schlägt die Validierung des Elements fehl und die Stile, die auf [`input:invalid`](/de/docs/Web/CSS/:invalid) zutreffen, werden angewendet.
Das [`<pre>`](/de/docs/Web/HTML/Element/pre)-Element oberhalb der Eingabe zeigt die Validierungsmeldung an, wenn die `badInput`-Eigenschaft des Elements zu `true` auswertet:

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

- ValidityState [valid](/de/docs/Web/API/ValidityState/valid), [customError](/de/docs/Web/API/ValidityState/customError)-Eigenschaften.
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Tutorial: Formular-Datenvalidierung](/de/docs/Learn/Forms/Form_validation)
