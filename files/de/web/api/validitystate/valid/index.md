---
title: "ValidityState: valid-Eigenschaft"
short-title: valid
slug: Web/API/ValidityState/valid
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`valid`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces gibt an, ob der Wert eines {{HTMLElement("input")}}-Elements alle seine Validierungsbeschränkungen erfüllt und daher als gültig angesehen wird.

Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls gilt die {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Wert

Ein Boolean, der `true` ist, wenn der `ValidityState` allen Beschränkungen entspricht.

## Beispiele

### Anzeige des Gültigkeitsstatus

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Eine Beschränkung wurde mit dem [`min`-Attribut](/de/docs/Web/HTML/Element/input/number#min) hinzugefügt, das einen Mindestwert von `18` für die Eingabe festlegt.
Wenn der Benutzer einen Wert eingibt, der keine Zahl größer als 17 ist, schlägt die Validierung der Einschränkung fehl und die Stile, die `input:invalid` entsprechen, werden angewendet.

```css
input:invalid {
  outline: red solid 3px;
}
input:valid {
  outline: palegreen solid 3px;
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
<input type="number" id="age" min="18" required />
```

```js
const userInput = document.getElementById("age");
const logElement = document.getElementById("log");

function log(text) {
  logElement.innerText = text;
}

userInput.addEventListener("input", () => {
  userInput.reportValidity();
  if (userInput.validity.valid) {
    log("Input OK…");
  } else {
    log("Bad input detected…");
  }
});
```

{{EmbedLiveSample("displaying_validity_state", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- ValidityState [badInput](/de/docs/Web/API/ValidityState/badInput), [customError](/de/docs/Web/API/ValidityState/customError) Eigenschaften.
- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
- [Formulare: Datenformularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
