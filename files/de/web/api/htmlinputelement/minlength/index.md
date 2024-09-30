---
title: "HTMLInputElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die minimale Anzahl von Zeichen (in UTF-16 Code-Einheiten) an, die erforderlich sind, damit der Wert des {{HTMLElement("input")}}-Elements gültig ist. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements wider. `-1` bedeutet, dass keine Mindestlängenanforderung besteht.

> [!NOTE]
> Wenn das Eingabefeld einen Wert hat und dieser Wert weniger Zeichen enthält als das `minlength`-Attribut erfordert, wird das Element als ungültig angesehen und die [`tooShort`](/de/docs/Web/API/ValidityState/tooShort)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts wird `true` sein.

## Wert

Eine Zahl, die das `minlength` des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Gegeben ist folgendes HTML:

```html
<p>
  <label for="password">Your password</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den `minlength`-Attributwert des `<input>`-Elements abzurufen oder festzulegen:

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
