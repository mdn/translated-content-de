---
title: "HTMLInputElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die minimale Anzahl von Zeichen (in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}) an, die für den Wert des {{HTMLElement("input")}}-Elements erforderlich sind, um gültig zu sein. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements wider. `-1` bedeutet, dass keine Mindestlängenanforderung besteht.

> [!NOTE]
> Wenn das Eingabefeld einen Wert hat und dieser Wert weniger Zeichen enthält, als das `minlength`-Attribut erfordert, wird das Element als ungültig betrachtet und die [`tooShort`](/de/docs/Web/API/ValidityState/tooShort)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wird `true` sein.

## Wert

Eine Zahl, die das `minlength` des Elements angibt, wenn vorhanden, oder `-1`.

## Beispiel

Angenommen, folgendes HTML ist gegeben:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den Wert des `minlength`-Attributs des `<input>`-Elements abzurufen oder festzulegen:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's minLength: ${inputElement.minLength}`); // "Element's minlength: 8"
inputElement.minLength = 12; // updates the element's minlength attribute value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)
- [`ValidityState.tooShort`](/de/docs/Web/API/ValidityState/tooShort)
