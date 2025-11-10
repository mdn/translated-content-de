---
title: "ValidityState: badInput-Eigenschaft"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`badInput`**-Eigenschaft der [ValidityState](/de/docs/Web/API/ValidityState)-Schnittstelle zeigt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann. Zum Beispiel, wenn Sie ein Zahleneingabefeld haben, dessen Inhalt eine Zeichenkette ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn das `ValidityState`-Objekt nicht dem erwarteten Typ entspricht.

## Beispiele

### Erkennung von fehlerhaften Eingaben

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabefelds](/de/docs/Web/HTML/Reference/Elements/input/number).
Wenn der Benutzer Text anstelle einer Zahl eingibt, schlägt die Einschränkungsvalidierung fehl, und die Stile, die mit [`input:invalid`](/de/docs/Web/CSS/Reference/Selectors/:invalid) übereinstimmen, werden angewendet.
Das [`<pre>`](/de/docs/Web/HTML/Reference/Elements/pre)-Element über dem Eingabefeld zeigt die Validierungsnachricht an, wenn die `badInput`-Eigenschaft des Elements zu `true` ausgewertet wird:

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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Anleitung: Formular-Datenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
