---
title: "ValidityState: badInput Eigenschaft"
short-title: badInput
slug: Web/API/ValidityState/badInput
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`badInput`** Eigenschaft des [ValidityState](/de/docs/Web/API/ValidityState) Interfaces zeigt an, ob der Benutzer eine Eingabe gemacht hat, die der Browser nicht umwandeln kann. Zum Beispiel, wenn Sie ein Zahleneingabe-Element haben, dessen Inhalt ein String ist.

## Wert

Ein boolean, der `true` ist, wenn das `ValidityState` Objekt nicht dem erwarteten Typ entspricht.

## Beispiele

### Erkennung von fehlerhafter Eingabe

Das folgende Beispiel überprüft die Gültigkeit eines [zahleneingabe Elements](/de/docs/Web/HTML/Element/input/number).
Wenn der Benutzer Text anstelle einer Zahl eingibt, schlägt die Erfüllung der Eingabekriterien fehl, und die dem [`input:invalid`](/de/docs/Web/CSS/:invalid) entsprechenden Stile werden angewendet.
Das [`<pre>`](/de/docs/Web/HTML/Element/pre) Element über der Eingabe zeigt die Validierungsnachricht an, wenn die Eigenschaft `badInput` auf `true` ausgewertet wird:

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
- [Leitfaden: Eingabebeschränkungen](/de/docs/Web/HTML/Constraint_validation)
- [Anleitung: Validierung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
