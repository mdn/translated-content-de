---
title: "HTMLInputElement: maxLength Eigenschaft"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{ApiRef("HTML DOM")}}

Die **`maxLength`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die maximale Anzahl von Zeichen (in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}) an, die für den Wert des {{HTMLElement("input")}}-Elements eingegeben werden dürfen, sowie die maximale Anzahl von Zeichen, die für den Wert gültig sind. Sie spiegelt das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements wider. `-1` bedeutet, dass es keine Begrenzung der Länge des Wertes gibt.

> [!NOTE]
> Browser verhindern in der Regel, dass Benutzer mehr Zeichen eingeben, als das `maxlength`-Attribut erlaubt. Sollte die Länge länger sein, wird das Element als ungültig angesehen und die [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekteigenschaft [`tooLong`](/de/docs/Web/API/ValidityState/tooLong) wird `true` sein.

## Wert

Eine Zahl, die das `maxlength` des Elements angibt, falls vorhanden, oder `-1`.

## Beispiel

Angesichts des folgenden HTMLs:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `maxLength`-Eigenschaft verwenden, um den `<input>` `maxlength`-Attributwert abzurufen oder festzulegen:

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
