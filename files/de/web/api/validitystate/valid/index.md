---
title: "ValidityState: gültige Eigenschaft"
short-title: gültig
slug: Web/API/ValidityState/valid
l10n:
  sourceCommit: e8805a6eb0b2af30cfd4ec54c30261f7e5f8163e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`valid`**-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Interfaces zeigt an, ob der Wert eines {{HTMLElement("input")}}-Elements alle seine Validierungsanforderungen erfüllt und daher als gültig angesehen wird.

Wenn `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls gilt die {{cssxref(":invalid")}} CSS-Pseudoklasse.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der `ValidityState` allen Beschränkungen entspricht.

## Beispiele

### Anzeigen des Gültigkeitszustands

Das folgende Beispiel überprüft die Gültigkeit eines [numerischen Eingabeelements](/de/docs/Web/HTML/Element/input/number).
Eine Einschränkung wurde mit dem [`min`-Attribut](/de/docs/Web/HTML/Element/input/number#min) hinzugefügt, das einen Mindestwert von `18` für die Eingabe festlegt.
Wenn der Benutzer einen Wert eingibt, der keine Zahl größer als 17 ist, schlägt die Einschränkungsvalidierung fehl, und die Styles, die `input:invalid` entsprechen, werden angewendet.

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
<pre id="log">Validierung wird hier protokolliert...</pre>
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
    log("Eingabe OK…");
  } else {
    log("Ungültige Eingabe erkannt…");
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
- [Formulare: Datenformularvalidierung](/de/docs/Learn/Forms/Form_validation)
