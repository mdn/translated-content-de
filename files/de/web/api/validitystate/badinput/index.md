---
title: "ValidityState: badInput-Eigenschaft"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`badInput`**-Eigenschaft des [ValidityState](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht konvertieren kann. Zum Beispiel, wenn Sie ein Zahleneingabefeld haben, dessen Inhalt ein String ist.

## Wert

Ein Boolean, der `true` ist, wenn das `ValidityState`-Objekt nicht dem erwarteten Typ entspricht.

## Beispiele

### Erkennen von fehlerhafter Eingabe

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Reference/Elements/input/number). Wenn der Benutzer statt einer Zahl einen Text eingibt, schlägt die Überprüfung der Eingabebedingung fehl, und die Stile, die auf [`input:invalid`](/de/docs/Web/CSS/:invalid) zutreffen, werden angewendet. Das [`<pre>`](/de/docs/Web/HTML/Reference/Elements/pre)-Element oberhalb der Eingabe zeigt die Validierungsmeldung an, wenn die Eigenschaft `badInput` den Wert `true` hat:

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
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
- [Anleitung: Formulardatenvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
