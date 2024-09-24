---
title: "HTMLInputElement: minLength-Eigenschaft"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

Die **`minLength`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle gibt die Mindestanzahl von Zeichen (in UTF-16 Codeeinheiten) an, die erforderlich sind, damit der Wert des {{HTMLElement("input")}}-Elements gültig ist. Sie spiegelt das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements wider. `-1` bedeutet, dass keine Mindestlängenanforderung besteht.

> [!NOTE]
> Wenn das Eingabefeld einen Wert hat und dieser Wert weniger Zeichen enthält als das `minlength`-Attribut erfordert, wird das Element als ungültig betrachtet, und die {{domxref("ValidityState")}}-Objekteigenschaft {{domxref("ValidityState.tooShort", "tooShort")}} wird `true` sein.

## Wert

Eine Zahl, die das `minlength`-Attribut des Elements darstellt, falls vorhanden, oder `-1`.

## Beispiel

Angenommen, folgendes HTML liegt vor:

```html
<p>
  <label for="password">Ihr Passwort</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

Sie können die `minLength`-Eigenschaft verwenden, um den Wert des `minlength`-Attributs des `<input>`-Elements abzurufen oder festzulegen:

```js
const inputElement = document.querySelector("#password");
console.log(`Element's minLength: ${inputElement.minLength}`); // "Element's minlength: 8"
inputElement.minLength = 12; // aktualisiert den Wert des minlength-Attributs des Elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.maxLength")}}
- {{domxref("ValidityState.tooShort")}}
