---
title: "HTMLInputElement: maxLength-Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die maximale Anzahl von Zeichen (in UTF-16 Codeeinheiten) an, die für den Wert des {{HTMLElement("input")}}-Elements eingegeben werden dürfen, und die maximale Anzahl von Zeichen, die für den Wert gültig sind. Sie spiegelt das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut des Elements wider. `-1` bedeutet, dass keine Begrenzung der Wertelänge existiert.

> [!NOTE]
> Browser verhindern im Allgemeinen, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Sollte die Länge länger sein, wird das Element als ungültig betrachtet, und die [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekt-Eigenschaft [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) wird `true` sein.

## Wert

Eine Zahl, die das `maxlength` des Elements repräsentiert, falls vorhanden, oder `-1`.

## Beispiel

Bei folgendem HTML:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den `maxlength`-Attributwert des `<input>`-Elements abzurufen oder festzulegen:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's maxLength: ${inputElement.maxLength}`); // "Element's maxlength: 20"
inputElement.maxLength = 18; // updates the element's maxlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.minLength`](/de/docs/Web/API/HTMLInputElement/minLength)
- [`ValidityState.tooLong`](/de/docs/Web/API/ValidityState/tooLong)
